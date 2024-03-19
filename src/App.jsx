import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navigation from './Components/Navigation/Navigation';
import Home from './Components/Home/Home';
function App() {


  return (
    
      <Router>
        <Navigation/>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/footer" element={<Footer />} />
          <Route exact path="/footer" element={<Footer />} />


        </Routes>
      </Router>
   
  )
}

export default App
