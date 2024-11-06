import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AllImmigrationToolsCard = () => {
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
    blue_stroke_img: "",
    white_stroke_img: "",
    tool_name: "",
    tool_desc: "",
    tool_link: "",
  });

  // Fetch all blogs
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/adding-immigration-tools")
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

    fetch(
      `https://brightlight-node.onrender.com/adding-immigration-tools/${editBlogId}`,
      {
        method: "PATCH",
        body: formData,
      }
    )
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
          blue_stroke_img: "",
          white_stroke_img: "",
          tool_name: "",
          tool_desc: "",
          tool_link: "",
        });
        // Refetch blogs
        fetch("https://brightlight-node.onrender.com/adding-immigration-tools")
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
    fetch(
      `https://brightlight-node.onrender.com/adding-immigration-tools/${blogId}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        notifyDelete();
        fetch("https://brightlight-node.onrender.com/adding-immigration-tools")
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
        <p className={styles.noBlogsPara}>Loading Tools</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className={styles.blogItem}>
            <div className={styles.blogContent}>
              <h4>{blog.tool_name}</h4>
              <img
                src={blog.blue_stroke_img}
                alt="Immigration Tool"
                className={styles.blogImage2}
              />
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
                  placeholder="Tool Name"
                  name="tool_name"
                  value={newBlogData.tool_name || ""}
                  onChange={handleInputChange}
                />
                <textarea
                  placeholder="Tool Description"
                  name="tool_desc"
                  value={newBlogData.tool_desc || ""}
                  onChange={handleInputChange}
                />
                <p className={styles.shortLabel}>
                  Choose Tool Link Below (Without /)
                </p>
                <select
                  placeholder="Tool Link"
                  name="tool_link"
                  value={newBlogData.tool_link || ""}
                  onChange={handleInputChange}
                >
                  <option value="#"># (For Non Route / Coming Soon)</option>
                  <option value="booking">
                    Free Assesement
                    (https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj)
                  </option>
                  <option value="federal-skilled">FSWP Calc</option>
                  <option value="bcpnp-calculator">BCPNP Calc</option>
                  <option value="clb-ilets-calculator?selected=type1">
                    CLB Calc for IELTS
                  </option>
                  <option value="clb-ilets-calculator?selected=type3">
                    CLB Calc for CELPIP
                  </option>
                  <option value="clb-ilets-calculator?selected=type2">
                    CLB Calc for TEF (French)
                  </option>
                  <option value="category-based">Category Based Draws</option>
                  <option value="link8">link 8</option>
                  <option value="link9">link 9</option>
                  <option value="link10">link 10</option>
                </select>
                <p className={styles.shortLabel}>Blue Image Below</p>
                <input
                  type="file"
                  name="blue_stroke_img"
                  onChange={handleInputChange}
                />

                <p className={styles.shortLabel}>White Image Below</p>
                <input
                  type="file"
                  name="white_stroke_img"
                  onChange={handleInputChange}
                />
                {newBlogData.blue_stroke_img && (
                  <img
                    className={styles.existingImageSmall2}
                    src={newBlogData.blue_stroke_img}
                    alt="Preview"
                  />
                )}

                {newBlogData.white_stroke_img && (
                  <img
                    className={`${styles.existingImageSmall2} ${styles.blueImage}`}
                    src={newBlogData.white_stroke_img}
                    alt="Preview"
                  />
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default AllImmigrationToolsCard;
