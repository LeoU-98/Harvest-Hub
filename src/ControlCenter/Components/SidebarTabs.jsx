import propTypes from "prop-types";

export default function SidebarTabs({ activeTab, setActiveTab }) {
  const tabs = [
    {
      key: "create",
      label: "Create Blog",
      hover: "hover:bg-green-500  hover:text-white",
      active: "bg-green-500  text-white",
    },
    {
      key: "remove",
      label: "Remove Blog",
      hover: "hover:bg-red-500  hover:text-white",
      active: "bg-red-500  text-white",
    },
    {
      key: "edit",
      label: "Edit Blog",
      hover: "hover:bg-blue-500  hover:text-white",
      active: "bg-blue-500  text-white",
    },
  ];

  return (
    <div className="w-full space-y-4 rounded-2xl bg-black/15 p-4 shadow-md lg:w-48">
      {tabs.map(({ key, label, hover, active }) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`block w-full rounded-full px-5 py-5 text-center text-sm font-semibold duration-300 ${
            activeTab === key ? ` ${active}` : `bg-white text-black ${hover}`
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

SidebarTabs.propTypes = {
  activeTab: propTypes.string,
  setActiveTab: propTypes.func,
};
