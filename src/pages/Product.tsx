import { Link } from "react-router-dom"
import { products } from "../data/products"



function Product(){

    
    
    
    
    return(
        <div>
        <ol>

        {products.map((product) => {
            return <li key={product.id}>Name: {product.name} | Price: {product.price} | Description {product.description} <Link to={`/items/${product.id}`}>View Product</Link></li>
        })}
        </ol>
        </div>
    )
}

export default Product