// import { useState, useEffect } from "react";
// import ProductCard from "./ProductCard";
// import { fetchProducts } from "../api/productsApi";

// function ProductList ({onAddToCart}) {

//     const [data, setData] = useState({});
//     const [isLoading, setIsLoading] = useState(true);
//     const [isError, setIsError] = useState(false);

//     useEffect(() => {
//         async function loadProducts(params) {
//             try {
//                 setIsLoading(true);
//                 setIsError(false);
//                 const productsData = await fetchProducts();
//                 setData(productsData)
//             } catch {
//                 setIsError(true)
//             } finally {
//                 setIsLoading(false)
//             }
//         } 
//         loadProducts();
//     }, [])
//     if(isLoading){
//         return(
//             <section className="mt-5">
//                 <p>Loading ...</p>
//             </section>
//         )
//     }
//     if(isError){
//         return(
//             <section className="mt-5">
//                 <p>Error</p>
//             </section>
//         )
//     }
//     return(
//         <section className="bg-[#3e0000] scroll-animate">
//             <div className="flex items-center justify-center flex-col">
//                 <h2 className="font-bold text-3xl">Our Cars</h2>
//                 <p className="text-base mt-2">Choose the perfect car for you</p>
//             </div>
//             {isLoading ? <p>Loading ...</p> : isError ? <p>Error</p> : (
//             <div className="flex items-center justify-center">
//                 <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-7">
//                     {data?.data?.map(item => (
//                         <ProductCard
//                             product={item}
//                             key={item.id}
//                             onAddToCart={onAddToCart}
//                         />
//                     ))}
//                 </div>
//             </div>
//             )}
//         </section>
//     )
// }

// export default ProductList;


import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../api/productsApi";

function ProductList({ onAddToCart }) {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const sliderRef = useRef(null);

    useEffect(() => {
        async function loadProducts() {
            try {
                setIsLoading(true);
                setIsError(false);
                const productsData = await fetchProducts();
                setData(productsData);
            } catch {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        loadProducts();
    }, []);

    const scroll = (direction) => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({
                left: direction === "left" ? -320 : 320,
                behavior: "smooth",
            });
        }
    };

    if (isLoading) return <p>Loading ...</p>;
    if (isError) return <p>Error</p>;

    return (
        <section className="bg-[#3e0000] text-white py-10 scroll-animate">

            <div className="flex items-center justify-center flex-col">
                <h2 className="font-bold text-3xl">Our Cars</h2>
                <p className="text-base mt-2">
                    Choose the perfect car for you
                </p>
            </div>

            <div className="relative mt-7 px-12">

                {/* Left Arrow */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-1 top-1/2 -translate-y-1/2 z-10 text-white rounded-full w-10 h-10"
                >
                    &#10094;
                </button>

                {/* Products */}
                <div
                    ref={sliderRef}
                    className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4"
                >
                    {data?.data?.map(item => (
                        <ProductCard
                            product={item}
                            key={item.id}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>

                {/* Right Arrow */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-1 top-1/2 -translate-y-1/2 z-10 text-white rounded-full w-10 h-10"
                >
                    &#10095;
                </button>

            </div>
        </section>
    );
}

export default ProductList;
