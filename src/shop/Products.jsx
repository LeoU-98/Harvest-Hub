import { productData } from "../utils/StaticData";
import FilterBy from "./FilterBy";
import BreadCrumb from "../ui/BreadCrumb";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import propTypes from "prop-types";
import ProductCard from "./ProductCard";
import ProductSortBar from "./ProductSortBar";

function Products() {
  // function Products({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = productData.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(productData.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % productData.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <BreadCrumb />
      <main className="container mx-auto mb-20 px-2">
        <div className="flex gap-3">
          <div className="hidden lg:block">
            <FilterBy />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <ProductSortBar />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
                {<Items currentItems={currentItems} />}
              </div>
            </div>

            <div className="">
              <ReactPaginate
                pageRangeDisplayed={5}
                breakLabel="..."
                nextLabel="Next →"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                previousLabel="← Prev"
                renderOnZeroPageCount={null}
                className="mt-4 flex items-center justify-center gap-1 border-[1px] border-gray-300 bg-white py-1 sm:gap-4"
                pageClassName="rounded-full overflow-hidden  hover:text-lima-500"
                pageLinkClassName="size-8 sm:size-10 sm:p-1 flex justify-center items-center text-xs"
                activeClassName="bg-lima-500 text-white hover:text-white"
                previousClassName="text-lima-500 hover:bg-lima-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
                nextClassName="text-lima-500 hover:bg-lima-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
                previousLinkClassName="sm:px-6 sm:py-3 py-2 px-2 block uppercase"
                nextLinkClassName="sm:px-6 sm:py-3 py-2  px-2 block uppercase"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Products;

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, key) => <ProductCard data={item} key={key} />)}
    </>
  );
}

Items.propTypes = {
  currentItems: propTypes.number,
};
