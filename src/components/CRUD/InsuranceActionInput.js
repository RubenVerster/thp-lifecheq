import React from 'react';
import firebase from 'firebase';
import { Button, Card } from 'reactstrap';

const LifeActionInput = ({ LifeAction }) => {
  const [label, setLabel] = React.useState(LifeAction);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('actions')
      .doc(LifeAction.id)
      .set({ label });
  };

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection('actions')
      .doc(LifeAction.id)
      .delete();
  };

  return (
    <div style={{ padding: '15px' }}>
      <label>label</label>
      <input
        required
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

export default LifeActionInput;
