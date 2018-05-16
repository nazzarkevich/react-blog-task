import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

const CustomNavbar = props => {
  return (
    <div>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">
                        <img src="https://image.flaticon.com/icons/png/512/206/206853.png" width="70px" height="auto"/>                            
                        Hanry
                    </a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight>
                <NavItem eventKey={1} componentClass={Link} to="/posts">
                    <Button bsStyle="info">All Posts</Button>                        
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} to="/posts/new">
                    <Button bsStyle="warning" onClick={() => props.modalShow}>Create</Button>                        
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  );
}

export default CustomNavbar;