import styles from './Resume.module.css';


export default function Resume() {
    const pdfUrl = '/Albert_Castillo_Resume.pdf';
    const docUrl = '/Albert_Castillo_Resume.doc';
    const fileName = 'Albert_Castillo_Resume';

  return (
    <main className={styles.resumeContainer}>
      <h1 className={styles.resumeHeading} >Resume</h1>
      <div className={styles.resumeDownloadButtons}>
        <a href={pdfUrl} download={`${fileName}.pdf`} className={styles.resumeDownloadButton}>
          Download PDF
        </a>
        <a href={docUrl} download={`${fileName}.doc`} className={styles.resumeDownloadButton}>
          Download DOC
        </a>
      </div>
      <object
        className={styles.resumePreview}
        data={`${pdfUrl}#toolbar=1&navpanes=0`}
        type="application/pdf"
      >
        <div className={styles.resumePreviewFallback}>
          <p>Your browser does not support viewing PDFs. Please download the resume to view it.</p>
          <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
            Click here to open the resume PDF in a new tab
          </a>
        </div>
      </object>
    </main>
  )
}
