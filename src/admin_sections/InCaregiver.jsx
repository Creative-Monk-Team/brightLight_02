import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const InCaregiverContent = () => {
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
    benefitsHeading: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    eligibilityHeading: "",
    eligibilityDescription: "",
    elibilityS1: "",
    elibilityS2: "",
    s1Heading: "",
    s1Desc: "",
    s1l1: "",
    s1l2: "",
    s1l3: "",
    s1l4: "",
    s1discalmier: "",
    foreignHeading: "",
    foreign1: "",
    foreign1Desc: "",
    foreign2: "",
    foreign2Desc: "",
    f2l1: "",
    f2l2: "",
    f2l3: "",
    proofHeading: "",
    proofDesc1: "",
    proofDesc2: "",
    under18l1: "",
    under18l2: "",
    under18l3: "",
    under18l4: "",
    seniorHeading: "",
    seniorl1: "",
    seniorl2: "",
    seniorl3: "",
    disabilityHeading: "",
    disabilityl1: "",
    disabilityl2: "",
    step2Heading: "",
    step2Desc: "",
    applyHeading: "",
    asEmployer: "",
    emp1: "",
    emp2: "",
    emp3: "",
    emp4: "",
    emp5: "",
    emp6: "",
    emp7: "",
    emp7l1: "",
    emp7l2: "",
    emp8: "",
    emp9: "",
    asForiegn: "",
    asF1: "",
    asF2: "",
    asF3: "",
    asF4: "",
    StillNotHeading: "",
    s1: "",
    s2: "",
    whyChooseHeading: "",
    whuChooseDescription: "",
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
      `https://brightlight-node.onrender.com/in-home-caregiver/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/in-home-caregiver")
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

      <textarea
        placeholder="Benefit 4"
        name="b4"
        value={sectionDataSingle.b4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 5"
        name="b5"
        value={sectionDataSingle.b5 || ""}
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
        placeholder="Eligibility Step 1"
        name="elibilityS1"
        value={sectionDataSingle.elibilityS1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Step 2"
        name="elibilityS2"
        value={sectionDataSingle.elibilityS2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Step 1 Heading"
        name="s1Heading"
        value={sectionDataSingle.s1Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Step 1 Description"
        name="s1Desc"
        value={sectionDataSingle.s1Desc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Step 1 List Item 1"
        name="s1l1"
        value={sectionDataSingle.s1l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Step 1 List Item 2"
        name="s1l2"
        value={sectionDataSingle.s1l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Step 1 List Item 3"
        name="s1l3"
        value={sectionDataSingle.s1l3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Step 1 List Item 4"
        name="s1l4"
        value={sectionDataSingle.s1l4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Step 1 Disclaimer"
        name="s1discalmier"
        value={sectionDataSingle.s1discalmier || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Foreign Worker Heading"
        name="foreignHeading"
        value={sectionDataSingle.foreignHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Foreign Worker 1"
        name="foreign1"
        value={sectionDataSingle.foreign1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Foreign Worker 1 Description"
        name="foreign1Desc"
        value={sectionDataSingle.foreign1Desc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Foreign Worker 2"
        name="foreign2"
        value={sectionDataSingle.foreign2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Foreign Worker 2 Description"
        name="foreign2Desc"
        value={sectionDataSingle.foreign2Desc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Foreign Worker List Item 1"
        name="f2l1"
        value={sectionDataSingle.f2l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Foreign Worker List Item 2"
        name="f2l2"
        value={sectionDataSingle.f2l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Foreign Worker List Item 3"
        name="f2l3"
        value={sectionDataSingle.f2l3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof Heading"
        name="proofHeading"
        value={sectionDataSingle.proofHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Proof Description 1"
        name="proofDesc1"
        value={sectionDataSingle.proofDesc1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Proof Description 2"
        name="proofDesc2"
        value={sectionDataSingle.proofDesc2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Under 18 List Item 1"
        name="under18l1"
        value={sectionDataSingle.under18l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Under 18 List Item 2"
        name="under18l2"
        value={sectionDataSingle.under18l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Under 18 List Item 3"
        name="under18l3"
        value={sectionDataSingle.under18l3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Under 18 List Item 4"
        name="under18l4"
        value={sectionDataSingle.under18l4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Senior Heading"
        name="seniorHeading"
        value={sectionDataSingle.seniorHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Senior List Item 1"
        name="seniorl1"
        value={sectionDataSingle.seniorl1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Senior List Item 2"
        name="seniorl2"
        value={sectionDataSingle.seniorl2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Senior List Item 3"
        name="seniorl3"
        value={sectionDataSingle.seniorl3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Disability Heading"
        name="disabilityHeading"
        value={sectionDataSingle.disabilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Disability List Item 1"
        name="disabilityl1"
        value={sectionDataSingle.disabilityl1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Disability List Item 2"
        name="disabilityl2"
        value={sectionDataSingle.disabilityl2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Step 2 Heading"
        name="step2Heading"
        value={sectionDataSingle.step2Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Step 2 Description"
        name="step2Desc"
        value={sectionDataSingle.step2Desc || ""}
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

      <input
        placeholder="As Employer"
        name="asEmployer"
        value={sectionDataSingle.asEmployer || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 1"
        name="emp1"
        value={sectionDataSingle.emp1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 2"
        name="emp2"
        value={sectionDataSingle.emp2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 3"
        name="emp3"
        value={sectionDataSingle.emp3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 4"
        name="emp4"
        value={sectionDataSingle.emp4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 5"
        name="emp5"
        value={sectionDataSingle.emp5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 6"
        name="emp6"
        value={sectionDataSingle.emp6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 7"
        name="emp7"
        value={sectionDataSingle.emp7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 7 List Item 1"
        name="emp7l1"
        value={sectionDataSingle.emp7l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 7 List Item 2"
        name="emp7l2"
        value={sectionDataSingle.emp7l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 8"
        name="emp8"
        value={sectionDataSingle.emp8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Employer Step 9"
        name="emp9"
        value={sectionDataSingle.emp9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="As Foreign"
        name="asForiegn"
        value={sectionDataSingle.asForiegn || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="As Foreign Step 1"
        name="asF1"
        value={sectionDataSingle.asF1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="As Foreign Step 2"
        name="asF2"
        value={sectionDataSingle.asF2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="As Foreign Step 3"
        name="asF3"
        value={sectionDataSingle.asF3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="As Foreign Step 4"
        name="asF4"
        value={sectionDataSingle.asF4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h3>Still Not Sure?</h3>
      <textarea
        placeholder="Still Not Sure Step 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure Step 2"
        name="s2"
        value={sectionDataSingle.s2 || ""}
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

export default InCaregiverContent;
