import React from 'react';
import PetDetails from '../pets/PetDetails';
import {
  Button,
  UncontrolledCollapse,
  CardBody,
  Card,
  Container,
  Row,
  Col,
  CardTitle,
  CardImgOverlay
} from 'reactstrap';

const Adopt = () => (
  <div>
    <h1 style={{ marginTop: 30 }}>ADOPT</h1>
    <Row>
      <Col sm={{ size: 3, offset: 1 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni,
        voluptas debitis similique porro a molestias consequuntur earum odio
        officiis natus, amet hic, iste sed dignissimos esse fuga! Minus,
        alias.HELLO FROM HOME
      </Col>
      <Col sm={{ size: 7, offset: 1 }}>
        <PetDetails id={'one'} />
        <PetDetails id={'two'} />
        <PetDetails id={'three'} />
      </Col>
    </Row>
  </div>
);

export default Adopt;
