import ScatteredBoard from "../components/ScatteredBoard";
import styles from "./Projects.module.css"

export default function Projects() {
  return (
    <section className={styles.projectsPage} id="projects" aria-labelledby="projects-heading">
      <header className={styles.projectsHeader}>
        <p>Selected work</p>
        <h2 className={styles.projectsHeading} id="projects-heading">Project Board</h2>
        <p>A growing collection of experiments, builds, and ideas I&apos;ve brought to life.</p>
      </header>
      <ScatteredBoard />
    </section>
  )
}
