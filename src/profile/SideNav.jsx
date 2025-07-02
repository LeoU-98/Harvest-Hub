import {
  ArchiveBoxXMarkIcon,
  KeyIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import { BsInfoLg } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const navData = [
  {
    path: "basic-info",

    icon: <BsInfoLg className="size-6" />,
    title: "Basic Info",
  },
  {
    path: "profile-info",
    icon: <UserIcon className="size-6" />,
    title: "Profile Info",
  },

  {
    path: "change-password",
    icon: <KeyIcon className="size-6" />,
    title: "Change Password",
  },
  {
    path: "deactivate-account",
    icon: <ArchiveBoxXMarkIcon className="size-6" />,
    title: "Deactivate Account",
  },
];

function SideNav() {
  return (
    <aside className="mt-5 basis-[20%] rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90">
      <nav className="">
        <ul className="p-6">
          {navData.map((page, key) => (
            <NavIcon data={page} key={key} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default SideNav;

function NavIcon({ data }) {
  const { path, icon, title } = data;

  return (
    <li
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group relative mb-3 cursor-pointer py-2"
    >
      <div className="absolute top-1/2 h-0 w-0 -translate-y-1/2 rounded-br-2xl rounded-tl-2xl bg-white [transition:_width_0.3s,height_0.4s_cubic-bezier(1,-0.05,.56,.69)] group-hover:h-full group-hover:w-full"></div>
      <NavLink
        to={path}
        className="relative z-50 flex items-center gap-2 px-4 text-white group-hover:text-green-500"
      >
        {icon}
        <span className="font-bold">{title}</span>
      </NavLink>
    </li>
  );
}

NavIcon.propTypes = {
  data: propTypes.object,
};
