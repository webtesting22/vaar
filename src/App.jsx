import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import AllResources from './Components/AllResources/AllResources';
import AboutUs from './Components/AboutUs/AboutUs';
// import VaarTeam from './Components/VaarTeam/VaarTeam';
import SignupSection from './Components/SignUp/SignupSection';
import VaarBlogsmain from './Components/VaarBlogsmain/VaarBlogsmain';
import ContactUs from './Components/ContactUs/ContactUs';
import SingleResource from './Components/AllResources/Resources1/SingleResource1';
import CommonResourceComponent from './Components/AllResources/commonResourceComponent';
import SingleResource1 from './Components/AllResources/Resources1/SingleResource1';
import SingleResource2 from './Components/AllResources/Resources2/SingleResource2';
import SingleResource3 from './Components/AllResources/Resources3/SingleResources3';
import SingleResource4 from './Components/AllResources/Resources4/SingleResources4';
import SingleResource5 from './Components/AllResources/Resources5/SingleResource5';
import SingleResource6 from './Components/AllResources/Resources6/SingleResource6';
import SingleResource7 from './Components/AllResources/Resources7/SingleResource7';
import SingleResource8 from './Components/AllResources/Resources8/SingleResource8';
import SingleResource9 from './Components/AllResources/Resources9/SingleResources9';
import SingleResource10 from './Components/AllResources/Resources10/SingleResource10';
import SingleResource11 from './Components/AllResources/Resources11/SingleResource11';
import SingleResource12 from './Components/AllResources/Resources12/SingleResource12';
import SingleResource13 from './Components/AllResources/Resources13/SingleResource13';
import SingleResource14 from './Components/AllResources/Resources14/SingleResource14';
import VaarBlogCommon from './Components/VaarBlogsmain/VaarBlogs/VaarBlogCommon';
import BlogUpload from './Components/BlogUpload/BlogUpload';
import DontMissBlog from './Components/AllResources/DontMissBlogs/DontMissBlogs';
import Vaar from './Components/Vaar/Vaar';
import HowItWorks from './Components/HowItWorks/HowItWorks';
function App() {
 
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AllResources" element={<AllResources />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        {/* <Route exact path="/VaarTeam" element={<VaarTeam />} /> */}
        <Route exact path="/VaarBlogs" element={<VaarBlogsmain />} />
        <Route exact path="/VaarBlogCommon" element={<VaarBlogCommon />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/SingleResource" element={<SingleResource />} />
        <Route exact path="/CommonResourceComponent" element={<CommonResourceComponent />} />
        <Route exact path="/SingleResource1" element={<SingleResource1 />} />
        <Route exact path="/SingleResource2" element={<SingleResource2 />} />
        <Route exact path="/SingleResource3" element={<SingleResource3 />} />
        <Route exact path="/SingleResource4" element={<SingleResource4 />} />
        <Route exact path="/SingleResource5" element={<SingleResource5 />} />
        <Route exact path="/SingleResource6" element={<SingleResource6 />} />
        <Route exact path="/SingleResource7" element={<SingleResource7 />} />
        <Route exact path="/SingleResource8" element={<SingleResource8 />} />
        <Route exact path="/SingleResource9" element={<SingleResource9 />} />
        <Route exact path="/SingleResource10" element={<SingleResource10 />} />
        <Route exact path="/SingleResource11" element={<SingleResource11 />} />
        <Route exact path="/SingleResource12" element={<SingleResource12 />} />
        <Route exact path="/SingleResource13" element={<SingleResource13 />} />
        <Route exact path="/SingleResource14" element={<SingleResource14 />} />
        <Route exact path="/DontMissBlog" element={<DontMissBlog />} />
        <Route exact path="/BlogUpload" element={<BlogUpload />} />
        <Route exact path="/Vaar" element={<Vaar />} />
        <Route exact path="/HowItWorks" element={<HowItWorks />} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;


