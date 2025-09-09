import { useNavigate } from 'react-router-dom';

function FoodPartnerLogin() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex">

      <div className="hidden md:flex w-1/2 bg-indigo-600 text-white flex-col items-center justify-center p-10">
        <h1 className="text-4xl font-bold mb-4">Partner with Us</h1>
        <p className="text-lg max-w-sm text-center opacity-90">
          Manage your restaurant, reach more customers, and grow your business.
        </p>
      </div>

     
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 dark:bg-gray-900 px-6">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
            Food Partner Login
          </h2>

          <form className="flex flex-col space-y-4">
            <input type="email" placeholder="Business Email" required
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

            <input type="password"placeholder="Password" required 
              className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

            <button type="submit"
              className="w-full px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-200">
              Login
            </button>
          </form>

                 
          <div className="text-sm mt-6 text-center">
            New partner?{" "}
          <a href="" className="text-indigo-600 dark:text-indigo-400 hover:underline" onClick={() => {
            navigate('/food-partner/register')
          }}>
              Register here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodPartnerLogin;