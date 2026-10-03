import { useEffect, useRef } from "react"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom"
import { getProjectBySlug } from "../projectsData"
import styles from "./ProjectDetail.module.css"

export default function ProjectDetail() {
  const { projectSlug } = useParams()
  const project = getProjectBySlug(projectSlug)
  const location = useLocation()
  const navigate = useNavigate()
  const projectPageRef = useRef(null)
  const closeButtonRef = useRef(null)

  const closeProject = () => {
    if (location.state?.openedFromPortfolio) {
      navigate(-1)
      return
    }

    navigate("/#projects")
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeButtonRef.current?.focus()

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeProject()
        return
      }

      if (event.key !== "Tab") return

      const focusableElements = projectPageRef.current?.querySelectorAll(
        "a[href], button:not([disabled])",
      )

      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  if (!project) return <Navigate to="/#projects" replace />

  return (
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) closeProject()
      }}
    >
      <article
        ref={projectPageRef}
        className={styles.projectPage}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-detail-title"
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          type="button"
          onClick={closeProject}
          aria-label="Close project details"
        >
          <span aria-hidden="true">×</span>
        </button>

        <header className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>{project.type}</span>
            <span>{project.status}</span>
          </div>
          <h1 id="project-detail-title">{project.title}</h1>
          <p>{project.detail.lead}</p>
          <ProjectLinks project={project} />
        </header>

        <ul className={styles.factGrid} aria-label={`${project.title} project facts`}>
          {project.detail.facts.map((fact) => (
            <li key={fact.label}>
              <span>{fact.label}</span>
              <strong>{fact.value}</strong>
            </li>
          ))}
        </ul>

        <div className={styles.sectionList}>
          {project.detail.sections.map((section, index) => (
            <section className={styles.detailSection} key={section.title}>
              <div className={styles.sectionLabel}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{section.eyebrow}</span>
              </div>
              <div className={styles.sectionContent}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.items && (
                  <ul>
                    {section.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        <footer className={styles.projectFooter}>
          <p>Interested in the implementation?</p>
          <ProjectLinks project={project} />
        </footer>
      </article>
    </div>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className={styles.actions}>
      {project.links.map((link, index) => (
        <a
          key={link.url}
          className={index === 0 ? styles.primaryAction : styles.secondaryAction}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.label} <span aria-hidden="true">↗</span>
        </a>
      ))}
    </div>
  )
}
