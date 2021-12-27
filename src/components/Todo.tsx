import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, ITodo, todoState } from "../atoms";

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const onChangeCategory = (name: ITodo["category"]) => {
    setTodos((oldTodos) => {
      const targetIdx = oldTodos.findIndex((todo) => todo.id === id);

      return [
        ...oldTodos.slice(0, targetIdx),
        { text, category: name, id },
        ...oldTodos.slice(targetIdx + 1),
      ];
    });
  };
  const onDeleteTodo = (text: ITodo["text"]) => {
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.text !== text));
  };

  /*
  button에 name attribute를 설정했다면

  const onChangeCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget : { name } } = event;
    ...
  }
  
  대신 여기서의 name은 그냥 string일 뿐 ts가 무엇인지 모른다
  */

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button onClick={() => onChangeCategory(Categories.TO_DO)}>
          Doing
        </button>
      )}
      {category !== Categories.DOING && (
        <button onClick={() => onChangeCategory(Categories.DOING)}>Todo</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onChangeCategory(Categories.DONE)}>Done</button>
      )}
      <button onClick={() => onDeleteTodo(text)}>delete</button>
    </li>
  );
}

export default Todo;
