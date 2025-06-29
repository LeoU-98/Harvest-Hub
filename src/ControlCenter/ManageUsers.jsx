// ManageUsersPage.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FiAlertTriangle } from "react-icons/fi";
import propTypes from "prop-types";

// Dummy user data
const dummyUser = {
  id: "user123",
  name: "Mohamed Hamdy",
  email: "mohamed@example.com",
  role: "Admin",
  status: "Active",
  image: "/leou.jpg",
};

export default function ManageUsers() {
  const [searchId, setSearchId] = useState("");
  const [user, setUser] = useState(null);
  const [modalType, setModalType] = useState(null);
  const modalRef = useRef(null);

  const handleSearch = () => {
    if (searchId.trim() === dummyUser.id) {
      setUser(dummyUser);
    } else {
      setUser(null);
    }
  };

  const closeModal = () => setModalType(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (modalType) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalType]);

  return (
    <div className="min-h-[600px] p-5">
      <h2 className="mb-6 text-3xl font-bold text-white">Manage Users</h2>

      <div className="mb-8 flex gap-3 rounded-2xl bg-white p-10">
        <input
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter User ID"
          className="flex-1 rounded-full px-3 py-2 outline-none ring-2 ring-gray-400 focus:ring-green-500"
        />
        <button
          onClick={handleSearch}
          className="rounded-full bg-green-500 px-5 py-1 font-medium text-white duration-300 hover:bg-black"
        >
          Search
        </button>
      </div>

      {user ? (
        <div className="mx-auto max-w-xl rounded-2xl border bg-white p-6 text-gray-800 shadow-lg">
          <div className="flex items-center justify-center">
            <img
              src={user.image}
              alt={user.name}
              className="h-32 w-32 rounded-full object-cover"
            />
          </div>
          <div className="mt-4 space-y-2 text-center">
            <h3 className="text-2xl font-semibold">{user.name}</h3>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">Role: {user.role}</p>
            <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              {user.status}
            </span>
          </div>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => setModalType("ban")}
              className="rounded-md bg-yellow-500 px-5 py-2 text-white hover:bg-yellow-600"
            >
              Ban User
            </button>
            <button
              onClick={() => setModalType("remove")}
              className="rounded-md bg-red-600 px-5 py-2 text-white hover:bg-red-700"
            >
              Remove User
            </button>
          </div>
        </div>
      ) : (
        searchId && (
          <p className="mt-10 text-center text-red-600">User not found.</p>
        )
      )}

      <ManageUserModal
        user={user}
        modalType={modalType}
        modalRef={modalRef}
        closeModal={closeModal}
      />
    </div>
  );
}

function ManageUserModal({ user, modalType, modalRef, closeModal }) {
  return (
    <AnimatePresence>
      {user && modalType && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className={`relative w-full max-w-md rounded-xl p-6 text-white ${
              modalType === "ban"
                ? "bg-gradient-to-r from-yellow-600 to-yellow-500"
                : "bg-gradient-to-r from-red-600 to-orange-500"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 text-xl font-bold">
              {modalType === "ban" ? "Ban User" : "Remove User"}
            </div>

            <div className="mb-4 flex items-center gap-3 rounded-md bg-white/20 p-4 text-white">
              <FiAlertTriangle className="text-3xl" />
              <p>
                Are you sure you want to{" "}
                <strong>{modalType === "ban" ? "ban" : "remove"}</strong>{" "}
                <span className="text-yellow-100">{user.name}</span>? This
                action is irreversible.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="rounded-md border border-white px-4 py-2 hover:bg-white/20"
              >
                Cancel
              </button>
              <button className="rounded-md bg-white px-4 py-2 text-sm font-semibold text-red-600 hover:bg-gray-100">
                Confirm
              </button>
            </div>

            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-white hover:rotate-180"
            >
              <XMarkIcon className="w-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ManageUserModal.propTypes = {
  user: propTypes.object,
  modalType: propTypes.string,
  modalRef: propTypes.string,
  closeModal: propTypes.func,
};
