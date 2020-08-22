import React, {useState, Fragment, useContext} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import logo from "../images/CheckMark.png";
import {auth} from "./../firebase";
import UserContext from "./../contexts/UserContext";


const activeStyle = {
  textDecoration: "none",
  backgroundColor: "#46b3e6",
  color: "#fff",
  borderRadius: "5px"
}

const navStyle = {
  textDecoration: "none",
  color: "#46b3e6"
}

export default function SideBar(){
  const [user, setUser] = useContext(UserContext)
  const history = useHistory()

  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(show => !show);
  };

  const logOut = () =>{
    auth.signOut().then(()=>{
        setUser({})
        history.push("/SignIn")
    })
}

  return (
    <Fragment>
      <div className="topbar">
        <button onClick={toggle}>+</button>
        <h2>Rokcare</h2>
      </div>
      <div className={`SidebarDiv ${show ? "sbda" : "sbdp"}`}>
        <div className="titleDiv">
            <img id="logo" src={logo} alt=''/>
            <h2>Rokcare</h2>
        </div>
        <nav className="SidebarNav">
            <NavLink
                exact
                to="/"
                style={navStyle}
                activeStyle={activeStyle}
            >
                <div><h2>Overview</h2></div>
            </NavLink>
            <NavLink
                exact
                to="/Orders"
                style={navStyle}
                activeStyle={activeStyle}
            >
                <div><h2>Orders</h2></div>
            </NavLink>
            <NavLink
                exact
                to="/Account"
                style={navStyle}
                activeStyle={activeStyle} 
            >
                <div><h2>Account</h2></div>
            </NavLink>    
        </nav>
        <button className="Logout" onClick={()=>logOut()}>Log Out</button>
      </div>
    </Fragment>
  );
}

export const withSideBar = (Component) => {
  return () => (
    <div className="PageWrapper">
      <SideBar />
      <div className="viewWindow">
        < Component />
      </div>
    </div>
  )
}