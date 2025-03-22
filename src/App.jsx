import styles from './styles/App.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={styles.container}>
      <Navbar />
      {isHomePage && (
        <div className={styles.heroSection}>
          <img
            className={styles.mainImage}
            src="/image-1.webp"
            alt="background"
            loading="lazy"
          />
        </div>
      )}
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
