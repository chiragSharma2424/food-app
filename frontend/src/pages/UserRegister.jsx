import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';

function UserRegister() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function userRegister() {
    axios.post('http://localhost:3000/api/auth/user/register', {
      fullName,
      email,
      password
    });
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-4">
      <h1 className="text-3xl font-bold mb-8 text-indigo-600 dark:text-indigo-400">
        Create Account
      </h1>

      <form className="w-full max-w-md flex flex-col space-y-4">
        <input type="text" placeholder="Full Name" required id='fname'
           onChange={(e) => {
            setFullName(e.target.value);
           }}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

        <input type="email" placeholder="Email" required
           onChange={(e) => {
            setEmail(e.target.value);
           }}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

        <input type="password" placeholder="Password"  required
           onChange={(e) => {
            setPassword(e.target.value);
           }}
          className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

        <button type="submit"
          className="px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-200">
          Register
        </button>

      </form>

      <div className="text-sm mt-6">
        Already have an account?{" "}
        <a href="" className="text-indigo-600 dark:text-indigo-400 hover:underline" onClick={() => {
          navigate('/user/login');
        }}>
          Login
        </a>
      </div>
    </div>
  );
}

export default UserRegister