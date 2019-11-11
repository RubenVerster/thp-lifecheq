import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from '../../img/logo.png'
const NavCustom = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar
      color="dark"
      dark
      sticky='top'
      expand="md"
      style={{ zIndex: 999, height: 70 }}
    >
      <Nav>


        {/* <img src="../../img/logo.png" width='60px' height='60px' style={{ margin: 0, padding: 0 }} alt="" /> */}
        <NavItem>
          <Link to="/">
            SPCA
            </Link>
        </NavItem>
      </Nav>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar onClick={toggle}>
        <Nav className="ml-auto" navbar color="dark" dark>
          <NavItem>
            <Link to="/admin">Admin</Link>
          </NavItem>
          <NavItem>
            <Link to="/adopt">Adopt</Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>

  );
};

export default NavCustom;
