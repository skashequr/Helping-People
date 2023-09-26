import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Components/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import DonateDetails from "./Components/DonateDetails/DonateDetails";
import Donation from "./Components/Donations/Donations";
import Statics from "./Components/Statics/Statics";


const myCreatedRoute =  createBrowserRouter([
    {

        path : "/",
        element : <MainLayout></MainLayout>,
        // errorElement: <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element: <Home></Home>,
                loader: ()=> fetch('/data.json')
            
            },
            {
                path : "/Donation",
                element: <Donation></Donation>,
                loader: ()=> fetch('/data.json')
                
            },
            {
                path: "/Donation/Deatils/:id",
                element: <DonateDetails></DonateDetails>,
                loader: ()=> fetch('/data.json')
                
            },
            {
                path : "/Statistics",
                element: <Statics></Statics>
                
            },
            
        ]

    }
])

export default myCreatedRoute;