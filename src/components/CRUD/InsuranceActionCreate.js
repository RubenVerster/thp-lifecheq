import React from 'react';
import firebase from 'firebase';
import { Button, Card } from 'reactstrap';

const InsuranceActionCreate = ({ medAction }) => {
  let [newActionName, setNewActionName] = React.useState();

  const onCreate = () => {
    const db = firebase.firestore();

    db.collection('actions').add({
      label: newActionName
    });
  };

  return (
    <Card style={{ padding: '15px' }}>
      <label>Name</label>
      <input
        value={newActionName}
        onChange={e => {
          setNewActionName(e.target.value);
        }}
        placeholder={'Name'}
      />

      <Button onClick={onCreate}>Create</Button>
    </Card>
  );
};

export default InsuranceActionCreate;
