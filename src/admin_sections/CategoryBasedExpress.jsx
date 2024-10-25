import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const CategoryBasedExpressContent = () => {
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
    heading: "",
    description1: "",
    description2: "",
    BenifitHeading: "",
    BenifitSubHead: "",
    b1: "",
    b2: "",
    b3: "",
    SixCategoriesCategoryBasedHeading: "",
    HowCategoryBasedDrawsWorkHeading: "",
    HowCategoryBasedDrawsWorkPara: "",
    eligibleCriteriaHeading: "",
    eligibileSubHead: "",
    ec1: "",
    ec2: "",
    ec3: "",
    ec4: "",
    ExpressEntryHeading: "",
    howToApplyHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",
    ha6: "",
    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    r6: "",
    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",
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
      `https://brightlight-node.onrender.com/categoryBasedExpress/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/categoryBasedExpress")
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
        placeholder="Citizenship Heading"
        name="heading"
        value={sectionDataSingle.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 1"
        name="description1"
        value={sectionDataSingle.description1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 2"
        name="description2"
        value={sectionDataSingle.description2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="BenifitHeading"
        value={sectionDataSingle.BenifitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits Subheading"
        name="BenifitSubHead"
        value={sectionDataSingle.BenifitSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 3 }, (_, i) => (
        <textarea
          key={`b${i + 1}`}
          placeholder={`Benefit ${i + 1}`}
          name={`b${i + 1}`}
          value={sectionDataSingle[`b${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Six Categories Heading"
        name="SixCategoriesCategoryBasedHeading"
        value={sectionDataSingle.SixCategoriesCategoryBasedHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How Category-Based Draws Work Heading"
        name="HowCategoryBasedDrawsWorkHeading"
        value={sectionDataSingle.HowCategoryBasedDrawsWorkHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How Category-Based Draws Work Paragraph"
        name="HowCategoryBasedDrawsWorkPara"
        value={sectionDataSingle.HowCategoryBasedDrawsWorkPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="eligibleCriteriaHeading"
        value={sectionDataSingle.eligibleCriteriaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Subheading"
        name="eligibileSubHead"
        value={sectionDataSingle.eligibileSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`ec${i + 1}`}
          placeholder={`Eligibility Criterion ${i + 1}`}
          name={`ec${i + 1}`}
          value={sectionDataSingle[`ec${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Express Entry History Heading"
        name="ExpressEntryHeading"
        value={sectionDataSingle.ExpressEntryHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="howToApplyHeading"
        value={sectionDataSingle.howToApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 6 }, (_, i) => (
        <textarea
          key={`ha${i + 1}`}
          placeholder={`How to Apply Step ${i + 1}`}
          name={`ha${i + 1}`}
          value={sectionDataSingle[`ha${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Common Reasons for Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 6 }, (_, i) => (
        <textarea
          key={`r${i + 1}`}
          placeholder={`Refusal Reason ${i + 1}`}
          name={`r${i + 1}`}
          value={sectionDataSingle[`r${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Paragraph 1"
        name="StillNotSurePara1"
        value={sectionDataSingle.StillNotSurePara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Paragraph 2"
        name="StillNotSurePara2"
        value={sectionDataSingle.StillNotSurePara2 || ""}
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

export default CategoryBasedExpressContent;
