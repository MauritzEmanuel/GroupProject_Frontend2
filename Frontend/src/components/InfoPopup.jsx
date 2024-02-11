import React from 'react';
import '../cssFiles/infoPopup.css';

const InfoPopup = ({ details, onClose, onAddToCart }) => {
    return (
        <div className='info-popup'>
            <div className='info-content'>
                <div className="info-left">
                    <img src={`http://localhost:1337${details.image}`} alt={`Cover for ${details.title}`} className="info-image" />
                </div>
                <div className="info-right">
                    <h2>{details.title}</h2>
                    <p className="Author">{details.author}</p>
                    <p className="Description">{details.description}</p>
                    <p className="Price">Pris: {details.price}:-</p>
                    <button className='AddToCart' onClick={() => onAddToCart(details)}>Lägg i kundvagn</button>
                    <button className='close-button' onClick={onClose}>X</button>
                </div>
            </div>
        </div>
    );
};

export default InfoPopup;
