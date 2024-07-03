import { createContext } from "react";
export const TodoitemsContext = createContext({
  todoitems: [],
  addNewitem: () => {},
  deleteitem: () => {},
});
