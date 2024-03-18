
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './Layout/Nav/Nav';
import Footer from './Layout/Footer/Footer';
import ScrollToTopButton from './components/Scroll';
import Carousel from './components/Carusel/Carusel';
// import CustomNavbar from './components/Navbar2';

function App() {
  return (
    <Router>
      <div className="MainContainer">
        <Navbar />
        {/* <CustomNavbar/> */}
        <Carousel/>
        <Routes>
          <Route path="/" element={<Home />} />
         
        </Routes>
      </div>
      <ScrollToTopButton/>
      <Footer/>
    </Router>
  );
}

export default App;
