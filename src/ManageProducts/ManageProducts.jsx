import { MdOutlineAddToPhotos } from "react-icons/md";
import ReactPaginate from "react-paginate";
import {
  cropAndFreshProducesData,
  dairyAndLivestockProducts,
  seedAndSaplingProducts,
} from "../utils/AgriDataPLP";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import propTypes from "prop-types";
import MerchantProductCard from "./MerchantProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ImageUploader } from "../Shared/ImageUploader";

function fetchData(id) {
  console.log(id);

  return [
    ...cropAndFreshProducesData,
    ...dairyAndLivestockProducts,
    ...seedAndSaplingProducts,
  ];
}

export default function ManageProducts() {
  const [itemOffset, setItemOffset] = useState(0);
  const [showAddModal, setShowAddModal] = useState(0);
  const { id } = useParams();
  const itemsPerPage = 8;

  ////////////////////////////////////////////
  /////////////// Mocking Data Fetch /////////

  const data = fetchData(id);

  /////////////////////////////////////////////

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = data?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data?.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data?.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`,
    );
    setItemOffset(newOffset);
  };

  return (
    <main className="pt-16">
      <div className="container mx-auto overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900/80 to-emerald-600/90 p-8">
        <h3 className="mb-4 text-2xl font-semibold text-white">
          Manage Products
        </h3>

        <div className="mb-5 flex items-center justify-between rounded-2xl bg-white p-8">
          <h3 className="text-2xl font-semibold text-green-800">My Products</h3>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 rounded-full bg-green-700 px-3 py-2 text-white duration-300 hover:bg-black"
          >
            <MdOutlineAddToPhotos className="size-6" />
            <span>Add Product</span>
          </button>
        </div>

        <div className="">
          {/* //"products" */}
          <div className="flex gap-3">
            <div className="hidden lg:block">{/* <FilterBy /> */}</div>
            <div className="flex w-full flex-col justify-between">
              <div>
                <div className="mb-5 flex w-full items-center justify-between gap-5 rounded-2xl bg-white p-3">
                  <p className="text-gray-800">
                    There are {data.length} products
                  </p>
                  <SearchBox />
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:h-[775px] lg:grid-cols-3 lg:grid-rows-2 xl:grid-cols-4">
                  {currentItems &&
                    currentItems.map((item, key) => (
                      <MerchantProductCard
                        imgClassName="2xl:size-[12.1rem] lg:size-[12rem]"
                        data={item}
                        key={key}
                      />
                    ))}
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
                  className="mt-3 flex items-center justify-center gap-1 rounded-3xl border-[1px] border-gray-300 bg-white py-1 sm:gap-4"
                  pageClassName="rounded-full overflow-hidden  hover:text-apple-500"
                  pageLinkClassName="size-8 sm:size-10 sm:p-1 flex justify-center items-center text-xs"
                  activeClassName="bg-apple-500 text-white hover:text-white"
                  previousClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
                  nextClassName="text-apple-500 hover:bg-apple-500 hover:text-white rounded-full text-xs font-bold duration-200 select-none"
                  previousLinkClassName="sm:px-6 sm:py-3 py-2 px-2 block uppercase"
                  nextLinkClassName="sm:px-6 sm:py-3 py-2  px-2 block uppercase"
                />
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {showAddModal && (
            <AddProductModal
              onClose={() => setShowAddModal(false)}
              onAdd={(productData) => console.log("Added:", productData)}
            />
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

function SearchBox({ placeholder = "Search...", onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="rounded-full px-3 py-2 text-sm text-gray-800 ring-1 ring-gray-400 focus:outline-none focus:ring-green-500 lg:w-[300px]"
        placeholder={placeholder}
      />

      <button
        onClick={handleSearch}
        className="flex items-center gap-1 rounded-full bg-green-600 px-3 py-2 text-sm font-medium text-white transition duration-300 hover:bg-black"
      >
        <FiSearch className="size-5 text-white" />
        Search
      </button>
    </div>
  );
}

SearchBox.propTypes = {
  placeholder: propTypes.string,
  onSearch: propTypes.func,
};

function AddProductModal({ onClose, onAdd }) {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    discountPrice: "",
    productImage: null,
    cardImage: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageUpload = (field, file) => {
    setFormData((prev) => ({
      ...prev,
      [field]: file,
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />

      {/* Modal Box */}
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.95 }}
        className="relative z-10 w-[90%] max-w-5xl rounded-2xl bg-gradient-to-br from-emerald-800 to-emerald-600/90 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="mb-4 text-2xl font-semibold text-white">Add Product</h2>

        <div className="flex flex-col gap-6 md:flex-row">
          {/* Left: Image uploaders */}
          <div className="flex flex-1 flex-col items-center">
            <ImageUploader
              label="Upload Product Image"
              onUpload={(file) => handleImageUpload("productImage", file)}
            />
            <div className="mt-4 w-full rounded-2xl bg-white p-5">
              <label className="mb-1 block text-sm text-gray-700">
                Upload Card Image
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  handleImageUpload("cardImage", e.target.files[0])
                }
                className="w-full text-sm"
              />
            </div>
          </div>

          {/* Right: Input fields */}
          <div className="flex-1 space-y-4 rounded-2xl bg-white px-5 py-10">
            <label className="block">
              <span className="text-gray-700">Product Name</span>
              <input
                name="productName"
                type="text"
                value={formData.productName}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl px-3 py-2 outline-none ring-2 ring-gray-600 focus:ring-green-500"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Price</span>
              <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl px-3 py-2 outline-none ring-2 ring-gray-600 focus:ring-green-500"
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Discount Price</span>
              <input
                name="discountPrice"
                type="number"
                value={formData.discountPrice}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl px-3 py-2 outline-none ring-2 ring-gray-600 focus:ring-green-500"
              />
            </label>

            <div className="pt-2 text-right">
              <button
                onClick={() => {
                  onAdd(formData);
                  onClose();
                }}
                className="rounded-full bg-green-500 px-4 py-2 text-white duration-300 hover:bg-black"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl leading-none duration-300 hover:rotate-180"
        >
          <XMarkIcon className="w-7 text-white" />
        </button>
      </motion.div>
    </motion.div>
  );
}

AddProductModal.propTypes = {
  onClose: propTypes.func.isRequired,
  onAdd: propTypes.func.isRequired,
};
