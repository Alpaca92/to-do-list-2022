import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { todoAtom } from "../atoms";

interface IForm {
  todo: string;
}

function CreateTodo() {
  const setTodos = useSetRecoilState(todoAtom);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ todo }: IForm) => {
    setValue("todo", "");
    setTodos((oldTodos) => [
      { text: todo, category: "TO_DO", id: Date.now() },
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
