import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, todoState } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setValue("todo", "");
    setTodos((oldTodos) => [
      { text: todo, category, id: Date.now() },
      ...oldTodos,
    ]);
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input {...register("todo")} type="text" placeholder="write a todo" />
      <button>Add</button>
    </form>
  );
}

export default CreateTodo;
