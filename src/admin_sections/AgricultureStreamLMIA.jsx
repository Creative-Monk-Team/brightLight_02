import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AgricultureStreamLMIAContent = () => {
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
    AgriculturStreamHeading: "",
    AgriculturStreamPara: "",
    AgriculturStreamSubHeading: "",
    AgriculturStreamSubList1: "",
    AgriculturStreamSubList2: "",
    NOCCodesHeading: "",
    NocCodeIHeading: "",
    OccupationTitleIHeading: "",
    NocCodeInnerHeading1: "",
    NocCodeInnerHeading2: "",
    NocCodeInnerHeading3: "",
    NocCodeInnerHeading4: "",
    NocCodeInnerHeading5: "",
    NocCodeInnerHeading6: "",
    NocCodeInnerHeading7: "",
    NocCodeInnerHeading8: "",
    OccupationTitleInnerHeading1: "",
    OccupationTitleInnerHeading2: "",
    OccupationTitleInnerHeading3: "",
    OccupationTitleInnerHeading4: "",
    OccupationTitleInnerHeading5: "",
    OccupationTitleInnerHeading6: "",
    OccupationTitleInnerHeading7: "",
    OccupationTitleInnerHeading8: "",
    NatComListIHeading: "",
    NCL1: "",
    NCL2: "",
    NCL3: "",
    NCL4: "",
    NCL5: "",
    NCL6: "",
    NCL7: "",
    NCL8: "",
    NCL9: "",
    NCL10: "",
    NCL11: "",
    NCL12: "",
    NCL13: "",
    NCL14: "",
    NCL15: "",
    NCL16: "",
    NCL17: "",
    NCL18: "",
    NCL19: "",
    NCL20: "",
    NCLPara: "",
    ImportantNoteHeading: "",
    ImportantNotePara: "",
    HowApplyHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",
    ha6: "",
    ha7: "",
    ha8: "",
    RefusalHeading: "",
    RefusalSubHeading1: "",
    RefusalSubHeading2: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",
    r6: "",
    r7: "",
    r8: "",
    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",
    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",

    faq_heading: "",
    q1: "",
    qa1: "",
    q2: "",
    qa2: "",
    q3: "",
    qa3: "",
    q4: "",
    qa4: "",
    q5: "",
    qa5: "",
    q6: "",
    qa6: "",
    q7: "",
    qa7: "",
    q8: "",
    qa8: "",
    q9: "",
    qa9: "",
    q10: "",
    qa10: "",

    show_testimonials: "",
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
      `https://brightlight-node.onrender.com/agricultureStreamLmia/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/agricultureStreamLmia")
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
        placeholder="Agricultural Stream Heading"
        name="AgriculturStreamHeading"
        value={sectionDataSingle.AgriculturStreamHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Agricultural Stream Description"
        name="AgriculturStreamPara"
        value={sectionDataSingle.AgriculturStreamPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Sub Heading"
        name="AgriculturStreamSubHeading"
        value={sectionDataSingle.AgriculturStreamSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Sub List Item 1"
        name="AgriculturStreamSubList1"
        value={sectionDataSingle.AgriculturStreamSubList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Sub List Item 2"
        name="AgriculturStreamSubList2"
        value={sectionDataSingle.AgriculturStreamSubList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="NOC Codes Heading"
        name="NOCCodesHeading"
        value={sectionDataSingle.NOCCodesHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
        <div className={styles.twoColumnsTable}>
          <div>
          <input
        placeholder="NOC CODE"
        name="NocCodeIHeading"
        value={sectionDataSingle.NocCodeIHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <input
        placeholder="NOC Code 1"
        name="NocCodeInnerHeading1"
        value={sectionDataSingle.NocCodeInnerHeading1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NOC Code 2"
        name="NocCodeInnerHeading2"
        value={sectionDataSingle.NocCodeInnerHeading2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NOC Code 3"
        name="NocCodeInnerHeading3"
        value={sectionDataSingle.NocCodeInnerHeading3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NOC Code 4"
        name="NocCodeInnerHeading4"
        value={sectionDataSingle.NocCodeInnerHeading4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NOC Code 5"
        name="NocCodeInnerHeading5"
        value={sectionDataSingle.NocCodeInnerHeading5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NOC Code 6"
        name="NocCodeInnerHeading6"
        value={sectionDataSingle.NocCodeInnerHeading6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NOC Code 7"
        name="NocCodeInnerHeading7"
        value={sectionDataSingle.NocCodeInnerHeading7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NOC Code 8"
        name="NocCodeInnerHeading8"
        value={sectionDataSingle.NocCodeInnerHeading8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

          </div>
          <div>
          <input
        placeholder="Occupation Title"
        name="OccupationTitleIHeading"
        value={sectionDataSingle.OccupationTitleIHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
     
      <input
        placeholder="Occupation Title 1"
        name="OccupationTitleInnerHeading1"
        value={sectionDataSingle.OccupationTitleInnerHeading1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Occupation Title 2"
        name="OccupationTitleInnerHeading2"
        value={sectionDataSingle.OccupationTitleInnerHeading2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Occupation Title 3"
        name="OccupationTitleInnerHeading3"
        value={sectionDataSingle.OccupationTitleInnerHeading3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Occupation Title 4"
        name="OccupationTitleInnerHeading4"
        value={sectionDataSingle.OccupationTitleInnerHeading4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Occupation Title 5"
        name="OccupationTitleInnerHeading5"
        value={sectionDataSingle.OccupationTitleInnerHeading5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Occupation Title 6"
        name="OccupationTitleInnerHeading6"
        value={sectionDataSingle.OccupationTitleInnerHeading6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Occupation Title 7"
        name="OccupationTitleInnerHeading7"
        value={sectionDataSingle.OccupationTitleInnerHeading7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Occupation Title 8"
        name="OccupationTitleInnerHeading8"
        value={sectionDataSingle.OccupationTitleInnerHeading8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
          </div>
        </div>

      
     

      <input
        placeholder="National Commodity List Heading"
        name="NatComListIHeading"
        value={sectionDataSingle.NatComListIHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 1"
        name="NCL1"
        value={sectionDataSingle.NCL1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 2"
        name="NCL2"
        value={sectionDataSingle.NCL2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 3"
        name="NCL3"
        value={sectionDataSingle.NCL3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 4"
        name="NCL4"
        value={sectionDataSingle.NCL4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 5"
        name="NCL5"
        value={sectionDataSingle.NCL5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 6"
        name="NCL6"
        value={sectionDataSingle.NCL6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 7"
        name="NCL7"
        value={sectionDataSingle.NCL7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 8"
        name="NCL8"
        value={sectionDataSingle.NCL8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 9"
        name="NCL9"
        value={sectionDataSingle.NCL9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 10"
        name="NCL10"
        value={sectionDataSingle.NCL10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 11"
        name="NCL11"
        value={sectionDataSingle.NCL11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 12"
        name="NCL12"
        value={sectionDataSingle.NCL12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 13"
        name="NCL13"
        value={sectionDataSingle.NCL13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 14"
        name="NCL14"
        value={sectionDataSingle.NCL14 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 15"
        name="NCL15"
        value={sectionDataSingle.NCL15 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 16"
        name="NCL16"
        value={sectionDataSingle.NCL16 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 17"
        name="NCL17"
        value={sectionDataSingle.NCL17 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 18"
        name="NCL18"
        value={sectionDataSingle.NCL18 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 19"
        name="NCL19"
        value={sectionDataSingle.NCL19 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="NCL 20"
        name="NCL20"
        value={sectionDataSingle.NCL20 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="National Commodity List Description"
        name="NCLPara"
        value={sectionDataSingle.NCLPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Important Note Heading"
        name="ImportantNoteHeading"
        value={sectionDataSingle.ImportantNoteHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Important Note Description"
        name="ImportantNotePara"
        value={sectionDataSingle.ImportantNotePara || ""}
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
        name="ha1"
        value={sectionDataSingle.ha1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Step 2"
        name="ha2"
        value={sectionDataSingle.ha2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Step 3"
        name="ha3"
        value={sectionDataSingle.ha3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Step 4"
        name="ha4"
        value={sectionDataSingle.ha4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Step 5"
        name="ha5"
        value={sectionDataSingle.ha5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Step 6"
        name="ha6"
        value={sectionDataSingle.ha6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Step 7"
        name="ha7"
        value={sectionDataSingle.ha7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="How to Apply Step 8"
        name="ha8"
        value={sectionDataSingle.ha8 || ""}
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
      <input
        placeholder="Refusal Subheading 1"
        name="RefusalSubHeading1"
        value={sectionDataSingle.RefusalSubHeading1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Subheading 2"
        name="RefusalSubHeading2"
        value={sectionDataSingle.RefusalSubHeading2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 1"
        name="r1"
        value={sectionDataSingle.r1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 2"
        name="r2"
        value={sectionDataSingle.r2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 3"
        name="r3"
        value={sectionDataSingle.r3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 4"
        name="r4"
        value={sectionDataSingle.r4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 5"
        name="r5"
        value={sectionDataSingle.r5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 6"
        name="r6"
        value={sectionDataSingle.r6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 7"
        name="r7"
        value={sectionDataSingle.r7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Refusal Reason 8"
        name="r8"
        value={sectionDataSingle.r8 || ""}
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
        placeholder="Still Not Sure Description 1"
        name="StillNotSurePara1"
        value={sectionDataSingle.StillNotSurePara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Description 2"
        name="StillNotSurePara2"
        value={sectionDataSingle.StillNotSurePara2 || ""}
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

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>

      <input
        placeholder="FAQ's Made Simple"
        name="faq_heading"
        value={sectionDataSingle.faq_heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 1"
        name="q1"
        value={sectionDataSingle.q1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 1"
        name="qa1"
        value={sectionDataSingle.qa1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 2"
        name="q2"
        value={sectionDataSingle.q2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 2"
        name="qa2"
        value={sectionDataSingle.qa2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 3"
        name="q3"
        value={sectionDataSingle.q3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 3"
        name="qa3"
        value={sectionDataSingle.qa3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 4"
        name="q4"
        value={sectionDataSingle.q4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 4"
        name="qa4"
        value={sectionDataSingle.qa4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 5"
        name="q5"
        value={sectionDataSingle.q5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 5"
        name="qa5"
        value={sectionDataSingle.qa5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 6"
        name="q6"
        value={sectionDataSingle.q6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 6"
        name="qa6"
        value={sectionDataSingle.qa6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 7"
        name="q7"
        value={sectionDataSingle.q7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 7"
        name="qa7"
        value={sectionDataSingle.qa7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 8"
        name="q8"
        value={sectionDataSingle.q8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 8"
        name="qa8"
        value={sectionDataSingle.qa8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 9"
        name="q9"
        value={sectionDataSingle.q9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 9"
        name="qa9"
        value={sectionDataSingle.qa9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 10"
        name="q10"
        value={sectionDataSingle.q10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 10"
        name="qa10"
        value={sectionDataSingle.qa10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqEndHeading}>FAQ's Ends here</h1>


      <h1 className={styles.faqStartsHeading}>
        Testimonials Visibility Control
      </h1>

      <div className={styles.testimonialsVisibility}>
        <p>Want to display Testimonials Section</p>
        <input
          placeholder="Show Testimonials"
          name="show_testimonials"
          value={sectionDataSingle.show_testimonials || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <p className={styles.testimonialsDisclamier}>
        Note: Testimonials Visibility On the Selected Page is totally dependent
        on the input value above. If you want to display the section , just
        write "Y" without quotes , anything else will be considered as "N" even
        "y". If not want to display then just write "N" without qoutes.
      </p>
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

export default AgricultureStreamLMIAContent;
