import React from "react";
import { useState } from "react";
import "./style.css";

const App = () => {
  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <h3>To Do</h3>
      </div>
      <div className="kanban-column">
        <h3>In Progress</h3>
      </div>
      <div className="kanban-column">
        <h3>Done</h3>
      </div>
      <div className="kanban-column">
        <h3>Blocked</h3>
      </div>
    </div>
  );
};

export default App;