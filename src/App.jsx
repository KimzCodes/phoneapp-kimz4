import { useState } from "react";
import { UserForm, UserList } from "./components/user";
import { Container, Modal } from "./components/layout";
import { Button, Input } from "./components/form";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [usersData, setUserData] = useState([
    {
      id: 1,
      name: "kareem",
      age: "34",
      location: "Cairo",
      phone: "123456",
    },
    {
      id: 2,
      name: "ahmed",
      age: "30",
      location: "Dubai",
      phone: "345345345",
    },
  ]);

  const addUser = (newUser) => {
    newUser.id = Math.floor(Math.random() * 100);
    setUserData([...usersData, newUser]);
    modalHandler();
  };

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const deleteHandler = (id) => {
    const filterUser = usersData.filter((el) => el.id !== id);
    setUserData(filterUser);
  };

  return (
    <>
      <Modal show={showModal} close={modalHandler}>
        <UserForm addUser={addUser} />
      </Modal>

      <Container>
        <Button onClick={modalHandler}>Insert User</Button>
        <br />
        <Input
          type="text"
          name="search"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <UserList
          users={usersData}
          deleteHandler={deleteHandler}
          search={search}
        />
      </Container>
    </>
  );
};

export default App;
