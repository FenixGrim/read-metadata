import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <h1 style={{margin:10}}>RefsApi</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'>
              <Link to='/calendar'>Календарь</Link>
              <Link to='/mrp'>МРП</Link>
            </Nav>
            <Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
