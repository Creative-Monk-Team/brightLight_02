import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const FrancophoneContent = () => {
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
    FrancophoneHeading: "",
    FrancophonePara: "",

    BenifitsHeading: "",
    BenifitsSubHeading: "",
    BenifitsList1: "",
    BenifitsList2: "",
    BenifitsList3: "",
    BenifitsList4: "",
    BenifitsList5: "",

    EligibilityHeading: "",
    EligibilitySubHead: "",
    EligibilityList1: "",
    EligibilityList2: "",
    EligibilityList3: "",

    EmpReqHeading: "",
    EmpReqList1: "",
    EmpReqList2: "",
    EmpReqList3: "",
    EmpReqList4: "",

    WorkPerDurHeading: "",
    WorkPerDurSubHead: "",
    WorkPerDurList1: "",
    WorkPerDurList2: "",

    FamilyMemHeading: "",
    FamilyMemSubHead: "",
    FamilyMemList1: "",
    FamilyMemList2: "",

    AppProHeading: "",
    AppProSubHead1: "",
    AppProSubHead1List1: "",
    AppProSubHead1List2: "",
    AppProSubHead2: "",
    AppProSubHead2List1: "",
    AppProSubHead2List2: "",
    AppProSubHead3: "",
    AppProSubHead3List1: "",
    AppProSubHead3List2: "",
    AppProSubHead3List3: "",

    WorkPerRenHeading: "",
    WorkPerRenSubHead: "",
    WorkPerRenList: "",

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
      `https://brightlight-node.onrender.com/francoMob/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/francoMob")
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
        placeholder="Francophone Mobility Program Heading"
        name="FrancophoneHeading"
        value={sectionDataSingle.FrancophoneHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Francophone Program Description"
        name="FrancophonePara"
        value={sectionDataSingle.FrancophonePara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits of Francophone Mobility Program Heading"
        name="BenifitsHeading"
        value={sectionDataSingle.BenifitsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits Subheading"
        name="BenifitsSubHeading"
        value={sectionDataSingle.BenifitsSubHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 1"
        name="BenifitsList1"
        value={sectionDataSingle.BenifitsList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 2"
        name="BenifitsList2"
        value={sectionDataSingle.BenifitsList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 3"
        name="BenifitsList3"
        value={sectionDataSingle.BenifitsList3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 4"
        name="BenifitsList4"
        value={sectionDataSingle.BenifitsList4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 5"
        name="BenifitsList5"
        value={sectionDataSingle.BenifitsList5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Subheading"
        name="EligibilitySubHead"
        value={sectionDataSingle.EligibilitySubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria 1"
        name="EligibilityList1"
        value={sectionDataSingle.EligibilityList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria 2"
        name="EligibilityList2"
        value={sectionDataSingle.EligibilityList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria 3"
        name="EligibilityList3"
        value={sectionDataSingle.EligibilityList3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Employer Requirements Heading"
        name="EmpReqHeading"
        value={sectionDataSingle.EmpReqHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Requirement 1"
        name="EmpReqList1"
        value={sectionDataSingle.EmpReqList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Requirement 2"
        name="EmpReqList2"
        value={sectionDataSingle.EmpReqList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Requirement 3"
        name="EmpReqList3"
        value={sectionDataSingle.EmpReqList3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Requirement 4"
        name="EmpReqList4"
        value={sectionDataSingle.EmpReqList4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Work Permit Duration Heading"
        name="WorkPerDurHeading"
        value={sectionDataSingle.WorkPerDurHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Permit Duration Subheading"
        name="WorkPerDurSubHead"
        value={sectionDataSingle.WorkPerDurSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Permit Duration Criteria 1"
        name="WorkPerDurList1"
        value={sectionDataSingle.WorkPerDurList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Permit Duration Criteria 2"
        name="WorkPerDurList2"
        value={sectionDataSingle.WorkPerDurList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Family Members Heading"
        name="FamilyMemHeading"
        value={sectionDataSingle.FamilyMemHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Family Members Subheading"
        name="FamilyMemSubHead"
        value={sectionDataSingle.FamilyMemSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Family Member Option 1"
        name="FamilyMemList1"
        value={sectionDataSingle.FamilyMemList1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Family Member Option 2"
        name="FamilyMemList2"
        value={sectionDataSingle.FamilyMemList2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Process Heading"
        name="AppProHeading"
        value={sectionDataSingle.AppProHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 1"
        name="AppProSubHead1"
        value={sectionDataSingle.AppProSubHead1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 1 List 1"
        name="AppProSubHead1List1"
        value={sectionDataSingle.AppProSubHead1List1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 1 List 2"
        name="AppProSubHead1List2"
        value={sectionDataSingle.AppProSubHead1List2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 2"
        name="AppProSubHead2"
        value={sectionDataSingle.AppProSubHead2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 2 List 1"
        name="AppProSubHead2List1"
        value={sectionDataSingle.AppProSubHead2List1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 2 List 2"
        name="AppProSubHead2List2"
        value={sectionDataSingle.AppProSubHead2List2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 3"
        name="AppProSubHead3"
        value={sectionDataSingle.AppProSubHead3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 3 List 1"
        name="AppProSubHead3List1"
        value={sectionDataSingle.AppProSubHead3List1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 3 List 2"
        name="AppProSubHead3List2"
        value={sectionDataSingle.AppProSubHead3List2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Subheading 3 List 3"
        name="AppProSubHead3List3"
        value={sectionDataSingle.AppProSubHead3List3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Work Permit Renewals Heading"
        name="WorkPerRenHeading"
        value={sectionDataSingle.WorkPerRenHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Permit Renewals Subheading"
        name="WorkPerRenSubHead"
        value={sectionDataSingle.WorkPerRenSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Permit Renewals List"
        name="WorkPerRenList"
        value={sectionDataSingle.WorkPerRenList}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure? Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure? Paragraph 1"
        name="StillNotSurePara1"
        value={sectionDataSingle.StillNotSurePara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure? Paragraph 2"
        name="StillNotSurePara2"
        value={sectionDataSingle.StillNotSurePara2}
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

export default FrancophoneContent;
