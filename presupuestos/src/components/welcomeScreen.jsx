import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/welcomeScreen.css';

function WelcomeScreen() {
  return (
    <div className="container-welcome shadow p-3">
      <h1>Bienvenido/a a nuestra web de presupuestos</h1>
      <h6 className='proposito'>Esta aplicación te permite calcular el presupuesto para tus proyectos web de manera fácil y rápida.</h6>
      <Link to="/calculator" className="btn">Ir a Presupuestos</Link>
    </div>
  );
}

export default WelcomeScreen;