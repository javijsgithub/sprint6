import React, { useState, } from 'react';
import '../styles/webOptions.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

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
                  <button className='button-info' type="button" data-bs-toggle="modal" data-bs-target="#pagesHelpModal">ℹ️</button>
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
                  <button className='button-info' type="button" data-bs-toggle="modal" data-bs-target="#languagesHelpModal">ℹ️</button>
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
            
            <div className="modal fade" id="pagesHelpModal" tabIndex="-1" aria-labelledby="pagesHelpModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="pagesHelpModalLabel">Número de Páginas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Añade el número de páginas que desees para tu proyecto.<br/> El coste por página es de 30€.
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="languagesHelpModal" tabIndex="-1" aria-labelledby="languagesHelpModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="languagesHelpModalLabel">Número de Idiomas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        Añade el número de idiomas que necesites para tu proyecto.<br/> El coste por idioma es de 30€.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default WebOptions;

                