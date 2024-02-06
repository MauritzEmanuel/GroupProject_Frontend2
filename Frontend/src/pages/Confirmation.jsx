import React from "react";
import '../cssFiles/confirmation.css'

const Confirmation = () => {

    return(
        <div>
            <header className="checkOut-header">
                <a className="header-a" href={`/products/:id`}>&lt; HANDLA MER</a>
                <img className='header-img' src={Logo} alt="Logo" />
            </header>
            <div>

            </div>
        </div>
    )
}

export default Confirmation