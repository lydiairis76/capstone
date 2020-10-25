
import React, { useState } from "react"
import firebase from "./firebase"

const AddGoalForm = () => {

  const [goal, setGoal] = useState("")

  const onSubmit = e => {
   
    e.preventDefault()
    if (!goal) return;
    setGoal("");

    firebase
      .firestore()
      .collection("Goals")
      .add({
        goal,
        created: new Date(),
      })
      .then(() => setGoal(""))
  
  }

  return (
    <form onSubmit={onSubmit}>
        <input id="green" type ="text" placeholder="Goal"
        value={goal}
        name="goal"
        onChange={e => setGoal(e.currentTarget.value)}
        type="text"
      />

      <button class= "submit">Add</button>
    </form>
  )
}
export default AddGoalForm