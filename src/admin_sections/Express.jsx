import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const ExpressEntry = () => {
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

  const [sectionData, setSectionData] = useState({
    heading: "",
    description: "",
    aboutDescription: "",
    eligibilityHeading: "",
    eligibilityDescription: "",
    er1: "",
    er2: "",
    er3: "",
    drawHeading: "",
    draw1: "",
    draw2: "",
    draw3: "",
    advantageHeading: "",
    advantageDescription: "",
    a1: "",
    a2: "",
    a3: "",
    refusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    appointmentHeading: "",
    appointmentDescription: "",
    BenifitsHeading: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",

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

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/express-entry")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSectionData(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setSectionData({
      ...sectionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateClick = () => {
    if (!sectionData._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/express-entry/${sectionData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionData),
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
      });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />

      {/* Heading */}
      <input
        placeholder="Heading"
        name="heading"
        value={sectionData.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Description */}
      <textarea
        placeholder="Description"
        name="description"
        value={sectionData.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* About Description */}
      <textarea
        placeholder="About Description"
        name="aboutDescription"
        value={sectionData.aboutDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Heading */}
      <input
        placeholder="Eligibility Heading"
        name="eligibilityHeading"
        value={sectionData.eligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Description */}
      <textarea
        placeholder="Eligibility Description"
        name="eligibilityDescription"
        value={sectionData.eligibilityDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Reasons */}
      <input
        placeholder="Eligibility Reason 1"
        name="er1"
        value={sectionData.er1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Reason 2"
        name="er2"
        value={sectionData.er2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Reason 3"
        name="er3"
        value={sectionData.er3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Draw Heading */}
      <input
        placeholder="Draw Heading"
        name="drawHeading"
        value={sectionData.drawHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Draw Reasons */}
      <input
        placeholder="Draw Reason 1"
        name="draw1"
        value={sectionData.draw1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Draw Reason 2"
        name="draw2"
        value={sectionData.draw2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Draw Reason 3"
        name="draw3"
        value={sectionData.draw3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Advantage Heading */}
      <input
        placeholder="Advantage Heading"
        name="advantageHeading"
        value={sectionData.advantageHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Advantage Description */}
      <textarea
        placeholder="Advantage Description"
        name="advantageDescription"
        value={sectionData.advantageDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Advantages */}
      <input
        placeholder="Advantage 1"
        name="a1"
        value={sectionData.a1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Advantage 2"
        name="a2"
        value={sectionData.a2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Advantage 3"
        name="a3"
        value={sectionData.a3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Refusal Heading */}
      <input
        placeholder="Refusal Heading"
        name="refusalHeading"
        value={sectionData.refusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Refusal Reasons */}
      <input
        placeholder="Refusal Reason 1"
        name="r1"
        value={sectionData.r1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 2"
        name="r2"
        value={sectionData.r2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 3"
        name="r3"
        value={sectionData.r3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 4"
        name="r4"
        value={sectionData.r4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 5"
        name="r5"
        value={sectionData.r5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Appointment Heading */}
      <input
        placeholder="Appointment Heading"
        name="appointmentHeading"
        value={sectionData.appointmentHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Appointment Description */}
      <textarea
        placeholder="Appointment Description"
        name="appointmentDescription"
        value={sectionData.appointmentDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="BenifitsHeading"
        value={sectionData.BenifitsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 1"
        name="b1"
        value={sectionData.b1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 2"
        name="b2"
        value={sectionData.b2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 3"
        name="b3"
        value={sectionData.b3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 4"
        name="b4"
        value={sectionData.b4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading01"
        value={sectionData.WhyChooseUsHeading01 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 1"
        name="wcu1"
        value={sectionData.wcu1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 2"
        name="wcu2"
        value={sectionData.wcu2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us Point 3"
        name="wcu3"
        value={sectionData.wcu3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 4"
        name="wcu4"
        value={sectionData.wcu4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>

      <input
        placeholder="FAQ's Made Simple"
        name="faq_heading"
        value={sectionData.faq_heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 1"
        name="q1"
        value={sectionData.q1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 1"
        name="qa1"
        value={sectionData.qa1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 2"
        name="q2"
        value={sectionData.q2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 2"
        name="qa2"
        value={sectionData.qa2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 3"
        name="q3"
        value={sectionData.q3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 3"
        name="qa3"
        value={sectionData.qa3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 4"
        name="q4"
        value={sectionData.q4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 4"
        name="qa4"
        value={sectionData.qa4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 5"
        name="q5"
        value={sectionData.q5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 5"
        name="qa5"
        value={sectionData.qa5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 6"
        name="q6"
        value={sectionData.q6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 6"
        name="qa6"
        value={sectionData.qa6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 7"
        name="q7"
        value={sectionData.q7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 7"
        name="qa7"
        value={sectionData.qa7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 8"
        name="q8"
        value={sectionData.q8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 8"
        name="qa8"
        value={sectionData.qa8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 9"
        name="q9"
        value={sectionData.q9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 9"
        name="qa9"
        value={sectionData.qa9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 10"
        name="q10"
        value={sectionData.q10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 10"
        name="qa10"
        value={sectionData.qa10 || ""}
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
          value={sectionData.show_testimonials || ""}
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

export default ExpressEntry;
