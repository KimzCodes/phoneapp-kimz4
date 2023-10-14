import styles from "./styles.module.css";

const { userInfo, delBtn } = styles;

const UserInfo = ({ id, name, age, location, phone, deleteHandler }) => {
  return (
    <div className={userInfo}>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Location: {location}</li>
        <li>Phone: {phone}</li>
      </ul>
      <div className={delBtn} onClick={() => deleteHandler(id)}>
        Delete
      </div>
    </div>
  );
};

export default UserInfo;
