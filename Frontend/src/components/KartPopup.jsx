import React, {useContext} from 'react';
import { useCart } from '../contexts/CartContext.jsx';
import { CartContext } from '../contexts/CartContext.jsx';
import '../cssFiles/kart.css';


const KartPopup = ({ isKartPopupVisible, onClose }) => {
  const { cart, removeFromCart } = useContext(CartContext)

    const handleCheckout = () => {
        // Redirect to the checkout page
        window.location.href = '/CheckOut'; // Replace '/CheckOut.jsx' with the actual path to your checkout page
    };

    return (
        <div className={`varukorg ${isKartPopupVisible ? 'visible' : ''}`}>
            <div className='content'>
                <h1>Varukorg</h1>
                <button className='close-button' onClick={onClose}>X</button>
                <hr />
                {cart && cart.length > 0 ? (
                    <div>
                        {cart.map((item) => (
                            <div key={item.id}>
                                <img src={`http://localhost:1337${item.image}`} alt={item.title} />
                                <p>{item.title}</p>
                                <p>Price: {item.price}</p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                            </div>
                        ))}
                    </div>
                ) : (
                  
                    <p>Your cart is empty</p>
                )}
            </div>
            <button className='checkout-button' onClick={handleCheckout}>
                Check out
            </button>
        </div>
    );
};

export default KartPopup;
