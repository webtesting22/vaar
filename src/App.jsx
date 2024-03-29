import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import AllResources from './Components/AllResources/AllResources';
import SignupSection from './Components/SignUp/SignupSection';
import AboutUs from './Components/AboutUs/AboutUs';
import VaarTeam from './Components/VaarTeam/VaarTeam';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AllResources" element={<AllResources />} />
        <Route path="/VaarTeam" element={<VaarTeam />} />
      </Routes>
      <SignupSection />
      <Footer />
    </Router>
  );
}

export default App;
