const filterOptions = [
  { id: 1, value: "incomplete", label: "未着手" },
  { id: 2, value: "complete", label: "着手" },
  { id: 3, value: "done", label: "完了" },
];
export const Filter = () => {
  return (
    <>
      {filterOptions.map(({ value, label, id }) => (
        <option key={id} value={value}>
          {label}
        </option>
      ))}
    </>
  );
};
