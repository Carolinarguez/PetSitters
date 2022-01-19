import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { Redirect } from 'react-router'

export default class Schedule extends Component {
    state = {
        redirect: false
    }
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        let type = this.type;
        let name = this.name;
        let idate = this.idate;
        let fdate = this.fdate;
        if(type.value !== ""){
            if(name.value !== ""){
                if(idate.value !== ""){
                    if(fdate.value !== ""){
                        this.setState({ redirect: true });
                    }
                }
                
            }
        }
    }
    render() {
        if(this.state.redirect) { return ( <Redirect to="/List"/>)}
        return (
            <div className="responsiveBody">
                <Container className="m-t-50" style={{width:'70%'}}>
                <h5 className="titleSec">Agenda a tu mascota</h5>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicType">
                        <Form.Label>Tipo de mascota</Form.Label>
                        <Form.Control required type="text" placeholder="Tipo de mascota" ref={(c) => this.type = c} name="type" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Nombre de la mascota</Form.Label>
                        <Form.Control required type="text" placeholder="Nombre de tu mascota" ref={(c) => this.name = c} name="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicIdate">
                        <Form.Label>Fecha Inicial</Form.Label>
                        <Form.Control required type="date" ref={(c) => this.idate = c} name="idate" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicFDate">
                        <Form.Label>Fecha Final</Form.Label>
                        <Form.Control required type="date" ref={(c) => this.fdate = c} name="fdate" />
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
