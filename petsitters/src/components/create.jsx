import React, { Component } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { Redirect } from 'react-router'

export default class Create extends Component {
    state = {
        redirect: false
    }
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        let name = this.name;
        let lastname = this.lastname;
        let address = this.address;
        let email = this.email;
        let phone = this.phone;
        let password = this.password;
        if(name.value !== ""){
            if(lastname.value !== ""){
                if(address.value !== ""){
                    if(email.value !== ""){
                        if(phone.value !== ""){
                            if(password.value !== ""){
                                this.setState({ redirect: true });
                            }
                        }
                    }
                }
                
            }
        }
    }
    render() {
        if(this.state.redirect) { return ( <Redirect to="/"/>)}
        return (
            <div className="responsiveBody">
                <Container className="m-t-50" style={{width:'70%'}}>
                    <h5 className="titleSec">Crea tu cuenta</h5>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control required type="text" placeholder="Nombre" ref={(c) => this.name = c} name="name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastname">
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control required type="text" placeholder="Apellidos" ref={(c) => this.lastname = c} name="lastname" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAddress">
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control required type="text" placeholder="Dirección" ref={(c) => this.address = c} name="address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electrónico</Form.Label>
                            <Form.Control required type="email" placeholder="Ingrese correo" ref={(c) => this.email = c} name="email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPhone">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control required type="number" placeholder="Teléfono celular" ref={(c) => this.phone = c} name="phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control required type="password" placeholder="Contraseña" ref={(c) => this.password = c} name="password" />
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
