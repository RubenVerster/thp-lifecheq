import React from 'react'
import firebase from 'firebase'
import { Button, Card } from 'reactstrap'

export const PetCreate = ({ pet }) => {


  const [newPetName, setNewPetName, newPetDescription, setNewPetDescription, newPetTrait1, setNewPetTrait1, newPetTrait2, setNewPetTrait2, newPetTrait3, setNewPetTrait3, newPetSex, setNewPetSex] = React.useState()

  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('pets').add({ name: newPetName })
  }

  return (
    <Card>

      {/* WHY THE F IS THIS FORM CRASHING THE WHOLE TIME...... */}
      <label>Name</label>
      <input value={newPetName} onChange={(e) => { setNewPetName(e.target.value) }} placeholder={'Name'} />
      <label>Description</label>
      <input value={newPetDescription} onChange={(e) => { setNewPetDescription(e.target.value) }} placeholder={'Description'} />
      <label>Traits</label>
      <input value={newPetTrait1} onChange={(e) => { setNewPetTrait1(e.target.value) }} placeholder={'Trait 1'} />
      <input value={newPetTrait2} onChange={(e) => { setNewPetTrait2(e.target.value) }} placeholder={'Trait 2'} />
      <input value={newPetTrait3} onChange={(e) => { setNewPetTrait3(e.target.value) }} placeholder={'Trait 3'} />
      <label>Sex</label>
      <input value={newPetSex} onChange={(e) => { setNewPetSex(e.target.value) }} placeholder={'M / F'} />

      <Button onClick={onCreate}>Create</Button>
    </Card>
  )
}