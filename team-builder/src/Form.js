import React, { useState } from "react";
import { Button, Card } from "reactstrap";

const Form = props => {
  const [member, setMember] = useState({
    name: "",
    role: "",
    email: "",
  });

  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    const newMember = {
      ...member,
      id: Date.now(),
    };

    props.addNewPerson(newMember);
    setMember({ name: "", role: "", email: "" });
  };

  return (
    <form onSubmit={submitForm}>
      <h1>Add a new team member below: </h1>
      <br />
      <Card></Card>
      <label htmlFor="name">Name: </label>

      <input
        type="text"
        name="name"
        onChange={changeHandler}
        value={member.name}
      />

      <br />
      <br />

      <label htmlFor="email">Email: </label>

      <input
        type="text"
        name="email"
        onChange={changeHandler}
        value={member.email}
      />
      <br />
      <br />

      <label htmlFor="role">Role: </label>

      <input
        type="text"
        name="role"
        onChange={changeHandler}
        value={member.role}
      />

      <br />

      <Button color="danger">Add New Teammate!!</Button>
    </form>
  );
};

export default Form;
