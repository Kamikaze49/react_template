import React from 'react';
import './App.css';
import './App_responsive.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Account from "./pages/Account";
import Orders from "./pages/Orders";
import Overview from "./pages/Overview";
import Topbar from "./components/Topbar"
import Login from "./pages/Login"

import Main from "./components/Navigator"

function App() {
  return (
    <Router>
      <div className="App">
        <Main/>
      </div>
    </Router>
  
  );
}

export default App;
