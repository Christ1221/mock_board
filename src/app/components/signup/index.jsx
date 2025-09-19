// File: pages/signup.tsx

export default function Sign_Up() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h1>
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Create Account
          </button>
        </form>

        {/* Link to Log In */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}
