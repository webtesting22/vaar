import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import SignupSection from "../Components/SignUp/SignupSection";

const ScreenLayout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <SignupSection />
            <Footer />
        </>
    )
}
export default ScreenLayout;