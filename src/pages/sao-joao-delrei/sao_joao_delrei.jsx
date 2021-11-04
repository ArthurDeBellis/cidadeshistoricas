import React from 'react'
import './sao_joao_delrei.css'
// import sao_joao_delrei from '../../assets/images/SaoJoaoDelrei/saojoaodelrei.jpg'
import Saojoaoigreja from '../../assets/images/SaoJoaoDelrei/saojoaodelrei1.jpg'
import Saojoaotrem from '../../assets/images/SaoJoaoDelrei/saojoaodelrei2.jpg'
import Saojoaorua from '../../assets/images/SaoJoaoDelrei/saojoaodelrei3.jpg'
import Saojoaoigrejas from '../../assets/images/SaoJoaoDelrei/saojoaodelrei4.jpg'

const sao_joao_delrei = () => {
    return (
        <div class="container-page">
            <p className="titulopag">São João del Rei</p>
            <p className="title title-alt">Sobre a cidade</p>
            <div class="tabela">
                <div>
                        <img className="imagens" width="400" height="250" src={Saojoaoigreja} alt="Imagem Sobre" />
                </div>
                <div className="paragrafo1">
                    São João del-Rei é um município brasileiro do estado de Minas Gerais. Localizada na região do Campo das Vertentes, é uma das maiores cidades setecentistas mineiras. A cidade foi fundada por bandeirantes paulistas, considera-se Tomé Portes del-Rei como seu fundador.
                </div>
            </div>
            <p className="title title-alt">O que fazer na cidade?</p>
                <div class="tabela">
                    <div className="paragrafo2">
                        Uma opção bem legal é viajar de Tiradentes para São João del Rei na Maria Fumaça! O Passeio de trem custa R$60 somente ida e R$70 ida e volta no mesmo dia. Se levar a carteira de estudante ou professor paga meia, assim como idosos e crianças. O trajeto do trem até Tiradentes dura cerca de uma hora e percorre o interior da região rodeada por pequenos sítios com vaquinhas e agricultura familiar..<br></br>
                    </div>
                    <div>
                        <img className="imagens" width="400" height="250" src={Saojoaotrem} alt="Imagem trem" />
                    </div>
                </div>
                <div className="tabela">
                        <div>
                            <img className="imagens" width="400" height="250" src={Saojoaoigrejas} alt="Rua das igrejas" />
                        </div>
                        <div className="paragrafo1">
                            Uma das coisas para fazer em São João del Rei é explorar as igrejas. A principal rua do centro histórico é a Getúlio Vargas, a qual começa com a Igreja Nossa Senhora do Carmo termina com a igreja Nossa Senhora do Rosário. No meio do caminho você irá encontrar a Igreja Nossa Senhora do Pilar e o Museu de Arte Sacra além de muitas lojinhas.
                        </div>
                </div>
            <p className="title title-alt">Curiosidades</p>
            <div className="tabela">


                    <div className="paragrafo1">
                    Você deve saber que São João del Rei é conhecida como a terra onde os sinos falam, mas sabe de onde veio título? Aqui os sinos tocados dia e noite pelas igrejas não informam somente as horas. A comunicação das badaladas informa eventos específicos à população, como chamados para missas, enterros e comemorações da cidade desde o século XVIII.
                        <br></br>
                        <br></br>
                        Ainda nos dias atuais, muitos moradores da região reconhecem e diferenciam os tipos de celebrações apenas pelas badaladas dos sinos da cidade. A título de curiosidade, são mais de 40 toques conhecidos dentre 20 categorias diferentes. Essa é uma das curiosidades sobre São João del Rei que mais encantam os turistas.
                    </div>
                    <div>
                        <img className="imagens" width="400" height="250" src={Saojoaorua} alt="Rua da cidade" />
                    </div>
            </div>
        </div>

    )
}


export default sao_joao_delrei
