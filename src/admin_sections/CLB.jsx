import { useState, useEffect } from "react";
import styles from "../styles/Admin.module.css";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const CLB = () => {
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
    subHeading: "",
    c1: "",
    c2: "",
    c3: "",
    // Fields for c1b1 to c3b12 with points for listening, reading, writing, speaking
    c1b1: "", c1b1PointsListening: "", c1b1PointsReading: "", c1b1PointsWriting: "", c1b1PointsSpeaking: "",
    c1b2: "", c1b2PointsListening: "", c1b2PointsReading: "", c1b2PointsWriting: "", c1b2PointsSpeaking: "",
    c1b3: "", c1b3PointsListening: "", c1b3PointsReading: "", c1b3PointsWriting: "", c1b3PointsSpeaking: "",
    c1b4: "", c1b4PointsListening: "", c1b4PointsReading: "", c1b4PointsWriting: "", c1b4PointsSpeaking: "",
    c1b5: "", c1b5PointsListening: "", c1b5PointsReading: "", c1b5PointsWriting: "", c1b5PointsSpeaking: "",
    c1b6: "", c1b6PointsListening: "", c1b6PointsReading: "", c1b6PointsWriting: "", c1b6PointsSpeaking: "",
    c1b7: "", c1b7PointsListening: "", c1b7PointsReading: "", c1b7PointsWriting: "", c1b7PointsSpeaking: "",
    c1b8: "", c1b8PointsListening: "", c1b8PointsReading: "", c1b8PointsWriting: "", c1b8PointsSpeaking: "",
    c1b9: "", c1b9PointsListening: "", c1b9PointsReading: "", c1b9PointsWriting: "", c1b9PointsSpeaking: "",
    c1b10: "", c1b10PointsListening: "", c1b10PointsReading: "", c1b10PointsWriting: "", c1b10PointsSpeaking: "",
    c1b11: "", c1b11PointsListening: "", c1b11PointsReading: "", c1b11PointsWriting: "", c1b11PointsSpeaking: "",
    c1b12: "", c1b12PointsListening: "", c1b12PointsReading: "", c1b12PointsWriting: "", c1b12PointsSpeaking: "",
    c2b1: "", c2b1PointsListening: "", c2b1PointsReading: "", c2b1PointsWriting: "", c2b1PointsSpeaking: "",
    c2b2: "", c2b2PointsListening: "", c2b2PointsReading: "", c2b2PointsWriting: "", c2b2PointsSpeaking: "",
    c2b3: "", c2b3PointsListening: "", c2b3PointsReading: "", c2b3PointsWriting: "", c2b3PointsSpeaking: "",
    c2b4: "", c2b4PointsListening: "", c2b4PointsReading: "", c2b4PointsWriting: "", c2b4PointsSpeaking: "",
    c2b5: "", c2b5PointsListening: "", c2b5PointsReading: "", c2b5PointsWriting: "", c2b5PointsSpeaking: "",
    c2b6: "", c2b6PointsListening: "", c2b6PointsReading: "", c2b6PointsWriting: "", c2b6PointsSpeaking: "",
    c2b7: "", c2b7PointsListening: "", c2b7PointsReading: "", c2b7PointsWriting: "", c2b7PointsSpeaking: "",
    c2b8: "", c2b8PointsListening: "", c2b8PointsReading: "", c2b8PointsWriting: "", c2b8PointsSpeaking: "",
    c2b9: "", c2b9PointsListening: "", c2b9PointsReading: "", c2b9PointsWriting: "", c2b9PointsSpeaking: "",
    c2b10: "", c2b10PointsListening: "", c2b10PointsReading: "", c2b10PointsWriting: "", c2b10PointsSpeaking: "",
    c2b11: "", c2b11PointsListening: "", c2b11PointsReading: "", c2b11PointsWriting: "", c2b11PointsSpeaking: "",
    c2b12: "", c2b12PointsListening: "", c2b12PointsReading: "", c2b12PointsWriting: "", c2b12PointsSpeaking: "",
    c3b1: "", c3b1PointsListening: "", c3b1PointsReading: "", c3b1PointsWriting: "", c3b1PointsSpeaking: "",
    c3b2: "", c3b2PointsListening: "", c3b2PointsReading: "", c3b2PointsWriting: "", c3b2PointsSpeaking: "",
    c3b3: "", c3b3PointsListening: "", c3b3PointsReading: "", c3b3PointsWriting: "", c3b3PointsSpeaking: "",
    c3b4: "", c3b4PointsListening: "", c3b4PointsReading: "", c3b4PointsWriting: "", c3b4PointsSpeaking: "",
    c3b5: "", c3b5PointsListening: "", c3b5PointsReading: "", c3b5PointsWriting: "", c3b5PointsSpeaking: "",
    c3b6: "", c3b6PointsListening: "", c3b6PointsReading: "", c3b6PointsWriting: "", c3b6PointsSpeaking: "",
    c3b7: "", c3b7PointsListening: "", c3b7PointsReading: "", c3b7PointsWriting: "", c3b7PointsSpeaking: "",
    c3b8: "", c3b8PointsListening: "", c3b8PointsReading: "", c3b8PointsWriting: "", c3b8PointsSpeaking: "",
    c3b9: "", c3b9PointsListening: "", c3b9PointsReading: "", c3b9PointsWriting: "", c3b9PointsSpeaking: "",
    c3b10: "", c3b10PointsListening: "", c3b10PointsReading: "", c3b10PointsWriting: "", c3b10PointsSpeaking: "",
    c3b11: "", c3b11PointsListening: "", c3b11PointsReading: "", c3b11PointsWriting: "", c3b11PointsSpeaking: "",
    c3b12: "", c3b12PointsListening: "", c3b12PointsReading: "", c3b12PointsWriting: "", c3b12PointsSpeaking: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/clb-calculator")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const fetchedData = data[0];
          // Update the state with fetched data
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
    fetch(
      `https://brightlight-node.onrender.com/clb-calculator/${sectionData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionData),
      }
    )
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

      {/* Heading Section */}
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
      <input
        placeholder="Sub Heading"
        name="subHeading"
        value={sectionData.subHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* c1, c2, c3 Sections */}
      <input
        placeholder="c1"
        name="c1"
        value={sectionData.c1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="c2"
        name="c2"
        value={sectionData.c2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="c3"
        name="c3"
        value={sectionData.c3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Fields for c1b1 to c3b12 */}
      {[...Array(12).keys()].map((index) => (
        <div key={`c1b${index + 1}`}>
          <input
            placeholder={`c1b${index + 1}`}
            name={`c1b${index + 1}`}
            value={sectionData[`c1b${index + 1}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c1b${index + 1} Points Listening`}
            name={`c1b${index + 1}PointsListening`}
            value={sectionData[`c1b${index + 1}PointsListening`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c1b${index + 1} Points Reading`}
            name={`c1b${index + 1}PointsReading`}
            value={sectionData[`c1b${index + 1}PointsReading`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c1b${index + 1} Points Writing`}
            name={`c1b${index + 1}PointsWriting`}
            value={sectionData[`c1b${index + 1}PointsWriting`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c1b${index + 1} Points Speaking`}
            name={`c1b${index + 1}PointsSpeaking`}
            value={sectionData[`c1b${index + 1}PointsSpeaking`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      ))}

      {[...Array(12).keys()].map((index) => (
        <div key={`c2b${index + 1}`}>
          <input
            placeholder={`c2b${index + 1}`}
            name={`c2b${index + 1}`}
            value={sectionData[`c2b${index + 1}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c2b${index + 1} Points Listening`}
            name={`c2b${index + 1}PointsListening`}
            value={sectionData[`c2b${index + 1}PointsListening`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c2b${index + 1} Points Reading`}
            name={`c2b${index + 1}PointsReading`}
            value={sectionData[`c2b${index + 1}PointsReading`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c2b${index + 1} Points Writing`}
            name={`c2b${index + 1}PointsWriting`}
            value={sectionData[`c2b${index + 1}PointsWriting`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c2b${index + 1} Points Speaking`}
            name={`c2b${index + 1}PointsSpeaking`}
            value={sectionData[`c2b${index + 1}PointsSpeaking`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      ))}

      {[...Array(12).keys()].map((index) => (
        <div key={`c3b${index + 1}`}>
          <input
            placeholder={`c3b${index + 1}`}
            name={`c3b${index + 1}`}
            value={sectionData[`c3b${index + 1}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c3b${index + 1} Points Listening`}
            name={`c3b${index + 1}PointsListening`}
            value={sectionData[`c3b${index + 1}PointsListening`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c3b${index + 1} Points Reading`}
            name={`c3b${index + 1}PointsReading`}
            value={sectionData[`c3b${index + 1}PointsReading`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c3b${index + 1} Points Writing`}
            name={`c3b${index + 1}PointsWriting`}
            value={sectionData[`c3b${index + 1}PointsWriting`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder={`c3b${index + 1} Points Speaking`}
            name={`c3b${index + 1}PointsSpeaking`}
            value={sectionData[`c3b${index + 1}PointsSpeaking`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      ))}

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

export default CLB;
