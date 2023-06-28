import React, { useEffect, useState } from "react";
import "../Nav/NavBar.css";
import { Link } from "react-router-dom";

const NavBarHome = () => {

  const [navbarColor, setNavbarColor] = useState("bg-transparent")
  
  useEffect(() => {
    const updateNavbarColor = () => {
      const currentScroll = window.scrollY

      if (currentScroll > 90) {
        setNavbarColor("navbar-color shadow")
      } else {
        setNavbarColor("bg-transparent")
      }
    }

    window.addEventListener("scroll", updateNavbarColor)

    return ()=>{
      window.removeEventListener("scroll", updateNavbarColor)
    }
  },[])

  console.log(navbarColor)
  return (
    <nav className={"navbar navbar-expand-lg p-1 fixed-top " + navbarColor} >
      <div className="container d-flex justify-content-center align-items-center">
        <Link className="navbar-brand" href="#">
          <h1 className="text-light" >Wiki-IA</h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active text-light" aria-current="page" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Categories">
                Categorias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/Nosotros">
                Sobre Nosotros
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBarHome;
