export default function ContactInfoForm() {
  return (
    <div>
      <p className="mb-5 rounded-br-xl rounded-tl-xl bg-gradient-to-l from-emerald-500 to-emerald-900 py-1 text-center text-3xl text-white">
        Contact info
      </p>
      {/* Email */}
      <label>
        Email
        <input
          type="text"
          name="Email"
          placeholder="LeoU@example.com"
          className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-green-500"
        />
      </label>
      {/* Phones  */}
      <div className="mt-3 flex justify-between gap-5">
        <label className="flex-grow">
          Work Phone
          <input
            type="text"
            name="workPhone"
            placeholder="01145024481 "
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-green-500"
          />
        </label>
        <label className="flex-grow">
          Mobile Phone
          <input
            type="text"
            name="mobilePhone"
            placeholder="01145024481"
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-green-500"
          />
        </label>
      </div>
    </div>
  );
}
