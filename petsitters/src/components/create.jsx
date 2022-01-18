import React, { Component } from 'react'
import { Button, Form, Container } from 'react-bootstrap'

export default class Create extends Component {
    render() {
        return (
            <div>
                <Container className="m-t-50" style={{width:'70%'}}>
                <h5 className="titleSec">Crea tu cuenta</h5>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control required type="text" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control required type="text" placeholder="Apellidos" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control required type="text" placeholder="Dirección" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control required type="email" placeholder="Ingrese correo" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control required type="number" placeholder="Teléfono celular" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control required type="password" placeholder="Contraseña" />
                    </Form.Group>
                    
                    <Button variant="outline-primary" type="submit">
                        Crear cuenta
                    </Button>
                </Form>
                </Container>
            </div>
        )
    }
}
