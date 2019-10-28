import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Stats from './Stats'
import Feed from './Feed'
const Home = (props) => {
  return (
    < Container style={{ marginTop: 30 }
    }>
      <Row>
        <Col sm={{ size: 7, offset: 0 }} >
          <Feed />
          <h1> HOME</h1>
        </Col>
        <Col sm={{ size: 4, offset: 1 }} >
          <Stats />
          <h1></h1>
        </Col>
      </Row>
    </Container >
  );
}

export default Home;