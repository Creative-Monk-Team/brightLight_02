import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const FederalSkilledWorkerProgramContent = () => {
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
    WorkProgHeading: "",
    WorkProgPara1: "",
    WorkProgPara2: "",

    EligibilityHeading: "",
    EligPara: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",

    EligTableHeading: "",
    EligTableHead1: "",
    EligTable1HeadLi1: "",
    EligTable1HeadLi2: "",
    EligTable1HeadLi3: "",
    EligTable1HeadLi4: "",
    EligTable1HeadLi5: "",
    EligTable1HeadLi6: "",

    EligTableHead2: "",
    EligTable2HeadLi1: "",
    EligTable2HeadLi2: "",
    EligTable2HeadLi3: "",
    EligTable2HeadLi4: "",
    EligTable2HeadLi5: "",
    EligTable2HeadLi6: "",

    EligTableHead3: "",
    EligTable3HeadLi1: "",
    EligTable3HeadLi2: "",
    EligTable3HeadLi3: "",
    EligTable3HeadLi4: "",
    EligTable3HeadLi5: "",
    EligTable3HeadLi6: "",

    EligLastPara: "",

    AssessmentHeading: "",
    AssessmentPara: "",

    ExpressEntryHead: "",

    HowToApplyHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",
    ha6: "",

    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",

    StillNotSureHeading: "",
    s1: "",
    s2: "",

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
      `https://brightlight-node.onrender.com/federalSkilledWorkerProgam/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/federalSkilledWorkerProgam")
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
        placeholder="Work Program Heading"
        name="WorkProgHeading"
        value={sectionDataSingle.WorkProgHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Program Detail 1"
        name="WorkProgPara1"
        value={sectionDataSingle.WorkProgPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Work Program Detail 2"
        name="WorkProgPara2"
        value={sectionDataSingle.WorkProgPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph"
        name="EligPara"
        value={sectionDataSingle.EligPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criterion 1"
        name="e1"
        value={sectionDataSingle.e1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criterion 2"
        name="e2"
        value={sectionDataSingle.e2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criterion 3"
        name="e3"
        value={sectionDataSingle.e3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criterion 4"
        name="e4"
        value={sectionDataSingle.e4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Table Heading"
        name="EligTableHeading"
        value={sectionDataSingle.EligTableHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 1"
        name="EligTable1HeadLi1"
        value={sectionDataSingle.EligTable1HeadLi1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 2"
        name="EligTable1HeadLi2"
        value={sectionDataSingle.EligTable1HeadLi2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 3"
        name="EligTable1HeadLi3"
        value={sectionDataSingle.EligTable1HeadLi3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 4"
        name="EligTable1HeadLi4"
        value={sectionDataSingle.EligTable1HeadLi4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 5"
        name="EligTable1HeadLi5"
        value={sectionDataSingle.EligTable1HeadLi5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TEER 6"
        name="EligTable1HeadLi6"
        value={sectionDataSingle.EligTable1HeadLi6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Table Heading 2"
        name="EligTableHead2"
        value={sectionDataSingle.EligTableHead2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 1"
        name="EligTable2HeadLi1"
        value={sectionDataSingle.EligTable2HeadLi1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 2"
        name="EligTable2HeadLi2"
        value={sectionDataSingle.EligTable2HeadLi2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 3"
        name="EligTable2HeadLi3"
        value={sectionDataSingle.EligTable2HeadLi3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 4"
        name="EligTable2HeadLi4"
        value={sectionDataSingle.EligTable2HeadLi4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 5"
        name="EligTable2HeadLi5"
        value={sectionDataSingle.EligTable2HeadLi5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Occupation Type 6"
        name="EligTable2HeadLi6"
        value={sectionDataSingle.EligTable2HeadLi6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Table Heading 3"
        name="EligTableHead3"
        value={sectionDataSingle.EligTableHead3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 1"
        name="EligTable3HeadLi1"
        value={sectionDataSingle.EligTable3HeadLi1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 2"
        name="EligTable3HeadLi2"
        value={sectionDataSingle.EligTable3HeadLi2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 3"
        name="EligTable3HeadLi3"
        value={sectionDataSingle.EligTable3HeadLi3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 4"
        name="EligTable3HeadLi4"
        value={sectionDataSingle.EligTable3HeadLi4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 5"
        name="EligTable3HeadLi5"
        value={sectionDataSingle.EligTable3HeadLi5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Example 6"
        name="EligTable3HeadLi6"
        value={sectionDataSingle.EligTable3HeadLi6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Last Paragraph"
        name="EligLastPara"
        value={sectionDataSingle.EligLastPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Last Paragraph"
        name="EligLastPara"
        value={sectionDataSingle.EligLastPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Assessment Heading"
        name="AssessmentHeading"
        value={sectionDataSingle.AssessmentHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Assessment Details"
        name="AssessmentPara"
        value={sectionDataSingle.AssessmentPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Express Entry Heading"
        name="ExpressEntryHead"
        value={sectionDataSingle.ExpressEntryHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowToApplyHeading"
        value={sectionDataSingle.HowToApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 1"
        name="ha1"
        value={sectionDataSingle.ha1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 2"
        name="ha2"
        value={sectionDataSingle.ha2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 3"
        name="ha3"
        value={sectionDataSingle.ha3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 4"
        name="ha4"
        value={sectionDataSingle.ha4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 5"
        name="ha5"
        value={sectionDataSingle.ha5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Detail 6"
        name="ha6"
        value={sectionDataSingle.ha6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 1"
        name="r1"
        value={sectionDataSingle.r1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 2"
        name="r2"
        value={sectionDataSingle.r2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 3"
        name="r3"
        value={sectionDataSingle.r3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 4"
        name="r4"
        value={sectionDataSingle.r4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Reason 5"
        name="r5"
        value={sectionDataSingle.r5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure Detail 1"
        name="s1"
        value={sectionDataSingle.s1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure Detail 2"
        name="s2"
        value={sectionDataSingle.s2}
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

export default FederalSkilledWorkerProgramContent;
