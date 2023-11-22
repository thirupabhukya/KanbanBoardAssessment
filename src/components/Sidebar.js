import React from "react";

function Sidebar({ displayState, handleDisplayButtonClick }) {
  return (
    <div className="kanban-board-sidebar">
      <h2>Display Options</h2>
      <button
        className={`kanban-board-sidebar-button ${displayState === "groupingByStatus" ? "active" : ""}`}
        onClick={() => handleDisplayButtonClick("groupingByStatus")}
      >
        Group by Status
      </button>
      <button
        className={`kanban-board-sidebar-button ${displayState === "groupingByUser" ? "active" : ""}`}
        onClick={() => handleDisplayButtonClick("groupingByUser")}
      >
        Group by User
      </button>
      <button
        className={`kanban-board-sidebar-button ${displayState === "groupingByPriority" ? "active" : ""}`}
        onClick={() => handleDisplayButtonClick("groupingByPriority")}
      >
        Group by Priority
      </button>
    </div>
  );
}

export default Sidebar;
