import { useEffect, useState } from "react";

import "./App.css";

// 1. Todo 생성 / 조회 / 수정 / 삭제 (**CRUD**) 기능을 구현하세요.
// 2. **현재 시간 표시, 타이머, 스톱워치** 중 하나 이상의 기능을 구현하세요.
// 3. **랜덤 명언**을 표시할 수 있는 컴포넌트를 만드세요.
// 4. **useState**, **useEffect**, **useRef**를 각각 한 번 이상 사용하세요.
// 5. 자유롭게 적용해보고 싶은 CSS를 작성해보세요.

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, content: "코딩하기" },
    { id: 2, content: "코딩하기" },
  ]);

  return (
    <>
      <RandomQuote />
      <CurrentTime />
      <header>안녕 나는 todo list야 잘 부탁해</header>
      <TodoList todos={todos} setTodos={setTodos} />
      <TodoForm
        setTodos={setTodos}
        setInputText={setInputText}
        inputText={inputText}
      />
    </>
  );
}

function TodoList({ todos, setTodos }) {
  return (
    <ol className="todo-lists">
      {/* todos 배열 안에 객체를 각각 map을 돌려서 li로 된 각 item을 생성해줌 */}
      {todos.map((todo) => (
        //key값으로 todo의 id를 props로 보내줌
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ol>
  );
}

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

function CurrentTime() {
  //new Date함수이용해 현재시간을 기본값으로 지정해줌
  const [time, setTime] = useState(new Date());
  //useEffect를 이용해 처음에 마운트될때, 언마운트될때를 설정해줌.
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 언마운트시 cleanUp해줘서 타이머 누적을 막아줌.
    return () => clearInterval(timer);
  }, []);
  return <div>{time.toLocaleDateString()}</div>;
}

const quotes = [
  "나락도 락이다.",
  "매년 늘어나는 것은 나이뿐만이 아니다, 뱃살도 다.",
  "징징거리지마라, 나도 힘들다",
  "시작은 시작일 뿐이다.",
  "인생의 지름길 따윈 없다.",
  "하늘은 스스로 책임지는 자를 책임진다.",
];

function RandomQuote() {
  const [quote, SetQuote] = useState("");

  useEffect(() => {
    const randomNum = Math.floor(Math.random() * quotes.length);
    //SetQuote로 quotes
    SetQuote(quotes[randomNum]);
  }, []);
  return <div>{quote}</div>;
}

export default App;
