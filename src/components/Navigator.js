import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";

import logo from "./../images/CheckMark.png"

import Account from "../pages/Account";
import Orders from "../pages/Orders";
import Overview from "../pages/Overview";



function Navigator() {
    const [toggled, setToggled] = useState(false)


    return (
        <div className="Navigator">

            <Router>
            <div className="topbar">
                <button onClick={()=>setToggled(!toggled)}>+</button>
                <h2>Pharm</h2>
            </div>
                <div className={toggled?"SidebarDiv sbda":"SidebarDiv sbdp"}>
                    <div className="titleDiv">
                        <img id="logo" src={logo}/>
                        <h2>Pharm</h2>
                    </div>
                    <nav className="SidebarNav">
                        <NavLink exact to="/" activeClassName="SidebarLinkActive"
                         style={{textDecoration:"none", color:"#46b3e6"}}>
                            <div><h2>Overview</h2></div>
                        </NavLink>
                        <NavLink exact to="/Orders" activeClassName="SidebarLinkActive" 
                        style={{textDecoration:"none", color:"#46b3e6"}}>
                            <div><h2>Orders</h2></div>
                        </NavLink>
                        <NavLink exact to="/Account" activeClassName="SidebarLinkActive" 
                        style={{textDecoration:"none", color:"#46b3e6"}}>
                            <div><h2>Account</h2></div>
                        </NavLink>    
                    </nav>

                </div>      


                <Switch>
                <Route exact path="/">
                    <Overview />
                </Route>
                <Route path="/Account">
                    <Account />
                </Route>
                <Route path="/Orders">
                    <Orders />
                </Route>    
                </Switch>
            </Router>
        </div>
    )
}

export default Navigator
