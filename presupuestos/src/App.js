import React, { useState } from 'react';
import Checkboxes from './components/checkboxes';
import './App.css';


function App() {

  const [totalPrice, setTotalPrice] = useState(0);
  
    const recalculateTotalPrice = (seoChecked, adsChecked, webChecked) => {
      let total = 0;
      if (seoChecked) total += 300;
      if (adsChecked) total += 400;
      if (webChecked) total += 500;
      setTotalPrice(total);
    };

  return (
    <div className="container mt-5">
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="https://itacademy.barcelonactiva.cat/login/index.php">
           <img src= {require(`./images/imagen-titulo.jpg`)} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" id='logo' /> <b>Frontender.itacademy</b>
          </a>
        </div>
      </nav>
      
      <div className='container-h1 shadow-lg'>
        <h1><b>Consigue la mejor calidad</b></h1>
      </div>

      <Checkboxes
       totalPriceChange = {recalculateTotalPrice} 
      />
      
      <div className='container-h3'>
        <h3>Precio presupuestado: {totalPrice} €</h3>
      </div>
    </div>
  );
};

export default App;
