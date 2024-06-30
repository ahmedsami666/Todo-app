import React from "react";
import CopyRights from "./CopyRights"
import Todo from "./Todo";

function App() {
  var [mood, setMood] = React.useState(true)
  return (
    <div className={mood ? 'main main-dark' : 'main'}>
      <Todo mood={mood} setMood={setMood}/>
      <CopyRights />
    </div>
  );
}

export default App;
