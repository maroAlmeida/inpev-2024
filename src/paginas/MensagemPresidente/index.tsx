import React from 'react';
import '../../assets/styles/index.scss'; // Importa o CSS global
import classNames from 'classnames'; // Importa classnames
import estilos from './MensagemPresidente.module.scss';
import presidtImage from './img/foto.jpg';
import galpaoImage from './img/foto02-g.jpg';
import IconA from '../../componentes/IconA';


const MensagemPresidente = () => {
    return (
        <>
            <div className={classNames(estilos.msgPresidenteSection, 'internalContent')} >
                <div className="W-full">
                    <p className="tit1 _turq1" >Mensagem do<br className="mobile-only" /> diretor-presidente</p>
                </div>

                <div className='W-full' >
                    <img className={estilos.imgFoto} src={presidtImage} alt='Foto diretor presidente' />
                    <p className={classNames(estilos.msgPresd, estilos.fotoLgd, ' _orange')} ><span>Marcelo Okamura</span> Diretor-presidente do inpEV</p>
                </div>

                <div className="W-full">
                    <IconA />

                    <p className="desc _gray1">robustez e a efetividade do Sistema Campo Limpo e a sua importância para a agricultura brasileira foram comprovadas mais uma vez em 2023. Seguimos acompanhando a expansão do agro, concluindo as obras de quatro novas centrais de recebimento nos estados de Mato Grosso do Sul, Tocantins e Rio Grande do Sul, que entraram em operação em janeiro e fevereiro de 2024, além de inaugurarmos quatro postos em Minas Gerais e no Pará.

                    </p><p className="desc _gray1">A operação com excelência do Sistema foi imprescindível para recebermos um volume de embalagens pós-consumo 10% superior ao registrado em 2022 e destinarmos de maneira ambientalmente correta 53,2 mil toneladas, ultrapassando a marca de 750 mil toneladas destinadas desde 2002.</p>

                    <p className="desc _gray1">Com o resultado, cumprimos a meta de destinação inicialmente estabelecida para o período, mesmo enfrentando desafios logísticos, como a necessidade de viabilizar novas rotas para atender às unidades recém-inauguradas e o aumento dos custos.</p>
                </div>

                <div className="W-full">
                    <p className="desc _gray1">Também demos continuidade ao Programa de Gestão Integrada de Centrais, assumindo o gerenciamento das unidades de Bebedouro e Catanduva (SP), Formosa (GO), Mojuí dos Campos (PA) e Sorriso (MT). Além de permitir ao canal de distribuição focar em sua atividade principal, o programa reduz os custos para todos os elos da cadeia agrícola – a economia de recursos corresponde a R$ 12,5 milhões de 2019 a 2023 – e garante a padronização de procedimentos operacionais, de saúde e segurança, de qualidade e de <i>compliance</i>. </p>

                    <p className="desc _gray1">Em paralelo, continuamos apostando em nossa vocação inovadora para desenhar e testar novos processos capazes de aumentar o percentual de materiais destinados pelo Sistema que são reciclados e têm seu ciclo de vida estendido, potencializando a renda dos recicladores e os impactos positivos ao meio ambiente. </p>

                    <p className="desc _gray1">A responsabilidade socioambiental também seguiu como prioridade para o inpEV. Concluímos o primeiro inventário de gases de efeito estufa (GEE) do Sistema Campo Limpo, com base na metodologia internacional GHG Protocol e fomos reconhecidos com o selo Bronze do Programa Brasileiro GHG Protocol. Também inauguramos a segunda usina solar do Sistema, na central de Unaí (MG), que garante o abastecimento com energia limpa da própria unidade e de outras seis centrais do estado. </p>

                    <p className="desc _gray1">No pilar social, nossos mais de 400 colaboradores concluíram 19,6 mil horas de treinamento, muitas delas na plataforma da uninpEV, a universidade corporativa lançada no início de 2023. Para eles, também disponibilizamos benefícios adicionais e reformulamos o programa de saúde, com a incorporação de novos serviços. </p>

                    <p className="desc _gray1">Levamos, ainda, educação ambiental a 261 mil estudantes de 358 municípios e a milhares de professores por meio do Programa de Educação Ambiental (PEA) Campo Limpo. A conscientização ambiental também é parte da programação do Dia Nacional do Campo Limpo (DNCL), data em que reunimos a indústria fabricante, o canal de distribuição, o poder público, os agricultores e os recicladores e incineradores parceiros para reforçar a integração e o engajamento, que são a chave do sucesso do Sistema. Na edição de 2023, impactamos mais de 60 mil pessoas. </p>

                    <p className="desc _gray1">Encerro esta mensagem destacando outro marco, a elaboração e a aprovação do planejamento estratégico do inpEV 2024-2028, que contou com a participação ativa do Conselho Diretor do Instituto. Com o apoio de todos os elos da cadeia agrícola, nos próximos cinco anos centraremos esforços para alavancar a nossa produtividade operacional e a nossa capacidade de inovar, buscando aprimorar a nossa contribuição para a sustentabilidade do agro brasileiro.</p>

                    <p className="desc _gray1">Boa leitura!</p>
                </div>
                <div className="W-full">
                    <img src={galpaoImage} alt="imagem galpão de embalagens" />
                </div>
            </div>
        </>
    );
}

export default MensagemPresidente;
