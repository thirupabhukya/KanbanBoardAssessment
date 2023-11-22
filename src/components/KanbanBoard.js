import React, { useState, useEffect } from "react";
import Column from "./components/Column";

function KanbanBoard({ displayState }) {
  const columns = [
    {
      id: 1,
      title: "To Do",
      status: "todo",
    },
    {
      id: 2,
      title: "In Progress",
      status: "in_progress",
    },
    {
      id: 3,
      title: "Done",
      status: "done",
    },
  ];

  const [cards, setCards] = useState([]);
  const [groupedCards, setGroupedCards] = useState({});

  async function fetchCards() {
    const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
    const data = await response.json();
    setCards(data);
  }

  React.useEffect(() => {
    fetchCards();
  }, []);

  useEffect(() => {
    if (displayState === "groupingByStatus") {
      setGroupedCards(groupCardsByStatus());
    } else if (displayState === "groupingByUser") {
      setGroupedCards(groupCardsByUser());
    } else if (displayState === "groupingByPriority") {
      setGroupedCards(groupCardsByPriority());
    }
  }, [displayState, cards]);

  function groupCardsByStatus() {
    const groupedCards = {};
    for (const card of cards) {
      if (!groupedCards[card.status]) {
        groupedCards[card.status] = [];
      }
      groupedCards[card.status].push(card);
    }
    return groupedCards;
  }

  function groupCardsByUser() {
    const groupedCards = {};
    for (const card of cards) {
      if (!groupedCards[card.assignedTo]) {
        groupedCards[card.assignedTo] = [];
      }
      groupedCards[card.assignedTo].push(card);
    }
    return groupedCards;
  }

  function groupCardsByPriority() {
    const groupedCards = {};
    for (const card of cards) {
      const priorityLevel = card.priority;
      let priorityColor = "no-priority";
      switch (priorityLevel) {
        case 4:
          priorityColor = "urgent";
          break;
        case 3:
          priorityColor = "high";
          break;
        case 2:
          priorityColor = "medium";
          break;
        case 1:
          priorityColor = "low";
          break;
      }

      if (!groupedCards[priorityColor]) {
        groupedCards[priorityColor] = [];
      }
      groupedCards[priorityColor].push(card);
    }
    return groupedCards;
  }

  return (
    <div className="kanban-board">
      {Object.keys(groupedCards).map((groupName) => (
        <Column key={groupName} title={groupName} cards={groupedCards[groupName]} priorityColor={groupName} />
      ))}
    </div>
  );
}

export default KanbanBoard;
