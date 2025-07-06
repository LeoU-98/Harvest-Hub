import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { CountdownTimer } from "../Shared/CountdownTimer";
import { userBids } from "../assets/AuctionStaticData"; // You will create this file with sample bids
import ReactPaginate from "react-paginate";
import { useState } from "react";

import { extractNumericValue } from "../utils/helpers"; // your price parse

export default function MyBidsPage() {
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = userBids.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(userBids.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % userBids.length;
    setItemOffset(newOffset);
  };

  if (userBids.length === 0) {
    return (
      <div className="flex items-center justify-center rounded-2xl bg-white lg:h-[500px]">
        <p className="text-2xl text-gray-900">You Have No Bids</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="mb-4 text-2xl font-bold text-white">My Active Bids</h3>

      <div className="auction-scroll grid grid-cols-1 items-center gap-4 p-0 md:grid-cols-2 md:p-4 lg:h-[500px] lg:grid-cols-3">
        {currentItems.map((auction) => (
          <MyBidCard key={auction.id} data={auction} />
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
        pageClassName="rounded-full overflow-hidden hover:text-apple-500"
        pageLinkClassName="size-8 sm:size-10 sm:p-1 flex justify-center items-center text-xs"
        activeClassName="bg-apple-500 text-white hover:text-white"
        previousClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        nextClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
        previousLinkClassName="sm:px-6 sm:py-3 py-2 px-2 block uppercase"
        nextLinkClassName="sm:px-6 sm:py-3 py-2  px-2 block uppercase"
      />
    </>
  );
}

MyBidCard.propTypes = { data: propTypes.object };

export function MyBidCard({ data }) {
  const current = extractNumericValue(data.currentBid);
  const user = extractNumericValue(data.userBid);
  const now = new Date();
  const start = new Date(data.startTime);
  const end = new Date(data.endTime);

  const isLive = now >= start && now < end;
  const hasEnded = now >= end;
  const didWin = user >= current;

  let statusLabel = "Live";
  let statusColor = "bg-gradient-to-r from-green-500 to-lime-500";
  if (hasEnded) {
    if (didWin) {
      statusLabel = "Win";
      statusColor = "bg-gradient-to-r from-indigo-500 to-blue-500";
    } else {
      statusLabel = "Lose";
      statusColor = "bg-gradient-to-r from-pink-500 to-red-400";
    }
  }

  return (
    <Link
      to={`/auctions/${data.id}`}
      className="relative rounded-xl border bg-white p-4 hover:shadow-xl"
      onClick={(e) => {
        if (hasEnded) {
          e.preventDefault(); // block navigation
        }
      }}
    >
      <div>
        <img
          src={data.image}
          alt={data.title}
          className="h-[320px] w-[320px] rounded object-cover"
        />
      </div>
      <div className="mt-3">
        <h2 className="line-clamp-1 text-lg font-semibold">{data.title}</h2>

        {isLive ? (
          <div className="flex items-center gap-2">
            <p className="text-sm">Time Left</p>
            <CountdownTimer endTime={data.endTime} />
          </div>
        ) : (
          <p className="text-sm italic text-gray-500">Auction Ended</p>
        )}

        <p
          className={`text-sm ${user < current ? "text-red-500" : "text-emerald-700"}`}
        >
          Your Bid: {data.userBid}
        </p>
        <p className="text-sm">Current Highest Bid: {data.currentBid}</p>

        <p
          className={`absolute right-2 top-2 flex aspect-square w-12 items-center justify-center rounded-2xl p-1 text-xs text-white ${statusColor}`}
        >
          {statusLabel}
        </p>
      </div>
    </Link>
  );
}
