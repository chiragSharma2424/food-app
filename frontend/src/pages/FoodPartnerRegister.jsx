function FoodPartnerRegister() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10">
        <h1 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-gray-100">
          Partner Registration
        </h1>


        <form className="flex flex-col space-y-5">
          <input type="text" placeholder="Restaurant Name" required
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

          <input type="text" placeholder="Owner Full Name" required
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

          <input type="tel" placeholder="Phone Number" required
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

          <input type="email" placeholder="Business Email" required
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

          <input type="password" placeholder="Password" required
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>

          <button type="submit"
            className="w-full px-4 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-200">
            Register
          </button>
        </form>


        <div className="text-sm mt-6 text-center">
          Already a partner?{" "}
          <a href="/partner/login" className="text-indigo-600 dark:text-indigo-400 hover:underline">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
}


export default FoodPartnerRegister;