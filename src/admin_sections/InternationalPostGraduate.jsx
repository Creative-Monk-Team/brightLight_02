import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const InternationalPostGraduateContent = () => {
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
    BenifitsList4: "",

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
    EligibilityList2NestedList2NestedList1: "",
    EligibilityList2NestedList2NestedList2: "",
    EligibilityList2NestedList2NestedList3: "",
    EligibilityList2NestedList2NestedList4: "",
    EligibilityList2NestedList2NestedList5: "",
    EligibilityList2NestedList2NestedList6: "",

    EligibilityList3: "",
    EligibilityList3NestedList1: "",
    EligibilityList3Note: "",
    EligibilityList3Remember: "",

    ReqExpressHeading: "",
    ReqExpressDesc: "",

    EmpRequirementsHeading: "",
    EmpRequirementsDescription: "",

    ApplicationHeading: "",

    ApplyPoint1: "",
    ApplyPoint1List1: "",
    ApplyPoint1List2: "",
    ApplyPoint1List3: "",
    ApplyPoint1List4: "",

    ApplyPoint2: "",
    ApplyPoint2List1: "",
    ApplyPoint2List2: "",
    ApplyPoint2List3: "",
    ApplyPoint2List4: "",

    ApplyPoint3: "",
    ApplyPoint3List1: "",
    ApplyPoint3List1Nested1: "",
    ApplyPoint3List1Nested2: "",
    ApplyPoint3List1Nested3: "",
    ApplyPoint3List1Nested4: "",
    ApplyPoint3List1Nested5: "",

    ApplyPoint4: "",
    ApplyPoint4List1: "",

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
      `https://brightlight-node.onrender.com/international-post-graduate-program-page/${sectionDataSingle._id}`,
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
      "https://brightlight-node.onrender.com/international-post-graduate-program-page"
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

      <textarea
        placeholder="Benefits List 4"
        name="BenifitsList4"
        value={sectionDataSingle.BenifitsList4 || ""}
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
        placeholder="Eligibility List 1 Nested List 1"
        name="EligibilityList1NestedList1"
        value={sectionDataSingle.EligibilityList1NestedList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested List 2"
        name="EligibilityList1NestedList2"
        value={sectionDataSingle.EligibilityList1NestedList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested List 3"
        name="EligibilityList1NestedList3"
        value={sectionDataSingle.EligibilityList1NestedList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested List 4"
        name="EligibilityList1NestedList4"
        value={sectionDataSingle.EligibilityList1NestedList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 1 Nested List 5"
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
        placeholder="Eligibility List 2 Nested List 1"
        name="EligibilityList2NestedList1"
        value={sectionDataSingle.EligibilityList2NestedList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested List 2"
        name="EligibilityList2NestedList2"
        value={sectionDataSingle.EligibilityList2NestedList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested List 2 Nested List 1"
        name="EligibilityList2NestedList2NestedList1"
        value={sectionDataSingle.EligibilityList2NestedList2NestedList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested List 2 Nested List 2"
        name="EligibilityList2NestedList2NestedList2"
        value={sectionDataSingle.EligibilityList2NestedList2NestedList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested List 2 Nested List 3"
        name="EligibilityList2NestedList2NestedList3"
        value={sectionDataSingle.EligibilityList2NestedList2NestedList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested List 2 Nested List 4"
        name="EligibilityList2NestedList2NestedList4"
        value={sectionDataSingle.EligibilityList2NestedList2NestedList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested List 2 Nested List 5"
        name="EligibilityList2NestedList2NestedList5"
        value={sectionDataSingle.EligibilityList2NestedList2NestedList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 2 Nested List 2 Nested List 6"
        name="EligibilityList2NestedList2NestedList6"
        value={sectionDataSingle.EligibilityList2NestedList2NestedList6 || ""}
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
        placeholder="Eligibility List 3 Nested List 1"
        name="EligibilityList3NestedList1"
        value={sectionDataSingle.EligibilityList3NestedList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 3 Note"
        name="EligibilityList3Note"
        value={sectionDataSingle.EligibilityList3Note || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List 3 Remember"
        name="EligibilityList3Remember"
        value={sectionDataSingle.EligibilityList3Remember || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Requirements for the Express Entry Category Heading"
        name="ReqExpressHeading"
        value={sectionDataSingle.ReqExpressHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Requirements for the Express Entry Category Description"
        name="ReqExpressDesc"
        value={sectionDataSingle.ReqExpressDesc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Employer Requirements Heading"
        name="EmpRequirementsHeading"
        value={sectionDataSingle.EmpRequirementsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Requirements Description"
        name="EmpRequirementsDescription"
        value={sectionDataSingle.EmpRequirementsDescription || ""}
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

      <textarea
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

      <textarea
        placeholder="Apply Point 1 List 3"
        name="ApplyPoint1List3"
        value={sectionDataSingle.ApplyPoint1List3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 1 List 4"
        name="ApplyPoint1List4"
        value={sectionDataSingle.ApplyPoint1List4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
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
        placeholder="Apply Point 2 List 2"
        name="ApplyPoint2List2"
        value={sectionDataSingle.ApplyPoint2List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 2 List 3"
        name="ApplyPoint2List3"
        value={sectionDataSingle.ApplyPoint2List3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 2 List 4"
        name="ApplyPoint2List4"
        value={sectionDataSingle.ApplyPoint2List4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
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
        placeholder="Apply Point 3 List 1 Nested 1"
        name="ApplyPoint3List1Nested1"
        value={sectionDataSingle.ApplyPoint3List1Nested1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 3 List 1 Nested 2"
        name="ApplyPoint3List1Nested2"
        value={sectionDataSingle.ApplyPoint3List1Nested2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 3 List 1 Nested 3"
        name="ApplyPoint3List1Nested3"
        value={sectionDataSingle.ApplyPoint3List1Nested3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 3 List 1 Nested 4"
        name="ApplyPoint3List1Nested4"
        value={sectionDataSingle.ApplyPoint3List1Nested4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Apply Point 3 List 1 Nested 5"
        name="ApplyPoint3List1Nested5"
        value={sectionDataSingle.ApplyPoint3List1Nested5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
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

export default InternationalPostGraduateContent;
