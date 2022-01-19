import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

export default class Schedule extends Component {
    render() {
        return (
            <div className="responsiveBody">
                <Container className="m-t-50" style={{width:'70%'}}>
                <h5 className="titleSec">Agenda a tu mascota</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicType">
                        <Form.Label>Tipo de mascota</Form.Label>
                        <Form.Control required type="text" placeholder="Tipo de mascota" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre de la mascota</Form.Label>
                        <Form.Control required type="text" placeholder="Nombre de tu mascota" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicIdate">
                        <Form.Label>Fecha Inicial</Form.Label>
                        <Form.Control required type="date" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFDate">
                        <Form.Label>Fecha Final</Form.Label>
                        <Form.Control required type="date"/>
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
