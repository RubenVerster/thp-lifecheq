import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const NavCustom = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" sticky dark expand="md" style={{ zIndex: 999, height: 70 }}>
        <Nav>
          <NavItem>
            <Link to="/">
              <img src="./src/img/logo.png" alt="" /> SPCA
            </Link>
          </NavItem>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav color="light" className="ml-auto" navbar color="dark" dark>
            <NavItem>
              <Link to="/admin">Admin</Link>
            </NavItem>
            <NavItem>
              <Link to="/adopt">Adopt</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavCustom;
