import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const ChangeCollegeProgramContent = () => {
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
    ChangeCollProgHeading: "",
    ChangeCollProgPara1: "",
    ChangeCollProgCan2: "",
    EligibilityHeading: "",
    e1: "",
    e2: "",
    HowtoChangeHeading: "",
    HowtoChangeSubHead1: "",
    hc1: "",
    hc2: "",
    HowtoChangeSubHead2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    StillNotHeading: "",
    s1: "",
    s2: "",
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
      `https://brightlight-node.onrender.com/changeCollegeProgram/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/changeCollegeProgram")
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
        placeholder="Change Your College or Program Heading"
        name="ChangeCollProgHeading"
        value={sectionDataSingle.ChangeCollProgHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Change Your College or Program Paragraph 1"
        name="ChangeCollProgPara1"
        value={sectionDataSingle.ChangeCollProgPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Change Your College or Program Contact Info"
        name="ChangeCollProgCan2"
        value={sectionDataSingle.ChangeCollProgCan2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 2 }, (_, i) => (
        <textarea
          key={`e${i + 1}`}
          placeholder={`Eligibility Criterion ${i + 1}`}
          name={`e${i + 1}`}
          value={sectionDataSingle[`e${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="How to Change Heading"
        name="HowtoChangeHeading"
        value={sectionDataSingle.HowtoChangeHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Change Subheading 1"
        name="HowtoChangeSubHead1"
        value={sectionDataSingle.HowtoChangeSubHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 2 }, (_, i) => (
        <textarea
          key={`hc${i + 1}`}
          placeholder={`How to Change Step ${i + 1}`}
          name={`hc${i + 1}`}
          value={sectionDataSingle[`hc${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="How to Change Subheading 2"
        name="HowtoChangeSubHead2"
        value={sectionDataSingle.HowtoChangeSubHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 6 }, (_, i) => (
        <textarea
          key={`e${i + 3}`}
          placeholder={`Eligibility Requirement ${i + 3}`}
          name={`e${i + 3}`}
          value={sectionDataSingle[`e${i + 3}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Reasons for Refusals Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 5 }, (_, i) => (
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
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 2 }, (_, i) => (
        <textarea
          key={`s${i + 1}`}
          placeholder={`Still Not Sure Detail ${i + 1}`}
          name={`s${i + 1}`}
          value={sectionDataSingle[`s${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
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

export default ChangeCollegeProgramContent;
