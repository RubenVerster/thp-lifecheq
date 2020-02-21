import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import { Container, Row, Col } from 'reactstrap';
import { TrustCrud } from '../CRUD/Crud';

const Trust = props => {
  //check permissions in firestore, read and write access granted?

  // const [medActions, setPets] = React.useState([]);

  // React.useEffect(() => {
  //   const fetchData = async () => {
  //     const db = firebase.firestore();
  //     const data = await db.collection('actions').get();
  //     setPets(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  //   };

  //   fetchData();
  // }, []);

  return (
    <Container>
      {/* <Row style={{ marginTop: 30 }}>
        <Col>
          <div>
            {medActions.map(action => (
              <h1 medAction={action}></h1>
            ))}
          </div>
        </Col>
        <Col>Hi</Col>
      </Row> */}
      <p>TRUST Page</p>
      <TrustCrud />
    </Container>
  );
};

export default Trust;
