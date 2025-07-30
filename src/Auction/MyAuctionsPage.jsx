///////////////////////////////////////////////////
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import propTypes from "prop-types";
import ReactPaginate from "react-paginate";
import { formatDate } from "../utils/helpers";
import { FaCrown } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ImageUploader } from "../shared/ImageUploader";
import { FiAlertTriangle } from "react-icons/fi";
import { myAuctions } from "../assets/AuctionStaticData";

MyAuctionCard.propTypes = {
  auction: propTypes.object,
};
AuctionModal.propTypes = {
  selectedAuction: propTypes.object,
  modalType: propTypes.string,
  modalRef: propTypes.object,
  closeModal: propTypes.func,
};

export default function MyAuctionsPage() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = myAuctions.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(myAuctions.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % myAuctions.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold text-white">My Auctions</h2>

      <div className="auction-scroll grid grid-cols-1 items-center gap-6 p-2 pr-3 lg:h-[600px] lg:grid-cols-3 2xl:h-[500px]">
        {currentItems.map((auction) => (
          <MyAuctionCard key={auction.id} auction={auction} />
        ))}
      </div>
      <ReactPaginate
        pageRangeDisplayed={5}
        breakLabel="..."
        nextLabel="Next →"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="← Prev"
        renderOnZeroPageCount={null}
        className="mt-3 flex items-center justify-center gap-1 rounded-3xl border-[1px] border-gray-300 bg-white py-1 sm:gap-4"
        pageClassName="rounded-full overflow-hidden  hover:text-apple-500"
        pageLinkClassName="size-8 sm:size-10 sm:p-1 flex justify-center items-center text-xs"
        activeClassName="bg-apple-500 text-white hover:text-white"
        previousClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        nextClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        previousLinkClassName="sm:px-6 sm:py-3 py-2 px-2 block uppercase"
        nextLinkClassName="sm:px-6 sm:py-3 py-2  px-2 block uppercase"
      />
    </div>
  );
}

function MyAuctionCard({ auction }) {
  const [selectedAuction, setSelectedAuction] = useState(null);
  const [modalType, setModalType] = useState(null);
  const modalRef = useRef(null);

  const openModal = (auction, type) => {
    setSelectedAuction(auction);
    setModalType(type);
  };

  const closeModal = () => {
    setSelectedAuction(null);
    setModalType(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (selectedAuction) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedAuction]);

  return (
    <>
      <div className="flex flex-col rounded-2xl border bg-white p-5 md:flex-row lg:flex-col">
        <div className="flex items-center justify-center">
          <img
            src={auction.images[0]}
            className="size-60"
            alt={auction.title}
          />
        </div>
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
              {auction.title}
            </h3>
            <span
              className={`rounded-full px-3 py-1 text-sm font-medium ${
                auction.status === "Live"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {auction.status}
            </span>
          </div>

          <p className="text-sm text-gray-900">
            Highest Bid: {auction.highestBid}
          </p>
          <p className="text-sm text-gray-900">Bids: {auction.bids}</p>

          <div className="text-sm text-gray-900">
            <p>
              <span className="mr-1 text-green-800">From:</span>
              {formatDate(auction.startTime)}
            </p>
            <p>
              <span className="mr-1 text-green-800">Until:</span>
              {formatDate(auction.endTime)}
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-start gap-3 lg:h-24 xl:h-auto">
            {auction.status !== "Ended" && (
              <button
                className="rounded-md bg-red-500 px-4 py-1.5 text-white hover:bg-red-600"
                onClick={() => openModal(auction, "delete")}
              >
                Delete
              </button>
            )}
            <button
              className="rounded-md bg-blue-500 px-4 py-1.5 text-white hover:bg-blue-600"
              onClick={() => openModal(auction, "result")}
            >
              View Result
            </button>
            <button
              className="rounded-md bg-green-500 px-4 py-1.5 text-white hover:bg-green-600"
              onClick={() => openModal(auction, "edit")}
            >
              Edit
            </button>
          </div>
        </div>
      </div>

      <AuctionModal
        selectedAuction={selectedAuction}
        modalType={modalType}
        modalRef={modalRef}
        closeModal={closeModal}
      />
    </>
  );
}

function AuctionModal({ selectedAuction, modalType, modalRef, closeModal }) {
  return (
    <AnimatePresence>
      {selectedAuction && modalType && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            ref={modalRef}
            className={`relative w-full rounded-lg p-6 ${
              modalType === "result"
                ? "max-w-md bg-gradient-to-r from-indigo-500 to-blue-500"
                : modalType === "edit"
                  ? "max-w-4xl bg-gradient-to-br from-emerald-800 to-emerald-600/90"
                  : "max-w-md bg-gradient-to-r from-red-500 to-orange-500"
            }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
              },
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
              transition: { duration: 0.2 },
            }}
          >
            <h2 className="mb-4 text-xl font-bold text-white">
              {modalType === "edit"
                ? "Edit Auction"
                : modalType === "result"
                  ? "Auction Result"
                  : "Delete Auction"}
            </h2>

            {modalType === "result" && (
              <ViewResultModal selectedAuction={selectedAuction} />
            )}

            {modalType === "edit" && (
              <EditModal
                selectedAuction={selectedAuction}
                closeModal={closeModal}
              />
            )}

            {modalType === "delete" && (
              <DeleteModal
                selectedAuction={selectedAuction}
                closeModal={closeModal}
              />
            )}

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

function ViewResultModal() {
  //  function ViewResultModal({ selectedAuction }) {
  const selectedAuction = {
    title: "Tractor Model X",
    highestBid: "$1,200",
    bids: 14,
    endTime: "2025-06-19T17:30:00Z",
    winner: {
      name: "John Doe",
      email: "john@example.com",
    },
  };

  const { title, highestBid, bids, endTime, winner } = selectedAuction;
  return (
    <div className="mx-auto w-full max-w-md space-y-5 rounded-2xl bg-white p-6 text-gray-800 shadow-xl">
      <h2 className="border-b pb-2 text-center text-2xl font-bold text-gray-800">
        {title}
      </h2>

      {/* Winner Section */}
      <div className="flex items-start gap-3 rounded-xl border-l-4 border-yellow-400 bg-yellow-50 p-4">
        <FaCrown className="mt-1 text-2xl text-yellow-500" />
        <div>
          <p className="text-sm text-gray-500">Winner</p>
          <p className="text-lg font-semibold text-yellow-700">
            {winner?.name || "Unknown"}
          </p>
          <p className="text-sm text-gray-600">Email: {winner?.email}</p>
        </div>
      </div>

      {/* Auction Info */}
      <div className="space-y-2 text-sm">
        <p>
          <strong>Highest Bid:</strong>{" "}
          <span className="text-green-600">{highestBid}</span>
        </p>
        <p>
          <strong>Total Bids:</strong> {bids}
        </p>
        <p>
          <strong>Ended On:</strong> {new Date(endTime).toLocaleString()}
        </p>
      </div>
    </div>
  );
}

function DeleteModal({ closeModal }) {
  //  function DeleteModal({ closeModal, selectedAuction }) {

  return (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-2xl bg-white p-6 text-center shadow-xl">
      <div className="flex justify-center text-4xl text-red-500">
        <FiAlertTriangle />
      </div>

      <h2 className="text-xl font-semibold text-gray-800">Delete Auction?</h2>

      <p className="text-sm text-gray-600">
        Are you sure you want to permanently delete the auction{" "}
        <strong className="text-red-600">AuctionName</strong>?<br />
        This action cannot be undone.
      </p>

      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={closeModal}
          className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          // onClick={onDelete}
          className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

function EditModal({ closeModal, selectedAuction }) {
  const [form, setForm] = useState({
    title: selectedAuction.title,
    description: selectedAuction.description || "",
    price: selectedAuction.price || "",
    duration: selectedAuction.duration || "1",
  });
  const [images, setImages] = useState([]);

  const handleImageChange = (files) => {
    setImages(files);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Auction updated!");
    closeModal();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex h-[450px] w-full flex-col gap-3 md:flex-row"
    >
      <div className="w-full md:w-1/2">
        <ImageUploader onImagesChange={handleImageChange} />
      </div>
      <div className="w-full rounded-2xl bg-white p-5 md:w-1/2">
        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-medium">
            Item Name
          </label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Item Name"
            className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="mb-1 block text-sm font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Brief item description"
            className="h-20 w-full resize-none rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="price" className="mb-1 block text-sm font-medium">
            Starting Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
            placeholder="Starting Price"
            className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label htmlFor="duration" className="mb-1 block text-sm font-medium">
            Duration
          </label>
          <select
            id="duration"
            name="duration"
            value={form.duration}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="1">1 Day</option>
            <option value="3">3 Days</option>
            <option value="7">7 Days</option>
          </select>
        </div>

        <button
          type="submit"
          className="mt-5 w-full rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition duration-200 hover:bg-green-700"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

EditModal.propTypes = {
  closeModal: propTypes.func,
  selectedAuction: propTypes.object,
};

ViewResultModal.propTypes = {
  selectedAuction: propTypes.object,
};

DeleteModal.propTypes = {
  closeModal: propTypes.func,
};
