import { MdSensors } from "react-icons/md";

import { NavLink, Outlet } from "react-router-dom";

import { GiField } from "react-icons/gi";
import { IoNotifications } from "react-icons/io5";

function Monitor() {
  return (
    <div className="container mx-auto mb-28 mt-6">
      <ul className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-4">
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex items-center justify-center gap-2 rounded-full px-3 py-2 duration-300 ${
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
              `flex items-center justify-center gap-2 rounded-full px-3 py-2 duration-300 ${
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
              `flex items-center justify-center gap-2 rounded-full px-3 py-2 duration-300 ${
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
    </div>
  );
}

export default Monitor;
