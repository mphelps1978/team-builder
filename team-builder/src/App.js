import React, { useState } from "react";
import Form from "./Form";
import Member from "./Member";

function App() {
  // first set state for the form
  const [member, setMember] = useState([
    {
      id: 1,
      name: "Michael Phelps",
      email: "mike@someemail.com",
      role: "FrontEnd Engineer",
    },
  ]);
  // declare a function that will set the values for the inputs and then create a new item in the object for a new member

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role,
    };
    setMember([...member, newMember]);
  };

  return (
    <div className="App">
      <h1>Team List</h1>
      <Form addNewMember={addNewMember} />
      <Member member={member} />
    </div>
  );
}

export default App;
