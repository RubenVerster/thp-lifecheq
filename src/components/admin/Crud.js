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
import img from "../../img/cat1.jpg";
import { FaMars, FaVenus } from "react-icons/fa";
import { PetInput } from "./PetInput";
import { PetCreate } from "./PetCreate";

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
      setPets(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Row style={{ marginTop: 30 }}>
        <Col>
          <div>
            {pets.map(pet => (
              <PetInput pet={pet} />
            ))}
          </div>
        </Col>
        <Col>
          <PetCreate />
        </Col>
      </Row>
    </Container>
  );
};

export default Adopt;
