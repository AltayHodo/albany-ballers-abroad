import styles from './styles/App.module.css';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import './styles/global.css';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      <Navbar />
      {isHomePage && (
        <div className={styles.heroSection}>
          <img
            className={styles.mainImage}
            src="/image-1.png"
            alt="background"
          />

          {/* <div className={styles.heroContent}>
        <p>Sustainability</p>
        <h1>Starts With You</h1>
        <a href="#" className={styles.heroButton}>Learn More</a>
      </div> */}
        </div>
      )}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
