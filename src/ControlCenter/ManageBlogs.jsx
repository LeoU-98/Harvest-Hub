import { useState, useRef, useEffect } from "react";
import SidebarTabs from "./Components/SidebarTabs";
import CreateBlogForm from "./Components/CreateBlogForm";
import EditBlogForm from "./Components/EditBlogForm";
import RemoveBlogSection from "./Components/RemoveBlogSection";
import DeleteModal from "./Components/DeleteModal";

export default function ManageBlogsPage() {
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

  // Create Blog
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

  // Edit Blog
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

  // Remove Blog
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
    <div className="flex min-h-[640px] flex-col gap-6 p-5 lg:flex-row">
      {/* Sidebar */}
      <SidebarTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1">
        <h2 className="mb-6 text-3xl font-bold capitalize text-white">
          {activeTab} Blog
        </h2>

        {activeTab === "create" && (
          <CreateBlogForm
            blogData={blogData}
            setBlogData={setBlogData}
            handleCreate={handleCreate}
          />
        )}

        {activeTab === "edit" && (
          <EditBlogForm
            editSearch={editSearch}
            setEditSearch={setEditSearch}
            editBlogData={editBlogData}
            setEditBlogData={setEditBlogData}
            handleEditSearch={handleEditSearch}
            handleEditSave={handleEditSave}
          />
        )}

        {activeTab === "remove" && (
          <RemoveBlogSection
            searchTitle={searchTitle}
            setSearchTitle={setSearchTitle}
            handleSearch={handleSearch}
            foundBlog={foundBlog}
            setModalType={setModalType}
          />
        )}
      </div>

      {/* Modal */}
      <DeleteModal
        modalType={modalType}
        foundBlog={foundBlog}
        closeModal={closeModal}
        handleDelete={handleDelete}
        modalRef={modalRef}
      />
    </div>
  );
}
