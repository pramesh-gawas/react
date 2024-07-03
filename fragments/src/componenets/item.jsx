import styles from "./item.module.css";

const Item = ({ fooditems, bought, handleBuyButtonCLicked }) => {
  return (
    <li
      className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-text"]}>{fooditems}</span>
      <button
        onClick={handleBuyButtonCLicked}
        className={`${styles.button} btn btn-success`}
      >
        buy
      </button>
    </li>
  );
};
export default Item;
