import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if email and password are filled
    if (!email || !password) {
      // If any of the fields are empty, return and do not proceed with login
      alert('Please fill in both email and password fields');
      return;
    }
    // Handle login logic here
    console.log('Logging in:', { email, password });
  
    // Redirect to Facebook Integration Page
    navigate('/facebook-integration');
  };

  return (
    <div className="h-screen flex justify-center items-center bg-blue-800">
      <div className="bg-white p-12 pb-8 rounded-3xl shadow-md max-w-md w-full">
        <h2 className="text-2xl mb-6 font-semibold text-center">Login to your account</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none"
            />
          </div>
          <div className="mb-10">
            <label htmlFor="remember" className="flex items-center pb-4">
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
          <button type="submit" className="bg-blue-700 text-white py-4 px-4 rounded-md w-full">
            Login
          </button>
        </form>
        <div className="text-center pt-8">
          New to MyApp? <a href="/register" className='text-cyan-800'>Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
