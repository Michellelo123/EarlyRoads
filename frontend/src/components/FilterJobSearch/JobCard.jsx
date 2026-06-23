import React from 'react'
import { jobCardData } from './data'
import styles from "./JobCard.module.scss"
export default function JobCard() {
//  console.log(jobCardData)
    return (
    <div>
        
        {jobCardData.map(job =>(
        <div className={styles.jobCard} key={job.id}>
        <div className={styles.like}>
            <h3>{job.title}</h3>
             <div>
                save
             </div>
        </div>
            <h4>{job.company}<span> - {job.location}</span></h4>
        <div className={styles.jobInfo}>
            <p>{job.workType}</p>
            <p>{job.postedDate}</p>
        </div>
        </div>
        ))}
    </div>
  )
}
