import React from 'react';
import firebase from 'firebase';
import { Button, Card, UncontrolledCollapse } from 'reactstrap';

const medActionInput = ({ medAction }) => {
  const [name, setName] = React.useState(medAction.actionType);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('actions')
      .doc(pet.id)
      .set({ name, description });
  };
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection('actions')
      .doc(pet.id)
      .delete();
  };

  return (
    <Card style={{ padding: '15px' }}>
      <p>{}</p>
    </Card>
  );
};

export default medActionInput;
