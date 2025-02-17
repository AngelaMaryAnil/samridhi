import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Mainpage from "./Components/Navbar/Mainpage";
import RegisterForm from "./Components/Registerform/RegisterForm";
import LoginForm from "./Components/Loginform/LoginForm";
import About from "./Components/About/About";
import ContactForm from "./Components/ContactForm/ContactForm";
import Card from "./Components/Card/Card";
import DetailsPage from "./Components/DetailsPage/DetailsPage";

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

        {/* Farming Information Cards */}
        <Route 
          path="/rubber-card" 
          element={
            <Card 
              image="https://via.placeholder.com/300"
              title="RUBBER"
              description="Learn the best practices for rubber farming."
              details=""
            />
          } 
        />
        <Route 
          path="/nutmeg-card" 
          element={
            <Card 
            image="C:\Users\91974\OneDrive\Desktop\Samridhi\src\assets\nutmeg3.png.jpg"
              /*image="https://via.placeholder.com/300"*/
              title="NUTMEG"
              description="Explore nutmeg cultivation techniques."
              details=""
            />
          } 
        />

        {/* Details Page */}
        <Route path="/details" element={<DetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
