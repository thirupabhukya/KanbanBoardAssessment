import React from "react";
import Card from "./Card";

function Column({ title, cards, priorityColor }) {
  return (
    <div className="kanban-board-column">
      <h2>{title}</h2>
      {cards.map((card) => (
        <Card key={card.id} card={card} priorityColor={priorityColor} />
      ))}
    </div>
  );
}

export default Column;
