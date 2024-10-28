import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AgriFoodPilotProgramContent = () => {
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
    AgriFoodPilotHeading: "",
    AgriFoodPilotPara1: "",
    AgriFoodPilotPara2: "",
    AgriFoodPilotPara3: "",

    EligCritHeading: "",
    EligCritSubHead1: "",
    EligCritPara1: "",

    EligCritPoH2: "",
    EligCritPoPara1: "",
    EligCritPoPara2: "",
    EligCritPoPara3: "",

    EligCritPo2Li1: "",
    EligCritPo2Li2: "",
    EligCritPo2Li3: "",
    EligCritPo2Li4: "",
    EligCritPo2Li5: "",

    EligCritPo2Para2: "",

    EligCritPoH3: "",
    EligCritPo3Para: "",

    EligCritPoH4: "",
    EligCritPo4Para: "",
    EligCritPo4Li1: "",
    EligCritPo4SubLi1: "",
    EligCritPo4Li2: "",
    EligCritPo2SubLi: "",
    EligCritPo4Li3: "",
    EligCritPo3SubLi1: "",
    EligCritPo3SubLi2: "",

    EligCritPoH5: "",
    EligCritPo5Para: "",
    EligCritPo5Head1: "",
    EligCritPo5Head1Po1: "",
    EligCritPo5Head1Po2: "",
    EligCritPo5Head1Po3: "",
    EligCritPo5Head1Po4: "",
    EligCritPo5Head2Po1: "",
    EligCritPo5Head2Po2: "",
    EligCritPo5Head2Po3: "",
    EligCritPo5Head2Po4: "",

    HowToApplyHeading: "",
    ha1: "",
    ha2: "",

    StillNotSureHeading: "",
    StillNotSurePara: "",

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
      `https://brightlight-node.onrender.com/agiFoodPilotProgram/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/agiFoodPilotProgram")
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
        placeholder="Agri-Food Pilot Program Heading"
        name="AgriFoodPilotHeading"
        value={sectionDataSingle.AgriFoodPilotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Agri-Food Pilot Program Paragraph 1"
        name="AgriFoodPilotPara1"
        value={sectionDataSingle.AgriFoodPilotPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Agri-Food Pilot Program Paragraph 2"
        name="AgriFoodPilotPara2"
        value={sectionDataSingle.AgriFoodPilotPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Agri-Food Pilot Program Paragraph 3"
        name="AgriFoodPilotPara3"
        value={sectionDataSingle.AgriFoodPilotPara3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="EligCritHeading"
        value={sectionDataSingle.EligCritHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Criteria Sub Heading"
        name="EligCritSubHead1"
        value={sectionDataSingle.EligCritSubHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Paragraph"
        name="EligCritPara1"
        value={sectionDataSingle.EligCritPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Qualifying Job Offer Heading"
        name="EligCritPoH2"
        value={sectionDataSingle.EligCritPoH2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Qualifying Job Offer Paragraph 1"
        name="EligCritPoPara1"
        value={sectionDataSingle.EligCritPoPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Qualifying Job Offer Paragraph 2"
        name="EligCritPoPara2"
        value={sectionDataSingle.EligCritPoPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Qualifying Job Offer Paragraph 3"
        name="EligCritPoPara3"
        value={sectionDataSingle.EligCritPoPara3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Minimum Language Requirements Heading"
        name="EligCritPoH3"
        value={sectionDataSingle.EligCritPoH3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Minimum Language Requirements Paragraph"
        name="EligCritPo3Para"
        value={sectionDataSingle.EligCritPo3Para || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Minimum Education Requirements Heading"
        name="EligCritPoH4"
        value={sectionDataSingle.EligCritPoH4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Minimum Education Requirements Paragraph"
        name="EligCritPo4Para"
        value={sectionDataSingle.EligCritPo4Para || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Settlement Funds Requirement Heading"
        name="EligCritPoH5"
        value={sectionDataSingle.EligCritPoH5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Settlement Funds Requirement Paragraph"
        name="EligCritPo5Para"
        value={sectionDataSingle.EligCritPo5Para || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowToApplyHeading"
        value={sectionDataSingle.HowToApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Paragraph 1"
        name="ha1"
        value={sectionDataSingle.ha1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Paragraph 2"
        name="ha2"
        value={sectionDataSingle.ha2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Paragraph"
        name="StillNotSurePara"
        value={sectionDataSingle.StillNotSurePara || ""}
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

export default AgriFoodPilotProgramContent;
