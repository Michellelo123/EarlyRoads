import React from 'react'
import { jobCardData } from './data'
import styles from "./JobCard.module.scss"
import {Link} from 'react-router-dom'
import supabase from '../../config/supabaseClient'
export default function JobCard() {
//  console.log(jobCardData)
    return (
    <div>
        
        {jobCardData.map(job =>(
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
            <p>{job.workType}</p>
            <p>{job.postedDate}</p>
        </div>
        </div>
            </Link>
        ))}
    </div>
  )
}
