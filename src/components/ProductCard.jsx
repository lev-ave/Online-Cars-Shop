import {Link, useLocation} from 'react-router'

function ProductCard ({product, onAddToCart, removeFromCart}) {
    const location = useLocation()
    const isCartPage = location.pathname === '/cart'
    return(
        <Link to={`/products/${product.id}`}>
            <div className="border border-white overflow-hidden rounded-2xl shadow-2xl w-75 hover:-translate-y-1">
                <img src={product.image} alt={product.name} className="w-75 h-42" />
                <div className="p-5">
                    <p className="text-white text-xl font-semibold">{product.name}</p>
                    <div className="flex flex-row items-center justify-between mt-2">
                        <p className="text-xl font-semibold">${product.price}</p>
                        { isCartPage ? ( <button 
                        onClick={(e) => {
                            e.preventDefault()
                            removeFromCart(product)
                        }}
                        className="border border-white font-sm cursor-pointer rounded-2xl h-8 w-30">Remove</button>
                        ):
                        <button onClick={(e) => {
                            e.preventDefault()
                            onAddToCart(product)}} className="border border-white font-sm cursor-pointer rounded-2xl h-8 w-30">Add To Cart</button>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;