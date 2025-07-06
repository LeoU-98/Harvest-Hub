import { useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const initialLocation = {
  name: "",
  address: "",
  city: "",
  region: "",
  contactNumber: "",
  isPrimary: false,
};

const allCategories = [
  "Seeds",
  "Fertilizers",
  "Machinery",
  "Irrigation",
  "Pesticides",
  "Storage Equipment",
  "Livestock Supplies",
  "Other",
];

export default function MerchantEditProfile() {
  const [formData, setFormData] = useState({
    businessName: "",
    industryType: "",
    licenseNumber: "",
    ownerName: "",
    emails: [""],
    phoneNumbers: [""],
    locations: [initialLocation],
    productCategories: [],
    customCategory: "",
    brandsAvailable: "",
    deliveryOptions: {
      hasDelivery: false,
      regionsCovered: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (index, value) => {
    const updated = [...formData.phoneNumbers];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, phoneNumbers: updated }));
  };

  const handleAddPhone = () => {
    if (formData.phoneNumbers.length < 4) {
      setFormData((prev) => ({
        ...prev,
        phoneNumbers: [...prev.phoneNumbers, ""],
      }));
    }
  };

  const handleRemovePhone = (index) => {
    const updated = formData.phoneNumbers.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, phoneNumbers: updated }));
  };

  const handleEmailChange = (index, value) => {
    const updated = [...formData.emails];
    updated[index] = value;
    setFormData((prev) => ({ ...prev, emails: updated }));
  };

  const handleAddEmail = () => {
    if (formData.emails.length < 5) {
      setFormData((prev) => ({ ...prev, emails: [...prev.emails, ""] }));
    }
  };

  const handleRemoveEmail = (index) => {
    const updated = formData.emails.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, emails: updated }));
  };

  const handleLocationChange = (index, e) => {
    const { name, value, type, checked } = e.target;
    const updated = [...formData.locations];
    updated[index][name] = type === "checkbox" ? checked : value;
    setFormData((prev) => ({ ...prev, locations: updated }));
  };

  const handleAddLocation = () => {
    setFormData((prev) => ({
      ...prev,
      locations: [...prev.locations, { ...initialLocation }],
    }));
  };

  const handleRemoveLocation = (index) => {
    const updated = formData.locations.filter((_, i) => i !== index);
    setFormData((prev) => ({ ...prev, locations: updated }));
  };

  const handleCategorySelect = (e) => {
    const selected = e.target.value;
    if (!formData.productCategories.includes(selected)) {
      setFormData((prev) => ({
        ...prev,
        productCategories: [...prev.productCategories, selected],
      }));
    }
  };

  const handleRemoveCategory = (value) => {
    setFormData((prev) => ({
      ...prev,
      productCategories: prev.productCategories.filter((cat) => cat !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full space-y-6 p-6 lg:w-1/2 xl:w-2/3 2xl:w-3/4">
      <h2 className="text-2xl font-bold text-white">Merchant Profile Edit</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Business Info */}
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-5">
          <label>
            Business Name
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
            />
          </label>
          <label>
            Industry Type
            <input
              type="text"
              name="industryType"
              value={formData.industryType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
              placeholder="e.g. Seeds, Fertilizer"
            />
          </label>
          <label>
            License Number
            <input
              type="text"
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
            />
          </label>
          <label>
            Owner Name
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
            />
          </label>
        </div>
        {/* Emails */}
        <div className="rounded-2xl bg-white p-5">
          <label className="mb-1 block font-medium text-gray-700">Emails</label>

          <div className="grid gap-3 xl:grid-cols-3">
            {formData.emails.map((email, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-2 flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => handleEmailChange(idx, e.target.value)}
                  placeholder={`Email ${idx + 1}`}
                  className="w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
                />
                {idx > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveEmail(idx)}
                    className="text-red-500 duration-300 hover:rotate-180"
                  >
                    <XMarkIcon className="size-6" />
                  </button>
                )}
              </motion.div>
            ))}

            {formData.emails.length < 3 && (
              <button
                type="button"
                onClick={handleAddEmail}
                className="text-sm text-apple-500 hover:underline"
              >
                + Add another email
              </button>
            )}
          </div>
        </div>
        {/* Phones */}
        <div className="rounded-2xl bg-white p-5">
          <label className="mb-1 block font-medium text-gray-700">
            Phone Numbers
          </label>

          <div className="grid gap-3 xl:grid-cols-3">
            {formData.phoneNumbers.map((phone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-2 flex gap-2"
              >
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => handlePhoneChange(idx, e.target.value)}
                  placeholder={`Phone ${idx + 1}`}
                  className="w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
                />
                {idx > 0 && (
                  <button
                    type="button"
                    onClick={() => handleRemovePhone(idx)}
                    className="text-red-500 duration-300 hover:rotate-180"
                  >
                    <XMarkIcon className="size-6" />
                  </button>
                )}
              </motion.div>
            ))}

            {formData.phoneNumbers.length < 3 && (
              <button
                type="button"
                onClick={handleAddPhone}
                className="text-sm text-apple-500 hover:underline"
              >
                + Add another phone
              </button>
            )}
          </div>
        </div>

        {/* Locations */}
        <div className="rounded-2xl bg-white p-5">
          <label className="mb-1 block font-medium text-gray-700">
            Warehouse / Branch Locations
          </label>

          <div className="grid gap-3 xl:grid-cols-3">
            {formData.locations.map((loc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="relative mb-4 space-y-2 rounded-xl border border-gray-800 p-3"
              >
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => handleRemoveLocation(index)}
                    className="text-red-500 duration-300 hover:rotate-180"
                  >
                    <XMarkIcon className="size-6" />
                  </button>
                </div>
                <input
                  type="text"
                  name="name"
                  value={loc.name}
                  onChange={(e) => handleLocationChange(index, e)}
                  placeholder="Location name (e.g. Main Warehouse)"
                  className="w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="address"
                  value={loc.address}
                  onChange={(e) => handleLocationChange(index, e)}
                  placeholder="Address"
                  className="w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="city"
                  value={loc.city}
                  onChange={(e) => handleLocationChange(index, e)}
                  placeholder="City"
                  className="w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
                />
                <input
                  type="text"
                  name="region"
                  value={loc.region}
                  onChange={(e) => handleLocationChange(index, e)}
                  placeholder="Region"
                  className="w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
                />
                <input
                  type="tel"
                  name="contactNumber"
                  value={loc.contactNumber}
                  onChange={(e) => handleLocationChange(index, e)}
                  placeholder="Contact Number"
                  className="w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
                />
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="isPrimary"
                    checked={loc.isPrimary}
                    onChange={(e) => handleLocationChange(index, e)}
                  />
                  Set as Primary Location
                </label>
              </motion.div>
            ))}
          </div>
          {formData.locations.length < 6 && (
            <button
              type="button"
              onClick={handleAddLocation}
              className="mt-4 text-sm text-apple-500 hover:underline"
            >
              + Add another location
            </button>
          )}
        </div>

        {/* Product Categories */}
        <div className="rounded-2xl bg-white p-5">
          <label className="mb-1 block font-medium text-gray-700">
            Product Categories
          </label>
          <select
            onChange={handleCategorySelect}
            className="mb-2 block w-full rounded-xl border px-3 py-2"
          >
            <option value="">Select category</option>
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <div className="flex flex-wrap gap-2">
            {formData.productCategories.map((cat, i) => (
              <span
                key={i}
                className="flex items-center gap-1 rounded-full bg-emerald-900 px-3 py-1 text-sm text-white"
              >
                {cat}
                <button
                  type="button"
                  onClick={() => handleRemoveCategory(cat)}
                  className="duration-300 hover:rotate-180"
                >
                  <XMarkIcon className="text-red-white size-5" />
                </button>
              </span>
            ))}
          </div>
          {formData.productCategories.includes("Other") && (
            <input
              type="text"
              name="customCategory"
              placeholder="Enter custom category"
              value={formData.customCategory}
              onChange={handleChange}
              className="mt-2 block w-full rounded border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
            />
          )}
        </div>
        {/* Delivery */}
        <div className="rounded-2xl bg-white p-5">
          <label className="mb-1 block font-medium text-gray-700">
            Delivery Options
          </label>
          <label className="mb-2 flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.deliveryOptions.hasDelivery}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  deliveryOptions: {
                    ...prev.deliveryOptions,
                    hasDelivery: e.target.checked,
                  },
                }))
              }
            />
            We offer delivery
          </label>
          <input
            type="text"
            name="regionsCovered"
            value={formData.deliveryOptions.regionsCovered}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                deliveryOptions: {
                  ...prev.deliveryOptions,
                  regionsCovered: e.target.value,
                },
              }))
            }
            placeholder="e.g. Cairo, Alexandria"
            className="w-full rounded-xl border px-3 py-2 outline-none ring-1 ring-gray-300 focus:ring-green-500"
          />
        </div>

        <div className="rounded-2xl bg-white p-5">
          <label className="">
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input-sss w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
            />
          </label>
          <div className="mt-8 flex items-center justify-center">
            <button
              type="submit"
              className="w-[70%] rounded-full bg-apple-500 py-3 font-semibold text-white transition duration-300 hover:bg-black hover:text-white"
            >
              Save Info
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
