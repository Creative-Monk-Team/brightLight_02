import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const PnpContent = () => {
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
    Heading: "",
    Description1: "",
    Description2: "",
    Description3: "",
    bcpnpHeading: "",
    fiveStreamsHeading: "",
    fiveStreamsNote: "",
    ApplyHeading: "",
    ApplyList1: "",
    ApplyList2: "",
    ApplyList3: "",
    ApplyList4: "",
    RefusalHeading: "",
    RefusalList1: "",
    RefusalList2: "",
    RefusalList3: "",
    RefusalList4: "",

    EligibilityHeading: "",
    EligibilityList1: "",
    EligibilityList2: "",
    EligibilityList3: "",
    EligibilityList4: "",
    AdditionalReqHeading: "",
    AdditionalReqDesc: "",
    AdditonalReqList1: "",
    AdditonalReqList2: "",
    AdditonalReqList3: "",
    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",
    AreYouEligHeading: "",
    ayeLi1: "",
    ayeLi2: "",
    ayeLi3: "",
    ayeLi4: "",
    AdditionalEligHeading: "",
    AdditionalEligSubHead: "",
    adeLi1: "",
    adeLi2: "",
    adeLi3: "",

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
      `https://brightlight-node.onrender.com/pnp-page/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/pnp-page")
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
        name="Heading"
        value={sectionDataSingle.Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 1"
        name="Description1"
        value={sectionDataSingle.Description1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 2"
        name="Description2"
        value={sectionDataSingle.Description2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 3"
        name="Description3"
        value={sectionDataSingle.Description3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="BC PNP Heading"
        name="bcpnpHeading"
        value={sectionDataSingle.bcpnpHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Five Streams Heading"
        name="fiveStreamsHeading"
        value={sectionDataSingle.fiveStreamsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Five Streams Note"
        name="fiveStreamsNote"
        value={sectionDataSingle.fiveStreamsNote || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Heading"
        name="ApplyHeading"
        value={sectionDataSingle.ApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply List Item 1"
        name="ApplyList1"
        value={sectionDataSingle.ApplyList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply List Item 2"
        name="ApplyList2"
        value={sectionDataSingle.ApplyList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply List Item 3"
        name="ApplyList3"
        value={sectionDataSingle.ApplyList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply List Item 4"
        name="ApplyList4"
        value={sectionDataSingle.ApplyList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List Item 1"
        name="RefusalList1"
        value={sectionDataSingle.RefusalList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List Item 2"
        name="RefusalList2"
        value={sectionDataSingle.RefusalList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List Item 3"
        name="RefusalList3"
        value={sectionDataSingle.RefusalList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List Item 4"
        name="RefusalList4"
        value={sectionDataSingle.RefusalList4 || ""}
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
        placeholder="Eligibility List Item 1"
        name="EligibilityList1"
        value={sectionDataSingle.EligibilityList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 2"
        name="EligibilityList2"
        value={sectionDataSingle.EligibilityList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 3"
        name="EligibilityList3"
        value={sectionDataSingle.EligibilityList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 4"
        name="EligibilityList4"
        value={sectionDataSingle.EligibilityList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Additional Requirements Heading"
        name="AdditionalReqHeading"
        value={sectionDataSingle.AdditionalReqHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Additional Requirements Description"
        name="AdditionalReqDesc"
        value={sectionDataSingle.AdditionalReqDesc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Additional Requirement List Item 1"
        name="AdditonalReqList1"
        value={sectionDataSingle.AdditonalReqList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Additional Requirement List Item 2"
        name="AdditonalReqList2"
        value={sectionDataSingle.AdditonalReqList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Additional Requirement List Item 3"
        name="AdditonalReqList3"
        value={sectionDataSingle.AdditonalReqList3 || ""}
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
        placeholder="Still Not Sure Paragraph 1"
        name="StillNotSurePara1"
        value={sectionDataSingle.StillNotSurePara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Paragraph 2"
        name="StillNotSurePara2"
        value={sectionDataSingle.StillNotSurePara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Are You Eligible Heading"
        name="AreYouEligHeading"
        value={sectionDataSingle.AreYouEligHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 1"
        name="ayeLi1"
        value={sectionDataSingle.ayeLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 2"
        name="ayeLi2"
        value={sectionDataSingle.ayeLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 3"
        name="ayeLi3"
        value={sectionDataSingle.ayeLi3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility List Item 4"
        name="ayeLi4"
        value={sectionDataSingle.ayeLi4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Additional Eligibility Heading"
        name="AdditionalEligHeading"
        value={sectionDataSingle.AdditionalEligHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Additional Eligibility Subheading"
        name="AdditionalEligSubHead"
        value={sectionDataSingle.AdditionalEligSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Additional Eligibility List Item 1"
        name="adeLi1"
        value={sectionDataSingle.adeLi1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Additional Eligibility List Item 2"
        name="adeLi2"
        value={sectionDataSingle.adeLi2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Additional Eligibility List Item 3"
        name="adeLi3"
        value={sectionDataSingle.adeLi3 || ""}
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

export default PnpContent;
