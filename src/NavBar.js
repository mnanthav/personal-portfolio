//=========================================================================
// File: .../src/NavBar.js
// Programmer: Mya Nanthavongdouangsy
//=========================================================================
/*------------------------------------------
   Description:
=========================================================================*/
import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
    
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            data-bs-theme="dark"
            sticky="top"
            //className="justify-content-end flex-grow-1 pe-3"
        >
            <Container fluid>
                <Navbar.Brand as={NavLink} to='/'>
                    I-mya-gination
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse 
                    id="responsive-navbar-nav"
                    className="justify-content-end"
                >
                    <Nav>
                        <Nav.Link as={NavLink} to='/about'>
                            About
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/projects'>
                            Projects
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/skills'>
                            Skills
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/contact'>
                            Contact   
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;