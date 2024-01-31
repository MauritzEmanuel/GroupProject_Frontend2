import React from "react";

const ProductListItem = ({ product }) => {
    <li key={product.id}>
        <h2>{product.Title}</h2>
        <h3>{product.Auther}</h3>
        <p>{product.Image}</p>
        <p>{product.Description}</p>
        <p>Pris: {product.Price} KR</p>
    </li>
}

export default ProductListItem