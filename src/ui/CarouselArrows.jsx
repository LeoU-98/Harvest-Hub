import propTypes from "prop-types";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -right-16 size-7 rounded-full bg-white opacity-100 duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟩'] hover:bg-apple-400 lg:-right-10 lg:size-9`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} -left-16 size-7 rounded-full bg-white opacity-100 duration-500 before:absolute before:left-1/2 before:top-1/2 before:z-10 before:-translate-x-1/2 before:translate-y-[-62%] before:rounded-full before:text-xs before:font-bold before:text-black before:content-['⟨'] hover:bg-apple-400 lg:-left-10 lg:size-9`}
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
