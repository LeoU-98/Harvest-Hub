import { NavLink, Outlet } from "react-router-dom";

import { MdProductionQuantityLimits } from "react-icons/md";
import { GiToolbox } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";

function DashboardLayout() {
  return (
    <main className="container mx-auto items-center rounded-lg pt-16">
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
            to={"./ProductsDashboard"}
          >
            <MdProductionQuantityLimits className="size-6" />
            Products Dashboard
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
            to={"./EquipmentDashboard"}
          >
            <GiToolbox className="size-6" />
            Equipments Dashboard
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
            to={"./SuppliesDashboard"}
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
