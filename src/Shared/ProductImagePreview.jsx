import Slider from "react-slick";
import ImageZoom from "react-image-zooom";
import propTypes from "prop-types";

ProductImagePreview.propTypes = {
  data: propTypes.object,
  iconClassName: propTypes.string,
  imageClassName: propTypes.string,
};

export default function ProductImagePreview({
  data,
  iconClassName = "",
  imageClassName = "",
}) {
  const prefix = data.prefix;
  const variables = data.variables;

  const settings = {
    customPaging: function (i) {
      return (
        <div
          className={`size-12 cursor-pointer border-[1px] border-gray-300 hover:border-apple-500 sm:size-20 lg:size-16 xl:size-20 ${iconClassName}`}
        >
          <img src={`${prefix}${variables[i]}`} />
        </div>
      );
    },
    dots: true,
    dotsClass: "!flex items-center gap-2 mt-6 justify-center",
    className: "product-image-preview ",
    infinite: false,
    speed: 500,
    arrows: false,
    swipe: false,
  };

  return (
    <div className="w-full basis-1/2 px-1 text-center lg:w-1/2 xl:w-2/5">
      <Slider {...settings}>
        {variables.map((suffix) => (
          <ImageZoom
            key={suffix}
            src={prefix + suffix}
            className={`border-[1px] border-gray-300 ${imageClassName}`}
          />
        ))}
      </Slider>
    </div>
  );
}
