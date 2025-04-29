import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.topSection}>
        <h1>We teach basketball to a loving community in Guatemala.</h1>
        <p>
          Albany Ballers Abroad is a nonprofit dedicated to connecting with
          youth in rural Guatemala through basketball, while also supporting
          access to vital healthcare services through our partnership with
          <a href="https://partnerforsurgery.org/" target="_blank">
            {' '}
            Partner for Surgery
          </a>
          . Learn more at our <Link to="/about">About Page</Link>!
        </p>
      </section>

      <section className={`${styles.section} ${styles.imageLeft}`}>
        <img src="/image-2.webp" alt="group photo" loading="lazy" />
        <div className={styles.textContainer}>
          <h2>Our Organization</h2>
          <p>Find out about more about our project!</p>
          <Link to="/about" className={styles.button}>
            Learn More
          </Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.imageRight}`}>
        <div className={styles.textContainer}>
          <h2>Our Community</h2>
          <p>
            We bring people together through the love of basketball and
            community outreach.
          </p>
          <Link to="/contact" className={styles.button}>
            Contact Us
          </Link>
        </div>
        <img src="/image-3.webp" alt="community gathering" loading="lazy" />
      </section>

      <section className={`${styles.section} ${styles.imageLeft}`}>
        <img src="/image-5.webp" alt="action shot" loading="lazy" />
        <div className={styles.textContainer}>
          <h2>Take Action</h2>
          <p>Want to support us? Become a contributor to our mission.</p>
          <Link to="/donate" className={styles.button}>
            Donate
          </Link>
        </div>
      </section>
    </div>
  );
}
