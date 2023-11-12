import { memo } from "react";
import Container from "../Container/Container";
import styles from "./styles.module.css";

const Modal = ({ children, show, close }) => {
  if (!show) {
    return;
  }
  return (
    <>
      <div className={styles.wrapper} onClick={close}></div>
      <Container
        style={{
          width: "400px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: 0,
          zIndex: 2,
        }}
        variant="white"
      >
        {children}
      </Container>
    </>
  );
};

export default memo(Modal);
