import React from 'react';
import { Link } from 'react-router-dom';
import estyles from './Home.module.scss';
import '../../assets/styles/globals.scss';
import classNames from 'classnames'; // Importa classnames
// import IconA from '../../componentes/IconA';



function HomePage() {
  return (
    <div className={estyles.homeSection} >
      <img className='op0' src="/img/home/foto1.jpg" alt="foto 1" />


      
    </div>
  );
}

export default HomePage;
