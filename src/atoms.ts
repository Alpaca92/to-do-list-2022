import { atom, selector } from "recoil";

export enum Categories {
  "TODO" = "TODO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}
export interface ITodo {
  text: string;
  category: Categories | string;
  id: number;
}

export const categoryState = atom<Categories | string>({
  key: "category",
  default: Categories.TODO,
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

export const todoCategoriesSelector = selector({
  key: "todoCategoriesSelector",
  get: ({ get }) => {
    const todos = get(todoState);

    return [
      ...(new Set([
        Categories.TODO,
        Categories.DOING,
        Categories.DONE,
        ...todos.map((todo) => todo.category),
      ]) as any),
    ];
  },
});
