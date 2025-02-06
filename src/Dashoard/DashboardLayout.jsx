import { NavLink, Outlet } from "react-router-dom";

import { MdProductionQuantityLimits } from "react-icons/md";
import { GiToolbox } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";

function DashboardLayout() {
  return (
    <div className="container mx-auto my-8 items-center rounded-lg p-8">
      <ul className="mb-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white p-4">
        <li>
          <NavLink
            className="flex items-center justify-center gap-2 rounded-full bg-apple-500 px-3 py-2 text-white duration-300 hover:bg-black"
            to={"./ProductsDashboard"}
          >
            <MdProductionQuantityLimits className="size-6" />
            Products Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center justify-center gap-2 rounded-full bg-apple-500 px-3 py-2 text-white duration-300 hover:bg-black"
            to={"./EquipmentDashboard"}
          >
            <GiToolbox className="size-6" />
            Equipments Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="flex items-center justify-center gap-2 rounded-full bg-apple-500 px-3 py-2 text-white duration-300 hover:bg-black"
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
    </div>
  );
}

export default DashboardLayout;
