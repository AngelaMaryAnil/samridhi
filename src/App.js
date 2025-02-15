import "./App.css"; 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// Import Components
import Navbar from "./Components/Navbar/Navbar";
import Mainpage from "./Components/Navbar/Mainpage";
import RegisterForm from "./Components/Registerform/RegisterForm";
import LoginForm from "./Components/Loginform/LoginForm";
import About from "./Components/About/About";
import ContactForm from "./Components/ContactForm/ContactForm";
import Croplist from "./Components/Croplist/Croplist"; // Ensure correct path
import Cardamom from "./Components/Crop/Cardamom"; // Ensure correct path
{/*import Rubber from "./Components/Crops/Rubber"; // Ensure correct path*/}

// Import Global Styles
{/*import "./App.css"; */}// Global styles should be at the bottom of imports

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/crops" element={<Croplist />} />
        <Route path="/crop/cardamom" element={<Cardamom />} />
       {/*} <Route path="/crop/rubber" element={<Rubber />} />*/}
      </Routes>
    </Router>
  );
}

export default App;
