import { useState } from "react";

function DeactivateAccount() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [reason, setReason] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!confirm) {
      alert("You must confirm the deactivation.");
      return;
    }

    // Call API to deactivate here
  };

  return (
    <div className="w-3/4 p-6">
      <h2 className="mb-6 text-2xl font-bold text-white">Deactivate Account</h2>

      <div className="rounded-2xl bg-white px-8 py-16">
        <h2 className="mb-6 text-center text-2xl font-bold text-red-600">
          Deactivating Account
        </h2>
        <p className="mb-4 text-sm text-gray-600">
          Warning: Deactivating your account will remove access to all features.
          You can recover it only by contacting support within 30 days.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <label className="block">
            Why are you deactivating your account?
            <select
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              className="mt-1 w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
            >
              <option value="">Select a reason</option>
              <option value="privacy">Concerns about privacy</option>
              <option value="not-using">I no longer use this account</option>
              <option value="issues">I faced issues or bugs</option>
              <option value="other">Other</option>
            </select>
          </label>

          {reason === "other" && (
            <label className="block">
              Please share your reason (optional)
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={4}
                className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
                placeholder="Your feedback helps us improve."
              />
            </label>
          )}

          <label className="block">
            Enter your password to confirm:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl px-3 py-2 outline-none ring-1 ring-gray-400 focus:ring-green-500"
            />
          </label>

          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={confirm}
              onChange={(e) => setConfirm(e.target.checked)}
            />
            I understand and want to deactivate my account.
          </label>
          <div className="mt-8 flex items-center justify-center">
            <button
              type="submit"
              className="w-[70%] rounded-full bg-red-500 py-3 font-semibold text-white transition duration-300 hover:bg-black hover:text-white"
            >
              Deactivate Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DeactivateAccount;
