import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

const NavCustom = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" style={{ zIndex: 999, height: 65 }}>
        <NavbarBrand href="/"><img src='./src/img/logo.png' alt='' /> SPCA</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav color="light" className="ml-auto" navbar color="dark" dark>
            <NavItem style={{ background: '#333' }}>
              <NavLink href="/admin">Admin</NavLink>
            </NavItem>
            <NavItem style={{ background: '#333' }}>
              <NavLink href="/donate">Donate</NavLink>
            </NavItem>
            <NavItem style={{ background: '#333' }}>
              <NavLink href="/adopt">Adopt</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div >
  );
}

export default NavCustom;
