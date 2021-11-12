import React from "react";

import { AreaSite } from "../styled";

import Saojoaoigreja from '../../../images/SaoJoaoDelRei/saojoaodelrei1.jpg'
import Saojoaotrem from '../../../images/SaoJoaoDelRei/saojoaodelrei2.jpg'
import Saojoaorua from '../../../images/SaoJoaoDelRei/saojoaodelrei3.jpg'
import Saojoaoigrejas from '../../../images/SaoJoaoDelRei/saojoaodelrei4.jpg'

const Home = () => {
    return(
        <AreaSite>
            <h1>São João del Rei</h1>

            <h2>Sobre a cidade</h2>
            
            <div className="tabela">
                <p>
                São João del-Rei é um município brasileiro do estado de Minas Gerais. Localizada na região 
                do Campo das Vertentes, é uma das maiores cidades setecentistas mineiras. A cidade foi fundada 
                por bandeirantes paulistas, considera-se Tomé Portes del-Rei como seu fundador.
                </p>
                <img
                    src={Saojoaoigreja}
                    alt="Imagem Sobre"
                />
            </div>

            <h2>O que fazer na cidade</h2>
            
            <div className="tabela">
                <p>
                Uma opção bem legal é viajar de Tiradentes para São João del Rei na Maria Fumaça! O Passeio de 
                trem custa R$60 somente ida e R$70 ida e volta no mesmo dia. Se levar a carteira de estudante 
                ou professor paga meia, assim como idosos e crianças. O trajeto do trem até Tiradentes dura 
                cerca de uma hora e percorre o interior da região rodeada por pequenos sítios com vaquinhas 
                e agricultura familiar.
                </p>
                <img
                    src={Saojoaotrem}
                    alt="Imagem trem"
                />
            </div>

            <div className="tabela">
                <img
                    src={Saojoaoigrejas}
                    alt="Rua das Igrejas"
                />
                <p>
                Uma das coisas para fazer em São João del Rei é explorar as igrejas. A principal rua do 
                centro histórico é a Getúlio Vargas, a qual começa com a Igreja Nossa Senhora do Carmo 
                termina com a igreja Nossa Senhora do Rosário. No meio do caminho você irá encontrar a 
                Igreja Nossa Senhora do Pilar e o Museu de Arte Sacra além de muitas lojinhas.
                </p>
            </div>
            
            <h2>Curiosidades</h2>
            
            <div className="tabela">
                <p>
                Você deve saber que São João del Rei é conhecida como a terra onde os sinos falam, mas sabe de onde 
                veio título? Aqui os sinos tocados dia e noite pelas igrejas não informam somente as horas. 
                A comunicação das badaladas informa eventos específicos à população, como chamados para missas, 
                enterros e comemorações da cidade desde o século XVIII.
                <br />
                Ainda nos dias atuais, muitos moradores da região reconhecem e diferenciam os tipos de celebrações 
                apenas pelas badaladas dos sinos da cidade. A título de curiosidade, são mais de 40 toques 
                conhecidos dentre 20 categorias diferentes. Essa é uma das curiosidades sobre São João del Rei 
                que mais encantam os turistas.
                </p>
                <img
                    src={Saojoaorua}
                    alt="Rua da Cidade"
                />
            </div>
        </AreaSite>
    );
}

export default Home;