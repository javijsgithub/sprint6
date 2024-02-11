import React, { useState } from 'react';
import WebOptions from './webOptions';
import '../styles/checkboxes.css';


function Checkboxes({ totalPriceChange }) {
    const [seoChecked, setSeoChecked] = useState(false);
    const [adsChecked, setAdsChecked] = useState(false);
    const [webChecked, setWebChecked] = useState(false);
    const [webCost, setWebCost] = useState(0);
  
    const seoChange = () => {
      setSeoChecked(!seoChecked);
      totalPriceChange(!seoChecked, adsChecked, webChecked, webCost);
    };
  
    const adsChange = () => {
      setAdsChecked(!adsChecked);
      totalPriceChange(seoChecked, !adsChecked, webChecked, webCost);
    };
  
    const webChange = () => {
      setWebChecked(!webChecked);
      totalPriceChange(seoChecked, adsChecked, !webChecked, webCost);
    };

    const updateWebCost = (cost) => {
      setWebCost(cost);
      totalPriceChange(seoChecked, adsChecked, webChecked, cost);
  };
  
    return (
      <div className='container-checkboxes'>

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
          
          {webChecked && (<WebOptions 
          updateWebCost={updateWebCost}
          />
        )}
        </div>

      </div>
    );
  };
  
  export default Checkboxes;


 