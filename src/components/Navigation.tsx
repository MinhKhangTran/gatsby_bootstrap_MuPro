import { Link } from "gatsby";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../images/MuPro.svg";

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand text-primary">
          <img src={logo} alt="navbar-logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" data-cy="nav_button" />
        <Navbar.Collapse id="basic-navbar-nav" data-cy="nav_collapse">
          <Nav className="me-auto align-lg-items-center">
            <Nav.Link href="#hero">Home</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>

            <Link className="nav-link" to="/about">
              About
            </Link>
          </Nav>
          <a className="btn btn-outline-primary" href="#contact">
            Contact
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
