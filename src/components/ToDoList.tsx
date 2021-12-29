import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import {
  categoryState,
  ITodo,
  todoCategoriesSelector,
  todoSelector,
  todoState,
} from "../atoms";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function ToDoList() {
  const todos = useRecoilValue(todoSelector);
  const setTodos = useSetRecoilState(todoState);
  const todoCategories = useRecoilValue(todoCategoriesSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos") as any) || []);
  }, []);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) =>
    setCategory(event.currentTarget.value as ITodo["category"]);

  return (
    <div>
      <h1>Todo List</h1>
      <hr />
      <form>
        <select value={category} onInput={onInput}>
          {todoCategories.map((key, idx) => (
            <option key={idx} value={key}>
              {key}
            </option>
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
