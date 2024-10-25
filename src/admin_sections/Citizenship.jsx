import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const CitizenshipContent = () => {
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
    CitizenshipHeading: "",
    CongratulationsPara: "",
    CongratulationsPara2: "",
    BenifitHeading: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    EligibilityHeading: "",
    EligibilitySubHeading: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    EligibilityNote: "",
    HowApplyHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    r6: "",
    r7: "",
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
      `https://brightlight-node.onrender.com/citizenship/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/citizenship")
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

      {/* Citizenship Heading */}
      <input
        placeholder="Citizenship Heading"
        name="CitizenshipHeading"
        value={sectionDataSingle.CitizenshipHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Congratulations Paragraphs */}
      <textarea
        placeholder="Congratulations Paragraph"
        name="CongratulationsPara"
        value={sectionDataSingle.CongratulationsPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Congratulations Paragraph 2"
        name="CongratulationsPara2"
        value={sectionDataSingle.CongratulationsPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Benefits Heading */}
      <input
        placeholder="Benefits Heading"
        name="BenifitHeading"
        value={sectionDataSingle.BenifitHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Benefits */}
      {["b1", "b2", "b3", "b4", "b5"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`Benefit ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      {/* Eligibility Section */}
      <input
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Sub Heading"
        name="EligibilitySubHeading"
        value={sectionDataSingle.EligibilitySubHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["e1", "e2", "e3", "e4"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`Eligibility Detail ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <textarea
        placeholder="Eligibility Note"
        name="EligibilityNote"
        value={sectionDataSingle.EligibilityNote}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* How to Apply Section */}
      <input
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["ha1", "ha2", "ha3", "ha4"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`How to Apply Detail ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      {/* Refusal Reasons Section */}
      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["r1", "r2", "r3", "r4", "r5", "r6", "r7"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`Refusal Reason ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      {/* Still Not Sure Section */}
      <input
        placeholder="Still Not Sure Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["s1", "s2"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`Still Not Sure Detail ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
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

export default CitizenshipContent;
