import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const ParentsGrandparentsContent = () => {
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
    ParGrHeading: "",
    ParGrPara1: "",
    ParGrPara2: "",

    EligibilityHeading1: "",
    EligibilityPara: "",

    EligibilityHeading2: "",
    EligibilitySubHead: "",
    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e6: "",
    EligFormatHead: "",

    HowApplyHeading: "",
    HowApplySubHead: "",

    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",

    RefusalHeading: "",
    RefusalSubHead: "",

    r1: "",
    r2: "",
    r3: "",
    r4: "",
    r5: "",

    StillNotHeading: "",
    s1: "",
    s2: "",

    IncReqTabHeading: "",
    IncReqTabHead1: "",
    IncReqTabHead2: "",
    IncReqTabHead3: "",
    IncReqTabHead4: "",

    IncReqTab1Li1: "",
    IncReqTab2Li1: "",
    IncReqTab3Li1: "",
    IncReqTab4Li1: "",

    IncReqTab1Li2: "",
    IncReqTab2Li2: "",
    IncReqTab3Li2: "",
    IncReqTab4Li2: "",

    IncReqTab1Li3: "",
    IncReqTab2Li3: "",
    IncReqTab3Li3: "",
    IncReqTab4Li3: "",

    IncReqTab1Li4: "",
    IncReqTab2Li4: "",
    IncReqTab3Li4: "",
    IncReqTab4Li4: "",

    IncReqTab1Li5: "",
    IncReqTab2Li5: "",
    IncReqTab3Li5: "",
    IncReqTab4Li5: "",

    IncReqTab1Li6: "",
    IncReqTab2Li6: "",
    IncReqTab3Li6: "",
    IncReqTab4Li6: "",

    IncReqTab1Li7: "",
    IncReqTab2Li7: "",
    IncReqTab3Li7: "",
    IncReqTab4Li7: "",

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
      `https://brightlight-node.onrender.com/ParentsGrandparents/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/ParentsGrandparents")
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
        placeholder="ParGr Heading"
        name="ParGrHeading"
        value={sectionDataSingle.ParGrHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="ParGr Paragraph 1"
        name="ParGrPara1"
        value={sectionDataSingle.ParGrPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="ParGr Paragraph 2"
        name="ParGrPara2"
        value={sectionDataSingle.ParGrPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading 1"
        name="EligibilityHeading1"
        value={sectionDataSingle.EligibilityHeading1 || ""}
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

      <input
        placeholder="Eligibility Heading 2"
        name="EligibilityHeading2"
        value={sectionDataSingle.EligibilityHeading2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Sub Heading"
        name="EligibilitySubHead"
        value={sectionDataSingle.EligibilitySubHead || ""}
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

      <input
        placeholder="Eligibility Format Heading"
        name="EligFormatHead"
        value={sectionDataSingle.EligFormatHead || ""}
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
        placeholder="How to Apply Sub Head"
        name="HowApplySubHead"
        value={sectionDataSingle.HowApplySubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply Point 1"
        name="ha1"
        value={sectionDataSingle.ha1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Point 2"
        name="ha2"
        value={sectionDataSingle.ha2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Point 3"
        name="ha3"
        value={sectionDataSingle.ha3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Point 4"
        name="ha4"
        value={sectionDataSingle.ha4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply Point 5"
        name="ha5"
        value={sectionDataSingle.ha5 || ""}
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
        placeholder="Refusal Sub Head"
        name="RefusalSubHead"
        value={sectionDataSingle.RefusalSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal Point 1"
        name="r1"
        value={sectionDataSingle.r1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Point 2"
        name="r2"
        value={sectionDataSingle.r2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Point 3"
        name="r3"
        value={sectionDataSingle.r3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Point 4"
        name="r4"
        value={sectionDataSingle.r4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Point 5"
        name="r5"
        value={sectionDataSingle.r5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Point 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Point 2"
        name="s2"
        value={sectionDataSingle.s2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Inc. Req. Tab Heading"
        name="IncReqTabHeading"
        value={sectionDataSingle.IncReqTabHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
  <div className={styles.fourColumnsTable}>
   <div>
      <input
        placeholder="Inc. Req. Tab Head 1"
        name="IncReqTabHead1"
        value={sectionDataSingle.IncReqTabHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 1 List Item 1"
        name="IncReqTab1Li1"
        value={sectionDataSingle.IncReqTab1Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Inc. Req. Tab 1 List Item 2"
        name="IncReqTab1Li2"
        value={sectionDataSingle.IncReqTab1Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Inc. Req. Tab 1 List Item 3"
        name="IncReqTab1Li3"
        value={sectionDataSingle.IncReqTab1Li3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 1 List Item 4"
        name="IncReqTab1Li4"
        value={sectionDataSingle.IncReqTab1Li4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 1 List Item 5"
        name="IncReqTab1Li5"
        value={sectionDataSingle.IncReqTab1Li5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Inc. Req. Tab 1 List Item 6"
        name="IncReqTab1Li6"
        value={sectionDataSingle.IncReqTab1Li6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 1 List Item 7"
        name="IncReqTab1Li7"
        value={sectionDataSingle.IncReqTab1Li7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      </div> 

      <div>
      <input
        placeholder="Inc. Req. Tab Head 2"
        name="IncReqTabHead2"
        value={sectionDataSingle.IncReqTabHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 2 List Item 1"
        name="IncReqTab2Li1"
        value={sectionDataSingle.IncReqTab2Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Inc. Req. Tab 2 List Item 2"
        name="IncReqTab2Li2"
        value={sectionDataSingle.IncReqTab2Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 2 List Item 3"
        name="IncReqTab2Li3"
        value={sectionDataSingle.IncReqTab2Li3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 2 List Item 4"
        name="IncReqTab2Li4"
        value={sectionDataSingle.IncReqTab2Li4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
 
      <textarea
        placeholder="Inc. Req. Tab 2 List Item 5"
        name="IncReqTab2Li5"
        value={sectionDataSingle.IncReqTab2Li5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
        <textarea
        placeholder="Inc. Req. Tab 2 List Item 6"
        name="IncReqTab2Li6"
        value={sectionDataSingle.IncReqTab2Li6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 2 List Item 7"
        name="IncReqTab2Li7"
        value={sectionDataSingle.IncReqTab2Li7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      </div>

      <div>
      <input
        placeholder="Inc. Req. Tab Head 3"
        name="IncReqTabHead3"
        value={sectionDataSingle.IncReqTabHead3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Inc. Req. Tab 3 List Item 1"
        name="IncReqTab3Li1"
        value={sectionDataSingle.IncReqTab3Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Inc. Req. Tab 3 List Item 2"
        name="IncReqTab3Li2"
        value={sectionDataSingle.IncReqTab3Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      
      <textarea
        placeholder="Inc. Req. Tab 3 List Item 3"
        name="IncReqTab3Li3"
        value={sectionDataSingle.IncReqTab3Li3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 3 List Item 4"
        name="IncReqTab3Li4"
        value={sectionDataSingle.IncReqTab3Li4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <textarea
        placeholder="Inc. Req. Tab 3 List Item 5"
        name="IncReqTab3Li5"
        value={sectionDataSingle.IncReqTab3Li5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
     <textarea
        placeholder="Inc. Req. Tab 3 List Item 6"
        name="IncReqTab3Li6"
        value={sectionDataSingle.IncReqTab3Li6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Inc. Req. Tab 3 List Item 7"
        name="IncReqTab3Li7"
        value={sectionDataSingle.IncReqTab3Li7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      </div>

      <div>
      <input
        placeholder="Inc. Req. Tab Head 4"
        name="IncReqTabHead4"
        value={sectionDataSingle.IncReqTabHead4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

    
      <textarea
        placeholder="Inc. Req. Tab 4 List Item 1"
        name="IncReqTab4Li1"
        value={sectionDataSingle.IncReqTab4Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

          
      <textarea
        placeholder="Inc. Req. Tab 4 List Item 2"
        name="IncReqTab4Li2"
        value={sectionDataSingle.IncReqTab4Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

   
     <textarea
        placeholder="Inc. Req. Tab 4 List Item 3"
        name="IncReqTab4Li3"
        value={sectionDataSingle.IncReqTab4Li3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

        
      <textarea
        placeholder="Inc. Req. Tab 4 List Item 4"
        name="IncReqTab4Li4"
        value={sectionDataSingle.IncReqTab4Li4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
   
      <textarea
        placeholder="Inc. Req. Tab 4 List Item 5"
        name="IncReqTab4Li5"
        value={sectionDataSingle.IncReqTab4Li5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
    
      <textarea
        placeholder="Inc. Req. Tab 4 List Item 6"
        name="IncReqTab4Li6"
        value={sectionDataSingle.IncReqTab4Li6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Inc. Req. Tab 4 List Item 7"
        name="IncReqTab4Li7"
        value={sectionDataSingle.IncReqTab4Li7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      </div>

  </div>
     
      
      
      
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

export default ParentsGrandparentsContent;
