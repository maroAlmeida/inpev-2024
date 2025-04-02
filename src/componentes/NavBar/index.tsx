import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = ({ isOpen, fecharMenu }: { isOpen: boolean; fecharMenu: () => void }) => {
  return (
    <nav
      className={`${estilos.NavBar} transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'
      }`}
    >
      <ul>
        <li>
          <Link to="/" onClick={fecharMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/apresentacao" onClick={fecharMenu}>
            Apresentação
          </Link>
        </li>
        <li>
          <Link to="/mensagempresidente" onClick={fecharMenu}>
            Mensagem do diretor presidente
          </Link>
        </li>
        <li>
          <Link to="/desempenhofinanceiro" onClick={fecharMenu}>
            Desempenho financeiro
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
