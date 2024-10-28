import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const LonelyCanadianContent = () => {
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
    LonCanHeading: "",
    LonCanPara: "",

    EligibilityHeading: "",
    EligibilitySubHeading: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    e7: "",

    DurationHeading: "",
    DLi1: "",
    DLi2: "",
    DLi3: "",
    DLi4: "",
    DLi5: "",
    DLi6: "",

    BankruptcyHeading: "",
    bankL1: "",
    bankL2: "",
    bankL3: "",
    bankL4: "",
    bankL5: "",

    SponsoringHeading: "",
    SponsoringSubHead1: "",
    SponLi1: "",
    SponLi2: "",
    SponsoringSubHead2: "",
    SponLi3: "",
    SponLi4: "",
    SponLi5: "",
    SponLi6: "",
    SponLi7: "",
    SponLi8: "",
    SponLi9: "",

    ExplHeading: "",
    ExplSubHead: "",
    ExpLi1: "",
    ExpLi2: "",
    ExpLi3: "",

    HowApplyHeading: "",
    HowApplyStepHead1: "",
    HowApplySubHead1: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    HowApplySubHead2: "",
    ha5: "",
    ha6: "",
    ha7: "",
    ha8: "",
    ha9: "",
    ha10: "",
    HowApplySubHead3: "",
    ha11: "",
    ha12: "",
    ha13: "",
    ha14: "",
    HowApplyStepHead2: "",
    HowApplySubHead4: "",
    ha15: "",
    ha16: "",

    HowApplySubHead5: "",
    haPara1: "",
    ha17: "",
    ha18: "",
    HowApplyStepHead3: "",
    haPara2: "",

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
      `https://brightlight-node.onrender.com/lonelyCanadian/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/lonelyCanadian")
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
        placeholder="Lonely Canadian Heading"
        name="LonCanHeading"
        value={sectionDataSingle.LonCanHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Lonely Canadian Paragraph"
        name="LonCanPara"
        value={sectionDataSingle.LonCanPara || ""}
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

      <textarea
        placeholder="Eligibility Subheading"
        name="EligibilitySubHeading"
        value={sectionDataSingle.EligibilitySubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Point 1"
        name="e1"
        value={sectionDataSingle.e1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Point 2"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Point 3"
        name="e3"
        value={sectionDataSingle.e3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Point 4"
        name="e4"
        value={sectionDataSingle.e4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Point 5"
        name="e5"
        value={sectionDataSingle.e5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Point 6"
        name="e6"
        value={sectionDataSingle.e6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Point 7"
        name="e7"
        value={sectionDataSingle.e7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Duration Heading"
        name="DurationHeading"
        value={sectionDataSingle.DurationHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Duration Point 1"
        name="DLi1"
        value={sectionDataSingle.DLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Duration Point 2"
        name="DLi2"
        value={sectionDataSingle.DLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Duration Point 3"
        name="DLi3"
        value={sectionDataSingle.DLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Duration Point 4"
        name="DLi4"
        value={sectionDataSingle.DLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Duration Point 5"
        name="DLi5"
        value={sectionDataSingle.DLi5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Duration Point 6"
        name="DLi6"
        value={sectionDataSingle.DLi6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Bankruptcy Heading"
        name="BankruptcyHeading"
        value={sectionDataSingle.BankruptcyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Bankruptcy Point 1"
        name="bankL1"
        value={sectionDataSingle.bankL1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Bankruptcy Point 2"
        name="bankL2"
        value={sectionDataSingle.bankL2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Bankruptcy Point 3"
        name="bankL3"
        value={sectionDataSingle.bankL3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Bankruptcy Point 4"
        name="bankL4"
        value={sectionDataSingle.bankL4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Bankruptcy Point 5"
        name="bankL5"
        value={sectionDataSingle.bankL5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Sponsoring Heading"
        name="SponsoringHeading"
        value={sectionDataSingle.SponsoringHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring Subheading 1"
        name="SponsoringSubHead1"
        value={sectionDataSingle.SponsoringSubHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 1"
        name="SponLi1"
        value={sectionDataSingle.SponLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 2"
        name="SponLi2"
        value={sectionDataSingle.SponLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring Subheading 2"
        name="SponsoringSubHead2"
        value={sectionDataSingle.SponsoringSubHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 3"
        name="SponLi3"
        value={sectionDataSingle.SponLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 4"
        name="SponLi4"
        value={sectionDataSingle.SponLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 5"
        name="SponLi5"
        value={sectionDataSingle.SponLi5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 6"
        name="SponLi6"
        value={sectionDataSingle.SponLi6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 7"
        name="SponLi7"
        value={sectionDataSingle.SponLi7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 8"
        name="SponLi8"
        value={sectionDataSingle.SponLi8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Sponsoring List Item 9"
        name="SponLi9"
        value={sectionDataSingle.SponLi9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Exploring Other Possibilities Heading"
        name="ExplHeading"
        value={sectionDataSingle.ExplHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Exploring Other Possibilities Subheading"
        name="ExplSubHead"
        value={sectionDataSingle.ExplSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Exploring Option 1"
        name="ExpLi1"
        value={sectionDataSingle.ExpLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Exploring Option 2"
        name="ExpLi2"
        value={sectionDataSingle.ExpLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Exploring Option 3"
        name="ExpLi3"
        value={sectionDataSingle.ExpLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Step 1"
        name="HowApplyStepHead1"
        value={sectionDataSingle.HowApplyStepHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 1 Subheading"
        name="HowApplySubHead1"
        value={sectionDataSingle.HowApplySubHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 1 Point 1"
        name="ha1"
        value={sectionDataSingle.ha1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 1 Point 2"
        name="ha2"
        value={sectionDataSingle.ha2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 1 Point 3"
        name="ha3"
        value={sectionDataSingle.ha3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 1 Point 4"
        name="ha4"
        value={sectionDataSingle.ha4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Subheading"
        name="HowApplySubHead2"
        value={sectionDataSingle.HowApplySubHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Point 1"
        name="ha5"
        value={sectionDataSingle.ha5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Point 2"
        name="ha6"
        value={sectionDataSingle.ha6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Point 3"
        name="ha7"
        value={sectionDataSingle.ha7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Point 4"
        name="ha8"
        value={sectionDataSingle.ha8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Point 5"
        name="ha9"
        value={sectionDataSingle.ha9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Point 6"
        name="ha10"
        value={sectionDataSingle.ha10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3 Subheading"
        name="HowApplySubHead3"
        value={sectionDataSingle.HowApplySubHead3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3 Point 1"
        name="ha11"
        value={sectionDataSingle.ha11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3 Point 2"
        name="ha12"
        value={sectionDataSingle.ha12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3 Point 3"
        name="ha13"
        value={sectionDataSingle.ha13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3 Point 4"
        name="ha14"
        value={sectionDataSingle.ha14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Step 2"
        name="HowApplyStepHead2"
        value={sectionDataSingle.HowApplyStepHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Subheading 4"
        name="HowApplySubHead4"
        value={sectionDataSingle.HowApplySubHead4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Point 7"
        name="ha15"
        value={sectionDataSingle.ha15 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 2 Point 8"
        name="ha16"
        value={sectionDataSingle.ha16 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Subheading 5"
        name="HowApplySubHead5"
        value={sectionDataSingle.HowApplySubHead5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Third-Party Fees Paragraph"
        name="haPara1"
        value={sectionDataSingle.haPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3 Point 7"
        name="ha17"
        value={sectionDataSingle.ha17 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3 Point 8"
        name="ha18"
        value={sectionDataSingle.ha18 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Step 3"
        name="HowApplyStepHead3"
        value={sectionDataSingle.HowApplyStepHead3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Step 3 Paragraph"
        name="haPara2"
        value={sectionDataSingle.haPara2 || ""}
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

export default LonelyCanadianContent;
