import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Router,
    Routes,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import AboutUs from "../Components/AboutUs/AboutUs";
import AllResources from "../Components/AllResources/AllResources";
import VaarTeam from "../Components/VaarTeam/VaarTeam";
import ScreenLayout from "../ScreenLayout/ScreenLayout";


const route = createBrowserRouter(
    createRoutesFromElements(

        <Route path="/" element={<ScreenLayout />}>

            <Route index element={<Home />} />
            <Route path="AboutUs" element={<AboutUs />} />
            <Route path="AllResources" element={<AllResources />} />
            <Route path="VaarTeam" element={<VaarTeam />} />

        </Route>

    )
);

export default route