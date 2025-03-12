import { FcGoogle } from "react-icons/fc";
import { useAuth0 } from "@auth0/auth0-react";
import real from "../../assets/images/real.png"


function Login() {
  const { loginWithRedirect } = useAuth0();
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };
  return (
    <>
      <div style={{
        backgroundImage: `url(${real})`
      }} className="h-[665px] bg-gray-50 py-10 bg-cover justify-center ">
        <div className="mx-auto w-full max-w-md">
          <form
            onSubmit={handleSubmit}
            className="bg-white py-8 z shadow rounded-lg px-10"
          >
            <h1 className="text-center text-2xl font-semibold text-gray-900 mb-8">
              Sign in to your account
            </h1>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Enter your email"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  placeholder="Password"
                  className=" block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Sign In
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>

              <button onClick={() => {
                loginWithRedirect()
              }}
                type="button"
                className="w-full gap-2 inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                <FcGoogle /> Continue with Google
              </button>

              <p className="text-sm ">By clicking <span className="text-blue-700 underline">“Sign Up”</span> you agree to our Term of use and our <span className="text-blue-700 underline">Privacy Policy</span>.</p>

              <div className="text-center hover:underline hover:text-blue-700">
                <button className="">Forgot Password?</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
