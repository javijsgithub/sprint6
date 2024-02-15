import React, { useState, } from 'react';
import '../styles/webOptions.css';

function WebOptions({ updateWebCost }) {
    
    const [numPages, setNumPages] = useState(0);
    const [numLanguages, setNumLanguages] = useState(0);

    const numPagesChange = (increment) => {
        setNumPages(numPages + increment);
    };

    const numLanguagesChange = (increment) => {
        setNumLanguages(numLanguages + increment);
    };

    const webCost = (numPages + numLanguages) * 30;

    updateWebCost(webCost);

    return (
        <div className='container-options'>

            <div className='container-titulo-options'>
                <h5>Opciones:</h5>
            </div>

            <div className='container-option-pages'>
                <label>Número de páginas:</label>
                  <button className='button-minus' onClick={() => numPagesChange(-1)}>-</button>
                    <input className='input-pages'
                      value={numPages}
                      onChange={numPagesChange}
                      min={0}
                    />
                  <button className='button-plus' onClick={() => numPagesChange(1)}>+</button>
            </div>

            <div className='container-option-languages'>
                <label>Número de idiomas:</label>
                  <button className='button-minus' onClick={() => numLanguagesChange(-1)}>-</button>
                    <input className='input-languages'
                      value={numLanguages}
                      onChange={numLanguagesChange}
                      
                    />
                  <button className='button-plus' onClick={() => numLanguagesChange(1)}>+</button>
            </div>

            <div className='container-total-options'>
                <h5>Coste total opciones: {webCost} €</h5>
            </div>
            
        </div>
        
    );
};

export default WebOptions;

                