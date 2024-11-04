import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const PrioritiesProgramContent = () => {
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
    benefitsHeading: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    eligibilityHeading: "",
    elibilityP1: "",
    elibilityP2: "",
    s1Heading: "",
    s1Desc: "",
    pOL: "",
    construction: "",
    constuctionDesc: "",
    cd1: "",
    cd2: "",
    cd3: "",
    cd4: "",
    hpHeading: "",
    hpl1: "",
    hpl2: "",
    hpl3: "",
    tsoHeading: "",
    tsoDesc1: "",
    tsoDesc2: "",
    tsol1: "",
    tsol2: "",
    tsol3: "",
    tsol4: "",
    vcHeading: "",
    vcDesc1: "",
    vcDesc2: "",
    vsDesc3: "",
    applicationHeading: "",
    a1: "",
    a1l1: "",
    a1l2: "",
    a1l3: "",
    a2: "",
    a2l1: "",
    a3: "",
    a3l1: "",

    a4: "",
    a4l1: "",
    a5: "",
    a5l1: "",
    childcareHeading: "",
    childcarePara1: "",
    childcarePara2: "",
    t1h1: "",
    t1h2: "",
    t1r1c1: "",
    t1r1c2: "",
    table2Heading: "",
    t2h1: "",
    t2h2: "",
    t2r1c1: "",
    t2r1c2: "",
    t2r2c1: "",
    t2r2c2: "",
    t2r3c1: "",
    t2r3c2: "",
    t2r4c1: "",
    t2r4c2: "",
    t2r5c1: "",
    t2r5c2: "",
    t2r6c1: "",
    t2r6c2: "",
    t2r7c1: "",
    t2r7c2: "",
    t2r8c1: "",
    t2r8c2: "",
    t2r9c1: "",
    t2r9c2: "",
    t2r10c1: "",
    t2r10c2: "",
    t2r11c1: "",
    t2r11c2: "",
    t2r12c1: "",
    t2r12c2: "",
    t2r13c1: "",
    t2r13c2: "",
    t2r14c1: "",
    t2r14c2: "",
    t2r15c1: "",
    t2r15c2: "",
    t2r16c1: "",
    t2r16c2: "",
    t2r17c1: "",
    t2r17c2: "",

    t2r18c1: "",
    t2r18c2: "",
    t2r19c1: "",
    t2r19c2: "",
    t2r20c1: "",
    t2r20c2: "",
    t2r21c1: "",
    t2r21c2: "",
    t2r22c1: "",
    t2r22c2: "",
    t2r23c1: "",
    t2r23c2: "",
    t2r24c1: "",
    t2r24c2: "",
    t2r25c1: "",
    t2r25c2: "",
    table3Heading: "",
    t3h1: "",
    t3h2: "",
    t3r1c1: "",
    t3r1c2: "",
    t3r2c1: "",
    t3r2c2: "",
    t3r3c1: "",
    t3r3c2: "",
    t3r4c1: "",
    t3r4c2: "",
    t3r5c1: "",
    t3r5c2: "",
    t3r6c1: "",
    t3r6c2: "",
    t3r7c1: "",
    t3r7c2: "",
    t3r8c1: "",
    t3r8c2: "",
    t3r9c1: "",
    t3r9c2: "",
    t3r10c1: "",
    t3r10c2: "",
    t3r11c1: "",
    t3r11c2: "",
    t3r12c1: "",
    t3r12c2: "",
    t3r13c1: "",
    t3r13c2: "",

    t3r14c1: "",
    t3r14c2: "",
    t3r15c1: "",
    t3r15c2: "",
    t3r16c1: "",
    t3r16c2: "",
    t3r17c1: "",
    t3r17c2: "",
    t3r18c1: "",
    t3r18c2: "",
    t3r19c1: "",
    t3r19c2: "",
    t3r20c1: "",
    t3r20c2: "",
    t3r21c1: "",
    t3r21c2: "",
    t3r22c1: "",
    t3r22c2: "",
    t3r23c1: "",
    t3r23c2: "",
    t3r24c1: "",
    t3r24c2: "",
    t3r25c1: "",
    t3r25c2: "",
    t3r26c1: "",
    t3r26c2: "",
    t3r27c1: "",
    t3r27c2: "",
    t3r28c1: "",
    t3r28c2: "",
    t3r29c1: "",
    t3r29c2: "",
    t3r30c1: "",
    t3r30c2: "",
    table4Heading: "",
    t4h1: "",
    t4h2: "",
    t4r1c1: "",
    t4r1c2: "",
    t4r2c1: "",
    t4r2c2: "",
    t4r3c1: "",
    t4r3c2: "",
    t4r4c1: "",
    t4r4c2: "",

    t4r5c1: "",
    t4r5c2: "",
    t4r6c1: "",
    t4r6c2: "",
    t4r7c1: "",
    t4r7c2: "",
    t4r8c1: "",
    t4r8c2: "",
    t4r9c1: "",
    t4r9c2: "",
    t4r10c1: "",
    t4r10c2: "",
    t4r11c1: "",
    t4r11c2: "",
    t4r12c1: "",
    t4r12c2: "",
    t4r13c1: "",
    t4r13c2: "",
    t4r14c1: "",
    t4r14c2: "",
    table5Heading: "",
    t5h1: "",
    t5h2: "",
    t5r1c1: "",
    t5r1c2: "",
    t5r2c1: "",
    t5r2c2: "",
    StillNotHeading: "",
    s1: "",
    comprList: "",

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
      `https://brightlight-node.onrender.com/priorities-program-page/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/priorities-program-page")
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
        placeholder="Description 1"
        name="description"
        value={sectionDataSingle.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 2"
        name="description2"
        value={sectionDataSingle.description2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description 3"
        name="description3"
        value={sectionDataSingle.description3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="benefitsHeading"
        value={sectionDataSingle.benefitsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 1"
        name="b1"
        value={sectionDataSingle.b1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 2"
        name="b2"
        value={sectionDataSingle.b2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 3"
        name="b3"
        value={sectionDataSingle.b3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefit 4"
        name="b4"
        value={sectionDataSingle.b4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading"
        name="eligibilityHeading"
        value={sectionDataSingle.eligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Paragraph 1"
        name="elibilityP1"
        value={sectionDataSingle.elibilityP1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Paragraph 2"
        name="elibilityP2"
        value={sectionDataSingle.elibilityP2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="S1 Heading"
        name="s1Heading"
        value={sectionDataSingle.s1Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="S1 Description"
        name="s1Desc"
        value={sectionDataSingle.s1Desc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="P.O.L"
        name="pOL"
        value={sectionDataSingle.pOL || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Construction"
        name="construction"
        value={sectionDataSingle.construction || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Construction Description"
        name="constuctionDesc"
        value={sectionDataSingle.constuctionDesc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="CD1"
        name="cd1"
        value={sectionDataSingle.cd1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="CD2"
        name="cd2"
        value={sectionDataSingle.cd2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="CD3"
        name="cd3"
        value={sectionDataSingle.cd3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="CD4"
        name="cd4"
        value={sectionDataSingle.cd4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="HP Heading"
        name="hpHeading"
        value={sectionDataSingle.hpHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="HP List Item 1"
        name="hpl1"
        value={sectionDataSingle.hpl1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="HP List Item 2"
        name="hpl2"
        value={sectionDataSingle.hpl2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="HP List Item 3"
        name="hpl3"
        value={sectionDataSingle.hpl3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="TSO Heading"
        name="tsoHeading"
        value={sectionDataSingle.tsoHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="TSO Description 1"
        name="tsoDesc1"
        value={sectionDataSingle.tsoDesc1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="TSO Description 2"
        name="tsoDesc2"
        value={sectionDataSingle.tsoDesc2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="TSO List Item 1"
        name="tsol1"
        value={sectionDataSingle.tsol1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="TSO List Item 2"
        name="tsol2"
        value={sectionDataSingle.tsol2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="TSO List Item 3"
        name="tsol3"
        value={sectionDataSingle.tsol3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="TSO List Item 4"
        name="tsol4"
        value={sectionDataSingle.tsol4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="VC Heading"
        name="vcHeading"
        value={sectionDataSingle.vcHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="VC Description 1"
        name="vcDesc1"
        value={sectionDataSingle.vcDesc1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="VC Description 2"
        name="vcDesc2"
        value={sectionDataSingle.vcDesc2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="VS Description 3"
        name="vsDesc3"
        value={sectionDataSingle.vsDesc3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Application Heading"
        name="applicationHeading"
        value={sectionDataSingle.applicationHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A1"
        name="a1"
        value={sectionDataSingle.a1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A1 List Item 1"
        name="a1l1"
        value={sectionDataSingle.a1l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A1 List Item 2"
        name="a1l2"
        value={sectionDataSingle.a1l2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A1 List Item 3"
        name="a1l3"
        value={sectionDataSingle.a1l3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A2"
        name="a2"
        value={sectionDataSingle.a2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A2 List Item 1"
        name="a2l1"
        value={sectionDataSingle.a2l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A3"
        name="a3"
        value={sectionDataSingle.a3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A3 List Item 1"
        name="a3l1"
        value={sectionDataSingle.a3l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A4"
        name="a4"
        value={sectionDataSingle.a4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A4 List Item 1"
        name="a4l1"
        value={sectionDataSingle.a4l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A5"
        name="a5"
        value={sectionDataSingle.a5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="A5 List Item 1"
        name="a5l1"
        value={sectionDataSingle.a5l1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Childcare Heading"
        name="childcareHeading"
        value={sectionDataSingle.childcareHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Childcare Paragraph 1"
        name="childcarePara1"
        value={sectionDataSingle.childcarePara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Childcare Paragraph 2"
        name="childcarePara2"
        value={sectionDataSingle.childcarePara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="T1 Heading 1"
        name="t1h1"
        value={sectionDataSingle.t1h1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="T1 Heading 2"
        name="t1h2"
        value={sectionDataSingle.t1h2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T1 Row 1 Column 1"
        name="t1r1c1"
        value={sectionDataSingle.t1r1c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T1 Row 1 Column 2"
        name="t1r1c2"
        value={sectionDataSingle.t1r1c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 2 Heading"
        name="table2Heading"
        value={sectionDataSingle.table2Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="T2 Heading 1"
        name="t2h1"
        value={sectionDataSingle.t2h1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="T2 Heading 2"
        name="t2h2"
        value={sectionDataSingle.t2h2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 1 Column 1"
        name="t2r1c1"
        value={sectionDataSingle.t2r1c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 1 Column 2"
        name="t2r1c2"
        value={sectionDataSingle.t2r1c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 2 Column 1"
        name="t2r2c1"
        value={sectionDataSingle.t2r2c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 2 Column 2"
        name="t2r2c2"
        value={sectionDataSingle.t2r2c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 3 Column 1"
        name="t2r3c1"
        value={sectionDataSingle.t2r3c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 3 Column 2"
        name="t2r3c2"
        value={sectionDataSingle.t2r3c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 4 Column 1"
        name="t2r4c1"
        value={sectionDataSingle.t2r4c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 4 Column 2"
        name="t2r4c2"
        value={sectionDataSingle.t2r4c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 5 Column 1"
        name="t2r5c1"
        value={sectionDataSingle.t2r5c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 5 Column 2"
        name="t2r5c2"
        value={sectionDataSingle.t2r5c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 6 Column 1"
        name="t2r6c1"
        value={sectionDataSingle.t2r6c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 6 Column 2"
        name="t2r6c2"
        value={sectionDataSingle.t2r6c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 7 Column 1"
        name="t2r7c1"
        value={sectionDataSingle.t2r7c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 7 Column 2"
        name="t2r7c2"
        value={sectionDataSingle.t2r7c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 8 Column 1"
        name="t2r8c1"
        value={sectionDataSingle.t2r8c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 8 Column 2"
        name="t2r8c2"
        value={sectionDataSingle.t2r8c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 9 Column 1"
        name="t2r9c1"
        value={sectionDataSingle.t2r9c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 9 Column 2"
        name="t2r9c2"
        value={sectionDataSingle.t2r9c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 10 Column 1"
        name="t2r10c1"
        value={sectionDataSingle.t2r10c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 10 Column 2"
        name="t2r10c2"
        value={sectionDataSingle.t2r10c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 11 Column 1"
        name="t2r11c1"
        value={sectionDataSingle.t2r11c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 11 Column 2"
        name="t2r11c2"
        value={sectionDataSingle.t2r11c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 12 Column 1"
        name="t2r12c1"
        value={sectionDataSingle.t2r12c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 12 Column 2"
        name="t2r12c2"
        value={sectionDataSingle.t2r12c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 13 Column 1"
        name="t2r13c1"
        value={sectionDataSingle.t2r13c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 13 Column 2"
        name="t2r13c2"
        value={sectionDataSingle.t2r13c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 14 Column 1"
        name="t2r14c1"
        value={sectionDataSingle.t2r14c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 14 Column 2"
        name="t2r14c2"
        value={sectionDataSingle.t2r14c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 15 Column 1"
        name="t2r15c1"
        value={sectionDataSingle.t2r15c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 15 Column 2"
        name="t2r15c2"
        value={sectionDataSingle.t2r15c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 16 Column 1"
        name="t2r16c1"
        value={sectionDataSingle.t2r16c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 16 Column 2"
        name="t2r16c2"
        value={sectionDataSingle.t2r16c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 17 Column 1"
        name="t2r17c1"
        value={sectionDataSingle.t2r17c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="T2 Row 17 Column 2"
        name="t2r17c2"
        value={sectionDataSingle.t2r17c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 2 Row 18 Column 1"
        name="t2r18c1"
        value={sectionDataSingle.t2r18c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 18 Column 2"
        name="t2r18c2"
        value={sectionDataSingle.t2r18c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 19 Column 1"
        name="t2r19c1"
        value={sectionDataSingle.t2r19c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 19 Column 2"
        name="t2r19c2"
        value={sectionDataSingle.t2r19c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 20 Column 1"
        name="t2r20c1"
        value={sectionDataSingle.t2r20c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 20 Column 2"
        name="t2r20c2"
        value={sectionDataSingle.t2r20c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 21 Column 1"
        name="t2r21c1"
        value={sectionDataSingle.t2r21c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 21 Column 2"
        name="t2r21c2"
        value={sectionDataSingle.t2r21c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 22 Column 1"
        name="t2r22c1"
        value={sectionDataSingle.t2r22c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 22 Column 2"
        name="t2r22c2"
        value={sectionDataSingle.t2r22c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 23 Column 1"
        name="t2r23c1"
        value={sectionDataSingle.t2r23c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 23 Column 2"
        name="t2r23c2"
        value={sectionDataSingle.t2r23c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 24 Column 1"
        name="t2r24c1"
        value={sectionDataSingle.t2r24c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 24 Column 2"
        name="t2r24c2"
        value={sectionDataSingle.t2r24c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 25 Column 1"
        name="t2r25c1"
        value={sectionDataSingle.t2r25c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 2 Row 25 Column 2"
        name="t2r25c2"
        value={sectionDataSingle.t2r25c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 3 Heading"
        name="table3Heading"
        value={sectionDataSingle.table3Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 3 Heading 1"
        name="t3h1"
        value={sectionDataSingle.t3h1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Table 3 Heading 2"
        name="t3h2"
        value={sectionDataSingle.t3h2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 1 Column 1"
        name="t3r1c1"
        value={sectionDataSingle.t3r1c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 1 Column 2"
        name="t3r1c2"
        value={sectionDataSingle.t3r1c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 2 Column 1"
        name="t3r2c1"
        value={sectionDataSingle.t3r2c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 2 Column 2"
        name="t3r2c2"
        value={sectionDataSingle.t3r2c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 3 Column 1"
        name="t3r3c1"
        value={sectionDataSingle.t3r3c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 3 Column 2"
        name="t3r3c2"
        value={sectionDataSingle.t3r3c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 4 Column 1"
        name="t3r4c1"
        value={sectionDataSingle.t3r4c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 4 Column 2"
        name="t3r4c2"
        value={sectionDataSingle.t3r4c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 5 Column 1"
        name="t3r5c1"
        value={sectionDataSingle.t3r5c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 5 Column 2"
        name="t3r5c2"
        value={sectionDataSingle.t3r5c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 6 Column 1"
        name="t3r6c1"
        value={sectionDataSingle.t3r6c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 6 Column 2"
        name="t3r6c2"
        value={sectionDataSingle.t3r6c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 7 Column 1"
        name="t3r7c1"
        value={sectionDataSingle.t3r7c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 7 Column 2"
        name="t3r7c2"
        value={sectionDataSingle.t3r7c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 8 Column 1"
        name="t3r8c1"
        value={sectionDataSingle.t3r8c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 8 Column 2"
        name="t3r8c2"
        value={sectionDataSingle.t3r8c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 9 Column 1"
        name="t3r9c1"
        value={sectionDataSingle.t3r9c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 9 Column 2"
        name="t3r9c2"
        value={sectionDataSingle.t3r9c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 10 Column 1"
        name="t3r10c1"
        value={sectionDataSingle.t3r10c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 10 Column 2"
        name="t3r10c2"
        value={sectionDataSingle.t3r10c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 11 Column 1"
        name="t3r11c1"
        value={sectionDataSingle.t3r11c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 11 Column 2"
        name="t3r11c2"
        value={sectionDataSingle.t3r11c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 12 Column 1"
        name="t3r12c1"
        value={sectionDataSingle.t3r12c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 12 Column 2"
        name="t3r12c2"
        value={sectionDataSingle.t3r12c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 13 Column 1"
        name="t3r13c1"
        value={sectionDataSingle.t3r13c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Table 3 Row 13 Column 2"
        name="t3r13c2"
        value={sectionDataSingle.t3r13c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="t3r14c1"
        name="t3r14c1"
        value={sectionDataSingle.t3r14c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r14c2"
        name="t3r14c2"
        value={sectionDataSingle.t3r14c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r15c1"
        name="t3r15c1"
        value={sectionDataSingle.t3r15c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r15c2"
        name="t3r15c2"
        value={sectionDataSingle.t3r15c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r16c1"
        name="t3r16c1"
        value={sectionDataSingle.t3r16c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r16c2"
        name="t3r16c2"
        value={sectionDataSingle.t3r16c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r17c1"
        name="t3r17c1"
        value={sectionDataSingle.t3r17c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r17c2"
        name="t3r17c2"
        value={sectionDataSingle.t3r17c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r18c1"
        name="t3r18c1"
        value={sectionDataSingle.t3r18c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r18c2"
        name="t3r18c2"
        value={sectionDataSingle.t3r18c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r19c1"
        name="t3r19c1"
        value={sectionDataSingle.t3r19c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r19c2"
        name="t3r19c2"
        value={sectionDataSingle.t3r19c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r20c1"
        name="t3r20c1"
        value={sectionDataSingle.t3r20c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r20c2"
        name="t3r20c2"
        value={sectionDataSingle.t3r20c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r21c1"
        name="t3r21c1"
        value={sectionDataSingle.t3r21c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r21c2"
        name="t3r21c2"
        value={sectionDataSingle.t3r21c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r22c1"
        name="t3r22c1"
        value={sectionDataSingle.t3r22c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r22c2"
        name="t3r22c2"
        value={sectionDataSingle.t3r22c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r23c1"
        name="t3r23c1"
        value={sectionDataSingle.t3r23c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r23c2"
        name="t3r23c2"
        value={sectionDataSingle.t3r23c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r24c1"
        name="t3r24c1"
        value={sectionDataSingle.t3r24c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r24c2"
        name="t3r24c2"
        value={sectionDataSingle.t3r24c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r25c1"
        name="t3r25c1"
        value={sectionDataSingle.t3r25c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r25c2"
        name="t3r25c2"
        value={sectionDataSingle.t3r25c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r26c1"
        name="t3r26c1"
        value={sectionDataSingle.t3r26c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r26c2"
        name="t3r26c2"
        value={sectionDataSingle.t3r26c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r27c1"
        name="t3r27c1"
        value={sectionDataSingle.t3r27c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r27c2"
        name="t3r27c2"
        value={sectionDataSingle.t3r27c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r28c1"
        name="t3r28c1"
        value={sectionDataSingle.t3r28c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r28c2"
        name="t3r28c2"
        value={sectionDataSingle.t3r28c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r29c1"
        name="t3r29c1"
        value={sectionDataSingle.t3r29c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r29c2"
        name="t3r29c2"
        value={sectionDataSingle.t3r29c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r30c1"
        name="t3r30c1"
        value={sectionDataSingle.t3r30c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t3r30c2"
        name="t3r30c2"
        value={sectionDataSingle.t3r30c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 4 Heading"
        name="table4Heading"
        value={sectionDataSingle.table4Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t4h1"
        name="t4h1"
        value={sectionDataSingle.t4h1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t4h2"
        name="t4h2"
        value={sectionDataSingle.t4h2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r1c1"
        name="t4r1c1"
        value={sectionDataSingle.t4r1c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r1c2"
        name="t4r1c2"
        value={sectionDataSingle.t4r1c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r2c1"
        name="t4r2c1"
        value={sectionDataSingle.t4r2c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r2c2"
        name="t4r2c2"
        value={sectionDataSingle.t4r2c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r3c1"
        name="t4r3c1"
        value={sectionDataSingle.t4r3c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r3c2"
        name="t4r3c2"
        value={sectionDataSingle.t4r3c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r4c1"
        name="t4r4c1"
        value={sectionDataSingle.t4r4c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r4c2"
        name="t4r4c2"
        value={sectionDataSingle.t4r4c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="t4r5c1"
        name="t4r5c1"
        value={sectionDataSingle.t4r5c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r5c2"
        name="t4r5c2"
        value={sectionDataSingle.t4r5c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r6c1"
        name="t4r6c1"
        value={sectionDataSingle.t4r6c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r6c2"
        name="t4r6c2"
        value={sectionDataSingle.t4r6c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r7c1"
        name="t4r7c1"
        value={sectionDataSingle.t4r7c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r7c2"
        name="t4r7c2"
        value={sectionDataSingle.t4r7c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r8c1"
        name="t4r8c1"
        value={sectionDataSingle.t4r8c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r8c2"
        name="t4r8c2"
        value={sectionDataSingle.t4r8c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r9c1"
        name="t4r9c1"
        value={sectionDataSingle.t4r9c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r9c2"
        name="t4r9c2"
        value={sectionDataSingle.t4r9c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r10c1"
        name="t4r10c1"
        value={sectionDataSingle.t4r10c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r10c2"
        name="t4r10c2"
        value={sectionDataSingle.t4r10c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r11c1"
        name="t4r11c1"
        value={sectionDataSingle.t4r11c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r11c2"
        name="t4r11c2"
        value={sectionDataSingle.t4r11c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r12c1"
        name="t4r12c1"
        value={sectionDataSingle.t4r12c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r12c2"
        name="t4r12c2"
        value={sectionDataSingle.t4r12c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r13c1"
        name="t4r13c1"
        value={sectionDataSingle.t4r13c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r13c2"
        name="t4r13c2"
        value={sectionDataSingle.t4r13c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r14c1"
        name="t4r14c1"
        value={sectionDataSingle.t4r14c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t4r14c2"
        name="t4r14c2"
        value={sectionDataSingle.t4r14c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 5 Heading"
        name="table5Heading"
        value={sectionDataSingle.table5Heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t5h1"
        name="t5h1"
        value={sectionDataSingle.t5h1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="t5h2"
        name="t5h2"
        value={sectionDataSingle.t5h2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t5r1c1"
        name="t5r1c1"
        value={sectionDataSingle.t5r1c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t5r1c2"
        name="t5r1c2"
        value={sectionDataSingle.t5r1c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t5r2c1"
        name="t5r2c1"
        value={sectionDataSingle.t5r2c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="t5r2c2"
        name="t5r2c2"
        value={sectionDataSingle.t5r2c2 || ""}
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
        placeholder="s1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Comparison List"
        name="comprList"
        value={sectionDataSingle.comprList || ""}
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

export default PrioritiesProgramContent;
