import LogoBco from '../LogoBco';
import estilos from './Rodape.module.scss';

const NavBar = () => {
  return (
    <footer className={estilos.Rodape}>
      <div>
        <LogoBco localClass={estilos.footerLogo} />
      </div>      
    </footer>
  )
}

export default NavBar