import styles from "./styles.module.css";
const { container } = styles;

const Container = ({ children, style, variant, className }) => {
  return (
    <div
      className={`${styles[variant] ? styles[variant] : ""} ${
        className ? `${className} ${container}` : container
      }`}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
