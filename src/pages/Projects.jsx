import ScatteredBoard from "../components/ScatteredBoard";
import styles from "./Projects.module.css"

export default function Projects() {
  return (
    <main className={styles.projectsPage}>
      <h1 className={styles.projectsHeading}>Project Board</h1>
      <ScatteredBoard />
    </main>
  )
}
