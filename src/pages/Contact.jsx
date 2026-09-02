import styles from "./Contact.module.css"
import { FaEnvelope, FaGithub, FaHandshake, FaLinkedinIn } from "react-icons/fa"

const contactLinks = [
  { label: "Email", href: "mailto:albert.castillom@gmail.com", Icon: FaEnvelope },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/albert-castillo-83b2ba208/", Icon: FaLinkedinIn },
  { label: "GitHub", href: "https://github.com/albertcastillom", Icon: FaGithub },
  { label: "Handshake", href: "https://app.joinhandshake.com/profiles/yf7jd6", Icon: FaHandshake },
]

export default function Contact() {
  return (
    <footer className={styles.contactPage} id="contact" aria-labelledby="contact-heading">
      <div className={styles.contactContent}>
        <div className={styles.contactIntro}>
          <p className={styles.contactEyebrow}>Get in touch</p>
          <h2 className={styles.contactHeading} id="contact-heading">Let&apos;s Connect.</h2>
          <p className={styles.contactMessage}>
            I&apos;m open to work and actively seeking opportunities. If you have a role, a project,
            or simply want to connect, I&apos;d be glad to hear from you.
          </p>
        </div>

        <nav className={styles.contactLinks} aria-label="Contact and social links">
          {contactLinks.map(({ label, href, Icon }) => (
            <a
              className={styles.contactLink}
              href={href}
              key={label}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className={styles.linkLabel}>
                <Icon aria-hidden="true" />
                {label}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </nav>

        <div className={styles.footerMeta}>
          <span>Developed by Albert Castillo</span>
          <span>2026</span>
        </div>
      </div>
    </footer>
  )
}
