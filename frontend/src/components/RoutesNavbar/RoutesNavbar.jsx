import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const RoutesNavbar = () => {
  return (
    <Navbar expand="lg" className="navbar-color">
      <Container>
          <Navbar.Brand as={Link} to="/" className="fw-semibold fs-3" >Wiki-IA</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto navbar-color">
              <Nav.Link as={Link} to="/" className="fw-semibold">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/Categories" className="fw-semibold">
                Categorias
              </Nav.Link>
              <Nav.Link as={Link} to="/Nosotros" className="fw-semibold">
                Sobre Nosotros
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default RoutesNavbar;
