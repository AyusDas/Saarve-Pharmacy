import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Login from './pages/login'
import Signup from "./pages/signup"
import OTPVerify from "./pages/otpVerify"
import Home from "./pages/Home"
import Appointments from "./pages/Appointments"
import Patients from "./pages/patients"
import Transactions from "./pages/transactions"
import Details from "./pages/details"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login}/>
        <Route path="/Signup" Component={Signup}/>
        <Route path="/verify" Component={OTPVerify}/>
        <Route path="/home" Component={Home}/>
        <Route path="/appointments" Component={Appointments}/>
        <Route path="/patients" Component={Patients}/>
        <Route path="/transactions" Component={Transactions}/>
        <Route path="/transactions/:id" Component={Details}/>
      </Routes>
    </Router>
  )
}

export default App
