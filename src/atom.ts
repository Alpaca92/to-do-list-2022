import { atom } from 'recoil';

interface Todo {
  text: string;
  category: "DONE" | "DOING" | "TO_DO";
  id: number;
}

export const todoAtom = atom<Todo[]>({
  key: "todo",
  default: [],
});