import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext.jsx';
import '../cssFiles/kart.css';

const KartPopup = ({ isKartPopupVisible, onClose }) => {
  const { cart, removeFromCart, updateQuantity} = useContext(CartContext);
  const handleCheckout = () => {

    const totalPrice = calculateTotalCartPrice(); 
    console.log("Total Price:", totalPrice);
    window.location.href = `/CheckOut?totalPrice=${totalPrice}`;
  };

  const handleQuantityChange = (item, quantity) => {
    updateQuantity(item.id, quantity);
  };

  const calculateTotalPrice = (item) => {
    if (!item || typeof item.price !== 'number' || typeof item.quantity !== 'number') {
      return 0;
    }
    return item.price * item.quantity;
  };

  const calculateTotalCartPrice = () => {
    let total = 0;
  cart.forEach((item) => {
    const totalPrice = calculateTotalPrice(item);
    if (!isNaN(totalPrice)) { 
      total += totalPrice;
    }
  });
  return total;
  };

  return (
    <div className={`varukorg ${isKartPopupVisible ? 'visible' : ''}`}>
      <div className='content'>
        <h1>Varukorg - Produkter {cart.length}</h1>
        <button className='close-button' onClick={onClose}>X</button>
        <hr />
        {cart && cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img style={{ width: "100px", height: "165px" }} src={`http://localhost:1337${item.image}`} alt={item.title} />
                <div className="item-details">
                  <p>{item.title}</p>
                  <p>Pris: {item.price}:-</p>
                  <input
                    type="number"
                    value={item.quantity || ''}
                    onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                  />
                  <p>Total: {calculateTotalPrice(item)}:-</p>
                  <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
                </div>
              </div>
            ))}
            <p>Total Pris: {calculateTotalCartPrice()}:-</p>
          </div>
        ) : (
          <p>Din varukorg är tom.</p>
        )}
      </div>
      <button className='checkout-button' onClick={handleCheckout}>
        Checka ut
      </button>
    </div>
  );
};

export default KartPopup;
