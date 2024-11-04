import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const SdsContent = () => {
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
    SdsHeading: "",
    SdsPara: "",
    WhatisStudyPerHeading: "",
    WhatisStudyPerSubHead: "",
    wspLi1: "",
    wspLi2: "",
    wspLi3: "",
    wspLi4: "",
    WhatisStudyPerLastPara: "",
    BenifitHeading: "",
    BenifitSubHead: "",
    BenLi1: "",
    BenLi2: "",
    BenNote: "",
    EligCritTableHeading: "",
    EligCritTableSubHead: "",
    emh1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    e7: "",
    e8: "",
    e9: "",
    e10: "",
    e11: "",
    e12: "",
    e13: "",
    e14: "",
    e15: "",
    toBeEligibUnderTabHeading1: "",
    toBeEligibUnderTablist1: "",
    toBeEligibUnderTablist2: "",
    toBeEligibUnderTablist3: "",
    toBeEligibUnderTablist4: "",
    toBeEligibUnderTablist5: "",
    toBeEligibUnderTablist6: "",
    toBeEligibUnderTablist7: "",
    toBeEligibUnderTabHeading2: "",
    toBeEligibUnderTablist8: "",
    toBeEligibUnderTablist9: "",
    toBeEligibUnderTablist10: "",
    toBeEligibUnderLastPara: "",
    HowtoApplyHeading: "",
    HowtoApplyAppProcHead: "",
    HowtoApplyAppProcPara: "",
    HowtoApplyAppProcStep1: "",
    HowtoApplyAppProcStep1Li1: "",
    HowtoApplyAppProcStep1Li2: "",
    HowtoApplyAppProcStep1Note: "",

    HowtoApplyAppProcStep2: "",
    HowtoApplyAppProcSubHStep2: "",
    HowtoApplyAppProcStep2Li1: "",
    HowtoApplyAppProcStep2Li2: "",
    HowtoApplyAppProcStep2Li3: "",
    HowtoApplyAppProcStep2Li4: "",
    HowtoApplyAppProcStep3Tab: "",
    HowtoApplyAppProcStep3TabSubH: "",
    ProofFundTable1Head1: "",
    ProofFund1Table11: "",
    ProofFund1Table12: "",
    ProofFund1Table13: "",
    ProofFund1Table14: "",
    ProofFundTable1Head2: "",
    ProofFund1Table21: "",
    ProofFund1Table22: "",
    ProofFund1Table23: "",
    ProofFund1Table24: "",
    ProofFundTable2Head1: "",
    ProofFund2Table11: "",
    ProofFund2Table12: "",
    ProofFund2Table13: "",
    ProofFund2Table14: "",
    ProofFundTable2Head2: "",
    ProofFund2Table21: "",
    ProofFund2Table22: "",
    ProofFund2Table23: "",
    ProofFund2Table24: "",
    ProofFundTable3Head1: "",
    ProofFund3Table11: "",
    ProofFund3Table12: "",
    ProofFund3Table13: "",
    ProofFund3Table14: "",
    ProofFundTable3Head2: "",
    ProofFund3Table21: "",
    ProofFund3Table22: "",
    ProofFund3Table23: "",
    ProofFund3Table24: "",
    HowtoApplyAppProcStep4: "",
    HowtoApplyAppProcSubHStep4: "",
    HowtoApplyAppProcStep4Li1: "",
    HowtoApplyAppProcStep4Li2: "",
    HowtoApplyAppProcStep5: "",
    HowtoApplyAppProcSubHStep5: "",
    HowtoApplyAppProcStep6: "",
    HowtoApplyAppProcSubHStep6: "",
    HowtoApplyAppProcStep6Li1: "",
    HowtoApplyAppProcStep6Li2: "",
    HowtoApplyAppProcStep6Li3: "",
    HowtoApplyAppProcStep6Li4: "",

    HowtoApplyAppProc2TabHead: "",
    HowtoApplyAppProc2TabHead1: "",
    HowtoApplyAppProc2TabHead1Point1: "",
    HowtoApplyAppProc2TabHead1Point2: "",
    HowtoApplyAppProc2TabHead1Point3: "",
    HowtoApplyAppProc2TabHead1Point4: "",
    HowtoApplyAppProc2TabHead1Point5: "",
    HowtoApplyAppProc2TabHead1Point6: "",
    HowtoApplyAppProc2TabHead1Point7: "",
    HowtoApplyAppProc2TabHead2: "",
    HowtoApplyAppProc2TabHead2Point1: "",
    HowtoApplyAppProc2TabHead2Point2: "",
    HowtoApplyAppProc2TabHead2Point3: "",
    HowtoApplyAppProc2TabHead2Point4: "",
    HowtoApplyAppProc2TabHead2Point5: "",
    HowtoApplyAppProc2TabHead2Point6: "",
    HowtoApplyAppProc2TabHead2Point7: "",

    BringingSpouHeading: "",
    BringingSpouSubHead1: "",
    BringingSpouLi1: "",
    BringingSpouLi2: "",
    BringingSpouLi3: "",
    BringingSpouPara1: "",

    intenationalHeading: "",
    intenationalPara: "",
    graduateProgHeading: "",
    graduateProgPara: "",
    ProfessionalDegHeading: "",
    ProfessionalDegSubHead: "",
    ProfessionalDegLi1: "",
    ProfessionalDegLi2: "",
    ProfessionalDegLi3: "",
    ProfessionalDegLi4: "",
    ProfessionalDegLi5: "",
    ProfessionalDegLi6: "",
    ProfessionalDegLi7: "",
    ProfessionalDegLi8: "",
    ProfessionalDegLi9: "",

    WhoIsNotHeading: "",
    WhoIsNotSubHead: "",
    WhoIsNotSubLi1: "",
    WhoIsNotSubLi2: "",

    SubmAppHeading: "",
    SubmAppSubHead: "",
    SubmAppLiHead: "",
    SubmAppLi1: "",
    SubmAppLi2: "",
    SubmAppLi3: "",

    PayBioHeading: "",
    PayBioLi1: "",
    PayBioLi2: "",
    AfteApplyHeading: "",
    AfteApplyLi1: "",
    AfteApplyLi2: "",
    AfteApplyLi3: "",
    ProcessingTimeHeading: "",
    ProcessingTimeLi1: "",
    ProcessingTimeLi2: "",
    AppRefHeading: "",
    AppRefPara: "",
    RefusalHeading: "",
    RefusalSubHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    r6: "",
    r7: "",
    r8: "",
    r9: "",

    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",
    IfYouSubmitHeading: "",
    IfYouSubmitSubHead: "",
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

    q11: "",
    qa11: "",
    q12: "",
    qa12: "",
    q13: "",
    qa13: "",
    q14: "",
    qa14: "",
    q15: "",
    qa15: "",

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
      `https://brightlight-node.onrender.com/sds/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/sds")
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
        placeholder="SDS Heading"
        name="SdsHeading"
        value={sectionDataSingle.SdsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="SDS Paragraph"
        name="SdsPara"
        value={sectionDataSingle.SdsPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="What is Study Permit Heading"
        name="WhatisStudyPerHeading"
        value={sectionDataSingle.WhatisStudyPerHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="What is Study Permit Sub Heading"
        name="WhatisStudyPerSubHead"
        value={sectionDataSingle.WhatisStudyPerSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Study Permit List Item 1"
        name="wspLi1"
        value={sectionDataSingle.wspLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Study Permit List Item 2"
        name="wspLi2"
        value={sectionDataSingle.wspLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Study Permit List Item 3"
        name="wspLi3"
        value={sectionDataSingle.wspLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Study Permit List Item 4"
        name="wspLi4"
        value={sectionDataSingle.wspLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Study Permit Last Paragraph"
        name="WhatisStudyPerLastPara"
        value={sectionDataSingle.WhatisStudyPerLastPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit Heading"
        name="BenifitHeading"
        value={sectionDataSingle.BenifitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Benefit Sub Heading"
        name="BenifitSubHead"
        value={sectionDataSingle.BenifitSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit List Item 1"
        name="BenLi1"
        value={sectionDataSingle.BenLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit List Item 2"
        name="BenLi2"
        value={sectionDataSingle.BenLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit Note"
        name="BenNote"
        value={sectionDataSingle.BenNote || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Table Heading"
        name="EligCritTableHeading"
        value={sectionDataSingle.EligCritTableHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Criteria Table Sub Heading"
        name="EligCritTableSubHead"
        value={sectionDataSingle.EligCritTableSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria Point 1"
        name="emh1"
        value={sectionDataSingle.emh1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 2"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 3"
        name="e3"
        value={sectionDataSingle.e3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 4"
        name="e4"
        value={sectionDataSingle.e4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 5"
        name="e5"
        value={sectionDataSingle.e5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 6"
        name="e6"
        value={sectionDataSingle.e6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 7"
        name="e7"
        value={sectionDataSingle.e7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 8"
        name="e8"
        value={sectionDataSingle.e8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 9"
        name="e9"
        value={sectionDataSingle.e9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 10"
        name="e10"
        value={sectionDataSingle.e10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 11"
        name="e11"
        value={sectionDataSingle.e11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 12"
        name="e12"
        value={sectionDataSingle.e12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 13"
        name="e13"
        value={sectionDataSingle.e13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 14"
        name="e14"
        value={sectionDataSingle.e14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 15"
        name="e15"
        value={sectionDataSingle.e15 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="To Be Eligible Under Tab Heading 1"
        name="toBeEligibUnderTabHeading1"
        value={sectionDataSingle.toBeEligibUnderTabHeading1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 1"
        name="toBeEligibUnderTablist1"
        value={sectionDataSingle.toBeEligibUnderTablist1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 2"
        name="toBeEligibUnderTablist2"
        value={sectionDataSingle.toBeEligibUnderTablist2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 3"
        name="toBeEligibUnderTablist3"
        value={sectionDataSingle.toBeEligibUnderTablist3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 4"
        name="toBeEligibUnderTablist4"
        value={sectionDataSingle.toBeEligibUnderTablist4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 5"
        name="toBeEligibUnderTablist5"
        value={sectionDataSingle.toBeEligibUnderTablist5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 6"
        name="toBeEligibUnderTablist6"
        value={sectionDataSingle.toBeEligibUnderTablist6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 7"
        name="toBeEligibUnderTablist7"
        value={sectionDataSingle.toBeEligibUnderTablist7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="To Be Eligible Under Tab Heading 2"
        name="toBeEligibUnderTabHeading2"
        value={sectionDataSingle.toBeEligibUnderTabHeading2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 8"
        name="toBeEligibUnderTablist8"
        value={sectionDataSingle.toBeEligibUnderTablist8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 9"
        name="toBeEligibUnderTablist9"
        value={sectionDataSingle.toBeEligibUnderTablist9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="To Be Eligible Under Tab List Item 10"
        name="toBeEligibUnderTablist10"
        value={sectionDataSingle.toBeEligibUnderTablist10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="To Be Eligible Under Last Paragraph"
        name="toBeEligibUnderLastPara"
        value={sectionDataSingle.toBeEligibUnderLastPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowtoApplyHeading"
        value={sectionDataSingle.HowtoApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Application Process Heading"
        name="HowtoApplyAppProcHead"
        value={sectionDataSingle.HowtoApplyAppProcHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process Paragraph"
        name="HowtoApplyAppProcPara"
        value={sectionDataSingle.HowtoApplyAppProcPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Step 1"
        name="HowtoApplyAppProcStep1"
        value={sectionDataSingle.HowtoApplyAppProcStep1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 1 List Item 1"
        name="HowtoApplyAppProcStep1Li1"
        value={sectionDataSingle.HowtoApplyAppProcStep1Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 1 List Item 2"
        name="HowtoApplyAppProcStep1Li2"
        value={sectionDataSingle.HowtoApplyAppProcStep1Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 1 Note"
        name="HowtoApplyAppProcStep1Note"
        value={sectionDataSingle.HowtoApplyAppProcStep1Note || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Application Process Step 2"
        name="HowtoApplyAppProcStep2"
        value={sectionDataSingle.HowtoApplyAppProcStep2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Application Process Sub Heading Step 2"
        name="HowtoApplyAppProcSubHStep2"
        value={sectionDataSingle.HowtoApplyAppProcSubHStep2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 2 List Item 1"
        name="HowtoApplyAppProcStep2Li1"
        value={sectionDataSingle.HowtoApplyAppProcStep2Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 2 List Item 2"
        name="HowtoApplyAppProcStep2Li2"
        value={sectionDataSingle.HowtoApplyAppProcStep2Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 2 List Item 3"
        name="HowtoApplyAppProcStep2Li3"
        value={sectionDataSingle.HowtoApplyAppProcStep2Li3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 2 List Item 4"
        name="HowtoApplyAppProcStep2Li4"
        value={sectionDataSingle.HowtoApplyAppProcStep2Li4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Application Process Step 3 Tab"
        name="HowtoApplyAppProcStep3Tab"
        value={sectionDataSingle.HowtoApplyAppProcStep3Tab || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Application Process Step 3 Tab Sub Heading"
        name="HowtoApplyAppProcStep3TabSubH"
        value={sectionDataSingle.HowtoApplyAppProcStep3TabSubH || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof of Funds Table 1 Heading 1"
        name="ProofFundTable1Head1"
        value={sectionDataSingle.ProofFundTable1Head1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 1 Row 1"
        name="ProofFund1Table11"
        value={sectionDataSingle.ProofFund1Table11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 1 Row 2"
        name="ProofFund1Table12"
        value={sectionDataSingle.ProofFund1Table12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 1 Row 3"
        name="ProofFund1Table13"
        value={sectionDataSingle.ProofFund1Table13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 1 Row 4"
        name="ProofFund1Table14"
        value={sectionDataSingle.ProofFund1Table14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof of Funds Table 1 Heading 2"
        name="ProofFundTable1Head2"
        value={sectionDataSingle.ProofFundTable1Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 1 Row 1"
        name="ProofFund1Table21"
        value={sectionDataSingle.ProofFund1Table21 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 1 Row 2"
        name="ProofFund1Table22"
        value={sectionDataSingle.ProofFund1Table22 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 1 Row 3"
        name="ProofFund1Table23"
        value={sectionDataSingle.ProofFund1Table23 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 1 Row 4"
        name="ProofFund1Table24"
        value={sectionDataSingle.ProofFund1Table24 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof of Funds Table 2 Heading 1"
        name="ProofFundTable2Head1"
        value={sectionDataSingle.ProofFundTable2Head1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 2 Row 1"
        name="ProofFund2Table11"
        value={sectionDataSingle.ProofFund2Table11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 2 Row 2"
        name="ProofFund2Table12"
        value={sectionDataSingle.ProofFund2Table12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 2 Row 3"
        name="ProofFund2Table13"
        value={sectionDataSingle.ProofFund2Table13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 2 Row 4"
        name="ProofFund2Table14"
        value={sectionDataSingle.ProofFund2Table14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof of Funds Table 2 Heading 2"
        name="ProofFundTable2Head2"
        value={sectionDataSingle.ProofFundTable2Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 2 Row 1"
        name="ProofFund2Table21"
        value={sectionDataSingle.ProofFund2Table21 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 2 Row 2"
        name="ProofFund2Table22"
        value={sectionDataSingle.ProofFund2Table22 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 2 Row 3"
        name="ProofFund2Table23"
        value={sectionDataSingle.ProofFund2Table23 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 2 Row 4"
        name="ProofFund2Table24"
        value={sectionDataSingle.ProofFund2Table24 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof of Funds Table 3 Heading 1"
        name="ProofFundTable3Head1"
        value={sectionDataSingle.ProofFundTable3Head1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 3 Row 1"
        name="ProofFund3Table11"
        value={sectionDataSingle.ProofFund3Table11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 3 Row 2"
        name="ProofFund3Table12"
        value={sectionDataSingle.ProofFund3Table12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 3 Row 3"
        name="ProofFund3Table13"
        value={sectionDataSingle.ProofFund3Table13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 3 Row 4"
        name="ProofFund3Table14"
        value={sectionDataSingle.ProofFund3Table14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof of Funds Table 3 Heading 2"
        name="ProofFundTable3Head2"
        value={sectionDataSingle.ProofFundTable3Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 3 Row 1"
        name="ProofFund3Table21"
        value={sectionDataSingle.ProofFund3Table21 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 3 Row 2"
        name="ProofFund3Table22"
        value={sectionDataSingle.ProofFund3Table22 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 3 Row 3"
        name="ProofFund3Table23"
        value={sectionDataSingle.ProofFund3Table23 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof of Funds Table 3 Row 4"
        name="ProofFund3Table24"
        value={sectionDataSingle.ProofFund3Table24 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Application Process Step 4"
        name="HowtoApplyAppProcStep4"
        value={sectionDataSingle.HowtoApplyAppProcStep4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Application Process Sub Heading Step 4"
        name="HowtoApplyAppProcSubHStep4"
        value={sectionDataSingle.HowtoApplyAppProcSubHStep4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 4 List Item 1"
        name="HowtoApplyAppProcStep4Li1"
        value={sectionDataSingle.HowtoApplyAppProcStep4Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 4 List Item 2"
        name="HowtoApplyAppProcStep4Li2"
        value={sectionDataSingle.HowtoApplyAppProcStep4Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Application Process Step 5"
        name="HowtoApplyAppProcStep5"
        value={sectionDataSingle.HowtoApplyAppProcStep5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Application Process Sub Heading Step 5"
        name="HowtoApplyAppProcSubHStep5"
        value={sectionDataSingle.HowtoApplyAppProcSubHStep5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Application Process Step 6"
        name="HowtoApplyAppProcStep6"
        value={sectionDataSingle.HowtoApplyAppProcStep6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Application Process Sub Heading Step 6"
        name="HowtoApplyAppProcSubHStep6"
        value={sectionDataSingle.HowtoApplyAppProcSubHStep6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 6 List Item 1"
        name="HowtoApplyAppProcStep6Li1"
        value={sectionDataSingle.HowtoApplyAppProcStep6Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 6 List Item 2"
        name="HowtoApplyAppProcStep6Li2"
        value={sectionDataSingle.HowtoApplyAppProcStep6Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 6 List Item 3"
        name="HowtoApplyAppProcStep6Li3"
        value={sectionDataSingle.HowtoApplyAppProcStep6Li3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Step 6 List Item 4"
        name="HowtoApplyAppProcStep6Li4"
        value={sectionDataSingle.HowtoApplyAppProcStep6Li4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Application Process 2 Tab Head"
        name="HowtoApplyAppProc2TabHead"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Application Process 2 Tab Head 1"
        name="HowtoApplyAppProc2TabHead1"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 1 Point 1"
        name="HowtoApplyAppProc2TabHead1Point1"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead1Point1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 1 Point 2"
        name="HowtoApplyAppProc2TabHead1Point2"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead1Point2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 1 Point 3"
        name="HowtoApplyAppProc2TabHead1Point3"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead1Point3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 1 Point 4"
        name="HowtoApplyAppProc2TabHead1Point4"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead1Point4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 1 Point 5"
        name="HowtoApplyAppProc2TabHead1Point5"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead1Point5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 1 Point 6"
        name="HowtoApplyAppProc2TabHead1Point6"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead1Point6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 1 Point 7"
        name="HowtoApplyAppProc2TabHead1Point7"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead1Point7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Application Process 2 Tab Head 2"
        name="HowtoApplyAppProc2TabHead2"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 2 Point 1"
        name="HowtoApplyAppProc2TabHead2Point1"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead2Point1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 2 Point 2"
        name="HowtoApplyAppProc2TabHead2Point2"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead2Point2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 2 Point 3"
        name="HowtoApplyAppProc2TabHead2Point3"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead2Point3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 2 Point 4"
        name="HowtoApplyAppProc2TabHead2Point4"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead2Point4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 2 Point 5"
        name="HowtoApplyAppProc2TabHead2Point5"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead2Point5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 2 Point 6"
        name="HowtoApplyAppProc2TabHead2Point6"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead2Point6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Application Process 2 Tab Head 2 Point 7"
        name="HowtoApplyAppProc2TabHead2Point7"
        value={sectionDataSingle.HowtoApplyAppProc2TabHead2Point7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Bringing Spouse Heading"
        name="BringingSpouHeading"
        value={sectionDataSingle.BringingSpouHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Bringing Spouse Sub Heading 1"
        name="BringingSpouSubHead1"
        value={sectionDataSingle.BringingSpouSubHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Bringing Spouse List Item 1"
        name="BringingSpouLi1"
        value={sectionDataSingle.BringingSpouLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Bringing Spouse List Item 2"
        name="BringingSpouLi2"
        value={sectionDataSingle.BringingSpouLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Bringing Spouse List Item 3"
        name="BringingSpouLi3"
        value={sectionDataSingle.BringingSpouLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Bringing Spouse Paragraph 1"
        name="BringingSpouPara1"
        value={sectionDataSingle.BringingSpouPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="International Heading"
        name="intenationalHeading"
        value={sectionDataSingle.intenationalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="International Paragraph"
        name="intenationalPara"
        value={sectionDataSingle.intenationalPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Graduate Program Heading"
        name="graduateProgHeading"
        value={sectionDataSingle.graduateProgHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Graduate Program Paragraph"
        name="graduateProgPara"
        value={sectionDataSingle.graduateProgPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Professional Degree Heading"
        name="ProfessionalDegHeading"
        value={sectionDataSingle.ProfessionalDegHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Professional Degree Sub Heading"
        name="ProfessionalDegSubHead"
        value={sectionDataSingle.ProfessionalDegSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Professional Degree List Item 1"
        name="ProfessionalDegLi1"
        value={sectionDataSingle.ProfessionalDegLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree List Item 2"
        name="ProfessionalDegLi2"
        value={sectionDataSingle.ProfessionalDegLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree List Item 3"
        name="ProfessionalDegLi3"
        value={sectionDataSingle.ProfessionalDegLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree List Item 4"
        name="ProfessionalDegLi4"
        value={sectionDataSingle.ProfessionalDegLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree List Item 5"
        name="ProfessionalDegLi5"
        value={sectionDataSingle.ProfessionalDegLi5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree List Item 6"
        name="ProfessionalDegLi6"
        value={sectionDataSingle.ProfessionalDegLi6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree List Item 7"
        name="ProfessionalDegLi7"
        value={sectionDataSingle.ProfessionalDegLi7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree List Item 8"
        name="ProfessionalDegLi8"
        value={sectionDataSingle.ProfessionalDegLi8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree List Item 9"
        name="ProfessionalDegLi9"
        value={sectionDataSingle.ProfessionalDegLi9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Who Is Not Heading"
        name="WhoIsNotHeading"
        value={sectionDataSingle.WhoIsNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Who Is Not Sub Heading"
        name="WhoIsNotSubHead"
        value={sectionDataSingle.WhoIsNotSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Who Is Not List Item 1"
        name="WhoIsNotSubLi1"
        value={sectionDataSingle.WhoIsNotSubLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Who Is Not List Item 2"
        name="WhoIsNotSubLi2"
        value={sectionDataSingle.WhoIsNotSubLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Submit Application Heading"
        name="SubmAppHeading"
        value={sectionDataSingle.SubmAppHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Submit Application Sub Heading"
        name="SubmAppSubHead"
        value={sectionDataSingle.SubmAppSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Submit Application List Heading"
        name="SubmAppLiHead"
        value={sectionDataSingle.SubmAppLiHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Submit Application List Item 1"
        name="SubmAppLi1"
        value={sectionDataSingle.SubmAppLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Submit Application List Item 2"
        name="SubmAppLi2"
        value={sectionDataSingle.SubmAppLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Submit Application List Item 3"
        name="SubmAppLi3"
        value={sectionDataSingle.SubmAppLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Payment Bio Heading"
        name="PayBioHeading"
        value={sectionDataSingle.PayBioHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Payment Bio List Item 1"
        name="PayBioLi1"
        value={sectionDataSingle.PayBioLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Payment Bio List Item 2"
        name="PayBioLi2"
        value={sectionDataSingle.PayBioLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="After Apply Heading"
        name="AfteApplyHeading"
        value={sectionDataSingle.AfteApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="After Apply List Item 1"
        name="AfteApplyLi1"
        value={sectionDataSingle.AfteApplyLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="After Apply List Item 2"
        name="AfteApplyLi2"
        value={sectionDataSingle.AfteApplyLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="After Apply List Item 3"
        name="AfteApplyLi3"
        value={sectionDataSingle.AfteApplyLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Processing Time Heading"
        name="ProcessingTimeHeading"
        value={sectionDataSingle.ProcessingTimeHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Processing Time List Item 1"
        name="ProcessingTimeLi1"
        value={sectionDataSingle.ProcessingTimeLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Processing Time List Item 2"
        name="ProcessingTimeLi2"
        value={sectionDataSingle.ProcessingTimeLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Reference Heading"
        name="AppRefHeading"
        value={sectionDataSingle.AppRefHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Reference Paragraph"
        name="AppRefPara"
        value={sectionDataSingle.AppRefPara || ""}
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
        placeholder="Refusal Sub Heading"
        name="RefusalSubHeading"
        value={sectionDataSingle.RefusalSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Item 1"
        name="r1"
        value={sectionDataSingle.r1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Item 2"
        name="r2"
        value={sectionDataSingle.r2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Item 3"
        name="r3"
        value={sectionDataSingle.r3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Item 4"
        name="r4"
        value={sectionDataSingle.r4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Item 5"
        name="r5"
        value={sectionDataSingle.r5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Item 6"
        name="r6"
        value={sectionDataSingle.r6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Item 7"
        name="r7"
        value={sectionDataSingle.r7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Item 8"
        name="r8"
        value={sectionDataSingle.r8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Item 9"
        name="r9"
        value={sectionDataSingle.r9 || ""}
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
        placeholder="If You Submit Heading"
        name="IfYouSubmitHeading"
        value={sectionDataSingle.IfYouSubmitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="If You Submit Sub Heading"
        name="IfYouSubmitSubHead"
        value={sectionDataSingle.IfYouSubmitSubHead || ""}
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
        placeholder="If You Graduate Another List Item 1"
        name="IfYouGradAnothLi1"
        value={sectionDataSingle.IfYouGradAnothLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Graduate Another List Item 2"
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
        placeholder="If You Graduate College List Item 1"
        name="IfYouGradCollLi1"
        value={sectionDataSingle.IfYouGradCollLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="If You Graduate College List Item 2"
        name="IfYouGradCollLi2"
        value={sectionDataSingle.IfYouGradCollLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Field of Study Required Heading"
        name="FieldStudyRequHeading"
        value={sectionDataSingle.FieldStudyRequHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field of Study Required Paragraph"
        name="FieldStudyRequPara"
        value={sectionDataSingle.FieldStudyRequPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field of Study Required List Item 1"
        name="fsrLi1"
        value={sectionDataSingle.fsrLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field of Study Required List Item 2"
        name="fsrLi2"
        value={sectionDataSingle.fsrLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field of Study Required List Item 3"
        name="fsrLi3"
        value={sectionDataSingle.fsrLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field of Study Required List Item 4"
        name="fsrLi4"
        value={sectionDataSingle.fsrLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field of Study Required List Item 5"
        name="fsrLi5"
        value={sectionDataSingle.fsrLi5 || ""}
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

      <input
        placeholder="Question 11"
        name="q11"
        value={sectionDataSingle.q11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 11"
        name="qa11"
        value={sectionDataSingle.qa11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 12"
        name="q12"
        value={sectionDataSingle.q12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 12"
        name="qa12"
        value={sectionDataSingle.qa12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 13"
        name="q13"
        value={sectionDataSingle.q13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 13"
        name="qa13"
        value={sectionDataSingle.qa13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 14"
        name="q14"
        value={sectionDataSingle.q14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 14"
        name="qa14"
        value={sectionDataSingle.qa14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 15"
        name="q15"
        value={sectionDataSingle.q15 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 15"
        name="qa15"
        value={sectionDataSingle.qa15 || ""}
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

export default SdsContent;
