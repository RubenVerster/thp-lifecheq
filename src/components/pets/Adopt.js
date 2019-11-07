import React from 'react';
import PetDetails from '../pets/PetDetails';
import { CardBody, Card, Container, Row, Col, CardTitle } from 'reactstrap';

const Adopt = () => (
  <Container>
    <Row style={{ marginTop: 30 }}>
      <Col sm={{ size: 5, offset: 0 }}>
        <Card>
          <CardTitle>
            <h1 className="text-center">ADOPT</h1>
          </CardTitle>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magni, voluptas debitis similique porro a molestias consequuntur
            earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
            Minus, alias.HELLO FROM HOME
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            magni, voluptas debitis similique porro a molestias consequuntur
            earum odio officiis natus, amet hic, iste sed dignissimos esse fuga!
            Minus, alias.HELLO FROM HOME
          </CardBody>
        </Card>
      </Col>
      <Col sm={{ size: 7, offset: 0 }}>
        <PetDetails id={'one'} />
        <PetDetails id={'two'} />
        <PetDetails id={'three'} />
      </Col>
    </Row>
  </Container>
);

export default Adopt;
