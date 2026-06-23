import {useState} from 'react'
import styles from "./Navbar.module.scss"
import { Link } from 'react-router-dom'
export default function Navbar() {
    const [open, setOpen] = useState(false)
    const navItems= [
        {label:"browse jobs",path:"/browse_jobs"},{label: "for employers", path:"/for_employers"}
    ]
    // maybe add a login page in the future?

    const navMapped = navItems.map((navLink, index)=>{
        return (
            <li key={index}><Link to={navLink.path}>{navLink.label}</Link></li>
        )
    })
    function openHamburger(){
        setOpen(prev=>!prev)
    }

  return (
    <header>
        <nav aria-label="main navigation">
           <Link to="/" aria-label="EarlyRoads home" className={styles.logoName}>Early<span>Roads</span></Link>
            <button
                aria-label="open menu"
                className={styles.hamburger}
                onClick={openHamburger}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <ul className={open? styles.open : ""}>
                {navMapped} 
                <li className={styles.postJob}><a href="#">Login</a></li>
                
            </ul>
        </nav>
    </header>
  )
}
