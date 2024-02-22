// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterScreen from './components/RegisterScreen';
import LoginScreen from './components/LoginScreen';
import FacebookIntegrationPage from './components/FacebookIntegrationPage';
import AgentScreen from './components/AgentScreen';
import DisconnetScreen from './components/DisconnetScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/facebook-integration" element={<FacebookIntegrationPage />} />
        <Route path="/agent" element={<AgentScreen />} /> 
        <Route path="/disconnet" element={<DisconnetScreen />} /> 
      </Routes>
    </Router>
  );
};

export default App;
