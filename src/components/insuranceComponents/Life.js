import React, { useState, setState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
// import { LifeCrud } from '../CRUD/Crud';
import {
  Row,
  Card,
  Col,
  Button,
  UncontrolledCollapse,
  CardBody
} from 'reactstrap';
import InsuranceActionInput from '../CRUD/InsuranceActionInput';

const LifeActionCreate = () => {
  let [newLifeActionLabel, setNewLifeActionLabel] = React.useState();

  const onCreate = e => {
    e.preventDefault();

    const db = firebase.firestore();

    //why does ternary operator not work.......?
    // (newLifeActionLabel !== '') ? (
    //   // db.collection('actions').add({
    //   //   label: newLifeActionLabel
    //   // });
    //   alert('New Life Insurance Added');
    //   setNewLifeActionLabel('');
    // ) : (
    //   alert('Please Review Your Data');
    // )

    if (newLifeActionLabel !== '') {
      // db.collection('actions').add({
      //   label: newLifeActionLabel
      // });
      alert('New Life Insurance Added');
      setNewLifeActionLabel('');
    } else {
      alert('Please Review Your Data');
    }
  };

  return (
    <form onSubmit={onCreate}>
      <label>Name</label>
      <input
        value={newLifeActionLabel}
        onChange={e => {
          setNewLifeActionLabel(e.target.value);
        }}
        placeholder={'Name'}
      />
      <Button onClick={onCreate}>Create</Button>
    </form>
  );
};

const LifeActionRead = (props, { LifeAction }) => {
  //check permissions in firestore, read and write access granted?

  const [lifeActions, setLifeActions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('actions').get();
      setLifeActions(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <Col style={{ marginTop: 30 }}>
      {props.actionType === 'new-medical-aid' ? (
        <Row>
          <div>Hi</div>
          <div>{props.label}</div>
        </Row>
      ) : (
        {}
      )}
    </Col>
  );
};

const Life = () => {
  //check permissions in firestore, read and write access granted?

  const [lifeActions, setLifeActions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('actions').get();
      setLifeActions(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);
  return (
    <div>
      <Row>
        <Button color="danger" id="toggler" style={{ marginBottom: '1rem' }}>
          <strong>+</strong> Add New Life Insurance
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              <LifeActionCreate />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <div>
          {lifeActions.map(action => (
            <div>
              {action.actionType === 'new-medical-aid' ? (
                <Card>
                  <span>{action.label}</span>
                  <InsuranceActionInput
                    lifeAction={action}
                  ></InsuranceActionInput>
                </Card>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      </Row>
    </div>
  );
};

export default Life;
