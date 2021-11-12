import React from "react";

import { AreaSite } from "../styled";

import congonhassobre from '../../../images/Congonhas/congonhas2.jpg'
import congonhasobre2 from '../../../images/Congonhas/congonhas3.jpg'
import congonhaigreja from '../../../images/Congonhas/congonhas4.jpg'
import congonhamuseu from '../../../images/Congonhas/congonhas6.jpg'
import congonhaobras from '../../../images/Congonhas/congonhas7.jpg'
import congonhacidade from '../../../images/Congonhas/congonhas8.jpg'

const Home = () => {
    return(
        <AreaSite>
            <h1>Congonhas</h1>

            <h2>Sobre a cidade</h2>

            <div className="tabela">
                <p>
                    A cidade de Congonhas, na região Central de Minas Gerais, guarda um dos mais 
                    relevantes conjuntos religiosos do Brasil colonial: o santuário do Bom Jesus 
                    de Matosinhos. Ali se destacam as estátuas dos 12 profetas, obra que, em 1985, 
                    recebeu o título de Patrimônio da Humanidade da Organização das Nações Unidas 
                    para a Educação, a Ciência e a Cultura (Unesco). A autoria é do escultor e 
                    arquiteto Antônio Francisco Lisboa, o Aleijadinho. Além dos profetas, o conjunto 
                    possui uma igreja e seis capelas com os Passos da Paixão, cujos personagens, 
                    também esculpidos por Aleijadinho, foram pintados por Manuel da Costa Athaíde. 
                    Os dois artistas se tornaram a maior expressão da arte colonial brasileira.
                </p>

                <img 
                    src={congonhassobre}
                    alt="Imagem sobre"
                />
            </div>

            <div className="tabela">
                <img 
                    src={congonhasobre2}
                    alt="Imagem sobre 2"
                />

                <p>
                A cidade de Congonhas, na região Central de Minas Gerais, guarda um dos mais relevantes 
                conjuntos religiosos do Brasil colonial: o santuário do Bom Jesus de Matosinhos. Ali se 
                destacam as estátuas dos 12 profetas, obra que, em 1985, recebeu o título de Patrimônio 
                da Humanidade da Organização das Nações Unidas para a Educação, a Ciência e a Cultura 
                (Unesco). A autoria é do escultor e arquiteto Antônio Francisco Lisboa, o Aleijadinho. 
                Além dos profetas, o conjunto possui uma igreja e seis capelas com os Passos da Paixão, 
                cujos personagens, também esculpidos por Aleijadinho, foram pintados por Manuel da Costa 
                Athaíde. Os dois artistas se tornaram a maior expressão da arte colonial brasileira.
                </p>
            </div>

            <h2>O que fazer na cidade</h2>

            <div className="tabela">
                <p>
                    <h4>Santuário Bom Jesus de Matozinhos: arte e fé mineira.</h4>
                    O complexo do Santuário do Bom Jesus de Matosinhos é o principal 
                    ponto turístico de Congonhas. Isso porque é considerado uma 
                    das obras-primas do barroco mundial. O conjunto também abriga 
                    a estátua dos 12 profetas em pedra sabão e seis passos no aclive 
                    frontal ao templo, ilustrando a Via Crucis. A principal inspiração 
                    para a construção do completo é a Igreja Bom Jesus do Monte, em Braga, 
                    Portugal.
                </p>
                <img 
                    src={congonhaigreja}
                    alt="Imagem  Igreja"
                />
            </div>

            <div className="tabela">
                <img 
                    src={congonhamuseu}
                    alt="Imagem  Museu"
                />
                <p>
                    O Museu de Congonhas oferece informações históricas e de contexto para ampliar o 
                    conhecimento durante a visita ao Santuário. Isso porque ele é voltado tanto para 
                    o turismo cultural quanto religioso, uma vez que monitora e avalia a conservação 
                    dos espaços de visitação.
                    <br />
                    A proposta de museu de sítio foi feita para compreender melhor o lugar onde ele se 
                    encontra. Por isso, conta com exposição permanente de ex-votos desde o Século 18 
                    até a única imagem existente de Aleijadinho.
                </p>
            </div>

            <h2>Curiosidades</h2>

            <div className="tabela">
                <img 
                    src={congonhaobras}
                    alt="Imagem  Obras"
                />
                <p>
                    Congonhas reúne o maior conjunto da arte barroca do Mundo. Ao todo são 78 
                    esculturas assinadas pelo Mestre Aleijadinho.
                    <br />
                    O nome dos Doze Profetas representados por Aleijadinho são: Naum, Habacuque, 
                    Jonas, Amós, Abdias, Joel, Oséias, Daniel, Ezequiel, Baruc, Jeremias e Isaías.
                </p>
                
            </div>
            <div className="tabela">
                <p>
                O nome da cidade de Congonhas significa “Zona em que o mato desaparece: campo.” 
                Isso porque no município existe a planta congonha, um arbusto medicinal e ornamental. 
                A palavra Congõi (Congonhas) é de origem Tupi-guarani, mas em outras versões ela 
                significa, COA=mato; NHONHA=sumido.
                </p>
                <img 
                    src={congonhacidade}
                    alt="Imagem  Cidade"
                />
            </div>
        </AreaSite>
    );
}

export default Home;