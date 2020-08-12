import React, { useState, useEffect, createContext} from 'react';

const Context = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ id: '', email: '' });
  
  useEffect(()=>{
    // make API call and setUser
    setUser({
      id: '',
      email: ''
    });
  }, [])
  
  return (
    <Context.Provider value={user}>
      {children}
    </Context.Provider>
  );
};

export default Context;