import styles from "./styles.module.css";

const Button = ({ type = "submit", children, onClick }) => {
  return (
    <div className={styles.button}>
      <input type={type} value={children} onClick={onClick} />
    </div>
  );
};

export default Button;
