import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import { Menu, MenuHandler, MenuList } from "@material-tailwind/react";
import english from "../images/language/1.jpg";
import arabic from "../images/language/2.jpg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderTop() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="bg-[#e4e4e7]/80 py-1">
      <div className="container mx-auto flex items-center justify-between text-xs sm:px-3">
        <div className="hidden text-sm text-gray-600 md:block">
          World&apos;s Fastest Online Shopping Destination
        </div>

        <div className="mx-auto flex justify-between gap-2 md:mx-0">
          {/* My Account */}
          <div>
            {isAuthenticated && (
              <Menu placement="bottom-start">
                <MenuHandler>
                  <span className="block cursor-pointer p-1 text-gray-600 hover:text-gray-900 focus:text-gray-900">
                    <UserIcon className="relative bottom-[2px] mr-1 inline-block size-4" />
                    <span className="text-sm">Account</span>
                    <ChevronDownIcon
                      strokeWidth={2.5}
                      className="relative bottom-[1px] ml-1 inline-block size-4"
                    />
                  </span>
                </MenuHandler>
                <MenuList className="left-0 min-w-32 border-b-2 border-b-apple-500">
                  <ul className="outline-none">
                    <li className="group cursor-pointer outline-none">
                      <NavLink
                        to="account/signin"
                        className="block px-0 py-1 outline-none group-hover:text-apple-500"
                      >
                        Sign in
                      </NavLink>
                    </li>
                    <li className="group cursor-pointer outline-none">
                      <NavLink
                        to="account/register"
                        className="block px-0 py-1 outline-none group-hover:text-apple-500"
                      >
                        Register
                      </NavLink>
                    </li>
                  </ul>
                </MenuList>
              </Menu>
            )}
          </div>
          {/* Currency */}
          <div>
            <Menu placement="bottom-start">
              <MenuHandler>
                <span className="block cursor-pointer p-1 text-gray-600 hover:text-gray-900 focus:text-gray-900">
                  <span className="text-sm">Currency</span>
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className="relative bottom-[1px] ml-1 inline-block size-4"
                  />
                </span>
              </MenuHandler>
              <MenuList className="left-0 min-w-32 border-b-2 border-b-apple-500">
                <ul className="outline-none">
                  <li className="group cursor-pointer px-0 py-1 outline-none">
                    <a className="outline-none group-hover:text-apple-500">
                      € EUR
                    </a>
                  </li>
                  <li className="group cursor-pointer px-0 py-1 outline-none">
                    <a className="outline-none group-hover:text-apple-500">
                      $ USD
                    </a>
                  </li>
                </ul>
              </MenuList>
            </Menu>
          </div>
          {/* Language */}
          <div>
            <Menu placement="bottom-start">
              <MenuHandler>
                <span className="block cursor-pointer p-1 text-gray-600 hover:text-gray-900 focus:text-gray-900">
                  <span className="text-sm">Language</span>
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className="relative bottom-[1px] ml-1 inline-block size-4"
                  />
                </span>
              </MenuHandler>
              <MenuList className="left-0 min-w-32 border-b-2 border-b-apple-500">
                <ul className="outline-none">
                  <li className="group cursor-pointer px-0 py-1 outline-none">
                    <a className="outline-none group-hover:text-apple-500">
                      <img
                        src={english}
                        alt="english icon"
                        className="relative bottom-[1px] inline-block"
                      />
                      <span className="ml-2 inline-block">English</span>
                    </a>
                  </li>
                  <li className="group cursor-pointer px-0 py-1 outline-none">
                    <a className="outline-none group-hover:text-apple-500">
                      <img
                        src={arabic}
                        alt="arabic icon"
                        className="relative bottom-[1px] inline-block"
                      />
                      <span className="ml-2 inline-block">العربية</span>
                    </a>
                  </li>
                </ul>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderTop;
