import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import { Container, Row, Col } from 'reactstrap';
// import { MedActionInput } from 'medActionInput';
// import { PetCreate } from 'PetCreate';

const Crud = props => {
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

  return (
    <Container>
      <Row style={{ marginTop: 30 }}>
        <Col>
          {/* <div>
            {medActions.map(action => (
              <MedActionInput medAction={action} />
            ))}
          </div> */}
          <h1>Eyo</h1>
        </Col>
        {/* <Col>
          <PetCreate />
        </Col> */}
      </Row>
    </Container>
  );
};

export default Crud;
