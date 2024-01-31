import React  from "react";

const ProductListItem = ({productData}) => {

    console.log(productData);

    return(
        <li key={productData.id}>
            <h2>{productData.title}</h2>
            <h3>{productData.author}</h3>
            <p>{productData.image}</p>
            <p>Pris: {productData.price} KR</p>
        </li>
    )
}

export default ProductListItem