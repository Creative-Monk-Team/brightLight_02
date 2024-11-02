import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const VisitorVisaContent = () => {
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
    visitorVisaHeading: "",
    visitorVisaPara: "",

    ChooseApplHeading: "",

    EligibilityHeading: "",
    EligibilityPara: "",
    EligLiHead: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",

    HowApplyHeading: "",
    HowApplyPara: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",

    TourismVisaHeading: "",
    TourismVisaPara: "",

    EmergencyVisaHeading: "",
    EmergencyVisaPara: "",

    RefusalHeading: "",
    RefusalSubHead: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",

    StillNotHeading: "",
    s1: "",
    s2: "",

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
      `https://brightlight-node.onrender.com/visitorVisa/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/visitorVisa")
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
        placeholder="Visitor Visa Heading"
        name="visitorVisaHeading"
        value={sectionDataSingle.visitorVisaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Visitor Visa Paragraph"
        name="visitorVisaPara"
        value={sectionDataSingle.visitorVisaPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Choose Application Section */}
      <textarea
        placeholder="Choose Application Heading"
        name="ChooseApplHeading"
        value={sectionDataSingle.ChooseApplHeading || ""}
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

      <textarea
        placeholder="Eligibility Paragraph"
        name="EligibilityPara"
        value={sectionDataSingle.EligibilityPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility List Heading"
        name="EligLiHead"
        value={sectionDataSingle.EligLiHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

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

      {/* How to Apply Section */}
      <textarea
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Paragraph"
        name="HowApplyPara"
        value={sectionDataSingle.HowApplyPara || ""}
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

      {/* Tourism Visa Section */}
      <textarea
        placeholder="Tourism Visa Heading"
        name="TourismVisaHeading"
        value={sectionDataSingle.TourismVisaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Tourism Visa Paragraph"
        name="TourismVisaPara"
        value={sectionDataSingle.TourismVisaPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Emergency Visa Section */}
      <textarea
        placeholder="Emergency Visa Heading"
        name="EmergencyVisaHeading"
        value={sectionDataSingle.EmergencyVisaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Emergency Visa Paragraph"
        name="EmergencyVisaPara"
        value={sectionDataSingle.EmergencyVisaPara || ""}
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

      {/* Still Not Section */}
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

export default VisitorVisaContent;
