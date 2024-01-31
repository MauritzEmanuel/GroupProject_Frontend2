import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../cssFiles/home.css'
import Slider1 from '../assets/Images/Logo/Slider-1.png'
import Slider2 from '../assets/Images/Logo/Slider-2.png'
import Slider3 from '../assets/Images/Logo/Slider-3.png'
import Logo from '../assets/Images/Logo/Logo-small-no-background.png'


const Home = () => {
    const sliderImages = [Slider1, Slider2, Slider3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex(currentImageIndex => (currentImageIndex + 1) % sliderImages.length);

        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (

    <div className='Home'>

    <section className='slider'>
        <div className='container'>
            <img src={sliderImages[currentImageIndex]} alt="" />
        </div>
    </section>

    <section className='about-us'>
        <div className='about-us-content'>
            <div className='logo-container'>
                <img src={Logo} alt="Time Travelers" />
            </div>
            <div className='about-us-text'>
                <h1>Din Port till Historiska Världar!</h1>
                <p>Välkommen till Time Travelers där vi tror på böckernas kraft för att transportera oss genom tiden och fördjupa oss i historiens rika gobeläng. Vår webbshop är inte bara en samling böcker; det är en kurerad resa genom de betydelsefulla ögonblicken som formade 1700-, 1800- och 1900-talen. </p>
                <Link to="/aboutUs" className="read-more-btn">Läs mer</Link>
            </div>
        </div>
    </section>

    <section className="subscribe-section">
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
    </section>

    </div>
     
    )
}

export default Home