import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import { Container, Row, Col } from 'reactstrap';
import { AidCrud } from '../CRUD/Crud';

const Aid = props => {
  // collapse toggler for MoreAboutMe Button
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);

    //check permissions in firestore, read and write access granted?

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
      {/* <Row style={{ marginTop: 30 }}>
        <Col>
           <div>
            {medActions.map(action => (
              <h1 medAction={action}></h1>
            ))}
          </div>
        </Col>
        <Col>{AidCrud}</Col>
      </Row> */}
      <p>Aid Section</p>
      <AidCrud />
    </Container>
  );
};

export default Aid;
