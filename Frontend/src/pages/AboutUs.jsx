import React from 'react';
import '../cssFiles/aboutus.css';

const AboutUs = ({ about}) => {
    return (
        <div className={`about-us-container ${about}`}>
            <h1>Välkommen till Time Travelers</h1>
            <p>Ge dig ut på en litterär resa med Time Travelers, där varje sida är en portal till det förflutna. Vår historia börjar med en passion för historia, en kärlek till böcker och en vision om att skapa en fristad för andra tidsentusiaster.</p>
            <p className='paragraftvå'>På Time Travelers tror vi på ordens magi för att transportera dig genom århundraden. Våra hyllor är inte bara fyllda med böcker; De är portar till svunna epoker. Oavsett om du är en nyfiken vandrare eller en erfaren historiker kommer du att hitta berättelser som blåser liv i historiens mest fascinerande ögonblick.</p>
           <h2>Tidens väsen</h2>
            <p className='paragraftre'>Våra hyllor är inte röriga; De är kurerade. Varje bok är handplockad för att säkerställa en fängslande resa genom 1700-, 1800- och 1900-talen. Dyk in i elegansen i den viktorianska eran, bevittna revolutionerna som formade nationer och återupplev de tumultartade händelserna som definierade 1900-talet.</p>
            <p className='paragraffyra'>Vårt team är en mångsidig blandning av historieintresserade, litterära kännare och drömmare som tror att varje bok innehåller en bit historia som väntar på att upptäckas. Vi säljer inte bara böcker; Vi delar berättelser, främjar nyfikenhet och bygger en gemenskap som binds samman av en kärlek till det förflutna.</p>
            <p className='paragraffem'>Time Travelers is more than a bookstore; it's a bridge between worlds. Join us for events that transcend time, where book discussions become portals to lively debates, and where the spirit of exploration is celebrated.</p>
            <p className='paragrafsex'>Kvalitet, autenticitet och ett engagemang för bevarandet av historisk kunskap är kärnan i Time Travelers. Varje bok är en noggrant utvald relik som väntar på att avslöja sina hemligheter för dig.</p>
        </div>
        
    );
};

export default AboutUs;
