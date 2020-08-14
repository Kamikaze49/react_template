import React, { useState, useEffect, createContext} from 'react';
import {db} from "./../firebase"

const Context = createContext();

export const OrderProvider = ({ children }) => {
  const [order, setOrder] = useState([]);
  
  useEffect(()=>{
    // make API call and setUser
    var tempOrders = []
    db.collection("orders").onSnapshot(snap =>{
      let changes = snap.docChanges();
      changes.forEach(change => {
        const id = change.doc.id
        const data = change.doc.data()
        tempOrders.push({...data, id:id})
      })

      
      setOrder(tempOrders)

    })
    
 

    }, [])
  
  return (
    <Context.Provider value={order}>
      {children}
    </Context.Provider>
  );
};

export default Context;