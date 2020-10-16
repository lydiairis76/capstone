import React, { useState, useEffect } from "react"
import firebase from "./firebase"

const useItems = () => {
    const [items, setItems] = useState([]); //useState() hook, sets initial state to an empty array
    useEffect(() => {
        const unsubscribe = firebase
        .firestore() //access firestore
        .collection("items") //access "items" collection
        .onSnapshot(snapshot => {
          //You can "listen" to a document with the onSnapshot() method.
          const listItems = snapshot.docs.map(doc => ({
            //map each document into snapshot
            id: doc.id, //id and data pushed into items array
            ...doc.data() //spread operator merges data to id.
          }));
          setItems(listItems); //items is equal to listItems
        });
        return () => unsubscribe()
    }, []);
    return items;
  };
  const deleteItem = (id) => {
    firebase
      .firestore()
      .collection("items")
      .doc(id)
      .delete()
}
  const ItemList = () => {
    const listItem = useItems();
    return (
      <table>
        {listItem.map(item => (
        <tbody key={item.id}>
          <tr>
            <td>{item.name}</td>
            <td>
        <span class ="delete" onClick={() => deleteItem(item.id)}>&#10005;</span>
      </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};
export default ItemList;