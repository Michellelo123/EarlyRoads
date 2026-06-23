import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import {Outlet} from "react-router-dom"
function App() {
  const workLocations = ['Auckland', 'Wellington', 'Christchurch', 'Hamilton', 'Tauranga', 'Dunedin', 'Queenstown', 'Other']
   const workIndustry = ['Technology', 'Finance', 'Healthcare', 'Government', 'Education', 'Retail', 'Hospitality', 'Construction', 'Marketing', 'Engineering']
   const workArrangement = ['Remote', 'Hybrid', 'On-site']

  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
