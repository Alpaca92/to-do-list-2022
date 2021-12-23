import { useRecoilValue } from "recoil";
import { todoSelector, todoState } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function ToDoList() {
  const [todo, doing, done] = useRecoilValue(todoSelector);
  const a = useRecoilValue(todoState);

  console.log(a.filter((el) => el.category === "DOING"));

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <CreateTodo />
      <h2>To do</h2>
      <ul>
        {todo.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
      <hr />
      <h2>Doing</h2>
      <ul>
        {doing.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
      <hr />
      <h2>Done</h2>
      <ul>
        {done.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
