import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisconnetScreen = () => {
  const navigate = useNavigate();

  const handleConnectPage = () => {
    // Navigate to agent screen
    navigate('/agent');
  };

  const handleOtherAction = () => {
    // Handle other action
    navigate('/');
  };

  return (
    <div className="h-screen flex justify-center items-center bg-blue-800">
      <div className="bg-white px-16 pt-10 pb- rounded-3xl shadow-md max-w-md">
        <h2 className="text-2xls mb-1 pt-4 pb-2 text-center">Facebook Page Integration</h2>
        <h2 className="text-2xl mb-4 pt-4 pb-4 text-center">Integrated Page</h2>
        <div className="flex flex-col justify-center items-center mb-6">
          <button onClick={handleOtherAction} className="bg-red-700 text-white py-3 px-24 rounded-md mb-4 w-full text-center">
            Delete Integration
          </button>
          <button onClick={handleConnectPage} className="bg-blue-700 text-white py-3 px-24 rounded-md w-full text-center">
           Reply&nbsp;to&nbsp;Messages
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisconnetScreen;
