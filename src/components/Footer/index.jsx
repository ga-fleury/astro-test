import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
  return (
    <footer className={Styles.footer}>
      &copy; {new Date().getFullYear()} Gabriel Fleury
      <small className={Styles.byline}>feito com 💖 usando Astro 🚀</small>
    </footer>
  );
}
export default Footer;
