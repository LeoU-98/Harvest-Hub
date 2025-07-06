// ManageUsersPage.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FiAlertTriangle } from "react-icons/fi";
import propTypes from "prop-types";

// Dummy user data
const dummyUser = {
  id: "user123",
  name: "Ahmed",
  email: "ahmed@harvesthub.com",
  role: "Merchant",
  status: "Active",
  image: `${import.meta.env.BASE_URL}users/merchant.jpg`,
};

export default function ManageUsers() {
  const [searchId, setSearchId] = useState("");
  const [user, setUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const handleSearch = () => {
    if (searchId.trim() === dummyUser.email) {
      setUser(dummyUser);
    } else {
      setUser(null);
    }
  };

  const closeModal = () => setIsModalOpen(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-[600px] p-5">
      <h2 className="mb-6 text-3xl font-bold text-white">Manage Users</h2>

      <div className="mb-8 flex flex-col gap-3 rounded-2xl bg-white p-10 px-5 sm:flex-row sm:px-10">
        <input
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          placeholder="Enter User Email"
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
              onClick={() => setIsModalOpen(true)}
              className="rounded-full bg-red-600 px-5 py-2 text-white duration-300 hover:bg-black"
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
        isModalOpen={isModalOpen}
        modalRef={modalRef}
        closeModal={closeModal}
      />
    </div>
  );
}

function ManageUserModal({ user, isModalOpen, modalRef, closeModal }) {
  return (
    <AnimatePresence>
      {user && isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-md rounded-xl bg-gradient-to-r from-red-600 to-orange-500 p-6 text-white"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
          >
            <div className="mb-4 text-xl font-bold">Remove User</div>
            <div className="rounded-2xl bg-white px-3 py-5">
              <div className="mb-4 flex items-center gap-3 rounded-2xl p-4 text-gray-900 shadow-lg">
                <FiAlertTriangle className="text-5xl text-red-500" />
                <p>
                  Are you sure you want to <strong>remove</strong>{" "}
                  <span className="text-red-500">{user.name}</span>? This action
                  is irreversible.
                </p>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="rounded-full border border-white bg-green-500 px-4 py-2 duration-300 hover:bg-black"
                >
                  Cancel
                </button>
                <button className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white duration-300 hover:bg-black">
                  Confirm
                </button>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="absolute right-3 top-3 text-sm duration-300 hover:rotate-180"
            >
              <XMarkIcon className="w-7 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

ManageUserModal.propTypes = {
  user: propTypes.object,
  isModalOpen: propTypes.bool,
  modalRef: propTypes.object,
  closeModal: propTypes.func,
};
