import TodoItem from "./TodoItem";

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

export default TodoList;
