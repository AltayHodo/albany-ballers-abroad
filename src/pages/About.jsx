import styles from '../styles/About.module.css';
import Team from './Team';

export default function About() {
  return (
    <>
      <div className={styles.aboutContainer}>
        <h2 className={styles.title}>About Us</h2>
        <main className={styles.main}>
          <img src="/image-6.webp" alt="group photo" loading="lazy" />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            sunt a esse ipsam dicta culpa qui architecto impedit totam, laudantium
            voluptas molestiae exercitationem laborum, quod voluptatem iste
            dignissimos natus animi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Corrupti, molestias in magni iusto a reiciendis
            placeat dolores expedita sed delectus error, magnam omnis, fugiat enim
            porro voluptatibus aut unde maiores? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Accusamus asperiores, fuga, fugit
            praesentium id ea eligendi ex animi quae harum qui totam possimus
            similique impedit! Accusamus accusantium molestiae sapiente
            recusandae.
          </p>
        </main>
      </div>
      <Team />
    </>
  );
}
