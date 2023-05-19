import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
       <span className={styles.brand}></span> &copy;{' '}
      {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
