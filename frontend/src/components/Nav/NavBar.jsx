import React from 'react'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {  Categories} from "../Categories/Categories";
import Nosotros from '../../pages/Nosotros';
import  "../Nav/NavBar.css"
import Home from '../../pages/Home/Home';





const NavBar = () => {
  return (
    
     <BrowserRouter>
    <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><h1>WIKI-IA</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Categories'>Categorias</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/Nosotros'>Sobre Nosotros</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Categories" element={<Categories/>}/>
    <Route path="/Nosotros" element={<Nosotros/>}/>
  </Routes>
  </BrowserRouter>
   
    
  
  )
}

export default NavBar