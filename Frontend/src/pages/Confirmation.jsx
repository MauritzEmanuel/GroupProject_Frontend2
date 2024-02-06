import React from "react";
import Logo from '../assets/Images/Logo/Logo-time-travelers.png'
import '../cssFiles/confirmation.css'
import '../cssFiles/checkOut.css';


const Confirmation = () => {

    return(
        <div>
            <header className="checkOut-header">
                <a className="header-a" href={`/products/:id`}>&lt; HANDLA MER</a>
                <img className='header-img' src={Logo} alt="Logo" />
            </header>
            <div>
                <p>Hej</p>
            </div>
        </div>
    )
}

export default Confirmation