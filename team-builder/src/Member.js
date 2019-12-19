import React from "react";
import { Card, CardTitle, CardText, Container, Row, Col } from "reactstrap";

const Member = props => {
  return (
    <div>
      {props.Member.map(member => {
        return (
          <Container>
            <Row>
              <Col key={member.id}>
                <Card
                  body
                  inverse
                  color="info"
                  style={{ paddingBottom: "10px" }}
                >
                  <CardTitle>{member.name}</CardTitle>
                  <CardText>{member.email}</CardText>
                  <CardText>{member.role}</CardText>
                </Card>
              </Col>
            </Row>
          </Container>
        );
      })}
    </div>
  );
};

export default Member;
