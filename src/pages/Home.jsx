import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main className={styles.landingPage}>
      <section className={styles.landingContent}>
        <h1 className={styles.landingTitle}>Albert Castillo</h1>
        <p className={styles.landingSubtitle}>Aspiring Full-Stack Software Engineer</p>
        <p className={styles.landingSubtitle}>Check out my projects and learn more about me!</p>
        <div className={styles.landingButtons}>
          <Link className={styles.landingButton} to="/projects">
            View My Work
          </Link>
          <Link className={styles.landingButton} to="/resume">
            View My Resume
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home
