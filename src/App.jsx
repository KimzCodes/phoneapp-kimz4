import { useState, useRef, useEffect } from "react";
//js library
import axios from "axios";

// components
import { UserForm, UserList } from "./components/user";
import { Container, Modal } from "./components/layout";
import { Button, Input } from "./components/form";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [usersData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const selectedUser = useRef(null);

  //1-one time after main init -> empty dependance
  // useEffect(() => {
  //   console.log("use effect");
  // }, []);

  //2-one time on init and also after specific state or props has been updated
  // useEffect(() => {
  //   console.log("use effect");
  // }, [showModal]);

  //3- one time on init and after every updates happens (state or props)
  // useEffect(() => {
  //   console.log("use effect");
  // });

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5005/users");
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getUsers();
  }, []);

  const userOperation = (fromData) => {
    if (fromData.type === "insert") {
      delete fromData.type;
      setUserData([...usersData, fromData]);
    } else {
      const updatedUser = usersData.map((user) => {
        if (user.id === fromData.id) {
          return { ...user, ...fromData };
        }
        return user;
      });

      setUserData(updatedUser);
    }

    modalHandler();
  };

  const modalHandler = () => {
    setShowModal((prev) => !prev);
  };

  const deleteHandler = (id) => {
    const filterUser = usersData.filter((el) => el.id !== id);
    setUserData(filterUser);
  };

  const selectUserHandler = (id) => {
    selectedUser.current = usersData.find((el) => el.id === id);
    modalHandler();
  };

  return (
    <>
      <Modal show={showModal} close={modalHandler}>
        <UserForm userOperation={userOperation} selectedUser={selectedUser} />
      </Modal>

      <Container variant="bisque">
        <Button onClick={modalHandler}>Insert User</Button>
        <br />
        <Input
          type="text"
          name="search"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          "loading please wait..."
        ) : (
          <UserList
            users={usersData}
            search={search}
            deleteHandler={deleteHandler}
            selectUserHandler={selectUserHandler}
          />
        )}
      </Container>
    </>
  );
};

export default App;
