import { useRouteError } from "react-router-dom";
import styles from "../styles/ErrorPage.module.css";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className={styles.errorContainer}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error?.statusText || error?.message || "Page not found."}</p>
      <a href="/" className={styles.homeButton}>Go to Homepage</a>
    </div>
  );
}
