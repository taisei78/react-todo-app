import React from 'react';

export  const InputTodo = (props) => {
const {todoText, onChange, onClick} = props;
  return (
    <>
      <h1>Todo App</h1>
        <div className="input-area">
          <input
            placeholder="TODOを入力"
            value={todoText}
            onChange={onChange}
          />
          <button onClick={onClick}>追加</button>
        </div>
    </>
  )
}