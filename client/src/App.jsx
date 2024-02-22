// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import ConnectPage from './components/ConnectPage';
import DeletePage from './components/DeletePage';
import AgentScreen from './components/AgentScreen.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/connect" component={ConnectPage} />
        <Route exact path="/delete" component={DeletePage} />
        <Route exact path="/agent" component={AgentScreen} />
      </Switch>
    </Router>
  );
}

export default App;
