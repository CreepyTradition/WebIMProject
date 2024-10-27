import { createBrowserRouter, Navigate } from "react-router-dom";
import FacultyLayout from "./Layouts/FacultyLayout/FacultyLayout";
import FacultyPage from "./Pages/faculty";
import HomeLayout from "./Layouts/HomeLayout/HomeLayout";
import HomePage from "./Pages/home";
import ContactUs from "./Pages/contactus";
import AboutUs from "./Pages/aboutus";
import Servicescsa from "./Pages/servicescsa";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
            ,
            {
                path: "about",
                element: <AboutUs />
            },
            {
                path: "servicescsa",
                element: <Servicescsa />
            },
            {
                path: "contact",
                element: <ContactUs />
            }
        ]
    },

    {
        path: "faculty",
        element: <FacultyLayout />,
        children: [
            {
                index: true,
                element: <FacultyPage />
            },
        ],
    },
    {
        path: "*",
        element: <Navigate to="/" replace />
    }
]);

export default Router;