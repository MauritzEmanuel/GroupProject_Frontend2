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
                            <svg xmlns="http://www.w3.org/2000/svg" class="search-icon" width="24" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#808080" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                                <path d="M21 21l-6 -6" />
                            </svg>
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