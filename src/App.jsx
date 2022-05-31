import React, { useState } from "react";
import "./styles.css"

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [onClickEdit, setOnClickEdit] = useState(false);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todoList, todoText];
    setTodoList(newTodos);
    setTodoText("");
  };
  const taskChange = () => {
    alert("");
    todoText = "";
  }

  const onClickDelete = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  
  return (
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

        <div className="todo-list">
          <p className="title">Todo  List</p>
          <ul>
            {todoList.map((todo, index) => {
              return (
                <div key={todo} className="list-row">
                  <li>{todo}</li>
                  <select name=''>
                    <option>着手</option>
                    <option>未着手</option>
                    <option>完了</option>
                  </select>
                  <button onClick={() => {setOnClickEdit(!onClickEdit)}}>編集</button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                {onClickEdit? 
                  <form onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    value={todoText}
                    placeholder="編集を入力"
                    onChange={(e) => setTodoText(todo.index, e.target.value)}
                  />
                  <button
                    type="submit" 
                    onClick={taskChange}
                    onSubmit={(e) => e.preventDefault()}
                    >実行
                  </button>
                </form>
                : null}
                </div>
              );
            })}
          </ul>
        </div>
    </div>
  )
}


