import React, { useState } from "react"
import firebase from "./firebase"

const AddItemForm = () => {
  //useState() hook captures the value from the input value
  const [name, setName] = useState("")
  

  /* The onSubmit function we takes the 'e'
    or event and submits it to Firebase
    */
  const onSubmit = e => {
    /* 
    preventDefault is important because it
    prevents the whole page from reloading
    */
    e.preventDefault()
    firebase
      .firestore()
      .collection("items")
      .add({
        name
      })
      .then(() => setName(""))
  }

  return (
    <form onSubmit={onSubmit}>
        <input class="no-outline" type ="text" placeholder="Task"
        value={name}
        name="name"
        onChange={e => setName(e.currentTarget.value)}
        type="text"
      />

      <button class= "submit">Add</button>
    </form>
  )
}
export default AddItemForm