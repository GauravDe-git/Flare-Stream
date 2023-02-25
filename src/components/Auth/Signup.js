import React, {useState} from "react";
import { Link } from "react-router-dom";
import { fireBaseApp } from "../../Firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Signup = () => {

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const signUpSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth(fireBaseApp);

        if (password.length < 6) {
            window.alert("Password must be at least 6 characters long.");
            return;
          }

        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            console.log(userCredential);
          })
          .catch((error) => {
            console.log(error);
          });
      };

  return (
    <div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Create New Account
          </h1>
          <form className="space-y-4" onSubmit={signUpSubmit}>
            {/* <div>
              <label htmlFor="firstName" className="block font-semibold mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block font-semibold mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div> */}
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
            {/* <div>
              <label
                htmlFor="confirmPassword"
                className="block font-semibold mb-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div> */}
            <div className="flex items-center">
              <input
                type="checkbox"
                name="termsAndConditions"
                id="termsAndConditions"
                className="mr-2"
              />
              <label
                htmlFor="termsAndConditions"
                className="text-sm font-medium"
              >
                I accept the terms and conditions
              </label>
            </div>
            <div className="flex justify-between items-center">
              <button
                type="submit"
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Create Account
              </button>
              <div className="text-sm">
                <span>Already have an account? </span>
                <Link to="/login" className="text-blue-500 hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
