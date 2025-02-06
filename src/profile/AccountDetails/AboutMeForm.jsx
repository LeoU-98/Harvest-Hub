export default function AboutMeForm() {
  return (
    <div>
      <p className="mb-5 rounded-br-xl rounded-tl-xl bg-gradient-to-l from-emerald-500 to-emerald-900 py-1 text-center text-3xl text-white">
        About Me
      </p>
      <p className="">Biography</p>
      <textarea
        name="bio"
        className="block min-h-40 w-full rounded-xl border border-gray-300 p-2 outline-none focus:border-green-500"
      />
    </div>
  );
}
