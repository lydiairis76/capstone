import React, { useState, useEffect } from "react"
import firebase from "./firebase"

const useQuote = () => {
    const [quote, setQuote] = useState([]); 
    useEffect(() => {
        const unsubscribe = firebase
        .firestore() 
        .collection("quotes") 
        .onSnapshot(snapshot => {
    
          const listItem = snapshot.docs.map(doc => ({
        
            id: doc.id, 
            ...doc.data() 
          }));
          setQuote(listItems); 
        });
        return () => unsubscribe()
    }, []);
    return quote;
  };
  const changeItem = (id) => {
    firebase
      .firestore()
      .collection("quotes")
      .doc(id)
      .delete()
}
  const ItemList = () => {
    const listItem = useQuote();
    return (
      <>
        {listItem.map(quote => (
        <div key={quote.id}>
    
            <h2>{quote.quote}</h2>
            <h3>{quote.author}</h3>
        <span onClick={() => changeItem(quote.id)}>change</span>
      </div>
    
    
      ))}
    </>
  );
};
export default ItemList;