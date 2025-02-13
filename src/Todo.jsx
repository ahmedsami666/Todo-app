import Header from "./Header";
import List from "./List";
import Input from "./Input";
import React from "react";

const Todo = (props) => {
    return (
        <div className="todo">
            <Header 
            mood={props.mood}
            setMood={props.setMood}
            />

            <Input 
            list={props.list}
            setList={props.setList}
            mood={props.mood}
            setMood={props.setMood}
            leftItem={props.leftItem}
            setLeftItems={props.setLeftItems}
            active={props.active}
            setActive={props.setActive}
            />

            <List 
            list={props.list}
            setList={props.setList}
            mood={props.mood}
            setMood={props.setMood}
            checked={props.checked}
            setChecked={props.setChecked}
            leftItem={props.leftItem}
            setLeftItems={props.setLeftItems}
            active={props.active}
            setActive={props.setActive}
            view={props.view}
            setView={props.setView}
            />
        </div>
    )
}
export default Todo