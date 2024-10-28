import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const FrenchTargetedDrawContent = () => {
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
    frenchHeading: "",
    frenchPara1: "",

    BenefitsHeading: "",
    BenefitsPara: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",

    FirstEligibleHeading: "",
    FirstEligiblePara: "",
    fe1: "",
    fe2: "",
    fe2Sub1: "",
    fe2Sub2: "",
    fe2Su3: "",
    feLastPara: "",

    EligCritHead: "",
    EligCritSubHead: "",
    EligCritLi1: "",
    EligCritLi2: "",
    EligCritPara1: "",
    EligCritPara2: "",

    ExpressEntryFrenchHeading: "",
    ExpressEntryFrenchPara: "",

    StillNotSureHeading: "",
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
      `https://brightlight-node.onrender.com/frenchTargatedDraw/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/frenchTargatedDraw")
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
        placeholder="French Heading"
        name="frenchHeading"
        value={sectionDataSingle.frenchHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="French Paragraph 1"
        name="frenchPara1"
        value={sectionDataSingle.frenchPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits Heading"
        name="BenefitsHeading"
        value={sectionDataSingle.BenefitsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits Paragraph"
        name="BenefitsPara"
        value={sectionDataSingle.BenefitsPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 1"
        name="b1"
        value={sectionDataSingle.b1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 2"
        name="b2"
        value={sectionDataSingle.b2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 3"
        name="b3"
        value={sectionDataSingle.b3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 4"
        name="b4"
        value={sectionDataSingle.b4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 5"
        name="b5"
        value={sectionDataSingle.b5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefit 6"
        name="b6"
        value={sectionDataSingle.b6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="First Eligible Heading"
        name="FirstEligibleHeading"
        value={sectionDataSingle.FirstEligibleHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="First Eligible Paragraph"
        name="FirstEligiblePara"
        value={sectionDataSingle.FirstEligiblePara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion 1"
        name="fe1"
        value={sectionDataSingle.fe1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion 2"
        name="fe2"
        value={sectionDataSingle.fe2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion 2 Sub 1"
        name="fe2Sub1"
        value={sectionDataSingle.fe2Sub1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion 2 Sub 2"
        name="fe2Sub2"
        value={sectionDataSingle.fe2Sub2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion 2 Sub 3"
        name="fe2Su3"
        value={sectionDataSingle.fe2Su3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Last Eligibility Paragraph"
        name="feLastPara"
        value={sectionDataSingle.feLastPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria Heading"
        name="EligCritHead"
        value={sectionDataSingle.EligCritHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criteria Sub Heading"
        name="EligCritSubHead"
        value={sectionDataSingle.EligCritSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion List 1"
        name="EligCritLi1"
        value={sectionDataSingle.EligCritLi1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion List 2"
        name="EligCritLi2"
        value={sectionDataSingle.EligCritLi2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion Paragraph 1"
        name="EligCritPara1"
        value={sectionDataSingle.EligCritPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Criterion Paragraph 2"
        name="EligCritPara2"
        value={sectionDataSingle.EligCritPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Express Entry French Heading"
        name="ExpressEntryFrenchHeading"
        value={sectionDataSingle.ExpressEntryFrenchHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Express Entry French Paragraph"
        name="ExpressEntryFrenchPara"
        value={sectionDataSingle.ExpressEntryFrenchPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure? Paragraph 1"
        name="s1"
        value={sectionDataSingle.s1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure? Paragraph 2"
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

export default FrenchTargetedDrawContent;
