import React from 'react';
import '../cssFiles/footer.css'
import Payment from '../assets/Images/Logo/payment.png'

const Footer = () => {

    return (
        
        <div className= 'footer'>
            <div className='top'>
            <a href={`/information`}>
            <div className='item'>
                <h1>Information</h1>
                <span>Leverans</span>
                <span>Köpvillkor</span>
                <span>Byten & Returer</span>
                <span>Cookies</span>
            </div>
            </a>
            <div className='item'>
                <h1>Sociala Medier</h1>
                <span>FaceBook</span>
                <span>Instagram</span>
                <span>LinkedIn</span>
                <span>TikTok</span>
            </div>
            <div className='item'>
            <a href={`/aboutus`}>
                <h1>Om oss</h1>
                <span>
                Utforska gångna epoker och låt historiens vingslag föra dig tillbaka i tiden. Vår samling är noggrant utvald för att erbjuda en resa genom århundradena, där varje bok berättar en unik historia.</span>
                </a>
            </div>
            <div className='item'>
            <a href={`/contact`}>
                <h1>Kontakta oss</h1>
                <span>
                Har du frågor eller vill du dela din passion för historia med oss? Kontakta oss gärna! Time Travelers team är här för att svara på dina frågor och stötta dig i din resa genom historiens skatter.</span>
            </a>
            </div>
            </div>
            <div className='bottom'>
                <div className='left'>
                    <span className='logo'>Time Travelers</span>
                    <span className='copyright'>© 2024 All Rights Reserved</span>
                </div>
                <div className='right'>
                    <img src={Payment} alt="Payment" />
                </div>

            </div>

        </div>
    )
}

export default Footer