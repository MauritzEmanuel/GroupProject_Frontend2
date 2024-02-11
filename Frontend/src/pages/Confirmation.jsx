import React, { useContext, useEffect } from "react";
import { useFormContext } from '../contexts/FormContext';
import Logo from '../assets/Images/Logo/Logo-time-travelers.png';
import Back from '../assets/Images/History/ValkommenAter.png';
import '../cssFiles/confirmation.css';
import '../cssFiles/checkOut.css';
import { useCart } from "../contexts/CartContext";

const Confirmation = () => {
    const { formData } = useFormContext();
    const { cart, clearCart } = useCart(); 

    useEffect(() => {
        console.log("Cart items:", cart);
    }, [cart]);

    let storedFormData = null;
    try {
        const storedData = localStorage.getItem("checkoutData");
        if (storedData) {
            storedFormData = JSON.parse(storedData);
        }
    } 
    catch (error) {
        console.error('Error parsing stored data:', error);
    }
    const handleShopMore = () => {
        clearCart();
    };

    return(
        <div className="conf-all">
            <header className="checkOut-header">
                <a className="header-a" href={`/products/:id`} onClick={handleShopMore}>&lt; HANDLA MER </a>
            </header>
            <div className="conf-thank">
                <h1 className="thank-h1">Tack för att just du handlade hos oss!</h1>
                <h2 className="thank-h2">Vi på Time Travelers är evigt tacksamma och hälsar dig</h2>
                <img className="thank-img" src={Back} alt="Back" />
            </div>
            
            <div className="conf-left-right">
                
                <div className="conf-left">
                    <h3 className="left-h3">Du har köpt:</h3>
                    <ul>
                        {cart.map(item => (
                            <li key={item.id}>{item.title}</li>
                        ))}
                    </ul>
                </div>

                <div className="conf-right">
                    <h3>Levereras till:</h3>
                    <p>Du valde {formData.homeLev}</p>
                    <p>Namn: {formData.firstName} {formData.lastName}</p>
                    <p>Address:</p>
                    <p>{formData.streetName} {formData.streetNr}</p>
                    <p>{formData.zipCode} {formData.county}</p>
                    <p>All information skickas även på mailen</p>
                    <p>{formData.email}</p>
                </div>
            </div>
        </div>
    )
}

export default Confirmation
