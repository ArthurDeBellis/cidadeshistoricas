import React from "react";

import { AreaSite } from "../styled";

import Sabara1 from '../../../images/Sabara/Sabara1.jpg'
import Sabara2 from '../../../images/Sabara/Sabara2.jpg'
import Sabara3 from '../../../images/Sabara/Sabara3.jpg'
import Sabara4 from '../../../images/Sabara/Sabara4.jpg'


const Home = () => {
    return(
        <AreaSite>
            <h1>Sabará</h1>

            <h2>Sobre a cidade</h2>
            <div className="tabela">
                <img src={Sabara1} alt="Pintura" />

                <p>
                    Localizada na região metropolitana da capital mineira, a cidade de Sabará
                    tem sua origem datada ao fim do século XVII, mais precisamente em 1674,
                    quando chegou à região a bandeira de Fernão Dias Paes.

                    <br />Seu destaque se dava muito à exploração do ouro, essa exploração
                    fez até mesmo com que a coroa portuguesa instalasse casas de fundição
                    pela cidade, a fim de cobrar impostos sobre a produção aurífera.
                </p>
            </div>

            <h2>O que fazer na cidade</h2>
            <div className="tabela">
                <p>
                    Segundo a própria prefeitura da cidade, no Centro Histórico está localizada
                    a maioria dos atrativos históricos e arquitetônicos: igrejas do século XVIII,
                    o Teatro Municipal, Museu do Ouro, chafarizes e o casario de arquitetura
                    colonial. Há igrejas em Sabará que mesclam características artísticas de
                    diferentes fases do barroco mineiro. A Matriz de Nossa Senhora da Conceição
                    apresenta características de três períodos da Arte Barroca, fato raro nas
                    cidades históricas de Minas Gerais.
                </p>
                <img src={Sabara2} alt="Praça" />
            </div>
            
            <div className="tabela">
                <img src={Sabara3} alt="Igreja" />

                <p>
                    Um dos destaques fica para a Igreja Matriz de Nossa Senhora da Conceição, que
                    está representada nesta figura. Inaugurada em 1710, possui uma das mais
                    exuberantes talhas da arte barroca mineira, sendo considerada uma das mais
                    ricas matrizes do século XVIII.
                    <br />A igreja apresenta três naves.
                    Possui ainda os altares laterais, púlpitos de fina elaboração, pinturas de qualidade
                    e influência oriental. A Igreja Matriz de Nossa Senhora da Conceição de Sabará é uma
                    das mais antigas igrejas do estado de Minas Gerais.
                    <br />Está situada na parte baixa da cidade, ou seja, na autêntica parte velha que
                    hoje na realidade, tem aspecto mais novo do que a região central de Sabará. É
                    popularmente chamada de igreja nova ou grande, tradição que vem desde a época da
                    sua construção em substituição a capela primitiva existente no mesmo local.
                </p>
            </div>
            <h2>Curiosidades</h2>
            <div className="tabela">
                
                <ul>
                    <p>
                        Algumas das curiosidades da cidade são citadas pela prefeitura de Sabará,
                        dentre elas, temos:
                    </p>
                    <li>Sabará foi o primeiro povoado colonial de Minas.</li>
                    <li>A cidade é a "mãe" da capital do estado.</li>
                    <li>Possui o segundo teatro mais antigo de todo Brasil.</li>
                    <li>Ela possui a única casa de intendência e fundição ainda de pé no país.</li>
                    <li>Sabará é uma das poucas cidades mineiras que possui as três fases do Barroco.</li>
                </ul>
                  
                
                <img src={Sabara4} alt="Igreja - Curiosidades" />
            </div>


        </AreaSite>
    );
}

export default Home;