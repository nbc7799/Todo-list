function TodoForm({ inputText, setInputText, setTodos }) {
  return (
    <div className="input-container">
      <input
        type="text"
        value={inputText}
        //input창에 입력하는 값을 inputText로 value에 넣어줌
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        onClick={() => {
          //공백을 입력한경우를 잡기위해 trim사용하고 값이 없을경우 등록못함
          if (!inputText.trim()) return;
          else {
            setTodos((prev) => [
              ...prev,
              { id: Date.now(), content: inputText },
            ]);
            setInputText("");
          }
        }}
      >
        등록
      </button>
    </div>
  );
}

export default TodoForm;
