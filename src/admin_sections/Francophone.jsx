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

    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",

    faq_heading: "",
    q1: "",
    qa1: "",
    q2: "",
    qa2: "",
    q3: "",
    qa3: "",
    q4: "",
    qa4: "",
    q5: "",
    qa5: "",
    q6: "",
    qa6: "",
    q7: "",
    qa7: "",
    q8: "",
    qa8: "",
    q9: "",
    qa9: "",
    q10: "",
    qa10: "",
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

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>

      <input
        placeholder="FAQ's Made Simple"
        name="faq_heading"
        value={sectionDataSingle.faq_heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 1"
        name="q1"
        value={sectionDataSingle.q1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 1"
        name="qa1"
        value={sectionDataSingle.qa1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 2"
        name="q2"
        value={sectionDataSingle.q2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 2"
        name="qa2"
        value={sectionDataSingle.qa2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 3"
        name="q3"
        value={sectionDataSingle.q3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 3"
        name="qa3"
        value={sectionDataSingle.qa3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 4"
        name="q4"
        value={sectionDataSingle.q4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 4"
        name="qa4"
        value={sectionDataSingle.qa4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 5"
        name="q5"
        value={sectionDataSingle.q5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 5"
        name="qa5"
        value={sectionDataSingle.qa5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 6"
        name="q6"
        value={sectionDataSingle.q6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 6"
        name="qa6"
        value={sectionDataSingle.qa6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 7"
        name="q7"
        value={sectionDataSingle.q7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 7"
        name="qa7"
        value={sectionDataSingle.qa7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 8"
        name="q8"
        value={sectionDataSingle.q8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 8"
        name="qa8"
        value={sectionDataSingle.qa8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 9"
        name="q9"
        value={sectionDataSingle.q9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 9"
        name="qa9"
        value={sectionDataSingle.qa9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 10"
        name="q10"
        value={sectionDataSingle.q10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 10"
        name="qa10"
        value={sectionDataSingle.qa10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqEndHeading}>FAQ's Ends here</h1>

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
