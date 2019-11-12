import React from "react";
import firebase from "firebase";
import { Button, Card, UncontrolledCollapse } from "reactstrap";

export const PetInput = ({ pet }) => {
  const [name, setName] = React.useState(pet.name);
  const [description, setDescription] = React.useState(pet.description);
  const [trait1, setTrait1] = React.useState(pet.trait1);
  const [trait2, setTrait2] = React.useState(pet.trait2);
  const [trait3, setTrait3] = React.useState(pet.trait3);
  const [sex, setSex] = React.useState(pet.sex);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection("pets")
      .doc(pet.id)
      .set({ name, description, trait1, trait2, trait3, sex });
  };
  const onDelete = () => {
    const db = firebase.firestore();
    db.collection("pets")
      .doc(pet.id)
      .delete();
  };

  return (
    <Card style={{ padding: "15px" }}>
      <label>Name</label>
      <input
        required
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <UncontrolledCollapse toggler={`#${pet.name[0]}${pet.name[2]}`}>
        <label>Description</label>
        <textarea
          onChange={e => {
            setDescription(e.target.value);
          }}
          placeholder={"Description"}
          value={description}
          cols="40"
          rows="5"
        ></textarea>

        <label>Traits</label>
        <input
          required
          value={trait1}
          onChange={e => {
            setTrait1(e.target.value);
          }}
          placeholder={"Trait 1"}
        />
        <input
          required
          value={trait2}
          onChange={e => {
            setTrait2(e.target.value);
          }}
          placeholder={"Trait 2"}
        />
        <input
          required
          value={trait3}
          onChange={e => {
            setTrait3(e.target.value);
          }}
          placeholder={"Trait 3"}
        />
        <label>Sex</label>
        <input
          required
          value={sex}
          onChange={e => {
            setSex(e.target.value);
          }}
          placeholder={"M / F"}
        />
        <Button color="info" onClick={onUpdate}>
          Update
        </Button>
        <Button style={{ margin: "15px" }} color="danger" onClick={onDelete}>
          Delete
        </Button>
      </UncontrolledCollapse>
      <Button color="success" id={`${pet.name[0]}${pet.name[2]}`}>
        More Details
      </Button>
    </Card>
  );
};
