import React, { useState, setState, Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from 'firebase';
import {
  Row,
  Card,
  Col,
  Button,
  UncontrolledCollapse,
  CardBody
} from 'reactstrap';

const UnitTrustActionCreate = () => {
  let [newUnitTrustActionType, setNewUnitTrustActionType] = React.useState();
  let [
    newUnitTrustDebitOrderAmount,
    setNewUnitTrustDebitOrderAmount
  ] = React.useState();
  let [
    newUnitTrustDebitOrderDay,
    setNewUnitTrustDebitOrderDay
  ] = React.useState();
  let [newUnitTrustFundName, setNewFundName] = React.useState();
  let [newUnitTrustActionLabel, setNewUnitTrustActionLabel] = React.useState();
  let [newUnitTrustLumpSum, setNewUnitTrustLumoSum] = React.useState();
  let [newUnitTrustStartMonth, setNewUnitTrustStartMonth] = React.useState();

  const onCreate = e => {
    e.preventDefault();

    const db = firebase.firestore();

    //why does ternary operator not work.......?
    // (newUnitTrustActionLabel !== '') ? (
    //   // db.collection('actions').add({
    //   //   label: newUnitTrustActionLabel
    //   // });
    //   alert('New UnitTrust Insurance Added');
    //   setNewUnitTrustActionLabel('');
    // ) : (
    //   alert('Please Review Your Data');
    // )

    if (newUnitTrustActionLabel !== '') {
      // db.collection('actions').add({
      //   label: newUnitTrustActionLabel
      // });
      alert('New UnitTrust Insurance Added');
      setNewUnitTrustActionLabel('');
    } else {
      alert('Please Review Your Data');
    }
  };

  return (
    <form onSubmit={onCreate}>
      <label>Debit Order</label>
      <div>
        <input
          value={newUnitTrustActionLabel}
          onChange={e => {
            setNewUnitTrustActionLabel(e.target.value);
          }}
          placeholder={'Debit Order Amount'}
        />
        <input
          value={newUnitTrustActionLabel}
          onChange={e => {
            setNewUnitTrustActionLabel(e.target.value);
          }}
          placeholder={'Debit Order Day'}
        />
      </div>

      <label>Fund Name</label>
      <input
        value={newUnitTrustActionLabel}
        onChange={e => {
          setNewUnitTrustActionLabel(e.target.value);
        }}
        placeholder={'Fund Name'}
      />

      <label>Label</label>
      <input
        value={newUnitTrustActionLabel}
        onChange={e => {
          setNewUnitTrustActionLabel(e.target.value);
        }}
        placeholder={'Open A New Unit Trust'}
      />

      <label>Lump Sum Contribution</label>
      <input
        value={newUnitTrustActionLabel}
        onChange={e => {
          setNewUnitTrustActionLabel(e.target.value);
        }}
        placeholder={'Lump Sum Contribution'}
      />

      <label>Start Month</label>
      <input
        value={newUnitTrustActionLabel}
        onChange={e => {
          setNewUnitTrustActionLabel(e.target.value);
        }}
        placeholder={'DD/MM/YYYY hh:mm'}
      />

      <label>Action Type</label>
      <input
        value={'new-ut'}
        onChange={e => {
          setNewUnitTrustActionLabel('new-ut');
        }}
        placeholder={'Name'}
      />

      <Button onClick={onCreate}>Create</Button>
    </form>
  );
};

const UnitTrustActionUpdateDelete = ({ unitTrustAction }) => {
  const [label, setLabel] = React.useState(unitTrustAction);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('actions')
      .doc(unitTrustAction.id)
      .set({ label });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection('actions')
      .doc(unitTrustAction.id)
      .delete();
  };

  return (
    <div style={{ padding: '15px' }}>
      <label>Name</label>
      <input
        value={label}
        onChange={e => {
          setLabel(e.target.value);
        }}
      />

      <Button color="info" onClick={onUpdate}>
        Update
      </Button>
      <Button style={{ margin: '15px' }} color="danger" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

const UnitTrust = () => {
  //check permissions in firestore, read and write access granted?

  const [UnitTrustActions, setUnitTrustActions] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('actions').get();
      setUnitTrustActions(
        data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      );
    };
    fetchData();
  }, []);
  return (
    <div>
      <Row>
        <Button color="danger" id="toggler" style={{ marginBottom: '1rem' }}>
          <strong>+</strong> Add New Unit Trust Insurance
        </Button>
        <UncontrolledCollapse toggler="#toggler">
          <Card>
            <CardBody>
              <UnitTrustActionCreate />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </Row>
      <Row style={{ marginTop: 30 }}>
        <div>
          {UnitTrustActions.map(action => (
            <div>
              {action.actionType === 'new-ut' ? (
                <Card>
                  <span>{action.fundName}</span>
                  <UnitTrustActionUpdateDelete
                    unitTrustAction={action}
                  ></UnitTrustActionUpdateDelete>
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

export default UnitTrust;
