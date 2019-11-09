import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import firebase from 'firebase';
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
import img from '../../img/cat1.jpg'

const Crud = (props) => {
  // collapse toggler for MoreAboutMe Button
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  //check permissions in firestore
  //allow read and write access
  const [pets, setPets] = React.useState([])
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("pets").get()
      setPets(data.docs.map(doc => doc.data()))
    }

    fetchData()
  }, [])

  return (
    <div>
      {/* ternary operator to conditionally render admin or login */}
      {!pets ? (
        <p>Fetching pets....</p>
      ) : (
          < div >
            {pets.map(pet => (
              <Container >
                <Row>
                  <Col>
                    <Card inverse>
                      <img width="100%" src={img} alt="Cat" />

                      <CardImgOverlay>
                        <CardTitle>
                          <h1
                            style={{
                              display: 'block',
                              position: 'absolute',
                              bottom: 5
                            }}
                          >
                            < div key={pet.name} > {pet.name}</div>
                          </h1>
                        </CardTitle>
                      </CardImgOverlay>
                    </Card>

                    {/* TODO FIX_BUG UNIQUE ID FOR COLLAPSE */}
                    <UncontrolledCollapse toggler={`#${props.id}`}>
                      <Card>
                        <CardBody>
                          <Row>
                            <Col lg={{ size: 6, offset: 1 }}>
                              {pet.description}
                            </Col>
                            <Col
                              lg={{ size: 4, offset: 1 }}
                              style={{ textAlign: 'center' }}
                            ><h3>Sex: {pet.sex}</h3>
                              <h3>Traits</h3>
                              <ul>
                                {/* yeah yeah, i know i can do a .map function to make this traits li clean, but I'm lazy.... And I also now reaslise that I could also have written the .map function in the time it took me to write this comment.. */}
                                <li>{pet.traits[0]}</li>
                                <li>{pet.traits[1]}</li>
                                <li>{pet.traits[2]}</li>
                              </ul>
                            </Col>
                          </Row>
                        </CardBody>
                      </Card>
                    </UncontrolledCollapse>
                    <Button
                      color="success"
                      id={`${props.id}`}
                      style={{ marginBottom: '1rem' }}
                    >
                      More About Me
                  </Button>
                  </Col>
                </Row>
              </Container>


            ))
            }
          </div >
        )}
    </div>

  );
};

export default Crud;
