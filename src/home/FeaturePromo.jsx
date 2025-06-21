import { featurePromoData } from "../utils/StaticData";
import propTypes from "prop-types";
function FeaturePromo() {
  return (
    <div className="grid-row-2 container mx-auto grid grid-cols-2 gap-3 px-4 pt-16 md:flex md:justify-center md:pb-8 lg:gap-5 lg:pb-16">
      {featurePromoData.map((el, key) => (
        <FeaturePromoItem data={el} key={key} />
      ))}
    </div>
  );
}

export default FeaturePromo;
function FeaturePromoItem({ data }) {
  const { svg, title, descryption } = data;

  return (
    <div className="mx-auto flex w-[165px] flex-col items-center gap-1 text-balance rounded-3xl bg-black/60 px-4 py-4 text-center capitalize sm:w-52">
      <div className="group relative mb-2 flex size-12 items-center justify-center rounded-full bg-white duration-300 hover:scale-125 hover:bg-apple-500 md:size-16">
        {svg}
      </div>
      <h3 className="text-xs text-white md:text-sm lg:text-lg xl:text-xl">
        {title}
      </h3>
      <p className="mt-1 max-w-60 text-balance text-xs text-gray-400 lg:text-sm">
        {descryption}
      </p>
    </div>
  );
}

FeaturePromoItem.propTypes = {
  data: propTypes.object,
};
