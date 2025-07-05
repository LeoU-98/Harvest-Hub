import { NavLink, Outlet } from "react-router-dom";
import { LiaBlogSolid } from "react-icons/lia";
import { FaUsers } from "react-icons/fa";

export default function ControlCenter() {
  return (
    <div className="container mx-auto items-center rounded-lg pt-16">
      <ul className="mb-4 flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 md:flex-row">
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex w-72 items-center justify-center gap-2 rounded-full px-5 py-2 duration-300 md:w-auto ${
                isActive
                  ? "bg-black text-white"
                  : "bg-apple-500 text-white hover:bg-black"
              }`
            }
            to={"./manage-users"}
          >
            <FaUsers className="size-6" />
            Manage Users
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              `flex w-72 items-center justify-center gap-2 rounded-full px-5 py-2 duration-300 md:w-auto ${
                isActive
                  ? "bg-black text-white"
                  : "bg-apple-500 text-white hover:bg-black"
              }`
            }
            to={"./manage-blogs"}
          >
            <LiaBlogSolid className="size-6" />
            Manage Blogs
          </NavLink>
        </li>
      </ul>

      <div className="rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 px-6 py-5">
        <Outlet />
      </div>
    </div>
  );
}
