import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const RestorationContent = () => {
  const notifySuccess = () => {
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

  const notifyError = () => {
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

  const notifySize = () => {
    toast.error("Large Image Size Received.", {
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

  const [sectionDataSingle, setSectionDataSingle] = useState({
    restorationStatusDraftHeading: "",
    restorationStatusDraftPara1: "",
    restorationStatusDraftPara2: "",
    restorationStatusDraftPara3: "",
    restorationStatusDraftPara4: "",
    HowToCheckHeading: "",
    HowToCheckSubHead: "",
    hc1: "",
    hc2: "",
    WhatAreRequHeading: "",
    WhatAreRequSubHead: "",
    WRLi1: "",
    WRLi2: "",
    WRLi3: "",
    WrNote: "",
    HowToApplyHeading: "",
    HowToApplySubHead: "",
    haLi1: "",
    haLi2: "",
    haLi3: "",
    haLi4: "",
    haLi5: "",
    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    StillNotHeading: "",
    s1: "",
    s2: "",
    s3: "",

    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/restorationStatus/${sectionDataSingle._id}`,
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
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/restorationStatus")
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
      <ToastContainer />

      <input
        placeholder="Restoration Status Draft Heading"
        name="restorationStatusDraftHeading"
        value={sectionDataSingle.restorationStatusDraftHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Restoration Status Draft Paragraph 1"
        name="restorationStatusDraftPara1"
        value={sectionDataSingle.restorationStatusDraftPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Restoration Status Draft Paragraph 2"
        name="restorationStatusDraftPara2"
        value={sectionDataSingle.restorationStatusDraftPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Restoration Status Draft Paragraph 3"
        name="restorationStatusDraftPara3"
        value={sectionDataSingle.restorationStatusDraftPara3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Restoration Status Draft Paragraph 4"
        name="restorationStatusDraftPara4"
        value={sectionDataSingle.restorationStatusDraftPara4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Check Heading"
        name="HowToCheckHeading"
        value={sectionDataSingle.HowToCheckHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Check Subheading"
        name="HowToCheckSubHead"
        value={sectionDataSingle.HowToCheckSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Check 1"
        name="hc1"
        value={sectionDataSingle.hc1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Check 2"
        name="hc2"
        value={sectionDataSingle.hc2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="What Are Required Heading"
        name="WhatAreRequHeading"
        value={sectionDataSingle.WhatAreRequHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="What Are Required Subheading"
        name="WhatAreRequSubHead"
        value={sectionDataSingle.WhatAreRequSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Requirement List Item 1"
        name="WRLi1"
        value={sectionDataSingle.WRLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Requirement List Item 2"
        name="WRLi2"
        value={sectionDataSingle.WRLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Requirement List Item 3"
        name="WRLi3"
        value={sectionDataSingle.WRLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="What Are Required Note"
        name="WrNote"
        value={sectionDataSingle.WrNote || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowToApplyHeading"
        value={sectionDataSingle.HowToApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Subheading"
        name="HowToApplySubHead"
        value={sectionDataSingle.HowToApplySubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 1"
        name="haLi1"
        value={sectionDataSingle.haLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 2"
        name="haLi2"
        value={sectionDataSingle.haLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 3"
        name="haLi3"
        value={sectionDataSingle.haLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 4"
        name="haLi4"
        value={sectionDataSingle.haLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 5"
        name="haLi5"
        value={sectionDataSingle.haLi5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure 2"
        name="s2"
        value={sectionDataSingle.s2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure 3"
        name="s3"
        value={sectionDataSingle.s3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading01"
        value={sectionDataSingle.WhyChooseUsHeading01 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 1"
        name="wcu1"
        value={sectionDataSingle.wcu1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 2"
        name="wcu2"
        value={sectionDataSingle.wcu2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us Point 3"
        name="wcu3"
        value={sectionDataSingle.wcu3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 4"
        name="wcu4"
        value={sectionDataSingle.wcu4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
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

export default RestorationContent;
