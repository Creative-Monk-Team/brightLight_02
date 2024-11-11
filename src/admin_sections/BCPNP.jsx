import { useState, useEffect } from "react";
import styles from "../styles/Admin.module.css";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const BCPNP = () => {
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
    fsq1o5: "",
    fsq1o5p: "",
    fsq1o6: "",
    fsq1o6p: "",
    fsq1o7: "",
    fsq1o7p: "",
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
    fosq1o6: "",
    fosq1o6p: "",
    fosq1o7: "",
    fosq1o7p: "",
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
    seventhSectionHeading: "",
    svsq1: "",
    svsq1o1: "",
    svsq1o1p: "",
    svsq1o2: "",
    svsq1o2p: "",
    svt1: "",
    svt2: "",
    svt3: "",
    svt4: "",
    svt5: "",
    svt6: "",
    svt7: "",
    svt8: "",
    svt9: "",
    svt10: "",
    svt11: "",
    eighthHeading: "",
    egsq1: "",
    egsq1o1: "",
    egsq1o1p: "",
    egsq1o2: "",
    egsq1o2p: "",
    egsq1o3: "",
    egsq1o3p: "",
    egsq1o4: "",
    egsq1o4p: "",
    egsq1o5: "",
    egsq1o5p: "",
    egsq1o6: "",
    egsq1o6p: "",
    egsq1o7: "",
    egsq1o7p: "",
    egsq1o8: "",
    egsq1o8p: "",
    egsq1o9: "",
    egsq1o9p: "",
    ninthHeading: "",
    nnsq1: "",
    nnsq1o1: "",
    nnsq1o1p: "",
    nnsq1o2: "",
    nnsq1o2p: "",
    tenthHeading: "",
    eleventhHeading: "",
    elsq1: "",
    elsq1o1: "",
    elsq1o1p: "",
    elsq1o2: "",
    elsq1o2p: "",
    elsq1o3: "",
    elsq1o3p: "",
    twelevethHeading: "",
    twsq1: "",
    twsq1o1: "",
    twsq1o1p: "",
    twsq1o2: "",
    twsq1o2p: "",
    twsq1o3: "",
    twsq1o3p: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/bcpnp")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const fetchedData = data[0];
          setSectionData(fetchedData);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    setSectionData({
      ...sectionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateClick = () => {
    fetch(`https://brightlight-node.onrender.com/bcpnp/${sectionData._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sectionData),
    })
      .then((response) => {
        if (!response.ok) {
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

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />

      {/* Heading and Descriptions */}
      <input
        placeholder="Heading"
        name="heading"
        value={sectionData.heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Description"
        name="description"
        value={sectionData.description || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* First Section */}
      <input
        placeholder="First Section Heading"
        name="firstSectionHeading"
        value={sectionData.firstSectionHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="FSQ1"
        name="fsq1"
        value={sectionData.fsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div className={styles.sevenColumnsTable} style={{ margin: "0 0" }}>
        {[...Array(7).keys()].map((index) => (
          <div key={`fsq1o${index + 1}`}>
            <input
              placeholder={`FSQ1 Option ${index + 1}`}
              name={`fsq1o${index + 1}`}
              value={sectionData[`fsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.sevenColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(7).keys()].map((index) => (
          <div key={`fsq1o${index + 1}`}>
            <input
              placeholder={`FSQ1 Option ${index + 1} Points`}
              name={`fsq1o${index + 1}p`}
              value={sectionData[`fsq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
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
        {[...Array(2).keys()].map((index) => (
          <div key={`ssq1o${index + 1}`}>
            <input
              placeholder={`SSQ1 Option ${index + 1}`}
              name={`ssq1o${index + 1}`}
              value={sectionData[`ssq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(2).keys()].map((index) => (
          <div key={`ssq1o${index + 1}`}>
            <input
              placeholder={`SSQ1 Option ${index + 1} Points`}
              name={`ssq1o${index + 1}p`}
              value={sectionData[`ssq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
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
      <div className={styles.twoColumnsTable} style={{ margin: "0 0" }}>
        {[...Array(2).keys()].map((index) => (
          <div key={`tsq1o${index + 1}`}>
            <input
              placeholder={`TSQ1 Option ${index + 1}`}
              name={`tsq1o${index + 1}`}
              value={sectionData[`tsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(2).keys()].map((index) => (
          <div key={`tsq1o${index + 1}`}>
            <input
              placeholder={`TSQ1 Option ${index + 1} Points`}
              name={`tsq1o${index + 1}p`}
              value={sectionData[`tsq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
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

      <div className={styles.sevenColumnsTable} style={{ margin: "0 0" }}>
        {[...Array(7).keys()].map((index) => (
          <div key={`fosq1o${index + 1}`}>
            <input
              placeholder={`FOSQ1 Option ${index + 1}`}
              name={`fosq1o${index + 1}`}
              value={sectionData[`fosq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.sevenColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(7).keys()].map((index) => (
          <div key={`fosq1o${index + 1}`}>
            <input
              placeholder={`FOSQ1 Option ${index + 1} Points`}
              name={`fosq1o${index + 1}p`}
              value={sectionData[`fosq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
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
        {[...Array(2).keys()].map((index) => (
          <div key={`ffsq1o${index + 1}`}>
            <input
              placeholder={`FFSQ1 Option ${index + 1}`}
              name={`ffsq1o${index + 1}`}
              value={sectionData[`ffsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(2).keys()].map((index) => (
          <div key={`ffsq1o${index + 1}`}>
            <input
              placeholder={`FFSQ1 Option ${index + 1} Points`}
              name={`ffsq1o${index + 1}p`}
              value={sectionData[`ffsq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
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
      <div className={styles.twoColumnsTable} style={{ margin: "0 0" }}>
        {[...Array(2).keys()].map((index) => (
          <div key={`sxsq1o${index + 1}`}>
            <input
              placeholder={`SXSQ1 Option ${index + 1}`}
              name={`sxsq1o${index + 1}`}
              value={sectionData[`sxsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(2).keys()].map((index) => (
          <div key={`sxsq1o${index + 1}`}>
            <input
              placeholder={`SXSQ1 Option ${index + 1} Points`}
              name={`sxsq1o${index + 1}p`}
              value={sectionData[`sxsq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
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

      <div className={styles.twoColumnsTable} style={{ margin: "0 0" }}>
        {[...Array(2).keys()].map((index) => (
          <div key={`svsq1o${index + 1}`}>
            <input
              placeholder={`SVSQ1 Option ${index + 1}`}
              name={`svsq1o${index + 1}`}
              value={sectionData[`svsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(2).keys()].map((index) => (
          <div key={`svsq1o${index + 1}`}>
            <input
              placeholder={`SVSQ1 Option ${index + 1}`}
              name={`svsq1o${index + 1}`}
              value={sectionData[`svsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              placeholder={`SVSQ1 Option ${index + 1} Points`}
              name={`svsq1o${index + 1}p`}
              value={sectionData[`svsq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.eleventhColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(11).keys()].map((index) => (
          <input
            key={`svt${index + 1}`}
            placeholder={`SVT${index + 1}`}
            name={`svt${index + 1}`}
            value={sectionData[`svt${index + 1}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        ))}
      </div>

      <input
        placeholder="Eighth Heading"
        name="eighthHeading"
        value={sectionData.eighthHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="EGSQ1"
        name="egsq1"
        value={sectionData.egsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div className={styles.eleventhColumnsTable} style={{ margin: "0 0" }}>
        {[...Array(9).keys()].map((index) => (
          <div key={`egsq1o${index + 1}`}>
            <input
              placeholder={`EGSQ1 Option ${index + 1}`}
              name={`egsq1o${index + 1}`}
              value={sectionData[`egsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.eleventhColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(9).keys()].map((index) => (
          <div key={`egsq1o${index + 1}`}>
            <input
              placeholder={`EGSQ1 Option ${index + 1}`}
              name={`egsq1o${index + 1}`}
              value={sectionData[`egsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
            <input
              placeholder={`EGSQ1 Option ${index + 1} Points`}
              name={`egsq1o${index + 1}p`}
              value={sectionData[`egsq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <input
        placeholder="Ninth Heading"
        name="ninthHeading"
        value={sectionData.ninthHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="NNSQ1"
        name="nnsq1"
        value={sectionData.nnsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(2).keys()].map((index) => (
          <div key={`nnsq1o${index + 1}`}>
            <input
              placeholder={`NNSQ1 Option ${index + 1}`}
              name={`nnsq1o${index + 1}`}
              value={sectionData[`nnsq1o${index + 1}`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.twoColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        {[...Array(2).keys()].map((index) => (
          <div key={`nnsq1o${index + 1}`}>
            <input
              placeholder={`NNSQ1 Option ${index + 1} Points`}
              name={`nnsq1o${index + 1}p`}
              value={sectionData[`nnsq1o${index + 1}p`] || ""}
              onChange={handleInputChange}
              disabled={!editMode}
            />
          </div>
        ))}
      </div>

      <input
        placeholder="Tenth Heading"
        name="tenthHeading"
        value={sectionData.tenthHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eleventh Heading"
        name="eleventhHeading"
        value={sectionData.eleventhHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="ELSQ1"
        name="elsq1"
        value={sectionData.elsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <div className={styles.threeColumnsTable} style={{ margin: "0 0" }}>
        <input
          placeholder="ELSQ1 Option 1"
          name="elsq1o1"
          value={sectionData.elsq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="ELSQ1 Option 2"
          name="elsq1o2"
          value={sectionData.elsq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="ELSQ1 Option 3"
          name="elsq1o3"
          value={sectionData.elsq1o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.threeColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="ELSQ1 Option 1 Points"
          name="elsq1o1p"
          value={sectionData.elsq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="ELSQ1 Option 2 Points"
          name="elsq1o2p"
          value={sectionData.elsq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="ELSQ1 Option 3 Points"
          name="elsq1o3p"
          value={sectionData.elsq1o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <input
        placeholder="Twelfth Heading"
        name="twelevethHeading"
        value={sectionData.twelevethHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="TWSQ1"
        name="twsq1"
        value={sectionData.twsq1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div
        className={styles.threeColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="TWSQ1 Option 1"
          name="twsq1o1"
          value={sectionData.twsq1o1 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="TWSQ1 Option 2"
          name="twsq1o2"
          value={sectionData.twsq1o2 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="TWSQ1 Option 3"
          name="twsq1o3"
          value={sectionData.twsq1o3 || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      <div
        className={styles.threeColumnsTable}
        style={{ margin: "0 0", marginBottom: "50px" }}
      >
        <input
          placeholder="TWSQ1 Option 1 Points"
          name="twsq1o1p"
          value={sectionData.twsq1o1p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="TWSQ1 Option 2 Points"
          name="twsq1o2p"
          value={sectionData.twsq1o2p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />

        <input
          placeholder="TWSQ1 Option 3 Points"
          name="twsq1o3p"
          value={sectionData.twsq1o3p || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

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
            onClick={() => setEditMode(!editMode)}
            alt="Edit"
          />
        )}
      </div>
    </div>
  );
};

export default BCPNP;
