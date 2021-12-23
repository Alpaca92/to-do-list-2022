import { atom } from 'recoil';

export interface ITodo {
  text: string;
  category: "DONE" | "DOING" | "TO_DO";
  id: number;
}

export const todoAtom = atom<ITodo[]>({
  key: "todo",
  default: [],
});