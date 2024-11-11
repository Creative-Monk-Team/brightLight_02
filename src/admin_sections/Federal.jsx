import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const FederalSkilled = () => {
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

  const [sectionData, setSectionData] = useState({
    heading: "",
    description: "",
    description2: "",
    firstSectionHeading: "",
    fsq1: "",
    fsq1o1: "",
    fsq1o1p: "",
    fsq1o2: "",
    fsq1o2p: "",
    fsq1o3: "",
    fsq1o3p: "",
    fsq1o4: "",
    fsq1o4p: "",
    fsq2: "",
    fsq2o1: "",
    fsq2o1p: "",
    fsq2o2: "",
    fsq2o2p: "",
    fsq2o3: "",
    fsq2o3p: "",
    fsq2o4: "",
    fsq2o4p: "",
    fsq3: "",
    fsq3o1: "",
    fsq3o1p: "",
    fsq3o2: "",
    fsq3o2p: "",
    fsq3o3: "",
    fsq3o3p: "",
    fsq3o4: "",
    fsq3o4p: "",
    fsq4: "",
    fsq4o1: "",
    fsq4o1p: "",
    fsq4o2: "",
    fsq4o2p: "",
    fsq4o3: "",
    fsq4o3p: "",
    fsq4o4: "",
    fsq4o4p: "",
    secondSectionHeading: "",
    ssq1: "",
    ssq1o1: "",
    ssq1o1p: "",
    ssq1o2: "",
    ssq1o2p: "",
    thirdSectionHeading: "",
    tsq1: "",
    tsq1o1: "",
    tsq1o1p: "",
    tsq1o2: "",
    tsq1o2p: "",
    tsq1o3: "",
    tsq1o3p: "",
    tsq1o4: "",
    tsq1o4p: "",
    tsq1o5: "",
    tsq1o5p: "",
    tsq1o6: "",
    tsq1o6p: "",
    tsq1o7: "",
    tsq1o7p: "",
    fourthSectionHeading: "",
    fosq1: "",
    fosq1o1: "",
    fosq1o1p: "",
    fosq1o2: "",
    fosq1o2p: "",
    fosq1o3: "",
    fosq1o3p: "",
    fosq1o4: "",
    fosq1o4p: "",
    fosq1o5: "",
    fosq1o5p: "",
    fifthSectionHeading: "",
    ffsq1: "",
    ffsq1o1: "",
    ffsq1o1p: "",
    ffsq1o2: "",
    ffsq1o2p: "",
    sixthSectionHeading: "",
    sxsq1: "",
    sxsq1o1: "",
    sxsq1o1p: "",
    sxsq1o2: "",
    sxsq1o2p: "",
    sxsq1o3: "",
    sxsq1o3p: "",
    sxsq1o4: "",
    sxsq1o4p: "",
    seventhSectionHeading: "",
    svsq1: "",
    svsq1o1: "",
    svsq1o1p: "",
    svsq1o2: "",
    svsq1o2p: "",
    svsq1o3: "",
    svsq1o3p: "",
    svsq1o4: "",
    svsq1o4p: "",
    svsq1o5: "",
    svsq1o5p: "",
    svsq1o6: "",
    svsq1o6p: "",
    svsq1o7: "",
    svsq1o7p: "",
  });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    setSectionData({
      ...sectionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = () => {
    if (!sectionData._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/federal-skilled/${sectionData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionData),
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
    fetch("https://brightlight-node.onrender.com/federal-skilled")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSectionData(data[0]);
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
        value={sectionData.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Description"
        name="description"
        value={sectionData.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="First Section Heading"
        name="firstSectionHeading"
        value={sectionData.firstSectionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* First Section Fields */}
      <input
        placeholder="FSQ1"
        name="fsq1"
        value={sectionData.fsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div className={styles.fourColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="FSQ1 Option 1"
          name="fsq1o1"
          value={sectionData.fsq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ1 Option 2"
          name="fsq1o2"
          value={sectionData.fsq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ1 Option 3"
          name="fsq1o3"
          value={sectionData.fsq1o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ1 Option 4"
          name="fsq1o4"
          value={sectionData.fsq1o4 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.fourColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="FSQ1 Option 1 Points"
          name="fsq1o1p"
          value={sectionData.fsq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ1 Option 2 Points"
          name="fsq1o2p"
          value={sectionData.fsq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ1 Option 3 Points"
          name="fsq1o3p"
          value={sectionData.fsq1o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ1 Option 4 Points"
          name="fsq1o4p"
          value={sectionData.fsq1o4p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="FSQ2"
        name="fsq2"
        value={sectionData.fsq2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div className={styles.fourColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="FSQ2 Option 1"
          name="fsq2o1"
          value={sectionData.fsq2o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ2 Option 2"
          name="fsq2o2"
          value={sectionData.fsq2o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ2 Option 3"
          name="fsq2o3"
          value={sectionData.fsq2o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ2 Option 4"
          name="fsq2o4"
          value={sectionData.fsq2o4 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.fourColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="FSQ2 Option 1 Points"
          name="fsq2o1p"
          value={sectionData.fsq2o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ2 Option 2 Points"
          name="fsq2o2p"
          value={sectionData.fsq2o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ2 Option 3 Points"
          name="fsq2o3p"
          value={sectionData.fsq2o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ2 Option 4 Points"
          name="fsq2o4p"
          value={sectionData.fsq2o4p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="FSQ3"
        name="fsq3"
        value={sectionData.fsq3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div className={styles.fourColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="FSQ3 Option 1"
          name="fsq3o1"
          value={sectionData.fsq3o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ3 Option 2"
          name="fsq3o2"
          value={sectionData.fsq3o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ3 Option 3"
          name="fsq3o3"
          value={sectionData.fsq3o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ3 Option 4"
          name="fsq3o4"
          value={sectionData.fsq3o4 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.fourColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="FSQ3 Option 1 Points"
          name="fsq3o1p"
          value={sectionData.fsq3o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ3 Option 2 Points"
          name="fsq3o2p"
          value={sectionData.fsq3o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ3 Option 3 Points"
          name="fsq3o3p"
          value={sectionData.fsq3o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ3 Option 4 Points"
          name="fsq3o4p"
          value={sectionData.fsq3o4p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="FSQ4"
        name="fsq4"
        value={sectionData.fsq4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div className={styles.fourColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="FSQ4 Option 1"
          name="fsq4o1"
          value={sectionData.fsq4o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ4 Option 2"
          name="fsq4o2"
          value={sectionData.fsq4o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ4 Option 3"
          name="fsq4o3"
          value={sectionData.fsq4o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FSQ4 Option 4"
          name="fsq4o4"
          value={sectionData.fsq4o4 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.fourColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="FSQ4 Option 1 Points"
          name="fsq4o1p"
          value={sectionData.fsq4o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ4 Option 2 Points"
          name="fsq4o2p"
          value={sectionData.fsq4o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ4 Option 3 Points"
          name="fsq4o3p"
          value={sectionData.fsq4o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FSQ4 Option 4 Points"
          name="fsq4o4p"
          value={sectionData.fsq4o4p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="Second Section Heading"
        name="secondSectionHeading"
        value={sectionData.secondSectionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="SSQ1"
        name="ssq1"
        value={sectionData.ssq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div className={styles.twoColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="SSQ1 Option 1"
          name="ssq1o1"
          value={sectionData.ssq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SSQ1 Option 2"
          name="ssq1o2"
          value={sectionData.ssq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="SSQ1 Option 1 Points"
          name="ssq1o1p"
          value={sectionData.ssq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SSQ1 Option 2 Points"
          name="ssq1o2p"
          value={sectionData.ssq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="Third Section Heading"
        name="thirdSectionHeading"
        value={sectionData.thirdSectionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="TSQ1"
        name="tsq1"
        value={sectionData.tsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div className={styles.sevenColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="TSQ1 Option 1"
          name="tsq1o1"
          value={sectionData.tsq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="TSQ1 Option 2"
          name="tsq1o2"
          value={sectionData.tsq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="TSQ1 Option 3"
          name="tsq1o3"
          value={sectionData.tsq1o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="TSQ1 Option 4"
          name="tsq1o4"
          value={sectionData.tsq1o4 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="TSQ1 Option 5"
          name="tsq1o5"
          value={sectionData.tsq1o5 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="TSQ1 Option 6"
          name="tsq1o6"
          value={sectionData.tsq1o6 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="TSQ1 Option 7"
          name="tsq1o7"
          value={sectionData.tsq1o7 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.sevenColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="TSQ1 Option 1 Points"
          name="tsq1o1p"
          value={sectionData.tsq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="TSQ1 Option 2 Points"
          name="tsq1o2p"
          value={sectionData.tsq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="TSQ1 Option 3 Points"
          name="tsq1o3p"
          value={sectionData.tsq1o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="TSQ1 Option 4 Points"
          name="tsq1o4p"
          value={sectionData.tsq1o4p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="TSQ1 Option 5 Points"
          name="tsq1o5p"
          value={sectionData.tsq1o5p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="TSQ1 Option 6 Points"
          name="tsq1o6p"
          value={sectionData.tsq1o6p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="TSQ1 Option 7 Points"
          name="tsq1o7p"
          value={sectionData.tsq1o7p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="Fourth Section Heading"
        name="fourthSectionHeading"
        value={sectionData.fourthSectionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="FOSQ1"
        name="fosq1"
        value={sectionData.fosq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div className={styles.fiveColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="FOSQ1 Option 1"
          name="fosq1o1"
          value={sectionData.fosq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FOSQ1 Option 2"
          name="fosq1o2"
          value={sectionData.fosq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FOSQ1 Option 3"
          name="fosq1o3"
          value={sectionData.fosq1o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FOSQ1 Option 4"
          name="fosq1o4"
          value={sectionData.fosq1o4 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FOSQ1 Option 5"
          name="fosq1o5"
          value={sectionData.fosq1o5 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.fiveColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="FOSQ1 Option 1 Points"
          name="fosq1o1p"
          value={sectionData.fosq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FOSQ1 Option 2 Points"
          name="fosq1o2p"
          value={sectionData.fosq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FOSQ1 Option 3 Points"
          name="fosq1o3p"
          value={sectionData.fosq1o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FOSQ1 Option 4 Points"
          name="fosq1o4p"
          value={sectionData.fosq1o4p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FOSQ1 Option 5 Points"
          name="fosq1o5p"
          value={sectionData.fosq1o5p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="Fifth Section Heading"
        name="fifthSectionHeading"
        value={sectionData.fifthSectionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="FFSQ1"
        name="ffsq1"
        value={sectionData.ffsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div className={styles.twoColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="FFSQ1 Option 1"
          name="ffsq1o1"
          value={sectionData.ffsq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="FFSQ1 Option 2"
          name="ffsq1o2"
          value={sectionData.ffsq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="FFSQ1 Option 1 Points"
          name="ffsq1o1p"
          value={sectionData.ffsq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="FFSQ1 Option 2 Points"
          name="ffsq1o2p"
          value={sectionData.ffsq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="Sixth Section Heading"
        name="sixthSectionHeading"
        value={sectionData.sixthSectionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="SXSQ1"
        name="sxsq1"
        value={sectionData.sxsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div className={styles.fourColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="SXSQ1 Option 1"
          name="sxsq1o1"
          value={sectionData.sxsq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SXSQ1 Option 2"
          name="sxsq1o2"
          value={sectionData.sxsq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SXSQ1 Option 3"
          name="sxsq1o3"
          value={sectionData.sxsq1o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SXSQ1 Option 4"
          name="sxsq1o4"
          value={sectionData.sxsq1o4 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.fourColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="SXSQ1 Option 1 Points"
          name="sxsq1o1p"
          value={sectionData.sxsq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SXSQ1 Option 2 Points"
          name="sxsq1o2p"
          value={sectionData.sxsq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SXSQ1 Option 3 Points"
          name="sxsq1o3p"
          value={sectionData.sxsq1o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SXSQ1 Option 4 Points"
          name="sxsq1o4p"
          value={sectionData.sxsq1o4p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="Seventh Section Heading"
        name="seventhSectionHeading"
        value={sectionData.seventhSectionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="SVSQ1"
        name="svsq1"
        value={sectionData.svsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div className={styles.sevenColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="SVSQ1 Option 1"
          name="svsq1o1"
          value={sectionData.svsq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SVSQ1 Option 2"
          name="svsq1o2"
          value={sectionData.svsq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SVSQ1 Option 3"
          name="svsq1o3"
          value={sectionData.svsq1o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SVSQ1 Option 4"
          name="svsq1o4"
          value={sectionData.svsq1o4 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SVSQ1 Option 5"
          name="svsq1o5"
          value={sectionData.svsq1o5 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SVSQ1 Option 6"
          name="svsq1o6"
          value={sectionData.svsq1o6 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="SVSQ1 Option 7"
          name="svsq1o7"
          value={sectionData.svsq1o7 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.sevenColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="SVSQ1 Option 1 Points"
          name="svsq1o1p"
          value={sectionData.svsq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SVSQ1 Option 2 Points"
          name="svsq1o2p"
          value={sectionData.svsq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SVSQ1 Option 3 Points"
          name="svsq1o3p"
          value={sectionData.svsq1o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SVSQ1 Option 4 Points"
          name="svsq1o4p"
          value={sectionData.svsq1o4p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SVSQ1 Option 5 Points"
          name="svsq1o5p"
          value={sectionData.svsq1o5p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SVSQ1 Option 6 Points"
          name="svsq1o6p"
          value={sectionData.svsq1o6p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="SVSQ1 Option 7 Points"
          name="svsq1o7p"
          value={sectionData.svsq1o7p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div className={styles.editIcons}>
        {editMode ? (
          <img
            onClick={handleUpdateClick}
            src={update}
            alt="Update"
            className={styles.updateImage}
          />
        ) : (
          <img
            onClick={handleEditClick}
            src={editIcon}
            alt="Edit"
            className={styles.editImage}
          />
        )}
      </div>
    </div>
  );
};

export default FederalSkilled;
