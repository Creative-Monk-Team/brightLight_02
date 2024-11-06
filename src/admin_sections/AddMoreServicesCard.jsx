import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

let AddMoreServicesCard = () => {
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
  let [sectionDataSingle, setSectionDataSingle] = useState({
    blue_stroke_img: "",
    white_stroke_img: "",
    tool_name: "",
    tool_desc: "",
    tool_link: "",
  });
  let [editMode, setEditMode] = useState(false);

  let handleInputChange = (e) => {
    if (e.target.type === "file") {
      let file = e.target.files[0];
      let reader = new FileReader();

      reader.onloadend = () => {
        setSectionDataSingle({
          ...sectionDataSingle,
          [e.target.name]: reader.result,
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

  let handleEditClick = () => {
    setEditMode(true);
  };

  let handleAddClick = () => {
    let formData = new FormData();
    Object.keys(sectionDataSingle).forEach((key) => {
      formData.append(key, sectionDataSingle[key]);
    });

    fetch("https://brightlight-node.onrender.com/more-services-card", {
      method: "POST",
      body: formData,
    })
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
        setSectionDataSingle({
          blue_stroke_img: "",
          white_stroke_img: "",
          tool_name: "",
          tool_desc: "",
          tool_link: "",
        });
      })
      .catch((error) => {
        notifyError();
      });
  };

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />
      <input
        placeholder="Tool Name"
        name="tool_name"
        value={sectionDataSingle.tool_name || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Tool Description"
        name="tool_desc"
        value={sectionDataSingle.tool_desc || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <p className={styles.shortLabel}>Choose Tool Link Below (Without /)</p>
      <select
        placeholder="Tool Link"
        name="tool_link"
        value={sectionDataSingle.tool_link || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      >
        <option value="#"># (For Non Route / Coming Soon)</option>
        <option value="booking">
          Free Assesement
          (https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj)
        </option>
        <option value="federal-skilled">FSWP Calc</option>
        <option value="bcpnp-calculator">BCPNP Calc</option>
        <option value="clb-ilets-calculator?selected=type1">
          CLB Calc for IELTS
        </option>
        <option value="clb-ilets-calculator?selected=type3">
          CLB Calc for CELPIP
        </option>
        <option value="clb-ilets-calculator?selected=type2">
          CLB Calc for TEF (French)
        </option>
        <option value="category-based">Category Based Draws</option>
        <option value="link8">link 8</option>
        <option value="link9">link 9</option>
        <option value="link10">link 10</option>
      </select>
      <p className={styles.shortLabel}>Blue Image Below</p>
      <input
        type="file"
        name="blue_stroke_img"
        disabled={!editMode}
        onChange={handleInputChange}
      />

      <p className={styles.shortLabel}>White Image Below</p>
      <input
        type="file"
        name="white_stroke_img"
        disabled={!editMode}
        onChange={handleInputChange}
      />
      {sectionDataSingle.blue_stroke_img && (
        <img
          className={styles.existingImageSmall}
          src={sectionDataSingle.blue_stroke_img}
          alt="Preview"
        />
      )}

      {sectionDataSingle.white_stroke_img && (
        <img
          className={styles.existingImageSmall}
          src={sectionDataSingle.white_stroke_img}
          alt="Preview"
        />
      )}

      <div className={styles.editIcons}>
        {editMode ? (
          <img
            src={update}
            className={styles.updateIcon}
            onClick={handleAddClick}
            alt="Add"
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

export default AddMoreServicesCard;
