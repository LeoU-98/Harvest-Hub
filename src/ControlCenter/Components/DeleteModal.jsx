import { AnimatePresence, motion } from "framer-motion";
import { FiAlertTriangle } from "react-icons/fi";
import { XMarkIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";

export default function DeleteModal({
  modalType,
  foundBlog,
  closeModal,
  handleDelete,
  modalRef,
}) {
  return (
    <AnimatePresence>
      {modalType && foundBlog && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className="relative w-full max-w-md rounded-xl bg-gradient-to-r from-red-600 to-orange-500 p-6 text-white shadow-xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { type: "spring", stiffness: 200, damping: 20 },
            }}
            exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
          >
            <h2 className="mb-4 text-xl font-bold">Delete Blog</h2>
            <div className="mb-4 flex items-center gap-3 rounded-lg bg-white/20 p-4 text-sm">
              <FiAlertTriangle className="text-2xl text-yellow-300" />
              Are you sure you want to delete{" "}
              <span className="font-bold text-yellow-100">
                {foundBlog.title}
              </span>
              ? This cannot be undone.
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="rounded-md border border-white px-4 py-2 text-white hover:bg-white/20"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="rounded-md bg-white px-4 py-2 font-medium text-red-600 hover:bg-gray-100"
              >
                Confirm
              </button>
            </div>
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 hover:rotate-180"
            >
              <XMarkIcon className="w-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

DeleteModal.propTypes = {
  modalType: propTypes.string,
  foundBlog: propTypes.object,
  closeModal: propTypes.func,
  handleDelete: propTypes.func,
  modalRef: propTypes.object,
};
