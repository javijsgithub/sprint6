import React, { useState } from 'react';
import '../styles/askBudget.css';

function AskBudget({ totalPrice, resetPrice, webOptionsCost, seoChecked, adsChecked, webChecked,  setSeoChecked, setAdsChecked, setWebChecked, numPages, numLanguages }) {
    const [presupuestos, setPresupuestos] = useState([]);
    const [nombreCliente, setNombreCliente] = useState('');
    const [telefonoCliente, setTelefonoCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');

    const nombreChange = (value) => {
        setNombreCliente(value);
    };

    const telefonoChange = (value) => {
        setTelefonoCliente(value);
    };

    const emailChange = (value) => {
        setEmailCliente(value);
    };

    const solicitarPresupuesto = () => {
     
        const servicios = [];
        if (seoChecked) servicios.push('Seo ');
        if (adsChecked) servicios.push('Ads ');
        if (webChecked) {servicios.push('Web (' + numPages + ' Páginas, ' + numLanguages + ' Idiomas)');}
       
        const presupuesto = {
            nombreCliente,
            telefonoCliente,
            emailCliente,
            servicio: servicios,
            precioTotal: totalPrice + webOptionsCost 
        };

        setPresupuestos([...presupuestos, presupuesto]);

        setSeoChecked(false);
        setAdsChecked(false);
        setWebChecked(false);
    
        setNombreCliente('');
        setTelefonoCliente('');
        setEmailCliente('');

        resetPrice();
      };

    return (
        <div className='container-budgets-list'>
           <div className='container-budgets shadow p-3'>
              <h2>Pedir Presupuesto</h2>
              <div className='container-inputs-button'>
                <div className='nombre'>
                  <input 
                    type="text"
                   className='input-nombre'
                    placeholder='Nombre' 
                    value={nombreCliente} 
                    onChange={(e) => nombreChange(e.target.value)} 
                  />
                </div>
                <div className='telefono'>
                  <input 
                    type="text"
                    className='input-telefono'
                    placeholder='Telefono' 
                    value={telefonoCliente} 
                    onChange={(e) => telefonoChange(e.target.value)} 
                   />
                </div>
                <div className='email'>
                  <input 
                    type="text"
                    className='input-email' 
                    placeholder='Email'
                    value={emailCliente} 
                    onChange={(e) => emailChange(e.target.value)} />
                </div>
                <button className='btn-solicitar btn-secondary' onClick={solicitarPresupuesto}>Solicitar presupuesto</button>
              </div>
            </div> 

            <hr/>

            <h3>Presupuestos en curso:</h3>
                  
                     {presupuestos.map((presupuesto, index) => (
                        <div key={index} className='container-list shadow p-3'>

                          <div className='col-4 col-info-cliente'>
                            <ul type='none'>
                              <li><h2>{presupuesto.nombreCliente}</h2></li>
                              <li>{presupuesto.telefonoCliente}</li>
                              <li>{presupuesto.emailCliente}</li>
                            </ul>
                          </div>

                          <div className='col-4 col-servicios-contratados'>
                            <h6>Servicios contratados:</h6>
                              <ul>
                                {presupuesto.servicio.map((servicio, index) => (
                                  <li key={index}>{servicio}</li>
                                 ))}
                              </ul>
                          </div>

                          <div className='col-4 col-precio'>
                            <p>Total: <h2>{presupuesto.precioTotal} €</h2></p>
                          </div>
                          
                        </div>
                    ))}
                                      
            </div>
    );
};

export default AskBudget;