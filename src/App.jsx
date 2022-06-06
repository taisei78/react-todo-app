import React, { useState } from "react";
import "./styles.css"
import { InputTodo } from "./components/InputTodo";
import { TodoList } from "./components/TodoList";
import  EditForm  from "./components/EditForm";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingTodoIndex, setEditingTodoIndex] = useState();

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

  const onClickEdit = () => {
    setIsEditing(true);
  }

  const handleOnEdit =() => {
    setIsEditing(false);
  }
  return (
    <>
    <div className="container">
      {/* isEditingがtrueになるので右辺を返す。 */}
      {!isEditing && <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>}

      {!isEditing && <TodoList todoList={todoList} onClickEdit={onClickEdit} onClickDelete={onClickDelete} />} 
      
      {isEditing && (
        <EditForm defaultValue={todoList[editingTodoIndex]} 
        handleOnEdit={handleOnEdit}
        onClickCancel={() => setIsEditing(false)}
        />
      )}
    </div>
    </>
  )
}


