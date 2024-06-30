import Header from "./Header";
import List from "./List";
import Input from "./Input";
import React from "react";

const Todo = (props) => {
    var [list, setList] = React.useState(['Jog around the park 3x', '10 minutes meditation', 'Read for 1 hour', 'Pick up groceries', 'Complete Todo App on Frontend Mentor'])
    return (
        <div className="todo">
            <Header 
            mood={props.mood}
            setMood={props.setMood}
            />

            <Input 
            list={list}
            setList={setList}
            mood={props.mood}
            setMood={props.setMood}
            />

            <List 
            list={list}
            mood={props.mood}
            setMood={props.setMood}
            />
        </div>
    )
}
export default Todo