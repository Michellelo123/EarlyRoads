import { useState } from "react";
import styles from "./ForEmployers.module.scss";
import { workArrangement, workLocations, workIndustry, employmentTypes, experienceLevel } from "../../constantData/constantData";
export default function ForEmployers() {

  const [data, setData] = useState({
    companyName: "",
    companyWebsite: "",
    jobTitle: "",
    expLvl: [],
    employType: [],
    workArrange: [],
    location: "",
    industry: "",
    jobDescript: "",
    salaryMin: "",
    salaryMax: "",
    payPeriod: "per year",
    closingDate: "",
    applicationWay: "",
  });

  function handleChange(e) {
    console.log(e.target.value);
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }

  function handleCheckbox(field, option){
    console.log(option)
    setData(prev=>({
        ...prev,
        [field] : prev[field].includes(option)?
        prev[field].filter(p=>p!==option):
        [...prev[field], option]
    }))
  }

  function handleCancel(){
    setData( 
    {companyName: "",
    companyWebsite: "",
    jobTitle: "",
    expLvl: [],
    employType: [],
    workArrange: [],
    location: "",
    industry: "",
    jobDescript: "",
    salaryMin: "",
    salaryMax: "",
    payPeriod: "per year",
    closingDate: "",
    applicationWay: "",
  })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log("submitted")
  }
    // we need to set the empty array to what ever has been checked so check does the current array include this?
  
  // console.log(workArrange)

  return (
    <form
     onSubmit={handleSubmit}
    >
      <div className={styles.jobPosting}>
        <h1>Post a Job</h1>
        <p>
          Fill in the details below and your listing will go live immediately
        </p>
      </div>
      <div className={styles.jobPost}>
        <div className={styles.jobInfo}>
          <h4>COMPANY INFO</h4>
          <label>
            Company Name
            <input
              type="text"
              name="companyName"
              value={data.companyName}
              onChange={handleChange}
              placeholder="Please type your company name"
              required
            />
          </label>
          <label>
            Company Website
            <input
              type="text"
              name="companyWebsite"
              value={data.companyWebsite}
              onChange={handleChange}
              placeholder="Please insert your company website"
            />
          </label>
        </div>

        <div className={styles.jobInfo}>
          <h4>ROLE DETAILS</h4>
          <label>
            Job Title
            <input
              type="text"
              name="jobTitle"
              value={data.jobTitle}
              onChange={handleChange}
            />
          </label>
          <div className={styles.checkBox}>
            <h5>Experience Level</h5>
            <div>

            {experienceLevel.map((opt) => (
                <label key={opt}>
                {opt}
                <input
                  type="checkbox"
                  checked={data.expLvl.includes(opt)}
                  onChange={() => handleCheckbox("expLvl",opt)}
                  //   value={opt}
                  />
              </label>
            ))}
            </div>
          </div>
          <div className={styles.checkBox}>
            <h5>Employment Type</h5>
        <div>
            {employmentTypes.map((opt) => (
                <label key={opt}>
                {opt}
                <input
                  type="checkbox"
                  //   value={opt}
                  onChange={() => handleCheckbox("employType",opt)}
                  checked={data.employType.includes(opt)}
                  />
              </label>
            ))}
            </div>            
          </div>

          <div className={styles.checkBox}>
            <h5>Work Arrangement</h5>
                <div>

            {workArrangement.map((option) => (
                <label key={option}>
                {option}
                <input
                  type="checkbox"
                  //   value={option}
                  checked={data.workArrange.includes(option)}
                  onChange={() => handleCheckbox("workArrange",option)}
                  />
              </label>
            ))}
            </div>
          </div>
            <div className={styles.dropdown}>
                <label>
                    Location
                <select name="location" value={data.location} onChange={handleChange}>
                    <option value="">Select a location</option>
                        {workLocations.map(location=>(
                            <option key={location} value={location}>{location}
                                </option>
                        ))}
                    
                </select>
                </label>
            </div>
{/* 
            <h4>Location</h4> */}
            <div className={styles.dropdown}>
                <label>
                    Industry
                <select name="industry" value={data.industry} onChange={handleChange}>
                    <option value="">Select an industry</option>
                        {workIndustry.map(industry=>(
                            <option key={industry} value={industry}>{industry}
                                </option>
                        ))}
                    
                </select>
                </label>
            </div>
            {/* <h4>Industry</h4> */}

        </div>
        <div className={styles.jobInfo}>
          <h4>JOB DESCRIPTION</h4>
          <label htmlFor="">
            <textarea
              name="jobDescript"
              value={data.jobDescript}
              onChange={handleChange}
              placeholder="type your description"
            ></textarea>
          </label>
        </div>
        <div className={styles.jobInfo}>
          <h4>SALARY & DATES</h4>
          <label>
            Salary Range
            <input 
                type="number" min="0" placeholder="min" name="salaryMin" value={data.salaryMin} onChange={handleChange}/>
          </label>
          <label>
            <input type="number" min="0" placeholder="max" name="salaryMax" value={data.salaryMax} onChange={handleChange} />
          </label>
         <div className={styles.radio}>

          {["per hour", "per year"].map((opt) => (
            <label key={opt}>
                {opt}
              <input
                type="radio"
                name="payPeriod"
                value={opt}
                checked={data.payPeriod === opt}
                onChange={handleChange}
              />
            </label>
          ))}
         </div>
          <label>
            Closing Date
            <input type="date" name="closingDate" value={data.closingDate} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.jobInfo}>
          <h4>HOW TO APPLY</h4>
          <label>
            Application Link or Email
            <input
              type="text"
              placeholder="https://careers.yourcompany.com or hiring@company.co.nz"
              name="applicationWay"
              value={data.applicationWay}
              onChange={handleChange}
            />
          </label>
        </div>
      <div className={styles.submission}>
          <div>

      <button type="submit">Post Job Listing</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
      <p>
        By posting you agree to our <span>Terms of Use</span>
      </p>
      </div>
      </div>
    </form>
  );

}