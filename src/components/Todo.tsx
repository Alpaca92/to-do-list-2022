import { useSetRecoilState } from "recoil";
import { ITodo, todoAtom } from "../atoms";

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoAtom);
  const onClick = (name: ITodo["category"]) => {
    setTodos((oldTodos) => {
      const targetIdx = oldTodos.findIndex((todo) => todo.id === id);

      return [
        ...oldTodos.slice(0, targetIdx),
        { text, category: name, id },
        ...oldTodos.slice(targetIdx + 1),
      ];
    });
  };

  /*
  button에 name attribute를 설정했다면

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget : { name } } = event;
    ...
  }
  
  대신 여기서의 name은 그냥 string일 뿐 ts가 무엇인지 모른다
  */

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>Todo</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default Todo;
