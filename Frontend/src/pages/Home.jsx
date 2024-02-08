import React, {useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import '../cssFiles/home.css'
import Slider1 from '../assets/Images/Logo/Slider-1.png'
import Slider2 from '../assets/Images/Logo/Slider-2.png'
import Slider3 from '../assets/Images/Logo/Slider-3.png'
import Logo from '../assets/Images/Logo/Logo-small-no-background.png'
import image1700s from '../assets/Images/1700/En-rustning-av-ljus.png'
import image1800s from '../assets/Images/1800/Napoleons-falttag.png'
import image1900s from '../assets/Images/1900/Ddr-bortom-muren-osttyskland-1949-90.png'

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

    <section className='best-seller'>
        <Link to='/bestSellers' className='highlight-section'>
            <strong>Upptäck våra bästsäljande böcker </strong> 
            <span className='underline-text'>och låt dig förföras av litterära mästerverk!</span>
        </Link>
    </section>

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

    <section className='eras'>
        <div className='content'>
        <div className='text'>
            <p>1700 - TALET</p>
            <strong>Ken Follett speglar 1700-talets turbulenta anda genom en intensiv berättelse som väver samman individuella strävanden och historiska omvälvningar. Romanen framhäver upplysningstidens idéer om rättvisa och mänsklig förmåga, parallellt med den era då politisk och social förändring formade världen. </strong>
            <span>Klicka på knappen för fler bra titlar om 1700-talet. </span>
            <Link to='/products/:id' className='explore-button'>Visa alla</Link>
        </div>
        <Link to='/products/:id' className='image'> 
            <img src={image1700s} alt="1700s" />
        </Link>
        </div>

        <div className='content'>
        <div className='text'>
            <p>1800 - TALET</p>
            <strong>En ingående analys av Napoleon Bonapartes militära strategier och kampanjer som formade Europa i början av 1800-talet.Olofssons arbete belyser de revolutionerande förändringarna i krigsföring som Napoleon introducerade, vilka fortfarande studeras av militärhistoriker idag. </strong>
            <span>Klicka på knappen för att bläddra i vår samling. </span>
            <Link to='/products/:id' className='explore-button'>Visa alla</Link>
        </div>
        <Link to='/products/:id' className='image'> 
            <img src={image1800s} alt="1800s" />
        </Link>
        </div> 

        <div className='content'>
        <div className='text'>
            <p>1900 - TALET</p>
            <strong>Katja Hoyer utforskar det dagliga livet och de politiska dynamikerna i Östtyskland, bortom de stereotypa bilderna av Berlinmuren och kalla kriget. Boken avslöjar de komplexa verkligheterna av livet under östtysk övervakning och statlig kontroll, och hur dessa erfarenheter skilde sig från och liknade livet i väst.</strong>
            <span>Klicka på knappen för att välja fler av våra titlar. </span>
            <Link to='/products/:id' className='explore-button'>Visa alla</Link>
        </div>
            <Link to='/products/:id' className='image'> 
            <img src={image1900s} alt="1900s" />
        </Link>
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