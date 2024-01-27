import React from 'react';
import '../cssFiles/navbar.css'
import Logo from '../assets/Images/Logo/Logo-time-travelers.png'

const Navbar = () => {

    return (
        <>
            <header>

                <h1>Historybook Store</h1>
                <nav className='navbar flex'>
                    <div>
                        <img className='image-nav flex' src={Logo} alt="Logo" />
                    </div>
                    
                    <ul className='ul-nav flex'>
                        <li className='li-nav flex'>
                            <a href={`/`}>Hem</a>
                        </li>
                        <li className='li-nav flex'>
                            <a href={`/contact`}>Kontakt</a>
                        </li>
                        <li className='li-nav flex'>
                            <a href={`/aboutUs`}>Om Oss</a>
                        </li>
                        <li className='li-nav flex'>
                            <a href={`/products/:id`}>Produkter</a>
                        </li>
                        <input type="text" placeholder="Sök böcker..."/>
                    </ul>

                </nav>
            </header>
        </>
    )
}

export default Navbar