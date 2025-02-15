import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Card.css";

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <Link to={link} className="card-link">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
