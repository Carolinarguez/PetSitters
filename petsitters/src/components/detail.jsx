import React, { Component } from 'react'
import { Button, Container, Image, Table } from "react-bootstrap";
import { petSitters } from '../common/petSitters';


export default class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            petSitters : petSitters,
            petSitter : {name:"", photo:"", location:"", rating:"", reviews:[]}
        }
    }

    componentDidMount() {
        this.setState({
            petSitter : this.state.petSitters[this.props.match.params.id]
        })
    }
    

    render() {
        const {name, photo, location, rating, age, type, reviews} = this.state.petSitter
        return (
            <div>
                <div>
                    <div style={{width: '20%'},{display: 'inline-block'}}><Image style={{width: '50%'}}src={photo} thumbnail></Image> </div>
                    <div style={{width: '80%'}, {display: 'inline-block'}}>
                    <h1 style={{color: '#15852E'}}>
                        {name} 
                    </h1>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Edad</p>
                                <h6 className="text-muted f-w-400">{age}</h6>
                        </div>
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Ubicación</p>
                            <h6 className="text-muted f-w-400">{location}</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Tipo de mascota</p>
                                <h6 className="text-muted f-w-400">{type}</h6>
                        </div>
                        <div className="col-sm-6">
                            <p className="m-b-10 f-w-600">Puntuación</p>
                            <h6 className="text-muted f-w-400">{rating}</h6>
                        </div>
                    </div>
                    </div>
                </div>
                <br/>
                <p>
                    <h4 style={{color: '#15852E'}}>Reseñas</h4>
                    <Table>
                        <tbody>
                            {this.state.petSitter.reviews.map((review, index) => 
                            <tr key={index}>
                                <td>
                                    <p style={{color: '#676A67'}} className="m-b-10 f-w-600">{review.author}</p>
                                    {review.comment}
                                </td>
                            </tr>
                                )}
                        </tbody>
                    </Table>
                </p>
                <Button href="/Schedule"variant="outline-primary" type="submit"> Agendar días
                {/* <IndexLinkContainer to="/Schedule"><label>Agendar días</label></IndexLinkContainer> */}
                </Button>
            </div>
        )
    }
}
