const { deleteitem } = useContext(TodoitemsContext);
import { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { TodoitemsContext } from "../store/todo-items-store";

function Todoitem({ tododate, todoname }) {
  return (
    <div className="container ">
      <div className="row kg-row ">
        <div className="col-6">{todoname}</div>
        <div className="col-3">{tododate} </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => {
              OnDeleteClick(deleteitem);
            }}
          >
            <MdOutlineDeleteOutline />
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
