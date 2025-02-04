import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="container mx-auto my-8 items-center rounded-lg p-8">
      <ul className="mb-4 flex w-full items-center justify-center gap-2 p-4">
        <li>
          <NavLink
            className="bg-apple-500 rounded-full px-3 py-2 text-white duration-300 hover:bg-black"
            to={"./ProductsDashboard"}
          >
            Products Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="bg-apple-500 rounded-full px-3 py-2 text-white duration-300 hover:bg-black"
            to={"./EquipmentDashboard"}
          >
            Equipments Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            className="bg-apple-500 rounded-full px-3 py-2 text-white duration-300 hover:bg-black"
            to={"./SuppliesDashboard"}
          >
            Supplies Dashboard
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default DashboardLayout;
