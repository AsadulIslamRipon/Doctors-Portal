import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Login from './Components/Pages/Login/Login';
import Navbar from './Components/Pages/Shared/Navbar';
import Appointment from './Components/Pages/Appointment/Appointment';

function App() {
  return (
    <div className='max-w-screen-xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
