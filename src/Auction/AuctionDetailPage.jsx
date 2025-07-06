import { useEffect, useRef, useState } from "react";
import ProductImagePreview from "../Shared/ProductImagePreview";
import { splitCommonPrefix } from "../utils/helpers";
import { Link, useParams } from "react-router-dom";
import { CountdownTimer } from "../Shared/CountdownTimer";
import propTypes from "prop-types";
import { TbArrowBackUp } from "react-icons/tb";
import { GiPayMoney } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { IoPerson } from "react-icons/io5";
import { auctionDetails } from "../assets/AuctionDetailsStaticData";

// AuctionDetailPage.jsx
export default function AuctionDetailPage() {
  const { id } = useParams();

  const auctionDetailsData = auctionDetails.find((p) => p.id === Number(id));

  const images = {
    prefix: splitCommonPrefix(auctionDetailsData.images).prefix,
    variables: splitCommonPrefix(auctionDetailsData.images).variables,
  };

  return (
    <div className="container mx-auto my-10 mb-16 rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 p-5">
      <div className="mb-3">
        <Link
          to={"/Harvest-Hub/auctions/list"}
          className="flex h-12 w-36 items-center justify-center gap-1 rounded-3xl bg-white px-2 py-1 text-green-900 duration-300 hover:bg-black hover:text-white"
        >
          <TbArrowBackUp className="size-6" />
          <span>Auction List</span>
        </Link>
      </div>
      <div className="flex flex-col items-center gap-8 lg:flex-row">
        <ProductImagePreview
          data={images}
          iconClassName="overflow-hidden rounded-2xl"
          imageClassName="overflow-hidden rounded-2xl  2xl:!w-[500px] "
        />
        <AuctionSpecifications data={auctionDetailsData} />
      </div>
    </div>
  );
}

export function AuctionSpecifications({ data }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [bid, setBid] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const { id, title, currentBid, endTime, description } = data;

  const handlePlaceBidClick = () => {
    if (!phone || !email || !bid) {
      alert("Please fill all fields before placing your bid.");
      return;
    }

    setIsModalOpen(true);
  };

  function closeModal() {
    setIsModalOpen(false);
  }

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
    <>
      <div className="dark:bg-zinc-900 mx-auto max-w-2xl space-y-6 rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          {title}
        </h1>

        <div className="text-lg text-gray-700 dark:text-gray-300">
          <span className="font-semibold">Current Bid:</span> {currentBid}
        </div>

        <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
          <span className="font-medium">⏳ Time Left:</span>
          <CountdownTimer endTime={endTime} />
        </div>

        <textarea
          className="dark:border-zinc-700 dark:bg-zinc-800 h-28 w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none dark:text-white"
          disabled
          value={description}
        />

        <div className="flex items-center gap-2">
          <label className="block w-1/2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Phone Number
            <input
              type="tel"
              className="dark:border-zinc-700 dark:bg-zinc-800 mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label className="block w-1/2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Email
            <input
              type="email"
              className="dark:border-zinc-700 dark:bg-zinc-800 mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Your Bid (EGP)
          <input
            type="number"
            className="dark:border-zinc-700 dark:bg-zinc-800 mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
            placeholder="Enter your bid"
            value={bid}
            onChange={(e) => setBid(e.target.value)}
          />
        </label>

        <button
          onClick={handlePlaceBidClick}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-black"
        >
          <GiPayMoney className="size-6" />
          <>Place Bid</>
        </button>
      </div>
      <BidConfirmationModal
        modalRef={modalRef}
        closeModal={closeModal}
        isModalOpen={isModalOpen}
      />
    </>
  );
}

AuctionSpecifications.propTypes = { data: propTypes.object };

function BidConfirmationModal({ modalRef, closeModal, isModalOpen }) {
  const bidData = {
    title: "Product A Model X",
    pid: "1231",
    bidAmount: 5000,
    phone: "01022734564",
    email: "leou@helwan.com",
  };

  const { title, pid, bidAmount, phone, email } = bidData;
  const userName = "LeoU";

  function confirmBid() {
    //   const bidPayload = {
    //     pid: id,
    //     bidAmount: bid,
    //     phone,
    //     email,
    //   };

    closeModal();
  }

  return (
    isModalOpen && (
      <AnimatePresence>
        {
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="relative w-full max-w-md rounded-lg bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 p-6"
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
              <h2 className="mb-4 text-xl font-bold text-white">Confirm Bid</h2>

              <>
                <div className="mx-auto w-full max-w-md space-y-5 rounded-2xl bg-white p-6 text-gray-800 shadow-xl">
                  <h2 className="border-b pb-2 text-center text-2xl font-bold text-gray-800">
                    {title}
                  </h2>

                  {/* Winner Section */}
                  <div className="flex items-start gap-3 rounded-xl border-l-4 border-green-400 bg-green-50 p-4">
                    <IoPerson className="mt-1 text-2xl text-green-800" />
                    <div>
                      <p className="text-lg font-semibold text-green-800">
                        {userName || "Unknown"}
                      </p>
                      <p className="text-sm text-gray-600">Email: {email}</p>
                      <p className="text-sm text-gray-600">Phone: {phone}</p>
                    </div>
                  </div>

                  {/* Auction Info */}
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Bid Amount:</strong>{" "}
                      <span className="text-green-600">{bidAmount}</span>
                    </p>
                  </div>

                  <div className="mb-3 text-center text-sm text-gray-600">
                    <p>Are you sure you want to place this bid?</p>
                    <p>
                      This action is{" "}
                      <strong className="text-red-600">irreversible</strong>.
                    </p>
                  </div>

                  <div className="flex justify-center gap-4">
                    <button
                      onClick={() => closeModal()}
                      className="rounded-full bg-red-500 px-5 py-2 text-sm text-white transition hover:bg-black"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmBid}
                      className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold text-white duration-300 hover:bg-black"
                    >
                      Confirm
                    </button>
                  </div>

                  <p className="mb-6 text-right text-sm text-green-800 duration-300 hover:text-black">
                    <Link
                      href="/bidding-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Bidding Policy
                    </Link>
                  </p>
                </div>
              </>

              <button
                onClick={closeModal}
                className="absolute right-3 top-3 text-sm text-blue-600 duration-300 hover:rotate-180"
              >
                <XMarkIcon className="w-7 text-white" />
              </button>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    )
  );
}

BidConfirmationModal.propTypes = {
  modalRef: propTypes.func,
  closeModal: propTypes.func,
  isModalOpen: propTypes.bool,
};
