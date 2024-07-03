import AppName from "./components/AppName";
import Addtodo from "./components/addtodo";
import Todoitems from "./components/Todoitems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/welcomeMessage";
import { TodoitemsContext } from "./store/todo-items-store";

function App() {
  const [todoitems, setTodoitems] = useState([]);
  const addNewitem = (itemName, itemDueDate) => {
    setTodoitems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const deleteitem = (todoitemName) => {
    const newTodoItems = todoitems.filter((item) => item.name !== todoitemName);
    setTodoitems(newTodoItems);
    console.log(setTodoitems);
  };

  return (
    <TodoitemsContext.Provider
      value={{
        todoitems,
        addNewitem,
        deleteitem,
      }}
    >
      <center className="todocontent">
        <AppName></AppName>
        <Addtodo></Addtodo>
        <WelcomeMessage></WelcomeMessage>
        <Todoitems></Todoitems>
      </center>
    </TodoitemsContext.Provider>
  );
}

export default App;
