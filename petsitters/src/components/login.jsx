import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {IndexLinkContainer} from "react-router-bootstrap";
import { Link } from 'react-router-dom';

export default class Login extends Component {
    render() {
        return (
            <div>
                <Container className="m-t-50" style={{width:'50%'}}>
                <h5 className="titleSec">Inicia sesión</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control required type="email" placeholder="Ingrese correo" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control required type="password" placeholder="Contraseña" />
                    </Form.Group>
                    
                    <Button variant="outline-primary" type="submit">
                        Entrar
                        {/* <IndexLinkContainer to="/List"><label>Entrar</label></IndexLinkContainer> */}
                    </Button>
                    <br/>
                    <IndexLinkContainer to="/Create"><Button variant="link"><p>Crear una cuenta</p></Button></IndexLinkContainer>
                </Form>
                </Container>
            </div>
        )
    }
}
