import React from 'react'
import './congonhas.css'
// import sao_joao_delrei from '../../assets/images/SaoJoaoDelrei/saojoaodelrei.jpg'
import congonhassobre from '../../assets/images/Congonhas/congonhas2.jpg'
import congonhasobre2 from '../../assets/images/Congonhas/congonhas3.jpg'
import congonhaigreja from '../../assets/images/Congonhas/congonhas4.jpg'
import congonharomaria from '../../assets/images/Congonhas/congonhas5.jpg'
import congonhamuseu from '../../assets/images/Congonhas/congonhas6.jpg'
import congonhaobras from '../../assets/images/Congonhas/congonhas7.jpg'
import congonhacidade from '../../assets/images/Congonhas/congonhas8.jpg'

const Congonhas = () => {
    return (
        <div class="container-page">
            <p className="titulopag">Congonhas</p>
            <p className="title title-alt">Sobre a cidade</p>
            <div class="tabela">
                <div className="paragrafo1">
                A cidade de Congonhas, na região Central de Minas Gerais, guarda um dos mais relevantes conjuntos religiosos do Brasil colonial: o santuário do Bom Jesus de Matosinhos. Ali se destacam as estátuas dos 12 profetas, obra que, em 1985, recebeu o título de Patrimônio da Humanidade da Organização das Nações Unidas para a Educação, a Ciência e a Cultura (Unesco). A autoria é do escultor e arquiteto Antônio Francisco Lisboa, o Aleijadinho. Além dos profetas, o conjunto possui uma igreja e seis capelas com os Passos da Paixão, cujos personagens, também esculpidos por Aleijadinho, foram pintados por Manuel da Costa Athaíde. Os dois artistas se tornaram a maior expressão da arte colonial brasileira.
                </div>
                <div>
                        <img className="imagens" width="400" height="250" src={congonhassobre} alt="Imagem Sobre" />
                </div>
            </div>
            <div class="tabela">
                <div>
                        <img className="imagens" width="225" height="250" src={congonhasobre2} alt="Imagem Sobre" />
                </div>
                <div className="paragrafo2">
                    A cidade de Congonhas, na região Central de Minas Gerais, guarda um dos mais relevantes conjuntos religiosos do Brasil colonial: o santuário do Bom Jesus de Matosinhos. Ali se destacam as estátuas dos 12 profetas, obra que, em 1985, recebeu o título de Patrimônio da Humanidade da Organização das Nações Unidas para a Educação, a Ciência e a Cultura (Unesco). A autoria é do escultor e arquiteto Antônio Francisco Lisboa, o Aleijadinho. Além dos profetas, o conjunto possui uma igreja e seis capelas com os Passos da Paixão, cujos personagens, também esculpidos por Aleijadinho, foram pintados por Manuel da Costa Athaíde. Os dois artistas se tornaram a maior expressão da arte colonial brasileira.
                </div>
            </div>
            <p className="title title-alt">O que fazer na cidade?</p>
                <div class="tabela">
                    <div className="paragrafo2">
                        Santuário Bom Jesus de Matozinhos: arte e fé mineira.<br></br>
                        <br></br>
                        O complexo do Santuário do Bom Jesus de Matosinhos é o principal ponto turístico de Congonhas. Isso porque é considerado uma das obras-primas do barroco mundial. O conjunto também abriga a estátua dos 12 profetas em pedra sabão e seis passos no aclive frontal ao templo, ilustrando a Via Crucis. A principal inspiração para a construção do completo é a Igreja Bom Jesus do Monte, em Braga, Portugal.
                    </div>
                    <div>
                        <img className="imagens" width="400" height="250" src={congonhaigreja} alt="" />
                    </div>
            </div>
            <div class="tabela">
                    <div>
                        <img className="imagens" width="400" height="250" src={congonharomaria} alt="" />
                    </div>
                    <div className="paragrafo1">
                    Um pouco abaixo do Santuário, no final da Alameda das Palmeiras, é possível visitar a Romaria de Congonhas. Construída no início da década de 1930, primeiramente, era uma espécie de pousada com várias casas em círculo, ao redor de um imenso pátio. Naquela época, serviu para abrigar os pobres que iam à cidade participar do jubileu do Senhor Bom Jesus de Matozinhos. Os festejos datam desde 1770, e acontecem anualmente dentre o período de 7 a 14 de setembro.
                    </div>
            </div>
            <div class="tabela">
                    <div className="paragrafo2">
                    O Museu de Congonhas oferece informações históricas e de contexto para ampliar o conhecimento durante a visita ao Santuário. Isso porque ele é voltado tanto para o turismo cultural quanto religioso, uma vez que monitora e avalia a conservação dos espaços de visitação.
                    <br></br>
                    A proposta de museu de sítio foi feita para compreender melhor o lugar onde ele se encontra. Por isso, conta com exposição permanente de ex-votos desde o Século 18 até a única imagem existente de Aleijadinho.
                    </div>
                    <div>
                        <img className="imagens" width="400" height="250" src={congonhamuseu} alt="" />
                    </div>
            </div>
            <p className="title title-alt">Curiosidades</p>
            <div className="tabela">
                    <div>
                        <img className="imagens" width="200" height="350" src={congonhaobras} alt="" />
                    </div>
                    <div className="paragrafo1">
                    Congonhas reúne o maior conjunto da arte barroca do Mundo. Ao todo são 78 esculturas assinadas pelo Mestre Aleijadinho.
                        <br></br>
                       
                        O nome dos Doze Profetas representados por Aleijadinho são: Naum, Habacuque, Jonas, Amós, Abdias, Joel, Oséias, Daniel, Ezequiel, Baruc, Jeremias e Isaías.
                    </div>
            </div>
            <div className="tabela">
                <div className="paragrafo1">
                    O nome da cidade de Congonhas significa “Zona em que o mato desaparece: campo.” Isso porque no município existe a planta congonha, um arbusto medicinal e ornamental. A palavra Congõi (Congonhas) é de origem Tupi-guarani, mas em outras versões ela significa, COA=mato; NHONHA=sumido.
                </div>

                    <div>
                        <img className="imagens" width="400" height="250" src={congonhacidade} alt="" />
                    </div>



            </div>
    </div>

            )
}

export default Congonhas
