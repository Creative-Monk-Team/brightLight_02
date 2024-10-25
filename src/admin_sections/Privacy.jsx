import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import {ToastContainer, toast, Bounce } from "react-toastify";

let Privacy = () => {
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
  let [sectionDataSingle, setSectionDataSingle] = useState({
    heading: "",
    description: "",
    subHeading1: "",
    subHeadingDescription1: "",
    subHeading2: "",
    subHeadingDescription2: "",
    subHeading3: "",
    subHeadingDescription3: "",
    subHeading4: "",
    subHeadingDescription4: "",
    subHeading5: "",
    subHeadingDescription5: "",
    subHeading6: "",
    subHeadingDescription6: "",
    subHeading7: "",
    subHeadingDescription7: "",
    subHeading8: "",
    subHeadingDescription8: "",
    subHeading9: "",
    subHeadingDescription9: "",
    subHeading10: "",
    subHeadingDescription10: "",
  });
  let [editMode, setEditMode] = useState(false);

  let handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  let handleEditClick = () => {
    setEditMode(true);
  };

  let handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/privacy-policy/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionDataSingle),
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
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/privacy-policy")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSectionDataSingle(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer/>
      <input
        placeholder="Heading"
        name="heading"
        value={sectionDataSingle.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description"
        name="description"
        value={sectionDataSingle.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 10 }, (_, i) => (
        <div key={i}>
          <input
            placeholder={`Sub Heading ${i + 1}`}
            name={`subHeading${i + 1}`}
            value={sectionDataSingle[`subHeading${i + 1}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder={`Sub Heading ${i + 1} Description`}
            name={`subHeadingDescription${i + 1}`}
            value={sectionDataSingle[`subHeadingDescription${i + 1}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      ))}
      <div className={styles.editIcons}>
        {editMode ? (
          <img
            src={update}
            className={styles.updateIcon}
            onClick={handleUpdateClick}
            alt="Update"
          />
        ) : (
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
          />
        )}
        
      </div>
    </div>
  );
};

export default Privacy;
