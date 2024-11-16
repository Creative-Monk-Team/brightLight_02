import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const LowWageLMIAContent = () => {
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
    LowWageHeading: "",
    LowWagePara: "",

    LowWageSubHeadList1: "",
    LowWageSubHeadList2: "",
    LowWageSubHeadList3: "",

    NationalHeading: "",
    NationalPara: "",

    PrevailingHeading: "",
    PrevailingPara: "",

    ProvincialHeading: "",
    ProvincialPara1: "",

    ProvTeriTableHeading: "",
    ProvTeriTable1: "",
    ProvTeriTable2: "",
    ProvTeriTable3: "",
    ProvTeriTable4: "",
    ProvTeriTable5: "",
    ProvTeriTable6: "",
    ProvTeriTable7: "",
    ProvTeriTable8: "",
    ProvTeriTable9: "",
    ProvTeriTable10: "",
    ProvTeriTable11: "",
    ProvTeriTable12: "",
    ProvTeriTable13: "",

    MediHouTableHeading: "",
    MediHouTable1: "",
    MediHouTable2: "",
    MediHouTable3: "",
    MediHouTable4: "",
    MediHouTable5: "",
    MediHouTable6: "",
    MediHouTable7: "",
    MediHouTable8: "",
    MediHouTable9: "",
    MediHouTable10: "",
    MediHouTable11: "",
    MediHouTable12: "",
    MediHouTable13: "",



    MediHouTableHeading2: "",
    MediHouTable1Col2: "",
    MediHouTable2Col2: "",
    MediHouTable3Col2: "",
    MediHouTable4Col2: "",
    MediHouTable5Col2: "",
    MediHouTable6Col2: "",
    MediHouTable7Col2: "",
    MediHouTable8Col2: "",
    MediHouTable9Col2: "",
    MediHouTable10Col2: "",
    MediHouTable11Col2: "",
    MediHouTable12Col2: "",
    MediHouTable13Col2: "",

    ProvincialPara2: "",
    HighWageHeading: "",
    HighWagePara: "",
    LowWageHeading2: "",
    LowWagePara2: "",
    BenefitsHeading: "",
    BenList1: "",
    BenList2: "",
    BenList3: "",
    BenList4: "",
    HowtoApplyHeading: "",
    HowAppList1: "",
    HowAppList2: "",
    HowAppList3: "",
    HowAppList3Sub1: "",
    HowAppList3Sub2: "",
    HowAppList3Sub3: "",
    HowAppList3Sub4: "",
    HowAppList3Sub5: "",
    HowAppList3Sub6: "",
    HowAppList3Sub7: "",
    HowAppList3Sub8: "",
    HowAppList3Sub9: "",
    HowAppList3Sub10: "",
    HowAppList3Sub11: "",

    HowAppList4: "",
    HowAppList5: "",
    HowAppList6: "",
    HowAppList7: "",
    DifferencesHeading: "",
    DiffTableInnerHead1: "",
    DiffTable1Inner1: "",
    DiffTable1Inner2: "",
    DiffTable1Inner3: "",
    DiffTable1Inner4: "",
    DiffTable1Inner5: "",
    DiffTable1Inner6: "",
    DiffTable1Inner7: "",
    DiffTable1Inner8: "",
    DiffTable1Inner9: "",
    DiffTableInnerHead2: "",
    DiffTable2Inner1: "",
    DiffTable2Inner2: "",
    DiffTable2Inner3: "",
    DiffTable2Inner4: "",
    DiffTable2Inner5: "",
    DiffTable2Inner6: "",
    DiffTable2Inner7: "",
    DiffTable2Inner8: "",
    DiffTable2Inner9: "",
    DiffTableInnerHead3: "",
    DiffTable3Inner1: "",
    DiffTable3Inner2: "",
    DiffTable3Inner3: "",
    DiffTable3Inner4: "",
    DiffTable3Inner5: "",
    DiffTable3Inner6: "",
    DiffTable3Inner7: "",
    DiffTable3Inner8: "",
    DiffTable3Inner9: "",

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
    r9: "",
    r10: "",
    r11: "",
    r12: "",
    StillNotSureHeading: "",
    StillNotSurePara1: "",
    StillNotSurePara2: "",
    tableDataMayHave: "",
    tableData1: "",
    tableData2: "",
    tableData2Li1: "",
    tableData2Li2: "",

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
      `https://brightlight-node.onrender.com/lowWageLmia/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/lowWageLmia")
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
        placeholder="Low Wage Heading"
        name="LowWageHeading"
        value={sectionDataSingle.LowWageHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Low Wage Paragraph"
        name="LowWagePara"
        value={sectionDataSingle.LowWagePara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Low Wage Sub Heading List 1"
        name="LowWageSubHeadList1"
        value={sectionDataSingle.LowWageSubHeadList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Low Wage Sub Heading List 2"
        name="LowWageSubHeadList2"
        value={sectionDataSingle.LowWageSubHeadList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Low Wage Sub Heading List 3"
        name="LowWageSubHeadList3"
        value={sectionDataSingle.LowWageSubHeadList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="National Heading"
        name="NationalHeading"
        value={sectionDataSingle.NationalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="National Paragraph"
        name="NationalPara"
        value={sectionDataSingle.NationalPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Prevailing Heading"
        name="PrevailingHeading"
        value={sectionDataSingle.PrevailingHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Prevailing Paragraph"
        name="PrevailingPara"
        value={sectionDataSingle.PrevailingPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Provincial Heading"
        name="ProvincialHeading"
        value={sectionDataSingle.ProvincialHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Provincial Paragraph 1"
        name="ProvincialPara1"
        value={sectionDataSingle.ProvincialPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
  <div className={styles.threeColumnsTable}>
    <div>
    <input
        placeholder="Province/Territory Table Heading"
        name="ProvTeriTableHeading"
        value={sectionDataSingle.ProvTeriTableHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 13 }, (_, index) => (
        <input
          key={index}
          placeholder={`Province/Territory ${index + 1}`}
          name={`ProvTeriTable${index + 1}`}
          value={sectionDataSingle[`ProvTeriTable${index + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
    </div>
    <div>

    <input
        placeholder="Median Hourly Table Heading"
        name="MediHouTableHeading"
        value={sectionDataSingle.MediHouTableHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 13 }, (_, index) => (
        <input
          key={index}
          placeholder={`Median Hourly Table ${index + 1}`}
          name={`MediHouTable${index + 1}`}
          value={sectionDataSingle[`MediHouTable${index + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

    </div>

    <div>
    <input
        placeholder="Median Hourly Table Heading 2"
        name="MediHouTableHeading2"
        value={sectionDataSingle.MediHouTableHeading2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 13 }, (_, index) => (
        <input
          key={index}
          placeholder={`Median Hourly Table ${index + 1} Col 2`}
          name={`MediHouTable${index + 1}Col2`}
          value={sectionDataSingle[`MediHouTable${index + 1}Col2`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
    </div>
  </div>
     

      <textarea
        placeholder="Provincial Paragraph 2"
        name="ProvincialPara2"
        value={sectionDataSingle.ProvincialPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="High Wage Heading"
        name="HighWageHeading"
        value={sectionDataSingle.HighWageHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="High Wage Paragraph"
        name="HighWagePara"
        value={sectionDataSingle.HighWagePara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Low Wage Heading 2"
        name="LowWageHeading2"
        value={sectionDataSingle.LowWageHeading2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Low Wage Paragraph 2"
        name="LowWagePara2"
        value={sectionDataSingle.LowWagePara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="BenefitsHeading"
        value={sectionDataSingle.BenefitsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 1"
        name="BenList1"
        value={sectionDataSingle.BenList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 2"
        name="BenList2"
        value={sectionDataSingle.BenList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 3"
        name="BenList3"
        value={sectionDataSingle.BenList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 4"
        name="BenList4"
        value={sectionDataSingle.BenList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowtoApplyHeading"
        value={sectionDataSingle.HowtoApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply List 1"
        name="HowAppList1"
        value={sectionDataSingle.HowAppList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply List 2"
        name="HowAppList2"
        value={sectionDataSingle.HowAppList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply List 3"
        name="HowAppList3"
        value={sectionDataSingle.HowAppList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 11 }, (_, index) => (
        <textarea
          key={index}
          placeholder={`How to Apply List 3 Sub ${index + 1}`}
          name={`HowAppList3Sub${index + 1}`}
          value={sectionDataSingle[`HowAppList3Sub${index + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <textarea
        placeholder="How to Apply List 4"
        name="HowAppList4"
        value={sectionDataSingle.HowAppList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply List 5"
        name="HowAppList5"
        value={sectionDataSingle.HowAppList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply List 6"
        name="HowAppList6"
        value={sectionDataSingle.HowAppList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply List 7"
        name="HowAppList7"
        value={sectionDataSingle.HowAppList7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Differences Heading"
        name="DifferencesHeading"
        value={sectionDataSingle.DifferencesHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

<div className={styles.threeColumnsTable}>
  <div>
  <input
        placeholder="Difference Table Inner Head 1"
        name="DiffTableInnerHead1"
        value={sectionDataSingle.DiffTableInnerHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 9 }, (_, index) => (
        <textarea
          key={index}
          placeholder={`Difference Table 1 Inner ${index + 1}`}
          name={`DiffTable1Inner${index + 1}`}
          value={sectionDataSingle[`DiffTable1Inner${index + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
  </div>
  <div>
  <input
        placeholder="Difference Table Inner Head 2"
        name="DiffTableInnerHead2"
        value={sectionDataSingle.DiffTableInnerHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 9 }, (_, index) => (
        <textarea
          key={index}
          placeholder={`Difference Table 2 Inner ${index + 1}`}
          name={`DiffTable2Inner${index + 1}`}
          value={sectionDataSingle[`DiffTable2Inner${index + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
  </div>
  <div>
  <input
        placeholder="Difference Table Inner Head 3"
        name="DiffTableInnerHead3"
        value={sectionDataSingle.DiffTableInnerHead3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 9 }, (_, index) => (
        <textarea
          key={index}
          placeholder={`Difference Table 3 Inner ${index + 1}`}
          name={`DiffTable3Inner${index + 1}`}
          value={sectionDataSingle[`DiffTable3Inner${index + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}
  </div>
</div>

     

    

    

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

      {Array.from({ length: 12 }, (_, index) => (
        <textarea
          key={index}
          placeholder={`Refusal Reason ${index + 1}`}
          name={`r${index + 1}`}
          value={sectionDataSingle[`r${index + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

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
        placeholder="Table Data May Have"
        name="tableDataMayHave"
        value={sectionDataSingle.tableDataMayHave || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table Data 1"
        name="tableData1"
        value={sectionDataSingle.tableData1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table Data 2"
        name="tableData2"
        value={sectionDataSingle.tableData2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Table Data 2 List Item 1"
        name="tableData2Li1"
        value={sectionDataSingle.tableData2Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Table Data 2 List Item 2"
        name="tableData2Li2"
        value={sectionDataSingle.tableData2Li2 || ""}
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

export default LowWageLMIAContent;
