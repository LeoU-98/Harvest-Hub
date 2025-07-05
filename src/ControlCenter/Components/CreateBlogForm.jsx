import { ImageUploader } from "../../Shared/ImageUploader";
import propTypes from "prop-types";
export default function CreateBlogForm({
  blogData,
  setBlogData,
  handleCreate,
}) {
  return (
    <form
      onSubmit={handleCreate}
      className="space-y-6 rounded-xl bg-white p-6 shadow-lg"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ImageUploader
          label="Upload Blog Main Image"
          onImageChange={(img) => setBlogData({ ...blogData, blogImage: img })}
        />
        <ImageUploader
          label="Upload Blog Card Image"
          onImageChange={(img) => setBlogData({ ...blogData, cardImage: img })}
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Title</label>
        <input
          value={blogData.title}
          onChange={(e) => setBlogData({ ...blogData, title: e.target.value })}
          className="mt-1 w-full rounded-xl p-2 outline-none ring-2 ring-gray-400 focus:ring-green-500"
          placeholder="Blog title"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={blogData.description}
          onChange={(e) =>
            setBlogData({ ...blogData, description: e.target.value })
          }
          className="mt-1 h-32 w-full resize-none rounded-xl p-2 outline-none ring-2 ring-gray-400 focus:ring-green-500"
          placeholder="Blog content/description"
        />
      </div>
      <button
        type="submit"
        className="rounded-full bg-green-600 px-5 py-2 text-white duration-300 hover:bg-black"
      >
        Publish Blog
      </button>
    </form>
  );
}

CreateBlogForm.propTypes = {
  blogData: propTypes.object,
  setBlogData: propTypes.func,
  handleCreate: propTypes.func,
};
