import Header from "./Header";
import List from "./List";
import Input from "./Input";
import React from "react";

const Todo = () => {
    var [list, setList] = React.useState(['Jog around the park 3x', '10 minutes meditation', 'Read for 1 hour', 'Pick up groceries', 'Complete Todo App on Frontend Mentor'])
    return (
        <div className="todo">
            <Header />

            <Input 
            list={list}
            setList={setList}
            />

            <List 
            list={list}
            />
        </div>
    )
}
export default Todo