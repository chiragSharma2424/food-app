import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function UserLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        
        <div className="flex flex-col space-y-4">
          <input type="email" placeholder="Email" required
            onChange={(e) => {
               setEmail(e.target.value);
            }}
            className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          
          <input type="password" placeholder="Password" required 
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
          
          <button 
            className="px-4 py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-200"
                onClick={() => {
                  axios.post('http://localhost:3000/api/auth/user/login', {
                    email,
                    password
                  }, {
                    withCredentials: true
                  }).then((resp) => {
                    console.log(resp.data);
                    navigate('/')
                  })
                }}
            >
            Login
          </button>
        </div>
        
        <div className="text-center text-sm mt-4">
          Don’t have an account?{" "}
          <a href="" className="text-indigo-600 dark:text-indigo-400 hover:underline" onClick={() => {
            navigate('/user/register');
          }}>
            Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;