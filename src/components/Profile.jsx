import { useState } from "react";
import styles from "../styles/Profile.module.css";

export default function Profile({ name, description, image1, image2 }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className={styles.profile}>
      <img
        src={hovered ? image2 : image1}
        alt={name}
        className={styles.profileImage}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
