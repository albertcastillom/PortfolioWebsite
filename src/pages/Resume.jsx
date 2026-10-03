import styles from './Resume.module.css';


export default function Resume() {
    const pdfUrl = '/Albert_Castillo_Resume.pdf';
    const previewUrl = '/Albert_Castillo_Resume_Preview.png';
    const fileName = 'Albert_Castillo_Resume_SWE_Software_Development';

  return (
    <main className={styles.resumeContainer}>
      <h1 className={styles.resumeHeading} >Resume</h1>
      <div className={styles.resumeDownloadButtons}>
        <a href={pdfUrl} download={`${fileName}.pdf`} className={styles.resumeDownloadButton}>
          Download PDF
        </a>
        <a
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeDownloadButton}
        >
          Open PDF
        </a>
      </div>
      <a
        className={styles.resumePreviewLink}
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open resume PDF in a new tab"
      >
        <img
          className={styles.resumePreview}
          src={previewUrl}
          alt="Preview of Albert Castillo's software development resume"
        />
      </a>
    </main>
  )
}
