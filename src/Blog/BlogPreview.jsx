import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogPreviewData } from "../utils/StaticData";
import BlogPreviewCard from "./BlogPreviewCard";
import { motion } from "motion/react";
import { headerVariants } from "../motion/variants";

function BlogPreview() {
  const settings = {
    arrows: false,

    infinite: false,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    className: "blog-review",
    responsive: [
      {
        breakpoint: 960,
        settings: {
          arrows: false,
          slidesToShow: 2,
          dots: false,
          infinite: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 1,
          dots: false,
          infinite: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 py-14">
      <motion.h2
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        className="relative top-5 mx-auto mb-8 flex w-fit items-center justify-center rounded-full rounded-bl-lg rounded-tr-lg bg-gradient-to-l from-emerald-500 to-emerald-900 px-5 py-2 capitalize text-white sm:text-xl md:mb-12 md:w-full md:py-2 md:text-2xl lg:py-3 lg:text-4xl"
      >
        From Our Blog
      </motion.h2>

      <Slider {...settings}>
        {blogPreviewData.map((el, key) => (
          <BlogPreviewCard data={el} key={key} />
        ))}
      </Slider>
    </div>
  );
}

export default BlogPreview;
