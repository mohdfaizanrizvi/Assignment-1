import React, { useState } from 'react';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registering:', { name, email, password, rememberMe });
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-blue-800">
      <div className="bg-white p-12 pb-6   rounded-3xl shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-6 pt-4 font-semibold text-center">Create Account</h2>
        <form onSubmit={handleRegister}>
          <div className="mb-6">
            <label htmlFor="name" className="block font-semibold mb-2 ">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-4 rounded-md border-2 border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-10">
            <label htmlFor="remember" className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="mr-2"
              />
              <span>Remember me</span>
            </label>
          </div>
          <button type="submit" className="bg-blue-700 text-white py-4 px-4 font-semibold rounded-md w-full mb-4">
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4 pt-2">
        Already have an account? <a href="/" className='text-blue-700'>Login</a>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
