import React from "react";

import { AreaSite } from "../styled";

import Mariana1 from '../../../images/Mariana/mariana1.jpg'
import Mariana2 from '../../../images/Mariana/mariana2.jpg'
import Mariana3 from '../../../images/Mariana/mariana3.jpg'
import Mariana4 from '../../../images/Mariana/mariana4.jpg'


const Mariana = () => {
    return(
        <AreaSite>
            <h1>Mariana</h1>

            <h2>Sobre a cidade</h2>

            <div className="tabela">
                <img 
                    src={Mariana1}
                    alt="Imagem sobre"
                />
                <p>
                Mariana é um município brasileiro localizado no estado de Minas Gerais, na Região Sudeste 
                do país. Sua população estimada em 2018 era de cerca de 60 mil habitantes e a economia 
                local depende principalmente do turismo e da extração de minérios. Mariana foi a primeira 
                vila, cidade e capital do estado de Minas Gerais. No século XVIII, foi uma das maiores 
                cidades produtoras de ouro para o Império Português. Tornou-se a primeira capital mineira 
                por participar de uma disputa onde a Vila que arrecadasse maior quantidade de ouro seria
                elevada a Cidade sendo a capital da então Capitania de Minas Gerais. Em comparação com outros 
                municípios do estado, Mariana detém uma posição econômica de destaque, sendo que o seu 
                produto interno bruto (PIB) é um dos maiores de Minas Gerais.
                </p>
            </div>

            <h2>O que fazer na cidade</h2>

            <div className="tabela">
                <p>
                A cidade possui um enorme patrimônio arquitetônico do barroco produzido durante o Brasil Colonial. 
                Além disso, o turismo ecológico teve também uma expansão importante, contribuindo de forma 
                significativa para o desenvolvimento do setor de serviços e transformando Mariana em uma das 
                cidades mineiras com o maior número de praticantes dos chamados esportes radicais, como montanhismo
                 e mountain bike. Mariana recebe boa parte do fluxo de turistas de Ouro Preto, devido à
                  pequena distância de 12 km. Essa integração se ampliou com a criação do Trem da Vale,
                   fruto da parceria entre a Vale e as Prefeituras Municipais de Mariana e Ouro Preto. Após 
                   décadas parado, o trem turístico voltou a funcionar em abril de 2006, com viagens diárias. 
                   A Estação Ferroviária de Mariana foi totalmente revitalizada e é um ponto turístico da cidade, 
                   além de possuir uma biblioteca, um play-ground temático e um centro de mídia para a população.
                   Como atrações naturais, a cidade conta com várias cachoeiras, como a do Brumado (no distrito 
                   de mesmo nome), da Serrinha (em Passagem de Mariana), do Cristal e a da Prainha (no bairro 
                   Santo Antônio).

                </p>
                <img 
                    src={Mariana3}
                    alt="Imagem trem"
                />
            </div>
            <div className="tabela">
                <img 
                    src={Mariana4}
                    alt="Imagem comida"
                />
                <p>
                Feijoada, angu, arroz, torresmo… Todos esses ingredientes fazem com que o almoço seja muito 
                mais saboroso do que qualquer um. Mas não é só de alimentos importados que a culinária 
                mineira é feita. Além da mistura de culturas, a região é rica de alimentos típicos que se 
                consolidaram ao longo da história e colaboraram para a criação desse cardápio diverso que 
                vai do café da manhã ao jantar. Queijo Canastra, Padrão, Curado, do Serro…! São diversos 
                e muitos saborosos os tipos de queijos existentes em Minas Gerais.

                </p>
            </div>

            <h2>Curiosidades</h2>

            <div className="tabela">
                <p>
                No Centro da cidade, é indispensável caminhar pela Rua Direita, onde se podem observar 
                alguns dos imóveis históricos mais conservados de nosso estado. Um deles é a Catedral 
                de Nossa Senhora da Assunção (também chamada Catedral Sé de Mariana), sede da Arquidiocese 
                de Mariana. A Praça Minas Gerais, também no Centro, faz parte do Patrimônio Cultural de 
                nosso estado.Ainda no Centro, é possível visitar as igrejas de Nossa Senhora do Carmo e 
                de São Francisco de Assis, que se localizam uma em frente à outra, bem como o Pelourinho, 
                a Casa de Câmara e a Cadeia Pública. Em alguns desses locais é cobrado ingresso na entrada.

                </p>
                <img 
                    src={Mariana2}
                    alt="Imagem cidade"
                />
            </div>
        </AreaSite>
    );
}

export default Mariana;