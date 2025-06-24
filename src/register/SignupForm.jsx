import { CheckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function SignupForm() {
  return (
    <form className="flex w-fit basis-3/5 flex-col gap-2 bg-white p-5 pt-8">
      <h3 className="mb-4 text-center text-3xl text-gray-900">Sign Up</h3>

      {/* Name */}
      <div className="flex justify-between gap-5">
        <label className="flex-grow">
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="Mohamed"
            className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-apple-500"
            required
          />
        </label>
        <label className="flex-grow">
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Hamdy"
            className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-apple-500"
            required
          />
        </label>
      </div>

      {/* Email */}
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="merchant@example.com"
          className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-apple-500"
          required
        />
      </label>

      {/* Password */}
      <label>
        Password
        <input
          type="password"
          name="password"
          className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-apple-500"
          required
        />
      </label>

      <label>
        Confirm Password
        <input
          type="password"
          name="confirmPassword"
          className="block w-full border-b-2 px-2 py-1 outline-none focus:border-b-apple-500"
          required
        />
      </label>

      {/* Policy Agreement */}
      <div className="mb-4 mt-5">
        <label className="cursor-pointer select-none">
          <div className="relative top-[2px] mr-1 inline-flex">
            <input
              type="checkbox"
              name="policy"
              className="peer relative h-4 w-4 shrink-0 appearance-none rounded-sm border-[1px] border-apple-500 bg-white checked:border-0 checked:bg-apple-500"
              required
            />
            <CheckIcon className="absolute hidden size-4 stroke-[3px] font-bold text-white peer-checked:block" />
          </div>
          By creating an account, you agree to our{" "}
          <a className="text-apple-500 underline hover:text-apple-400">Terms</a>{" "}
          and acknowledge our{" "}
          <a className="text-apple-500 underline hover:text-apple-400">
            Global Privacy Statement
          </a>
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="rounded-xl bg-apple-500 py-4 text-sm font-semibold uppercase text-white outline-none duration-300 hover:bg-black"
      >
        sign up
      </button>

      {/* Divider */}
      <div className="relative my-5 h-[1px] bg-gray-300">
        <div className="absolute left-1/2 top-1/2 flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
          or
        </div>
      </div>

      <p className="text-center text-gray-800">
        Already have an account?{" "}
        <Link
          to="/account/signin"
          className="text-gray-900 duration-300 hover:text-apple-500"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
}
