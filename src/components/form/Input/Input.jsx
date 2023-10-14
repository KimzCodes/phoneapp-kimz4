import styles from "./styles.module.css";

const Input = ({ type, name, value, onChange, label, placeholder }) => {
  return (
    <div className={styles.input}>
      {label ? <label htmlFor={name}>{label?.toUpperCase()}</label> : ""}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
