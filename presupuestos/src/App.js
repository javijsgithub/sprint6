import React from 'react';
import Checkboxes from './components/checkboxes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WelcomeScreen from './components/welcomeScreen';
import './App.css';


function App() {
  return (
    <div className="container mt-5">

    <Router>
      
      <nav class="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="https://itacademy.barcelonactiva.cat/login/index.php">
           <img src= {require(`./images/imagen-titulo.jpg`)} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" id='logo' /> <b>Frontender.itacademy</b>
          </a>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={
        <WelcomeScreen />} 
        />

        <Route path="/calculator" element={
        <Checkboxes />} 
        />
      </Routes>
      
    </Router>
      
    </div>
  );
};

export default App;
