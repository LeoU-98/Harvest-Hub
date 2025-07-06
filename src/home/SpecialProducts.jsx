import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import propTypes from "prop-types";
import ProductCard from "../Shared/ProductCard";
import { motion } from "motion/react";
import { headerVariants } from "../motion/variants";
import {
  cropAndFreshProducesData,
  dairyAndLivestockProducts,
  seedAndSaplingProducts,
} from "../assets/AgriDataPLP";

function SpecialProducts() {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    infinite: false,
    dots: false,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 1140,

        settings: {
          slidesToShow: 3,
          dots: false,
          infinite: false,
        },
      },

      {
        breakpoint: 960,

        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 540,

        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div>
          <motion.h2
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            className="relative top-3 mx-auto mb-8 flex w-fit items-center justify-center rounded-full rounded-bl-lg rounded-tr-lg bg-gradient-to-l from-emerald-500 to-emerald-900 px-5 py-2 capitalize text-white sm:text-xl md:mb-20 md:w-full md:py-2 md:text-2xl lg:py-3 lg:text-4xl"
          >
            Special Products
          </motion.h2>
        </div>

        <Slider {...settings}>
          {[
            ...cropAndFreshProducesData,
            ...dairyAndLivestockProducts,
            ...seedAndSaplingProducts,
          ].map((product) => (
            <ProductCard
              data={product}
              key={product.id}
              imgClassName="size-[240px]"
              className="mx-auto mb-[10px] w-full md:mx-0 md:max-w-none"
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SpecialProducts;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} mg:-top-7 -top-10 right-[2%] size-7 rounded-full bg-white opacity-100 duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟩'] hover:bg-apple-400 lg:size-9`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} mg:-top-7 -top-10 left-[79%] size-7 rounded-full bg-white duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟨'] hover:bg-apple-400 sm:left-[85%] md:left-[87%] lg:left-[89%] lg:size-9 xl:left-[90%]`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

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
