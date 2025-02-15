import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Croplist.css";

const crops = [
  {
    id: 1,
    title: "Cardamom",
    image: "/IMAGESS/cardamom1.png.jpg",
    description: "Sustainable farming methods for Cardamom.",
    link: "/crop/cardamom", // ✅ Ensure this matches App.js route
  },
  {
    id: 2,
    title: "Rubber",
    image: "/IMAGESS/rubber.png.jpg",
    description: "Eco-friendly Rubber plantation techniques.",
    link: "/crop/rubber", // ✅ Ensure this matches App.js route
  }
];

const CropsList = () => {
  return (
    <div className="crops-container">
      {crops.map((crop) => (
        <div key={crop.id} className="card">
          <div className="card-image">
            <img src={crop.image} alt={crop.title} />
          </div>
          <div className="card-content">
            <h3 className="card-title">{crop.title}</h3>
            <p className="card-description">{crop.description}</p>
            <Link to={crop.link} className="card-link">Read More</Link> {/* ✅ Ensure Link is used */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CropsList;
