import React from "react";
import Slider from "../Slider/Slider";
import Card from "../Card/Card"; // Import the Card component
import './Mainpage.css'; // Import the CSS file

const cardsData = [
  {
    image: "/IMAGESS/rubber1.png.jpg",
    title: "RUBBER",
    description: "The Crop that gives Back."
  },
  // Add other crops like Nutmeg, Avocado, etc.
  {
    image: "/IMAGESS/nutmeg3.png.jpg",
    title: "NUTMEG",
    description: "The Spice of Warmth."
  },
  {
    image: "/IMAGESS/avacado2.png.jpg",
    title: "AVOCADO",
    description: "Go Green with Avocados."
  },
  {
    image: "/IMAGESS/cardamom1.png.jpg",
    title: "CARDAMOM",
    description: "The Flavor Enhancer."
  }
];

const SliderWithCards = () => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Render the Slider component */}
      <Slider />
      
      {/* Card Grid Layout */}
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderWithCards;