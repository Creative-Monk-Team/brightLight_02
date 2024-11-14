import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AllMoreServicesCard = () => {
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
    fetch("https://brightlight-node.onrender.com/more-services-card")
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
      `https://brightlight-node.onrender.com/more-services-card/${editBlogId}`,
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
        fetch("https://brightlight-node.onrender.com/more-services-card")
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
      `https://brightlight-node.onrender.com/more-services-card/${blogId}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        notifyDelete();
        fetch("https://brightlight-node.onrender.com/more-services-card")
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
        <p className={styles.noBlogsPara}>Loading Services</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog._id} className={styles.blogItem}>
            <div className={styles.blogContent}>
              <h4>{blog.tool_name}</h4>
              <img
                src={blog.blue_stroke_img}
                alt="Service"
                className={styles.blogImage2}
              />
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
                  placeholder="Service Name"
                  name="tool_name"
                  value={newBlogData.tool_name || ""}
                  onChange={handleInputChange}
                />
                <textarea
                  placeholder="Service Description"
                  name="tool_desc"
                  value={newBlogData.tool_desc || ""}
                  onChange={handleInputChange}
                />
                <p className={styles.shortLabel}>
                  Choose Tool Link Below (Without /)
                </p>
                <select
                  placeholder="Service Link"
                  name="tool_link"
                  value={newBlogData.tool_link || ""}
                  onChange={handleInputChange}
                >
                  <option value="#"># (For Non Route / Coming Soon)</option>
                  <option value="booking">
                    Free Assesement
                    (https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj)
                  </option>
                  <option value="about-us">About Us</option>
                  <option value="additional-document">
                    Additional Document
                  </option>
                  <option value="adoption">Adoption</option>
                  <option value="agri-food-pilot-program">
                    Agri Food Pilot Program
                  </option>
                  <option value="agriculture-agri-food-occupation">
                    Agriculture Agri Food Occupation
                  </option>
                  <option value="agriculture-stream-lmia">
                    Agriculture Stream Lmia
                  </option>
                  <option value="bc-pnp">Bc Pnp</option>
                  <option value="bcpnp-calculator">BCPNP Calc</option>
                  <option value="bcpnp-calculator">Bcpnp Calculator</option>
                  <option value="booking">Booking</option>
                  <option value="bridging-open-work-permit-lp">
                    Bridging Open Work Permit LP
                  </option>
                  <option value="business-visitor-visa">
                    Business Visitor Visa
                  </option>
                  <option value="canadian-experience-class">
                    Canadian Experience Class
                  </option>
                  <option value="category-based">Category Based Draws</option>
                  <option value="category-based-express">
                    Category Based Express
                  </option>
                  <option value="change-college-program">
                    Change College Program
                  </option>
                  <option value="citizenship">Citizenship</option>
                  <option value="clb-ilets-calculator?selected=type1">
                    CLB Calc for IELTS
                  </option>
                  <option value="clb-ilets-calculator?selected=type2">
                    CLB Calc for TEF (French)
                  </option>
                  <option value="clb-ilets-calculator?selected=type3">
                    CLB Calc for CELPIP
                  </option>
                  <option value="cby">Cby</option>
                  <option value="common-law-partner-international">
                    Common Law Partner International
                  </option>
                  <option value="common-law-partner-permanent">
                    Common Law Partner Permanent
                  </option>
                  <option value="common-law-partner-temporary">
                    Common Law Partner Temporary
                  </option>
                  <option value="contact-us">Contact Us</option>
                  <option value="dependent-children">Dependent Children</option>
                  <option value="dual-intent-visa">Dual Intent Visa</option>
                  <option value="entry-level-semi-skilled">
                    Entry Level Semi Skilled
                  </option>
                  <option value="express-entry">Express Entry</option>
                  <option value="extensions-draft">Extensions Draft</option>
                  <option value="family-reunification-sponsorship">
                    Family Reunification Sponsorship
                  </option>
                  <option value="federal-skilled">Federal Skilled</option>
                  <option value="federal-skilled-trades-program">
                    Federal Skilled Trades Program
                  </option>
                  <option value="federal-skilled-worker-program">
                    Federal Skilled Worker Program
                  </option>
                  <option value="federal-skilled">FSWP Calc</option>
                  <option value="flagpoling">Flagpoling</option>
                  <option value="francophone-mobility-program">
                    Francophone Mobility Program
                  </option>
                  <option value="french-targeted-draw">
                    French Targeted Draw
                  </option>
                  <option value="global-stream-lmia">Global Stream Lmia</option>
                  <option value="health-authority-stream">
                    Health Authority Stream
                  </option>
                  <option value="healthcare-targeted-draw">
                    Healthcare Targeted Draw
                  </option>
                  <option value="humanitarian-compassionate">
                    Humanitarian Compassionate
                  </option>
                  <option value="immigration-tools">Immigration Tools</option>
                  <option value="in-home-caregiver-program-lp">
                    In Home Caregiver Program LP
                  </option>
                  <option value="inside-canada">Inside Canada</option>
                  <option value="international-graduate-program">
                    International Graduate Program
                  </option>
                  <option value="international-post-graduate-program">
                    International Post Graduate Program
                  </option>
                  <option value="lmia-reviewed">Lmia Reviewed</option>
                  <option value="lonely-canadian">Lonely Canadian</option>
                  <option value="low-wage-lmia">Low Wage Lmia</option>
                  <option value="non-sds">Non Sds</option>
                  <option value="open-work-permit">Open Work Permit</option>
                  <option value="open-work-permit-for-spouse-inland">
                    Open Work Permit for Spouse Inland
                  </option>
                  <option value="open-work-vulnerable-lp">
                    Open Work Vulnerable LP
                  </option>
                  <option value="openWork-dependent-children">
                    Open Work Dependent Children
                  </option>
                  <option value="orphan">Orphan</option>
                  <option value="outside-canada">Outside Canada</option>
                  <option value="parentsgrandparents">
                    Parents Grandparents
                  </option>
                  <option value="pathways-for-caregiver">
                    Pathways for Caregiver
                  </option>
                  <option value="permanent-residence-pathways-caregivers-lp">
                    Permanent Residence Pathways Caregivers LP
                  </option>
                  <option value="permanent-residency">
                    Permanent Residency
                  </option>
                  <option value="pgwp">Pgwp</option>
                  <option value="pilot-programs">Pilot Programs</option>
                  <option value="pnp">Pnp</option>
                  <option value="previous-draw-history">
                    Previous Draw History
                  </option>
                  <option value="priorities-program">Priorities Program</option>
                  <option value="pr-renewal">Pr Renewal</option>
                  <option value="reconsideration">Reconsideration</option>
                  <option value="reply-to-pfl-page">Reply to PFL Page</option>
                  <option value="restoration-status-draft">
                    Restoration Status Draft
                  </option>
                  <option value="rnip">Rnip</option>
                  <option value="same-sex">Same Sex</option>
                  <option value="sds">Sds</option>
                  <option value="skilled-worker-stream">
                    Skilled Worker Stream
                  </option>
                  <option value="spousal-open-work-permit">
                    Spousal Open Work Permit
                  </option>
                  <option value="spouse-common-law-sponsership">
                    Spouse Common Law Sponsorship
                  </option>
                  <option value="spouse-inland">Spouse Inland</option>
                  <option value="spouse-outland">Spouse Outland</option>
                  <option value="stem-targeted-draw">Stem Targeted Draw</option>
                  <option value="student-visa">Student Visa</option>
                  <option value="study-permit-minors">
                    Study Permit Minors
                  </option>
                  <option value="super-visa">Super Visa</option>
                  <option value="temporary-resident">Temporary Resident</option>
                  <option value="temporary-resident-permit-draft">
                    Temporary Resident Permit Draft
                  </option>
                  <option value="trade-occupation-targeted-draw">
                    Trade Occupation Targeted Draw
                  </option>
                  <option value="transport-occupation">
                    Transport Occupation
                  </option>
                  <option value="transport-occupation-targeted-draw">
                    Transport Occupation Targeted Draw
                  </option>
                  <option value="visitor-to-student">Visitor to Student</option>
                  <option value="visitor-visa">Visitor Visa</option>
                  <option value="work-permit">Work Permit</option>
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

export default AllMoreServicesCard;
