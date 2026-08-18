import React from 'react'
import { jobCardData } from './data'
import styles from "./JobCard.module.scss"
import {Link} from 'react-router-dom'
export default function JobCard({jobs}) {
//  console.log(jobCardData)
    return (
    <div>
        
        {jobs.map(job =>(
            <Link to={`/browse_jobs/${job.id}`} key={job.id} target="_blank">
            
        <div className={styles.jobCard} >
        <div className={styles.like}>
            <h3>{job.title}</h3>
             <div>
                save
             </div>
        </div>
            <h4>{job.company}<span> - {job.location}</span></h4>
        <div className={styles.jobInfo}>
            <p>{job.work_type}</p>
            <p>{job.posted_date}</p>
        </div>
        </div>
            </Link>
        ))}
    </div>
  )
}
