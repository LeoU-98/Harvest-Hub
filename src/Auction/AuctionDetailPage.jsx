import { useState } from "react";
import ProductImagePreview from "../shop/ProductDetailsPage/ProductImagePreview";
import { splitCommonPrefix } from "../utils/helpers";
import { productDetailsData } from "../utils/ProductStaticData";
import { Link, useParams } from "react-router-dom";
import { CountdownTimer } from "../Shared/CountdownTimer";
import { auctions } from "../utils/AuctionStaticData";
import propTypes from "prop-types";
import { TbArrowBackUp } from "react-icons/tb";

// AuctionDetailPage.jsx
export default function AuctionDetailPage() {
  const { id } = useParams();

  const product = productDetailsData.find((p) => p.id === Number(id));

  const auction = auctions.find((auction) => auction.id === Number(id));

  const images = {
    prefix: splitCommonPrefix(product.images).prefix,
    variables: splitCommonPrefix(product.images).variables,
  };

  return (
    <div className="container mx-auto my-10 mb-16 rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 p-5">
      {/* <div className="container mx-auto my-10 mb-16 rounded-2xl bg-white p-5"> */}
      <div className="mb-3">
        <Link
          to={"../auctions/list"}
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
          imageClassName="overflow-hidden rounded-2xl"
        />
        <AuctionSpecifications data={auction} />
      </div>
    </div>
  );
}

function AuctionSpecifications({ data }) {
  const [bid, setBid] = useState("");
  const { title, currentBid, endTime } = data;

  return (
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
        className="dark:border-zinc-700 dark:bg-zinc-800 h-28 w-full resize-none rounded-xl border border-gray-300 bg-gray-50 p-4 text-gray-800 placeholder-gray-400 focus:outline-none dark:text-white"
        placeholder="Item Description"
        disabled
        value="Powerful and reliable tractor, perfect for small farms."
      />

      <input
        type="number"
        className="dark:border-zinc-700 dark:bg-zinc-800 w-full rounded-xl border border-gray-300 bg-white p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
        placeholder="Enter your bid"
        value={bid}
        onChange={(e) => setBid(e.target.value)}
      />

      <button className="w-full rounded-xl bg-green-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-green-600">
        💰 Place Bid
      </button>
    </div>
  );
}

AuctionSpecifications.propTypes = { data: propTypes.object };
