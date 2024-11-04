import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const FamilyReunificationContent = () => {
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
    FamilyHeading: "",
    FamilyPara1: "",
    FamilyPara2: "",

    BenifitHeading: "",
    b1: "",
    b2: "",
    b3: "",

    HowToApplyHeading: "",
    HowToApplySubHead: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",

    WhyChooseUsHeading: "",
    WhyChooseUsPara: "",

    FamilyHeading: "",
    FamilyPara1: "",
    FamilyPara2: "",

    CategoriesHeading: "",

    EligibilityHeading: "",
    EligibilitySubHeading: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",

    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",

    StillNotHeading: "",
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
      `https://brightlight-node.onrender.com/familyReunification/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/familyReunification")
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
        placeholder="Family Reunification Heading"
        name="FamilyHeading"
        value={sectionDataSingle.FamilyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Family Para 1"
        name="FamilyPara1"
        value={sectionDataSingle.FamilyPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Family Para 2"
        name="FamilyPara2"
        value={sectionDataSingle.FamilyPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How To Apply Heading"
        name="HowToApplyHeading"
        value={sectionDataSingle.HowToApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How To Apply Subheading"
        name="HowToApplySubHead"
        value={sectionDataSingle.HowToApplySubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How To Apply Detail 1"
        name="ha1"
        value={sectionDataSingle.ha1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How To Apply Detail 2"
        name="ha2"
        value={sectionDataSingle.ha2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How To Apply Detail 3"
        name="ha3"
        value={sectionDataSingle.ha3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How To Apply Detail 4"
        name="ha4"
        value={sectionDataSingle.ha4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Family Heading"
        name="FamilyHeading"
        value={sectionDataSingle.FamilyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Family Paragraph 1"
        name="FamilyPara1"
        value={sectionDataSingle.FamilyPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Family Paragraph 2"
        name="FamilyPara2"
        value={sectionDataSingle.FamilyPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Categories Heading"
        name="CategoriesHeading"
        value={sectionDataSingle.CategoriesHeading}
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

      <input
        placeholder="Eligibility Subheading"
        name="EligibilitySubHeading"
        value={sectionDataSingle.EligibilitySubHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria 1"
        name="e1"
        value={sectionDataSingle.e1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria 2"
        name="e2"
        value={sectionDataSingle.e2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria 3"
        name="e3"
        value={sectionDataSingle.e3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria 4"
        name="e4"
        value={sectionDataSingle.e4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria 5"
        name="e5"
        value={sectionDataSingle.e5}
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

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading}
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

export default FamilyReunificationContent;
