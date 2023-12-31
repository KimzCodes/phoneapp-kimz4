import { useState } from "react";
import { Input, Button } from "../../form";

const initState = {
  name: "",
  age: "",
  location: "",
  phone: "",
};

const UserForm = ({ addUser }) => {
  const [form, setForm] = useState(initState);

  const inputHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setForm((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formHandler = (e) => {
    e.preventDefault();
    addUser(form);
    setForm(initState);
  };

  const resetHandler = () => {
    setForm(initState);
  };

  return (
    <form onSubmit={formHandler} onReset={resetHandler}>
      <Input
        type="text"
        name="name"
        label="name"
        value={form.name}
        onChange={inputHandler}
      />
      <Input
        type="text"
        label="age"
        name="age"
        value={form.age}
        onChange={inputHandler}
      />
      <Input
        type="text"
        label="location"
        name="location"
        value={form.location}
        onChange={inputHandler}
      />

      <Input
        type="text"
        name="phone"
        label="phone"
        value={form.phone}
        onChange={inputHandler}
      />

      <Button>Save</Button>
      <Button type="reset">Reset</Button>
    </form>
  );
};

export default UserForm;
