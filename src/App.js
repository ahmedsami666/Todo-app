import React from "react";
import CopyRights from "./CopyRights"
import Todo from "./Todo";

function App() {
  /*Drag and drop to reorder list */
  return (
    <div className="main">
      <Todo />
      <CopyRights />
    </div>
  );
}

export default App;
