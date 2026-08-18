import React from 'react'
import styles from "./Footer.module.scss"
export default function Footer() {
  return (
    <footer>
      <div className={styles.footer}>
        {/* div 1 */}
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>

          <h3>
            Early<span>Roads</span>
          </h3>
          <p>
            The job board built for internships, graduate roles and junior
            positions in New Zealand.
          </p>
          <div>
            <p>social media icons</p>
          </div>
          </div>
        
        <div className={styles.footerLink}>
          <div>
            <h5>JOB SEEKERS</h5>
            <ul>
              <li>Browse jobs</li>
              <li>Career tips</li>
            </ul>
          </div>
          <div>
            <h5>EMPLOYERS</h5>
            <ul>
              <li>Post a job</li>
              <li>Why EarlyRoads</li>
            </ul>
          </div>
          </div>
        </div>
      <hr />
      <div className={styles.copyright}>
        <div className={styles.copyrightLink}>
          <p>Privacy policy</p>
          <p>Terms of use</p>
        </div>
        <p className={styles.copyrightSentence}>
          Copyright © 2026 EarlyRoads. All rights reserved.
        </p>
      </div>
      </div>
    </footer>
  );
}
