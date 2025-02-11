import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from './Components/Loginform/LoginForm';
import RegisterForm from './Components/Registerform/RegisterForm';
import Navbar from './Components/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import Card from './Components/Card/Card'; // Import the Card component
import './App.css'; // Add any necessary global styles

function App() {
  // Card data to be displayed
  const cardsData = [
    {
      image: "/IMAGESS/rubber1.png.jpg",
      title: 'RUBBER',
      description: 'The Crop that gives Back.',
    },
    {
      image: "/IMAGESS/nutmeg3.png.jpg",
      title: 'NUTMEG',
      description: 'The Spice of Warmth.',
    },
    {
      image: "/IMAGESS/avacado2.png.jpg",
      title: 'AVOCADO',
      description: 'Go Green with Avocados.',
    },
    {
      image: "/IMAGESS/cardamom1.png.jpg",
      title: 'CARDAMOM',
      description: 'The Flavor Enhancer.',
    },
  ];

  return (
    <Router>
      <Navbar />
      <Slider />
      <div className="card-container">
        {/* Render the cards below the Slider */}
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
