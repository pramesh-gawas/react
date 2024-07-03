import styles from "./display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      type="text"
      name="display"
      value={displayValue}
      className={styles.display}
      readOnly
    />
  );
};

export default Display;
