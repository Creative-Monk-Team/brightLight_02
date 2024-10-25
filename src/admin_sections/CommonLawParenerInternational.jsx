import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const CommonLawPartnerInternationalContent = () => {
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
    comLawPartnerInternHeading: "",
    comLawPartnerInternPara1: "",
    comLawPartnerInternPara2: "",

    BenifitHeading: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",

    EligCritHeading: "",
    EligCritPara: "",
    EligReqHeading: "",
    EligReqSubHead1: "",
    EligReqSubHead1Para1: "",

    er1li1: "",
    er1li2: "",
    er1li21: "",
    er1li22: "",
    er1li23: "",
    er1li24: "",
    er1li3Head: "",
    er1li31: "",
    er1li32: "",
    er1li33: "",

    EligReqSubHead2: "",
    EligReqSubHead2Para2: "",

    er2li1: "",
    er2li2: "",
    er2li2Head: "",
    er2li3: "",

    EligReqSubHead3: "",
    er3li1: "",
    er3li2: "",
    er3li3: "",
    er3li4: "",
    er3li5: "",
    er3li6: "",
    er3li7: "",
    er3li8: "",
    er3li9: "",

    EligReqSubHead4: "",
    er4li1: "",
    er4li2: "",
    er4li3: "",

    EligReqAccomHeading: "",
    EligReqAccomSubHead: "",
    erali1: "",
    erali2: "",
    erali3: "",
    erali4: "",
    erali5: "",

    WhenToApplyHeading: "",

    wa1: "",
    wa2: "",
    wa3: "",

    HowApplyHeading: "",

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
      `https://brightlight-node.onrender.com/comLawPartnerIntern/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/comLawPartnerIntern")
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
        placeholder="Open Work Permit for Spouse or Common-law Partner of an International Student"
        name="comLawPartnerInternHeading"
        value={sectionDataSingle.comLawPartnerInternHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Description 1"
        name="comLawPartnerInternPara1"
        value={sectionDataSingle.comLawPartnerInternPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Description 2"
        name="comLawPartnerInternPara2"
        value={sectionDataSingle.comLawPartnerInternPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="BenifitHeading"
        value={sectionDataSingle.BenifitHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit 1"
        name="b1"
        value={sectionDataSingle.b1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit 2"
        name="b2"
        value={sectionDataSingle.b2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit 3"
        name="b3"
        value={sectionDataSingle.b3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit 4"
        name="b4"
        value={sectionDataSingle.b4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit 5"
        name="b5"
        value={sectionDataSingle.b5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit 6"
        name="b6"
        value={sectionDataSingle.b6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit 7"
        name="b7"
        value={sectionDataSingle.b7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit 8"
        name="b8"
        value={sectionDataSingle.b8}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="EligCritHeading"
        value={sectionDataSingle.EligCritHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria Description"
        name="EligCritPara"
        value={sectionDataSingle.EligCritPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirements Heading"
        name="EligReqHeading"
        value={sectionDataSingle.EligReqHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Sub-Head 1"
        name="EligReqSubHead1"
        value={sectionDataSingle.EligReqSubHead1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sub-Head 1 Description"
        name="EligReqSubHead1Para1"
        value={sectionDataSingle.EligReqSubHead1Para1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 1"
        name="er1li1"
        value={sectionDataSingle.er1li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 2"
        name="er1li2"
        value={sectionDataSingle.er1li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 2.1"
        name="er1li21"
        value={sectionDataSingle.er1li21}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 2.2"
        name="er1li22"
        value={sectionDataSingle.er1li22}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 2.3"
        name="er1li23"
        value={sectionDataSingle.er1li23}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 2.4"
        name="er1li24"
        value={sectionDataSingle.er1li24}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Not Eligible Heading"
        name="er1li3Head"
        value={sectionDataSingle.er1li3Head}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Not Eligible Reason 1"
        name="er1li31"
        value={sectionDataSingle.er1li31}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Not Eligible Reason 2"
        name="er1li32"
        value={sectionDataSingle.er1li32}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Not Eligible Reason 3"
        name="er1li33"
        value={sectionDataSingle.er1li33}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirements Sub-Head 2"
        name="EligReqSubHead2"
        value={sectionDataSingle.EligReqSubHead2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Requirements Sub-Head 2 Description"
        name="EligReqSubHead2Para2"
        value={sectionDataSingle.EligReqSubHead2Para2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 2 Nested 1"
        name="er2li1"
        value={sectionDataSingle.er2li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 2 Nested 2"
        name="er2li2"
        value={sectionDataSingle.er2li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 2 Nested 2 Heading"
        name="er2li2Head"
        value={sectionDataSingle.er2li2Head}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Graduate Program Definition"
        name="er2li3"
        value={sectionDataSingle.er2li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirements Sub-Head 3"
        name="EligReqSubHead3"
        value={sectionDataSingle.EligReqSubHead3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 1"
        name="er3li1"
        value={sectionDataSingle.er3li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 2"
        name="er3li2"
        value={sectionDataSingle.er3li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 3"
        name="er3li3"
        value={sectionDataSingle.er3li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 4"
        name="er3li4"
        value={sectionDataSingle.er3li4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 5"
        name="er3li5"
        value={sectionDataSingle.er3li5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 6"
        name="er3li6"
        value={sectionDataSingle.er3li6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 7"
        name="er3li7"
        value={sectionDataSingle.er3li7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 8"
        name="er3li8"
        value={sectionDataSingle.er3li8}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirement 3 Nested 9"
        name="er3li9"
        value={sectionDataSingle.er3li9}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Not Eligible Reason 4 Nested 1"
        name="er4li1"
        value={sectionDataSingle.er4li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Not Eligible Reason 4 Nested 2"
        name="er4li2"
        value={sectionDataSingle.er4li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Not Eligible Reason 4 Nested 3"
        name="er4li3"
        value={sectionDataSingle.er4li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirements Heading"
        name="EligReqAccomHeading"
        value={sectionDataSingle.EligReqAccomHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Requirements Sub-Head"
        name="EligReqAccomSubHead"
        value={sectionDataSingle.EligReqAccomSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="General Eligibility Requirement"
        name="erali1"
        value={sectionDataSingle.erali1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Relationship Requirement"
        name="erali2"
        value={sectionDataSingle.erali2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Proof of Spousal Relationship"
        name="erali3"
        value={sectionDataSingle.erali3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Additional Documentation Requirement"
        name="erali4"
        value={sectionDataSingle.erali4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Applicants in Canada Requirement"
        name="erali5"
        value={sectionDataSingle.erali5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Step 1"
        name="ha1"
        value={sectionDataSingle.ha1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Step 2"
        name="ha2"
        value={sectionDataSingle.ha2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Step 3"
        name="ha3"
        value={sectionDataSingle.ha3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Step 4"
        name="ha4"
        value={sectionDataSingle.ha4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Step 5"
        name="ha5"
        value={sectionDataSingle.ha5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Step 6"
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

      <input
        placeholder="Reason for Refusal 1"
        name="r1"
        value={sectionDataSingle.r1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Reason for Refusal 2"
        name="r2"
        value={sectionDataSingle.r2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Reason for Refusal 3"
        name="r3"
        value={sectionDataSingle.r3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Reason for Refusal 4"
        name="r4"
        value={sectionDataSingle.r4}
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

export default CommonLawPartnerInternationalContent;
