import React from 'react'
import { Outlet} from 'react-router-dom'
import {useState, useEffect} from "react"
import Filter from '../../components/FilterJobSearch/Filter'
import JobCard from '../../components/FilterJobSearch/JobCard'
import styles from "./Browse.module.scss"
import {supabase} from '../../config/supabaseClient'

export default function Browser() {
console.log('supavase',supabase.supabaseUrl)
    const [location, setLocation] = useState(null)
    const [jobSearch, setJobSearch] = useState(null)
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    

    useEffect(()=>{
        // const result = await supabase.from('jobs').select('*')
        async function fetchJobs(){
            const {data, error} = await supabase
            .from('jobs')
            .select('*')
            .order ('posted_date', {ascending: false})
            console.log('data',data)
            if (error) {
            setError(error.message)
        }else {
            setJobs(data)
        }
        setLoading(false)
        
    }
    fetchJobs()
},[])
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
            {loading && <p>Loading jobs...</p>}
            {error && <p>Error: {error}</p>}
            {!loading && !error && <JobCard jobs={jobs} />}

    </section>
  )
}
