import React from 'react';
import { BrowserRouter as Router, Routes, Route,RouterProvider } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import AllResources from './Components/AllResources/AllResources';
import SignupSection from './Components/SignUp/SignupSection';
import AboutUs from './Components/AboutUs/AboutUs';
import VaarTeam from './Components/VaarTeam/VaarTeam';
import ScreenLayout from './ScreenLayout/ScreenLayout';
import route from './routes/route';

function App() {
  return (
     <RouterProvider router={route} />
  );
}

export default App;
