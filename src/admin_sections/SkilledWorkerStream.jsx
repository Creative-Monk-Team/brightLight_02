import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const SkilledWorkerStreamContent = () => {
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

    eligibleSubHeading: "",
    eligibileHeading: "",
    eligibleDesc: "",
    e1: "",
    e1l1: "",
    e1l2: "",
    e2: "",
    e2l1: "",
    e2l2: "",
    e3: "",
    e3l1: "",
    e4: "",
    e4l1: "",
    e5: "",
    e5l1: "",

    expressConsiderationHeading: "",
    expressConsiderationDescription: "",

    recruitmentHeading: "",
    recruitmentDescription: "",
    recruitmentSubHeading: "",
    recruitmentSubDesc: "",
    r1: "",
    r1l1: "",
    r2: "",
    r2l1: "",
    r3: "",
    r3l1: "",
    r3l2: "",
    r4: "",
    r4l1: "",
    r5: "",
    r5l1: "",
    r5l2: "",
    r5l3: "",
    r6: "",
    r6l1: "",

    applicationHeading: "",
    a1: "",
    a1l1: "",
    a1l2: "",

    a2: "",
    a2l1: "",
    a2l2: "",

    a3: "",
    a3l1: "",
    a3l2: "",

    a4: "",
    a4l1: "",
    a4l2: "",

    a5: "",
    a5l1: "",
    a5l2: "",
    a5l3: "",
    a5l4: "",

    a6: "",
    a6l1: "",
    a6l1n1: "",
    a6l1n2: "",
    a6l1n3: "",

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
      `https://brightlight-node.onrender.com/skilled-worker-stream/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/skilled-worker-stream")
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

      <input
        placeholder="Eligible Sub Heading"
        name="eligibleSubHeading"
        value={sectionDataSingle.eligibleSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligible Heading"
        name="eligibileHeading"
        value={sectionDataSingle.eligibileHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible Description"
        name="eligibleDesc"
        value={sectionDataSingle.eligibleDesc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["e1", "e2", "e3", "e4", "e5"].map((e, index) => (
        <div key={index}>
          <textarea
            placeholder={`Eligible Item ${index + 1}`}
            name={e}
            value={sectionDataSingle[e] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder={`Eligible Item ${index + 1} List Item 1`}
            name={`${e}l1`}
            value={sectionDataSingle[`${e}l1`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          {index !== 4 && (
            <textarea
              placeholder={`Eligible Item ${index + 1} List Item 2`}
              name={`${e}l2`}
              value={sectionDataSingle[`${e}l2`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          )}
        </div>
      ))}

      <input
        placeholder="Express Consideration Heading"
        name="expressConsiderationHeading"
        value={sectionDataSingle.expressConsiderationHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Express Consideration Description"
        name="expressConsiderationDescription"
        value={sectionDataSingle.expressConsiderationDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Recruitment Heading"
        name="recruitmentHeading"
        value={sectionDataSingle.recruitmentHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Recruitment Description"
        name="recruitmentDescription"
        value={sectionDataSingle.recruitmentDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Recruitment Sub Heading"
        name="recruitmentSubHeading"
        value={sectionDataSingle.recruitmentSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Recruitment Sub Description"
        name="recruitmentSubDesc"
        value={sectionDataSingle.recruitmentSubDesc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["r1", "r2", "r3", "r4", "r5", "r6"].map((r, index) => (
        <div key={index}>
          <textarea
            placeholder={`Recruitment Item ${index + 1}`}
            name={r}
            value={sectionDataSingle[r] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder={`Recruitment Item ${index + 1} List Item 1`}
            name={`${r}l1`}
            value={sectionDataSingle[`${r}l1`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          {index >= 2 && (
            <textarea
              placeholder={`Recruitment Item ${index + 1} List Item 2`}
              name={`${r}l2`}
              value={sectionDataSingle[`${r}l2`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          )}
        </div>
      ))}

      <input
        placeholder="Application Heading"
        name="applicationHeading"
        value={sectionDataSingle.applicationHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {["a1", "a2", "a3", "a4", "a5"].map((a, index) => (
        <div key={index}>
          <textarea
            placeholder={`Application Item ${index + 1}`}
            name={a}
            value={sectionDataSingle[a] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder={`Application Item ${index + 1} List Item 1`}
            name={`${a}l1`}
            value={sectionDataSingle[`${a}l1`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder={`Application Item ${index + 1} List Item 2`}
            name={`${a}l2`}
            value={sectionDataSingle[`${a}l2`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      ))}

      <textarea
        placeholder="Application Item 2"
        name="a2"
        value={sectionDataSingle.a2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 2 List Item 1"
        name="a2l1"
        value={sectionDataSingle.a2l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 2 List Item 2"
        name="a2l2"
        value={sectionDataSingle.a2l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Item 3"
        name="a3"
        value={sectionDataSingle.a3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 3 List Item 1"
        name="a3l1"
        value={sectionDataSingle.a3l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 3 List Item 2"
        name="a3l2"
        value={sectionDataSingle.a3l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Item 4"
        name="a4"
        value={sectionDataSingle.a4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 4 List Item 1"
        name="a4l1"
        value={sectionDataSingle.a4l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 4 List Item 2"
        name="a4l2"
        value={sectionDataSingle.a4l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Item 5"
        name="a5"
        value={sectionDataSingle.a5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 5 List Item 1"
        name="a5l1"
        value={sectionDataSingle.a5l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 5 List Item 2"
        name="a5l2"
        value={sectionDataSingle.a5l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 5 List Item 3"
        name="a5l3"
        value={sectionDataSingle.a5l3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 5 List Item 4"
        name="a5l4"
        value={sectionDataSingle.a5l4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Item 6"
        name="a6"
        value={sectionDataSingle.a6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 6 List Item 1"
        name="a6l1"
        value={sectionDataSingle.a6l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 6 List Item 1 Nested 1"
        name="a6l1n1"
        value={sectionDataSingle.a6l1n1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 6 List Item 1 Nested 2"
        name="a6l1n2"
        value={sectionDataSingle.a6l1n2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Application Item 6 List Item 1 Nested 3"
        name="a6l1n3"
        value={sectionDataSingle.a6l1n3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Item 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Item 2"
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

export default SkilledWorkerStreamContent;
