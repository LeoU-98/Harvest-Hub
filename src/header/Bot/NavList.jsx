import { NavLink } from "react-router-dom";
import NestedNavMenu from "./NestedNavMenu";
import { useSelector } from "react-redux";
import propTypes from "prop-types";

export default function NavList({ setOpenNav, type }) {
  const { user } = useSelector((state) => state.auth);

  function handleClose() {
    if (type === "desktop") return;
    setOpenNav(false);
  }
  return (
    <nav>
      <ul className="flex min-w-[240px] select-none flex-col gap-4 px-4 py-4 font-sans text-base font-normal text-blue-gray-700 lg:flex-row lg:items-center lg:gap-7 lg:px-0 lg:py-2">
        <li>
          <NavLink
            onClick={handleClose}
            to="/Harvest-Hub/"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            home
          </NavLink>
        </li>

        <li>
          <NestedNavMenu handlerText={"store"} onClose={handleClose} />
        </li>

        {user?.role === "admin" && (
          <li>
            <NavLink
              onClick={handleClose}
              to="/Harvest-Hub/dashboard/products-dashboard"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              Dashboard
            </NavLink>
          </li>
        )}

        <li>
          <NavLink
            onClick={handleClose}
            to="/Harvest-Hub/blog"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            Blog
          </NavLink>
        </li>
        {(user?.role === "merchant" ||
          user?.role === "customer" ||
          user?.role === "admin") && (
          <li>
            <NavLink
              onClick={handleClose}
              to="/Harvest-Hub/monitor/field-details"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              Monitor
            </NavLink>
          </li>
        )}

        {(user?.role === "merchant" ||
          user?.role === "customer" ||
          user?.role === "admin") && (
          <li>
            <NavLink
              onClick={handleClose}
              to="/Harvest-Hub/auctions/list"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              Auction
            </NavLink>
          </li>
        )}
        {user?.role === "admin" && (
          <li>
            <NavLink
              onClick={handleClose}
              to="/Harvest-Hub/control-center/manage-users"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              Control Center
            </NavLink>
          </li>
        )}
        {(user?.role === "merchant" || user?.role === "admin") && (
          <li>
            <NavLink
              onClick={handleClose}
              to="/Harvest-Hub/manage-products"
              className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
            >
              Manage Products
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

NavList.propTypes = {
  setOpenNav: propTypes.func,
  type: propTypes.string,
};
