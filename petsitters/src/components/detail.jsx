import React, { Component } from 'react'
import { Image } from "react-bootstrap";
import { petSitters } from '../common/petSitters';


export default class Detail extends Component {
    constructor(props){
        super(props)
        this.state = {
            petSitters : petSitters,
            petSitter : {name:"", photo:"", location:"", rating:""}
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.id);
        this.setState({
            petSitter : this.state.petSitters[this.props.match.params.id]
        })
    }
    

    render() {
        const {name, photo, location, rating} = this.state.petSitter
        return (
            <div>
                <h1>
                {name} 
                </h1>
                <Image src={photo} thumbnail style={{width:'100px'}}></Image> 
                <h5>
                {location} 

                </h5>
                <p>
                {rating}

                </p>
            </div>
        )
    }
}
