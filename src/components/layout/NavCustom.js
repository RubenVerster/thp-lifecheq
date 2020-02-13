import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Logout from '../layout/Logout';

const NavCustom = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="dark"
      dark
      sticky="top"
      expand="md"
      style={{ zIndex: 999, height: 70 }}
    >
      <Nav>
        <NavItem>Service Catalogue</NavItem>
      </Nav>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar onClick={toggle}>
        <Nav className="ml-auto" navbar color="dark" dark>
          <NavItem>
            <Logout />
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavCustom;
