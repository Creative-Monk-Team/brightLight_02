import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const NonSdsContent = () => {
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
    nonSdsHeading: "",
    nonSdsPara1: "",
    nonSdsPara2: "",
    nonSdsPara3: "",
    prosConsHeading: "",
    prosHeading: "",
    prosLi1: "",
    prosLi2: "",
    prosLi3: "",
    prosLi4: "",
    consHeading: "",
    consLi1: "",
    consLi2: "",
    consLi3: "",
    consLi4: "",
    eligibilityHeading: "",
    eligibility1: "",
    eligibility2: "",
    eligibility3: "",
    eligibility4: "",
    eligibility5: "",
    eligibTabHeading: "",
    eligibTabEnglanTestHead1: "",

    eligibTab1Value1: "",
    eligibTab1Value2: "",
    eligibTab1Value3: "",
    eligibTab1Value4: "",
    eligibTab1Value5: "",
    eligibTab1Value6: "",
    eligibTab1Value7: "",
    eligibTabMinScReqSDSHead2: "",
    eligibTab2Value1: "",
    eligibTab2Value2: "",
    eligibTab2Value3: "",
    eligibTab2Value4: "",
    eligibTab2Value5: "",
    eligibTab2Value6: "",
    eligibTab2Value7: "",
    checkCLBHeading: "",
    appProcesHeading: "",
    appProcesSubHeading: "",
    appProc1: "",
    appProc2: "",
    appProc3: "",
    appProc4: "",
    appProc5: "",
    appProc6: "",
    appProc7: "",
    appProc8: "",
    appProc9: "",

    proofFundHeading: "",
    proofFundTable1Head1: "",
    proofFund1Table11: "",
    proofFund1Table12: "",
    proofFund1Table13: "",
    proofFund1Table14: "",
    proofFundTable1Head2: "",
    proofFund1Table21: "",
    proofFund1Table22: "",
    proofFund1Table23: "",
    proofFund1Table24: "",
    proofFundTable2Head1: "",
    proofFund2Table11: "",
    proofFund2Table12: "",
    proofFund2Table13: "",
    proofFund2Table14: "",
    proofFundTable2Head2: "",
    proofFund2Table21: "",
    proofFund2Table22: "",
    proofFund2Table23: "",
    proofFund2Table24: "",
    proofFundTable3Head1: "",
    proofFund3Table11: "",
    proofFund3Table12: "",
    proofFund3Table13: "",
    proofFund3Table14: "",
    proofFundTable3Head2: "",
    proofFund3Table21: "",
    proofFund3Table22: "",
    proofFund3Table23: "",
    proofFund3Table24: "",
    proofFundTableOpenPermitHeading: "",
    proofFundTableOpenPermitPara: "",
    gradProgHeading: "",
    gradProgPara: "",

    profDegProgHeading: "",
    profDegProgSubHead: "",
    profDegProgList1: "",
    profDegProgList2: "",
    profDegProgList3: "",
    profDegProgList4: "",
    profDegProgList5: "",
    profDegProgList6: "",
    profDegProgList7: "",
    profDegProgList8: "",
    profDegProgList9: "",
    refusalHeading: "",
    refusal1: "",
    refusal2: "",
    refusal3: "",
    refusal4: "",
    refusal5: "",
    inCaseHeading: "",
    inCase1: "",
    inCase2: "",
    submitHeading: "",
    submitSubHead: "",
    submitSubPara: "",
    submit1List1: "",
    sub1Li1SubLi1: "",
    sub1Li1SubLi2: "",
    submit2List1: "",
    sub2Li1SubLi1: "",
    sub2Li1SubLi2: "",
    submit3List1: "",
    sub3Li1SubLi1: "",
    sub3Li1SubLi2: "",
    fieldStudyRequHeading: "",
    fieldStudyRequSubHead: "",
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
    q16: "",
    qa16: "",

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
      `https://brightlight-node.onrender.com/nonSds/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/nonSds")
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
        placeholder="Non-SDS Heading"
        name="nonSdsHeading"
        value={sectionDataSingle.nonSdsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Non-SDS Paragraph 1"
        name="nonSdsPara1"
        value={sectionDataSingle.nonSdsPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Non-SDS Paragraph 2"
        name="nonSdsPara2"
        value={sectionDataSingle.nonSdsPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Non-SDS Paragraph 3"
        name="nonSdsPara3"
        value={sectionDataSingle.nonSdsPara3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Pros and Cons Heading"
        name="prosConsHeading"
        value={sectionDataSingle.prosConsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Pros Heading"
        name="prosHeading"
        value={sectionDataSingle.prosHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Pros Point 1"
        name="prosLi1"
        value={sectionDataSingle.prosLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Pros Point 2"
        name="prosLi2"
        value={sectionDataSingle.prosLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Pros Point 3"
        name="prosLi3"
        value={sectionDataSingle.prosLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Pros Point 4"
        name="prosLi4"
        value={sectionDataSingle.prosLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Cons Heading"
        name="consHeading"
        value={sectionDataSingle.consHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Cons Point 1"
        name="consLi1"
        value={sectionDataSingle.consLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Cons Point 2"
        name="consLi2"
        value={sectionDataSingle.consLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Cons Point 3"
        name="consLi3"
        value={sectionDataSingle.consLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Cons Point 4"
        name="consLi4"
        value={sectionDataSingle.consLi4 || ""}
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
        placeholder="Eligibility Point 1"
        name="eligibility1"
        value={sectionDataSingle.eligibility1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 2"
        name="eligibility2"
        value={sectionDataSingle.eligibility2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 3"
        name="eligibility3"
        value={sectionDataSingle.eligibility3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 4"
        name="eligibility4"
        value={sectionDataSingle.eligibility4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 5"
        name="eligibility5"
        value={sectionDataSingle.eligibility5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Tab Heading"
        name="eligibTabHeading"
        value={sectionDataSingle.eligibTabHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="English Language Test Heading"
        name="eligibTabEnglanTestHead1"
        value={sectionDataSingle.eligibTabEnglanTestHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Tab 1 Value 1"
        name="eligibTab1Value1"
        value={sectionDataSingle.eligibTab1Value1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 1 Value 2"
        name="eligibTab1Value2"
        value={sectionDataSingle.eligibTab1Value2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 1 Value 3"
        name="eligibTab1Value3"
        value={sectionDataSingle.eligibTab1Value3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 1 Value 4"
        name="eligibTab1Value4"
        value={sectionDataSingle.eligibTab1Value4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 1 Value 5"
        name="eligibTab1Value5"
        value={sectionDataSingle.eligibTab1Value5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 1 Value 6"
        name="eligibTab1Value6"
        value={sectionDataSingle.eligibTab1Value6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 1 Value 7"
        name="eligibTab1Value7"
        value={sectionDataSingle.eligibTab1Value7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Minimum Score Requirement SDS Heading"
        name="eligibTabMinScReqSDSHead2"
        value={sectionDataSingle.eligibTabMinScReqSDSHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Tab 2 Value 1"
        name="eligibTab2Value1"
        value={sectionDataSingle.eligibTab2Value1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 2 Value 2"
        name="eligibTab2Value2"
        value={sectionDataSingle.eligibTab2Value2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 2 Value 3"
        name="eligibTab2Value3"
        value={sectionDataSingle.eligibTab2Value3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 2 Value 4"
        name="eligibTab2Value4"
        value={sectionDataSingle.eligibTab2Value4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 2 Value 5"
        name="eligibTab2Value5"
        value={sectionDataSingle.eligibTab2Value5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 2 Value 6"
        name="eligibTab2Value6"
        value={sectionDataSingle.eligibTab2Value6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Tab 2 Value 7"
        name="eligibTab2Value7"
        value={sectionDataSingle.eligibTab2Value7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Check CLB Heading"
        name="checkCLBHeading"
        value={sectionDataSingle.checkCLBHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Application Process Heading"
        name="appProcesHeading"
        value={sectionDataSingle.appProcesHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Application Process Subheading"
        name="appProcesSubHeading"
        value={sectionDataSingle.appProcesSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 1"
        name="appProc1"
        value={sectionDataSingle.appProc1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 2"
        name="appProc2"
        value={sectionDataSingle.appProc2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 3"
        name="appProc3"
        value={sectionDataSingle.appProc3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 4"
        name="appProc4"
        value={sectionDataSingle.appProc4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 5"
        name="appProc5"
        value={sectionDataSingle.appProc5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 6"
        name="appProc6"
        value={sectionDataSingle.appProc6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 7"
        name="appProc7"
        value={sectionDataSingle.appProc7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 8"
        name="appProc8"
        value={sectionDataSingle.appProc8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 9"
        name="appProc9"
        value={sectionDataSingle.appProc9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof Fund Heading"
        name="proofFundHeading"
        value={sectionDataSingle.proofFundHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof Fund Table 1 Head 1"
        name="proofFundTable1Head1"
        value={sectionDataSingle.proofFundTable1Head1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Proof Fund 1 Table 1"
        name="proofFund1Table11"
        value={sectionDataSingle.proofFund1Table11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 1 Table 2"
        name="proofFund1Table12"
        value={sectionDataSingle.proofFund1Table12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 1 Table 3"
        name="proofFund1Table13"
        value={sectionDataSingle.proofFund1Table13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 1 Table 4"
        name="proofFund1Table14"
        value={sectionDataSingle.proofFund1Table14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof Fund Table 1 Head 2"
        name="proofFundTable1Head2"
        value={sectionDataSingle.proofFundTable1Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Proof Fund 2 Table 1"
        name="proofFund2Table11"
        value={sectionDataSingle.proofFund2Table11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 2 Table 2"
        name="proofFund2Table12"
        value={sectionDataSingle.proofFund2Table12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 2 Table 3"
        name="proofFund2Table13"
        value={sectionDataSingle.proofFund2Table13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 2 Table 4"
        name="proofFund2Table14"
        value={sectionDataSingle.proofFund2Table14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof Fund Table 2 Head 2"
        name="proofFundTable2Head2"
        value={sectionDataSingle.proofFundTable2Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Proof Fund 3 Table 1"
        name="proofFund3Table11"
        value={sectionDataSingle.proofFund3Table11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 3 Table 2"
        name="proofFund3Table12"
        value={sectionDataSingle.proofFund3Table12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 3 Table 3"
        name="proofFund3Table13"
        value={sectionDataSingle.proofFund3Table13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 3 Table 4"
        name="proofFund3Table14"
        value={sectionDataSingle.proofFund3Table14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof Fund Table 3 Head 2"
        name="proofFundTable3Head2"
        value={sectionDataSingle.proofFundTable3Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Proof Fund 3 Table 21"
        name="proofFund3Table21"
        value={sectionDataSingle.proofFund3Table21 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 3 Table 22"
        name="proofFund3Table22"
        value={sectionDataSingle.proofFund3Table22 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 3 Table 23"
        name="proofFund3Table23"
        value={sectionDataSingle.proofFund3Table23 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Proof Fund 3 Table 24"
        name="proofFund3Table24"
        value={sectionDataSingle.proofFund3Table24 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Open Permit Heading"
        name="proofFundTableOpenPermitHeading"
        value={sectionDataSingle.proofFundTableOpenPermitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Open Permit Paragraph"
        name="proofFundTableOpenPermitPara"
        value={sectionDataSingle.proofFundTableOpenPermitPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Graduate Program Heading"
        name="gradProgHeading"
        value={sectionDataSingle.gradProgHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Graduate Program Paragraph"
        name="gradProgPara"
        value={sectionDataSingle.gradProgPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Professional Degree Program Heading"
        name="profDegProgHeading"
        value={sectionDataSingle.profDegProgHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Professional Degree Program Sub Heading"
        name="profDegProgSubHead"
        value={sectionDataSingle.profDegProgSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Professional Degree Program List 1"
        name="profDegProgList1"
        value={sectionDataSingle.profDegProgList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 2"
        name="profDegProgList2"
        value={sectionDataSingle.profDegProgList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 3"
        name="profDegProgList3"
        value={sectionDataSingle.profDegProgList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 4"
        name="profDegProgList4"
        value={sectionDataSingle.profDegProgList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 5"
        name="profDegProgList5"
        value={sectionDataSingle.profDegProgList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 6"
        name="profDegProgList6"
        value={sectionDataSingle.profDegProgList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 7"
        name="profDegProgList7"
        value={sectionDataSingle.profDegProgList7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 8"
        name="profDegProgList8"
        value={sectionDataSingle.profDegProgList8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 9"
        name="profDegProgList9"
        value={sectionDataSingle.profDegProgList9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Refusal Heading"
        name="refusalHeading"
        value={sectionDataSingle.refusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 1"
        name="refusal1"
        value={sectionDataSingle.refusal1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reason 2"
        name="refusal2"
        value={sectionDataSingle.refusal2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reason 3"
        name="refusal3"
        value={sectionDataSingle.refusal3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reason 4"
        name="refusal4"
        value={sectionDataSingle.refusal4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reason 5"
        name="refusal5"
        value={sectionDataSingle.refusal5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="In Case Heading"
        name="inCaseHeading"
        value={sectionDataSingle.inCaseHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="In Case Statement 1"
        name="inCase1"
        value={sectionDataSingle.inCase1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="In Case Statement 2"
        name="inCase2"
        value={sectionDataSingle.inCase2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Submit Heading"
        name="submitHeading"
        value={sectionDataSingle.submitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Submit Sub Head"
        name="submitSubHead"
        value={sectionDataSingle.submitSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Submit Sub Paragraph"
        name="submitSubPara"
        value={sectionDataSingle.submitSubPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Submit 1 List 1"
        name="submit1List1"
        value={sectionDataSingle.submit1List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sub 1 List 1 Sub List 1"
        name="sub1Li1SubLi1"
        value={sectionDataSingle.sub1Li1SubLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Sub 1 List 1 Sub List 2"
        name="sub1Li1SubLi2"
        value={sectionDataSingle.sub1Li1SubLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Submit 2 List 1"
        name="submit2List1"
        value={sectionDataSingle.submit2List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sub 2 List 1 Sub List 1"
        name="sub2Li1SubLi1"
        value={sectionDataSingle.sub2Li1SubLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Sub 2 List 1 Sub List 2"
        name="sub2Li1SubLi2"
        value={sectionDataSingle.sub2Li1SubLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Submit 3 List 1"
        name="submit3List1"
        value={sectionDataSingle.submit3List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sub 3 List 1 Sub List 1"
        name="sub3Li1SubLi1"
        value={sectionDataSingle.sub3Li1SubLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Sub 3 List 1 Sub List 2"
        name="sub3Li1SubLi2"
        value={sectionDataSingle.sub3Li1SubLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Field of Study Requirement Heading"
        name="fieldStudyRequHeading"
        value={sectionDataSingle.fieldStudyRequHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Field of Study Requirement Sub Heading"
        name="fieldStudyRequSubHead"
        value={sectionDataSingle.fieldStudyRequSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Field Study Requirement List 1"
        name="fsrLi1"
        value={sectionDataSingle.fsrLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List 2"
        name="fsrLi2"
        value={sectionDataSingle.fsrLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List 3"
        name="fsrLi3"
        value={sectionDataSingle.fsrLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List 4"
        name="fsrLi4"
        value={sectionDataSingle.fsrLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Field Study Requirement List 5"
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
      <input
        placeholder="Question 16"
        name="q16"
        value={sectionDataSingle.q16 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 16"
        name="qa16"
        value={sectionDataSingle.qa16 || ""}
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

export default NonSdsContent;
