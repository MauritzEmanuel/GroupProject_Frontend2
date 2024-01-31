import React from 'react';
import '../cssFiles/contact.css';


const Contact = () => {
  
    return (
    <> 
      <div>
        <h1 className='contact-h1'>Kontakta oss</h1>
        <div className='contact-div'>
            <div className='text'>
                <p>
                    KONTAKTA OSS <br/>
                    Tack för att du besöker Time Travelers! <br/>
                    För förfrågningar och frågor, fyll i formuläret! <br/>
                    Vänligen vänta upp till 48 arbetsdagar för att få ett svar. <br/>
                    Alla beställningar behandlas inom 3-5 arbetsdagar EXKLUSIVE helger och helgdagar.
                </p>
            </div>

            <div className='form'>
                <form>
                    <label htmlFor="firstName">Förnamn:</label>
                    <input type="text" id="firstName" name="firstName" required />

                    <label htmlFor="lastName">Efternamn:</label>
                    <input type="text" id="lastName" name="lastName" required />

                    <label htmlFor="email">E-post:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="phoneNumber">Telfon-nr:</label>
                    <input type="email" id="email" name="email" required /> 

                    <label htmlFor="message">Meddelande:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>

                    <button type="submit">Skicka</button>
                </form>
            </div>
        </div>
      </div>
    </>  
    )
}

export default Contact;
