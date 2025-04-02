import { useState } from 'react';
import styles from './Header.module.scss';
import IconLogoGray from '../IconLogoGray';
import SocialList from '../SocialList';
import NavBar from '../NavBar';

const Header = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => setMenuAberto(!menuAberto);
  const fecharMenu = () => setMenuAberto(false); // Função para fechar o menu

  return (
    <section className={styles.header}>

      {/* Linha 1 */}
      <div className='bg-white'>
        <div className='relativeNov' >
          <div className={` ${styles.line1} grid grid-cols-2 md:grid-cols-[1fr_2fr_1fr] gap-4 py-4 `}>
            <IconLogoGray localClass={styles.Logo} />
            <div className='desk-only' >
              <p className={` ${styles.title} text-xl `}>
                Relatório de Sustentabilidade <span>2024</span>
              </p>
            </div>

            <div className='desk-only' >
              <div className="flex float-right text-right">
                <SocialList />
              </div>
            </div>

            <div className='mobile-only' >
                <a className="_turq1 float-right text-right" href="./en/index.html">
                  EN (Summarized Version)
                </a>
            </div>
          </div>
        </div>
      </div>


      {/* Linha 2 */}
      <div className={` ${styles.line2} `}>
        <div className='relativeNov grid grid-cols-[2fr_1fr] md:grid-cols-[1fr_2fr_1fr] gap-4 py-4 items-center ' >
          <div className='mobile-only' >
            <p className="text-white font-bold " >
              Relatório de Sustentabilidade <span>2024</span>
            </p>
          </div>

          {/* Col 1 */}
          <div className={styles.div1Left} >
            {/* Botão hambúrguer com texto "Menu" */}
            <button
              className="flex items-center gap-2 text-white self-end"
              onClick={toggleMenu}
            >
              <span className='desk-only' >Menu</span>
              <div className="relative w-6 h-4 flex flex-col justify-between">
                <div
                  className={`w-6 h-0.5 bg-white transition-transform duration-300 ${menuAberto ? 'rotate-45 translate-y-2' : ''
                    }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${menuAberto ? 'opacity-0' : ''
                    }`}
                ></div>
                <div
                  className={`w-6 h-0.5 bg-white transition-transform duration-300 ${menuAberto ? '-rotate-45 -translate-y-2' : ''
                    }`}
                ></div>
              </div>
            </button>
          </div>

          {/* Col 2 */}
          <div className='desk-only' >
            <a className={styles.downA} href="./assets/download/#" target="_blank">
              <div className={` ${styles.download} gap-2 text-white `}>
                <img src="./img/header/download.svg" alt="logo" />
                PDF completo
              </div>
            </a>
          </div>

          {/* Col 3 */}
          <div className="desk-only">
            <a className="text-white float-right text-right" href="./en/index.html">
              EN (Summarized Version)
            </a>
          </div>

        </div>{/* /relativeNov */}
      </div>{/* /line2 */}



      {/* Passando o estado para o NavBar */}
      <div className={`transition-all duration-300 ${menuAberto ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>
        <NavBar isOpen={menuAberto} fecharMenu={fecharMenu} />
      </div>
    </section>
  );
};

export default Header;
