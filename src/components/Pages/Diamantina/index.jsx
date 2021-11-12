import React from "react";

import { AreaSite } from "../styled";

import DiamantinaSobre from '../../../images/Diamantina/diamantina1.jpg'
import DiamantinaIgrejas from '../../../images/Diamantina/diamantina2.jpg'
import DiamantinaMuseu from '../../../images/Diamantina/diamantina3.jpg'
import DiamantinaMercado from '../../../images/Diamantina/diamantina4.jpg'
import DiamantinaVila from '../../../images/Diamantina/diamantina5.png'
import DiamantinaCasa from '../../../images/Diamantina/diamantina6.jpg'
import DiamantinaMusica from '../../../images/Diamantina/diamantina7.jpg'

const Home = () => {
    return(
        <AreaSite>
            <h1>Diamantina</h1>

            <h2>Sobre a cidade</h2>

            <div className="tabela">
                <img 
                    src={DiamantinaSobre}
                    alt="Imagem  Diamantina"
                />
                <p>
                    Com mais de três séculos de fundação, passando de povoado a arraial até chegar a 
                    município, Diamantina é uma cidade rica em história e tradições. Possui um patrimônio 
                    arquitetônico, cultural e natural rico e preservado. A formação do município está 
                    intrinsecamente ligada à exploração do ouro e do diamante. A ocupação portuguesa 
                    do território se deu com Jerônimo Gouvêa, que, seguindo o curso do Rio Jequitinhonha, 
                    encontrou, nas confluências do Rio Piruruca e Rio Grande, uma grande quantidade de 
                    ouro. Atualmente, Diamantina é uma das cidades históricas mais conhecidas e visitadas 
                    do país. O casario colonial, de inspiração barroca; as edificações históricas; 
                    as igrejas seculares; a belíssima paisagem natural e uma forte tradição religiosa, 
                    folclórica e musical conferem uma singularidade especial à cidade.
                </p>
            </div>

            <h2>O que fazer na cidade</h2>

            <div className="tabela">
                <p>
                    No centro histórico de Diamantina, se concentram as principais atrações para visitar na 
                    cidade. As igrejas e casarões construídos em arquitetura colonial e preservados até os 
                    dias atuais, conferindo status de patrimônio cultural da Unesco, os museus e locais que 
                    contam a história local, as ruas mais movimentadas, tudo estará aqui.  Percorra suas ruas 
                    de pedra, se perca entre uma atração e outra, mas não deixe de contemplar o charme da 
                    região central. Vale destacar também que é no centro histórico onde acontecem eventos 
                    culturais importantes, como a Vesperata e o carnaval de Diamantina.
                </p>
                <img 
                    src={DiamantinaIgrejas}
                    alt="Igreja de Diamantina"
                />
            </div>

            <div className="tabela">
                <img 
                    src={DiamantinaMuseu}
                    alt="Museu do diamante"
                />
                <p>
                Outra atração a visitar é o Museu do Diamante, que contém riqueza de conteúdo, muito além de diamantes e pedras preciosas.
                    Dá até para dizer que a mineração e o garimpo não são as principais atrações, embora ocupem lugar relevante neste museu.
                    O acervo é riquíssimo, com exposições de arte sacra, objetos de séculos passados que remontam períodos da história e até
                    materiais utilizados na tortura de escravos.
                </p>
            </div>

            <div className="tabela">
                <p>
                Para quem deseja conhecer a cultura, artesanato e culinária locais, uma passadinha no Mercado Velho, especialmente aos
                    sábados pela manhã, é parada obrigatória. Também conhecido como Mercado dos Tropeiros, o lugar recebe uma feirinha no
                    fim de semana, com venda de produtos regionais. Você encontrará cachaças, queijos, temperos, frutas, e também artesanatos
                    e lembranças em um dos pontos de encontro da cidade de Diamantina.
                </p>
                <img 
                    src={DiamantinaMercado}
                    alt="Mercado velho"
                />
            </div>

            <div className="tabela">
                <img 
                    src={DiamantinaVila}
                    alt="Vila do Biribiri"
                />
                <p>
                Um lugar que vale a pena conhecer é a Vila do Biribiri, a cerca de 16 km do centro histórico de Diamantina, foi construída
                    no fim do século XIX para abrigar trabalhadores de uma fábrica de tecidos. Ainda existem diversas casas permanecem no
                    distrito, mas são poucos moradores que ocupam o lugar. Ele foi tombado pelo Instituto Estadual do Patrimônio Histórico e
                    Artístico de Minas Gerais. Sua grande atração é o Parque Nacional do Biribiri, com trilhas, cachoeiras e belas paisagens
                    naturais que os visitantes desfrutam entre os passeios pela cidade.
                </p>
            </div>

            <h2>Curiosidades</h2>

            <div className="tabela">
                <ul>
                    <p>Visistação de casas de figuras históricas:</p>
                    <li>Em Diamantina, é possível visitar a casa do ex-presidente Juscelino Kubitschek e da grande figura histórica Chica
                        da Silva, já que ambos residiam na cidade.</li>
                    <p>Igreja de Nossa Senhora do Carmo:</p>
                    <li>Uma das igrejas da cidade, a Igreja de Nossa Senhora do Carmo é a única construção cujo campanário foi construído
                        na parte de trás da igreja.Isso pode ter três explicações possíveis: a igreja fica em frente à casa da Chica da Silva
                        que não apreciava o barulho dos sinos que atrapalhava seu sono; durante sua construção, os escravos não deveriam passar
                        embaixo da porta principal; ou ainda que localizando os sinos próximos ao altar mor seus sons seriam ouvidos em uma área
                        maior do vale.</li>
                </ul>
                <img 
                    src={DiamantinaCasa}
                    alt="DiamantinaCasa"
                />
            </div>
            <div className="tabela">
                <img 
                    src={DiamantinaMusica}
                    alt="DiamantinaMusica"
                />
                <p>
                Os diamantes da região deram o nome à cidade histórica mineira conhecida pelo patrimônio e pela musicalidade. Diamantina,
                na Região Central do estado, inspira notas musicais, é o que dizem moradores imersos em um cenário de arte e cultura.
                A Vesperata é um dos atrativos musicais que o turista não pode perder. O show acontece ao ar livre, na Rua da Quitanda,
                no centro histórico da cidade, dois sábados por mês, de março a outubro, quando não chove em Diamantina. Nas sacadas e
                janelas dos prédios históricos ficam os músicos, que são regidos por maestros que se posicionam no meio da rua, entre os
                espectadores. Durante a Temporada de Vesperatas que são realizadas aos sábados, acontecem as Serestas todas as sextas-feiras
                em Diamantina. A Noite de Seresta de Diamantina é um evento singular com a finalidade de valorizar a prática e fomentar os grupos
                participantes. Uma das tradições mais autênticas do município, por reunir músicos nativos que resgatam por meio de suas
                apresentações, os cânticos de outrora. É também um importante espaço de produção artístico-musical dos poetas e compositores
                locais e ainda de interação entre os seresteiros e os turistas. A Bartucada, um grupo de percussão, é outra atração imperdível.
                A tradição foi firmada no carnaval, muito popular na cidade. Em janeiro, turistas podem ter a sorte de participar dos ensaios.
                Nos meses seguintes, a banda se apresenta em outros estados.
                </p>
            </div>
        </AreaSite>
    );
}

export default Home;