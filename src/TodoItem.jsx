import { useState } from "react";

function TodoItem({ todo, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.content);

  return (
    <li>
      {isEditing ? (
        <>
          {/* true일 경우에 여기 구문실행 */}
          <input
            //input내부에 기본값으로 이전에 있던 content를 넣어주고
            value={editText}
            //변화가 일어나면 그 value를 setEditText에 넣어 content변경해줌
            onChange={(e) => setEditText(e.target.value)}
          />
          <button
            onClick={() => {
              //완료버튼 클릭시 todos배열 받아와서 각 객체 id랑 선택한거랑 같으면
              //기본 배열에다가 content만 새로 덮어서 씌어줌.
              setTodos((prev) =>
                prev.map((el) =>
                  el.id === todo.id ? { ...el, content: editText } : el
                )
              );
              setIsEditing(false);
            }}
          >
            완료
          </button>
        </>
      ) : (
        <>
          <span>{todo.content}</span>
          {/* fix버튼 클릭시 setIs가 true로 바뀌어서 리렌더가 일어나고 isEditing이 true로 됨으로
          위에 있는 문이 나오게된다. */}
          <button onClick={() => setIsEditing(true)}>fix</button>
          {/* 삭제버튼 클릭시 setTodos의 배열불러와 각 객체의 id랑 현재 선택한 todo의 id랑 비교해서 같지않은거만
          골라내니깐 내가선택한거빼고 새로운배열을 만들어주는걱 */}
          <button
            onClick={() => {
              setTodos((prev) => prev.filter((el) => el.id !== todo.id));
            }}
          >
            delete
          </button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
