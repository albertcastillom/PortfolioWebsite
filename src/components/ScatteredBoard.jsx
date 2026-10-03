import { Link } from "react-router-dom"
import { featuredProjects } from "../projectsData"
import styles from "./ScatteredBoard.module.css"

export default function ScatteredBoard(){
    return (
        <div className={styles.scatteredBoard}>
            {featuredProjects.map((project) =>
                <article
                    key={project.slug}
                    className={styles.scatteredCard}
                    style={{
                        top: `${project.card.y}%`,
                        left: `${project.card.x}%`,
                        transform: `rotate(${project.card.rotate}deg)`,
                    }}
                >
                    <Link
                        className={styles.cardOpenLink}
                        to={`/projects/${project.slug}`}
                        state={{ openedFromPortfolio: true }}
                        aria-label={`Open ${project.title} project details`}
                    />
                    <div className={styles.cardMeta}>
                        <span>{project.number}</span>
                        <span>{project.status}</span>
                    </div>
                    <h3>{project.title}</h3>
                    <p className={styles.cardSummary}>{project.summary}</p>
                    <ul className={styles.technologyList} aria-label={`${project.title} technologies`}>
                        {project.technologies.map((technology) => (
                            <li key={technology}>{technology}</li>
                        ))}
                    </ul>
                    <div className={styles.cardFooter}>
                        <span>View project <span aria-hidden="true">↗</span></span>
                        <a
                            href={project.cardLink.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {project.cardLink.label}
                        </a>
                    </div>
                </article>
            )}
        </div>
    )
}
