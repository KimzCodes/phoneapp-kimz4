import UserInfo from "../UserInfo/UserInfo";

const UserList = ({ users, deleteHandler, search, selectUserHandler }) => {
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

export default UserList;
