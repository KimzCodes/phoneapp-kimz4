import { memo } from "react";
import UserInfo from "../UserInfo/UserInfo";

const UserList = ({ users, deleteHandler, search, selectUserHandler }) => {
  console.log(users);
  const usersList = users
    .filter((user) => user.name.includes(search))
    .map((user) => (
      <UserInfo
        key={user.id}
        deleteHandler={deleteHandler}
        selectUserHandler={selectUserHandler}
        {...user}
      />
    ));
  return <div>{usersList}</div>;
};

export default memo(UserList);
