import React from 'react';
import '../cssFiles/kart.css';

const KartPopup = ({ isKartPopupVisible, onClose }) => {
  return (
    <div className={isKartPopupVisible ? 'varukorg visible' : 'varukorg'}>
      <div className='hej'>
        <div className='betala'>
          <h1>Varukorg</h1>
        </div>
        <button className='Close-button' onClick={onClose}>
          X
        </button>
        <hr />
      </div>
      
     
     <button className='Betala' onClick={() => console.log('Button clicked')}>
        
        Betala
      </button>
    
    </div>
  );
};

export default KartPopup;
