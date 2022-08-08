import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Login from "./Components/Pages/Login/Login";
import Navbar from "./Components/Pages/Shared/Navbar";
import Appointment from "./Components/Pages/Appointment/Appointment";
import SignUp from "./Components/Pages/Login/SignUp";
import RequireAuth from "./Components/Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Pages/Dashboard/Dashboard";
import MyAppointments from "./Components/Pages/Dashboard/MyAppointments";
import MyReview from "./Components/Pages/Dashboard/MyReview";
import MyHistory from "./Components/Pages/Dashboard/MyHistory";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }>
            <Route index element={<MyAppointments></MyAppointments>}></Route>
            <Route path="review" element={<MyReview></MyReview>}></Route>
            <Route path="history" element={<MyHistory></MyHistory>}></Route>
          </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
