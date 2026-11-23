import ProductCard from "../components/ProductCard"
import {Link} from 'react-router-dom'
import Header from "../components/Header";

function Cart({cart, removeFromCart, cartLength}){

const total = cart.reduce((sum, product) => {
    return sum + Number(product.price);
  }, 0);

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
        <div className="flex flex-col justify-between bg-[#3e0000] h-screen text-white py-10">
          <div className="flex flex-row gap-10 px-5">
            {cart.map(item => <ProductCard product={item} removeFromCart={removeFromCart}/>)}
          </div>
          <div className="mt-10 flex items-end px-10 justify-between border-t pt-6">
            <span className="text-xl font-semibold">
              Total:
            </span>
            <span className="text-2xl font-bold">
              ${total.toFixed(3)}
            </span>
          </div>
        </div>
    )
}

export default Cart;