import {
  HandThumbDownIcon,
  HandThumbUpIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { Rating } from "@material-tailwind/react";
import propTypes from "prop-types";

const productReviewData = [
  {
    starNum: 5,
    percentage: 50,
  },
  {
    starNum: 4,
    percentage: 20,
  },
  {
    starNum: 3,
    percentage: 10,
  },
  {
    starNum: 2,
    percentage: 5,
  },
  {
    starNum: 1,
    percentage: 5,
  },
];

export default function ProductReviews({ data }) {
  return (
    <section className="flex min-h-72 flex-col gap-8 bg-white px-4 py-8 lg:flex-row lg:gap-2 lg:px-3 xl:px-4 2xl:gap-8">
      <div className="shrink-0">
        <div>
          <p>Customer Reviews</p>
          <div className="flex items-center gap-2">
            <div>⭐⭐⭐⭐⭐</div>
            <p>4.4 out of 5</p>
          </div>
          <p className="my-1 text-sm">917 global ratings</p>
        </div>
        <div>
          {productReviewData.map((rate, key) => (
            <StarVotePercent data={rate} key={key} />
          ))}
        </div>
      </div>

      {/* user review section  */}
      <div className="flex-1">
        <div className="mb-3 flex flex-col justify-center gap-2 lg:flex-row lg:gap-8">
          {data.map((review) => (
            <UserReview key={review.name} review={review} />
          ))}
        </div>
        <a className="mx-auto block w-fit cursor-pointer text-center text-xs duration-300 hover:text-apple-500">
          View All Reviews →
        </a>
      </div>
    </section>
  );
}

function StarVotePercent({ data }) {
  const { starNum, percentage } = data;

  return (
    <div className="flex select-none items-center gap-2">
      <span>{starNum} star</span>
      <div className="h-4 w-40 overflow-hidden rounded-full border-[1px] border-gray-300 bg-white">
        <div
          className="h-full w-0 bg-yellow-600"
          style={{
            width: `${percentage}%`,
          }}
        ></div>
      </div>
      <span>
        {percentage}
        <span className="text-sm">%</span>
      </span>
    </div>
  );
}

StarVotePercent.propTypes = { data: propTypes.object };

function UserReview({ review }) {
  const { name, comment, rating, image, reviewDate, likesCount } = review;

  const FormalReviewDate = reviewDate.replace(
    /(\d{4})-(\d{2})-(\d{2})/,
    (_, year, month, day) => {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
    },
  );

  return (
    <figure className="p-2 2xl:w-60">
      <div className="flex items-center gap-2">
        <div>
          {image ? (
            <img src={image} className="size-14 rounded-full" />
          ) : (
            <UserCircleIcon className="size-12 stroke-1 text-gray-800" />
          )}
        </div>
        <span>{name}</span>
      </div>
      <figcaption>
        <div className="my-2 flex items-center">
          <Rating value={rating} readonly />
        </div>
        <p className="mb-2 text-xs">Reviewd on {FormalReviewDate}</p>
        <p className="mb-3 text-sm lg:max-w-72">{comment}</p>
        <div className="mb-2 flex gap-2">
          <button className="flex items-center gap-1 rounded-full border-[0.5px] border-gray-400 px-3 py-1 outline-none duration-300 hover:text-blue-500">
            <span className="text-sm">Like</span>
            <HandThumbUpIcon className="size-5" />
          </button>
          <button className="flex items-center gap-1 rounded-full border-[0.5px] border-gray-400 px-3 py-1 outline-none duration-300 hover:text-red-500">
            <span className="text-sm">Report</span>
            <HandThumbDownIcon className="size-5" />
          </button>
        </div>
        <p className="text-xs">{likesCount} Liked This Review</p>
      </figcaption>
    </figure>
  );
}

UserReview.propTypes = { review: propTypes.object };

ProductReviews.propTypes = { data: propTypes.array };
