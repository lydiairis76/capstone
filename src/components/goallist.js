import React, { useState, useEffect } from "react"
import firebase from "./firebase"

const useTasks = () => {
    const [tasks, setTasks] = useState([]); 
    useEffect(() => {
        const unsubscribe = firebase
        .firestore() 
        .collection("Goals") 
        .orderBy(`created`, `desc`)
        .onSnapshot(snapshot => {
    
          const listTasks = snapshot.docs.map(doc => ({
        
            id: doc.id, 
            ...doc.data() 
          }));
          setTasks(listTasks); 
        });
        return () => unsubscribe()
    }, []);
    return tasks;
  };
  const deleteTask = (id) => {
    firebase
      .firestore()
      .collection("Goals")
      .doc(id)
      .delete()
}
  const TaskList = () => {
    const listTask = useTasks();
    return (
      <table class="goalslist">
        {listTask.map(task => (
        <tbody key={task.id}>
          <tr>
            <td>{task.goal}</td>
            <td>
        <span class ="delete" onClick={() => deleteTask(task.id)}>&#10005;</span>
      </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default TaskList;