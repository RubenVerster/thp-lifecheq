import React, { useState } from 'react';
import { Collapse, Button, UncontrolledCollapse, CardBody, Card, Container, Row, Col } from 'reactstrap';

const Example = (props) => {

  const [collapse, setCollapse] = useState(false);

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      < Container style={{ marginTop: 30 }
      }>
        <Row>
          <Col >
            <Button color="primary" id={`${props.id}`} style={{ marginBottom: '1rem' }}>
              More About Me
            </Button>
            <UncontrolledCollapse toggler={`#${props.id}`}>
              <Card>
                <CardBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                  similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                  dignissimos esse fuga! Minus, alias.
              </CardBody>
              </Card>
            </UncontrolledCollapse>
          </Col>
        </Row>
      </Container >
    </div>
  );
}

export default Example;