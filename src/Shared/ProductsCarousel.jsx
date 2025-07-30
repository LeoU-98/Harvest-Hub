import propTypes from "prop-types";
import { SampleNextArrow, SamplePrevArrow } from "../ui/CarouselArrows";
import ProductCard from "./ProductCard";
import Slider from "react-slick";

export default function ProductsCarousel({ data }) {
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
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
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
          // arrows: false,
        },
      },

      {
        breakpoint: 960,

        settings: {
          slidesToShow: 2,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
      {
        breakpoint: 540,

        settings: {
          slidesToShow: 1,
          dots: false,
          infinite: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mx-auto md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-6xl">
      <Slider {...settings}>
        {data?.map((product) => (
          <div key={product.id}>
            <div className="m-2">
              <ProductCard
                data={product}
                imgClassName="size-[240px]"
                className="mx-auto mb-[10px] w-full md:mx-0 md:max-w-none"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

ProductsCarousel.propTypes = { data: propTypes.array };
