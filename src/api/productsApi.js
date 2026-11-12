import { products } from "../data/Products"

export function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}