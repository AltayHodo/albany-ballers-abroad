import styles from '../styles/About.module.css';
import Team from './Team';

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h2 className={styles.title}>About Us</h2>
        <main className={styles.main}>
          <div className={styles.imagesContainer}>
            <img src="/image-6.webp" alt="group photo" loading="lazy" />
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
              In addition to running the basketball camp, we partner with{' '}
              <a href="https://partnerforsurgery.org/"> Partner for Surgery</a>{' '}
              to help support their mission of providing surgical care to those
              in need in rural Guatemala. Through fundraising efforts and
              on-the-ground support, we are proud to contribute to this health
              initiative in the community we love so much.
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
