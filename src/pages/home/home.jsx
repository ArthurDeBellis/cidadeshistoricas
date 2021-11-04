import React from 'react'
import './home.css'
import OuroPreto from '../../assets/images/OuroPreto/ouro-preto1.jpg'
import Congonhas from '../../assets/images/Congonhas/congonhas1.jpg'
import Diamantina from '../../assets/images//Diamantina/diamantina1.jpg'
import Mariana from '../../assets/images/Mariana/mariana2.jpg'
import Sabara from '../../assets/images/sabara/Sabara7.jpg'
import SaoJoaoDelrei from '../../assets/images/SaoJoaoDelrei/saojoaodelrei1.jpg'

import { Row, Col, Container, Carousel } from 'react-bootstrap'


const Home = () => {
    return (
      <Container className='tela'>
        <h3 className='text-title'>CIDADES HISTÓRICAS</h3>
        <p className='text-page'>
        As cidades históricas guardam a memória do povo, uma cidade é considerada
        histórica quando suas construções são tombadas por algum órgão público,
        esse tipo de construção não pode ser derrubada nem alterada.

        <br /> No nosso projeto, desenvolvido pelo subgrupo “Mineiros” tem como
        objetivo apenas o aprendizado dos participantes, usamos React.Js e escolhemos
        seis cidades mineiras históricas, aproveite nosso site :)

        </p>
        <Row>

          <Col>
            <Carousel>

              <Carousel.Item>
                <a href="/ouro-preto">
                <img
                  className='d-block w-100 img-responsive'
                  src={OuroPreto}
                  alt='OuroPreto'
                />
                </a>
                <Carousel.Caption>
                  <h3 className='text'>Ouro Preto</h3>
                </Carousel.Caption>
              </Carousel.Item>


              <Carousel.Item>
                <a href="/congonhas">
                <img
                  className='d-block w-100 img-responsive'
                  src={Congonhas}
                  alt='Congonhas'
                />
                </a>
                <Carousel.Caption>
                  <h3 className='text'>Congonhas</h3>
                </Carousel.Caption>
              </Carousel.Item>



              <Carousel.Item>
                <a href="/diamantina">
                <img
                  className='d-block w-100 img-responsive'
                  src={Diamantina}
                  alt='Diamantina'
                />
                </a>
                <Carousel.Caption>
                  <h3 className='text'>Diamantina</h3>
                </Carousel.Caption>
              </Carousel.Item>



              <Carousel.Item>
                <a href="/mariana">
                <img
                  className='d-block w-100 img-responsive'
                  src={Mariana}
                  alt='Mariana'
                />
                </a>
                <Carousel.Caption>
                  <h3 className='text'>Mariana</h3>
                </Carousel.Caption>
              </Carousel.Item>



              <Carousel.Item>
                <a href="/sabara">
                <img
                  className='d-block w-100 img-responsive'
                  src={Sabara}
                  alt='Sabara'
                />
                </a>
                <Carousel.Caption>
                  <h3 className='text'>Sabará</h3>
                </Carousel.Caption>
              </Carousel.Item>



              <Carousel.Item>
                <a href="/sao-joao-delrei">
                <img
                  className='d-block w-100 img-responsive'
                  src={SaoJoaoDelrei}
                  alt='SaoJoaoDelrei'
                />
                </a>
                <Carousel.Caption>
                  <h3 className='text'>São João Delrei</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    )
}

export default Home
