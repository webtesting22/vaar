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
function App() {
  return (
    <Router>
      <Navigation />
      
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/AllResources" element={<AllResources />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/VaarTeam" element={<VaarTeam />} />
        <Route exact path="/VaarBlogs" element={ <VaarBlogsmain/> } />
        <Route exact path="/ContactUs" element={ <ContactUs/> } />
        <Route exact path="/SingleResource" element={ <SingleResource/> } />
        <Route exact path="/CommonResourceComponent" element={ <CommonResourceComponent/> } />
        <Route exact path="/SingleResource1" element={ <SingleResource1/> } />
        <Route exact path="/SingleResource2" element={ <SingleResource2/> } />
      </Routes>
      

      <Footer />
    </Router>
  );
}

export default App;
