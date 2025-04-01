import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom';

const NavBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav className={`${estilos.NavBar} transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/apresentacao">Apresentação</Link>
        </li>
        <li>
          <Link to="/mensagempresidente">Mensagem do diretor presidente</Link>
        </li>
        <li>
          <Link to="/desempenhofinanceiro">Desempenho financeiro</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
