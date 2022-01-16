import React, { Component } from 'react';
import { Table, Image, Button} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import { petSitters } from '../common/petSitters';



export default class List extends Component {
    constructor(props){
        super(props)
        this.state = {
            petSitters : petSitters
        }
    }
    render() {
        return (
            <div>
                <Table>
                    <thead> 
                        <tr>
                            <th>Foto</th>
                            <th>Nombre</th>
                            <th>Ubicacion</th>
                            <th>Rating</th>
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.petSitters.map((petsitter, index) => 
                        <tr key={index}>
                            <td><Image src={petsitter.photo} thumbnail style={{width:'100px'}}></Image></td>
                            <td>{petsitter.name}</td>
                            <td>{petsitter.location}</td>
                            <td>{petsitter.rating}</td>
                            <td><LinkContainer to={'/Detail/' + index}><Button>Detail</Button></LinkContainer></td>
                        </tr>
                             )}
                    </tbody>
                </Table>
            </div>
        )
    }
}
