import { useRecoilValue } from "recoil";
import { todoAtom } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function ToDoList() {
  const todos = useRecoilValue(todoAtom);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <CreateTodo />
      <ul>
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
