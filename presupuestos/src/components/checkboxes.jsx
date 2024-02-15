import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WebOptions from './webOptions';
import '../styles/checkboxes.css';
import AskBudget from './askBudget';


function Checkboxes() {
    const [seoChecked, setSeoChecked] = useState(false);
    const [adsChecked, setAdsChecked] = useState(false);
    const [webChecked, setWebChecked] = useState(false);
    const [webCost, setWebCost] = useState(0); 
   
    const seoChange = () => {
      setSeoChecked(!seoChecked);
      recalculateTotalPrice(!seoChecked, adsChecked, webChecked, webCost);
    };
  
    const adsChange = () => {
      setAdsChecked(!adsChecked);
      recalculateTotalPrice(seoChecked, !adsChecked, webChecked, webCost);
    };
  
    const webChange = () => {
      setWebChecked(!webChecked);
      recalculateTotalPrice(seoChecked, adsChecked, !webChecked, webCost);
    };

    const updateWebCost = (cost) => {
      setWebCost(cost);
      recalculateTotalPrice(seoChecked, adsChecked, webChecked, cost);
    };

    const [totalPrice, setTotalPrice] = useState(0);
    const [webOptionsCost, setWebOptionsCost] = useState(0);

    const recalculateTotalPrice = (seoChecked, adsChecked, webChecked, webCost) => {
      let total = 0;
      if (seoChecked) total += 300;
      if (adsChecked) total += 400;
      if (webChecked) total += 500;
    
      setWebOptionsCost(webCost);

      if (!webChecked) {
        total -= webCost;
      }

      setTotalPrice(total);      
    };
    
    const resetPrice = () => {
      setTotalPrice(0);
      setWebOptionsCost(0);
    };
       
    return (
      <div className='container-checkboxes'>

        <Link to="/" className="btn">Ir a la página de bienvenida</Link>

         <div className='container-h1 shadow-lg'>
           <h1><b>Consigue la mejor calidad</b></h1>
         </div>

        <div className='row container-seo shadow p-3'>
          <div className="col-4 col-descripcion">
            <h2>Seo</h2> 
            <p>Programación de una web responsive completa</p> 
          </div>
          <div className="col-4 col-euros">
            <p className='p-cifra'> <b>300</b></p><p className='p-euro'><b>€</b></p>
          </div>
          <div className="col-4 col-check">
            <input
              type="checkbox"
              className="check-input" 
              id="seoCheckbox"
              checked={seoChecked} 
              onChange={seoChange}
            /> Agregar
          </div>
        </div>
  
        <div className='row container-ads shadow p-3'>
          <div className="col-4 col-descripcion">
            <h2>Ads</h2> 
            <p>Programación de una web responsive completa</p> 
          </div>
          <div className="col-4 col-euros">
            <p className='p-cifra'> <b>400</b></p><p className='p-euro'><b>€</b></p>
          </div>
          <div className="col-4 col-check">
            <input
              type="checkbox"
              className="check-input"
              id="adsCheckbox"
              checked={adsChecked}
              onChange={adsChange}
            /> Agregar
          </div>
        </div>
  
        <div className='row container-web shadow p-3'>
          <div className="col-4 col-descripcion">
            <h2>Web</h2> 
            <p>Programación de una web responsive completa</p> 
          </div>
          <div className="col-4 col-euros">
            <p className='p-cifra'> <b>500</b></p><p className='p-euro'><b>€</b></p>
          </div>
          <div className="col-4 col-check">
            <input
              type="checkbox"
              className="check-input"
              id="webCheckbox"
              checked={webChecked}
              onChange={webChange}
            /> Agregar       
          </div>
          
          {webChecked && (
            <WebOptions 
              updateWebCost = {updateWebCost} 
            />
          )}
        </div>

        <div className='container-precio-presupuestado'>
            <h3>Precio presupuestado: {totalPrice + webOptionsCost} €</h3>
        </div>

          <AskBudget
            totalPrice = {totalPrice}
            webOptionsCost = {webOptionsCost}
            seoChecked = {seoChecked}
            adsChecked = {adsChecked}
            webChecked = {webChecked}
            setSeoChecked={setSeoChecked}
            setAdsChecked={setAdsChecked}
            setWebChecked={setWebChecked}
            numPages={webCost / 60}
            numLanguages={webCost / 60}
            resetPrice={resetPrice}
          />

      </div>
    );
};
  
export default Checkboxes;


 