import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import Stats from "../Stats";

const Home = () => {
  return (
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col sm={{ size: 7, offset: 0 }}>
          <Card style={{ padding: "15px" }}>
            <h1> Welcome To The SPCA Adoption Portal</h1>

            <p></p>
          </Card>
        </Col>
        <Col sm={{ size: 4, offset: 1 }}>
          <Stats />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
