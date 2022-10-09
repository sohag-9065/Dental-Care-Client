import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About/About";
import Appointment from "../pages/Appointment/Appointment/Appointment/Appointment";
import ContactUs from "../pages/ContactUs/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Login from "../pages/Login/Login/Login";
import Reviews from "../pages/Reviews/Reviews/Reviews";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";


const RouterConfig = () => {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route
                path="/"
                element={<Main></Main>}
                errorElement={<ErrorPage />}
                loader={async () => await fetch("menuitems.json")}
            >
                <Route path="/" element={<Dashboard></Dashboard>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route
                    path="/appointment"
                    element={<Appointment></Appointment>}
                    loader={async () => await fetch("services.json")}
                ></Route>
                <Route path="/reviews" element={<Reviews></Reviews>}></Route>
                <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
            </Route>

        ]
        )
    );

    return router;
}

export default RouterConfig;