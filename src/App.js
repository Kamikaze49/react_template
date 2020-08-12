import React from 'react';
import './App.css';
import './App_responsive.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

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
