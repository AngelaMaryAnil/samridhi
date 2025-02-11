import React from "react";
import "./Card.css"; // Include the CSS file for styling

const Card = ({ image, title, description, link }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <a href={link} className="card-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
