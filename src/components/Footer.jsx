import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>&#169; {new Date().getFullYear()} Albany Ballers Abroad</span>
      <span> albanyballers@gmail.com</span>
    </footer>
  );
}
