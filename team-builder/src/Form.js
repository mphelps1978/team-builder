import React, { useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap";

const EntryForm = props => {
  //first define the structure of our form. We're just creating empty values here
  const [member, setMember] = useState({
    name: "",
    role: "",
    email: "",
  });

  // We want to update state here, that way the information can be accessed from anywhere on the page
  const changeHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  // When the submit button is pressed, we need to do a couple things:
  // 1. prevent the form from redirecting anywhere
  // 2. push the new data into the array
  // 3. clear the form
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
    <Form>
      <h1>Add a new team member below: </h1>

      <FormGroup row>
        <Label for="name">Name: </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="name"
            onChange={changeHandler}
            value={member.name}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="email">Email: </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="email"
            onChange={changeHandler}
            value={member.email}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for="role">Role: </Label>
        <Col sm={10}>
          <Input
            type="text"
            name="role"
            onChange={changeHandler}
            value={member.role}
          />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 10, offset: 2 }}>
          <Button onClick={submitForm} color="success">
            Add New Teammate!!
          </Button>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default EntryForm;
