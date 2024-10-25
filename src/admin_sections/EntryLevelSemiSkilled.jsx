import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const EntryLevelSemiSkilledContent = () => {
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
    description1: "",
    description2: "",
    benefitsHeading: "",
    b1: "",
    b2: "",
    b3: "",
    eligibilityHeading: "",
    elibilityDescription: "",
    eligibilityCategory1: "",
    eligibilityCategory1List1: "",
    eligibilityCategory1List2: "",
    eligibilityCategory1List3: "",
    eligibilityCategory1List3NestedList1: "",
    eligibilityCategory1List3NestedList2: "",
    eligibilityCategory1List3NestedList2NestedList1: "",
    eligibilityCategory1List3NestedList2NestedList2: "",
    eligibilityCategory1List3NestedList2NestedList3: "",
    eligibilityCategory1List3NestedList2NestedList4: "",
    eligibilityCategory1List3NestedList2NestedList5: "",
    eligibilityCategory2: "",
    eligibilityCategory2List1: "",
    eligibilityCategory2List2: "",
    eligibilityCategory3: "",
    eligibilityCategory3List1: "",
    eligibilityCategory3List2: "",
    eligibilityCategory4: "",
    eligibilityCategory4List1: "",
    eligibilityCategory5: "",
    table1Heading: "",
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
    table5Heading: "",
    t5h1: "",
    t5h2: "",
    t5r1c1: "",
    t5r1c2: "",
    t5r2c1: "",
    t5r2c2: "",
    t5Disclaimier: "",
    table6Heading: "",
    t6h1: "",
    t6h2: "",
    t6r1c1: "",
    t6r1c2: "",
    t6r2c1: "",
    t6r2c2: "",
    t6r3c1: "",
    t6r3c2: "",
    t6r4c1: "",
    t6r4c2: "",
    t6r5c1: "",
    t6r5c2: "",
    applicationProcessHeading: "",
    applicationProcessDescription: "",
    app1: "",
    app1Nested1: "",
    app1Nested2: "",
    app2: "",
    app2Nested1: "",
    app2Nested2: "",
    app3: "",
    app3Nested1: "",
    app3Nested2: "",
    app3Nested3: "",
    app4: "",
    app4Nested1: "",
    app4Nested2: "",
    StillNotHeading: "",
    s1: "",
    s2: "",
    whyChooseHeading: "",
    whyChooseDescription: "",
    whyChoosePoint1: "",
    whyChoosePoint2: "",
    whyChoosePoint3: "",
    whyChoosePoint4: "",
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
      `https://brightlight-node.onrender.com/entry-level-semi-skilled/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/entry-level-semi-skilled")
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
        value={sectionDataSingle.heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Description 1"
        name="description1"
        value={sectionDataSingle.description1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Description 2"
        name="description2"
        value={sectionDataSingle.description2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="benefitsHeading"
        value={sectionDataSingle.benefitsHeading}
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

      <input
        placeholder="Eligibility Heading"
        name="eligibilityHeading"
        value={sectionDataSingle.eligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Description"
        name="elibilityDescription"
        value={sectionDataSingle.elibilityDescription}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Category 1"
        name="eligibilityCategory1"
        value={sectionDataSingle.eligibilityCategory1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Category 1 List 1"
        name="eligibilityCategory1List1"
        value={sectionDataSingle.eligibilityCategory1List1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Category 1 List 2"
        name="eligibilityCategory1List2"
        value={sectionDataSingle.eligibilityCategory1List2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Category 1 List 3"
        name="eligibilityCategory1List3"
        value={sectionDataSingle.eligibilityCategory1List3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 1 Heading"
        name="table1Heading"
        value={sectionDataSingle.table1Heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T1H1"
        name="t1h1"
        value={sectionDataSingle.t1h1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T1H2"
        name="t1h2"
        value={sectionDataSingle.t1h2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T1R1C1"
        name="t1r1c1"
        value={sectionDataSingle.t1r1c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T1R1C2"
        name="t1r1c2"
        value={sectionDataSingle.t1r1c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 2 Heading"
        name="table2Heading"
        value={sectionDataSingle.table2Heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T2H1"
        name="t2h1"
        value={sectionDataSingle.t2h1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T2H2"
        name="t2h2"
        value={sectionDataSingle.t2h2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T2R1C1"
        name="t2r1c1"
        value={sectionDataSingle.t2r1c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T2R1C2"
        name="t2r1c2"
        value={sectionDataSingle.t2r1c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T2R2C1"
        name="t2r2c1"
        value={sectionDataSingle.t2r2c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T2R2C2"
        name="t2r2c2"
        value={sectionDataSingle.t2r2c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 3 Heading"
        name="table3Heading"
        value={sectionDataSingle.table3Heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T3H1"
        name="t3h1"
        value={sectionDataSingle.t3h1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T3H2"
        name="t3h2"
        value={sectionDataSingle.t3h2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T3R1C1"
        name="t3r1c1"
        value={sectionDataSingle.t3r1c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T3R1C2"
        name="t3r1c2"
        value={sectionDataSingle.t3r1c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T3R2C1"
        name="t3r2c1"
        value={sectionDataSingle.t3r2c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T3R2C2"
        name="t3r2c2"
        value={sectionDataSingle.t3r2c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 4 Heading"
        name="table4Heading"
        value={sectionDataSingle.table4Heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T4H1"
        name="t4h1"
        value={sectionDataSingle.t4h1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T4H2"
        name="t4h2"
        value={sectionDataSingle.t4h2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 5 Heading"
        name="table5Heading"
        value={sectionDataSingle.table5Heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T5H1"
        name="t5h1"
        value={sectionDataSingle.t5h1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T5H2"
        name="t5h2"
        value={sectionDataSingle.t5h2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T5R1C1"
        name="t5r1c1"
        value={sectionDataSingle.t5r1c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T5R1C2"
        name="t5r1c2"
        value={sectionDataSingle.t5r1c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T5R2C1"
        name="t5r2c1"
        value={sectionDataSingle.t5r2c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T5R2C2"
        name="t5r2c2"
        value={sectionDataSingle.t5r2c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 6 Heading"
        name="table6Heading"
        value={sectionDataSingle.table6Heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6H1"
        name="t6h1"
        value={sectionDataSingle.t6h1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6H2"
        name="t6h2"
        value={sectionDataSingle.t6h2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R1C1"
        name="t6r1c1"
        value={sectionDataSingle.t6r1c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R1C2"
        name="t6r1c2"
        value={sectionDataSingle.t6r1c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R2C1"
        name="t6r2c1"
        value={sectionDataSingle.t6r2c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R2C2"
        name="t6r2c2"
        value={sectionDataSingle.t6r2c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R3C1"
        name="t6r3c1"
        value={sectionDataSingle.t6r3c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R3C2"
        name="t6r3c2"
        value={sectionDataSingle.t6r3c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R4C1"
        name="t6r4c1"
        value={sectionDataSingle.t6r4c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R4C2"
        name="t6r4c2"
        value={sectionDataSingle.t6r4c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R5C1"
        name="t6r5c1"
        value={sectionDataSingle.t6r5c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R5C2"
        name="t6r5c2"
        value={sectionDataSingle.t6r5c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Table 5 Disclaimer"
        name="t5Disclaimier"
        value={sectionDataSingle.t5Disclaimier}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Table 6 Heading"
        name="table6Heading"
        value={sectionDataSingle.table6Heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6H1"
        name="t6h1"
        value={sectionDataSingle.t6h1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6H2"
        name="t6h2"
        value={sectionDataSingle.t6h2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R1C1"
        name="t6r1c1"
        value={sectionDataSingle.t6r1c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R1C2"
        name="t6r1c2"
        value={sectionDataSingle.t6r1c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R2C1"
        name="t6r2c1"
        value={sectionDataSingle.t6r2c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R2C2"
        name="t6r2c2"
        value={sectionDataSingle.t6r2c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R3C1"
        name="t6r3c1"
        value={sectionDataSingle.t6r3c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R3C2"
        name="t6r3c2"
        value={sectionDataSingle.t6r3c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R4C1"
        name="t6r4c1"
        value={sectionDataSingle.t6r4c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R4C2"
        name="t6r4c2"
        value={sectionDataSingle.t6r4c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R5C1"
        name="t6r5c1"
        value={sectionDataSingle.t6r5c1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="T6R5C2"
        name="t6r5c2"
        value={sectionDataSingle.t6r5c2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Heading"
        name="applicationProcessHeading"
        value={sectionDataSingle.applicationProcessHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Application Process Description"
        name="applicationProcessDescription"
        value={sectionDataSingle.applicationProcessDescription}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 1"
        name="app1"
        value={sectionDataSingle.app1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 1 Nested 1"
        name="app1Nested1"
        value={sectionDataSingle.app1Nested1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 1 Nested 2"
        name="app1Nested2"
        value={sectionDataSingle.app1Nested2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 2"
        name="app2"
        value={sectionDataSingle.app2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 2 Nested 1"
        name="app2Nested1"
        value={sectionDataSingle.app2Nested1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 2 Nested 2"
        name="app2Nested2"
        value={sectionDataSingle.app2Nested2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 3"
        name="app3"
        value={sectionDataSingle.app3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 3 Nested 1"
        name="app3Nested1"
        value={sectionDataSingle.app3Nested1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 3 Nested 2"
        name="app3Nested2"
        value={sectionDataSingle.app3Nested2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 3 Nested 3"
        name="app3Nested3"
        value={sectionDataSingle.app3Nested3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 4"
        name="app4"
        value={sectionDataSingle.app4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 4 Nested 1"
        name="app4Nested1"
        value={sectionDataSingle.app4Nested1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="App 4 Nested 2"
        name="app4Nested2"
        value={sectionDataSingle.app4Nested2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Heading"
        name="whyChooseHeading"
        value={sectionDataSingle.whyChooseHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Description"
        name="whyChooseDescription"
        value={sectionDataSingle.whyChooseDescription}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Point 1"
        name="whyChoosePoint1"
        value={sectionDataSingle.whyChoosePoint1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Point 2"
        name="whyChoosePoint2"
        value={sectionDataSingle.whyChoosePoint2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Point 3"
        name="whyChoosePoint3"
        value={sectionDataSingle.whyChoosePoint3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Point 4"
        name="whyChoosePoint4"
        value={sectionDataSingle.whyChoosePoint4}
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

export default EntryLevelSemiSkilledContent;
