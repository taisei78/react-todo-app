import { useState } from "react";

export default function EditForm({
  onClickCancel,
  defaultValue,
  handleOnEdit,
}) {
  const [todo, setTodo] = useState(defaultValue);

  return (
    <div>
      <button onClick={onClickCancel}>キャンセル</button>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={() => handleOnEdit(todo)}>実行</button>
    </div>
  );
}