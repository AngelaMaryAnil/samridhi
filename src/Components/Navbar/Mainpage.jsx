import React from "react";
import Slider from "../Slider/Slider";
import Card from "../Card/Card"; // Import the Card component
import './Navbar.css';

const cardsData = [
  {
    image: "/IMAGESS/rubber1.png.jpg",
    title: "RUBBER",
    description: "The Crop that gives Back."
  },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
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
