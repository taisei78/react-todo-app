import { useState } from "react";

export default function EditForm({
  onClickCancel,
  defaultValue,
  handleOnEdit,
}) {
  const [todo, setTodo] = useState(defaultValue);

  return (
    <div className='edit-area'>
      <h2 className='title'>
        Todoを編集
      </h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => handleOnEdit(todo)}>実行</button>
      <button onClick={onClickCancel}>キャンセル</button>
    </div>
  );
}