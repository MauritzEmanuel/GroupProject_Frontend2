import React  from "react";

const ProductListItem = ({ product }) => {

    return(
        <li key={product.id}>
            <h2>{product.Title}</h2>
            <h3>{product.Author}</h3>
            <p>{product.Image}</p>
            <p>{product.Description}</p>
            <p>Pris: {product.price} KR</p>
        </li>
    )
}

export default ProductListItem