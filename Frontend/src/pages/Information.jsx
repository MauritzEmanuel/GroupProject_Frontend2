import React from 'react';
import '../cssFiles/information.css'

const Information = () => {
    return (
        <div className='information'>
            <h1>Information: Time Travelers</h1>

            <section className='delivery'>
            <h2>Leverans</h2>
            <p>På Time Travelers strävar vi efter att säkerställa att dina historiska skatter når dig i tid och säkert. Vår leveransprocess är utformad för att ge bästa möjliga service:</p>
            <ul>
                <li>Fraktpartners: Vi samarbetar med välrenommerade fraktpartners för att leverera dina beställningar.</li>
                <li>Fraktpriser: Fraktpriser beräknas i kassan baserat på din plats och vikten av din beställning.</li>
                <li>Leveranstid: Räkna med att ditt paket kommer fram inom [3-5] dagar för inhemska beställningar och [5-7] dagar för internationella beställningar.</li>
            </ul>
            </section>

            <section className='returns'>
            <h2>Byten och Returer</h2>
            <p>Vi vill att du ska vara helt nöjd med din historiska resa. Om du stöter på några problem är vår bytes- och returpolicy här för att hjälpa:</p>
            <ul>
                <li>Böckers skick: Alla böcker inspekteras noggrant före leverans, men om du får en skadad eller defekt vara, kontakta oss inom [7] dagar efter mottagandet.</li>
                <li>Returer: Du kan returnera varor inom [30] dagar efter köpet. De returnerade varorna måste vara i originalskick.</li>
                <li>Byten: Om du vill byta en vara, vänligen kontakta oss inom [30] dagar efter mottagandet. Vi guidar dig genom processen.</li>
            </ul>
            </section>

            <section className='terms'>
            <h2>Köpvillkor</h2>
            <p>För att säkerställa en smidig och trevlig shoppingupplevelse, läs våra köpvillkor:</p>
            <ul>
                <li>Betalningsmetoder: Vi accepterar [Faktura, Delbetalning, Visa, MasterCard, Trustly, Swish].</li>
                <li>Orderbekräftelse: Du kommer att få en orderbekräftelse via e-post när ditt köp är klart.</li>
                <li>Avbokningar: Du kan avbryta din beställning inom [12] timmar efter att du lagt den. Kontakta oss omgående för hjälp.</li>
            </ul>
            </section>

            <section className='cookies'>
            <h2>Cookies</h2>
            <p>På Time Travelers använder vi cookies för att förbättra din upplevelse. Genom att använda vår webshop godkänner du användningen av cookies enligt vår policy:</p>
            <ul>
                <li>Session Cookies: Dessa är tillfälliga cookies som försvinner när du stänger din webbläsare. De hjälper till att hålla koll på din session för en smidigare shoppingupplevelse.</li>
                <li>Persistent Cookies: Dessa cookies stannar kvar på din enhet längre och används för att komma ihåg dina preferenser och återkommande besök.</li>
                <li>Tredjepartscookies: Vår webbshop kan använda tredjepartstjänster som i sin tur använder cookies för att till exempel analysera trafik eller anpassa annonser.</li>
            </ul>
            </section>


            <section className='about'>
            <h2>Om Time Travelers Webshop</h2>
            <p>På Time Travelers brinner vi för att föra historien till din dörr. Vår samling sträcker sig över 1700-, 1800- och 1900-talen och erbjuder ett urval av böcker som tar dig till olika tidsepoker.</p>
            <ul>
                <li>Kvalitetssäkring: Varje bok i vår samling är utvald för sin historiska betydelse och är noggrant inspekterad för att uppfylla våra kvalitetsstandarder.</li>
                <li>Kontakta oss: Har du frågor eller behöver du hjälp? Kontakta oss via vår sida [Kontakta oss].</li>
            </ul>
            </section>

            <p>Tack för att du är en del av Time Travelers – där historien blir levande på sidorna i varje bok!</p>
        </div>
    );
};

export default Information;