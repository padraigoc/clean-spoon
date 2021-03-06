import React from 'react';
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from 'reactstrap';

import './logo.png'


class nav extends React.Component {
  render() {
    return (
      <div className="navigation">
        <Navbar expand="md">
          <NavbarBrand href="/"><img src={require('./logo.png')} alt="Clean Spoon logo" width="200" /></NavbarBrand>
            <Nav navbar>
              <NavItem>
                <NavLink href="/fridge"><p className="links">Fridge</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/list"><p className="links">Shopping List</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/profile"><p className="links">Profile</p></NavLink>
              </NavItem>
              <NavItem> <Button 
              color="primary" className="loginBtn recipe-search" href="/search">Recipe Search</Button>
              </NavItem>
            </Nav>
        </Navbar> 
      </div>
    );
  }
}

export default nav;