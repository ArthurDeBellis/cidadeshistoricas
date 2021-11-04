import React from 'react'
import './ouro_preto.css'
//import OuroPreto from '../../assets/images/ouro_preto.jpg'
import OuroPretoSobre from '../../assets/images/OuroPreto/ouro-preto1.jpg'
import OuroPretoComida from '../../assets/images/OuroPreto/ouro-preto2.jpg'
import OuroPretoIgreja from '../../assets/images/OuroPreto/ouro-preto3.jpg'
import OuroPretoMina from '../../assets/images/OuroPreto/ouro-preto4.jpg'

const Ouro_Preto = () => {
    return (
        <div class="container-page">
            <p className="titulopag">OURO PRETO</p>
            <p className="title title-alt">Sobre a cidade</p>
            <div class="tabela">
                <div>
                        <img className="imagens" width="400" height="250" src={OuroPretoSobre} alt="Imagem Sobre" />
                </div>
                <div className="paragrafo1">
                        Localizada na região Central de Minas Gerais, a cidade de Ouro Preto reúne o maior e mais importante acervo da arquitetura
                        e da arte do período colonial de todo o Brasil. Em meio ao casario dos séculos 17 e 18, construído nas ladeiras de uma
                        região montanhosa, erguem-se 13 igrejas monumentais, com altares banhados a ouro e imagens sacras, nos estilos barroco e rococó.
                        Pelo seu porte e conservação, Ouro Preto foi uma das primeiras cidades escolhidas no mundo para ser Patrimônio da Humanidade,
                        em 1980, pela Organização das Nações Unidas para a Educação, a Ciência e a Cultura (Unesco).
                        Sua origem data da última década do século 17, com a descoberta do ouro no leito de um córrego, fato que atraiu centenas de
                        bandeirantes paulistas e fez a riqueza da região por quase um século. Na aparência, eram pedras de superfície escura; daí,
                        o nome ouro preto. Depois de fundido, revelava-se o amarelo.
                </div>
            </div>
            <p className="title title-alt">O que fazer na cidade?</p>
            <div class="tabela">

                    <div className="paragrafo2">
                        Nenhuma outra cidade de Minas Gerais tem oferta tão grande de belas igrejas abertas à visitação quanto Ouro Preto.
                        E elas não são importantes apenas pela questão religiosa. Muitas igrejas de Ouro Preto são verdadeiras obras de arte
                        e exemplares magníficos da arquitetura colonial. Percorrê-las é um presente para os olhos. Grandes nomes da arte
                        barroca mineira trabalharam em projetos dos edifícios, esculturas e pinturas das igrejas setecentistas. Entre os artistas
                        mais importantes está Antônio Francisco Lisboa, o Aleijadinho. Além dele, destacam-se também Manuel da Costa Ataíde,
                        conhecido como Mestre Ataíde; Manuel Francisco Lisboa, pai de Aleijadinho; e Francisco Xavier de Brito.
                    </div>
                    <div>
                        <img className="imagens" width="400" height="250" src={OuroPretoIgreja} alt="Imagem Igreja" />
                    </div>


            </div>
            <div className="tabela">

                    <div>
                        <img className="imagens" width="400" height="250" src={OuroPretoComida} alt="Imagem Comida" />
                    </div>
                    <div className="paragrafo1">
                        A especialidade culinária de Ouro Preto não poderia ser outra que não os maravilhosos temperos e sabores mineiros.
                        Há boa oferta de restaurantes que servem os típicos lombo com tutu, frango com quiabo, costelinha, feijão tropeiro e
                        galinha ao molho pardo. Não será difícil se deliciar entre a intensidade da comida mineira. Os pratos típicos poderão ser
                        degustados em lanchonetes populares que servem PFs ou em restaurantes mais refinados com cardápios que mesclam a culinária
                        mineira aos sabores internacionais. Os preços agradam a todos os bolsos.
                    </div>

            </div>
            <p className="title title-alt">Curiosidades</p>
            <div className="tabela">


                    <div className="paragrafo2">
                        Ouro Preto foi a maior aglomeração da América Latina:
                        <br></br>
                        <br></br>
                        Numa época em que São Paulo, Rio de Janeiro e Salvador eram pequenas, Ouro Preto – ainda chamada de Vila Rica –
                        chegou a receber 40 mil pessoas. E isso, veja bem, menos de três décadas depois da fundação da cidade, o que teria
                        tornado a região na maior aglomeração da América Latina.


                    </div>
                    <div>
                        <img className="imagens" width="400" height="250" src={OuroPretoMina} alt="Imagem Mina" />
                    </div>

            </div>
        </div>

    )
}

export default Ouro_Preto
