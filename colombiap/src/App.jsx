import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/header/header' 
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Menu from './components/menu/menu';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import  Login from './components/Login/Login'


function App() {
  return (
    <Router>
      <div id='contenedor'>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/menu' element= {<Menu />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
