import { atom } from "recoil";

interface ToDoState {
  [key: string]: string[];
}

export const toDoState = atom<ToDoState>({
  key: "toDo",
  default: {
    todo: ["포폴준비하기", "스크립트공주"],
    doing: ["c", "d", "e"],
    done: ["f"],
  },
});
