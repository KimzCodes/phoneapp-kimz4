import { useState, useRef, useEffect, useCallback } from "react";

// components
import { UserForm, UserList } from "./components/user";
import { Container, Modal } from "./components/layout";
import { Button, Input } from "./components/form";
import { Loading } from "./components/feedback";
import useAPI from "./hooks/useAPI";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState("");
  const [usersData, setUserData] = useState([]);
  const { loading, error, callApi } = useAPI();
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
      const res = await callApi({
        method: "GET",
        url: "http://localhost:5005/users",
      });
      setUserData(res.data);
    };

    getUsers();
  }, [callApi]);

  const userOperation = async (fromData) => {
    if (fromData.type === "insert") {
      delete fromData.type;
      setUserData([...usersData, fromData]);

      await callApi({
        method: "POST",
        url: "http://localhost:5005/users",
        data: { ...fromData },
      });
    } else {
      await callApi({
        method: "PATCH",
        url: `http://localhost:5005/users/${fromData.id}`,
        data: { ...fromData },
      });
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

  const searchHandler = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const modalHandler = useCallback(() => {
    setShowModal((prev) => !prev);
  }, []);

  const deleteHandler = useCallback(
    async (id) => {
      try {
        await callApi({
          method: "DELETE",
          url: `http://localhost:5005/users/${id}`,
        });

        const filterUser = usersData.filter((el) => el.id !== id);
        setUserData(filterUser);
      } catch (error) {
        console.log(error);
      }
    },
    [usersData, callApi]
  );

  const selectUserHandler = useCallback(
    (id) => {
      selectedUser.current = usersData.find((el) => el.id === id);
      modalHandler();
    },
    [usersData, modalHandler]
  );

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
          onChange={searchHandler}
        />

        <Loading loading={loading} error={error}>
          <UserList
            users={usersData}
            search={search}
            deleteHandler={deleteHandler}
            selectUserHandler={selectUserHandler}
          />
        </Loading>
      </Container>
    </>
  );
};

export default App;
