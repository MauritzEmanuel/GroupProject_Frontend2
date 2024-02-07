import React from "react";
import { useFormContext } from '../contexts/FormContext';
import Logo from '../assets/Images/Logo/Logo-time-travelers.png'
import '../cssFiles/confirmation.css'
import '../cssFiles/checkOut.css';


const Confirmation = () => {

    const { formData } = useFormContext();

    let storedFormData = null;
    try {
        // Försöker hämta och parsar formulärdatan från localStorage
        const storedData = localStorage.getItem("checkoutData");
        if (storedData) {
            storedFormData = JSON.parse(storedData);
        }
    } 
    catch (error) {
        // Om det uppstår fel vid parsning av datan
        console.error('Error parsing stored data:', error);
    }

    return(
        <div>
            <header className="checkOut-header">
                <a className="header-a" href={`/products/:id`}>&lt; HANDLA MER</a>
                <img className='header-img' src={Logo} alt="Logo" />
            </header>
            <div className="conf-thank">
                <img className='thank-img' src={Logo} alt="Logo" />
                <h1 className="thank-h1">Tack för att just du handlade hos oss!</h1>
                <h2 className="thank-h2">Vi på Time Travelers är evigt tacksamma och hälksar dig <span>'Välkommen åter'</span></h2>
            </div>

            <div className="conf-right"></div>

            <div className="conf-left">
                <h1>Bekräftelse</h1>
                <p>Förnamn: {formData.firstName}</p>
                <p>Efternamn: {formData.lastName}</p>
                {/* Övriga fält här */}
            </div>
        </div>
    )
}

export default Confirmation