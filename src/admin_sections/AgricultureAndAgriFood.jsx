import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AgricultureAndAgriFoodPageContent = () => {
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
    agricultAndAgriFoodOccuHeading: "",
    agricultAndAgriFoodOccuPara: "",
    FirstEligibleHeading: "",
    FirstEligSubHead: "",
    e1: "",
    e2: "",
    e2SubLi1: "",
    e2SubLi2: "",
    e2SubLi3: "",
    FirstEligPara: "",
    EligCriHeading: "",
    EligCriSubHead: "",
    ec1: "",
    ec2: "",
    EligEntryHeading: "",
    HereEligTabHeading: "",
    HereEligTableHead1: "",
    HeT1Po1: "",
    HeT1Po2: "",
    HeT1Po3: "",
    HereEligTableHead2: "",
    HeT2Po1: "",
    HeT2Po2: "",
    HeT2Po3: "",
    HeT3Po1: "",
    HeT3Po2: "",
    HeT3Po3: "",
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
      `https://brightlight-node.onrender.com/agricultureAgriFoodOccupation/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/agricultureAgriFoodOccupation")
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
        name="agricultAndAgriFoodOccuHeading"
        value={sectionDataSingle.agricultAndAgriFoodOccuHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description"
        name="agricultAndAgriFoodOccuPara"
        value={sectionDataSingle.agricultAndAgriFoodOccuPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="First Eligible Heading"
        name="FirstEligibleHeading"
        value={sectionDataSingle.FirstEligibleHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="First Eligibility Sub Head"
        name="FirstEligSubHead"
        value={sectionDataSingle.FirstEligSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Step 1"
        name="e1"
        value={sectionDataSingle.e1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Step 2"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Step 2 Sub List 1"
        name="e2SubLi1"
        value={sectionDataSingle.e2SubLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Step 2 Sub List 2"
        name="e2SubLi2"
        value={sectionDataSingle.e2SubLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Step 2 Sub List 3"
        name="e2SubLi3"
        value={sectionDataSingle.e2SubLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="First Eligibility Paragraph"
        name="FirstEligPara"
        value={sectionDataSingle.FirstEligPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Criteria Heading"
        name="EligCriHeading"
        value={sectionDataSingle.EligCriHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Sub Head"
        name="EligCriSubHead"
        value={sectionDataSingle.EligCriSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria 1"
        name="ec1"
        value={sectionDataSingle.ec1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria 2"
        name="ec2"
        value={sectionDataSingle.ec2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Entry Heading"
        name="EligEntryHeading"
        value={sectionDataSingle.EligEntryHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Here Eligible Tab Heading"
        name="HereEligTabHeading"
        value={sectionDataSingle.HereEligTabHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Here Eligible Table Head 1"
        name="HereEligTableHead1"
        value={sectionDataSingle.HereEligTableHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible NOC 1"
        name="HeT1Po1"
        value={sectionDataSingle.HeT1Po1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible NOC 2"
        name="HeT1Po2"
        value={sectionDataSingle.HeT1Po2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligible NOC 3"
        name="HeT1Po3"
        value={sectionDataSingle.HeT1Po3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Here Eligible Table Head 2"
        name="HereEligTableHead2"
        value={sectionDataSingle.HereEligTableHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="NOC Code 1"
        name="HeT2Po1"
        value={sectionDataSingle.HeT2Po1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="NOC Code 2"
        name="HeT2Po2"
        value={sectionDataSingle.HeT2Po2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="NOC Code 3"
        name="HeT2Po3"
        value={sectionDataSingle.HeT2Po3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="NOC Code 1 for Table 3"
        name="HeT3Po1"
        value={sectionDataSingle.HeT3Po1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="NOC Code 2 for Table 3"
        name="HeT3Po2"
        value={sectionDataSingle.HeT3Po2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="NOC Code 3 for Table 3"
        name="HeT3Po3"
        value={sectionDataSingle.HeT3Po3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Still Not Eligible Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Eligible Text 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Eligible Text 2"
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

export default AgricultureAndAgriFoodPageContent;
