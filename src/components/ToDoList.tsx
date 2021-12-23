import React from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { categoryState, todoSelector } from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function ToDoList() {
  const todos = useRecoilValue(todoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) =>
    setCategory(event.currentTarget.value);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          <option value="TO_DO">To do</option>
          <option value="DOING">Doing</option>
          <option value="DONE">Done</option>
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
