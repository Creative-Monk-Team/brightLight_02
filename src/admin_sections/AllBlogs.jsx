import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AllBlogs = () => {
  let notifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyError = () => {
    toast.error("Request Rejected, Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifySize = () => {
    toast.error("Large Image Size Recieved.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyDelete = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };
  const [blogs, setBlogs] = useState([]);
  const [editBlogId, setEditBlogId] = useState(null);
  const [newBlogData, setNewBlogData] = useState({
    blog_heading: "",
    image: "",
    tag_1: "",
    tag_2: "",
    tag_3: "",
    blog_content: "",
    metaTitle: "",
    metaDescription: "",
  });

  // Fetch all blogs
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/adding-blog")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      if (file) {
        setNewBlogData((prevData) => ({
          ...prevData,
          [e.target.name]: file,
        }));
      }
    } else {
      setNewBlogData({
        ...newBlogData,
        [e.target.name]: e.target.value,
      });
    }
  };

  // Handle edit click
  const handleEditClick = (blog) => {
    setEditBlogId(blog._id);
    setNewBlogData(blog);
  };

  // Handle update click
  const handleUpdateClick = () => {
    if (!editBlogId) {
      console.error("No ID found for update.");
      return;
    }

    const formData = new FormData();
    for (const key in newBlogData) {
      if (key === "image" && newBlogData[key]) {
        formData.append("image", newBlogData[key]);
      } else {
        formData.append(key, newBlogData[key]);
      }
    }

    fetch(`https://brightlight-node.onrender.com/adding-blog/${editBlogId}`, {
      method: "PATCH",
      body: formData,
    })
      .then((response) => {
        if (response.status === 413) {
          notifySize();
          throw new Error("Payload too large");
        } else if (!response.ok) {
          notifyError();
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then(() => {
        notifySuccess();
        setEditBlogId(null);
        setNewBlogData({
          blog_heading: "",
          image: "",
          tag_1: "",
          tag_2: "",
          tag_3: "",
          blog_content: "",
          metaTitle: "",
          metaDescription: "",
        });
        // Refetch blogs
        fetch("https://brightlight-node.onrender.com/adding-blog")
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
      })
      .catch((error) => {
        notifyError();
      });
  };

  // Handle delete click
  const handleDeleteClick = (blogId) => {
    fetch(`https://brightlight-node.onrender.com/adding-blog/${blogId}`, {
      method: "DELETE",
    })
      .then(() => {
        notifyDelete();
        fetch("https://brightlight-node.onrender.com/adding-blog")
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
      })
      .catch((error) => {
        notifyError();
      });
  };

  return (
    <div className={styles.blogList}>
      <ToastContainer />
      {blogs.length === 0 ? (
        <p className={styles.noBlogsPara}>No blogs available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className={styles.blogItem}>
            <div className={styles.blogContent}>
              <h4>{blog.blog_heading}</h4>
              <img src={blog.image} alt="Blog" className={styles.blogImage} />
              <div className={styles.editIcons}>
                {editBlogId === blog._id ? (
                  <>
                    <img
                      src={update}
                      className={styles.updateIcon}
                      onClick={handleUpdateClick}
                      alt="Update"
                    />
                    <img
                      src={editIcon}
                      className={styles.editIcon}
                      onClick={() => setEditBlogId(null)}
                      alt="Cancel Edit"
                    />
                  </>
                ) : (
                  <>
                    <img
                      src={editIcon}
                      className={styles.editIcon}
                      onClick={() => handleEditClick(blog)}
                      alt="Edit"
                    />
                    <img
                      src={deleteIcon}
                      className={styles.deleteIcon}
                      onClick={() => handleDeleteClick(blog._id)}
                      alt="Delete"
                    />
                  </>
                )}
              </div>
            </div>
            {editBlogId === blog._id && (
              <div className={styles.editForm}>
                <input
                  placeholder="Blog Heading"
                  name="blog_heading"
                  value={newBlogData.blog_heading}
                  onChange={handleInputChange}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleInputChange}
                  name="image"
                />
                {newBlogData.image && (
                  <img
                    src={newBlogData.image}
                    alt="New Blog"
                    className={styles.blogImage}
                  />
                )}
                <input
                  placeholder="Tag 1"
                  name="tag_1"
                  value={newBlogData.tag_1}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Tag 2"
                  name="tag_2"
                  value={newBlogData.tag_2}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Tag 3"
                  name="tag_3"
                  value={newBlogData.tag_3}
                  onChange={handleInputChange}
                />
                <textarea
                  placeholder="Blog Content"
                  name="blog_content"
                  value={newBlogData.blog_content}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Meta Title"
                  name="metaTitle"
                  value={newBlogData.metaTitle}
                  onChange={handleInputChange}
                />
                <input
                  placeholder="Meta Description"
                  name="metaDescription"
                  value={newBlogData.metaDescription}
                  onChange={handleInputChange}
                />
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllBlogs;
