import React from "react";
import { useParams } from "react-router-dom";

const CardDetail = ({ cards }) => {
  const { id } = useParams();
  const card = cards.find((item) => item.id === parseInt(id));

  if (!card) {
    return <h2>Card not found!</h2>;
  }

  return (
    <div className="card-detail">
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} />
      <p>{card.description}</p>
      <p>{card.fullContent}</p>
    </div>
  );
};

export default CardDetail;
