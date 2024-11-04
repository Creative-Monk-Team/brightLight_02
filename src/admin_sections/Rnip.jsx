import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const RnipContent = () => {
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
    participationHeading: "",
    p1: "",
    p2: "",
    benefitsHeading: "",
    b1: "",
    b2: "",
    b3: "",
    eligibilityHeading: "",
    eligibilityDescription: "",
    elibilityP1: "",
    elibilityP2: "",
    applyHeading: "",
    apply1: "",
    apply2: "",
    apply3: "",
    applyRequirementsHeading: "",
    applyRequirementsSubHeading: "",
    ar1: "",
    ar2: "",
    ar3: "",
    ar4: "",
    ar5: "",
    ar6: "",
    arEndingPara: "",
    participatingCommunitiesHeading: "",
    participatingCommunitiesDescription1: "",
    participatingCommunitiesDescription2: "",
    t1h1: "",
    t1r1c1: "",
    t1r2c1: "",
    t1r3c1: "",
    t1r4c1: "",
    t1r5c1: "",
    t1r6c1: "",
    t1r7c1: "",
    t1r8c1: "",
    t1r9c1: "",
    t1r10c1: "",
    t1r11c1: "",

    eachCommunityPara: "",
    eachCommunityParaList1: "",
    eachCommunityParaList2: "",
    eachCommunityParaList3: "",
    eachCommunityParaList4: "",
    workExpHeading: "",
    workExpList1: "",
    workExpList2: "",
    workExpList2Nested1: "",
    workExpList2Nested2: "",
    workExpList2Nested3: "",
    workExpList2Nested4: "",
    workExpList2Nested5: "",
    workExpList3: "",
    workExpList4: "",
    workExpList5: "",
    workExpList5Nested1: "",
    workExpList5Nested2: "",
    jobOfferHeading: "",
    jobOfferDesc: "",
    t2h1: "",
    t2h2: "",
    t2r1c1: "",
    t2r1c2: "",
    t2r2c1: "",
    t2r2c2: "",
    t2r3c1: "",
    t2r3c2: "",
    t2r4c1: "",
    t2r4c2: "",
    t2r5c1: "",
    t2r5c2: "",
    internationalStudentsHeading: "",
    isList1: "",
    isList1Nested1: "",
    isList1Nested1Nested1: "",
    isList1Nested1Nested2: "",
    isList1Nested1Nested3: "",
    orStatement: "",
    isList1Nested2: "",
    isList1Nested2Nested1: "",
    isList1Nested2Nested2: "",
    isList1Nested2Nested3: "",
    isImportantPara: "",

    isImportantParaList1: "",
    isImportantParaList2: "",
    isImportantParaList3: "",
    languageRequirementsHeading: "",
    languageRequirementsDescription1: "",
    languageRequirementsDescription2: "",
    languageRequirementsList1Point1: "",
    languageRequirementsList1Point2: "",
    languageRequirementsDescription3: "",
    languageRequirementsList2Point1: "",
    languageRequirementsList2Point2: "",
    languageRequirementsList2Point3: "",
    t3h1: "",
    t3h2: "",
    t3h3: "",
    t3r1c1: "",
    t3r1c2: "",
    t3r1c3: "",
    t3r2c1: "",
    t3r2c2: "",
    t3r2c3: "",
    t3r3c1: "",
    t3r3c2: "",
    t3r3c3: "",
    educationalReqHeading: "",
    educationalReqDescription: "",
    settlementFundsHeading: "",
    settlementFundsPara1: "",
    settlementFundsPara2: "",
    intentionHeading: "",
    intentionDescription: "",
    findingJobHeading: "",
    findingJobList1: "",
    findingJobList2: "",
    findingJobList3: "",
    jobOfferReqHeading: "",
    jobOfferReqDescription: "",
    jobOfferReqList1: "",
    jobOfferReqList2: "",
    jobOfferReqList3: "",
    jobOfferReqList4: "",
    jobOfferReqList5: "",
    jobOfferReqList6: "",
    jobOfferReqList7: "",

    jobOfferCannotPara: "",
    jobOfferCannotList1: "",
    jobOfferCannotList2: "",
    jobOfferCannotList3: "",
    jobOfferCannotList4: "",
    jobOfferCannotList5: "",
    howApplyHeading: "",
    howApplyList1: "",
    howApplyList2: "",
    howApplyList3: "",
    howApplyList4: "",
    howApplyList5: "",
    howApplyList6: "",
    howApplyList7: "",
    howApplyList8: "",
    howApplyList9: "",
    refusalReasonsHeading: "",
    refusalReasonsList1: "",
    refusalReasonsList2: "",
    refusalReasonsList3: "",

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

    show_testimonials: "",
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
      `https://brightlight-node.onrender.com/rnip-page/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/rnip-page")
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
        placeholder="Participation Heading"
        name="participationHeading"
        value={sectionDataSingle.participationHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Participation Point 1"
        name="p1"
        value={sectionDataSingle.p1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Participation Point 2"
        name="p2"
        value={sectionDataSingle.p2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="benefitsHeading"
        value={sectionDataSingle.benefitsHeading || ""}
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
        placeholder="Eligibility Heading"
        name="eligibilityHeading"
        value={sectionDataSingle.eligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Description"
        name="eligibilityDescription"
        value={sectionDataSingle.eligibilityDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 1"
        name="elibilityP1"
        value={sectionDataSingle.elibilityP1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 2"
        name="elibilityP2"
        value={sectionDataSingle.elibilityP2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Heading"
        name="applyHeading"
        value={sectionDataSingle.applyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Step 1"
        name="apply1"
        value={sectionDataSingle.apply1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply Step 2"
        name="apply2"
        value={sectionDataSingle.apply2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply Step 3"
        name="apply3"
        value={sectionDataSingle.apply3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Requirements Heading"
        name="applyRequirementsHeading"
        value={sectionDataSingle.applyRequirementsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Requirements Subheading"
        name="applyRequirementsSubHeading"
        value={sectionDataSingle.applyRequirementsSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Requirement 1"
        name="ar1"
        value={sectionDataSingle.ar1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply Requirement 2"
        name="ar2"
        value={sectionDataSingle.ar2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply Requirement 3"
        name="ar3"
        value={sectionDataSingle.ar3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply Requirement 4"
        name="ar4"
        value={sectionDataSingle.ar4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply Requirement 5"
        name="ar5"
        value={sectionDataSingle.ar5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply Requirement 6"
        name="ar6"
        value={sectionDataSingle.ar6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ending Paragraph"
        name="arEndingPara"
        value={sectionDataSingle.arEndingPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Participating Communities Heading"
        name="participatingCommunitiesHeading"
        value={sectionDataSingle.participatingCommunitiesHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Participating Communities Description 1"
        name="participatingCommunitiesDescription1"
        value={sectionDataSingle.participatingCommunitiesDescription1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Participating Communities Description 2"
        name="participatingCommunitiesDescription2"
        value={sectionDataSingle.participatingCommunitiesDescription2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Table 1 Header 1"
        name="t1h1"
        value={sectionDataSingle.t1h1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 1 Column 1"
        name="t1r1c1"
        value={sectionDataSingle.t1r1c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 2 Column 1"
        name="t1r2c1"
        value={sectionDataSingle.t1r2c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 3 Column 1"
        name="t1r3c1"
        value={sectionDataSingle.t1r3c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 4 Column 1"
        name="t1r4c1"
        value={sectionDataSingle.t1r4c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 5 Column 1"
        name="t1r5c1"
        value={sectionDataSingle.t1r5c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 6 Column 1"
        name="t1r6c1"
        value={sectionDataSingle.t1r6c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 7 Column 1"
        name="t1r7c1"
        value={sectionDataSingle.t1r7c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 8 Column 1"
        name="t1r8c1"
        value={sectionDataSingle.t1r8c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 9 Column 1"
        name="t1r9c1"
        value={sectionDataSingle.t1r9c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 10 Column 1"
        name="t1r10c1"
        value={sectionDataSingle.t1r10c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 1 Row 11 Column 1"
        name="t1r11c1"
        value={sectionDataSingle.t1r11c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Each Community Paragraph"
        name="eachCommunityPara"
        value={sectionDataSingle.eachCommunityPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Each Community Paragraph List 1"
        name="eachCommunityParaList1"
        value={sectionDataSingle.eachCommunityParaList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Each Community Paragraph List 2"
        name="eachCommunityParaList2"
        value={sectionDataSingle.eachCommunityParaList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Each Community Paragraph List 3"
        name="eachCommunityParaList3"
        value={sectionDataSingle.eachCommunityParaList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Each Community Paragraph List 4"
        name="eachCommunityParaList4"
        value={sectionDataSingle.eachCommunityParaList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Work Experience Heading"
        name="workExpHeading"
        value={sectionDataSingle.workExpHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Experience List 1"
        name="workExpList1"
        value={sectionDataSingle.workExpList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 2"
        name="workExpList2"
        value={sectionDataSingle.workExpList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 2 Nested 1"
        name="workExpList2Nested1"
        value={sectionDataSingle.workExpList2Nested1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 2 Nested 2"
        name="workExpList2Nested2"
        value={sectionDataSingle.workExpList2Nested2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 2 Nested 3"
        name="workExpList2Nested3"
        value={sectionDataSingle.workExpList2Nested3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 2 Nested 4"
        name="workExpList2Nested4"
        value={sectionDataSingle.workExpList2Nested4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 2 Nested 5"
        name="workExpList2Nested5"
        value={sectionDataSingle.workExpList2Nested5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 3"
        name="workExpList3"
        value={sectionDataSingle.workExpList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 4"
        name="workExpList4"
        value={sectionDataSingle.workExpList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 5"
        name="workExpList5"
        value={sectionDataSingle.workExpList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 5 Nested 1"
        name="workExpList5Nested1"
        value={sectionDataSingle.workExpList5Nested1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Experience List 5 Nested 2"
        name="workExpList5Nested2"
        value={sectionDataSingle.workExpList5Nested2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Job Offer Heading"
        name="jobOfferHeading"
        value={sectionDataSingle.jobOfferHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Description"
        name="jobOfferDesc"
        value={sectionDataSingle.jobOfferDesc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Table 2 Header 1"
        name="t2h1"
        value={sectionDataSingle.t2h1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Header 2"
        name="t2h2"
        value={sectionDataSingle.t2h2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 1 Column 1"
        name="t2r1c1"
        value={sectionDataSingle.t2r1c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 1 Column 2"
        name="t2r1c2"
        value={sectionDataSingle.t2r1c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 2 Column 1"
        name="t2r2c1"
        value={sectionDataSingle.t2r2c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 2 Column 2"
        name="t2r2c2"
        value={sectionDataSingle.t2r2c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 3 Column 1"
        name="t2r3c1"
        value={sectionDataSingle.t2r3c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 3 Column 2"
        name="t2r3c2"
        value={sectionDataSingle.t2r3c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 4 Column 1"
        name="t2r4c1"
        value={sectionDataSingle.t2r4c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 4 Column 2"
        name="t2r4c2"
        value={sectionDataSingle.t2r4c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 5 Column 1"
        name="t2r5c1"
        value={sectionDataSingle.t2r5c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 2 Row 5 Column 2"
        name="t2r5c2"
        value={sectionDataSingle.t2r5c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="International Students Heading"
        name="internationalStudentsHeading"
        value={sectionDataSingle.internationalStudentsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="International Students List 1"
        name="isList1"
        value={sectionDataSingle.isList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="International Students List 1 Nested 1"
        name="isList1Nested1"
        value={sectionDataSingle.isList1Nested1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="International Students List 1 Nested 1 Nested 1"
        name="isList1Nested1Nested1"
        value={sectionDataSingle.isList1Nested1Nested1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="International Students List 1 Nested 1 Nested 2"
        name="isList1Nested1Nested2"
        value={sectionDataSingle.isList1Nested1Nested2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="International Students List 1 Nested 1 Nested 3"
        name="isList1Nested1Nested3"
        value={sectionDataSingle.isList1Nested1Nested3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Or Statement"
        name="orStatement"
        value={sectionDataSingle.orStatement || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="International Students List 1 Nested 2"
        name="isList1Nested2"
        value={sectionDataSingle.isList1Nested2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="International Students List 1 Nested 2 Nested 1"
        name="isList1Nested2Nested1"
        value={sectionDataSingle.isList1Nested2Nested1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="International Students List 1 Nested 2 Nested 2"
        name="isList1Nested2Nested2"
        value={sectionDataSingle.isList1Nested2Nested2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="International Students List 1 Nested 2 Nested 3"
        name="isList1Nested2Nested3"
        value={sectionDataSingle.isList1Nested2Nested3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Is Important Paragraph"
        name="isImportantPara"
        value={sectionDataSingle.isImportantPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Is Important Paragraph List 1"
        name="isImportantParaList1"
        value={sectionDataSingle.isImportantParaList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Is Important Paragraph List 2"
        name="isImportantParaList2"
        value={sectionDataSingle.isImportantParaList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Is Important Paragraph List 3"
        name="isImportantParaList3"
        value={sectionDataSingle.isImportantParaList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Language Requirements Heading"
        name="languageRequirementsHeading"
        value={sectionDataSingle.languageRequirementsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Language Requirements Description 1"
        name="languageRequirementsDescription1"
        value={sectionDataSingle.languageRequirementsDescription1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Language Requirements Description 2"
        name="languageRequirementsDescription2"
        value={sectionDataSingle.languageRequirementsDescription2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Language Requirements List 1 Point 1"
        name="languageRequirementsList1Point1"
        value={sectionDataSingle.languageRequirementsList1Point1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Language Requirements List 1 Point 2"
        name="languageRequirementsList1Point2"
        value={sectionDataSingle.languageRequirementsList1Point2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Language Requirements Description 3"
        name="languageRequirementsDescription3"
        value={sectionDataSingle.languageRequirementsDescription3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Language Requirements List 2 Point 1"
        name="languageRequirementsList2Point1"
        value={sectionDataSingle.languageRequirementsList2Point1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Language Requirements List 2 Point 2"
        name="languageRequirementsList2Point2"
        value={sectionDataSingle.languageRequirementsList2Point2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Language Requirements List 2 Point 3"
        name="languageRequirementsList2Point3"
        value={sectionDataSingle.languageRequirementsList2Point3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Table 3 Header 1"
        name="t3h1"
        value={sectionDataSingle.t3h1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Header 2"
        name="t3h2"
        value={sectionDataSingle.t3h2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Header 3"
        name="t3h3"
        value={sectionDataSingle.t3h3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 1 Column 1"
        name="t3r1c1"
        value={sectionDataSingle.t3r1c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 1 Column 2"
        name="t3r1c2"
        value={sectionDataSingle.t3r1c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 1 Column 3"
        name="t3r1c3"
        value={sectionDataSingle.t3r1c3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 2 Column 1"
        name="t3r2c1"
        value={sectionDataSingle.t3r2c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 2 Column 2"
        name="t3r2c2"
        value={sectionDataSingle.t3r2c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 2 Column 3"
        name="t3r2c3"
        value={sectionDataSingle.t3r2c3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 3 Column 1"
        name="t3r3c1"
        value={sectionDataSingle.t3r3c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 3 Column 2"
        name="t3r3c2"
        value={sectionDataSingle.t3r3c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 3 Column 3"
        name="t3r3c3"
        value={sectionDataSingle.t3r3c3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Educational Requirements Heading"
        name="educationalReqHeading"
        value={sectionDataSingle.educationalReqHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Educational Requirements Description"
        name="educationalReqDescription"
        value={sectionDataSingle.educationalReqDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Settlement Funds Heading"
        name="settlementFundsHeading"
        value={sectionDataSingle.settlementFundsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Settlement Funds Paragraph 1"
        name="settlementFundsPara1"
        value={sectionDataSingle.settlementFundsPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Settlement Funds Paragraph 2"
        name="settlementFundsPara2"
        value={sectionDataSingle.settlementFundsPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Intention Heading"
        name="intentionHeading"
        value={sectionDataSingle.intentionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Intention Description"
        name="intentionDescription"
        value={sectionDataSingle.intentionDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Finding Job Heading"
        name="findingJobHeading"
        value={sectionDataSingle.findingJobHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Finding Job List 1"
        name="findingJobList1"
        value={sectionDataSingle.findingJobList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Finding Job List 2"
        name="findingJobList2"
        value={sectionDataSingle.findingJobList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Finding Job List 3"
        name="findingJobList3"
        value={sectionDataSingle.findingJobList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Job Offer Requirements Heading"
        name="jobOfferReqHeading"
        value={sectionDataSingle.jobOfferReqHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Requirements Description"
        name="jobOfferReqDescription"
        value={sectionDataSingle.jobOfferReqDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Requirements List 1"
        name="jobOfferReqList1"
        value={sectionDataSingle.jobOfferReqList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Requirements List 2"
        name="jobOfferReqList2"
        value={sectionDataSingle.jobOfferReqList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Requirements List 3"
        name="jobOfferReqList3"
        value={sectionDataSingle.jobOfferReqList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Requirements List 4"
        name="jobOfferReqList4"
        value={sectionDataSingle.jobOfferReqList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Requirements List 5"
        name="jobOfferReqList5"
        value={sectionDataSingle.jobOfferReqList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Requirements List 6"
        name="jobOfferReqList6"
        value={sectionDataSingle.jobOfferReqList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Requirements List 7"
        name="jobOfferReqList7"
        value={sectionDataSingle.jobOfferReqList7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Job Offer Cannot Paragraph"
        name="jobOfferCannotPara"
        value={sectionDataSingle.jobOfferCannotPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Job Offer Cannot List 1"
        name="jobOfferCannotList1"
        value={sectionDataSingle.jobOfferCannotList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Cannot List 2"
        name="jobOfferCannotList2"
        value={sectionDataSingle.jobOfferCannotList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Cannot List 3"
        name="jobOfferCannotList3"
        value={sectionDataSingle.jobOfferCannotList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Cannot List 4"
        name="jobOfferCannotList4"
        value={sectionDataSingle.jobOfferCannotList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Job Offer Cannot List 5"
        name="jobOfferCannotList5"
        value={sectionDataSingle.jobOfferCannotList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="howApplyHeading"
        value={sectionDataSingle.howApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 1"
        name="howApplyList1"
        value={sectionDataSingle.howApplyList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 2"
        name="howApplyList2"
        value={sectionDataSingle.howApplyList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 3"
        name="howApplyList3"
        value={sectionDataSingle.howApplyList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 4"
        name="howApplyList4"
        value={sectionDataSingle.howApplyList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 5"
        name="howApplyList5"
        value={sectionDataSingle.howApplyList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 6"
        name="howApplyList6"
        value={sectionDataSingle.howApplyList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 7"
        name="howApplyList7"
        value={sectionDataSingle.howApplyList7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 8"
        name="howApplyList8"
        value={sectionDataSingle.howApplyList8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 9"
        name="howApplyList9"
        value={sectionDataSingle.howApplyList9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Refusal Reasons Heading"
        name="refusalReasonsHeading"
        value={sectionDataSingle.refusalReasonsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reasons List 1"
        name="refusalReasonsList1"
        value={sectionDataSingle.refusalReasonsList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reasons List 2"
        name="refusalReasonsList2"
        value={sectionDataSingle.refusalReasonsList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reasons List 3"
        name="refusalReasonsList3"
        value={sectionDataSingle.refusalReasonsList3 || ""}
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
      
      <h1 className={styles.faqStartsHeading}>
        Testimonials Visibility Control
      </h1>

      <div className={styles.testimonialsVisibility}>
        <p>Want to display Testimonials Section</p>
        <input
          placeholder="Show Testimonials"
          name="show_testimonials"
          value={sectionDataSingle.show_testimonials || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <p className={styles.testimonialsDisclamier}>
        Note: Testimonials Visibility On the Selected Page is totally dependent
        on the input value above. If you want to display the section , just
        write "Y" without quotes , anything else will be considered as "N" even
        "y". If not want to display then just write "N" without qoutes.
      </p>
      
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

export default RnipContent;
