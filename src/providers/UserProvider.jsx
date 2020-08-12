import React, {useState, useEffect, createContext} from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({ id: 'serbia', email: 'test@developer.com' });

    useEffect(() => {
        //pull from firebase
        return () => (
            //unsubscribe from firebase
            <div></div>
        )
    }, [])

    return (
        <UserContext.Provider value={[user]}>{children}</UserContext.Provider>
    )
}

export default UserProvider;