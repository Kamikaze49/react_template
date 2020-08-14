import React, { useState, useEffect, createContext} from 'react';
import {db} from "./../firebase";

const Context = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    { id: '', 
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
    // db.collection("users").where("id", "==","1").get().then(snap =>{
    //   setUser(
    //     { id: '', 
    //   email: '',
    //   image_url:"",
    //   license_url:"",
    //   pharmacy_name:"",
    //   phone_number:"", 
    //   billing:{
    //     visa:{
    //       card_holder:"",
    //       card_number:"",
    //       cvv:"",
    //       expiry_date:""
    //     },
    //     mobile_payment:{
    //       mobile_number:"",
    //       network:""
    //     }
    //   }
    //   });

    // })


  }, [])
  
  return (
    <Context.Provider value={user}>
      {children}
    </Context.Provider>
  );
};

export default Context;