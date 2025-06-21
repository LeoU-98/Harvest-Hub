export default function BasicInfoForm() {
  return (
    <div>
      <p className="mb-5 rounded-br-xl rounded-tl-xl bg-gradient-to-l from-emerald-500 to-emerald-900 py-1 text-center text-3xl text-white">
        Basic Info
      </p>
      {/* name  */}
      <div className="mb-3 flex justify-between gap-5">
        <label className="flex-grow">
          First Name
          <input
            type="text"
            name="firstName"
            placeholder="Mohamed "
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-green-500"
          />
        </label>
        <label className="flex-grow">
          Last Name
          <input
            type="text"
            name="lastName"
            placeholder="Hamdy"
            className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-green-500"
          />
        </label>
      </div>
      {/* Title */}
      <label>
        Title
        <input
          type="text"
          name="Title"
          placeholder="Some Title"
          className="block w-full rounded-lg border-2 px-2 py-1 outline-none focus:border-green-500"
        />
      </label>
    </div>
  );
}
