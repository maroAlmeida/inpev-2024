import LogoBco from '../LogoBco';
import SocialList from '../SocialList';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='desktop-only' >
        <LogoBco localClass={styles.footerLogo} />
      </div>
      <div className='mobile-only' >
        <SocialList />
      </div>
    </footer>
  )
}

export default Footer