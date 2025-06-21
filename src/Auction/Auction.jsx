// AuctionListingsPage.jsx

import { NavLink, Outlet } from "react-router-dom";

import { MdFormatListBulleted, MdFormatListBulletedAdd } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";

export default function Auction() {
  return (
    <div className="container mx-auto mb-14 mt-2 items-center rounded-lg p-8">
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
            to={"./list"}
          >
            <MdFormatListBulleted className="size-6" />
            Auction List
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
            to={"./my-auctions"}
          >
            <RiAuctionLine className="size-6" />
            My Auctions
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
            to={"./new"}
          >
            <MdFormatListBulletedAdd className="size-6" />
            Create Auction
          </NavLink>
        </li>
      </ul>

      <div className="rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 px-6 py-5">
        <Outlet />
      </div>
    </div>
  );
}
