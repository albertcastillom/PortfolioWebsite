import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import styles from './Home.module.css';

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    window.requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [hash]);

  return (
    <main>
      <section className={styles.landingPage} id="home" aria-labelledby="home-heading">
        <div className={styles.landingEyebrow}>Software engineer · Creative problem solver</div>
        <div className={styles.landingContent}>
          <p className={styles.intro}>Hello, I&apos;m</p>
          <h1 className={styles.landingTitle} id="home-heading">Albert Castillo</h1>
          <p className={styles.landingSubtitle}>
            I build thoughtful digital experiences from interface to infrastructure.
          </p>
          <div className={styles.landingButtons}>
            <Link className={styles.primaryButton} to="/#projects">
              Explore my work <span aria-hidden="true">↓</span>
            </Link>
            <Link className={styles.secondaryButton} to="/resume">
              View resume <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <p className={styles.scrollCue}>Scroll to discover</p>
      </section>
      <Projects />
      <About />
      <Contact />
    </main>
  );
}

export default Home
