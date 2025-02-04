import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInForm({ className }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className={className}>
      <h2 className="text-center text-4xl">Sign In</h2>
      <label>
        Email
        <input
          type="text"
          name="email"
          className="hover:border-b-apple-500 focus:border-b-apple-500 block w-full border-b-2 px-3 py-2 outline-none duration-300"
        />
      </label>
      <label>
        Password
        <div className="flex">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            className="hover:border-b-apple-500 focus:border-b-apple-500 block w-full border-b-2 px-3 py-2 outline-none duration-300"
          />
          <button
            type="button"
            className="bg-apple-500 rounded-sm p-1 text-white duration-300 hover:bg-black"
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
        className="bg-apple-500 rounded-xl py-3 text-sm font-semibold uppercase text-white duration-300 hover:bg-black focus:bg-black active:translate-y-1"
      >
        sign in
      </button>

      <div>
        <Link
          to="/account/forgotPassword"
          className="hover:text-apple-500 cursor-pointer capitalize text-gray-900 duration-300"
        >
          forget your password?
        </Link>
      </div>
    </form>
  );
}

SignInForm.propTypes = { className: propTypes.string };
