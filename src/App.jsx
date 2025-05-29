import { useState } from "react";

import "./App.css";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import RandomQuote from "./Quotes";
import CurrentTime from "./Time";
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

export default App;
