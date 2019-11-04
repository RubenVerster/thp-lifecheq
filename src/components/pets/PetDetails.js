import React, { useState } from "react";
import Cat from "../../img/cat2.jpg";
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
} from "reactstrap";

const Example = props => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card inverse>
              <img width="100%" src={Cat} alt="Cat" />

              <CardImgOverlay>
                <CardTitle>
                  <h1
                    style={{
                      display: "block",
                      position: "absolute",
                      bottom: 5
                    }}
                  >
                    Dingus Mackerel
                  </h1>
                </CardTitle>
              </CardImgOverlay>
            </Card>
            <UncontrolledCollapse toggler={`#${props.id}`}>
              <Card>
                <CardBody>
                  <Row>
                    <Col sm={{ size: 5, offset: 1 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt magni, voluptas debitis similique porro a
                      molestias consequuntur earum odio officiis natus, amet
                      hic, iste sed dignissimos esse fuga! Minus, alias.HELLO
                      FROM HOME
                    </Col>
                    <Col sm={{ size: 5, offset: 1 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nesciunt magni, voluptas debitis similique porro a
                      molestias consequuntur earum odio officiis natus, amet
                      hic, iste sed dignissimos esse fuga! Minus, alias.HELLO
                      FROM HOME
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </UncontrolledCollapse>
            <Button
              color="success"
              id={`${props.id}`}
              style={{ marginBottom: "1rem" }}
            >
              More About Me
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Example;
