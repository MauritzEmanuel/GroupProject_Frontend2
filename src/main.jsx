import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/', //Såhär ser det ut för att komma till hemsidan
    element: <div>Hejsan allihopa :D</div> 
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
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
