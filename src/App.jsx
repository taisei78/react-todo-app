import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import EditForm from "./components/EditForm";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [index, setIndex] = useState(0);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...todoList, todoText];
    setTodoList(newTodos);
    setTodoText("");
  };

  // 削除機能
  const onClickDelete = (index) => {
    const newTodos = [...todoList];
    newTodos.splice(index, 1);
    setTodoList(newTodos);
  };

  const onClickEdit = (index) => {
    setIsEditing(true);
    setIndex(index);
  };

  const handleOnEdit = (todo) => {
    // todoはeditFormで入力した文字です。
    //editFromから入力された値をこちらの関数に持ってきて、setTodoListに入れます。
    //todoListの変更ですが、Reactのstateは直接変更ができないので一旦内容をコピーします（シャローコピーをしています）
    //コピーしたtodoListにtodoを入れて、最後にすべてのtodoをsetTodoListにセットします
    let tds = [...todoList];
    tds[index] = todo;
    setTodoList(tds);
    setIsEditing(false);
  };
  
  return (
    <>
      <div className="container">
        {!isEditing && (
          <InputTodo
            todoText={todoText}
            onChange={onChangeTodoText}
            onClick={onClickAdd}
          />
        )}

        {!isEditing && (
          <TodoList
            todoList={todoList}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
            setTodoList={setTodoList}
          />
        )}

        {isEditing && (
          <EditForm
            defaultValue={todoList[index]}
            todoList={todoList}
            handleOnEdit={handleOnEdit}
            onClickCancel={() => setIsEditing(false)}
          />
        )}
      </div>
    </>
  );
}