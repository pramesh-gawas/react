import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { TodoitemsContext } from "../store/todo-items-store";

function Addtodo() {
  const { addNewitem } = useContext(TodoitemsContext);
  const [todoName, setTodoName] = useState();
  const [dueDate, setDuedate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDuedate(event.target.value);
  };

  const handleAddButoonClicked = (event) => {
    addNewitem(todoName, dueDate);
    setDuedate("");
    setTodoName("");
    event.preventDefault();
  };
  return (
    <div className="container">
      <form className="row kg-row" onSubmit={handleAddButoonClicked}>
        <div className="col-6">
          <input type="text" placeholder="Enter TO DO  here" />
        </div>
        <div className="col-3" ref={handleNameChange}>
          <input type="date" />
        </div>
        <div className="col-3" ref={handleDateChange}>
          <button type="submit" className="btn btn-success  kg-button">
            <IoMdAdd />
          </button>{" "}
        </div>
      </form>
    </div>
  );
}

export default Addtodo;
