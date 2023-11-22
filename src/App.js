import React, { useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import Sidebar from "./components/Sidebar";

function App() {
  const [displayState, setDisplayState] = useState("groupingByStatus");

  function handleDisplayButtonClick(groupingOption) {
    setDisplayState(groupingOption);
  }

  return (
    <div className="kanban-board">
      <Sidebar
        displayState={displayState}
        handleDisplayButtonClick={handleDisplayButtonClick}
      />
      <KanbanBoard displayState={displayState} />
    </div>
  );
}

export default App;
