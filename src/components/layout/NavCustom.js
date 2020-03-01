import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap';
import Logout from '../layout/Logout';
import Logo from '../../img/logo.png';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        {buttonLabel}
      </Button>
    </div>
  );
};

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
        <img
          alt="logo"
          style={{ margin: '8px' }}
          src={Logo}
          height="40"
          width="40"
        />
        <NavItem>Services Dashboard</NavItem>
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
