import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://wpassets.brainstation.io/app/uploads/2017/04/13100509/Netflix-Background.jpg"
          alt="Logo"
        />
      </div>
      <form className="w-3/12 absolute h-auto p-12 bg-black my-36 mx-auto right-o left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-2 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="p-4 my-2 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg cursor-pointer">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
