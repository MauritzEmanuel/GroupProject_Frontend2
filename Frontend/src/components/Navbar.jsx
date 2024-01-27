import React from 'react';
import '../cssFiles/navbar.css'
import Logo from '../assets/Images/Logo/Logo-time-travelers.png'

const Navbar = () => {

    const navStyles = {
        
    }

    return (
        <>
            <header>

                <nav className='navbar flex'>
                    <div>
                        <img className='image-nav flex' src={Logo} alt="Logo" />
                    </div>

                    <div className='div-su-nav'>
                        <div className='search-nav flex'>
                            <input placeholder="Sök böcker, författare..." role="combobox" aria-autocomplete="list" aria-label="Sök" aria-activedescendant="" aria-expanded="false" type="text"/>
                        </div>
                        <ul className='ul-nav flex'>
                            <li>
                                <a href={`/`}>Hem</a>
                            </li>
                            <li>
                                <a href={`/contact`}>Kontakt</a>
                            </li>
                            <li>
                                <a href={`/aboutUs`}>Om Oss</a>
                            </li>
                            <li>
                                <a href={`/products/:id`}>Produkter</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar