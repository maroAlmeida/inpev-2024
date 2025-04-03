// import LogoBco from '../LogoBco';
import NavBar from '../NavBar';
import SocialList from '../SocialList';
import styles from './Footer.module.scss';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.line1} >
        <NavBar isOpen={true} fecharMenu={() => {}} gridClass="grid-cols-1 md:grid-cols-3" alwaysOpen />
      </div>
      <div className={` ${styles.line2} mobile-only bg-white p-4 `} >
        <SocialList />
      </div>
    </footer>
  )
}

export default Footer