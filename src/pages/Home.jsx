import styles from '../styles/Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <section className={styles.topSection}>
        <h1>We teach basketball to a loving community in Guatemala.</h1>
        <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate, culpa! Hic, aperiam. Suscipit, dolores commodi maxime facilis omnis ipsum qui aperiam quod. Natus fugiat accusamus id similique nulla modi nisi?
        </p>
      </section>

      <section className={`${styles.section} ${styles.imageLeft}`}>
        <img src="/image-2.png" alt="group photo" />
        <div className={styles.textContainer}>
          <h2>Our Organization</h2>
          <p>Find out about more about our project!</p>
          <Link to="/about" className={styles.button}>Learn More</Link>
        </div>
      </section>

      <section className={`${styles.section} ${styles.imageRight}`}>
        <div className={styles.textContainer}>
          <h2>Our Community</h2>
          <p>We bring people together through the love of basketball and community outreach.</p>
          <Link to="/contact" className={styles.button}>Contact Us</Link>
        </div>
        <img src="/image-3.JPG" alt="community gathering" />
      </section>

      <section className={`${styles.section} ${styles.imageLeft}`}>
        <img src="/image-5.JPG" alt="action shot" />
        <div className={styles.textContainer}>
          <h2>Take Action</h2>
          <p>Want to support us? Become a contributor to our mission.</p>
          <Link to="/donate" className={styles.button}>Donate</Link>
        </div>
      </section>
    </div>
  );
}
