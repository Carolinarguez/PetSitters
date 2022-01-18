import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class Schedule extends Component {
    render() {
        return (
            <div>
                <Container className="m-t-50" style={{width:'70%'}}>
                <h5 className="titleSec">Agenda a tu mascota</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Tipo de mascota</Form.Label>
                        <Form.Control required type="text" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLastname">
                        <Form.Label>Nombre de la mascota</Form.Label>
                        <Form.Control required type="text" placeholder="Apellidos" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Fecha Inicial</Form.Label>
                        <Form.Control required type="date" placeholder="Dirección" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Fecha Final</Form.Label>
                        <Form.Control required type="date" placeholder="Ingrese correo" />
                    </Form.Group>
                    
                    <Button variant="outline-primary" type="submit">
                        Agendar mascota
                    </Button>
                </Form>
                </Container>
            </div>
        )
    }
}
