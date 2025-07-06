// AuctionListingsPage.jsx

import { NavLink, Outlet } from "react-router-dom";

import { MdFormatListBulleted, MdFormatListBulletedAdd } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { BiDollar } from "react-icons/bi";
import { useSelector } from "react-redux";

export default function Auction() {
  const { user } = useSelector((state) => state.auth);
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
            to={"./list"}
          >
            <MdFormatListBulleted className="size-6" />
            Auction List
          </NavLink>
        </li>

        {(user?.role === "merchant" || user?.role === "admin") && (
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex w-72 items-center justify-center gap-2 rounded-full px-5 py-2 duration-300 md:w-auto ${
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
        )}
        {(user?.role === "merchant" || user?.role === "admin") && (
          <li>
            <NavLink
              className={({ isActive }) =>
                `flex w-72 items-center justify-center gap-2 rounded-full px-5 py-2 duration-300 md:w-auto ${
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
        )}
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex w-72 items-center justify-center gap-2 rounded-full px-5 py-2 duration-300 md:w-auto ${
                isActive
                  ? "bg-black text-white"
                  : "bg-apple-500 text-white hover:bg-black"
              }`
            }
            to={"./my-bids"}
          >
            <BiDollar className="size-6" />
            My Bids
          </NavLink>
        </li>
      </ul>

      <div className="rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 px-6 py-5">
        <Outlet />
      </div>
    </div>
  );
}
