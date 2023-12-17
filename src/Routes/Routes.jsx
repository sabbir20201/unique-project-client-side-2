import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import OurSurvices from "../Pages/OurSurvices/OurSurvices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import PrivateRoutes from "./PrivateRoutes";


const Routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/survices",
                element: <OurSurvices></OurSurvices>
            },
            {
                path: "/servicedetails",
                element: <PrivateRoutes> <ServiceDetails></ServiceDetails></PrivateRoutes>
            },
            {
                path:"/register",
                element: <Register></Register>
            },
            {
                path:"/login",
                element: <Login></Login>
            }
        ]
    }
])

export default Routes;