import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import logo from "../img/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [revealed, setRevealed] = useState(true);
  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  const togglePassword = () => {
    setRevealed(!revealed);
  };

  return (
    <div className="flex justify-around items-center bg-gradient-to-tr from-gray-800 to-blue-300 md:h-screen font-poppins">
      <form
        className="bg-black bg-opacity-5 p-6 rounded-md shadow-lg md:w-2/6 w-5/6 mx-10 mt-10 md:mt-0 h-screen md:h-5/6 scale-90"
        onSubmit={handleSubmit}
        id="login-page"
      >
        <h3 className="text-4xl font-bold text-center mb-10 p-2 border-b text-white uppercase">
          Log in
        </h3>

        <div className="my-7 text-xl text-purple-300">
          <label className="font-semibold">Email:</label>
          <div className="flex rounded w-full items-center bg-white p-1 mt-2">
            <input
              className="flex-auto border-0 outline-0 p-1 text-black w-full"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="my-7 text-xl text-purple-300">
          <label className="font-semibold">Password:</label>
          <div className="flex rounded w-full items-center bg-white p-1 mt-2">
            <input
              className="flex-1 p-1 border-0 outline-0 text-black w-full"
              type={revealed ? "password" : "text"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="cursor-pointer" onClick={togglePassword}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 me-2 text-blue-900 hover:scale-125 transition ease-in-out duration-300"
              >
                {revealed ? (
                  <>
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                      clipRule="evenodd"
                    />
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-6"
                    >
                      <path d="M18 1.5c2.9 0 5.25 2.35 5.25 5.25v3.75a.75.75 0 0 1-1.5 0V6.75a3.75 3.75 0 1 0-7.5 0v3a3 3 0 0 1 3 3v6.75a3 3 0 0 1-3 3H3.75a3 3 0 0 1-3-3v-6.75a3 3 0 0 1 3-3h9v-3c0-2.9 2.35-5.25 5.25-5.25Z" />
                    </svg>
                  </>
                )}
              </svg>
            </span>
          </div>
        </div>

        <div className="mx-auto text-center mt-10 mb-5">
          <button
            disabled={isLoading}
            className="text-xl text-center font-semibold cursor-pointer text-white border-0 rounded-md p-2 bg-purple-800 transition ease-out duration-500 hover:scale-125"
          >
            Log in
          </button>
        </div>
        {error && (
          <div className="text-amber-700 bg-gray-200 border-2 p-2 rounded-2xl w-fit">
            {error}
          </div>
        )}

        <div className="text-black bg-gray-200 rounded p-2 mb-0 mt-14">
          <p>
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-red-600 hover:underline font-semibold hover:font-bold"
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>

      <div className="md:animate-slowBounce hidden md:block">
        <img src={logo} alt="" width="600" height="600" />
      </div>
    </div>
  );
};

export default Login;
