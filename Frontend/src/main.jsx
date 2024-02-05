import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Product from './pages/Products.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CheckOut from './pages/CheckOut.jsx'



const CartArr = [] = useState([])

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
  },
  {
    path: '/checkOut',
    element: <CheckOut/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>,
)


