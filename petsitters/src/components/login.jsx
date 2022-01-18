import React, { Component } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {IndexLinkContainer} from "react-router-bootstrap";
// import { useHistory } from 'react-router-dom';
// import { Redirect } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
// import { Redirect } from 'react-router'


export default class Login extends Component {
    state = {
        redirect: false
      }

    constructor(props) {
        super(props);
        // this.email = "";
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        // const history = useHistory();
        e.preventDefault();
        let email = this.email;
        // console.log(email.value);
        let password = this.password;
        // console.log(password.value);
        if(email.value !== ""){
            if(password.value !== ""){
                this.setState({ redirect: true });
            }
        }
        // if (redirect) {
        //     return <Redirect to='/List'/>;
        //   }
        //   return <RenderYourForm/>;
    }

    render() {
        
        return (
            <div>
                <Container className="m-t-50" style={{width:'50%'}}>
                <h5 className="titleSec">Inicia sesión</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo Electrónico</Form.Label>
                        <Form.Control required type="email" placeholder="Ingrese correo" ref={(c) => this.email = c} name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control required type="password" placeholder="Contraseña" ref={(c) => this.password = c} name="password"/>
                    </Form.Group>
                    
                    <Button variant="outline-primary" type="submit" onClick={this.onSubmit}>
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
