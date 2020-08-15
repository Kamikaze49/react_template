import React, {useState, useContext} from 'react';
import { Link, useHistory } from "react-router-dom"
import {withSideBar} from '../components/SideBar';
import UserContext from "./../contexts/UserContext";
import {auth} from "./../firebase";

function Overview() {
    const [user, setUser] = useContext(UserContext)
    const history = useHistory() 

    const logOut = () =>{
        auth.signOut().then(()=>{
            setUser({})
            history.push("/SignIn")
        })
    }

    return (
        <div className="Page Overview">
             <div className="Header">
                <h2>Overview</h2>
                <button onClick={()=>logOut()}>Log Out</button>
            </div>
        </div>
    )
}

export default withSideBar(Overview);
