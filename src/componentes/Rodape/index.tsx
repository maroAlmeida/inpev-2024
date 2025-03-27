import IconLogo from '../IconLogo';
import estilos from './Rodape.module.scss';

const NavBar = () => {
  return (
    <footer className={estilos.Rodape}>
      <div></div>
      <div>
        <ul className="social-icons">
          <li>
            <a href="https://www.facebook.com/inpEV" target="_blank" rel="noreferrer" >
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/inpEV" target="_blank" rel="noreferrer" >
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/inpEV" target="_blank" rel="noreferrer" >
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/inpEV" target="_blank" rel="noreferrer" >
              <i className="fa fa-youtube-play"></i>
            </a>
          </li>
        </ul>
      </div>
      <div>
        <IconLogo localClass={estilos.footerLogo} />
      </div>
    </footer>
  )
}

export default NavBar