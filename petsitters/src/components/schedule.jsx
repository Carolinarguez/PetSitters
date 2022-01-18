import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

export default class Schedule extends Component {
    render() {
        return (
            <div className="m-t-50" style={{width:'70%'}}>
                AGENDAR A MI MASCOTA

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
            </div>
        )
    }
}
