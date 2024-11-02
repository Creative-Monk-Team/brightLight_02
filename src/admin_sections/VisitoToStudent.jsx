import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const VisitorToStudentContent = () => {
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
    visitorToStudentHeading: "",
    visitorToStudentPara: "",

    BenifitsHeading: "",
    BenifitsSubHead: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    b7: "",

    EligibilityHeading: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    EligibilityListHead: "",
    UkrainHeading: "",
    u1: "",
    u2: "",
    u3: "",
    u4: "",
    u5: "",
    u6: "",
    u7: "",
    u8: "",
    SpouseDepenChildHeading: "",
    sdc1: "",
    sdc2: "",
    sdc3: "",
    sdc4: "",
    sdc5: "",
    sdc5SubLi1: "",

    HowtoApplyHeading: "",
    HowtoApplySubHead: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",

    RefusalHeading: "",
    RefusalSubHead: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    r6: "",
    r7: "",
    r8: "",

    StillNotHeading: "",
    s1: "",
    s2: "",

    IfYouSubmitHeading: "",
    IfYouSubmitSubHead: "",
    IfYouSubmitPara: "",

    IfYouGraduatedHeading: "",
    IfYouGraduatedLi1: "",
    IfYouGraduatedLi2: "",

    IfYouGraduatedAnotherHeading: "",
    IfYouGradAnothLi1: "",
    IfYouGradAnothLi2: "",

    IfYouGraduatedCollegeHeading: "",
    IfYouGradCollLi1: "",
    IfYouGradCollLi2: "",

    FieldStudyRequHeading: "",
    FieldStudyRequPara: "",
    fsrLi1: "",
    fsrLi2: "",
    fsrLi3: "",
    fsrLi4: "",
    fsrLi5: "",

    ImportantPointNoteHeading: "",
    ipn1: "",
    ipn2: "",
    ipn3: "",
    ipn4: "",
    ipn5: "",

    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",
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
      `https://brightlight-node.onrender.com/visitorToStudent/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/visitorToStudent")
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

      <textarea
        placeholder="Visitor to Student Heading"
        name="visitorToStudentHeading"
        value={sectionDataSingle.visitorToStudentHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Visitor to Student Paragraph"
        name="visitorToStudentPara"
        value={sectionDataSingle.visitorToStudentPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Benefits Section */}
      <textarea
        placeholder="Benefits Heading"
        name="BenifitsHeading"
        value={sectionDataSingle.BenifitsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits Subheading"
        name="BenifitsSubHead"
        value={sectionDataSingle.BenifitsSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Benefits List Items */}
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

      <textarea
        placeholder="Benefit 6"
        name="b6"
        value={sectionDataSingle.b6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 7"
        name="b7"
        value={sectionDataSingle.b7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Section */}
      <textarea
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility List Items */}
      <textarea
        placeholder="Eligibility Item 1"
        name="e1"
        value={sectionDataSingle.e1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Item 2"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Item 3"
        name="e3"
        value={sectionDataSingle.e3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Item 4"
        name="e4"
        value={sectionDataSingle.e4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Item 5"
        name="e5"
        value={sectionDataSingle.e5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Item 6"
        name="e6"
        value={sectionDataSingle.e6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List Head"
        name="EligibilityListHead"
        value={sectionDataSingle.EligibilityListHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Ukrainian Specifics Section */}
      <textarea
        placeholder="Ukrain Heading"
        name="UkrainHeading"
        value={sectionDataSingle.UkrainHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ukrain Item 1"
        name="u1"
        value={sectionDataSingle.u1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ukrain Item 2"
        name="u2"
        value={sectionDataSingle.u2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ukrain Item 3"
        name="u3"
        value={sectionDataSingle.u3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ukrain Item 4"
        name="u4"
        value={sectionDataSingle.u4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ukrain Item 5"
        name="u5"
        value={sectionDataSingle.u5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ukrain Item 6"
        name="u6"
        value={sectionDataSingle.u6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ukrain Item 7"
        name="u7"
        value={sectionDataSingle.u7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Ukrain Item 8"
        name="u8"
        value={sectionDataSingle.u8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Spouse and Dependent Children Section */}
      <textarea
        placeholder="Spouse and Dependent Children Heading"
        name="SpouseDepenChildHeading"
        value={sectionDataSingle.SpouseDepenChildHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Spouse/Dependent Child Item 1"
        name="sdc1"
        value={sectionDataSingle.sdc1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Spouse/Dependent Child Item 2"
        name="sdc2"
        value={sectionDataSingle.sdc2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Spouse/Dependent Child Item 3"
        name="sdc3"
        value={sectionDataSingle.sdc3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Spouse/Dependent Child Item 4"
        name="sdc4"
        value={sectionDataSingle.sdc4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Spouse/Dependent Child Item 5"
        name="sdc5"
        value={sectionDataSingle.sdc5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Spouse/Dependent Child Sub List Item 1"
        name="sdc5SubLi1"
        value={sectionDataSingle.sdc5SubLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* How to Apply Section */}
      <textarea
        placeholder="How to Apply Heading"
        name="HowtoApplyHeading"
        value={sectionDataSingle.HowtoApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Subheading"
        name="HowtoApplySubHead"
        value={sectionDataSingle.HowtoApplySubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Item 1"
        name="ha1"
        value={sectionDataSingle.ha1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Item 2"
        name="ha2"
        value={sectionDataSingle.ha2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Item 3"
        name="ha3"
        value={sectionDataSingle.ha3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Item 4"
        name="ha4"
        value={sectionDataSingle.ha4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Item 5"
        name="ha5"
        value={sectionDataSingle.ha5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Refusal Section */}
      <textarea
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Subheading"
        name="RefusalSubHead"
        value={sectionDataSingle.RefusalSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Refusal List Items */}
      <textarea
        placeholder="Refusal Item 1"
        name="r1"
        value={sectionDataSingle.r1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Item 2"
        name="r2"
        value={sectionDataSingle.r2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Item 3"
        name="r3"
        value={sectionDataSingle.r3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Item 4"
        name="r4"
        value={sectionDataSingle.r4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Item 5"
        name="r5"
        value={sectionDataSingle.r5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Item 6"
        name="r6"
        value={sectionDataSingle.r6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Item 7"
        name="r7"
        value={sectionDataSingle.r7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Item 8"
        name="r8"
        value={sectionDataSingle.r8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Item 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Item 2"
        name="s2"
        value={sectionDataSingle.s2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* If You Submit Section */}
      <textarea
        placeholder="If You Submit Heading"
        name="IfYouSubmitHeading"
        value={sectionDataSingle.IfYouSubmitHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="If You Submit Subheading"
        name="IfYouSubmitSubHead"
        value={sectionDataSingle.IfYouSubmitSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="If You Submit Paragraph"
        name="IfYouSubmitPara"
        value={sectionDataSingle.IfYouSubmitPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* If You Graduated Section */}
      <textarea
        placeholder="If You Graduated Heading"
        name="IfYouGraduatedHeading"
        value={sectionDataSingle.IfYouGraduatedHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="If You Graduated Item 1"
        name="IfYouGraduatedLi1"
        value={sectionDataSingle.IfYouGraduatedLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="If You Graduated Item 2"
        name="IfYouGraduatedLi2"
        value={sectionDataSingle.IfYouGraduatedLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* If You Graduated Another Section */}
      <textarea
        placeholder="If You Graduated Another Heading"
        name="IfYouGraduatedAnotherHeading"
        value={sectionDataSingle.IfYouGraduatedAnotherHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="If You Graduated Another Item 1"
        name="IfYouGradAnothLi1"
        value={sectionDataSingle.IfYouGradAnothLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="If You Graduated Another Item 2"
        name="IfYouGradAnothLi2"
        value={sectionDataSingle.IfYouGradAnothLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* If You Graduated College Section */}
      <textarea
        placeholder="If You Graduated College Heading"
        name="IfYouGraduatedCollegeHeading"
        value={sectionDataSingle.IfYouGraduatedCollegeHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="If You Graduated College Item 1"
        name="IfYouGradCollLi1"
        value={sectionDataSingle.IfYouGradCollLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="If You Graduated College Item 2"
        name="IfYouGradCollLi2"
        value={sectionDataSingle.IfYouGradCollLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Field of Study Requirements Section */}
      <textarea
        placeholder="Field of Study Requirements Heading"
        name="FieldStudyRequHeading"
        value={sectionDataSingle.FieldStudyRequHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Field of Study Requirements Paragraph"
        name="FieldStudyRequPara"
        value={sectionDataSingle.FieldStudyRequPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Field of Study Requirements List Items */}
      <textarea
        placeholder="Field of Study Requirement Item 1"
        name="fsrLi1"
        value={sectionDataSingle.fsrLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Field of Study Requirement Item 2"
        name="fsrLi2"
        value={sectionDataSingle.fsrLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Field of Study Requirement Item 3"
        name="fsrLi3"
        value={sectionDataSingle.fsrLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Field of Study Requirement Item 4"
        name="fsrLi4"
        value={sectionDataSingle.fsrLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Field of Study Requirement Item 5"
        name="fsrLi5"
        value={sectionDataSingle.fsrLi5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Important Points Note Section */}
      <textarea
        placeholder="Important Point Note Heading"
        name="ImportantPointNoteHeading"
        value={sectionDataSingle.ImportantPointNoteHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Important Point Note Item 1"
        name="ipn1"
        value={sectionDataSingle.ipn1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Important Point Note Item 2"
        name="ipn2"
        value={sectionDataSingle.ipn2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Important Point Note Item 3"
        name="ipn3"
        value={sectionDataSingle.ipn3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Important Point Note Item 4"
        name="ipn4"
        value={sectionDataSingle.ipn4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Important Point Note Item 5"
        name="ipn5"
        value={sectionDataSingle.ipn5 || ""}
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

export default VisitorToStudentContent;
