import UserInfo from "../UserInfo/UserInfo";

const UserList = ({ users, deleteHandler, search }) => {
  const usersList = users
    .filter((user) => user.name.includes(search))
    .map((user) => (
      <UserInfo key={user.id} deleteHandler={deleteHandler} {...user} />
    ));
  return <div>{usersList}</div>;
};

export default UserList;
