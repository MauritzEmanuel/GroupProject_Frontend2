import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useFormContext } from '../contexts/FormContext.jsx';
import '../cssFiles/checkOut.css';
import Logo from '../assets/Images/Logo/Logo-time-travelers.png'


const CheckOut = () => {

    const navigate = useNavigate(); // Skapa en instans av useNavigate

    const { formData, updateFormData } = useFormContext();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        updateFormData({
            [name]: newValue,
        });
        updateFormData({
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("checkoutData", JSON.stringify(formData));
        navigate("/confirmation");
    };



    return (
        <>
            <div>
                
                <header className="checkOut-header">
                    <a className="header-a" href={`/products/:id`}>&lt; HANDLA MER</a>
                    <img className='header-img' src={Logo} alt="Logo" />
                </header>

                <div className="checkOut-kart">
                    <h1 className="kart-h1">Din Varukorg</h1>
                    {/* Varukorgen här? */}

                    <div className="kart-cont-line">
                        <div className="kart-line"></div>
                    </div>

                    <div className="kart-div">
                        <p>Frakt</p> 
                        <p>49 kr</p>
                    </div>

                    <div className="kart-cont-line">
                        <div className="kart-line"></div>
                    </div>

                    <div className="kart-div">
                        <p>Att betala ink. moms</p> 
                        <p>+ 49 kr</p>
                    </div>
                </div>

                <div className="checkOut-lev">
                    <h1 className="lev-h1">Leveranssätt</h1>
                    <div className="lev-border-cont">
                        <div className="lev-border">
                            <h3 className="lev-h3">Leveransalternativ</h3>
                            <div className="lev-cont-line">
                                <div className="lev-line"></div>
                            </div>
                            <div className="lev-home">
                                <form>
                                    <input 
                                        type="radio" 
                                        name="hemleverans" 
                                        id="homeLev" 
                                        value={formData.homeLev}
                                        onChange={handleChange}
                                        required
                                    />
                                    <label for="homeLev">Hemleverans</label>
                                </form>
                                <p>49 kr</p>
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
                        <form className="info-border">
                            <div className="info-divs">
                                <label htmlFor="firstName">Förnamn: </label>
                                <input 
                                    type="text" 
                                    id="firstName" 
                                    name="firstName" 
                                    value={formData.firstName} 
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            
                            <div className="info-divs">
                                <label htmlFor="email">E-post: </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" 
                                    value={formData.email}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
                <div className="checkOut-info">
                    <h1 className="info-h1">Betalnings uppgifter</h1>
                    <div className="info-border-cont">
                        <form className="info-border">
                            <div className="info-divs">
                                <label htmlFor="cardName">Kortinnehavarens namn:</label>
                                <input 
                                    type="text" 
                                    id="cardName" 
                                    name="cardName" 
                                    value={formData.cardName}
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    required 
                                />
                            </div>

                        </form>
                    </div>

                    <div className="checkOut-btn">
                        <button className="button" onChange={handleChange} onClick={handleSubmit}>
                            Bekräfta information
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut