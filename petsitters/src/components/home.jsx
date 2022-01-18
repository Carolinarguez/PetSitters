import React, { Component } from 'react'
import { Container, Image } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                PUBLICIDAD CARRUSEL


                <div className="banner">
                    <Image className="img-fluid" src="https://petloversites.com/wp-content/uploads/2020/07/bannernosotros.jpg"></Image>
                </div>
                <br/>
                <div>
                    <h4>Acerca de Nosotros</h4>
                    <p><bold>PetSitters</bold> es una plataforma que busca ayudar a personas con mascotas a encontrar un buen candidato 
                    para cuidar de su mascota cuando lo necesite</p>

                    <br/>
                    <h4>Misión</h4>
                    <p>Ser una empresa de confianza para las personas que creen en esta empresa, fomentando el amor por lo animales y el buen trato hacia ellos.</p>
                    <br/>
                    <h4>Visión</h4>
                    <p>Proteger la integridad y bienestar de los animales a través de la colaboración con personas responsables, convirtiéndonos
                        en una gran empresa, generando conciencia en las personas.
                    </p>

                </div>
            </div>
        )
    }
}
