import { TrashIcon } from "@heroicons/react/24/outline";
import propTypes from "prop-types";
import ItemCounter from "../shop/ItemCounter";
import { removeItem } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { extractPriceDetails } from "../utils/helpers";

export default function CartItem({ data }) {
  const { id, productImage, productName, discountPrice, price, count } = data;
  const dispatch = useDispatch();

  const discount = extractPriceDetails(discountPrice).numberOnly;
  const orignalPrice = extractPriceDetails(price).numberOnly;
  const finalPrice = discount > 0 ? discount : orignalPrice;

  return (
    <li
      layout
      className="flex flex-col items-center border-b-[1px] border-gray-300 px-2 md:flex-row"
    >
      <div className="size-40">
        <img src={productImage} alt={productName} />
      </div>
      {/* text */}
      <div className="flex justify-center gap-2 lg:mr-auto">
        <div className="flex w-36 flex-col gap-1 py-4">
          <span className="capitalize">{productName}</span>
          <div className="flex gap-4">
            <span className="flex items-center justify-center text-sm text-gray-600 line-through">{`${price}`}</span>
            <span className="flex items-center justify-center rounded-br-xl rounded-tl-xl bg-apple-500 px-[6px] py-[3px] text-xs text-white">
              {Math.trunc((1 - discount / orignalPrice) * 100)}%
            </span>
          </div>
          <span className="text-base text-apple-500">{`${discountPrice}`}</span>
        </div>
        <Specification />
      </div>
      <div className="flex items-center justify-center gap-4">
        {/* count */}
        <ItemCounter itemID={id} forCartView={true} />
        {/* total price */}
        <div className="flex min-w-12 items-center justify-center">{`${(count * finalPrice).toFixed(2).replace(/\.?0+$/, "")}`}</div>
        {/* delete btn  */}
        <button
          onClick={() => dispatch(removeItem({ id: id }))}
          className="flex cursor-pointer items-center justify-center fill-gray-900 p-6 duration-300 hover:text-red-500"
        >
          <TrashIcon className="size-5" />
        </button>
      </div>
    </li>
  );
}

CartItem.propTypes = { data: propTypes.object };

function Specification() {
  return (
    <div className="flex w-36 flex-col gap-2 py-4 text-sm">
      <h3 className="border-b-[1px] border-gray-300 pb-1 text-base">
        Specification
      </h3>
      <span>
        Size: <span>S</span>
      </span>
      <span>
        Color: <span>White</span>
      </span>
      <span>
        Diemension: <span>40x60 cm</span>
      </span>
    </div>
  );
}
