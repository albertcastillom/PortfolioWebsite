import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <main className={styles.contactPage}>
      <section className={styles.contactIntro} aria-labelledby="contact-heading">
        <h1 className={styles.contactHeading} id="contact-heading">Contact Me</h1>
        <p className={styles.contactMessage}>
          Feel Free to reach out to me. I am open to work and actively seeking opportunities.
        </p>
      </section>
    </main>
  )
}
