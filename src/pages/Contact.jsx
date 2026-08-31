import styles from "./Contact.module.css"
import { Link } from "react-router-dom"

export default function Contact() {
  return (
    <section className={styles.contactPage} id="contact" aria-labelledby="contact-heading">
      <section className={styles.contactIntro} aria-labelledby="contact-heading">
        <h2 className={styles.contactHeading} id="contact-heading">Let&apos;s build something.</h2>
        <div className={styles.contactDetails}>
          <p className={styles.contactMessage}>
            I&apos;m open to work and actively seeking opportunities. If you have a role, a project,
            or simply want to connect, I&apos;d be glad to hear from you.
          </p>
          <Link className={styles.contactLink} to="/resume">
            View my resume and contact details <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </section>
  )
}
