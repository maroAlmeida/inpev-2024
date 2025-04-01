import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.scss';
import '../../assets/styles/globals.scss';
// import classNames from 'classnames'; // Importa classnames
// import IconA from '../../componentes/IconA';



function HomePage() {
  return (
    <div className={styles.homeSection} >

      <div className={`${styles.homeContent} ${styles.homeBg}`} >
        <div className={styles.relativeNov} >
          <div className="w-full p-4" >
            <p className={`${styles.title1} cronosFont text-black bold`} >
              Relatório de sustentabilidade
              <br /><span>2024</span>
            </p>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 ">
            <div className={styles.boxOrange} >
              <h1>Gestor do Sistema Campo Limpo, programa brasileiro de logística reversa de embalagens vazias de defensivos agrícolas</h1>
            </div>
            <div className='' >&nbsp;</div>
            <div>
              <div className={styles.boxGreen} >
                <h1>Introdução nam a nimus, conecab oribus restorr umquisqui ullibearum debis dolore, a num volum utae. Itam re vendaector sam voloremquia sam facea voluptaquis aut ulli bearum de</h1>
              </div>
              <div className={styles.filetGreen} ></div>
            </div>
          </div>
        
        </div> {/* /relative */}


          <div className={` ${styles.linePresd} w-full`} >{/* msgPresd */}
            <div className={styles.msgPresd} >
              <p className={styles.msgTitle} >Mensagem do diretor-presidente</p>
              <p className={styles.msgTxt} >"A robustez e a efetividade do Sistema Campo Limpo e a sua importância para a agricultura brasileira foram comprovadas mais uma vez em 2023. A operação com excelência do Sistema foi imprescindível para recebermos um volume de embalagens pós-consumo 10% superior ao registrado em 2022 e destinarmos de maneira ambientalmente correta 53,2 mil toneladas, ultrapassando a marca de 750 mil toneladas destinadas desde 2002."</p>
              <p >Marcelo Okamura <i>Diretor-presidente do inpEV</i> </p>

              <Link className={styles.msgLink} to="/mensagempresidente">Leia a mensagem completa!</Link>
            </div>
          </div> {/* /msgPresd */}
      </div>{/* /homeContent */}

      {/* <img className='_fnd op0' src="/img/home/foto1.jpg" alt="foto 1" /> */}
    </div>
  );
}

export default HomePage;
