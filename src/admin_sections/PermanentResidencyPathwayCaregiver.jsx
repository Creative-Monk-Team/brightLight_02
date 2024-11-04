import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const PRPathwayCaregiverContent = () => {
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
    HerePermanentResHeading: "",
    BenifitHeading: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    eligibleCriteriaHeading: "",
    eligibileSubHead1: "",
    eligibileSubHead1Para: "",
    NocListHeading: "",
    ec1: "",
    ec2: "",
    eligibileSubHead2: "",
    eligibileSubHead2Para: "",
    ec3: "",
    ec4: "",
    eligibileSubHead3: "",
    eligibileSubHead3Para: "",
    ec5: "",
    ec6: "",
    eligibileSubHead4: "",
    ec7: "",
    ec8: "",
    ec9: "",
    ec10: "",
    eligibileSubHead5: "",
    eligibileSubHead5Head1: "",
    eligibileSubHead5Para1: "",
    ec11: "",
    ec12: "",
    eligibileSubHead5Head2: "",
    eligibileSubHead5Para2: "",

    howToApplyHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    NowApplyGainHeading: "",
    ge1: "",
    ge2: "",
    ge3: "",
    ge4: "",
    ge5: "",
    ge6: "",
    ge7: "",
    NowApplyDirectHeading: "",
    dc1: "",
    dc2: "",
    dc3: "",
    dc4: "",
    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",
    ScrollHeading1: "",
    ScrollHeading2: "",

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
      `https://brightlight-node.onrender.com/permanentResidencyPathwayCaregiver/${sectionDataSingle._id}`,
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
      "https://brightlight-node.onrender.com/permanentResidencyPathwayCaregiver"
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
        placeholder="Here Permanent Residence Heading"
        name="HerePermanentResHeading"
        value={sectionDataSingle.HerePermanentResHeading || ""}
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
      <textarea
        placeholder="Benefit 4"
        name="b4"
        value={sectionDataSingle.b4 || ""}
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
      <input
        placeholder="Eligible Subhead 1"
        name="eligibileSubHead1"
        value={sectionDataSingle.eligibileSubHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Subhead 1 Paragraph"
        name="eligibileSubHead1Para"
        value={sectionDataSingle.eligibileSubHead1Para || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="NOC List Heading"
        name="NocListHeading"
        value={sectionDataSingle.NocListHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 1"
        name="ec1"
        value={sectionDataSingle.ec1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 2"
        name="ec2"
        value={sectionDataSingle.ec2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Subhead 2"
        name="eligibileSubHead2"
        value={sectionDataSingle.eligibileSubHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Subhead 2 Paragraph"
        name="eligibileSubHead2Para"
        value={sectionDataSingle.eligibileSubHead2Para || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 3"
        name="ec3"
        value={sectionDataSingle.ec3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 4"
        name="ec4"
        value={sectionDataSingle.ec4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Subhead 3"
        name="eligibileSubHead3"
        value={sectionDataSingle.eligibileSubHead3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Subhead 3 Paragraph"
        name="eligibileSubHead3Para"
        value={sectionDataSingle.eligibileSubHead3Para || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 5"
        name="ec5"
        value={sectionDataSingle.ec5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 6"
        name="ec6"
        value={sectionDataSingle.ec6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Subhead 4"
        name="eligibileSubHead4"
        value={sectionDataSingle.eligibileSubHead4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 7"
        name="ec7"
        value={sectionDataSingle.ec7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 8"
        name="ec8"
        value={sectionDataSingle.ec8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 9"
        name="ec9"
        value={sectionDataSingle.ec9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 10"
        name="ec10"
        value={sectionDataSingle.ec10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Subhead 5"
        name="eligibileSubHead5"
        value={sectionDataSingle.eligibileSubHead5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligible Subhead 5 Head 1"
        name="eligibileSubHead5Head1"
        value={sectionDataSingle.eligibileSubHead5Head1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Subhead 5 Paragraph 1"
        name="eligibileSubHead5Para1"
        value={sectionDataSingle.eligibileSubHead5Para1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 11"
        name="ec11"
        value={sectionDataSingle.ec11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Criteria 12"
        name="ec12"
        value={sectionDataSingle.ec12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Subhead 5 Head 2"
        name="eligibileSubHead5Head2"
        value={sectionDataSingle.eligibileSubHead5Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Subhead 5 Paragraph 2"
        name="eligibileSubHead5Para2"
        value={sectionDataSingle.eligibileSubHead5Para2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How To Apply Heading"
        name="howToApplyHeading"
        value={sectionDataSingle.howToApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How To Apply Step 1"
        name="ha1"
        value={sectionDataSingle.ha1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How To Apply Step 2"
        name="ha2"
        value={sectionDataSingle.ha2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How To Apply Step 3"
        name="ha3"
        value={sectionDataSingle.ha3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How To Apply Step 4"
        name="ha4"
        value={sectionDataSingle.ha4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Now Apply Again Heading"
        name="NowApplyGainHeading"
        value={sectionDataSingle.NowApplyGainHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Again Point 1"
        name="ge1"
        value={sectionDataSingle.ge1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Again Point 2"
        name="ge2"
        value={sectionDataSingle.ge2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Again Point 3"
        name="ge3"
        value={sectionDataSingle.ge3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Again Point 4"
        name="ge4"
        value={sectionDataSingle.ge4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Again Point 5"
        name="ge5"
        value={sectionDataSingle.ge5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Again Point 6"
        name="ge6"
        value={sectionDataSingle.ge6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Again Point 7"
        name="ge7"
        value={sectionDataSingle.ge7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Now Apply Direct Heading"
        name="NowApplyDirectHeading"
        value={sectionDataSingle.NowApplyDirectHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Direct Point 1"
        name="dc1"
        value={sectionDataSingle.dc1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Direct Point 2"
        name="dc2"
        value={sectionDataSingle.dc2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Direct Point 3"
        name="dc3"
        value={sectionDataSingle.dc3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Now Apply Direct Point 4"
        name="dc4"
        value={sectionDataSingle.dc4 || ""}
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
        placeholder="Scroll Heading 1"
        name="ScrollHeading1"
        value={sectionDataSingle.ScrollHeading1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Scroll Heading 2"
        name="ScrollHeading2"
        value={sectionDataSingle.ScrollHeading2 || ""}
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

export default PRPathwayCaregiverContent;
