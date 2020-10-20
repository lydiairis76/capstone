
import React, { useState } from "react"
import firebase from "./firebase"

const AddItemForm = () => {

  const [name, setName] = useState("")

  const onSubmit = e => {
   
    e.preventDefault()
    if (!name) return;
    setName("");

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
        <input id="todoinput" type ="text" placeholder="Task"
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