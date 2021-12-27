import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Categories, categoryState, todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function ToDoList() {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) =>
    setCategory(event.currentTarget.value as Categories);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          {Object.keys(Categories).map((key) => (
            <option value={key}>{key}</option>
          ))}
        </select>
      </form>
      <CreateTodo />
      <ul>
        {todos?.map((todo) => (
          <Todo {...todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
