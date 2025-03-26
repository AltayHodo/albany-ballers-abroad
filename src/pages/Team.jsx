import Profile from "../components/Profile";
import styles from "../styles/Team.module.css";

export default function Team() {
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.title}>Meet Our Team</h1>
      <div className={styles.teamGrid}>
      <Profile
          name="Jeysson "
          description="Top 5 people ever."
          image1="/jason-1.webp"
          image2="/jason-2.webp"
        />
        <Profile
          name="Daniel Peterson"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque aliquam, reprehenderit eaque id rem fugiat ea, adipisci libero maiores dolorum sit amet deleniti non doloremque rerum? Officiis, accusamus atque."
          image1="/dp-1.webp"
          image2="/dp-2.webp"
        />
        <Profile
          name="Altay Hodoglugil"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque aliquam, reprehenderit eaque id rem fugiat ea, adipisci libero maiores dolorum sit amet deleniti non doloremque rerum? Officiis, accusamus atque."
          image1="/altay-1.webp"
          image2="/altay-2.webp"
        />
      </div>
    </div>
  );
}
