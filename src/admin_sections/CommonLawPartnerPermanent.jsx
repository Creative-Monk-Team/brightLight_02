import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const CommonLawPartnerPermanentContent = () => {
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
    comLawPartPermanHeading: "",
    comLawPartPermanPerPara1: "",
    comLawPartPermanPerPara2: "",
    comLawPartPermanPerLi1: "",
    comLawPartPermanPerLi2: "",

    BenifitHeading: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",

    EligibilityHeading: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",

    HowApplyHeading: "",
    HowApplySubHead: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",
    ha6: "",
    ha7: "",

    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",

    NeedAssisHeading: "",
    NeedAssisPara: "",

    WhyChooseUsHeading: "",
    WhyChooseUsPara: "",
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
      `https://brightlight-node.onrender.com/commonLawPartnerPermanent/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/commonLawPartnerPermanent")
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
        placeholder="Common Law Partner Heading"
        name="comLawPartPermanHeading"
        value={sectionDataSingle.comLawPartPermanHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Permanent Paragraph 1"
        name="comLawPartPermanPerPara1"
        value={sectionDataSingle.comLawPartPermanPerPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Permanent Paragraph 2"
        name="comLawPartPermanPerPara2"
        value={sectionDataSingle.comLawPartPermanPerPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefit Heading"
        name="BenifitHeading"
        value={sectionDataSingle.BenifitHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["b1", "b2", "b3", "b4", "b5", "b6"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`Benefit Detail ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["e1", "e2", "e3", "e4"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`Eligibility Criterion ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Sub Heading"
        name="HowApplySubHead"
        value={sectionDataSingle.HowApplySubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["ha1", "ha2", "ha3", "ha4", "ha5", "ha6", "ha7"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`How to Apply Detail ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {["r1", "r2", "r3", "r4"].map((key, index) => (
        <textarea
          key={key}
          placeholder={`Refusal Reason ${index + 1}`}
          name={key}
          value={sectionDataSingle[key]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Need Assistance Heading"
        name="NeedAssisHeading"
        value={sectionDataSingle.NeedAssisHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Need Assistance Paragraph"
        name="NeedAssisPara"
        value={sectionDataSingle.NeedAssisPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading"
        value={sectionDataSingle.WhyChooseUsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us Paragraph"
        name="WhyChooseUsPara"
        value={sectionDataSingle.WhyChooseUsPara}
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

export default CommonLawPartnerPermanentContent;
