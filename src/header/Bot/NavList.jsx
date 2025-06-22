import { NavLink } from "react-router-dom";
import NestedNavMenu from "./NestedNavMenu";

export default function NavList() {
  return (
    <nav>
      <ul className="flex min-w-[240px] select-none flex-col gap-4 px-4 py-4 font-sans text-base font-normal text-blue-gray-700 lg:flex-row lg:items-center lg:gap-7 lg:px-0 lg:py-2">
        <li>
          <NavLink
            to="/"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            home
          </NavLink>
        </li>
        <li>
          <NestedNavMenu handlerText={"store"} />
        </li>
        <li>
          <NavLink
            to="Dashboard/ProductsDashboard"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink
            to="blog"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="monitor/field-details"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            Monitor
          </NavLink>
        </li>
        <li>
          <NavLink
            to="auctions/list"
            className="middle-underline block h-full w-full text-nowrap text-sm font-semibold uppercase text-gray-700 after:mt-0 hover:text-green-500 hover:after:w-full"
          >
            Auction
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
