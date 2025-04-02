import LogoBco from '../LogoBco';
import SocialList from '../SocialList';
import estilos from './Rodape.module.scss';

const NavBar = () => {
  return (
    <footer className={estilos.Rodape}>
      <div className='desktop-only' >
        <LogoBco localClass={estilos.footerLogo} />
      </div>
      <div className='mobile-only' >
        <SocialList />
      </div>
    </footer>
  )
}

export default NavBar