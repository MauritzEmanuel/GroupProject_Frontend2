import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { FormProvider } from './contexts/FormContext.jsx';
import { CartProvider } from './contexts/CartContext.jsx';
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Product from './pages/Products.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CheckOut from './pages/CheckOut.jsx'
import Information from './pages/Information.jsx'
import Confirmation from './pages/Confirmation.jsx'
import InfoPopup from "./components/InfoPopup.jsx";

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
    path: '/infoPopup',
    element: <InfoPopup />
  },
  {
    path: '/checkOut',
    element: <CheckOut/>
  },
  {
    path: '/information',
    element: <Information/>
  },
  {
    path: '/confirmation',
    element: <Confirmation/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <CartProvider>
          <Navbar/>
          <RouterProvider router={router}/>
          <Footer/>
      </CartProvider>
    </FormProvider>
  </React.StrictMode>
)


