import React, { useState } from "react";
import "./styles.css"
import { Filter } from "./components/Filter";
import { EditForm } from "./components/EditForm";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [isEditing, setEditing] = useState(false);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todoList, todoText];
    setTodoList(newTodos);
    setTodoText("");
  };
  

  const onClickDelete = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  const onClickEdit = (index) => {
  }

  
  return (
    <>
    <div className="container">

      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>
      
      <EditForm />

      <TodoList todoList={todoList} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />
        
    </div>
    </>
  )
}


