import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../profile/profileSlice";
import { Link } from "react-router-dom";

export default function SignInForm({ className }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleCredentialsEntry = (e) => {
    const { name, value } = e.target;

    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^123.*/;

    const { email, password } = userCredentials;

    if (!emailRegex.test(email)) {
      console.log("❌ Invalid email format.");
    } else if (!passwordRegex.test(password)) {
      console.log('❌ Password must start with "123".');
    } else {
      dispatch(logIn({ logged: true, email, password }));
      console.log("✅ Login successful!");
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h2 className="text-center text-4xl">Sign In</h2>
      <label>
        Email
        <input
          type="text"
          name="email"
          value={userCredentials.email}
          onChange={(e) => handleCredentialsEntry(e)}
          className="block w-full border-b-2 px-3 py-2 outline-none duration-300 hover:border-b-apple-500 focus:border-b-apple-500"
        />
      </label>
      <label>
        Password
        <div className="flex">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={userCredentials.password}
            onChange={(e) => handleCredentialsEntry(e)}
            className="block w-full border-b-2 px-3 py-2 outline-none duration-300 hover:border-b-apple-500 focus:border-b-apple-500"
          />
          <button
            type="button"
            className="rounded-sm bg-apple-500 p-1 text-white duration-300 hover:bg-black"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeSlashIcon className="h-6 w-7" />
            ) : (
              <EyeIcon className="h-6 w-7" />
            )}
          </button>
        </div>
      </label>
      <button
        type="submit"
        className="rounded-xl bg-apple-500 py-3 text-sm font-semibold uppercase text-white duration-300 hover:bg-black focus:bg-black active:translate-y-1"
      >
        sign in
      </button>

      <div>
        <Link
          to="/account/forgotPassword"
          className="cursor-pointer capitalize text-gray-900 duration-300 hover:text-apple-500"
        >
          forget your password?
        </Link>
      </div>
    </form>
  );
}

SignInForm.propTypes = { className: propTypes.string };
