import { NavLink, Outlet } from "react-router-dom";

import { MdProductionQuantityLimits } from "react-icons/md";
import { GiToolbox } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";

function DashboardLayout() {
  return (
    <main className="container mx-auto items-center rounded-lg pt-16">
      <ul className="mb-4 flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 md:flex-row">
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex w-72 items-center justify-center gap-2 rounded-full px-3 py-2 duration-300 md:w-auto ${
                isActive
                  ? "bg-black text-white"
                  : "bg-apple-500 text-white hover:bg-black"
              }`
            }
            to={"./products-dashboard"}
          >
            <MdProductionQuantityLimits className="size-6" />
            Products Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex w-72 items-center justify-center gap-2 rounded-full px-3 py-2 duration-300 md:w-auto ${
                isActive
                  ? "bg-black text-white"
                  : "bg-apple-500 text-white hover:bg-black"
              }`
            }
            to={"./equipment-dashboard"}
          >
            <GiToolbox className="size-6" />
            Equipments Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex w-72 items-center justify-center gap-2 rounded-full px-3 py-2 duration-300 md:w-auto ${
                isActive
                  ? "bg-black text-white"
                  : "bg-apple-500 text-white hover:bg-black"
              }`
            }
            to={"./supplies-dashboard"}
          >
            <TfiPackage className="size-6" />
            Supplies Dashboard
          </NavLink>
        </li>
      </ul>
      <div className="rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-500/80 p-4">
        <Outlet />
      </div>
    </main>
  );
}

export default DashboardLayout;
