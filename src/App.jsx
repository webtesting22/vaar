import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
import AllResources from './Components/AllResources/AllResources';
import SignupSection from './Components/SignUp/SignupSection';
function App() {


  return (
    
      <Router>
        <Navigation/>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/AllResources" element={<AllResources />} />
          <Route exact path="/footer" element={<Footer />} />


        </Routes>
        <SignupSection/>
        <Footer/>
      </Router>
   
  )
}

export default App
