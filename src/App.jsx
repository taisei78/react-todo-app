import React, { useState } from "react";
import "./styles.css"
import { Filter } from "./Filter";
import { EditForm } from "./EditForm";

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
      <h1>Todo App</h1>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
        </div>
        <EditForm />
        <div className="todo-list">
          <p className="title">Todo  List</p>
          <ul>
            {todoList.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}
                  <select name=''>
                    <Filter />
                  </select>
                  <button onClick={() => onClickEdit(index)}>編集</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
    </div>
    </>
  )
}


