import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, title, description, details }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>

        {/* Pass all details as state */}
        <Link 
          to={`/details`} 
          state={{ title, description, image, details }} 
          className="card-link"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
