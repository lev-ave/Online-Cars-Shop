import { useParams, Link } from "react-router"
import { products } from "../data/Products";
import Header from "../components/Header";

function ProductDetails({onAddToCart}){
    const {productId} = useParams()
    
    const product = products.data.find(item => item.id === +productId)

     if (!product) {
    return (
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="text-2xl font-bold text-red-600"> Product Not Found </h1>
        <Link to="/" className="mt-4 inline-block text-[#3e0000] hover:underline"> Back to Home </Link>
      </div>
    );
  }
    return (
    <section className="mx-auto bg-[#3e0000] h-screen">
        <Header/>
      <Link to="/" className="mb-6 ml-5 inline-block text-md text-white hover:underline">← Back to Products </Link>
      <div className="flex flex-row items-center justify-center gap-6 rounded-2xl bg-[#3e0000] p-6 shadow-sm md:grid-cols-2">
        <img src={product.image} className="h-60 w-120 text-white rounded-xl object-cover"/>
        <div>
          <h1 className="mt-4 text-3xl font-bold text-white"> {product.name} </h1>
          <p className="mt-6 text-2xl font-bold text-white"> ${product.price} </p>
          <button onClick={() => onAddToCart(product)} className="mt-6 rounded-lg bg-white hover:bg-[#3e0000] px-6 py-3 text-[#3e0000] hover:text-white"> Add to Cart </button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails