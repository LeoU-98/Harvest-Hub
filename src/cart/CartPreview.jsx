import propTypes from "prop-types";
import { Link } from "react-router-dom";
import CartPreviewItem from "./CartPreviewItem";
import { useCart } from "./cartSlice";
import cartBackground_280_196 from "../images/cartBackground_280_196.jpg";
import { useEffect, useRef } from "react";

function CartPreview({ isCartPreviewOpen, setIsCartPreviewOpen, buttonRef }) {
  const { cart, totalCartPriceNumber, totalCartPriceCurrency } = useCart();

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target) // Exclude the external button
      ) {
        setIsCartPreviewOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsCartPreviewOpen, buttonRef]);

  return (
    <div
      ref={dropdownRef}
      className={`absolute right-0 top-full z-50 w-80 origin-top scale-y-0 rounded-b-2xl border-b-2 border-apple-500 bg-white px-5 duration-500 ${isCartPreviewOpen ? "scale-y-100 py-5" : ""} `}
    >
      {/* items  */}
      <ul className="cart max-h-72 min-h-6 overflow-y-auto scroll-smooth p-2">
        {cart.length === 0 ? (
          <div className="h-64 text-center text-xl text-green-500">
            <img src={cartBackground_280_196} alt="Empty Cart Background" />
            Your Cart is Empty{" "}
          </div>
        ) : (
          cart.map((item) => <CartPreviewItem data={item} key={item.id} />)
        )}
      </ul>
      {/* total  */}
      <div className="flex justify-between border-y-[1px] border-gray-400 py-4">
        <span className="font-bold text-gray-900">Total</span>

        <span className="ml-2 text-apple-500">
          {Number(totalCartPriceNumber) !== 0
            ? totalCartPriceNumber + " " + totalCartPriceCurrency
            : ""}
        </span>
      </div>
      {/* action & checkout  */}
      <div className="flex justify-center gap-2 py-2">
        <Link
          onClick={() => setIsCartPreviewOpen(false)}
          to="/view-cart"
          className="cursor-pointer rounded-full bg-apple-500 px-5 py-3 text-sm uppercase text-white duration-300 hover:bg-black"
        >
          view cart
        </Link>
        <Link
          to=""
          className="cursor-pointer rounded-full bg-apple-500 px-5 py-3 text-sm uppercase text-white duration-300 hover:bg-black"
        >
          check out
        </Link>
      </div>
    </div>
  );
}

export default CartPreview;

CartPreview.propTypes = {
  isCartPreviewOpen: propTypes.bool,
  setIsCartPreviewOpen: propTypes.func,
  buttonRef: propTypes.element,
};
