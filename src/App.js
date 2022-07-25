import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Login from './Components/Pages/Login/Login';
import Navbar from './Components/Pages/Shared/Navbar';
import Footer from './Components/Pages/Shared/Footer';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
