import { useContext } from "react";
import styles from "./welcomeMesssage.module.css";
import { TodoitemsContext } from "../store/todo-items-store";
const WelcomeMessage = () => {
  const { todoitems } = useContext(TodoitemsContext);
  return (
    todoitems.length === 0 && <p className={styles.welcome}>Enjoy Your Day</p>
  );
};

export default WelcomeMessage;
