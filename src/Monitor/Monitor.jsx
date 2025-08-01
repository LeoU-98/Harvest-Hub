import { MdSensors } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";

import { GiField } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";

function Monitor() {
  return (
    <main className="container mx-auto pt-16">
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
            to={"./field-details"}
          >
            <GiField className="size-6" />
            Field Details
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
            to={"./sensor-analytics"}
          >
            <MdSensors className="size-6" />
            Sensor Analytics
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
            to={"./notification-alerts"}
          >
            <IoNotifications className="size-6" />
            Notifications
          </NavLink>
        </li>
      </ul>

      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90">
        <Outlet />
      </div>
    </main>
  );
}

export default Monitor;
