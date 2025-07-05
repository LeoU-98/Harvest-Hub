import propTypes from "prop-types";

export default function SidebarTabs({ activeTab, setActiveTab }) {
  const tabs = [
    { key: "create", label: "Create Blog", color: "green" },
    { key: "remove", label: "Remove Blog", color: "red" },
    { key: "edit", label: "Edit Blog", color: "blue" },
  ];

  return (
    <div className="w-full space-y-4 rounded-2xl bg-black/15 p-4 shadow-md lg:w-48">
      {tabs.map(({ key, label, color }) => (
        <button
          key={key}
          onClick={() => setActiveTab(key)}
          className={`block w-full rounded-full px-5 py-5 text-center text-sm font-semibold duration-300 ${
            activeTab === key
              ? `bg-${color}-500 text-white`
              : `bg-white text-black hover:bg-${color}-500 hover:text-white`
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
