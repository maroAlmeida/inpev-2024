import estilos from './NavBar.module.scss';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (<nav className={estilos.NavBar}>
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
  </nav>)
}

export default NavBar