import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  category: "DONE" | "DOING" | "TO_DO";
  id: number;
}

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);

    return [
      todos.filter((todo) => todo.category === "TO_DO"),
      todos.filter((todo) => todo.category === "DOING"),
      todos.filter((todo) => todo.category === "DONE"),
    ];
  },
});
