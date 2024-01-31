import React from 'react';
import '../cssFiles/contact.css';

const Contact = () => {
  return (
    <div className='Box'>
      <div className='form-group'>
        <input type='text' id='firstName' name='firstName' placeholder=' ' />
        <label htmlFor='firstName'>First Name:</label>
      </div>

      <div className='form-group'>
        <input type='text' id='lastName' name='lastName' placeholder=' ' />
        <label htmlFor='lastName'>Last Name:</label>
      </div>

      <div className='form-group'>
        <input type='email' id='email' name='email' placeholder=' ' />
        <label htmlFor='email'>Email:</label>
      </div>

      <div className='form-group'>
        <input type='tel' id='phone' name='phone' placeholder=' ' />
        <label htmlFor='phone'>Phone Number:</label>
      </div>

      <div className='form-group'>
        <textarea id='message' name='message' rows='4' placeholder=' '></textarea>
        <label htmlFor='message'>Message:</label>
      </div>

      <button type='submit'>Submit</button>
    </div>
  );
};

export default Contact;
