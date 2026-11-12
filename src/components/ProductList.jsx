import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/productsApi";

function ProductList ({onAddToCart}) {

    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function loadProducts(params) {
            try {
                setIsLoading(true);
                setIsError(false);
                const productsData = await fetchProducts();
                setData(productsData)
            } catch {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        } 
        loadProducts();
    }, [])
    if(isLoading){
        return(
            <section className="mt-5">
                <p>Loading ...</p>
            </section>
        )
    }
    if(isError){
        return(
            <section className="mt-5">
                <p>Error</p>
            </section>
        )
    }
    return(
        <section className="bg-[#3e0000] scroll-animate">
            <div className="flex items-center justify-center flex-col">
                <h2 className="font-bold text-3xl">Our Cars</h2>
                <p className="text-base mt-2">Choose the perfect car for you</p>
            </div>
            {isLoading ? <p>Loading ...</p> : isError ? <p>Error</p> : (
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-7">
                    {data?.data?.map(item => (
                        <ProductCard
                            product={item}
                            key={item.id}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>
            </div>
            )}
        </section>
    )
}

export default ProductList;