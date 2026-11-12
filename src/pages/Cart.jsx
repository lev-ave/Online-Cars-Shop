import ProductCard from "../components/ProductCard"
import {Link} from 'react-router-dom'
import Header from "../components/Header";

function Cart({cart, removeFromCart, cartLength}){

    if (cart.length === 0) {
    return (
      <section className="mx-auto bg-[#3e0000] h-screen text-center">
        <Header cart={cartLength}/>
        <h1 className="text-3xl text-white font-bold"> Your Cart is Empty </h1>
        <p className="mt-3 text-gray-500"> You haven't added any products yet. </p>
        <Link to="/" className="mt-6 inline-block rounded-lg border border-white px-5 py-3 text-white hover:bg-white hover:text-[#3e0000]"> Continue Shopping </Link>
      </section>
    );
  }
    return(
        <div className="flex items-center justify-center bg-[#3e0000] text-white gap-x-5">
            {cart.map(item => <ProductCard product={item} removeFromCart={removeFromCart}/>)}
        </div>
    )
}

export default Cart;