import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import { Container, Row, Col } from 'reactstrap';
// import { PetInput } from '../CRUD/medActionInput';
// import { PetCreate } from '../CRUD/PetCreate';
import dummyData from '../../dummyActions.json';
const Adopt = props => {
  // collapse toggler for MoreAboutMe Button
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

  //check permissions in firestore
  //allow read and write access
  const [medActions, setPets] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('actions').get();
      setPets(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };

    fetchData();
  }, []);
  console.log(dummyData);
  return (
    <Container>
      <Row style={{ marginTop: 30 }}>
        <Col>
          <div>
            {medActions.map(action => (
              <h1 medAction={action}></h1>
            ))}
          </div>
        </Col>
        <Col>{/* <PetCreate /> */}</Col>
      </Row>
    </Container>
  );
};

export default Adopt;
