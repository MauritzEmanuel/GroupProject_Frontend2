import React from "react";
import '../cssFiles/checkOut.css';
import Logo from '../assets/Images/Logo/Logo-time-travelers.png'


const CheckOut = () => {

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
                    <div className="kart-div">
                        <p>Frakt</p> 
                        <p>49 kr</p>
                    </div>
                    
                </div>

                <div className="checkOut-lev">
                    <h1>Leveranssätt</h1>
                    <div>
                        <h3>Leveransalternativ</h3>
                        <p>Hemleverans</p> <p>49 kr</p>
                        <p>Leveransen tar 2-4 arbetsdagar</p>
                    </div>
                </div>

                <div  className="checkOut-form">
                    <h1>Dina uppgifter</h1>
                    <form>
                        <label htmlFor="firstName">Förnamn:</label>
                        <input type="text" id="firstName" name="firstName" required />

                        <label htmlFor="lastName">Efternamn:</label>
                        <input type="text" id="lastName" name="lastName" required />

                        <label htmlFor="email">E-post:</label>
                        <input type="email" id="email" name="email" required />

                        <label htmlFor="streetName">Gatunamn:</label>
                        <input type="text" id="streetName" name="streetName" required />

                        <label htmlFor="streetNr">Gatunummer:</label>
                        <input type="number" id="streetNr" name="streetNr" required />

                        <label htmlFor="zipCode">Postnummer:</label>
                        <input type="number" id="zipCode" name="zipCode" required /> 

                        <label htmlFor="county">Ort:</label>
                        <input type="text" id="county" name="county" required />
                    </form>
                </div>
                <div className="checkOut-pay">
                    <h1>Betalnings uppgifter</h1>
                    <form>
                        <label htmlFor="cardNr">Kortnummer:</label>
                        <input type="number" id="cardNr" name="cardNr" value="0000 0000 0000 0000" min="16" required />

                        <label htmlFor="ExpDate">Utgångsdatum:</label>
                        <input type="text" id="ExpDate" name="ExpDate" value="YY/MM" min="5" required />

                        <label htmlFor="ccvNr">CCV nummer:</label>
                        <input type="number" id="ccvNr" name="ccvNr" required />

                        <input type="button" value="Betala" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CheckOut