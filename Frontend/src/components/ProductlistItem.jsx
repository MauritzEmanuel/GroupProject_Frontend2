import React  from "react";
import "../cssFiles/products.css"

const ProductListItem = ({productData}) => {

    return(
        <li key={productData.id}>
            <img src={`http://localhost:1337${productData.image}`} alt={`Cover for ${productData.title}`} />
            <p className="p1">{productData.title}</p>
            <p className="p2">{productData.author}</p>
            <p className="p3">Pris: {productData.price}:- kr</p>
        </li>
    )
}

export default ProductListItem