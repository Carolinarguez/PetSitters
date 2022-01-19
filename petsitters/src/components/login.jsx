import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {IndexLinkContainer} from "react-router-bootstrap";
import { Redirect } from 'react-router'


export default class Login extends Component {
    state = {
        redirect: false
    }

    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.email;
        let password = this.password;
        if(email.value !== ""){
            if(password.value !== ""){
                this.setState({ redirect: true });
            }
        }
    }

    render() {
        if(this.state.redirect) { return ( <Redirect to="/"/>)}
        return (
            <div className="responsiveBody">
                <Container className="m-t-50" style={{width:'50%'}}>
                <h5 className="titleSec">Inicia sesión</h5>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control required type="email" placeholder="Ingrese correo" ref={(c) => this.email = c} name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control required type="password" placeholder="Contraseña" ref={(c) => this.password = c} name="password"/>
                    </Form.Group>
                    
                    <Button variant="outline-primary" type="submit">
                        Entrar
                    </Button>
                    <br/>
                    <IndexLinkContainer to="/Create"><Button variant="link"><p>Crear una cuenta</p></Button></IndexLinkContainer>
                </Form>
                </Container>
            </div>
            
        )
       
    }
}
