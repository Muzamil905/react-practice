import { useParams } from "react-router-dom";
import { products } from "../data/products";


function ProductDetails(){
    const { id } = useParams();

    const product = products.find((product) => product.id === Number(id))
    console.log(product);

    if(!product){
        return <h1>Product Not Found</h1>
    }


    return(
        <>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
        </>
    )
}

export default ProductDetails