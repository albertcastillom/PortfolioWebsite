import styles from './Home.module.css';

function Home() {
  return (
    <>
        <div className={styles.backgroundImage}>
            <div className={styles.overlay}>
                <h1 className={styles.landingTitle}>Albert Castillo</h1>
                 <p className={styles.landingSubtitle}>Aspiring Full-Stack Software Engineer</p>
                 <p className={styles.landingSubtitle}>Check out my projects and learn more about me!</p>
            </div>   
            
        </div>
    </>
  );
}

export default Home;
