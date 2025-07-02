import { useState } from "react";
import propTypes from "prop-types";

const filterData = [
  {
    title: "Category",
    optionsList: [
      { optionTitle: "Fruits" },
      { optionTitle: "Vegetables" },
      { optionTitle: "Dairy Products" },
      { optionTitle: "Meat & Poultry" },
      { optionTitle: "Seeds" },
      { optionTitle: "Saplings" },
      { optionTitle: "Honey" },
    ],
  },
  {
    title: "Rating",
    optionsList: [
      { optionTitle: "5 Stars" },
      { optionTitle: "4 Stars & Up" },
      { optionTitle: "3 Stars & Up" },
      { optionTitle: "2 Stars & Up" },
      { optionTitle: "1 Star & Up" },
    ],
  },
];

function FilterBy() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  return (
    <div className="flex flex-col rounded-2xl border border-gray-300 bg-white pb-3 lg:w-60 2xl:w-64">
      <h2 className="mb-5 flex h-[54px] items-center justify-center border-b border-gray-300 text-sm font-semibold uppercase">
        filter by
      </h2>

      <div className="mb-4 px-3">
        <h3 className="mb-2 font-semibold capitalize text-gray-800">
          Price Range
        </h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full rounded border px-2 py-1 text-sm text-gray-800"
          />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full rounded border px-2 py-1 text-sm text-gray-800"
          />
        </div>
      </div>

      <div className="mt-1 flex flex-col gap-3">
        {filterData.map((el, key) => (
          <FilterSection data={el} key={key} />
        ))}
      </div>
    </div>
  );
}

export default FilterBy;

////////////////////////

FilterSection.propTypes = {
  data: propTypes.object,
};

function FilterSection({ data }) {
  const { title, optionsList } = data;

  return (
    <section className="px-3">
      <h3 className="mb-1 font-semibold capitalize text-gray-800">{title}</h3>
      <ul className="space-y-1">
        {optionsList.map((el, key) => (
          <FilterOption data={el} key={key} />
        ))}
      </ul>
    </section>
  );
}

FilterOption.propTypes = {
  data: propTypes.object,
};

function FilterOption({ data }) {
  const { optionTitle } = data;

  return (
    <li>
      <input
        className="peer hidden"
        type="checkbox"
        id={`check-${optionTitle}`}
      />
      <label
        className="flex h-8 cursor-pointer items-center rounded px-1 hover:bg-gray-100 peer-checked:bg-apple-100"
        htmlFor={`check-${optionTitle}`}
      >
        <span className="mr-2 size-4 rounded-full border-2 border-gray-300 peer-checked:border-apple-500 peer-checked:bg-apple-500"></span>
        <span className="select-none capitalize text-gray-900">
          {optionTitle}
        </span>
      </label>
    </li>
  );
}
