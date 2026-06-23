import {useState} from 'react'
import styles from "./Filter.module.scss"
import { workArrangement, workLocations, workIndustry, employmentTypes } from '../../constantData/constantData'
export default function Filter() {
   const [open, setOpen] = useState(false)
  const [selectedEmployment, setSelectedEmployment] = useState([])
  // first in the employment type there will be a list of checkboxes so it must be stored as an array
  const [selectedWorkArrangement, setSelectedWorkArrangement] = useState([])
//   remote, hybrid, onsite
  const [selectedIndustry, setSelectedIndustry] = useState([])
//   allthe industries
  const [selectedLocation, setSelectedLocation] = useState([])
//   
  const handleEmploymentChange = (jobType) =>{
    setSelectedEmployment(prev=>prev.includes(jobType)? prev.filter(t=> t !==jobType):[...prev, jobType])
  }
  const handleWorkArrangement = (workType) => {
    setSelectedWorkArrangement(prev=>prev.includes(workType)? prev.filter(p=> p !== workType) : [...prev,workType])
  }
  function handleWorkIndustry(work){
    setSelectedIndustry(prev=>prev.includes(work)? prev.filter(w => w !==work) : [...prev, work])
  }

  const handleLocation = (work) =>{
    setSelectedLocation(prev=>prev.includes(work)? prev.filter(p => p !== work) : [...prev, work])
  }


// so when the box is checked/unchecked === whatever jobtype was checked it will check first, does current array include that job? 
// it will then look into that array and then return an array with the items without the jobtype if it includes that jobtype
// if the pre array does not include the job type then it will spread the prev array and then add jobtype this is how the checked on and off work 


    return (
    <>
    <div className={`${styles.workFilter} ${open? "":styles.close}` }>
            <div>

            <p className={styles.employment}>Employment Type</p>
            <ul className={styles.list}>
                {employmentTypes.map((jobType)=>(
                    <li key={jobType}>
                        <label>
                            <input 
                            type="checkbox"
                            checked={selectedEmployment.includes(jobType)}
                            // ✅ if included → checked=true → checkbox is TICKED
                            // ✅ if not included → checked=false → checkbox is UNTICKED
                            onChange={()=>{console.log(jobType)
                                handleEmploymentChange(jobType)}}
                                // onchange on an event change it will run this function
                            
                            />
                        {jobType}
                        </label>
                    </li>
                ))}
            </ul>
            </div>
            <div>

            <p>Work Arrangement</p>
            <ul className={styles.list}>
                {workArrangement.map(workType=>(
                <li key={workType}>
                    <label>
                        <input 
                        type="checkbox"
                        checked={selectedWorkArrangement.includes(workType)}
                        onChange={()=>handleWorkArrangement(workType)} />
                        {workType}
                    </label>
                </li>
                ))}
            </ul>
            </div>
                <div>

            <p>Industry</p>
            <ul className={styles.list}>
                {workIndustry.map(work=>(
                    <li key={work}>
                        <label>
                            <input 
                            type="checkbox"
                            checked={selectedIndustry.includes(work)}
                            onChange={()=>handleWorkIndustry(work)}/>
                            {work}
                        </label>
                    </li>
                ))}
            </ul>
                </div>
                <div>

            <p>Location</p>
            <ul className={styles.list}>
                {workLocations.map(work => (
                    <li key={work}>
                        <label>
                            <input type="checkbox" 
                            checked={selectedLocation.includes(work)}
                            onChange={()=>handleLocation(work)}/>
                        {work}
                        </label>
                    </li>
                ))}
            </ul>
                </div>
    </div>
        <button className={styles.filterBtn}
        onClick={()=>setOpen(prev=>!prev)}
        >{open? "X":"More filter options"}</button>
        </>
  )

}