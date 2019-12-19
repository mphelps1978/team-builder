import React, { useState } from "react";
import Form from "./Form";
import Member from "./Member";
import data from "./data";
import { Container, Row, Col } from "reactstrap";

function App() {
  const [members, setMembers] = useState(data);

  const addNewPerson = person => {
    setMembers([...members, person]);
  };

  return (
    <Container>
      <div>
        <h1>Let's Build a Team!</h1>
        <Row>
          <Member Member={members} />
        </Row>
        <Col>
          <Form addNewPerson={addNewPerson} />
        </Col>
      </div>
    </Container>
  );
}
export default App;
