import { useEffect, useState } from 'react';
import styles from '../styles/About.module.css';
import Team from './Team';

const images = [
  '/slide-1.webp',
  '/slide-2.webp',
  '/slide-3.webp',
  '/slide-4.webp',
  '/slide-5.webp',
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.aboutContainer}>
        <h2 className={styles.title}>About Us</h2>
        <main className={styles.main}>
          <div className={styles.carousel}>
            <img
              src={images[currentIndex]}
              alt="carousel"
              className={styles.carouselImage}
              loading="lazy"
            />
            <div className={styles.dotsContainer}>
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                />
              ))}
            </div>
          </div>

          <div className={styles.description}>
            <p>
              Albany Ballers Abroad began with four high school basketball
              teammates from the small town of Albany, California. Driven by a
              shared passion for the game and a desire to make a difference, we
              connected with a community in Chimaltenango, a rural city in
              Guatemala. There, we introduced basketball for the first time —
              building not only skills, but lasting bonds with an incredibly
              welcoming community.
            </p>
            <p>
              What started as a single trip has grown into an annual tradition.
              For the past four years and counting, we’ve returned to continue
              sharing our love of basketball, and learning and connecting with
              all the friends we’ve made along the way.
            </p>
            <p>
              In addition to running the basketball camp, we partner with
              <a href="https://partnerforsurgery.org/" target="_blank"> Partner for Surgery</a>{' '}
              to help support their mission of providing surgical care to those
              in need in rural Guatemala. Through fundraising efforts and
              on-the-ground support, we are proud to help out the community we love so much.
            </p>
            <p>
              At Albany Ballers Abroad, our mission is simple: to connect
              through sports, empower through community, and make a lasting
              positive impact.
            </p>
          </div>
        </main>
      </div>
      <Team />
    </>
  );
}
