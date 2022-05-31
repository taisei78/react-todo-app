import React from 'react';

export const EditForm = ({value, }) => {
  return (
    <>
      <h1>EditForm</h1>
      <div>
        <input
        type="text"
        placeholder="編集する"
        value={value}
        />
        <button
        
        >
          キャンセル
        </button>
        <button>実行</button>
      </div>

    </>
  )
}