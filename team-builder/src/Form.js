import React, { useState } from "react";

const Form = props => {
  // console.log("form props", props);

  // setting an empty State for the form
  const [member, setMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  // When the submit button is pressed, we need to stop the page from redirecting, and then add the new member to the array, and finally clear out the form
  const submitForm = event => {
    event.preventDefault();
    setMember(member);
    //   setMember({
    //     name: "",
    //     email: "",
    //     role: "",
    //      });
  };

  // In the background, we want to update state, so that the information entered remains accessable
  const handleChanges = e => {
    console.log("The Member Changes: ", member);
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    });
  };
  //Finally, let's render out our form
  return (
    <div>
      <form onSubmit={submitForm}>
        <label>
          Member Name:
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleChanges}
            value={member.name}
          />
        </label>
        <label>
          Email:
          <input
            id="email"
            name="email"
            type="email"
            onChange={handleChanges}
            value={member.email}
          />
        </label>
        <label>
          <select id="role" name="role">
            <option value="">Select Role</option>
            <option value="stakeholder">Stakeholder</option>
            <option value="projectlead">Project Lead</option>
            <option value="designer">Designer</option>
            <option value="fe_engineer">Frontend Engineer</option>
            <option value="be_engineer">Backend Engineer</option>
          </select>
        </label>
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
};

export default Form;
