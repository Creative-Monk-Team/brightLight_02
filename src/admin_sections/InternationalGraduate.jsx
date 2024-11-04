import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const InternationalGraduateContent = () => {
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
    Description: "",
    BenifitsHeading: "",
    BenifitsList1: "",
    BenifitsList2: "",
    BenifitsList3: "",
    EligibilityHeading: "",
    EligibilitySubHead: "",
    EligibilityList1: "",
    EligibilityList1NestedList1: "",
    EligibilityList1NestedList2: "",
    EligibilityList1NestedList3: "",
    EligibilityList1NestedList4: "",
    EligibilityList1NestedList5: "",
    EligibilityList2: "",
    EligibilityList2NestedList1: "",
    EligibilityList2NestedList2: "",
    EligibilityList2NestedList3: "",
    EligibilityList2NestedList4: "",
    EligibilityList2NestedList5: "",
    EligibilityList3: "",
    EligibilityList3NestedList1: "",
    EligibilityList3NestedList2: "",
    EligibilityList4: "",
    EligibilityList4NestedList1: "",
    EligibilityList4NestedList2: "",
    EligibilityList4Remember: "",
    ReqExpressHeading: "",
    ReqExpressDesc: "",

    EmpRequirementsHeading: "",
    EmpRequirementsDescription: "",
    EmpRequirementsList1: "",
    EmpRequirementsList2: "",
    EmpRequirementsList3: "",
    EmpRequirementsList4: "",
    EmpRequirementsList5: "",
    EmpRequirementsList6: "",
    EmpRequirementsList7: "",
    EmpRequirementsList8: "",

    ApplicationHeading: "",
    ApplyPoint1: "",
    ApplyPoint1List1: "",
    ApplyPoint1List2: "",

    ApplyPoint2: "",
    ApplyPoint2List1: "",
    ApplyPoint2List1Nested1: "",
    ApplyPoint2List1Nested1: "",
    ApplyPoint2List2: "",

    ApplyPoint3: "",
    ApplyPoint3List1: "",
    ApplyPoint3List2: "",

    ApplyPoint4: "",
    ApplyPoint4List1: "",

    ApplyPoint5: "",
    ApplyPoint5List1: "",
    ApplyPoint5List2: "",
    ApplyPoint5List3: "",

    ApplyPoint6: "",
    ApplyPoint6List1: "",
    ApplyPoint6List2: "",
    ApplyPoint6List3: "",

    ApplyPoint7: "",
    ApplyPoint7List1: "",

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
    q11: "",
    qa11: "",
    q12: "",
    qa12: "",
    q13: "",
    qa13: "",

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
      `https://brightlight-node.onrender.com/international-graduate-program-page/${sectionDataSingle._id}`,
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
    fetch(
      "https://brightlight-node.onrender.com/international-graduate-program-page"
    )
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
        placeholder="Description"
        name="Description"
        value={sectionDataSingle.Description || ""}
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
        placeholder="Benefits Point 1"
        name="BenifitsList1"
        value={sectionDataSingle.BenifitsList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits Point 2"
        name="BenifitsList2"
        value={sectionDataSingle.BenifitsList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits Point 3"
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
        placeholder="Eligibility Sub Head"
        name="EligibilitySubHead"
        value={sectionDataSingle.EligibilitySubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1"
        name="EligibilityList1"
        value={sectionDataSingle.EligibilityList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested 1"
        name="EligibilityList1NestedList1"
        value={sectionDataSingle.EligibilityList1NestedList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested 2"
        name="EligibilityList1NestedList2"
        value={sectionDataSingle.EligibilityList1NestedList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested 3"
        name="EligibilityList1NestedList3"
        value={sectionDataSingle.EligibilityList1NestedList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested 4"
        name="EligibilityList1NestedList4"
        value={sectionDataSingle.EligibilityList1NestedList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested 5"
        name="EligibilityList1NestedList5"
        value={sectionDataSingle.EligibilityList1NestedList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2"
        name="EligibilityList2"
        value={sectionDataSingle.EligibilityList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested 1"
        name="EligibilityList2NestedList1"
        value={sectionDataSingle.EligibilityList2NestedList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested 2"
        name="EligibilityList2NestedList2"
        value={sectionDataSingle.EligibilityList2NestedList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested 3"
        name="EligibilityList2NestedList3"
        value={sectionDataSingle.EligibilityList2NestedList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested 4"
        name="EligibilityList2NestedList4"
        value={sectionDataSingle.EligibilityList2NestedList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested 5"
        name="EligibilityList2NestedList5"
        value={sectionDataSingle.EligibilityList2NestedList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 3"
        name="EligibilityList3"
        value={sectionDataSingle.EligibilityList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 3 Nested 1"
        name="EligibilityList3NestedList1"
        value={sectionDataSingle.EligibilityList3NestedList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 3 Nested 2"
        name="EligibilityList3NestedList2"
        value={sectionDataSingle.EligibilityList3NestedList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 4"
        name="EligibilityList4"
        value={sectionDataSingle.EligibilityList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 4 Nested 1"
        name="EligibilityList4NestedList1"
        value={sectionDataSingle.EligibilityList4NestedList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 4 Nested 2"
        name="EligibilityList4NestedList2"
        value={sectionDataSingle.EligibilityList4NestedList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Remember"
        name="EligibilityList4Remember"
        value={sectionDataSingle.EligibilityList4Remember || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Requirements for Express Entry"
        name="ReqExpressHeading"
        value={sectionDataSingle.ReqExpressHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Requirements Description"
        name="ReqExpressDesc"
        value={sectionDataSingle.ReqExpressDesc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Employer's Eligibility Requirements Heading"
        name="EmpRequirementsHeading"
        value={sectionDataSingle.EmpRequirementsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Eligibility Requirements Description"
        name="EmpRequirementsDescription"
        value={sectionDataSingle.EmpRequirementsDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Requirement 1"
        name="EmpRequirementsList1"
        value={sectionDataSingle.EmpRequirementsList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Requirement 2"
        name="EmpRequirementsList2"
        value={sectionDataSingle.EmpRequirementsList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Requirement 3"
        name="EmpRequirementsList3"
        value={sectionDataSingle.EmpRequirementsList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Requirement 4"
        name="EmpRequirementsList4"
        value={sectionDataSingle.EmpRequirementsList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Requirement 5"
        name="EmpRequirementsList5"
        value={sectionDataSingle.EmpRequirementsList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Requirement 6"
        name="EmpRequirementsList6"
        value={sectionDataSingle.EmpRequirementsList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Requirement 7"
        name="EmpRequirementsList7"
        value={sectionDataSingle.EmpRequirementsList7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer's Requirement 8"
        name="EmpRequirementsList8"
        value={sectionDataSingle.EmpRequirementsList8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Heading"
        name="ApplicationHeading"
        value={sectionDataSingle.ApplicationHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Point 1"
        name="ApplyPoint1"
        value={sectionDataSingle.ApplyPoint1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 1 List 1"
        name="ApplyPoint1List1"
        value={sectionDataSingle.ApplyPoint1List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 1 List 2"
        name="ApplyPoint1List2"
        value={sectionDataSingle.ApplyPoint1List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Point 2"
        name="ApplyPoint2"
        value={sectionDataSingle.ApplyPoint2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 2 List 1"
        name="ApplyPoint2List1"
        value={sectionDataSingle.ApplyPoint2List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 2 List 1 Nested 1"
        name="ApplyPoint2List1Nested1"
        value={sectionDataSingle.ApplyPoint2List1Nested1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 2 List 1 Nested 2"
        name="ApplyPoint2List1Nested2"
        value={sectionDataSingle.ApplyPoint2List1Nested2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 2 List 2"
        name="ApplyPoint2List2"
        value={sectionDataSingle.ApplyPoint2List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Point 3"
        name="ApplyPoint3"
        value={sectionDataSingle.ApplyPoint3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 3 List 1"
        name="ApplyPoint3List1"
        value={sectionDataSingle.ApplyPoint3List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 3 List 2"
        name="ApplyPoint3List2"
        value={sectionDataSingle.ApplyPoint3List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Point 4"
        name="ApplyPoint4"
        value={sectionDataSingle.ApplyPoint4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 4 List 1"
        name="ApplyPoint4List1"
        value={sectionDataSingle.ApplyPoint4List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Point 5"
        name="ApplyPoint5"
        value={sectionDataSingle.ApplyPoint5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 5 List 1"
        name="ApplyPoint5List1"
        value={sectionDataSingle.ApplyPoint5List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 5 List 2"
        name="ApplyPoint5List2"
        value={sectionDataSingle.ApplyPoint5List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 5 List 3"
        name="ApplyPoint5List3"
        value={sectionDataSingle.ApplyPoint5List3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Point 6"
        name="ApplyPoint6"
        value={sectionDataSingle.ApplyPoint6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 6 List 1"
        name="ApplyPoint6List1"
        value={sectionDataSingle.ApplyPoint6List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 6 List 2"
        name="ApplyPoint6List2"
        value={sectionDataSingle.ApplyPoint6List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 6 List 3"
        name="ApplyPoint6List3"
        value={sectionDataSingle.ApplyPoint6List3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Point 7"
        name="ApplyPoint7"
        value={sectionDataSingle.ApplyPoint7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 7 List 1"
        name="ApplyPoint7List1"
        value={sectionDataSingle.ApplyPoint7List1 || ""}
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

export default InternationalGraduateContent;
