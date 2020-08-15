import React, { useState, useEffect, createContext} from 'react';
import { useHistory } from "react-router-dom"
import {db, auth } from "./../firebase";

const Context = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory()

  const [user, setUser] = useState(
    { id: null, 
    email: '',
    image_url:"",
    license_url:"",
    pharmacy_name:"",
    phone_number:"",
    billing:{
      visa:{
        card_holder:"",
        card_number:"",
        cvv:"",
        expiry_date:""
      },
      mobile_payment:{
        mobile_number:"",
        network:""
      }
    }
  });
  
  useEffect(()=>{
    // make API call and setUser
    auth.onAuthStateChanged(account =>{
      console.log(account)
      if(account){
        db.collection("users").doc(account.uid).get()
        .then(doc =>{
          if(doc.exists && doc.data().isVerified){
              let userData = doc.data()
              setUser({...userData, id:account.uid})
              console.log(user)
              history.push("/")
          }else{
              // setError("User data not found")
          }
        }).catch(e =>{
          // setError("Error retrieving user data")
        })
     
        }
          
      



  })


  }, [])
  
  return (
    <Context.Provider value={[user, setUser]}>
      {children}
    </Context.Provider>
  );
};

export default Context;