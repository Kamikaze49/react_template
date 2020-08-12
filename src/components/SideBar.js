import React, {useState, Fragment} from 'react';
import {NavLink} from 'react-router-dom';
import logo from "../images/CheckMark.png";


const activeStyle = {
  textDecoration: "none",
  color: "#46b3e6"
}

export default function SideBar(){
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(show => !show);
  };

  return (
    <Fragment>
      <div className="topbar">
        <button onClick={toggle}>+</button>
        <h2>Pharm</h2>
      </div>
      <div className={`SidebarDiv ${show ? "sbda" : "sbdp"}`}>
        <div className="titleDiv">
            <img id="logo" src={logo} alt=''/>
            <h2>Pharm</h2>
        </div>
        <nav className="SidebarNav">
            <NavLink
                exact
                to="/"
                style={activeStyle}
                activeStyle={activeStyle}
            >
                <div><h2>Overview</h2></div>
            </NavLink>
            <NavLink
                exact
                to="/Orders"
                style={activeStyle}
                activeStyle={activeStyle}
            >
                <div><h2>Orders</h2></div>
            </NavLink>
            <NavLink
                exact
                to="/Account"
                style={activeStyle}
                activeStyle={activeStyle} 
            >
                <div><h2>Account</h2></div>
            </NavLink>    
        </nav>
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