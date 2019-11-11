import React from 'react'
import firebase from 'firebase'
import { Button } from 'reactstrap'

export const PetInput = ({ pet }) => {

  const [name, setName] = React.useState(pet.name)
  const onUpdate = () => {
    const db = firebase.firestore()
    db.collection('pets').doc(pet.id).set({ ...pet, name })
  }
  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('pets').doc(pet.id).delete()
  }

  return (
    <div>

      <input value={name} onChange={(e) => { setName(e.target.value) }} />
      <Button color='info' onClick={onUpdate}>Edit</Button>
      <Button color='danger' onClick={onDelete}>Delete</Button>
    </div>
  )
}