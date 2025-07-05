import propTypes from "prop-types";

export default function RemoveBlogSection({
  searchTitle,
  setSearchTitle,
  handleSearch,
  foundBlog,
  setModalType,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-6 flex flex-col gap-3 md:flex-row">
        <input
          value={searchTitle}
          onChange={(e) => setSearchTitle(e.target.value)}
          placeholder="Search by blog title"
          className="flex-1 rounded-full px-3 py-2 outline-none ring-2 ring-gray-400 focus:ring-green-500"
        />
        <button
          onClick={handleSearch}
          className="rounded-full bg-green-500 px-4 py-2 text-white duration-300 hover:bg-black"
        >
          Search
        </button>
      </div>

      {foundBlog ? (
        <div className="rounded-2xl border bg-white p-5 text-center shadow-md">
          <img
            src={foundBlog.cardImage}
            alt="Blog card"
            className="mx-auto h-40 rounded-lg object-cover"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">
            {foundBlog.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {foundBlog.description.slice(0, 80)}...
          </p>
          <button
            onClick={() => setModalType("delete")}
            className="mt-5 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Delete Blog
          </button>
        </div>
      ) : (
        searchTitle && (
          <p className="text-center text-red-600">Blog not found.</p>
        )
      )}
    </div>
  );
}

RemoveBlogSection.propTypes = {
  searchTitle: propTypes.string,
  setSearchTitle: propTypes.func,
  handleSearch: propTypes.func,
  foundBlog: propTypes.object,
  setModalType: propTypes.func,
};
