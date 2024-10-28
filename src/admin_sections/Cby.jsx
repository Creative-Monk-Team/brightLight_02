import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const CbyContent = () => {
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
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",
    eligCritHeading: "",
    eligCritSubHead: "",
    eligReqHeading: "",
    eligApplSubmHead1: "",
    eligApplSubmPara: "",
    as1: "",
    as2: "",
    as2Sub1: "",
    as2Sub2: "",
    as2Sub3: "",
    as2Sub4: "",
    InternStuNotEligHeading: "",
    isne1: "",
    isne2: "",
    isne3: "",
    eligApplSubmHeading2: "",
    eligApplSubmPara2: "",
    as31: "",
    as3Oor: "",
    as32: "",
    as4: "",
    GradProgHeading: "",
    GradProgPara: "",
    ProffdegrProgHeading: "",
    pdp1: "",
    pdp2: "",
    pdp3: "",
    pdp4: "",
    pdp5: "",
    pdp6: "",
    pdp7: "",
    pdp8: "",
    pdp9: "",
    WhenToApplyHeading: "",
    wa1: "",
    wa2: "",
    wa3: "",
    HowToApply: "",
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
    NeedAssisHeading: "",
    NeedAssisPara: "",
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
      `https://brightlight-node.onrender.com/cby/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/cby")
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
        placeholder="Heading"
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
      {Array.from({ length: 8 }, (_, i) => (
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
        placeholder="Eligibility Criteria Heading"
        name="eligCritHeading"
        value={sectionDataSingle.eligCritHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Subheading"
        name="eligCritSubHead"
        value={sectionDataSingle.eligCritSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirements Heading"
        name="eligReqHeading"
        value={sectionDataSingle.eligReqHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 6 }, (_, i) => (
        <textarea
          key={`as${i + 1}`}
          placeholder={`Eligibility Requirement ${i + 1}`}
          name={`as${i + 1}`}
          value={sectionDataSingle[`as${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="How to Apply Heading"
        name="HowToApply"
        value={sectionDataSingle.HowToApply || ""}
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
      {Array.from({ length: 3 }, (_, i) => (
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
        placeholder="Need Assistance Heading"
        name="NeedAssisHeading"
        value={sectionDataSingle.NeedAssisHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Need Assistance Paragraph"
        name="NeedAssisPara"
        value={sectionDataSingle.NeedAssisPara || ""}
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

export default CbyContent;
