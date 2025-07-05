import { useState } from "react";
import { ImageUploader } from "../Shared/ImageUploader";
import propTypes from "prop-types";

export default function CreateAuctionPage() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    duration: "1",
    startDate: "", // New field
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
  };

  return (
    <>
      <h3 className="mb-4 text-2xl font-bold text-white">Create Auction</h3>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col-reverse gap-4 px-6 py-5 lg:h-[600px] lg:flex-row"
      >
        <div className="lg:w-1/2">
          <ImageUploader onImagesChange={handleImageChange} />
        </div>
        <div className="lg:w-1/2">
          <CreateAuctionForm handleChange={handleChange} form={form} />
        </div>
      </form>
    </>
  );
}

function CreateAuctionForm({ handleChange, form }) {
  return (
    <div className="dark:bg-zinc-900 mx-auto size-full space-y-5 rounded-2xl bg-white p-8 shadow-md">
      {/* Item Name */}
      <div>
        <label
          htmlFor="title"
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
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

      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
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

      {/* Starting Price */}
      <div>
        <label
          htmlFor="price"
          className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
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

      <div className="flex items-center justify-center gap-2">
        {/* Start Date */}
        <div className="w-1/2">
          <label
            htmlFor="startDate"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Start Date
          </label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            className="dark:border-zinc-700 dark:bg-zinc-800 w-full rounded-lg border border-gray-300 bg-white p-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 dark:text-white"
            value={form.startDate}
            onChange={handleChange}
          />
        </div>

        {/* Duration */}
        <div className="w-1/2">
          <label
            htmlFor="duration"
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
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
      </div>
      {/* Submit Button */}
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
