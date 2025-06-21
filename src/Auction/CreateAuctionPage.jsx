import { useState } from "react";
import { ImageUploader } from "../Shared/ImageUploader";
import propTypes from "prop-types";

export default function CreateAuctionPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    duration: "3",
  });

  const [images, setImages] = useState([]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleImageChange = (files) => {
    setImages(files);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please upload at least one image.");
      return;
    }

    // Simulate form submission
    const formData = new FormData();
    for (const [key, value] of Object.entries(form)) {
      formData.append(key, value);
    }

    images.forEach((img, index) => {
      formData.append(`image${index + 1}`, img);
    });

    console.log("Form submitted!");
  };

  return (
    <>
      <h3 className="mb-4 text-2xl font-bold text-white">Create Auction</h3>
      <form onSubmit={handleSubmit} className="flex h-[600px] gap-4 px-6 py-5">
        <div className="w-1/2">
          <ImageUploader onImagesChange={handleImageChange} />
        </div>
        <div className="w-1/2">
          <CreateAuctionForm handleChange={handleChange} form={form} />
        </div>
      </form>
    </>
  );
}

function CreateAuctionForm({ handleChange, form }) {
  return (
    <div className="dark:bg-zinc-900 mx-auto size-full space-y-5 rounded-2xl bg-white p-8 shadow-md">
      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="title"
        >
          Item Name
        </label>
        <input
          id="title"
          name="title"
          placeholder="Item Name"
          className="dark:border-zinc-700 dark:bg-zinc-800 w-full rounded-lg border border-gray-300 bg-white p-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
          value={form.title}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="description"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Brief item description"
          className="dark:border-zinc-700 dark:bg-zinc-800 h-28 w-full resize-none rounded-lg border border-gray-300 bg-white p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
          value={form.description}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="price"
        >
          Starting Price ($)
        </label>
        <input
          id="price"
          name="price"
          type="number"
          placeholder="Starting Price"
          className="dark:border-zinc-700 dark:bg-zinc-800 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
          value={form.price}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          htmlFor="duration"
        >
          Duration
        </label>
        <select
          id="duration"
          name="duration"
          className="dark:border-zinc-700 dark:bg-zinc-800 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
          value={form.duration}
          onChange={handleChange}
        >
          <option value="1">1 Day</option>
          <option value="3">3 Days</option>
          <option value="7">7 Days</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-green-600 px-5 py-2 font-medium text-white transition-colors duration-200 hover:bg-green-700"
      >
        Submit Auction
      </button>
    </div>
  );
}

CreateAuctionForm.propTypes = {
  handleChange: propTypes.func,
  form: propTypes.object,
};
