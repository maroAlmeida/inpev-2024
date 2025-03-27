import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../componentes/Banner';
import heroImage from './img/banner.jpg';
import estilos from './Home.module.scss';
import '../../assets/styles/index.scss'; // Importa o CSS global
import classNames from 'classnames'; // Importa classnames
import IconA from '../../componentes/IconA';

// Cria um objeto que corresponde à interface IBanner
const heroData = {
  titulo: "Gestor do Sistema Campo Limpo, programa brasileiro de logística reversa de embalagens vazias de defensivos agrícolas",
  descricao: "",
  backImage: heroImage,
  frontImage: "" // Se não há imagem, mantenha uma string vazia ou uma URL válida
};

function HomePage() {
  return (
    <div className={estilos.homeSection} >
      <Banner banner={heroData} />
      <div
        className={classNames(
          estilos.msgPresd, // Classe do Home.module.scss
          '_op0 upIn' // Classe do CSS global
        )}
      >
        <div className="W-full">
          <p className="tit1 _white" >
            <span className='_upCase' >Mensagem do</span>
            <br className="mobile-only" /> diretor-presidente
          </p>
        </div>

          <div className="W-full">
            <IconA />
            <p className="desc _white">robustez e a efetividade do Sistema Campo Limpo e a sua importância para a agricultura brasileira foram comprovadas mais uma vez em 2023. A operação com excelência do Sistema foi imprescindível para recebermos um volume de embalagens pós-consumo 10% superior ao registrado em 2022 e destinarmos de maneira ambientalmente correta 53,2 mil toneladas, ultrapassando a marca de 750 mil toneladas destinadas desde 2002.</p>

            <div className="W-full grid grid-cols-1 md:grid-cols-3 ">
              <div className="">
                <p className="desc _white">Marcelo Okamura <br /> <i>Diretor-presidente do inpEV</i> </p>
              </div>
              <div className="hidden md:block"><p>	&nbsp;</p></div>
              <div className="">
                <Link className={estilos._msgLink} to="/mensagempresidente">Leia a mensagem completa!</Link>
              </div>
            </div>
          </div>

      </div> {/* /msgPresd */}
    </div>
  );
}

export default HomePage;
