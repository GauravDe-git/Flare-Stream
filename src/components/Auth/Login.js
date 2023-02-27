import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserLocalPersistence } from "firebase/auth";
import { fireBaseApp } from "../../Firebase";
import { useNavigate } from "react-router-dom";
import { setAuthUser } from "./authSlice";
import { useDispatch } from "react-redux";


const Login = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth(fireBaseApp);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        dispatch(setAuthUser(userCredential.user.uid));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid login info")
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form className="space-y-4" onSubmit={loginSubmit}>
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              value={email}
              onChange={(e) => SetEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm font-medium">
              Remember me
            </label>
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Login
            </button>
            <div className="text-sm">
              <a href="#" className="text-blue-500 hover:underline">
                Enter Guest Credentials
              </a>
              <span className="mx-2">|</span>
              <Link to="/signup" className="text-blue-500 hover:underline">
                Create an account
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
