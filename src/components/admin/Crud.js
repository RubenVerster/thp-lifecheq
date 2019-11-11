
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
import { FaMars, FaVenus } from 'react-icons/fa';
import { PetInput } from './PetInput'
import { PetCreate } from './PetCreate'


const Adopt = (props) => {
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
      setPets(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }

    fetchData()
  }, [])

  return (
    <Container>
      <Row style={{ marginTop: 30 }}>
        <Col >
          <div>
            {pets.map(pet => (
              <PetInput pet={pet} />
            ))}
          </div>
        </Col>
        <Col >
          <div>
            {/* ternary operator to conditionally render admin or login */}
            {!pets ? (
              <p>Fetching pets....</p>
            ) : (
                < div >
                  {pets.map(pet => (
                    <Container key={pet.name} >
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
                                  {pet.name}
                                </h1>
                              </CardTitle>
                            </CardImgOverlay>
                          </Card>

                          {/* TODO FIX BUG UNIQUE ID FOR COLLAPSE */}
                          {/* temporary fix, maybe see later if you can get the id's to work*/}
                          <UncontrolledCollapse toggler={`#${pet.name[0]}${pet.name[2]}`}>
                            <Card>
                              <CardBody>
                                <Row>
                                  <Col lg={{ size: 6, offset: 1 }}>
                                    {pet.description}
                                  </Col>
                                  <Col
                                    lg={{ size: 4, offset: 1 }}
                                    style={{ textAlign: 'center', marginTop: '15px' }}
                                  >
                                    <h3>Traits</h3>
                                    <ul>
                                      {/* yeah yeah, i know i can do a .map function to make this traits li clean, but I'm lazy.... And I also now reaslise that I could also have written the .map function in the time it took me to write this comment.. */}
                                      <li>{pet.traits[0]}</li>
                                      <li>{pet.traits[1]}</li>
                                      <li>{pet.traits[2]}</li>
                                    </ul>
                                    <h3>{pet.sex === 'M' ? (<FaMars size={'35px'} />) : (<FaVenus size={'35px'} />)}</h3>
                                  </Col>
                                </Row>
                              </CardBody>
                            </Card>
                          </UncontrolledCollapse>
                          <Button
                            color="success"
                            id={`${pet.name[0]}${pet.name[2]}`}
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

        </Col>
        <Col >
          <PetCreate />
        </Col>
      </Row>

    </Container>

  )
};



export default Adopt;
