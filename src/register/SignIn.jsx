import SignInForm from "./SignInForm";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl md:flex-row">
      <SignInForm className="flex basis-1/2 flex-col gap-5 bg-white px-5 py-6" />
      <SignInGreeting />
    </div>
  );
}

export default SignIn;

function SignInGreeting() {
  return (
    <div className="flex shrink-0 grow-0 basis-1/2 flex-col items-center justify-center gap-4 bg-gradient-to-tr from-[#0ea5e9] from-10% to-apple-400 to-90% px-4 py-14 text-gray-100 sm:px-8 md:px-4">
      <h3 className="text-2xl">Welcome Back 😊</h3>
      <p className="text-center">
        Welcome back We are so happy to have you here. it&apos;s great to see
        you again. We hope you had a safe and enjoyable time away.
      </p>
      <Link
        className="rounded-full bg-white/20 px-3 py-2 duration-500 hover:translate-x-1 hover:translate-y-1 hover:text-gray-900"
        to="/Harvest-Hub/account/register"
      >
        No account yet? Signup.
      </Link>
    </div>
  );
}
