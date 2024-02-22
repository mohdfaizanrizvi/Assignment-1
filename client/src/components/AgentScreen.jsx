import React from 'react';
import { useState } from 'react';
import {Logo, Chats, Call, Chart, Login, Logout, People, Refresh, User, Inbox} from '../icons/index'
import { useNavigate } from 'react-router-dom';


const AgentScreen = () => {

    const navigate = useNavigate();

    const [showConversation, setShowConversation] = useState(false);

    const newMessages = [
        { id: 1, sender: "Amit Singh", message: "Hello! How are you?" },
        { id: 2, sender: "Janvi Gupta", message: "Hey there! What's up?" },
        // Add more messages as needed
      ];


    const handleInboxClick = () => {
        setShowConversation(!showConversation); // Toggle the visibility of the conversation thread
    };
    
    const handleUserClick = () => {
        navigate('/disconnet'); // Navigate to the /disconnect page
    };

  return (
    <div className="flex h-screen">
      {/* Left column for conversation list */}
      <div className="w-1/4  flex">
        {/* Left partition */}
        <div className="w-1/4 bg-blue-800">
          {/* Content for the left partition */}
            <div className=" h-16 w-full flex justify-center items-center">
            <Logo className="h-12 w-12" /> {/* Use the Logo component */}
            </div>
            
            <div className=" h-16 w-full flex justify-center items-center">
            <Inbox className="h-12 w-12" onClick={handleInboxClick} /> {/* Use the Logo component */}
            </div>

            <div className=" h-16 w-full flex justify-center items-center">
            <People className="h-12 w-12 " /> {/* Use the Logo component */}
            </div>

            <div className=" h-16 w-full flex justify-center items-center">
            <Chart className="h-12 w-12 " /> {/* Use the Logo component */}
            </div>

            <div className="h-16 w-full flex justify-center bottom-0 items-center flex-grow">
                <button onClick={handleUserClick} className="absolute bottom-0 h-16 mb-4 w-16 bg-blue-800">
                    <User className="h-full w-full" /> {/* Use the User component */}
                </button>
            </div>

        </div>
        
        {/* Right partition */}
        <div className="w-3/4 relative border-r-2">
            {/* Content for the right partition */}
            {showConversation && (
            <div className="p-4 bg-white  border-gray-200" >
                <h2 className="text-xl font-bold mb-4 pb-4 border-b-2">Conversation</h2>
                {/* Display new messages */}
                <div>
                    {newMessages.map(message => (
                        <div key={message.id} className="pb-4 border-b-2 mb-2 relative">
                            {/* Checkbox */}
                            <input type="checkbox" className="absolute left-0 top-1/2 transform -translate-y-1/2 mr-2" />
                            <div className="pl-6">
                                <p className="font-semibold">{message.sender}</p>
                                <p>{message.message}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            )}
            </div>
        </div>
      
      {/* Center column for conversation thread */}
    <div className="w-1/2 bg-gray-300 relative">
        {/* Name of the person you are chatting with */}
        <div className="p-4 bg-white border-b border-gray-400">
        <h2 className="text-lg font-semibold">{newMessages.length > 0 && newMessages[0].sender}</h2>
        </div>

    {/* Chat messages */}
    <div className="overflow-y-auto pb-16">
      {/* Individual chat messages */}
      <div className="p-4">
        {/* Sender's message */}
        <div className="flex justify-start items-start mb-4">
          <div className="rounded-lg p-3 bg-blue-500 text-white">
            <p>Hello! How are you?</p>
          </div>
        </div>

        {/* Your message */}
        <div className="flex justify-end items-start mb-4">
          <div className="rounded-lg p-3 bg-green-500 text-white">
            <p>Fine... What about you?</p>
          </div>
        </div>
      </div>
    </div>

    {/* Input box for typing message */}
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-400">
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
      />
      {/* You can add a send button here if needed */}
    </div>
  </div>

      
    {/* Right column for customer profile */}
    <div className="w-1/4 bg-gray-100 border-l-2 border-b-2 p-4">
        {/* Customer profile */}
        <div className='border-b-2 '>
            <div className="text-center mb-4">
            {/* User logo */}
            <User className="w-16 h-16 mx-auto mb-2" />

            {/* Customer name */}
            <h3 className="text-lg font-semibold">Customer Name</h3>

            {/* Offline status */}
            <p className="text-sm text-gray-500">Offline</p>
            </div>

            {/* Call and Profile buttons */}
            <div className="flex justify-center mb-4">
            <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md flex items-center">
                <Call className="h-5 w-5 mr-2"  />
                Call
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md flex items-center">
                <User className="h-5 w-5 mr-2" />
                Profile
            </button>
            </div>
        </div>

        {/* Customer details */}
        <div className="bg-white rounded-md mt-4 p-4">
            <h4 className="text-lg font-semibold mb-2">Customer Details</h4>
            <div className="flex flex-col">
                <p className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-semibold">Email:</span>
                <span className="text-gray-500 font-semibold">amit@gmail.com</span>
                </p>
                <p className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-semibold">First Name:</span>
                <span className="text-gray-500 font-semibold">Amit</span>
                </p>
                <p className="flex justify-between items-center mb-4">
                <span className="text-gray-500 font-semibold">Last Name:</span>
                <span className="text-gray-500 font-semibold">Singh</span>
                </p>
            </div>
                <p className="text-left">
                    <a href="#" className="text-blue-500">View more details</a>
                </p>
            </div>
        </div>

</div>    
  );
};

export default AgentScreen;
