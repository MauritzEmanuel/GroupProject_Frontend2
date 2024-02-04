import React from 'react';
import '../cssFiles/navbar.css'
import Kart from './Kart';
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
                                <a href={`/`}>Bästa Säljare</a>
                            </li>
                            <li>
                                <a href={`/products/:id`}>Produkter</a>
                            </li>
                            <li>
                                <a href={`/categories`}>Kategorier</a>
                            </li>
                            <li>
                                <a href={`/aboutUs`}>Om Oss</a>
                            </li>
                            <li>
                                <a href={`/contact`}>Kontakta Oss</a>
                            </li>
                        </ul>
                    </div>

                    <div className='InvisibleBox' onClick={() => console.log('Open cart')}>
                        <div className='Circle'>
                            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000" className="bi bi-cart4" stroke="#000000" stroke-width="0.00016">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path> 
                                </g>
                            </svg>
                        </div>
                    </div>
                </nav>

                {<div className="navbar">
      {/* Cart icon in the navbar */}
      <Kart />
    </div>/* <div id="shopping-cart-div" class="wrapper">
                    <h2>Varukorg<button id="exit-cart-button">X</button></h2>
                    <ul id="cart-items"></ul>
                    <p id="total-price">Totalt: 0 kr</p> <button>Betala</button>
                </div> */}
            </header>
        </>
    )
}

export default Navbar