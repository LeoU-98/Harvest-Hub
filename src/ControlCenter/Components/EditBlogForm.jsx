import { ImageUploader } from "../../shared/ImageUploader";
import propTypes from "prop-types";

export default function EditBlogForm({
  editSearch,
  setEditSearch,
  handleEditSearch,
  editBlogData,
  setEditBlogData,
  handleEditSave,
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-6 flex gap-3">
        <input
          value={editSearch}
          onChange={(e) => setEditSearch(e.target.value)}
          placeholder="Search blog to edit"
          className="flex-1 rounded-full px-3 py-2 outline-none ring-2 ring-gray-400 focus:ring-green-500"
        />
        <button
          onClick={handleEditSearch}
          className="rounded-full bg-green-500 px-4 py-2 text-white duration-300 hover:bg-black"
        >
          Search
        </button>
      </div>

      {editBlogData && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEditSave();
          }}
          className="space-y-6"
        >
          <div className="grid grid-cols-2 gap-6">
            <ImageUploader
              label="Update Blog Main Image"
              onImageChange={(img) =>
                setEditBlogData({ ...editBlogData, blogImage: img })
              }
              existingImage={editBlogData.blogImage}
            />
            <ImageUploader
              label="Update Blog Card Image"
              onImageChange={(img) =>
                setEditBlogData({ ...editBlogData, cardImage: img })
              }
              existingImage={editBlogData.cardImage}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              value={editBlogData.title}
              onChange={(e) =>
                setEditBlogData({ ...editBlogData, title: e.target.value })
              }
              className="mt-1 w-full rounded-full px-3 py-2 outline-none ring-2 ring-gray-400 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              value={editBlogData.description}
              onChange={(e) =>
                setEditBlogData({
                  ...editBlogData,
                  description: e.target.value,
                })
              }
              className="mt-1 h-32 w-full resize-none rounded-full p-2 outline-none ring-2 ring-gray-400 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="rounded-full bg-yellow-500 px-5 py-2 text-white hover:bg-black"
          >
            Save Changes
          </button>
        </form>
      )}
    </div>
  );
}

EditBlogForm.propTypes = {
  editSearch: propTypes.string,
  setEditSearch: propTypes.func,
  handleEditSearch: propTypes.func,
  editBlogData: propTypes.object,
  setEditBlogData: propTypes.func,
  handleEditSave: propTypes.func,
};
