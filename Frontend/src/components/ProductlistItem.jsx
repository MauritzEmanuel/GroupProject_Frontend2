import React  from "react";
import "../cssFiles/products.css"

const ProductListItem = ({productData}) => {

    return(
        /*<div className='HelaSkiten'>
            <div>*/
                <li key={productData.id}>
                    <div className='SuperBox'>
                        <img src={`http://localhost:1337${productData.image}`} alt={`Cover for ${productData.title}`} />
                        <p className="Title">{productData.title}</p>
                        <p className="Author">{productData.author}</p>
                    </div>
                    <div className='Box'>
                        <p className="Price">Pris: {productData.price}:-</p>
                    </div>
                </li>
            /*</div>
            <div className='Knapparna'>
                <button>Shop</button>
                <button>Läs mer</button>
            </div>
        </div>*/

    )
}

export default ProductListItem