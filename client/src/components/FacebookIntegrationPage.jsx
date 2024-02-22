import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacebookIntegrationPage = () => {

  const navigate = useNavigate()

  const handleConnectPage = () => {
    // Navigate to agent screen
    navigate('/agent');
  };

  return (
    <div className="h-screen flex justify-center items-center bg-blue-800">
      <div className="bg-white px-16 pt-10 pb-4 rounded-3xl shadow-md max-w-md">
        <h2 className="text-2xl mb-6 pt-4 pb-4 text-center">Facebook Page Integration</h2>
        <div className="flex justify-center mb-6">

        <button onClick={handleConnectPage} className="bg-blue-700 text-white py-3 px-24 rounded-md w-full text-center">
          Connect Page
        </button>
        </div>
      </div>
    </div>
  );
};

export default FacebookIntegrationPage;
