import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
 UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import Logoempresa from './img/Logoempresa.png';
import iconoperfil from './img/iconoperfil.png';


const NavBar = (props) => {


  return (
    <div>
      <Navbar fixed='top'color="info" light expand="md">
        <NavbarBrand><img src={iconoperfil} alt='' /></NavbarBrand>
          <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                {props.nombre} <br/> {props.apellido}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href='/perfil'>
                  Ajustes de perfil
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Cerrar sesión
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
         <NavbarBrand><img src={Logoempresa} alt=''/></NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;
