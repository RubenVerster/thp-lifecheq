import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from "firebase";
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
import img from "../../img/cat2.jpg";
import { FaMars, FaVenus } from "react-icons/fa";

const Adopt = props => {
  // collapse toggler for MoreAboutMe Button
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  //check permissions in firestore
  //allow read and write access
  const [pets, setPets] = React.useState([]);
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("pets").get();
      setPets(data.docs.map(doc => doc.data()));
    };

    fetchData();
  }, []);

  return (
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
              earum odio officiis natus, amet hic, iste sed dignissimos esse
              fuga! Minus, alias.
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              magni, voluptas debitis similique porro a molestias consequuntur
              earum odio officiis natus, amet hic, iste sed dignissimos esse
              fuga! Minus, alias.
            </CardBody>
          </Card>
        </Col>
        <Col sm={{ size: 7, offset: 0 }}>
          <div>
            {/* ternary operator to conditionally render admin or login */}
            {!pets ? (
              <p>Fetching pets....</p>
            ) : (
              <div>
                {pets.map(pet => (
                  <Container key={pet.name}>
                    <Row>
                      <Col>
                        <Card inverse>
                          <img width="100%" src={img} alt="Cat" />
                          <CardImgOverlay>
                            <CardTitle>
                              <h1
                                style={{
                                  display: "block",
                                  position: "absolute",
                                  bottom: 5
                                }}
                              >
                                {pet.name}
                              </h1>
                            </CardTitle>
                          </CardImgOverlay>
                        </Card>

                        {/* TODO FIX BUG UNIQUE ID FOR COLLAPSE */}
                        {/* temporary fix, maybe see later if you can get the id's to work*/}
                        <UncontrolledCollapse
                          toggler={`#${pet.name[0]}${pet.name[2]}`}
                        >
                          <Card>
                            <CardBody>
                              <Row>
                                <Col lg={{ size: 6, offset: 1 }}>
                                  {pet.description}
                                </Col>
                                <Col
                                  lg={{ size: 4, offset: 1 }}
                                  style={{
                                    textAlign: "center",
                                    marginTop: "15px"
                                  }}
                                >
                                  <h3>Traits</h3>
                                  <ul>
                                    {/* yeah yeah, i know i can do a .map function to make this traits li clean, but I'm lazy.... And I also now reaslise that I could also have written the .map function in the time it took me to write this comment.. */}
                                    <li>{pet.trait1}</li>
                                    <li>{pet.trait2}</li>
                                    <li>{pet.trait3}</li>
                                  </ul>
                                  <h3>
                                    {pet.sex.toLowerCase() === "m" ||
                                    pet.sex.toLowerCase() === "male" ? (
                                      <FaMars size={"35px"} />
                                    ) : (
                                      <FaVenus size={"35px"} />
                                    )}
                                  </h3>
                                </Col>
                              </Row>
                            </CardBody>
                          </Card>
                        </UncontrolledCollapse>
                        <Button
                          color="success"
                          id={`${pet.name[0]}${pet.name[2]}`}
                          style={{ marginBottom: "1rem" }}
                        >
                          More About Me
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                ))}
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Adopt;
