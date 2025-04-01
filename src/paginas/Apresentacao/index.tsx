import React from 'react';
import GRI from '../../componentes/Gri';
// import '../../assets/styles/index.scss'; // Importa o CSS global
import classNames from 'classnames'; // Importa classnames
import estilos from './Apresentacao.module.scss';


const Apresentacao = () => {
  return(
    <div className={classNames(estilos.ApresentSection, 'internalContent')} >
      <div className={estilos.textLeft} >
        <p className="tit1 _turq1 _upCase" >Apresentação <GRI staticText="GRI" dynamicText={'2-3'} /> </p>
      </div>
      <div>
        <p className="desc _gray1">Relatório de Sustentabilidade 20XX do Instituto Nacional de Processamento de Embalagens Vazias (inpEV) reúne os principais resultados financeiros, operacionais e socioambientais do ano do Sistema Campo Limpo, programa brasileiro de logística reversa de embalagens vazias ou com sobras pós-consumo de defensivos agrícolas.</p>

        <p className="desc _gray1">De periodicidade anual, este é o vigésimo primeiro relatório do inpEV e cobre o período de 1º de janeiro a 31 de dezembro de 20XX. A publicação foi elaborada com base nas normas da Global Reporting Initiative (GRI). </p>

        <p className="desc _gray1">Os indicadores GRI reportados se referem à matriz e às centrais de recebimento gerenciadas pelo Instituto (eventuais exceções são especificadas ao longo do relatório). A versão resumida das demonstrações financeiras, auditadas pela PwC, podem ser consultadas <a target="_blank" href="../assets/download/inpEV-RS20XX_DFs.pdf">aqui</a>.</p>

        <p className="desc _gray1">Parte das informações do relatório é reportada ao Pacto Global da Organização das Nações Unidas (ONU), do qual o inpEV é signatário desde 2019 e para o qual presta contas anualmente.</p>
      </div>
      <div >
        <p className="desc _turq1"><strong>Dúvidas e comentários sobre a publicação: </strong><br></br>
          <i>E-mail</i>: <a className="_turq1 _underline" target="_blank" rel="noopener noreferrer" href="mailto:faleconosco@inpev.org.br" >faleconosco@inpev.org.br</a><br></br>
          <i>Site</i>: <a className="_turq1 _underline" target="_blank" rel="noopener noreferrer" href="http://www.inpev.org.br/fale-conosco/" >www.inpev.org.br/fale-conosco/</a>.
        </p>
      </div>
    </div>
  )
}

export default Apresentacao;
