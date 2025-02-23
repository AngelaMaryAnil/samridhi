import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Navbar from './Components/Navbar/Navbar';
import LoginForm from './Components/Loginform/LoginForm';
import Home from './Components/Navbar/Mainpage';
import About from './Components/About/About';
import Contact from './Components/ContactForm/ContactForm';
import Profile from './Components/Profile/Profile';
import RegisterForm from './Components/Registerform/RegisterForm';
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import Shop from "./Components/Shop/Shopping";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;