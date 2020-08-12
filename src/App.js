import React from 'react';
import './App.css';
import './App_responsive.css';
import {BrowserRouter as Router} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigator from "./components/Navigator"
import {UserProvider} from './contexts/UserContext';

function App() {
  return (
    <Router>
     <UserProvider>
        <Navigator />
     </UserProvider>
    </Router>
  );
}

export default App;
