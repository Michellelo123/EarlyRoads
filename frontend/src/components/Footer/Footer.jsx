import React from 'react'
import styles from "./Footer.module.scss"
import { div } from 'motion/react-client'
// import COnflict
export default function Footer() {
  return (
    <footer >
        <div className={styles.footer}>
            <div>
            <h3>Early<span>Roads</span></h3>
            <p>The job board built for internships,graduate rosle and junior positions in New Zealand.</p>
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
           <p className={styles.copyrightSentence}>copyright EarlyRoads. Aotearoa/New Zealand</p> 
        </div>
    </footer>
  )
}
