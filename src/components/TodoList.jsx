import React from 'react';
import { Filter } from "./Filter";

export  const TodoList = (props) => {
  const {todoList, onClickEdit, onClickDelete} = props;
  return (
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
  )
}