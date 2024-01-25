import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Product from './pages/Products.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Footer2 from './components/Footer2.jsx'
import './pages/products.css'

const router = createBrowserRouter([
  {
    path: '/', //Såhär ser det ut för att komma till hemsidan
    element: <Home/>
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {
    path: '/aboutUs',
    element: <AboutUs/>
  },
  {
    path: '/products/:id',
    element: <Product/>
  }
])

/*
Skrivs såhär i navigationsbaren/headern:
<nav>
  <ul>
    <li>
      <a href={`/contacts/1`}>Your Name</a>
      //För att komma till t.ex kontaktsidan från hemsidan
      //för att kunna stanna kvar på våran egna webbplats
    </li>
    <li>
      <a href={`/contacts/2`}>Your Friend</a>
    </li>
  </ul>
</nav>
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <nav>
      <ul>
        <li>
          <a href={`/`}>Home</a>
        </li>
        <li>
          <a href={`/contact`}>Contact</a>
        </li>
        <li>
          <a href={`/aboutUs`}>About Us</a>
        </li>
        <li>
          <a href={`/products/:id`}>Products</a>
        </li>
      </ul>
    </nav>
    <RouterProvider router={router} />
    <Footer/>
    <Footer2/>
  </React.StrictMode>,
)

