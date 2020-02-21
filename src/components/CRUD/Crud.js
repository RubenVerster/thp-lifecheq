import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import { Col, Row, Container } from 'reactstrap';
import InsuranceActionInput from '../CRUD/InsuranceActionInput';
import InsuranceActionCreate from '../CRUD/InsuranceActionCreate';

const LifeCrud = props => {
  //check permissions in firestore, read and write access granted?

  const [lifeActions, setLifeActions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('blanks').get();
      setLifeActions(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <Col style={{ marginTop: 30 }}>
      <div>
        {lifeActions.forEach(action => (
          // <InsuranceActionInput LifeAction={action} />
          <Row>
            <div>Hi</div>
            <div>{action.name}</div>
          </Row>
        ))}
      </div>
      <Row>{/* <InsuranceActionCreate /> */}</Row>
    </Col>
  );
};

const AidCrud = props => {
  return <div>Aid</div>;
};

const TrustCrud = props => {
  return <div>Trust</div>;
};

export { LifeCrud, AidCrud, TrustCrud };
