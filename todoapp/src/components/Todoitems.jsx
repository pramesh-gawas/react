import { useContext } from "react";
import { TodoitemsContext } from "../store/todo-items-store";

import Todoitem from "./Todoitem";
import styles from "./Todoitems.module.css";

const Todoitems = () => {
  const { todoitems, deleteitem } = useContext(TodoitemsContext);
  return (
    <div className={styles.itemsCcontainer}>
      {todoitems.map((item) => (
        <Todoitem
          key={item.name}
          tododate={item.duedate}
          todoname={item.name}
          onDeleteClick={deleteitem}
        ></Todoitem>
      ))}
    </div>
  );
};

export default Todoitems;
