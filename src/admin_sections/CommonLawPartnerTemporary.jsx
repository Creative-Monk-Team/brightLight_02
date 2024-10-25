import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const CommonLawPartnerTemporaryContent = () => {
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
    comLawPartTempHeading: "",
    comLawPartTemprPara1: "",
    comLawPartTempPara2: "",
    comLawPartTempLi1: "",
    comLawPartTempLi2: "",
    comLawPartTempPara3: "",

    BenifitHeading: "",
    b1: "",
    b2: "",
    b3: "",
    b4: "",
    b5: "",
    b6: "",
    b7: "",
    b8: "",

    EligibilityHeading: "",
    EligSubHead: "",
    e1h1: "",
    eh1: "",
    es1h1Lih: "",
    es1h1Li1: "",
    es1h1Li2: "",
    es1h1Li3: "",
    es1h2Lih: "",
    es1h2Li1: "",
    es1h3Lih: "",
    es1h3Li1: "",
    es1h4Lih: "",
    es1h4Li1: "",
    es1h5Lih: "",
    es1h5Li1: "",
    es1h5Li2: "",
    es1h5Li3: "",
    es1h5Li4: "",
    es1h5Li5: "",
    es1h5Li6: "",

    e2h2: "",
    eh2: "",
    es2h6Lih: "",
    es2h6Li1: "",
    es2h6Li2: "",
    es2h6Li3: "",

    es2h7Lih: "",
    es2h7Li1: "",

    es2h8Lih: "",
    es2h8Li1: "",

    es2h9Lih: "",
    es2h9Li1: "",

    es2h10Lih: "",
    es2h10Li1: "",

    es2h11Ph: "",
    es2h11P1: "",

    es2h12Lih: "",
    es2h12Li1: "",
    es2h12Li2: "",
    es2h12Li3: "",
    es2h12Li4: "",
    es2h12Li5: "",
    es2h12Li6: "",
    es2h12Li7: "",
    es2h12Li8: "",

    FamMembHeading: "",
    FamMembSubHead: "",
    FamMembSubLi1: "",
    FamMembSubLi2: "",
    FamMembSubLi3: "",

    HowApplyHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",
    ha6: "",
    ha7: "",

    RefusalHeading: "",
    r1: "",
    r2: "",
    r3: "",
    r4: "",

    NeedAssisHeading: "",
    NeedAssisPara: "",

    WhyChooseUsHeading: "",
    WhyChooseUsPara: "",
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
      `https://brightlight-node.onrender.com/commonLawPartnerTemporary/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/commonLawPartnerTemporary")
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
        placeholder="Common Law Part Temp Heading"
        name="comLawPartTempHeading"
        value={sectionDataSingle.comLawPartTempHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Common Law Part Temp Paragraph 1"
        name="comLawPartTemprPara1"
        value={sectionDataSingle.comLawPartTemprPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Common Law Part Temp Paragraph 2"
        name="comLawPartTempPara2"
        value={sectionDataSingle.comLawPartTempPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Common Law Part Temp List Item 1"
        name="comLawPartTempLi1"
        value={sectionDataSingle.comLawPartTempLi1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Common Law Part Temp List Item 2"
        name="comLawPartTempLi2"
        value={sectionDataSingle.comLawPartTempLi2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Common Law Part Temp Paragraph 3"
        name="comLawPartTempPara3"
        value={sectionDataSingle.comLawPartTempPara3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="BenifitHeading"
        value={sectionDataSingle.BenifitHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 8 }, (_, i) => (
        <textarea
          key={`b${i + 1}`}
          placeholder={`Benefit Detail ${i + 1}`}
          name={`b${i + 1}`}
          value={sectionDataSingle[`b${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Sub Heading"
        name="EligSubHead"
        value={sectionDataSingle.EligSubHead}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 12 }, (_, i) => (
        <textarea
          key={`e${i + 1}`}
          placeholder={`Eligibility Detail ${i + 1}`}
          name={`e${i + 1}`}
          value={sectionDataSingle[`e${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Family Member Heading"
        name="FamMembHeading"
        value={sectionDataSingle.FamMembHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 3 }, (_, i) => (
        <textarea
          key={`FamMembSubLi${i + 1}`}
          placeholder={`Family Member Sub Detail ${i + 1}`}
          name={`FamMembSubLi${i + 1}`}
          value={sectionDataSingle[`FamMembSubLi${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 7 }, (_, i) => (
        <textarea
          key={`ha${i + 1}`}
          placeholder={`How to Apply Detail ${i + 1}`}
          name={`ha${i + 1}`}
          value={sectionDataSingle[`ha${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {Array.from({ length: 4 }, (_, i) => (
        <textarea
          key={`r${i + 1}`}
          placeholder={`Refusal Reason ${i + 1}`}
          name={`r${i + 1}`}
          value={sectionDataSingle[`r${i + 1}`]}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      ))}

      <input
        placeholder="Need Assistance Heading"
        name="NeedAssisHeading"
        value={sectionDataSingle.NeedAssisHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Need Assistance Paragraph"
        name="NeedAssisPara"
        value={sectionDataSingle.NeedAssisPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading"
        value={sectionDataSingle.WhyChooseUsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us Paragraph"
        name="WhyChooseUsPara"
        value={sectionDataSingle.WhyChooseUsPara}
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

export default CommonLawPartnerTemporaryContent;
