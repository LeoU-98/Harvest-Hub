import { useState } from "react";

function ChangePassword() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmNewPassword) {
      alert("New passwords do not match.");
      return;
    }

    // You can call your backend here
  };

  return (
    <div className="w-3/4 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Change Password</h2>

      <div className="rounded-2xl bg-white px-8 py-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block">
            Current Password
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
            />
          </label>

          <label className="block">
            New Password
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
            />
          </label>

          <label className="block">
            Confirm New Password
            <input
              type="password"
              name="confirmNewPassword"
              value={formData.confirmNewPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
            />
          </label>

          <div className="mt-8 flex items-center justify-center">
            <button
              type="submit"
              className="w-[70%] rounded-full bg-apple-500 py-3 font-semibold text-white transition duration-300 hover:bg-black hover:text-white"
            >
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
