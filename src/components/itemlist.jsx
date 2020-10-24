import React, { useState, useEffect } from "react"
import firebase from "./firebase"

const useItems = () => {
    const [items, setItems] = useState([]); 
    useEffect(() => {
        const unsubscribe = firebase
        .firestore() 
        .collection("items") 
        .onSnapshot(snapshot => {
    
          const listItems = snapshot.docs.map(doc => ({
        
            id: doc.id, 
            ...doc.data() 
          }));
          setItems(listItems); 
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
      <table class="center">
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