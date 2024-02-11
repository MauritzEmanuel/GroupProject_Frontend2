import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext.jsx';
import { CartContext } from "../contexts/CartContext.jsx";
import '../cssFiles/checkOut.css';



const CheckOut = () => {
 
    const navigate = useNavigate(); 
    const { formData, updateFormData } = useFormContext();
    const { cart } = useContext(CartContext);     
    
    console.log(cart)

    const urlParams = new URLSearchParams(window.location.search);
    let totalPrice = parseInt(urlParams.get('totalPrice'));    
     totalPrice += 49

    const handleFormChange = (event) => {
        const { name, value, type, checked } = event.target;
        
        let updatedValue;
        if (type === 'checkbox') {
            updatedValue = checked;
        } else {
            updatedValue = value;
        }
        updateFormData({
            [name]: updatedValue
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        
        const checkoutData = JSON.stringify(formData);
        localStorage.setItem("checkoutData", checkoutData);
        
        navigate("/confirmation");

    };
      

    return (
        <>
            <div className="checkOut-content">
                
                <header className="checkOut-header">
                    <a className="header-a" href={`/products/:id`}>&lt; HANDLA MER</a>
                </header>

                <form>
                    <div className="checkOut-lev">
                        <h1 className="lev-h1">Leveranssätt</h1>
                        <div className="lev-border-cont">
                            <div className="lev-border">
                                <h3 className="lev-h3">Leveransalternativ</h3>
                                <div className="lev-cont-line">
                                    <div className="lev-line"></div>
                                </div>
                                <div className="lev-home">
                                    <div>
                                        <input 
                                            type="radio" 
                                            name="homeLev" 
                                            id="homeLev" 
                                            value={formData.homeLev}
                                            onChange={handleFormChange}
                                            required
                                        />
                                        <label htmlFor="homeLev">Hemleverans</label>
                                    </div>
                                    <p>49 kr</p>
                                    <p>Total Pris: {totalPrice}:-</p>

                                </div>
                                <div className="lev-cont-line">
                                    <div className="lev-line"></div>
                                </div>
                                <p className="lev-time">Leveransen tar 3-5 arbetsdagar</p>
                            </div>
                        </div>
                    </div>

                    <div className="checkOut-info">
                        <h1 className="info-h1">Dina personliga uppgifter</h1>
                        <div className="info-border-cont">
                            <div className="info-border">
                                <div className="info-divs">
                                    <label htmlFor="firstName">Förnamn: </label>
                                    <input 
                                        type="text" 
                                        id="firstName" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>

                                <div className="info-divs">
                                    <label htmlFor="lastName">Efternamn: </label>
                                    <input 
                                        type="text" 
                                        id="lastName" 
                                        name="lastName" 
                                        value={formData.lastName}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>
                                
                                <div className="info-divs">
                                    <label htmlFor="email">E-post: </label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        name="email" 
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>

                                <div className="info-cont-line">
                                    <div className="info-line"></div>
                                </div>

                                <div className="info-divs">
                                    <label htmlFor="streetName">Gatunamn: </label>
                                    <input 
                                        type="text" 
                                        id="streetName" 
                                        name="streetName" 
                                        value={formData.streetName}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>
                                
                                <div className="info-divs">
                                    <label htmlFor="streetNr">Gatunummer: </label>
                                    <input 
                                        type="number" 
                                        id="streetNr" 
                                        name="streetNr" 
                                        value={formData.streetNr}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>
                                
                                <div className="info-divs">
                                    <label htmlFor="zipCode">Postnummer: </label>
                                    <input 
                                        type="number" 
                                        id="zipCode" 
                                        name="zipCode" 
                                        pattern="[0-9]{5,}" 
                                        value={formData.zipCode}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>
                                
                                <div className="info-divs">
                                    <label htmlFor="county">Ort: </label>
                                    <input 
                                        type="text" 
                                        id="county" 
                                        name="county" 
                                        value={formData.county}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkOut-info">
                        <h1 className="info-h1">Betalnings uppgifter</h1>
                        <div className="info-border-cont">
                            <div className="info-border">
                                <div className="info-divs">
                                    <label htmlFor="cardName">Kortinnehavarens namn:</label>
                                    <input 
                                        type="text" 
                                        id="cardName" 
                                        name="cardName" 
                                        value={formData.cardName}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>

                                <div className="info-divs">
                                    <label htmlFor="cardNr">Kortnummer:</label>
                                    <input 
                                        type="number" 
                                        id="cardNr" 
                                        name="cardNr" 
                                        pattern="[0-9]{16,}" 
                                        value={formData.cardNr}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>

                                <div className="info-divs">
                                    <label htmlFor="ExpDate">Utgångsdatum:</label>
                                    <input 
                                        type="text" 
                                        id="ExpDate" 
                                        name="ExpDate" 
                                        pattern="\d{2}/\d{2}" 
                                        value={formData.ExpDate}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>

                                <div className="info-divs">
                                    <label htmlFor="cvvNr">CVV nummer:</label>
                                    <input 
                                        type="number" 
                                        id="cvvNr" 
                                        name="cvvNr" 
                                        pattern="[0-9]{3,}" 
                                        value={formData.cvvNr}
                                        onChange={handleFormChange}
                                        required 
                                    />
                                </div>

                            </div>
                        </div>

                        <div className="checkOut-btn">
                            <input 
                                type="submit" 
                                value="Bekräfta information" 
                                className="button" 
                                onChange={handleFormChange} 
                                onClick={handleFormSubmit}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default CheckOut