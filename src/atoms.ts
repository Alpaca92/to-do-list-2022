import { atom, selector } from "recoil";

export interface ITodo {
  text: string;
  category: "DONE" | "DOING" | "TO_DO";
  id: number;
}

export const categoryState = atom({
  key: "category",
  default: "TO_DO",
});

export const todoState = atom<ITodo[]>({
  key: "todo",
  default: [],
});

export const todoSelector = selector({
  key: "todoSelector",
  get: ({ get }) => {
    const todos = get(todoState);
    const category = get(categoryState);

    return todos.filter((todo) => todo.category === category);
  },
});
