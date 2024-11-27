import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

let Achievements = () => {
  let notifySuccess = () => {
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

  let notifyError = () => {
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

  let notifySize = () => {
    toast.error("Large Image Size Recieved.", {
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
  let [sectionDataSingle, setSectionDataSingle] = useState({});
  let [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setSectionDataSingle({
          ...sectionDataSingle,
          [e.target.name]: reader.result, // Convert file to Base64 and store in state
        });
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setSectionDataSingle({
        ...sectionDataSingle,
        [e.target.name]: e.target.value,
      });
    }
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
      `https://brightlight-node.onrender.com/achievements-section/${sectionDataSingle._id}`,
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
      .then((data) => {
        notifySuccess();
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/achievements-section")
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
      <div>
        <input
          placeholder="Heading"
          name="heading"
          value={sectionDataSingle.heading || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
        <input
          placeholder="Description"
          name="description"
          value={sectionDataSingle.description || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>

      {["1", "2", "3"].map((num) => (
        <div key={num}>
          <input
            placeholder="Numbers"
            name={`achievement${num}Numbers`}
            value={sectionDataSingle[`achievement${num}Numbers`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder="Alt Text"
            name={`achievement${num}Alt`}
            value={sectionDataSingle[`achievement${num}Alt`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <input
            placeholder="Heading"
            name={`achievement${num}Heading`}
            value={sectionDataSingle[`achievement${num}Heading`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <img
            className={styles.existingImageSmall}
            src={sectionDataSingle[`achievement${num}SVG`]}
          />
          <input
            name={`achievement${num}SVG`}
            type="file"
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      ))}

      <div className={styles.editIcons}>
        {editMode ? (
          <>
            <img
              src={update}
              className={styles.updateIcon}
              onClick={handleUpdateClick}
            />
          </>
        ) : (
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
          />
        )}
      </div>
    </div>
  );
};

export default Achievements;
