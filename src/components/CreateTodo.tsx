import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
  customCategory?: string;
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ customCategory, todo }: IForm) => {
    setValue("todo", "");

    if (todo.trim()) {
      if (!customCategory) {
        setTodos((oldTodos) => {
          const newTodos = [
            { text: todo, category, id: Date.now() },
            ...oldTodos,
          ];

          localStorage.setItem("todos", JSON.stringify(newTodos));

          return newTodos;
        });
      } else {
        setValue("customCategory", "");
        setTodos((oldTodos) => {
          const newTodos = [
            { text: todo, category: customCategory, id: Date.now() },
            ...oldTodos,
          ];

          localStorage.setItem("todos", JSON.stringify(newTodos));

          return newTodos;
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("customCategory")}
        type="text"
        placeholder="write a custom category"
      />
      <input {...register("todo")} type="text" placeholder="write a todo" />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;
