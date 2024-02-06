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
<<<<<<< HEAD
import Information from './pages/Information.jsx'
import BestSelling from './pages/BestSelling.jsx'
=======
import Confirmation from './pages/Confirmation.jsx'

>>>>>>> 7a557ea83bba5f88dcb9e088c1f9c288b8153704


/*const CartArr = [] = useState([]) */

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
  },
  {
<<<<<<< HEAD
    path: '/information',
    element: <Information/>
  },
  {
    path: '/bestSelling',
    element: <BestSelling/>
=======
    path: '/confirmation',
    element: <Confirmation/>
>>>>>>> 7a557ea83bba5f88dcb9e088c1f9c288b8153704
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>,
)


