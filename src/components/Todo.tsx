import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { ITodo, todoCategoriesSelector, todoState } from "../atoms";

function Todo({ text, category, id }: ITodo) {
  const setTodos = useSetRecoilState(todoState);
  const todoCategories = useRecoilValue(todoCategoriesSelector);
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
    setTodos((oldTodos) => oldTodos.filter((todo) => todo.id !== id));
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
      {todoCategories.map(
        (key, idx) =>
          category !== key && (
            <button
              key={idx}
              onClick={() => onChangeCategory(key as ITodo["category"])}
            >
              {key}
            </button>
          )
      )}
      <button onClick={() => onDeleteTodo(text)}>DELETE</button>
    </li>
  );
}

export default Todo;
