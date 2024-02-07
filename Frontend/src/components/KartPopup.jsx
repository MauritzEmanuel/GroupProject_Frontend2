import React from 'react';
import '../cssFiles/kart.css';

const KartPopup = ({ isKartPopupVisible, onClose, cartItems }) => {
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
                {cartItems && cartItems.length > 0 ? (
                    <div>
                        {cartItems.map((item) => (
                            <div key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title}</p>
                                <p>Price: {item.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Your cart is empty.</p>
                )}
            </div>
            <button className='checkout-button' onClick={handleCheckout}>
                Check out
            </button>
        </div>
    );
};

export default KartPopup;
