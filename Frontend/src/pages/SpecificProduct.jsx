import React from "react";
import "../cssFiles/specificProduct.css";


const SpecificProduct = () => {


    return(
        <div className='page'>
            <div className='box'>
                <div className='Left'>
                    <img src={`https://bilder.akademibokhandeln.se/images_akb/9789129723960_383/harry-potter-och-hemligheternas-kammare`}/>
                </div>

                <div className='Right'>
                    <h1 className='Title'>Titel</h1>
                    <h2 className='Author'>Författare</h2>
                    <div className='Description'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sit amet commodo nulla facilisi nullam vehicula. Nulla malesuada pellentesque elit eget gravida cum sociis natoque. Tincidunt vitae semper quis lectus nulla at volutpat. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo vel. Ac tortor dignissim convallis aenean et tortor. Sagittis eu volutpat odio facilisis mauris sit. Nullam vehicula ipsum a arcu cursus vitae congue. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Eget velit aliquet sagittis id consectetur purus. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Etiam dignissim odio nunc non blandit massa enim nec. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Diam in arcu cursus euismod quis viverra nibh cras. Eu volutpat odio facilisis mauris sit amet massa vitae. Vel quam elementum pulvinar etiam non quam. Ut eu sem integer vitae justo eget magna fermentum iaculis. Bibendum at varius vel pharetra vel turpis</p>
                    </div>
                    <div className='PriceAndQuantity'>
                        <div>
                            <label htmlFor="quantity">Antal: </label>
                            <input type="number" id="quantity" name="quantity" min="1"/>
                        </div>

                        <h1 className='Price'>499:-</h1>
                    </div>
                    <button className='AddToCart'>Lägg till i varukorg</button>
                </div>
            </div>
        </div>
    )
};

export default SpecificProduct;