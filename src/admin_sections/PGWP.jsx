import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const PGWP = () => {
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
    PgwpHeading: "",
    PgwpPara1: "",
    PgwpPara2: "",
    BenifitsHeading: "",
    BenifitsList1: "",
    BenifitsList2: "",
    BenifitsList3: "",
    EligibilityHeading: "",
    EligibilitySubHead: "",
    EligLi1: "",
    EligLi2: "",
    EligLi3: "",
    EligLi4: "",
    EligiLi5: "",
    EligLi6: "",
    EligLi7: "",
    ChanAnnHeading: "",
    ChanAnnSubHead: "",
    caLi1: "",
    caLi1Sub1: "",
    FligSchHeading: "",
    FligSchSubHead: "",
    fl1: "",
    fl2: "",
    IfYouSumHeading: "",
    IfYouSumSubHead: "",
    IysLi1: "",
    IysLi2: "",
    IfYouSubmitHeading: "",
    IfYouSubmitPara: "",
    IfYouGraduatedHeading: "",
    IfYouGraduatedLi1: "",
    IfYouGraduatedLi2: "",
    IfYouGraduatedAnotherHeading: "",
    IfYouGradAnothLi1: "",
    IfYouGradAnothLi2: "",
    IfYouGraduatedCollegeHeading: "",
    IfYouGradCollLi1: "",
    IfYouGradCollLi2: "",

    FieldStudyRequHeading: "",
    FieldStudyRequPara: "",
    fsrLi1: "",
    fsrLi2: "",
    fsrLi3: "",
    fsrLi4: "",
    fsrLi5: "",
    fsrLi6: "",
    HowApplyHeading: "",
    HowApplyPara1: "",
    HowApplyPara2: "",
    HowApplyPara3: "",
    ha1: "",
    ha2SubHead: "",
    ha3: "",
    ha4: "",
    ha5: "",
    ha6: "",
    RefusalHeading: "",
    RefusalSubHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
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
      `https://brightlight-node.onrender.com/pgwp/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/pgwp")
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
        placeholder="PGWP Heading"
        name="PgwpHeading"
        value={sectionDataSingle.PgwpHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="PGWP Paragraph 1"
        name="PgwpPara1"
        value={sectionDataSingle.PgwpPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="PGWP Paragraph 2"
        name="PgwpPara2"
        value={sectionDataSingle.PgwpPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="BenifitsHeading"
        value={sectionDataSingle.BenifitsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits List 1"
        name="BenifitsList1"
        value={sectionDataSingle.BenifitsList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits List 2"
        name="BenifitsList2"
        value={sectionDataSingle.BenifitsList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits List 3"
        name="BenifitsList3"
        value={sectionDataSingle.BenifitsList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Subhead"
        name="EligibilitySubHead"
        value={sectionDataSingle.EligibilitySubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 1"
        name="EligLi1"
        value={sectionDataSingle.EligLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 2"
        name="EligLi2"
        value={sectionDataSingle.EligLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 3"
        name="EligLi3"
        value={sectionDataSingle.EligLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 4"
        name="EligLi4"
        value={sectionDataSingle.EligLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 5"
        name="EligiLi5"
        value={sectionDataSingle.EligiLi5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 6"
        name="EligLi6"
        value={sectionDataSingle.EligLi6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 7"
        name="EligLi7"
        value={sectionDataSingle.EligLi7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Change Announcement Heading"
        name="ChanAnnHeading"
        value={sectionDataSingle.ChanAnnHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Change Announcement Subhead"
        name="ChanAnnSubHead"
        value={sectionDataSingle.ChanAnnSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Change Announcement List Item 1"
        name="caLi1"
        value={sectionDataSingle.caLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Change Announcement Sub Item 1"
        name="caLi1Sub1"
        value={sectionDataSingle.caLi1Sub1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Flight Schedule Heading"
        name="FligSchHeading"
        value={sectionDataSingle.FligSchHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Flight Schedule Subhead"
        name="FligSchSubHead"
        value={sectionDataSingle.FligSchSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Flight Schedule List Item 1"
        name="fl1"
        value={sectionDataSingle.fl1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Flight Schedule List Item 2"
        name="fl2"
        value={sectionDataSingle.fl2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="If You Summarize Heading"
        name="IfYouSumHeading"
        value={sectionDataSingle.IfYouSumHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="If You Summarize Subhead"
        name="IfYouSumSubHead"
        value={sectionDataSingle.IfYouSumSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Summarize List Item 1"
        name="IysLi1"
        value={sectionDataSingle.IysLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Summarize List Item 2"
        name="IysLi2"
        value={sectionDataSingle.IysLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="If You Submit Heading"
        name="IfYouSubmitHeading"
        value={sectionDataSingle.IfYouSubmitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Submit Paragraph"
        name="IfYouSubmitPara"
        value={sectionDataSingle.IfYouSubmitPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="If You Graduated Heading"
        name="IfYouGraduatedHeading"
        value={sectionDataSingle.IfYouGraduatedHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Graduated List Item 1"
        name="IfYouGraduatedLi1"
        value={sectionDataSingle.IfYouGraduatedLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Graduated List Item 2"
        name="IfYouGraduatedLi2"
        value={sectionDataSingle.IfYouGraduatedLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="If You Graduated Another Heading"
        name="IfYouGraduatedAnotherHeading"
        value={sectionDataSingle.IfYouGraduatedAnotherHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Graduated Another List Item 1"
        name="IfYouGradAnothLi1"
        value={sectionDataSingle.IfYouGradAnothLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Graduated Another List Item 2"
        name="IfYouGradAnothLi2"
        value={sectionDataSingle.IfYouGradAnothLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="If You Graduated College Heading"
        name="IfYouGraduatedCollegeHeading"
        value={sectionDataSingle.IfYouGraduatedCollegeHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Graduated College List Item 1"
        name="IfYouGradCollLi1"
        value={sectionDataSingle.IfYouGradCollLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Graduated College List Item 2"
        name="IfYouGradCollLi2"
        value={sectionDataSingle.IfYouGradCollLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Field Study Requirements Heading"
        name="FieldStudyRequHeading"
        value={sectionDataSingle.FieldStudyRequHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirements Paragraph"
        name="FieldStudyRequPara"
        value={sectionDataSingle.FieldStudyRequPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Field Study Requirement List Item 1"
        name="fsrLi1"
        value={sectionDataSingle.fsrLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List Item 2"
        name="fsrLi2"
        value={sectionDataSingle.fsrLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List Item 3"
        name="fsrLi3"
        value={sectionDataSingle.fsrLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List Item 4"
        name="fsrLi4"
        value={sectionDataSingle.fsrLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List Item 5"
        name="fsrLi5"
        value={sectionDataSingle.fsrLi5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List Item 6"
        name="fsrLi6"
        value={sectionDataSingle.fsrLi6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Paragraph 1"
        name="HowApplyPara1"
        value={sectionDataSingle.HowApplyPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Paragraph 2"
        name="HowApplyPara2"
        value={sectionDataSingle.HowApplyPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Paragraph 3"
        name="HowApplyPara3"
        value={sectionDataSingle.HowApplyPara3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 1"
        name="ha1"
        value={sectionDataSingle.ha1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Subhead"
        name="ha2SubHead"
        value={sectionDataSingle.ha2SubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 3"
        name="ha3"
        value={sectionDataSingle.ha3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 4"
        name="ha4"
        value={sectionDataSingle.ha4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 5"
        name="ha5"
        value={sectionDataSingle.ha5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List Item 6"
        name="ha6"
        value={sectionDataSingle.ha6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Subheading"
        name="RefusalSubHeading"
        value={sectionDataSingle.RefusalSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List Item 1"
        name="r1"
        value={sectionDataSingle.r1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List Item 2"
        name="r2"
        value={sectionDataSingle.r2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List Item 3"
        name="r3"
        value={sectionDataSingle.r3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List Item 4"
        name="r4"
        value={sectionDataSingle.r4 || ""}
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

export default PGWP;
