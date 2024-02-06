import React from "react";
// import { useHistory } from "react-router-dom";
import '../cssFiles/checkOut.css';
import Logo from '../assets/Images/Logo/Logo-time-travelers.png'


const CheckOut = () => {

    // const history = useHistory(); // Skapa en instans av useHistory

    // const [formData, setFormData] = useState({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     streetName: "",
    //     streetNr: "",
    //     zipCode: "",
    //     county: "",
    //     cardNr: "",
    //     ExpDate: "",
    //     ccvNr: "",
    // });

    // const handleChange = (e) => {
    //     setFormData({
    //     ...formData,
    //     [e.target.name]: e.target.value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Spara formulärdatan i localStorage
    //     localStorage.setItem("checkoutData", JSON.stringify(formData));
    //     // Navigera till bekräftelsesidan
    //     history.push("/confirmation");
    // };



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
                    <h1 className="lev-h1">Leveranssätt</h1>
                    <div className="lev-border-cont">
                        <div className="lev-border">
                            <h3 className="lev-h3">Leveransalternativ</h3>
                            <div className="lev-cont-line">
                                <div className="lev-line"></div>
                            </div>
                            <div className="lev-home">
                                <form action="" >
                                    <input type="radio" name="homeLev" id="homeLev" value="homeLev"/>
                                    <label for="homeLev">Hemleverans</label>
                                </form>
                                <p>49 kr</p>
                            </div>
                            <div className="lev-cont-line">
                                <div className="lev-line"></div>
                            </div>
                            <p className="lev-time">Leveransen tar 2-4 arbetsdagar</p>
                        </div>
                    </div>
                </div>

                <div className="checkOut-info">
                    <h1 className="info-h1">Dina personliga uppgifter</h1>
                    <div className="info-border-cont">
                        <form className="info-border">
                            <div className="info-divs">
                                <label htmlFor="firstName">Förnamn: </label>
                                <input type="text" id="firstName" name="firstName" required />
                            </div>

                            <div className="info-divs">
                                <label htmlFor="lastName">Efternamn: </label>
                                <input type="text" id="lastName" name="lastName" required />
                            </div>
                            
                            <div className="info-divs">
                                <label htmlFor="email">E-post: </label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="info-cont-line">
                                <div className="info-line"></div>
                            </div>

                            <div className="info-divs">
                                <label htmlFor="streetName">Gatunamn: </label>
                                <input type="text" id="streetName" name="streetName" required />
                            </div>
                            
                            <div className="info-divs">
                                <label htmlFor="streetNr">Gatunummer: </label>
                                <input type="number" id="streetNr" name="streetNr" required />
                            </div>
                            
                            <div className="info-divs">
                                <label htmlFor="zipCode">Postnummer: </label>
                                <input type="number" id="zipCode" name="zipCode" required />
                            </div>
                             
                            <div className="info-divs">
                                <label htmlFor="county">Ort: </label>
                                <input type="text" id="county" name="county" required />
                            </div>
                            
                        </form>
                    </div>
                    
                </div>
                <div className="checkOut-info">
                    <h1 className="info-h1">Betalnings uppgifter</h1>
                    <div className="info-border-cont">
                        <form className="info-border">
                            <div className="info-divs">
                                <label htmlFor="cardNr">Kortnummer:</label>
                                <input type="number" id="cardNr" name="cardNr" value="0000 0000 0000 0000" min="16" required />
                            </div>

                            <div className="info-divs">
                                <label htmlFor="ExpDate">Utgångsdatum:</label>
                                <input type="text" id="ExpDate" name="ExpDate" min="5" required />
                            </div>

                            <div className="info-divs">
                                <label htmlFor="ccvNr">CCV nummer:</label>
                                <input type="number" id="ccvNr" name="ccvNr" required />
                            </div>

                        </form>
                    </div>

                    <div className="checkOut-btn">
                        <input 
                            className="input" 
                            type="submit" 
                            name="skicka" 
                            id="skicka" 
                            value="Bekräfta information" 
                            // onClick={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOut