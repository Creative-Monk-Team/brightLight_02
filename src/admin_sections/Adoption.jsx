import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

let Adoption = () => {
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

  let [sectionDataSingle, setSectionDataSingle] = useState({
    adoptionHeading: "",
    adoptionPara1: "",
    adoptionPara2: "",
    TwoMainHeading: "",
    TwoMainPara1: "",
    TwoMainPara2: "",
    IntraHeading: "",
    IntraSubHead: "",
    IntraListHead: "",
    IL1: "",
    IL2: "",
    IL3: "",
    IL4: "",
    IL5: "",
    IL6: "",
    InterHeading: "",
    InterSubHead: "",
    InterListHead: "",
    IrL1: "",
    IrL2: "",
    IrL3: "",
    IrL4: "",
    IrL5: "",
    EligibilityHeading: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    EligibilityNote: "",
    RefusalHeading: "",
    RefusalSubHead: "",
    r1: "",
    r2: "",
    r3: "",
    StillNotHeading: "",
    s1: "",
    s2: "",
    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",
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
      `https://brightlight-node.onrender.com/adoption/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/adoption")
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
        placeholder="Adoption Heading"
        name="adoptionHeading"
        value={sectionDataSingle.adoptionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Adoption Paragraph 1"
        name="adoptionPara1"
        value={sectionDataSingle.adoptionPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Adoption Paragraph 2"
        name="adoptionPara2"
        value={sectionDataSingle.adoptionPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Two Main Types Heading"
        name="TwoMainHeading"
        value={sectionDataSingle.TwoMainHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Two Main Type 1"
        name="TwoMainPara1"
        value={sectionDataSingle.TwoMainPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Two Main Type 2"
        name="TwoMainPara2"
        value={sectionDataSingle.TwoMainPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {/* Intra-Country Adoption Section */}
      <input
        placeholder="Intra-Country Adoption Heading"
        name="IntraHeading"
        value={sectionDataSingle.IntraHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Intra-Country Adoption Subheading"
        name="IntraSubHead"
        value={sectionDataSingle.IntraSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Intra-Country Adoption How to Apply"
        name="IntraListHead"
        value={sectionDataSingle.IntraListHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {[...Array(6)].map((_, i) => (
        <input
          key={`IL${i + 1}`}
          placeholder={`Intra-Country Adoption Step ${i + 1}`}
          name={`IL${i + 1}`}
          value={sectionDataSingle[`IL${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      {/* Inter-Country Adoption Section */}
      <input
        placeholder="Inter-Country Adoption Heading"
        name="InterHeading"
        value={sectionDataSingle.InterHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Inter-Country Adoption Subheading"
        name="InterSubHead"
        value={sectionDataSingle.InterSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Inter-Country Adoption How to Apply"
        name="InterListHead"
        value={sectionDataSingle.InterListHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {[...Array(5)].map((_, i) => (
        <input
          key={`IrL${i + 1}`}
          placeholder={`Inter-Country Adoption Step ${i + 1}`}
          name={`IrL${i + 1}`}
          value={sectionDataSingle[`IrL${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      {/* Eligibility Section */}
      <input
        placeholder="Eligibility Criteria Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {[...Array(6)].map((_, i) => (
        <input
          key={`e${i + 1}`}
          placeholder={`Eligibility Criterion ${i + 1}`}
          name={`e${i + 1}`}
          value={sectionDataSingle[`e${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      <textarea
        placeholder="Eligibility Note"
        name="EligibilityNote"
        value={sectionDataSingle.EligibilityNote || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {/* Refusal Section */}
      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Subheading"
        name="RefusalSubHead"
        value={sectionDataSingle.RefusalSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {[...Array(3)].map((_, i) => (
        <input
          key={`r${i + 1}`}
          placeholder={`Refusal Reason ${i + 1}`}
          name={`r${i + 1}`}
          value={sectionDataSingle[`r${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      {/* Still Not Sure Section */}
      <input
        placeholder="Still Not Sure Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Text 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Text 2"
        name="s2"
        value={sectionDataSingle.s2 || ""}
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

export default Adoption;
