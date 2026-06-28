import React from 'react'
import { Outlet} from 'react-router-dom'
import {useState} from "react"
import Filter from '../../components/FilterJobSearch/Filter'
import JobCard from '../../components/FilterJobSearch/JobCard'
import styles from "./Browse.module.scss"
export default function Browser() {
    const [location, setLocation] = useState(null)
    const [jobSearch, setJobSearch] = useState(null)
 const submitSearch=(e)=>{
    console.log(e.target.value)
 }
    return (
    <section className={styles.browse}>
        <div className={styles.browseHero}>
            <p>BROWSE JOBS</p>
            <h1>Find your <span>first role</span></h1>
            <div className={styles.search}>
                <label>
                    <input aria-label="Search Jobs" type="text" placeholder="jobsearch" value={jobSearch} onChange={e=>console.log(e.target.value)}/>
                    <input aria-label="Search location" type="text" placeholder="location" value={location} onChange={e=>console.log(e.target.value)}/>
                </label>
                <button className={styles.searchBtn} onClick={submitSearch}>Search jobs</button>
            </div>
        </div>
        <Filter/>
        
            <JobCard/>

    </section>
  )
}
