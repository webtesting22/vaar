import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import AllResources from './Components/AllResources/AllResources';
import AboutUs from './Components/AboutUs/AboutUs';
import VaarTeam from './Components/VaarTeam/VaarTeam';
import SignupSection from './Components/SignUp/SignupSection';
import VaarBlogsmain from './Components/VaarBlogsmain/VaarBlogsmain';
import ContactUs from './Components/ContactUs/ContactUs';
import SingleResource from './Components/AllResources/Resources1/SingleResource1';
import CommonResourceComponent from './Components/AllResources/commonResourceComponent';
import SingleResource1 from './Components/AllResources/Resources1/SingleResource1';
import SingleResource2 from './Components/AllResources/Resources2/SingleResource2';
import SingleResource3 from './Components/AllResources/Resources3/SingleResources3';
import SingleResource4 from './Components/AllResources/Resources4/SingleResources4';
import VaarBlogCommon from './Components/VaarBlogsmain/VaarBlogs/VaarBlogCommon';
import BlogUpload from './Components/BlogUpload/BlogUpload';

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AllResources" element={<AllResources />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/VaarTeam" element={<VaarTeam />} />
        <Route exact path="/VaarBlogs" element={<VaarBlogsmain />} />
        <Route exact path="/VaarBlogCommon" element={<VaarBlogCommon />} />
        <Route exact path="/ContactUs" element={<ContactUs />} />
        <Route exact path="/SingleResource" element={<SingleResource />} />
        <Route exact path="/CommonResourceComponent" element={<CommonResourceComponent />} />
        <Route exact path="/SingleResource1" element={<SingleResource1 />} />
        <Route exact path="/SingleResource2" element={<SingleResource2 />} />
        <Route exact path="/SingleResource3" element={<SingleResource3 />} />
        <Route exact path="/SingleResource4" element={<SingleResource4 />} />
        <Route exact path="/BlogUpload" element={<BlogUpload />} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;


