import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="banner">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://petloversites.com/wp-content/uploads/2020/07/bannernosotros.jpg"
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.adobe.com/es/express/discover/templates/banner/media_1d475ea237f3632359c1538d48da93b1deff5ed7e.png?width=2000&format=webply&optimize=medium"
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://petloversites.com/wp-content/uploads/2020/07/bannernosotros.jpg"
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>

                <br/>
                <div className="responsiveBody">
                    <h4 style={{color: '#15852E'}}>Acerca de Nosotros</h4>
                    <p style={{textAlign: 'justify'}}>PetSitters es una plataforma que busca ayudar a personas con mascotas a encontrar un buen candidato 
                    para cuidar de su mascota cuando lo necesite. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quibusdam ducimus ab consectetur iste 
                    vero veniam sed adipisci quasi, laborum voluptatum at itaque. Fugiat, veritatis soluta aspernatur natus corrupti ipsa. Lorem ipsum dolor, sit amet 
                    consectetur adipisicing elit. Aut error cupiditate rem accusantium deleniti dignissimos! Soluta exercitationem debitis modi rerum excepturi labore laborum quos magni alias optio nihil, sit dolor.</p>
                    <br/>
                    <h4 style={{color: '#15852E'}}>Misión</h4>
                    <p style={{textAlign: 'justify'}}>Ser una empresa de confianza para las personas que creen en esta empresa, fomentando el amor por lo animales y el buen trato hacia ellos.</p>
                    <br/>
                    <h4 style={{color: '#15852E'}}>Visión</h4>
                    <p style={{textAlign: 'justify'}}>Proteger la integridad y bienestar de los animales a través de la colaboración con personas responsables, convirtiéndonos
                        en una gran empresa, generando conciencia en las personas.
                    </p>

                </div>
            </div>
        )
    }
}
