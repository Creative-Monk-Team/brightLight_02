import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const SpouseInlandContent = () => {
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
    description: "",

    KeyPointsHeading: "",
    kp1: "",
    kp2: "",
    kp3: "",
    kp4: "",

    BenefitHeading: "",
    b1: "",
    b2: "",
    b3: "",

    eligibleCriteriaHeading: "",
    e1: "",
    e2: "",
    e3: "",
    e3Sub1: "",
    e3Sub2: "",

    eligRelHeading: "",
    er1: "",
    er2: "",
    er3: "",
    er4: "",
    er5: "",

    HowInlaSpoSponWorkHeading: "",
    HowInlaSpoSponWorkPara: "",

    AppCompHeading: "",
    ac1: "",
    ac2: "",

    HowAppInlSpoSponHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",

    RemainingCanadaHeading: "",
    RemainingCanadaPara: "",

    HowLongProcInlAppHeading: "",
    HowLongProcInlAppPara: "",

    InlSpouSponHeading: "",
    InlSpouSponPara: "",

    EligOpenWorkHeading: "",
    eow1: "",
    eow2: "",
    eow3: "",
    eow4: "",
    AppSpouHeading: "",
    AppSpouPara: "",

    ConjPartReqDocSponHeading: "",
    ConjPartReqDocSponPara: "",
    cprd1: "",
    cprd2: "",
    cprd3: "",
    cprd4: "",
    cprd5: "",
    cprd6: "",
    cprd7: "",
    cprd8: "",
    cprd9: "",
    cprd10: "",
    cprd11: "",
    cprd12: "",

    StillNotHeading: "",
    StillNotPara: "",

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
      `https://brightlight-node.onrender.com/SpouseInland/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/SpouseInland")
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
        placeholder="Description"
        name="description"
        value={sectionDataSingle.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Key Points Heading"
        name="KeyPointsHeading"
        value={sectionDataSingle.KeyPointsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Key Point 1"
        name="kp1"
        value={sectionDataSingle.kp1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Key Point 2"
        name="kp2"
        value={sectionDataSingle.kp2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Key Point 3"
        name="kp3"
        value={sectionDataSingle.kp3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Key Point 4"
        name="kp4"
        value={sectionDataSingle.kp4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit Heading"
        name="BenefitHeading"
        value={sectionDataSingle.BenefitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 1"
        name="b1"
        value={sectionDataSingle.b1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 2"
        name="b2"
        value={sectionDataSingle.b2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 3"
        name="b3"
        value={sectionDataSingle.b3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Criteria Heading"
        name="eligibleCriteriaHeading"
        value={sectionDataSingle.eligibleCriteriaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 1"
        name="e1"
        value={sectionDataSingle.e1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 2"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 3"
        name="e3"
        value={sectionDataSingle.e3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria Sub 1"
        name="e3Sub1"
        value={sectionDataSingle.e3Sub1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria Sub 2"
        name="e3Sub2"
        value={sectionDataSingle.e3Sub2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Relation Heading"
        name="eligRelHeading"
        value={sectionDataSingle.eligRelHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Relation 1"
        name="er1"
        value={sectionDataSingle.er1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Relation 2"
        name="er2"
        value={sectionDataSingle.er2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Relation 3"
        name="er3"
        value={sectionDataSingle.er3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Relation 4"
        name="er4"
        value={sectionDataSingle.er4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Relation 5"
        name="er5"
        value={sectionDataSingle.er5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How In-Law Spousal Sponsorship Works Heading"
        name="HowInlaSpoSponWorkHeading"
        value={sectionDataSingle.HowInlaSpoSponWorkHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How In-Law Spousal Sponsorship Works Paragraph"
        name="HowInlaSpoSponWorkPara"
        value={sectionDataSingle.HowInlaSpoSponWorkPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Component Heading"
        name="AppCompHeading"
        value={sectionDataSingle.AppCompHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Component 1"
        name="ac1"
        value={sectionDataSingle.ac1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Component 2"
        name="ac2"
        value={sectionDataSingle.ac2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply In-Law Spousal Sponsorship Heading"
        name="HowAppInlSpoSponHeading"
        value={sectionDataSingle.HowAppInlSpoSponHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply In-Law Spousal Sponsorship Item 1"
        name="ha1"
        value={sectionDataSingle.ha1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply In-Law Spousal Sponsorship Item 2"
        name="ha2"
        value={sectionDataSingle.ha2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply In-Law Spousal Sponsorship Item 3"
        name="ha3"
        value={sectionDataSingle.ha3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply In-Law Spousal Sponsorship Item 4"
        name="ha4"
        value={sectionDataSingle.ha4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Remaining Canada Heading"
        name="RemainingCanadaHeading"
        value={sectionDataSingle.RemainingCanadaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Remaining Canada Paragraph"
        name="RemainingCanadaPara"
        value={sectionDataSingle.RemainingCanadaPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How Long Process In-Law Application Heading"
        name="HowLongProcInlAppHeading"
        value={sectionDataSingle.HowLongProcInlAppHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How Long Process In-Law Application Paragraph"
        name="HowLongProcInlAppPara"
        value={sectionDataSingle.HowLongProcInlAppPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="In-Law Spousal Sponsorship Heading"
        name="InlSpouSponHeading"
        value={sectionDataSingle.InlSpouSponHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="In-Law Spousal Sponsorship Paragraph"
        name="InlSpouSponPara"
        value={sectionDataSingle.InlSpouSponPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Open Work Heading"
        name="EligOpenWorkHeading"
        value={sectionDataSingle.EligOpenWorkHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Open Work 1"
        name="eow1"
        value={sectionDataSingle.eow1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Open Work 2"
        name="eow2"
        value={sectionDataSingle.eow2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Open Work 3"
        name="eow3"
        value={sectionDataSingle.eow3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Open Work 4"
        name="eow4"
        value={sectionDataSingle.eow4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Spousal Sponsorship Heading"
        name="AppSpouHeading"
        value={sectionDataSingle.AppSpouHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Spousal Sponsorship Paragraph"
        name="AppSpouPara"
        value={sectionDataSingle.AppSpouPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Common Law Partner Required Documents Sponsorship Heading"
        name="ConjPartReqDocSponHeading"
        value={sectionDataSingle.ConjPartReqDocSponHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Documents Sponsorship Paragraph"
        name="ConjPartReqDocSponPara"
        value={sectionDataSingle.ConjPartReqDocSponPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 1"
        name="cprd1"
        value={sectionDataSingle.cprd1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 2"
        name="cprd2"
        value={sectionDataSingle.cprd2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 3"
        name="cprd3"
        value={sectionDataSingle.cprd3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 4"
        name="cprd4"
        value={sectionDataSingle.cprd4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 5"
        name="cprd5"
        value={sectionDataSingle.cprd5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 6"
        name="cprd6"
        value={sectionDataSingle.cprd6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 7"
        name="cprd7"
        value={sectionDataSingle.cprd7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 8"
        name="cprd8"
        value={sectionDataSingle.cprd8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 9"
        name="cprd9"
        value={sectionDataSingle.cprd9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 10"
        name="cprd10"
        value={sectionDataSingle.cprd10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 11"
        name="cprd11"
        value={sectionDataSingle.cprd11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Common Law Partner Required Document 12"
        name="cprd12"
        value={sectionDataSingle.cprd12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Paragraph"
        name="StillNotPara"
        value={sectionDataSingle.StillNotPara || ""}
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

export default SpouseInlandContent;
