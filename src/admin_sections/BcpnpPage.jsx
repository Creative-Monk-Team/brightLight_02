import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const BcpnpPageContent = () => {
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
    Heading: "",
    Description1: "",
    Description2: "",
    fiveStreamsHeading: "",
    fiveStreamsNote: "",
    ApplyHeading: "",
    ApplyList1: "",
    ApplyList2: "",
    ApplyList3: "",
    ApplyList4: "",
    RefusalHeading: "",
    RefusalList1: "",
    RefusalList2: "",
    RefusalList3: "",
    RefusalList4: "",
    EligibilityHeading: "",
    EligibilitySubHead: "",
    EligibilityReviewLine: "",
    EligibilityCriteriaHeading: "",
    EligibilityList1: "",
    EligibilityList1NestedList1: "",
    EligibilityList1NestedList2: "",
    EligibilityList1NestedList2Nested1: "",
    EligibilityList1NestedList2Nested2: "",
    EligibilityList1NestedList3: "",
    EligibilityList1NestedList3Nested1: "",
    EligibilityList1NestedList3Nested2: "",
    EligibilityList1NestedList3Nested3: "",
    EligibilityList1NestedList3Nested4: "",
    EligibilityList1NestedList3Nested5: "",
    EligibilityList1NestedList3Nested6: "",
    EligibilityList1NestedList3Nested7: "",
    EligibilityList2: "",
    EligibilityList2NestedList1: "",
    EligibilityList2NestedList2: "",
    EligibilityList2NestedList3: "",
    EligibilityList2NestedList3Nested1: "",
    EligibilityList2NestedList3Nested2: "",
    EligibilityList3: "",
    EligibilityList3NestedList1: "",
    EligibilityList3NestedList1Nested1: "",
    EligibilityList3NestedList1Nested2: "",
    EligibilityList3NestedList2: "",
    EligibilityList4: "",
    EligibilityList4NestedList1: "",
    EligibilityList4NestedList2: "",
    EligibilityList5: "",
    EligibilityList5NestedList1: "",
    EligibilityList5NestedList2: "",
    EligibilityList6: "",
    EligibilityList6NestedList1: "",
    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",

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

    fetch(`https://brightlight-node.onrender.com/bc-pnp-page/${sectionDataSingle._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sectionDataSingle),
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
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/bc-pnp-page")
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
        name="Heading"
        value={sectionDataSingle.Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 1"
        name="Description1"
        value={sectionDataSingle.Description1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 2"
        name="Description2"
        value={sectionDataSingle.Description2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Five Streams Heading"
        name="fiveStreamsHeading"
        value={sectionDataSingle.fiveStreamsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Five Streams Note"
        name="fiveStreamsNote"
        value={sectionDataSingle.fiveStreamsNote || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Heading"
        name="ApplyHeading"
        value={sectionDataSingle.ApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {[...Array(4)].map((_, i) => (
        <textarea
          key={`ApplyList${i + 1}`}
          placeholder={`Apply List ${i + 1}`}
          name={`ApplyList${i + 1}`}
          value={sectionDataSingle[`ApplyList${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {[...Array(4)].map((_, i) => (
        <input
          key={`RefusalList${i + 1}`}
          placeholder={`Refusal Reason ${i + 1}`}
          name={`RefusalList${i + 1}`}
          value={sectionDataSingle[`RefusalList${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
      <input
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Subheading"
        name="EligibilitySubHead"
        value={sectionDataSingle.EligibilitySubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Review Line"
        name="EligibilityReviewLine"
        value={sectionDataSingle.EligibilityReviewLine || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Criteria Heading"
        name="EligibilityCriteriaHeading"
        value={sectionDataSingle.EligibilityCriteriaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Employer Eligibility Criteria"
        name="EligibilityList1"
        value={sectionDataSingle.EligibilityList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Operational Requirements"
        name="EligibilityList2"
        value={sectionDataSingle.EligibilityList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Compliance and Legal Considerations"
        name="EligibilityList3"
        value={sectionDataSingle.EligibilityList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Disqualifications"
        name="EligibilityList4"
        value={sectionDataSingle.EligibilityList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Company Ownership Restrictions"
        name="EligibilityList5"
        value={sectionDataSingle.EligibilityList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Other Criteria"
        name="EligibilityList6"
        value={sectionDataSingle.EligibilityList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Not Sure Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Not Sure Paragraph 1"
        name="StillNotSurePara1"
        value={sectionDataSingle.StillNotSurePara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Not Sure Paragraph 2"
        name="StillNotSurePara2"
        value={sectionDataSingle.StillNotSurePara2 || ""}
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

export default BcpnpPageContent;
