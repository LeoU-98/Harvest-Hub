import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "./authSlice";

export default function SignInForm({ className }) {
  const [showPassword, setShowPassword] = useState(false);
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);

  const handleCredentialsEntry = (e) => {
    const { name, value } = e.target;

    setUserCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/Harvest-Hub/"); // or any protected route
    }
  }, [isAuthenticated, navigate]);

  return (
    <form className={className} onSubmit={handleSubmit}>
      <h2 className="text-center text-4xl">Sign In</h2>
      <label>
        Email
        <input
          required
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
            required
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
      {authError && <p className="text-red-500">{authError}</p>}
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
