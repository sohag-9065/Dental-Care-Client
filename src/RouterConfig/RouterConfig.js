import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import About from "../pages/About/About/About";
import Appointment from "../pages/Appointment/Appointment/Appointment";
import ContactUs from "../pages/ContactUs/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Reviews from "../pages/Reviews/Reviews/Reviews";


const RouterConfig = () => {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route
                path="/"
                element={<Home></Home>}
                loader={async ({ request }) => {
                    // loaders can be async functions
                    const res = await fetch("menuitems.json", {
                      signal: request.signal,
                    });
                    const user = await res.json();
                    return user;
                  }}
            >
                <Route path="/" element={<Dashboard></Dashboard>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/appointment" element={<Appointment></Appointment>}></Route>
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