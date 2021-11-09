import React from "react";
import { AreaSite } from "../styled";
import { AreaCarrousel } from "./styledHome";
import { Carousel } from 'react-bootstrap'

import OuroPreto from '../../../images/OuroPreto/ouro-preto1.jpg'
import Congonhas from '../../../images/Congonhas/congonhas1.jpg'
import Diamantina from '../../../images/Diamantina/diamantina1.jpg'
import Mariana from '../../../images/Mariana/mariana2.jpg'
import SaoJoaoDelrei from '../../../images/SaoJoaoDelRei/saojoaodelrei1.jpg'
import Sabara from '../../../images/Sabara/Sabara4.jpg'
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <AreaSite>
            <h1>Cidades Históricas</h1>

            <div className="tabela">
                <p>
                As cidades históricas guardam a memória do povo, uma cidade é considerada
                histórica quando suas construções são tombadas por algum órgão público,
                esse tipo de construção não pode ser derrubada nem alterada.

                <br /> No nosso projeto, desenvolvido pelo subgrupo “Mineiros” tem como
                objetivo apenas o aprendizado dos participantes, usamos React.Js e escolhemos
                seis cidades mineiras históricas, aproveite nosso site :)
                </p>
            </div>
            <AreaCarrousel>    
                <Carousel>
                    <Carousel.Item>
                        <Link to="/congonhas">
                            <img className='d-block w-100 img-responsive' src={Congonhas} alt="Congonhas" />
                        </Link>
                        <Carousel.Caption><h3 className="nome-cidade">Congonhas</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/diamantina">
                            <img className='d-block w-100 img-responsive' src={Diamantina} alt="Diamantina" />
                        </Link>
                        <Carousel.Caption><h3 className="nome-cidade">Diamantina</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/mariana">
                            <img className='d-block w-100 img-responsive' src={Mariana} alt="Mariana" />
                        </Link>
                        <Carousel.Caption><h3 className="nome-cidade">Mariana</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/ouro-preto">
                            <img className='d-block w-100 img-responsive' src={OuroPreto} alt="OuroPreto" />
                        </Link>
                        <Carousel.Caption><h3 className="nome-cidade">Ouro Preto</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/sabara">
                            <img className='d-block w-100 img-responsive' src={Sabara} alt="Sabara" />
                        </Link>
                        <Carousel.Caption><h3 className="nome-cidade">Sabará</h3></Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Link to="/sao-joao-delrei">
                            <img className='d-block w-100 img-responsive' src={SaoJoaoDelrei} alt="SaoJoaoDelrei" />
                        </Link>
                        <Carousel.Caption><h3 className="nome-cidade">São João del Rei</h3></Carousel.Caption>
                    </Carousel.Item>

                </Carousel>
            </AreaCarrousel>

        </AreaSite>
    );
}

export default Home;