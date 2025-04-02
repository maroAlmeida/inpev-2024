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
      <div className="bg-white grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 p-4 items-baseline">
        <IconLogoGray localClass={styles.Logo} />
        <p className={`${styles.title} text-xl`}>
          Relatório de Sustentabilidade <span>2024</span>
        </p>
        <div className="flex ml-auto">
          <SocialList />
        </div>
      </div>

      {/* Linha com o botão do menu */}
      <div className={`${styles.line2} grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 p-4 items-center`}>
        {/* Col 1 */}
        <div>
          {/* Botão hambúrguer com texto "Menu" */}
          <button
            className="flex items-center gap-2 text-white"
            onClick={toggleMenu}
          >
            <span>Menu</span>
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
        <div>
          <a className={styles.downA} href="./assets/download/#" target="_blank">
            <div className={`${styles.download} gap-2 text-white`}>
              <img src="./img/header/download.svg" alt="logo" />
              PDF completo
            </div>
          </a>
        </div>

        {/* Col 3 */}
        <div className="flex ml-auto">
          <a className="text-white self-end" href="./en/index.html">
            EN (Summarized Version)
          </a>
        </div>
      </div>

      {/* Passando o estado para o NavBar */}
      <div className={`transition-all duration-300 ${menuAberto ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <NavBar isOpen={menuAberto} fecharMenu={fecharMenu} />
      </div>
    </section>
  );
};

export default Header;
