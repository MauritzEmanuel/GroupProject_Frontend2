import React from 'react';
import '../cssFiles/home.css'

const Home = () => {

    return (



        
        <div className="subscribe-section">
         <div className='subscribe-content'>
            <div className='left'>
                <h1>Sign up for our Newsletter</h1>
                <h3>Go back in time with us.</h3>
            </div>
            <div className='right'>
                <form>
                    <input type="email" placeholder='Enter your email' />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </div>    
        </div>
     
    )
}

export default Home