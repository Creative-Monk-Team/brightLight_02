import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const BusinessVisitorVisaContent = () => {
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
    buisinessVisitorVisaaHeading: "",
    buisinessVisitorVisaSubHead: "",
    buisinessVisitorVisaPara: "",

    ActivitiesHeading: "",
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    a5: "",
    a6: "",
    a7: "",

    ActivitiesSubHead: "",
    ActivitiesSubPara: "",

    EligibilityHeading: "",
    EligibilityPara: "",
    EligLiHead: "",

    e1: "",
    e2: "",
    e3: "",
    e4: "",
    e5: "",
    e5SubLi1: "",
    e5SubLi2: "",
    e5SubLi3: "",
    e5SubLi4: "",

    EligLastPara: "",

    EventCodeHeading: "",
    e1: "",
    e2: "",

    EssenDocuHeading: "",
    EssenDocuPara: "",

    ed1: "",
    ed2: "",
    ed3: "",
    ed4: "",
    ed5: "",
    ed6: "",
    ed7: "",
    ed8: "",
    ed9: "",

    StillNotHeading: "",
    s1: "",
    s2: "",

    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",
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
      `https://brightlight-node.onrender.com/buisinessVisitorVisa/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/buisinessVisitorVisa")
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
        placeholder="Business Visitor Visa Heading"
        name="buisinessVisitorVisaaHeading"
        value={sectionDataSingle.buisinessVisitorVisaaHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Business Visitor Visa Sub Heading"
        name="buisinessVisitorVisaSubHead"
        value={sectionDataSingle.buisinessVisitorVisaSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Business Visitor Visa Paragraph"
        name="buisinessVisitorVisaPara"
        value={sectionDataSingle.buisinessVisitorVisaPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Activities Heading"
        name="ActivitiesHeading"
        value={sectionDataSingle.ActivitiesHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 7 }, (_, i) => (
        <textarea
          key={i}
          placeholder={`Activity ${i + 1}`}
          name={`a${i + 1}`}
          value={sectionDataSingle[`a${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <textarea
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading || ""}
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

      {Array.from({ length: 5 }, (_, i) => (
        <textarea
          key={i}
          placeholder={`Eligibility Requirement ${i + 1}`}
          name={`e${i + 1}`}
          value={sectionDataSingle[`e${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <textarea
        placeholder="Event Code Heading"
        name="EventCodeHeading"
        value={sectionDataSingle.EventCodeHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Event Code Details"
        name="e1"
        value={sectionDataSingle.e1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Event Code Inclusion"
        name="e2"
        value={sectionDataSingle.e2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Essential Document Heading"
        name="EssenDocuHeading"
        value={sectionDataSingle.EssenDocuHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Essential Documents Information"
        name="EssenDocuPara"
        value={sectionDataSingle.EssenDocuPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {Array.from({ length: 9 }, (_, i) => (
        <textarea
          key={i}
          placeholder={`Essential Document ${i + 1}`}
          name={`ed${i + 1}`}
          value={sectionDataSingle[`ed${i + 1}`] || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Still Not Eligible Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Eligible Text 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Eligible Text 2"
        name="s2"
        value={sectionDataSingle.s2 || ""}
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

export default BusinessVisitorVisaContent;
