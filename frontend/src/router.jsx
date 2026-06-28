import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home"
import Browser from "./pages/Browse/Browser"
import App from "./App";
import ForEmployers from "./pages/ForEmployers/ForEmployers";
import JobDetail from "./components/Job/JobDetail";

const router = createBrowserRouter([
    {path:"/",
        element:<App/>,
        
        children:[{
        path:"/",
        element: <Home/>
    
    },{
        path:"/browse_jobs",
        element:<Browser/>

    },{
        path:"/browse_jobs/:id",
        element: <JobDetail />

    },
    {
        path:"/for_employers",
        element:<ForEmployers/>
    }
]
}])

export default router;