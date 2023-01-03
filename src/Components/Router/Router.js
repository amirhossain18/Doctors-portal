import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Appointment/Appointment";
import Blog from "../Blog/Blog";
import Doctors from "../Doctors/Doctors";
import Login from "../Login/Login";

import Main from "../Main/Main";
import Registration from "../Registration/Registration";
import Review from "../Review/Review";
export const router= createBrowserRouter([
    {
        path:"/",
        element: <Main></Main>,
        children: [
    {
        path:"/blog",
        element:<Blog></Blog>
    }, 
    {
        path:"/review",
        element:<Review></Review>
    },
    {
        path:"/login",
        element:<Login></Login>
    },
    {
        path:"/appointment",
        element:<Appointment></Appointment>
    },
    {
        path:"/doctors",
        element:<Doctors></Doctors>
    },
    {
        path:"/registration",
        element:<Registration></Registration>
    }





        ]
    }





])