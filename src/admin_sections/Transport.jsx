import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

let TransportOccupation = () => {
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

  let [sectionData, setSectionData] = useState({
    heading: "",
    subHeading: "",
    description: "",
    eligibleHeading: "",
    eligibleDescription: "",
    eh1: "",
    ed1: "",
    eh2: "",
    ed2: "",
    eh3: "",
    ed3: "",
    chooseHeading: "",
    chooseDescription: "",
    ch1: "",
    cd1: "",
    cl1: "",
    ch2: "",
    cd2: "",
    cl2: "",
    ch3: "",
    cd3: "",
    cl3: "",
    chooseEnding: "",
    criteriaHeading: "",
    criteriaDescription: "",
    criteriaPoint1: "",
    criteriaPoint2: "",
    criteriaPoint3: "",
    criteriaPoint4: "",
    criteriaPoint5: "",
    drawHeading: "",
    drawDescription: "",
    contactHeading: "",
    contactDescription1: "",
    contactDescription2: "",
    appointmentLinkName: "",
    appointmentLink: "",
  });
  let [editMode, setEditMode] = useState(false);

  let handleInputChange = (e) => {
    setSectionData({
      ...sectionData,
      [e.target.name]: e.target.value,
    });
  };

  let handleEditClick = () => {
    setEditMode(true);
  };

  let handleUpdateClick = () => {
    fetch(
      `https://brightlight-node.onrender.com/transport-occupation/${sectionData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionData),
      }
    )
      .then((response) => {
        if (!response.ok) {
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
    fetch("https://brightlight-node.onrender.com/transport-occupation")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSectionData(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />
      {/* Heading Section */}
      <input
        placeholder="Heading"
        name="heading"
        value={sectionData.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Sub Heading"
        name="subHeading"
        value={sectionData.subHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description"
        name="description"
        value={sectionData.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Section */}
      <input
        placeholder="Eligible Heading"
        name="eligibleHeading"
        value={sectionData.eligibleHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Description"
        name="eligibleDescription"
        value={sectionData.eligibleDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Heading 1"
        name="eh1"
        value={sectionData.eh1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Description 1"
        name="ed1"
        value={sectionData.ed1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading 2"
        name="eh2"
        value={sectionData.eh2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Description 2"
        name="ed2"
        value={sectionData.ed2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading 3"
        name="eh3"
        value={sectionData.eh3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Description 3"
        name="ed3"
        value={sectionData.ed3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading 4"
        name="eh4"
        value={sectionData.eh4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Description 4"
        name="ed4"
        value={sectionData.ed4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {/* Repeat for eh2, ed2, eh3, ed3 */}

      {/* Choose Section */}
      <input
        placeholder="Choose Heading"
        name="chooseHeading"
        value={sectionData.chooseHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Choose Description"
        name="chooseDescription"
        value={sectionData.chooseDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Choice Heading 1"
        name="ch1"
        value={sectionData.ch1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Choice Description 1"
        name="cd1"
        value={sectionData.cd1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Choice Link 1"
        name="cl1"
        value={sectionData.cl1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Choice Heading 2"
        name="ch2"
        value={sectionData.ch2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Choice Description 2"
        name="cd2"
        value={sectionData.cd2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Choice Link 2"
        name="cl2"
        value={sectionData.cl2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Choice Heading 3"
        name="ch3"
        value={sectionData.ch3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Choice Description 3"
        name="cd3"
        value={sectionData.cd3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Choice Link 3"
        name="cl3"
        value={sectionData.cl3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {/* Repeat for ch2, cd2, cl2, ch3, cd3, cl3 */}

      {/* Criteria Section */}
      <input
        placeholder="Criteria Heading"
        name="criteriaHeading"
        value={sectionData.criteriaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Criteria Description"
        name="criteriaDescription"
        value={sectionData.criteriaDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Criteria Point 1"
        name="criteriaPoint1"
        value={sectionData.criteriaPoint1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Criteria Point 2"
        name="criteriaPoint2"
        value={sectionData.criteriaPoint2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Criteria Point 3"
        name="criteriaPoint3"
        value={sectionData.criteriaPoint3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Criteria Point 4"
        name="criteriaPoint4"
        value={sectionData.criteriaPoint4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Criteria Point 5"
        name="criteriaPoint5"
        value={sectionData.criteriaPoint5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {/* Repeat for criteriaPoint2, criteriaPoint3, criteriaPoint4, criteriaPoint5 */}

      {/* Draw Section */}
      <input
        placeholder="Draw Heading"
        name="drawHeading"
        value={sectionData.drawHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Draw Description"
        name="drawDescription"
        value={sectionData.drawDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Contact Section */}
      <input
        placeholder="Contact Heading"
        name="contactHeading"
        value={sectionData.contactHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Contact Description 1"
        name="contactDescription1"
        value={sectionData.contactDescription1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Contact Description 2"
        name="contactDescription2"
        value={sectionData.contactDescription2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Appointment Link Name"
        name="appointmentLinkName"
        value={sectionData.appointmentLinkName || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Appointment Link"
        name="appointmentLink"
        value={sectionData.appointmentLink || ""}
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

export default TransportOccupation;
