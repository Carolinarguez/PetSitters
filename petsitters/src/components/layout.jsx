import React, { Component } from 'react';
import {Navbar, Nav, NavItem, Container} from "react-bootstrap";
import {IndexLinkContainer} from "react-router-bootstrap";

export default class Layout extends Component {
    render() {
        return (
            <div>
                <header className='sticky-top'>
                    <Navbar bg="success" >
                        <Nav className='mr-auto'>
                            <NavItem><IndexLinkContainer className="text-light" to="/"><Nav.Link><p>Home</p></Nav.Link></IndexLinkContainer></NavItem>
                            <NavItem><IndexLinkContainer className="text-light" to="/Login"><Nav.Link><p>Login</p></Nav.Link></IndexLinkContainer></NavItem>
                            <NavItem><IndexLinkContainer className="text-light" to="/List"><Nav.Link><p>Encontrar cuidador</p></Nav.Link></IndexLinkContainer></NavItem>
                        </Nav>
                    </Navbar>
                </header>
                
                <div>
                    <Container fluid>{this.props.children}</Container>
                    
                </div>
            </div>
        )
    }
}
