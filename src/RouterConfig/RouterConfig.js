import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../pages/About/About/About";
import Appointment from "../pages/Appointment/Appointment/Appointment/Appointment";
import ContactUs from "../pages/ContactUs/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import RequireAdmin from "../pages/Login/RequireAdmin/RequireAdmin";
import RequireAuth from "../pages/Login/RequireAuth/RequireAuth";
import Reviews from "../pages/Reviews/Reviews/Reviews";
import ErrorPage from "../pages/Shared/ErrorPage/ErrorPage";
import MyAppoinments from "../pages/ShowAppoinment/MyAppoinments";
import MyHistory from "../pages/ShowAppoinment/MyHistory";
import MyReview from "../pages/ShowAppoinment/MyReview";
import ShowAppoinment from "../pages/ShowAppoinment/ShowAppoinment";
import Users from "../pages/ShowAppoinment/Users";


const RouterConfig = () => {
    const router = createBrowserRouter(
        createRoutesFromElements([
            <Route
                path="/"
                element={<Main></Main>}
                errorElement={<ErrorPage />}
            >
                <Route path="/" element={<Dashboard></Dashboard>}></Route>
                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                <Route
                    path="/appointment"
                    element={
                        <RequireAuth>
                            <Appointment></Appointment>
                        </RequireAuth>
                    }
                >
                </Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/reviews" element={<Reviews></Reviews>}></Route>
                <Route path="/contact-us" element={<ContactUs></ContactUs>}></Route>
                <Route
                    path="/showappoinment"
                    element={
                        <RequireAuth>
                            <ShowAppoinment></ShowAppoinment>
                        </RequireAuth>
                    }
                >
                    <Route index element={<MyAppoinments></MyAppoinments>}></Route>
                    <Route path="/showappoinment/myreviews" element={<MyReview></MyReview>}></Route>
                    <Route path="/showappoinment/history" element={<MyHistory></MyHistory>}></Route>
                    <Route
                        path="/showappoinment/users"
                        element={
                            <RequireAdmin >
                                <Users></Users>
                            </RequireAdmin>}
                    >
                    </Route>
                </Route>
                
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
            </Route>

        ]
        )
    );

    return router;
}

export default RouterConfig;