import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AllNews = () => {
  let [confirmDelete, setConfirmDelete] = useState(null);
  let [showDeletePopup, setShowDeletePopup] = useState(false);
  let [clickedOnYes, setClickedOnYes] = useState(false);
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
    news_heading: "",
    image: "",
    tag_1: "",
    tag_2: "",
    tag_3: "",
    alt_tag: "",
    news_content: "",
    metaTitle: "",
    metaDescription: "",
  });

  // Fetch all blogs
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/news")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data.reverse());
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

    fetch(`https://brightlight-node.onrender.com/news/${editBlogId}`, {
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
          news_heading: "",
          image: "",
          tag_1: "",
          tag_2: "",
          tag_3: "",
          alt_tag: "",
          news_content: "",
          metaTitle: "",
          metaDescription: "",
        });
        // Refetch blogs
        fetch("https://brightlight-node.onrender.com/news")
          .then((res) => res.json())
          .then((data) => {
            setBlogs(data);
          })
          .catch((error) => {
            console.log("Error fetching data:", error);
          });
      });
  };

  // Handle delete click
  // const handleDeleteClick = (blogId) => {
  //   fetch(`https://brightlight-node.onrender.com/news/${blogId}`, {
  //     method: "DELETE",
  //   })
  //     .then(() => {
  //       notifyDelete();
  //       fetch("https://brightlight-node.onrender.com/news")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setBlogs(data);
  //         })
  //         .catch((error) => {
  //           console.log("Error fetching data:", error);
  //         });
  //     })
  //     .catch((error) => {
  //       notifyError();
  //     });
  // };

  useEffect(() => {
    if (confirmDelete && clickedOnYes) {
      fetch(
        `https://brightlight-node.onrender.com/news/${confirmDelete}`,
        {
          method: "DELETE",
        }
      )
        .then(() => {
          notifyDelete();
          setShowDeletePopup(false);
          fetch("https://brightlight-node.onrender.com/news")
            .then((res) => res.json())
            .then((data) => {
              setBlogs(data);
            })
            .catch((error) => {
              console.log("Error fetching data:", error);
            });
          setConfirmDelete(null);
          setClickedOnYes(false);
        })
        .catch((error) => {
          notifyError();
        });
    }
  }, [confirmDelete, showDeletePopup, clickedOnYes]);

  return (
    <>
      <div className={styles.blogList}>
        <ToastContainer />
        {blogs.length === 0 ? (
          <p className={styles.noBlogsPara}>Loading News</p>
        ) : (
          blogs.map((blog) => (
            <div key={blog._id} className={styles.blogItem}>
              <div className={styles.blogContent}>
                <h4>{blog.news_heading}</h4>
                <img src={blog.image} alt="Blog" className={styles.blogImage} />
                <div className={styles.singleBlogOptions}>
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
                        onClick={() => {
                          setShowDeletePopup(true);
                          setConfirmDelete(blog._id);
                          // handleDeleteClick(blog._id)
                        }}
                        alt="Dlt"
                      />
                    </>
                  )}
                </div>
              </div>
              {editBlogId === blog._id && (
                <div className={styles.editForm}>
                  <input
                    placeholder="News Heading"
                    name="news_heading"
                    value={newBlogData.news_heading}
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
                    placeholder="News Content"
                    name="news_content"
                    value={newBlogData.news_content}
                    onChange={handleInputChange}
                  />
                  <input
                    placeholder="Image Alt"
                    name="alt_tag"
                    value={newBlogData.alt_tag || ""}
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
      <div
        className={`${styles.deletePopupParent} ${
          showDeletePopup ? styles.showDeletePopup : ""
        }`}
      >
        <div className={styles.deletePopup}>
          <h3>Are You Sure You Want To Delete This Item ?</h3>
          <div>
            <button
              className={styles.yesBtn}
              onClick={() => setClickedOnYes(true)}
            >
              Yes
            </button>
            <button
              className={styles.noBtn}
              onClick={() => {
                setConfirmDelete(null);
                setShowDeletePopup(false);
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllNews;
