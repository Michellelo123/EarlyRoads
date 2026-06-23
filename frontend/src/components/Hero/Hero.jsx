import React from 'react'
import styles from "./Hero.module.scss"
import Button from "../Button"
import {Link} from 'react-router'
export default function Hero() {
  return (
    <section className={styles.hero}>
        <p className={styles.label}>New Zealand & remote</p>
        <div>
        <h1>Your first career move starts here</h1>
        <p>Internships, graduate roles and junior jobs - no experience required to apply</p>

        </div>
 
            <Link to="/browse_jobs" className={styles.browseBtn}>Browse Jobs</Link>

        {/* <div>
            <div>
                <p>148</p>
                <p>open roles</p>
            </div>
            <div>
                <p>62</p>
                <p>companies</p>
            </div>
            <div>
                <p>34</p>
                <p>added this week</p>
            </div>
        </div> */}
    </section>
  )
}
