import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { todoAtom } from "../atom";

interface Form {
  todo: string;
}

function ToDoList() {
  const [todos, setTodos] = useRecoilState(todoAtom);
  const { register, handleSubmit, setValue } = useForm<Form>();
  const handleValid = ({ todo }: Form) => {
    setValue("todo", "");
    setTodos((oldTodos) => [
      { text: todo, category: "TO_DO", id: Date.now() },
      ...oldTodos,
    ]);
  };

  console.log(todos);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input {...register("todo")} type="text" placeholder="write a todo" />
        <button>Add</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
