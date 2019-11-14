import React from "react";
import firebase from "firebase";
import { Button, Card } from "reactstrap";

export const PetCreate = ({ pet }) => {
  let [newPetName, setNewPetName] = React.useState();
  let [newPetDescription, setNewPetDescription] = React.useState();
  let [newPetTrait1, setNewPetTrait1] = React.useState();
  let [newPetTrait2, setNewPetTrait2] = React.useState();
  let [newPetTrait3, setNewPetTrait3] = React.useState();
  let [newPetSex, setNewPetSex] = React.useState();

  const onCreate = () => {
    const db = firebase.firestore();

    db.collection("pets").add({
      name: newPetName,
      description: newPetDescription,
      trait1: newPetTrait1,
      trait2: newPetTrait2,
      trait3: newPetTrait3,
      sex: newPetSex
    });
  };
  return (
    <Card style={{ padding: "15px" }}>
      <label>Name</label>
      <input
        value={newPetName}
        onChange={e => {
          setNewPetName(e.target.value);
        }}
        placeholder={"Name"}
      />
      <label>Description</label>
      <textarea
        onChange={e => {
          setNewPetDescription(e.target.value);
        }}
        placeholder={"Description"}
        value={newPetDescription}
      ></textarea>

      <label>Traits</label>
      <input
        value={newPetTrait1}
        onChange={e => {
          setNewPetTrait1(e.target.value);
        }}
        placeholder={"Trait 1"}
      />
      <input
        value={newPetTrait2}
        onChange={e => {
          setNewPetTrait2(e.target.value);
        }}
        placeholder={"Trait 2"}
      />
      <input
        value={newPetTrait3}
        onChange={e => {
          setNewPetTrait3(e.target.value);
        }}
        placeholder={"Trait 3"}
      />
      <label>Sex</label>
      <input
        value={newPetSex}
        onChange={e => {
          setNewPetSex(e.target.value);
        }}
        placeholder={"M / F"}
      />

      <Button onClick={onCreate}>Create</Button>
    </Card>
  );
};
