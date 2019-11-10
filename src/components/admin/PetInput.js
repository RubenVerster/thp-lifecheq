import React from 'react'
import firebase from 'firebase'
import { Button } from 'reactstrap'

export const PetInput = ({ pet }) => {
  const [name, setName] = React.useState(pet.name)
  const [newPetName, setNewPetName] = React.useState()

  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('pets').doc(pet.id).set({ ...pet, name })
  }
  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('pets').doc(pet.id).delete()
  }

  const onCreate = () => {
    const db = firebase.firestore()
    db.collection('pets').add({ name: newPetName })
  }

  return (
    <div>
      <input value={newPetName} onChange={(e) => { setNewPetName(e.target.value) }} />
      <Button onClick={onCreate}>Create</Button>

      <input value={name} onChange={(e) => { setName(e.target.value) }} />
      <Button color='info' onClick={onUpdate}>Edit</Button>
      <Button color='danger' onClick={onDelete}>Delete</Button>
    </div>
  )
}