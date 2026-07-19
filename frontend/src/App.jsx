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
     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
   
    </>
  )
}

export default App
