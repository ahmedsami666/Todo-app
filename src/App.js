import React from "react";
import CopyRights from "./CopyRights"
import Todo from "./Todo";

function App() {
  var [mood, setMood] = React.useState(false)
  var [list, setList] = React.useState(['Jog around the park 3x', '10 minutes meditation', 'Read for 1 hour', 'Pick up groceries', 'Complete Todo App on Frontend Mentor'])
  var [checked, setChecked] = React.useState({})
  var [leftItem, setLeftItems] = React.useState(list.length)
  var [active, setActive] = React.useState({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true
  })
  var [view, setView] = React.useState('all')
  return (
    <div className={mood ? 'main main-dark' : 'main'}>
      <Todo 
      mood={mood} 
      setMood={setMood} 
      list={list} 
      setList={setList}
      checked={checked}
      setChecked={setChecked}
      leftItem={leftItem}
      setLeftItems={setLeftItems}
      active={active}
      setActive={setActive}
      view={view}
      setView={setView}
      />
      <CopyRights />
    </div>
  );
}

export default App;
