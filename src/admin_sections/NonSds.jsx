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
    ProsConsHeading: "",
    ProsHeading: "",
    ProsLi1: "",
    ProsLi2: "",
    ProsLi3: "",
    ProsLi4: "",
    ConsHeading: "",
    ConsLi1: "",
    ConsLi2: "",
    ConsLi3: "",
    ConsLi4: "",
    EligibilityHeading: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
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
    CheckCLBHeading: "",
    AppProcesHeading: "",
    AppProcesSubHeading: "",
    ap1: "",
    ap2: "",
    ap3: "",
    ap4: "",
    ap5: "",
    ap6: "",
    ap7: "",
    ap8: "",
    ap9: "",

    ProofFundHeading: "",
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
    ProofFundTableOpenPermitHeading: "",
    ProofFundTableOpenPermitPara: "",
    GradProgHeading: "",
    GradProgPara: "",

    ProfDegProgHeading: "",
    ProfDegProgSubHead: "",
    ProfDegProgList1: "",
    ProfDegProgList2: "",
    ProfDegProgList3: "",
    ProfDegProgList4: "",
    ProfDegProgList5: "",
    ProfDegProgList6: "",
    ProfDegProgList7: "",
    ProfDegProgList8: "",
    ProfDegProgList9: "",
    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r4: "",
    InCaseHeading: "",
    InCase1: "",
    InCase2: "",
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
    FieldStudyRequHeading: "",
    FieldStudyRequSubHead: "",
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
        name="ProsConsHeading"
        value={sectionDataSingle.ProsConsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Pros Heading"
        name="ProsHeading"
        value={sectionDataSingle.ProsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Pros Point 1"
        name="ProsLi1"
        value={sectionDataSingle.ProsLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Pros Point 2"
        name="ProsLi2"
        value={sectionDataSingle.ProsLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Pros Point 3"
        name="ProsLi3"
        value={sectionDataSingle.ProsLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Pros Point 4"
        name="ProsLi4"
        value={sectionDataSingle.ProsLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Cons Heading"
        name="ConsHeading"
        value={sectionDataSingle.ConsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Cons Point 1"
        name="ConsLi1"
        value={sectionDataSingle.ConsLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Cons Point 2"
        name="ConsLi2"
        value={sectionDataSingle.ConsLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Cons Point 3"
        name="ConsLi3"
        value={sectionDataSingle.ConsLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Cons Point 4"
        name="ConsLi4"
        value={sectionDataSingle.ConsLi4 || ""}
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
      <textarea
        placeholder="Eligibility Point 1"
        name="e1"
        value={sectionDataSingle.e1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 2"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 3"
        name="e3"
        value={sectionDataSingle.e3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 4"
        name="e4"
        value={sectionDataSingle.e4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Point 5"
        name="e5"
        value={sectionDataSingle.e5 || ""}
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

      <div className={styles.twoColumnsTable}>
        <div>
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
        </div>

        <div>
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
        </div>
      </div>

      <input
        placeholder="Check CLB Heading"
        name="CheckCLBHeading"
        value={sectionDataSingle.CheckCLBHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Application Process Heading"
        name="AppProcesHeading"
        value={sectionDataSingle.AppProcesHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Application Process Subheading"
        name="AppProcesSubHeading"
        value={sectionDataSingle.AppProcesSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 1"
        name="ap1"
        value={sectionDataSingle.ap1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 2"
        name="ap2"
        value={sectionDataSingle.ap2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 3"
        name="ap3"
        value={sectionDataSingle.ap3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 4"
        name="ap4"
        value={sectionDataSingle.ap4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 5"
        name="ap5"
        value={sectionDataSingle.ap5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 6"
        name="ap6"
        value={sectionDataSingle.ap6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 7"
        name="ap7"
        value={sectionDataSingle.ap7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 8"
        name="ap8"
        value={sectionDataSingle.ap8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Process Step 9"
        name="ap9"
        value={sectionDataSingle.ap9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof Fund Heading"
        name="ProofFundHeading"
        value={sectionDataSingle.ProofFundHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div className={styles.twoColumnsTable}>
        <div>
          <input
            placeholder="Proof Fund Table 1 Head 1"
            name="ProofFundTable1Head1"
            value={sectionDataSingle.ProofFundTable1Head1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Proof Fund 1 Table 1"
            name="ProofFund1Table11"
            value={sectionDataSingle.ProofFund1Table11 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 1 Table 2"
            name="ProofFund1Table12"
            value={sectionDataSingle.ProofFund1Table12 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 1 Table 3"
            name="ProofFund1Table13"
            value={sectionDataSingle.ProofFund1Table13 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 1 Table 4"
            name="ProofFund1Table14"
            value={sectionDataSingle.ProofFund1Table14 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>

        <div>
          <input
            placeholder="Proof Fund Table 1 Head 2"
            name="ProofFundTable1Head2"
            value={sectionDataSingle.ProofFundTable1Head2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Proof Fund 2 Table 1"
            name="ProofFund1Table21"
            value={sectionDataSingle.ProofFund1Table21 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 2"
            name="ProofFund1Table22"
            value={sectionDataSingle.ProofFund1Table22 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 3"
            name="ProofFund2Table23"
            value={sectionDataSingle.ProofFund1Table23 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund1Table24"
            value={sectionDataSingle.ProofFund1Table24 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      </div>

      <div className={styles.twoColumnsTable}>
        <div>
          <textarea
            placeholder="Proof Fund 2 Table 3"
            name="ProofFundTable2Head1"
            value={sectionDataSingle.ProofFundTable2Head1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund2Table11"
            value={sectionDataSingle.ProofFund2Table11 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund2Table12"
            value={sectionDataSingle.ProofFund2Table12 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund2Table13"
            value={sectionDataSingle.ProofFund2Table13 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund2Table14"
            value={sectionDataSingle.ProofFund2Table14 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>

        <div>
          <textarea
            placeholder="Proof Fund 2 Table 3"
            name="ProofFundTable2Head2"
            value={sectionDataSingle.ProofFundTable2Head2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund2Table21"
            value={sectionDataSingle.ProofFund2Table21 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund2Table22"
            value={sectionDataSingle.ProofFund2Table22 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund2Table23"
            value={sectionDataSingle.ProofFund2Table23 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 2 Table 4"
            name="ProofFund2Table24"
            value={sectionDataSingle.ProofFund2Table24 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      </div>

      <div className={styles.twoColumnsTable}>
        <div>
          <textarea
            placeholder="Proof Fund 3 Table 1"
            name="ProofFundTable3Head1"
            value={sectionDataSingle.ProofFundTable3Head1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 3 Table 1"
            name="ProofFund3Table11"
            value={sectionDataSingle.ProofFund3Table11 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 3 Table 2"
            name="ProofFund3Table12"
            value={sectionDataSingle.ProofFund3Table12 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 3 Table 3"
            name="ProofFund3Table13"
            value={sectionDataSingle.ProofFund3Table13 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 3 Table 4"
            name="ProofFund3Table14"
            value={sectionDataSingle.ProofFund3Table14 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>

        <div>
          <input
            placeholder="Proof Fund Table 3 Head 2"
            name="ProofFundTable3Head2"
            value={sectionDataSingle.ProofFundTable3Head2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="Proof Fund 3 Table 21"
            name="ProofFund3Table21"
            value={sectionDataSingle.ProofFund3Table21 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 3 Table 22"
            name="ProofFund3Table22"
            value={sectionDataSingle.ProofFund3Table22 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 3 Table 23"
            name="ProofFund3Table23"
            value={sectionDataSingle.ProofFund3Table23 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="Proof Fund 3 Table 24"
            name="ProofFund3Table24"
            value={sectionDataSingle.ProofFund3Table24 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      </div>

      <input
        placeholder="Open Permit Heading"
        name="ProofFundTableOpenPermitHeading"
        value={sectionDataSingle.ProofFundTableOpenPermitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Open Permit Paragraph"
        name="ProofFundTableOpenPermitPara"
        value={sectionDataSingle.ProofFundTableOpenPermitPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Graduate Program Heading"
        name="GradProgHeading"
        value={sectionDataSingle.GradProgHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Graduate Program Paragraph"
        name="GradProgPara"
        value={sectionDataSingle.GradProgPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Professional Degree Program Heading"
        name="ProfDegProgHeading"
        value={sectionDataSingle.ProfDegProgHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Professional Degree Program Sub Heading"
        name="ProfDegProgSubHead"
        value={sectionDataSingle.ProfDegProgSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Professional Degree Program List 1"
        name="ProfDegProgList1"
        value={sectionDataSingle.ProfDegProgList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 2"
        name="ProfDegProgList2"
        value={sectionDataSingle.ProfDegProgList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 3"
        name="ProfDegProgList3"
        value={sectionDataSingle.ProfDegProgList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 4"
        name="ProfDegProgList4"
        value={sectionDataSingle.ProfDegProgList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 5"
        name="ProfDegProgList5"
        value={sectionDataSingle.ProfDegProgList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 6"
        name="ProfDegProgList6"
        value={sectionDataSingle.ProfDegProgList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 7"
        name="ProfDegProgList7"
        value={sectionDataSingle.ProfDegProgList7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 8"
        name="ProfDegProgList8"
        value={sectionDataSingle.ProfDegProgList8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Professional Degree Program List 9"
        name="ProfDegProgList9"
        value={sectionDataSingle.ProfDegProgList9 || ""}
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

      <textarea
        placeholder="Refusal Reason 1"
        name="r1"
        value={sectionDataSingle.r1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reason 2"
        name="r2"
        value={sectionDataSingle.r2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reason 3"
        name="r3"
        value={sectionDataSingle.r3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reason 4"
        name="r4"
        value={sectionDataSingle.r4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Reason 5"
        name="r5"
        value={sectionDataSingle.r5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="In Case Heading"
        name="InCaseHeading"
        value={sectionDataSingle.InCaseHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="In Case Statement 1"
        name="InCase1"
        value={sectionDataSingle.InCase1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="In Case Statement 2"
        name="InCase2"
        value={sectionDataSingle.InCase2 || ""}
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
        name="FieldStudyRequHeading"
        value={sectionDataSingle.FieldStudyRequHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Field of Study Requirement Sub Heading"
        name="FieldStudyRequSubHead"
        value={sectionDataSingle.FieldStudyRequSubHead || ""}
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
