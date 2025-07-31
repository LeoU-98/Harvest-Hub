import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import propTypes from "prop-types";

import { Link } from "react-router-dom";
import { introData } from "../assets/IntroStaticData";

export default function IntroCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots  bottom-[0] ",
    className: "intro-carousel",
    customPaging: () => (
      <div className="active-helper size-2 rounded-full bg-apple-500 opacity-50"></div>
    ),
    autoplay: true,
    speed: 1300,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          dots: false,
          autoplay: true,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {introData.map((item, key) => (
        <IntroItem data={item} key={key} />
      ))}
    </Slider>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} right-5 z-10 size-10 rounded-full bg-apple-500 opacity-100 duration-300 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-base before:content-['⟩'] hover:bg-black`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} left-5 z-10 size-10 rounded-full bg-apple-500 opacity-100 duration-300 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-base before:content-['⟨'] hover:bg-black`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function IntroItem({ data }) {
  const {
    promoTitle,
    promoDesc,
    promoBanner,
    promoLink,
    textPosition,
    overlay,
  } = data;

  const leftText = "left-[5%] top-1/2 z-10 -translate-y-1/2";
  const centerText =
    "left-1/2 top-1/2 z-10 -translate-y-1/2 flex flex-col items-center  -translate-x-1/2 text-balance text-center";
  const overlayText = "bg-black/60 rounded-2xl py-8 px-4";

  return (
    <article className="relative">
      <img
        src={promoBanner}
        alt={promoTitle}
        className="min-h-52 w-full md:h-[315px] lg:h-[415px] xl:h-[475px] 2xl:h-[800px]"
      ></img>

      <div
        className={`absolute 2xl:w-[800px] ${textPosition === "left" && leftText} ${textPosition === "center" && centerText} ${overlay && overlayText} `}
      >
        <p
          className={` ${overlay ? "text-gray-200" : "text-black"} my-1 sm:text-lg md:text-xl lg:mt-3 lg:text-3xl xl:text-4xl 2xl:mt-6 2xl:text-5xl`}
        >
          {promoTitle}
        </p>
        <p
          className={`text-[10px] ${overlay ? "text-gray-400" : "text-gray-600"} w-48 text-xs sm:w-72 md:text-base lg:w-96 lg:text-xl xl:w-[480px] xl:text-2xl 2xl:w-auto 2xl:max-w-[700px] 2xl:text-3xl`}
        >
          {promoDesc}
        </p>
        <Link
          to={promoLink}
          className="mt-2 inline-block cursor-pointer rounded-full bg-apple-500 px-3 py-1 text-sm text-white duration-300 hover:bg-black md:text-base lg:mt-6 2xl:mt-12"
        >
          Shop Now
        </Link>
      </div>
    </article>
  );
}

//////////////////////////////////

SamplePrevArrow.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};
SampleNextArrow.propTypes = {
  className: propTypes.string,
  style: propTypes.object,
  onClick: propTypes.func,
};
IntroItem.propTypes = {
  data: propTypes.object,
};
