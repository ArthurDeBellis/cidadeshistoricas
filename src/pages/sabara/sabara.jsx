import React from 'react'
import './sabara.css'
//import OuroPreto from '../../assets/images/ouro_preto.jpg'
import Sabara2 from '../../assets/images/sabara/Sabara2.jpg'
import Sabara3 from '../../assets/images/sabara/Sabara3.jpg'
import Sabara4 from '../../assets/images/sabara/Sabara4.jpg'
import Sabara5 from '../../assets/images/sabara/Sabara5.jpg'


const Sabara = () => {
    return (
        <div class="container-page">
            <p className="titulopag">SABARÁ</p>
            <p className="title title-alt">Sobre a cidade</p>
            <div class="tabela">
                <div>
                        <img className="imagens" width="400" height="250" src={Sabara5} alt="Imagem Sobre" />
                </div>
                <div className="paragrafo1">
                        Localizada na região metropolitana da capital mineira, a cidade de Sabará
                        tem sua origem datada ao fim do século XVII, mais precisamente em 1674,
                        quando chegou à região a bandeira de Fernão Dias Paes.

                        <br />Seu destaque se dava muito à exploração do ouro, essa exploração
                        fez até mesmo com que a coroa portuguesa instalasse casas de fundição
                        pela cidade, a fim de cobrar impostos sobre a produção aurífera.
                </div>
            </div>
            <p className="title title-alt">O que fazer na cidade?</p>
            <div class="tabela">

                    <div className="paragrafo2">
                    Segundo a própria prefeitura da cidade, no Centro Histórico está localizada
                    a maioria dos atrativos históricos e arquitetônicos: igrejas do século XVIII,
                    o Teatro Municipal, Museu do Ouro, chafarizes e o casario de arquitetura
                    colonial. Há igrejas em Sabará que mesclam características artísticas de
                    diferentes fases do barroco mineiro. A Matriz de Nossa Senhora da Conceição
                    apresenta características de três períodos da Arte Barroca, fato raro nas
                    cidades históricas de Minas Gerais.

                    </div>
                    <div>
                        <img className="imagens" width="400" height="250" src={Sabara2} alt="Imagem Igreja" />
                    </div>


            </div>
            <div className="tabela">

                    <div>
                        <img className="imagens" width="400" height="250" src={Sabara3} alt="Imagem Comida" />
                    </div>
                    <div className="paragrafo1">
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
                    </div>

            </div>
            <p className="title title-alt">Curiosidades</p>
            <div className="tabela">
              <div className="paragrafo2">
                  Algumas das curiosidades da cidade são citadas pela prefeitura de Sabará,
                  dentre elas, temos:

                  <br /> - Sabará foi o primeiro povoado colonial de Minas.
                  <br /> - A cidade é a "mãe" da capital do estado.
                  <br /> - Possui o segundo teatro mais antigo de todo Brasil.
                  <br /> - Ela possui a única casa de intendência e fundição ainda de pé no país.
                  <br /> - Sabará é uma das poucas cidades mineiras que possui as três fases do Barroco.



              </div>
              <div>
                  <img className="imagens" width="400" height="250" src={Sabara4} alt="Imagem Mina" />
              </div>

            </div>
        </div>

    )
}

export default Sabara
