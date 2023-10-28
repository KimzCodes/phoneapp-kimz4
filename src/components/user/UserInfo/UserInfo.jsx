import styles from "./styles.module.css";

const { userInfo, delBtn, editBtn, actions } = styles;

const UserInfo = ({
  id,
  name,
  age,
  location,
  phone,
  deleteHandler,
  selectUserHandler,
}) => {
  return (
    <div className={userInfo}>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Location: {location}</li>
        <li>Phone: {phone}</li>
      </ul>
      <div className={actions}>
        <div className={delBtn} onClick={() => deleteHandler(id)}>
          Delete
        </div>
        {/* 
                <div
          className={editBtn}
          onClick={() => selectUserHandler({ id, name, age, location, phone })}
        >

        */}
        <div className={editBtn} onClick={() => selectUserHandler(id)}>
          Edit
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
