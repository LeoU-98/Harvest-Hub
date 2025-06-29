// ManageBlogsPage.jsx
import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { FiAlertTriangle } from "react-icons/fi";

import propTypes from "prop-types";

export default function ManageBlogs() {
  const [activeTab, setActiveTab] = useState("create");
  const [blogData, setBlogData] = useState({
    title: "",
    description: "",
    blogImage: null,
    cardImage: null,
  });
  const [blogs, setBlogs] = useState([
    {
      title: "Smart Farming",
      description: "Using AI to enhance agriculture",
      blogImage: "/images/blogs/main.jpg",
      cardImage: "/images/blogs/card.jpg",
    },
  ]);
  const [searchTitle, setSearchTitle] = useState("");
  const [foundBlog, setFoundBlog] = useState(null);
  const [modalType, setModalType] = useState(null);
  const modalRef = useRef(null);
  const [editSearch, setEditSearch] = useState("");
  const [editBlogData, setEditBlogData] = useState(null);

  const handleCreate = (e) => {
    e.preventDefault();
    setBlogs([...blogs, blogData]);
    setBlogData({
      title: "",
      description: "",
      blogImage: null,
      cardImage: null,
    });
    alert("Blog created!");
  };

  const handleEditSearch = () => {
    const found = blogs.find(
      (b) => b.title.toLowerCase() === editSearch.trim().toLowerCase(),
    );
    setEditBlogData(found ? { ...found } : null);
  };

  const handleEditSave = () => {
    setBlogs(
      blogs.map((b) => (b.title === editBlogData.title ? editBlogData : b)),
    );
    alert("Blog updated!");
    setEditBlogData(null);
    setEditSearch("");
  };

  const handleSearch = () => {
    const found = blogs.find(
      (b) => b.title.toLowerCase() === searchTitle.trim().toLowerCase(),
    );
    setFoundBlog(found || null);
  };

  const handleDelete = () => {
    setBlogs(blogs.filter((b) => b.title !== foundBlog.title));
    setFoundBlog(null);
    setModalType(null);
    alert("Blog deleted!");
  };

  const closeModal = () => setModalType(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };
    if (modalType) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalType]);

  return (
    <div className="flex min-h-[640px] gap-6 p-5">
      {/* Side Nav */}
      <div className="w-48 space-y-4 rounded-2xl bg-black/15 p-4 shadow-md">
        <button
          onClick={() => setActiveTab("create")}
          className={`block w-full rounded-full px-5 py-5 text-center text-sm font-semibold duration-300 ${
            activeTab === "create"
              ? "bg-green-500 text-white"
              : "bg-white text-black hover:bg-green-500 hover:text-white"
          }`}
        >
          Create Blog
        </button>
        <button
          onClick={() => setActiveTab("remove")}
          className={`block w-full rounded-full px-5 py-5 text-center text-sm font-semibold duration-300 ${
            activeTab === "remove"
              ? "bg-red-500 text-white"
              : "bg-white text-black hover:bg-red-500 hover:text-white"
          }`}
        >
          Remove Blog
        </button>

        <button
          onClick={() => setActiveTab("edit")}
          className={`block w-full rounded-full px-5 py-5 text-center text-sm font-semibold duration-300 ${
            activeTab === "edit"
              ? "bg-blue-500 text-white"
              : "bg-white text-black hover:bg-blue-500 hover:text-white"
          }`}
        >
          Edit Blog
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h2 className="mb-6 text-3xl font-bold text-white">
          {activeTab === "create"
            ? "Create Blog"
            : activeTab === "remove"
              ? "Remove Blog"
              : "Edit Blog"}
        </h2>

        {activeTab === "edit" && (
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
                  <label className="text-sm font-medium text-gray-700">
                    Title
                  </label>
                  <input
                    value={editBlogData.title}
                    onChange={(e) =>
                      setEditBlogData({
                        ...editBlogData,
                        title: e.target.value,
                      })
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
        )}

        {activeTab === "create" && (
          <form
            onSubmit={handleCreate}
            className="space-y-6 rounded-xl bg-white p-6 shadow-lg"
          >
            <div className="grid grid-cols-2 gap-6">
              <ImageUploader
                label="Upload Blog Main Image"
                onImageChange={(img) =>
                  setBlogData({ ...blogData, blogImage: img })
                }
              />
              <ImageUploader
                label="Upload Blog Card Image"
                onImageChange={(img) =>
                  setBlogData({ ...blogData, cardImage: img })
                }
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Title</label>
              <input
                value={blogData.title}
                onChange={(e) =>
                  setBlogData({ ...blogData, title: e.target.value })
                }
                className="mt-1 w-full rounded-xl p-2 outline-none ring-2 ring-gray-400 focus:ring-green-500"
                placeholder="Blog title"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
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
        )}

        {activeTab === "remove" && (
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <div className="mb-6 flex gap-3">
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
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalType && foundBlog && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              className="relative w-full max-w-md rounded-xl bg-gradient-to-r from-red-600 to-orange-500 p-6 text-white shadow-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 200, damping: 20 },
              }}
              exit={{ scale: 0.8, opacity: 0, transition: { duration: 0.2 } }}
            >
              <h2 className="mb-4 text-xl font-bold">Delete Blog</h2>
              <div className="mb-4 flex items-center gap-3 rounded-lg bg-white/20 p-4 text-sm">
                <FiAlertTriangle className="text-2xl text-yellow-300" />
                Are you sure you want to delete{" "}
                <span className="font-bold text-yellow-100">
                  {foundBlog.title}
                </span>
                ? This cannot be undone.
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="rounded-md border border-white px-4 py-2 text-white hover:bg-white/20"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  className="rounded-md bg-white px-4 py-2 font-medium text-red-600 hover:bg-gray-100"
                >
                  Confirm
                </button>
              </div>
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 hover:rotate-180"
              >
                <XMarkIcon className="w-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const ImageUploader = ({ onImageChange, label, existingImage }) => {
  const [preview, setPreview] = useState(existingImage || null);
  const fileInputRef = useRef();

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image")) {
      const reader = new FileReader();
      reader.onload = () => setPreview(reader.result);
      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={(e) => e.preventDefault()}
      onClick={handleClick}
      className="group relative flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-white p-6 text-center transition hover:border-blue-500 hover:bg-blue-50"
    >
      {preview ? (
        <img
          src={preview}
          alt="Preview"
          className="mb-3 h-32 w-full rounded-md object-cover shadow"
        />
      ) : (
        <>
          <p className="text-sm font-medium text-green-900">{label}</p>
          <p className="text-xs text-gray-600">
            Drop image here or click to upload
          </p>
        </>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        className="absolute inset-0 h-full w-full opacity-0"
      />
    </div>
  );
};

ImageUploader.propTypes = {
  onImageChange: propTypes.func.isRequired,
  label: propTypes.string.isRequired,
  existingImage: propTypes.string,
};
