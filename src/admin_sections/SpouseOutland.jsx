import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const SpouseOutlandContent = () => {
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
    heading: "",
    description: "",

    IsOutlandSponHeading: "",
    IsOutlandSponSubHead: "",
    os1: "",
    os2: "",
    IsOutlandSponSubPara: "",

    ApprovalProcessHeading: "",
    ApprovalProcessPara: "",

    eligCritHeading: "",
    eligCritSubHead: "",
    e1: "",
    e2: "",
    e3: "",
    e3Sub1: "",
    e3Sub2: "",
    e3Sub3: "",
    e4: "",
    e5: "",
    eNote: "",

    HowToApplyOutlSponHeading: "",
    HowToApplyOutlSponPara: "",
    HowToApplyOutlSponProcHeading: "",
    osp1: "",
    osp2: "",
    osp3: "",
    osp4: "",

    QueSpecConsidHeading: "",
    qsc1: "",
    qsc2: "",

    ProcTimeHeading: "",
    ProcTimePara1: "",
    pt1: "",
    pt2: "",
    pt3: "",
    pt4: "",
    ptNote: "",

    DualIntVisaOutSpouHeading: "",
    DualIntVisaOutSpouPara: "",
    WhatisDualIntVisaHeading: "",
    wd1: "",
    wd2: "",

    SpousesPartnersHeading: "",
    SpousesPartnerPara1: "",
    sp1: "",
    sp2: "",
    sp3: "",
    sp4: "",
    spousesPartnerPara2: "",

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
      `https://brightlight-node.onrender.com/SpouseOutland/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/SpouseOutland")
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
        name="heading"
        value={sectionDataSingle.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description"
        name="description"
        value={sectionDataSingle.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Is Outland Sponsor Heading"
        name="IsOutlandSponHeading"
        value={sectionDataSingle.IsOutlandSponHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Is Outland Sponsor Sub Heading"
        name="IsOutlandSponSubHead"
        value={sectionDataSingle.IsOutlandSponSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Outland Sponsor Point 1"
        name="os1"
        value={sectionDataSingle.os1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Outland Sponsor Point 2"
        name="os2"
        value={sectionDataSingle.os2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Is Outland Sponsor Sub Paragraph"
        name="IsOutlandSponSubPara"
        value={sectionDataSingle.IsOutlandSponSubPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Approval Process Heading"
        name="ApprovalProcessHeading"
        value={sectionDataSingle.ApprovalProcessHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Approval Process Paragraph"
        name="ApprovalProcessPara"
        value={sectionDataSingle.ApprovalProcessPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="eligCritHeading"
        value={sectionDataSingle.eligCritHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Criteria Sub Heading"
        name="eligCritSubHead"
        value={sectionDataSingle.eligCritSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 1"
        name="e1"
        value={sectionDataSingle.e1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 2"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 3"
        name="e3"
        value={sectionDataSingle.e3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Sub Point 1"
        name="e3Sub1"
        value={sectionDataSingle.e3Sub1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Sub Point 2"
        name="e3Sub2"
        value={sectionDataSingle.e3Sub2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Sub Point 3"
        name="e3Sub3"
        value={sectionDataSingle.e3Sub3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 4"
        name="e4"
        value={sectionDataSingle.e4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 5"
        name="e5"
        value={sectionDataSingle.e5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Note"
        name="eNote"
        value={sectionDataSingle.eNote || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Outland Sponsorship Heading"
        name="HowToApplyOutlSponHeading"
        value={sectionDataSingle.HowToApplyOutlSponHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Outland Sponsorship Paragraph"
        name="HowToApplyOutlSponPara"
        value={sectionDataSingle.HowToApplyOutlSponPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Outland Sponsorship Process Heading"
        name="HowToApplyOutlSponProcHeading"
        value={sectionDataSingle.HowToApplyOutlSponProcHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Outland Sponsorship Process Point 1"
        name="osp1"
        value={sectionDataSingle.osp1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Outland Sponsorship Process Point 2"
        name="osp2"
        value={sectionDataSingle.osp2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Outland Sponsorship Process Point 3"
        name="osp3"
        value={sectionDataSingle.osp3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Outland Sponsorship Process Point 4"
        name="osp4"
        value={sectionDataSingle.osp4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Questions Specific Consideration Heading"
        name="QueSpecConsidHeading"
        value={sectionDataSingle.QueSpecConsidHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Question Specific Consideration Point 1"
        name="qsc1"
        value={sectionDataSingle.qsc1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Question Specific Consideration Point 2"
        name="qsc2"
        value={sectionDataSingle.qsc2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Processing Time Heading"
        name="ProcTimeHeading"
        value={sectionDataSingle.ProcTimeHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Processing Time Paragraph 1"
        name="ProcTimePara1"
        value={sectionDataSingle.ProcTimePara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Processing Time Point 1"
        name="pt1"
        value={sectionDataSingle.pt1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Processing Time Point 2"
        name="pt2"
        value={sectionDataSingle.pt2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Processing Time Point 3"
        name="pt3"
        value={sectionDataSingle.pt3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Processing Time Point 4"
        name="pt4"
        value={sectionDataSingle.pt4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Processing Time Note"
        name="ptNote"
        value={sectionDataSingle.ptNote || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Dual Intent Visa Outland Spouse Heading"
        name="DualIntVisaOutSpouHeading"
        value={sectionDataSingle.DualIntVisaOutSpouHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Dual Intent Visa Outland Spouse Paragraph"
        name="DualIntVisaOutSpouPara"
        value={sectionDataSingle.DualIntVisaOutSpouPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="What is Dual Intent Visa Heading"
        name="WhatisDualIntVisaHeading"
        value={sectionDataSingle.WhatisDualIntVisaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="What is Dual Intent Visa Point 1"
        name="wd1"
        value={sectionDataSingle.wd1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="What is Dual Intent Visa Point 2"
        name="wd2"
        value={sectionDataSingle.wd2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Spouses and Partners Heading"
        name="SpousesPartnersHeading"
        value={sectionDataSingle.SpousesPartnersHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Spouses and Partners Paragraph 1"
        name="SpousesPartnerPara1"
        value={sectionDataSingle.SpousesPartnerPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Spouses and Partners Point 1"
        name="sp1"
        value={sectionDataSingle.sp1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Spouses and Partners Point 2"
        name="sp2"
        value={sectionDataSingle.sp2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Spouses and Partners Point 3"
        name="sp3"
        value={sectionDataSingle.sp3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Spouses and Partners Point 4"
        name="sp4"
        value={sectionDataSingle.sp4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Spouses and Partners Paragraph 2"
        name="spousesPartnerPara2"
        value={sectionDataSingle.spousesPartnerPara2 || ""}
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

export default SpouseOutlandContent;
