import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

interface NavBarProps {
  isOpen: boolean;
  fecharMenu: () => void;
  gridClass: string;
  alwaysOpen?: boolean;
  hasExtraClass?: boolean;
}

const NavBar = ({ isOpen, fecharMenu, gridClass, alwaysOpen = false, hasExtraClass = false }: NavBarProps) => {
  return (
    <nav
      className={`${styles.NavBar} ${hasExtraClass ? styles.headerNav : ''} transition-all duration-300 ${
        alwaysOpen || isOpen ? ' opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      }`}
    >
      <div className={`grid ${gridClass}`}>
        <div>
          <ul>
            <li><Link to="/" onClick={fecharMenu}>Home</Link></li>
            <li><Link to="/apresentacao/" onClick={fecharMenu}>Apresentação</Link></li>
            <li>
              <Link to="/mensagem-do-presidente/" onClick={fecharMenu}>Mensagem do diretor-presidente</Link>
            </li>
            <li><Link to="/sistema-campo-limpo/" onClick={fecharMenu}>Sistema Campo Limpo</Link></li>
            <li><Link to="/o-inpev/" onClick={fecharMenu}>O <span className='lowerCase' >inp</span>EV</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link to="/temas-materiais/" onClick={fecharMenu}>Temas materiais</Link></li>
            <li><Link to="/expansao-das-operacoes/" onClick={fecharMenu}><span>»</span> Expansão das operações</Link></li>
            <li><Link to="/logistica/" onClick={fecharMenu}><span>»</span> Logística</Link></li>
            <li><Link to="/inovacao-e-tecnologia/" onClick={fecharMenu}><span>»</span> Inovação e tecnologia</Link></li>
            <li><Link to="/ecoeficiencia-operacional/" onClick={fecharMenu}><span>»</span> Ecoeficiência operacional</Link></li>
            <li><Link to="/desenvolvimento-humano/" onClick={fecharMenu}><span>»</span> Desenvolvimento humano</Link></li>
            <li><Link to="/educacao-e-conscientizacao/" onClick={fecharMenu}><span>»</span> Educação e conscientização</Link></li>
            <li><Link to="/cooperacao-multistakeholder/" onClick={fecharMenu}><span>»</span> Diálogo e cooperação <em>multistakeholder</em></Link></li>
            <li><Link to="/viabilidade-economica/" onClick={fecharMenu}><span>»</span> Viabilidade econômica</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><Link to="/como-se-associar/" onClick={fecharMenu}>Como se associar ao <span className='lowerCase' >inp</span>EV</Link></li>
            <li><Link to="/sumario-gri/" onClick={fecharMenu}>Sumário de conteúdo da GRI</Link></li>
            <li><Link to="/assets/download/inpEV-DF2022.pdf" target="_blank">Demonstrações financeiras</Link></li>
            <li><Link to="/creditos/" onClick={fecharMenu}>Créditos</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
