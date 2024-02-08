import React from "react";
import { useFormContext } from '../contexts/FormContext';
import Logo from '../assets/Images/Logo/Logo-time-travelers.png'
import Back from '../assets/Images/History/ValkommenAter.png'
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
        <div className="conf-all">
            <header className="checkOut-header">
                <a className="header-a" href={`/products/:id`}>&lt; HANDLA MER</a>
                <img className='header-img' src={Logo} alt="Logo" />
            </header>
            <div className="conf-thank">
                <h1 className="thank-h1">Tack för att just du handlade hos oss!</h1>
                <h2 className="thank-h2">Vi på Time Travelers är evigt tacksamma och hälsar dig</h2>
                <img className="thank-img" src={Back} alt="Back" />
            </div>
            
            <div className="conf-left-right">
                <div className="conf-left">
                    <h3 className="left-h3">Du har köpt:</h3>
                </div>

                <div className="conf-right">
                    <h3>Levereras till:</h3>
                    <p>Du valde {formData.homeLev}</p>
                    <p>Namn {formData.firstName} {formData.lastName}</p>
                    <p>Address</p>
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