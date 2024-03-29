import React, {useState} from 'react';
import '../cssFiles/kart.css';
import { CartContext } from '../contexts/CartContext.jsx'; 
import InfoPopup from './InfoPopup';
import axios from 'axios';


const ProductListItem = ({ productData }) => {
    const { addToCart } = React.useContext(CartContext); 
    const [isInfoPopupVisible, setIsInfoPopupVisible] = useState(false);
    const [productDetails, setProductDetails] = useState({});

    const handleAddToCart = () => {
        addToCart(productData);
    };

    const handleMoreInfo = async () => {
        try {
            const response = await axios.get(`http://localhost:1337/api/products/${productData.id}?populate=*`);
            const product = response.data.data;
    
            const formattedProductDetails = {
                title: product.attributes.Title,
                author: product.attributes.Author,
                description: product.attributes.Description,
                price: product.attributes.Price,
                brand: product.attributes.Brand,
                image: product.attributes.Image?.data.attributes.url, 
            };
    
            setProductDetails(formattedProductDetails);
            setIsInfoPopupVisible(true);
        } catch (error) {
            console.error("Error fetching product details:", error);
        }
    };
    

    return (
        <div className='Productlist-content'>
            <div className="Produkterna">
                <li key={productData.id} className="cart-item">
                    <div className='SuperBox'>
                        <img src={`http://localhost:1337${productData.image}`} alt={`Cover for ${productData.title}`} />
                        <p className="Title">{productData.title}</p>
                        <p className="Author">{productData.author}</p>
                    </div>
                    <div className='Box'>
                        <p className="Price">Pris: {productData.price}:-</p>
                    </div>
                </li>
            </div>
            <div className='Knapparna'>
                <button className='InfoButton' onClick={handleMoreInfo}>Mer info</button>
                <button className='AddToCart'  onClick={handleAddToCart}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="bi bi-cart4" stroke="#000000" strokeWidth="0.00016"> {/* Fixed strokeWidth attribute */}
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </g>
                </svg>       
                </button>
            </div>
            {isInfoPopupVisible && (
                <InfoPopup
                    details={productDetails}
                    onClose={() => setIsInfoPopupVisible(false)}
                    onAddToCart={addToCart}
                />
            )}
        </div>
    );
}

export default ProductListItem;

