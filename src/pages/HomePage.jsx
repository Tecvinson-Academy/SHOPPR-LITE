import styles from "../styles/Home.module.css";

function HomePage() {
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>
        Welcome to Shoppr
      </h1>

      <p className={styles.subtitle}>
        Fashion, electronics and lifestyle —
        delivered to your door.
      </p>
    </div>
  );
}

export default HomePage;