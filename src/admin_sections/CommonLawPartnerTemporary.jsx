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
    heading: "",
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

    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",

    WageTableHead1: "",
    WageTableHead2: "",
    wt1Li1: "",
    wt2Li1: "",
    wt1Li2: "",
    wt2Li2: "",
    wt1Li3: "",
    wt2Li3: "",
    wt1Li4: "",
    wt2Li4: "",
    wt1Li5: "",
    wt2Li5: "",
    wt1Li6: "",
    wt2Li6: "",
    wt1Li7: "",
    wt2Li7: "",
    wt1Li8: "",
    wt2Li8: "",
    wt1Li9: "",
    wt2Li9: "",
    wt1Li10: "",
    wt2Li10: "",
    wt1Li11: "",
    wt2Li11: "",
    wt1Li12: "",
    wt2Li12: "",
    wt1Li13: "",
    wt2Li13: "",

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
        placeholder="Heading"
        name="heading"
        value={sectionDataSingle.heading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
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

      <input
        placeholder="e1h1"
        name="e1h1"
        value={sectionDataSingle.e1h1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="eh1"
        name="eh1"
        value={sectionDataSingle.eh1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h1Lih"
        name="es1h1Lih"
        value={sectionDataSingle.es1h1Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h1Li1"
        name="es1h1Li1"
        value={sectionDataSingle.es1h1Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h1Li2"
        name="es1h1Li2"
        value={sectionDataSingle.es1h1Li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h1Li3"
        name="es1h1Li3"
        value={sectionDataSingle.es1h1Li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h2Lih"
        name="es1h2Lih"
        value={sectionDataSingle.es1h2Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h2Li1"
        name="es1h2Li1"
        value={sectionDataSingle.es1h2Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h3Lih"
        name="es1h3Lih"
        value={sectionDataSingle.es1h3Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h3Li1"
        name="es1h3Li1"
        value={sectionDataSingle.es1h3Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h4Lih"
        name="es1h4Lih"
        value={sectionDataSingle.es1h4Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h4Li1"
        name="es1h4Li1"
        value={sectionDataSingle.es1h4Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h5Lih"
        name="es1h5Lih"
        value={sectionDataSingle.es1h5Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h5Li1"
        name="es1h5Li1"
        value={sectionDataSingle.es1h5Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h5Li2"
        name="es1h5Li2"
        value={sectionDataSingle.es1h5Li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h5Li3"
        name="es1h5Li3"
        value={sectionDataSingle.es1h5Li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h5Li4"
        name="es1h5Li4"
        value={sectionDataSingle.es1h5Li4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h5Li5"
        name="es1h5Li5"
        value={sectionDataSingle.es1h5Li5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es1h5Li6"
        name="es1h5Li6"
        value={sectionDataSingle.es1h5Li6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="e2h2"
        name="e2h2"
        value={sectionDataSingle.e2h2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="eh2"
        name="eh2"
        value={sectionDataSingle.eh2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h6Lih"
        name="es2h6Lih"
        value={sectionDataSingle.es2h6Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h6Li1"
        name="es2h6Li1"
        value={sectionDataSingle.es2h6Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h6Li2"
        name="es2h6Li2"
        value={sectionDataSingle.es2h6Li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h6Li3"
        name="es2h6Li3"
        value={sectionDataSingle.es2h6Li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h7Lih"
        name="es2h7Lih"
        value={sectionDataSingle.es2h7Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h7Li1"
        name="es2h7Li1"
        value={sectionDataSingle.es2h7Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h8Lih"
        name="es2h8Lih"
        value={sectionDataSingle.es2h8Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h8Lih"
        name="es2h8Lih"
        value={sectionDataSingle.es2h8Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h9Lih"
        name="es2h9Lih"
        value={sectionDataSingle.es2h9Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h9Lih"
        name="es2h9Lih"
        value={sectionDataSingle.es2h9Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h10Lih"
        name="es2h10Lih"
        value={sectionDataSingle.es2h10Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h10Li1"
        name="es2h10Li1"
        value={sectionDataSingle.es2h10Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h11Ph"
        name="es2h11Ph"
        value={sectionDataSingle.es2h11Ph}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h11P1"
        name="es2h11P1"
        value={sectionDataSingle.es2h11P1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Lih"
        name="es2h12Lih"
        value={sectionDataSingle.es2h12Lih}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Li1"
        name="es2h12Li1"
        value={sectionDataSingle.es2h12Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Li2"
        name="es2h12Li2"
        value={sectionDataSingle.es2h12Li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Li3"
        name="es2h12Li3"
        value={sectionDataSingle.es2h12Li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Li4"
        name="es2h12Li4"
        value={sectionDataSingle.es2h12Li4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Li5"
        name="es2h12Li5"
        value={sectionDataSingle.es2h12Li5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Li6"
        name="es2h12Li6"
        value={sectionDataSingle.es2h12Li6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Li7"
        name="es2h12Li7"
        value={sectionDataSingle.es2h12Li7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="es2h12Li8"
        name="es2h12Li8"
        value={sectionDataSingle.es2h12Li8}
        onChange={handleInputChange}
        disabled={!editMode}
      />

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

      <div className={styles.twoColumnsTable}>
        <div>
          <textarea
            placeholder="WageTableHead1"
            name="WageTableHead1"
            value={sectionDataSingle.WageTableHead1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li1"
            name="wt1Li1"
            value={sectionDataSingle.wt1Li1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li2"
            name="wt1Li2"
            value={sectionDataSingle.wt1Li2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li3"
            name="wt1Li3"
            value={sectionDataSingle.wt1Li3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li4"
            name="wt1Li4"
            value={sectionDataSingle.wt1Li4 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li5"
            name="wt1Li5"
            value={sectionDataSingle.wt1Li5 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li6"
            name="wt1Li6"
            value={sectionDataSingle.wt1Li6 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li7"
            name="wt1Li7"
            value={sectionDataSingle.wt1Li7 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li8"
            name="wt1Li8"
            value={sectionDataSingle.wt1Li8 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li9"
            name="wt1Li9"
            value={sectionDataSingle.wt1Li9 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li10"
            name="wt1Li10"
            value={sectionDataSingle.wt1Li10 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li11"
            name="wt1Li11"
            value={sectionDataSingle.wt1Li11 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li12"
            name="wt1Li12"
            value={sectionDataSingle.wt1Li12 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt1Li13"
            name="wt1Li13"
            value={sectionDataSingle.wt1Li13 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>

        <div>
          <textarea
            placeholder="WageTableHead2"
            name="WageTableHead2"
            value={sectionDataSingle.WageTableHead2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li1"
            name="wt2Li1"
            value={sectionDataSingle.wt2Li1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li2"
            name="wt2Li2"
            value={sectionDataSingle.wt2Li2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li3"
            name="wt2Li3"
            value={sectionDataSingle.wt2Li3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li4"
            name="wt2Li4"
            value={sectionDataSingle.wt2Li4 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li5"
            name="wt2Li5"
            value={sectionDataSingle.wt2Li5 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li6"
            name="wt2Li6"
            value={sectionDataSingle.wt2Li6 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li7"
            name="wt2Li7"
            value={sectionDataSingle.wt2Li7 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li8"
            name="wt2Li8"
            value={sectionDataSingle.wt2Li8 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li9"
            name="wt2Li9"
            value={sectionDataSingle.wt2Li9 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li10"
            name="wt2Li10"
            value={sectionDataSingle.wt2Li10 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li11"
            name="wt2Li11"
            value={sectionDataSingle.wt2Li11 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li12"
            name="wt2Li12"
            value={sectionDataSingle.wt2Li12 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="wt2Li13"
            name="wt2Li13"
            value={sectionDataSingle.wt2Li13 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      </div>

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

export default CommonLawPartnerTemporaryContent;
