import React from "react";

function Card({ card, priorityColor }) {
  return (
    <div className={`kanban-board-card ${priorityColor}`}>
      <p>{card.title}</p>
      <p>{card.description}</p>
    </div>
  );
}

export default Card;
