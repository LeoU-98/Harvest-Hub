// src/components/profile/MerchantEditProfileBasicInfo.jsx
import { useState } from "react";

const initialData = {
  firstName: "Ahmed",
  lastName: "El-Sayed",
  email: "ahmed.merchant@example.com",
  address: "23 Industrial Zone, Giza, Egypt",
  phone: "01012345678",
  secondPhone: "01198765432",
};

export default function BasicInfoEdit() {
  const [formData, setFormData] = useState({
    firstName: initialData.firstName || "",
    lastName: initialData.lastName || "",
    email: initialData.email || "",
    password: "",
    confirmPassword: "",
    address: initialData.address || "",
    phone: initialData.phone || "",
    secondPhone: initialData.secondPhone || "",
  });

  const handleUpdate = (updatedData) => {
    // Optionally send to backend
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    handleUpdate(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-3/4 space-y-5 rounded-xl p-6">
      <h3 className="text-2xl font-bold text-white">Basic Info</h3>

      <div className="space-y-5">
        <div className="rounded-2xl bg-white px-8 py-16">
          <div className="mb-5 flex items-center gap-5">
            <label className="w-1/2">
              First Name
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
              />
            </label>
            <label className="w-1/2">
              Last Name
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
              />
            </label>
          </div>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
            />
          </label>
        </div>

        <div className="rounded-2xl bg-white px-8 py-16">
          <label className="">
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
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
      </div>
    </form>
  );
}
