import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const HeathcareTargetedDrawContent = () => {
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
    healthcareTargatedDrawHeading: "",
    healthcareTargatedDrawPara: "",

    EligibilityCriteriaHeading: "",
    EligPara1: "",
    EligPara2: "",
    EligPara2Li1: "",
    EligPara2Li2: "",
    EligPara2Li3: "",
    EligPara3: "",
    EligPara4: "",
    EligPara5: "",
    EligPara6: "",

    EligibleOccupationsHeading: "",
    EligibleOccupationsPara: "",
    eo1: "",
    eo2: "",

    EligibleOccupTableHeading: "",
    EligibleOccupTableHead1: "",
    eoT1Li1: "",
    eoT1Li2: "",
    eoT1Li3: "",
    eoT1Li4: "",
    eoT1Li5: "",
    eoT1Li6: "",
    eoT1Li7: "",
    eoT1Li8: "",
    eoT1Li9: "",
    eoT1Li10: "",

    eoT1Li11: "",
    eoT1Li12: "",
    eoT1Li13: "",
    eoT1Li14: "",
    eoT1Li15: "",
    eoT1Li16: "",
    eoT1Li17: "",
    eoT1Li18: "",
    eoT1Li19: "",
    eoT1Li20: "",
    eoT1Li21: "",
    eoT1Li22: "",
    eoT1Li23: "",
    eoT1Li24: "",
    eoT1Li25: "",
    eoT1Li26: "",
    eoT1Li27: "",
    eoT1Li28: "",
    eoT1Li29: "",
    eoT1Li30: "",
    eoT1Li31: "",
    eoT1Li32: "",
    eoT1Li33: "",
    eoT1Li34: "",
    eoT1Li35: "",

    EligibleOccupTableHead2: "",
    eoT2Li1: "",
    eoT2Li2: "",
    eoT2Li3: "",
    eoT2Li4: "",
    eoT2Li5: "",
    eoT2Li6: "",
    eoT2Li7: "",
    eoT2Li8: "",
    eoT2Li9: "",
    eoT2Li10: "",
    eoT2Li11: "",
    eoT2Li12: "",
    eoT2Li13: "",
    eoT2Li14: "",
    eoT2Li15: "",
    eoT2Li16: "",
    eoT2Li17: "",
    eoT2Li18: "",
    eoT2Li19: "",
    eoT2Li20: "",
    eoT2Li21: "",
    eoT2Li22: "",
    eoT2Li23: "",
    eoT2Li24: "",
    eoT2Li25: "",
    eoT2Li26: "",
    eoT2Li27: "",
    eoT2Li28: "",
    eoT2Li29: "",
    eoT2Li30: "",
    eoT2Li31: "",
    eoT2Li32: "",
    eoT2Li33: "",
    eoT2Li34: "",
    eoT2Li35: "",

    EligibleOccupTableHead3: "",
    eoT3Li1: "",
    eoT3Li2: "",
    eoT3Li3: "",
    eoT3Li4: "",
    eoT3Li5: "",
    eoT3Li6: "",
    eoT3Li7: "",
    eoT3Li8: "",
    eoT3Li9: "",
    eoT3Li10: "",
    eoT3Li11: "",
    eoT3Li12: "",
    eoT3Li13: "",
    eoT3Li14: "",
    eoT3Li15: "",
    eoT3Li16: "",
    eoT3Li17: "",
    eoT3Li18: "",
    eoT3Li19: "",
    eoT3Li20: "",
    eoT3Li21: "",
    eoT3Li22: "",
    eoT3Li23: "",
    eoT3Li24: "",
    eoT3Li25: "",
    eoT3Li26: "",
    eoT3Li27: "",
    eoT3Li28: "",
    eoT3Li29: "",
    eoT3Li30: "",
    eoT3Li31: "",
    eoT3Li32: "",
    eoT3Li33: "",
    eoT3Li34: "",
    eoT3Li35: "",

    ExpressEntryHealthcareHeading: "",
    hehc1: "",

    HowApplyHeading: "",
    ha1: "",
    ha2: "",
    ha3: "",
    ha4: "",
    ha5: "",
    haRemb: "",

    StillNotHeading: "",
    s1: "",
    s2: "",

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
      `https://brightlight-node.onrender.com/healthcareTargatedDraw/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/healthcareTargatedDraw")
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
        placeholder="Healthcare Targeted Draw Heading"
        name="healthcareTargatedDrawHeading"
        value={sectionDataSingle.healthcareTargatedDrawHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Healthcare Targeted Draw Paragraph"
        name="healthcareTargatedDrawPara"
        value={sectionDataSingle.healthcareTargatedDrawPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="EligibilityCriteriaHeading"
        value={sectionDataSingle.EligibilityCriteriaHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 1"
        name="EligPara1"
        value={sectionDataSingle.EligPara1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 2"
        name="EligPara2"
        value={sectionDataSingle.EligPara2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility List Item 1"
        name="EligPara2Li1"
        value={sectionDataSingle.EligPara2Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility List Item 2"
        name="EligPara2Li2"
        value={sectionDataSingle.EligPara2Li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility List Item 3"
        name="EligPara2Li3"
        value={sectionDataSingle.EligPara2Li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 3"
        name="EligPara3"
        value={sectionDataSingle.EligPara3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 4"
        name="EligPara4"
        value={sectionDataSingle.EligPara4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 5"
        name="EligPara5"
        value={sectionDataSingle.EligPara5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Paragraph 6"
        name="EligPara6"
        value={sectionDataSingle.EligPara6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupations Heading"
        name="EligibleOccupationsHeading"
        value={sectionDataSingle.EligibleOccupationsHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligible Occupations Paragraph"
        name="EligibleOccupationsPara"
        value={sectionDataSingle.EligibleOccupationsPara}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Requirement 1"
        name="eo1"
        value={sectionDataSingle.eo1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Requirement 2"
        name="eo2"
        value={sectionDataSingle.eo2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Heading"
        name="EligibleOccupTableHeading"
        value={sectionDataSingle.EligibleOccupTableHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />
       <div className={styles.threeColumnsTable}>
        <div>
        <input
        placeholder="Eligible Occupation Table Head 1"
        name="EligibleOccupTableHead1"
        value={sectionDataSingle.EligibleOccupTableHead1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 1"
        name="eoT1Li1"
        value={sectionDataSingle.eoT1Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 2"
        name="eoT1Li2"
        value={sectionDataSingle.eoT1Li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 3"
        name="eoT1Li3"
        value={sectionDataSingle.eoT1Li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 4"
        name="eoT1Li4"
        value={sectionDataSingle.eoT1Li4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 5"
        name="eoT1Li5"
        value={sectionDataSingle.eoT1Li5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 6"
        name="eoT1Li6"
        value={sectionDataSingle.eoT1Li6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 7"
        name="eoT1Li7"
        value={sectionDataSingle.eoT1Li7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 8"
        name="eoT1Li8"
        value={sectionDataSingle.eoT1Li8}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 9"
        name="eoT1Li9"
        value={sectionDataSingle.eoT1Li9}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 10"
        name="eoT1Li10"
        value={sectionDataSingle.eoT1Li10}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 11"
        name="eoT1Li11"
        value={sectionDataSingle.eoT1Li11}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 12"
        name="eoT1Li12"
        value={sectionDataSingle.eoT1Li12}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 13"
        name="eoT1Li13"
        value={sectionDataSingle.eoT1Li13}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 14"
        name="eoT1Li14"
        value={sectionDataSingle.eoT1Li14}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 15"
        name="eoT1Li15"
        value={sectionDataSingle.eoT1Li15}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 16"
        name="eoT1Li16"
        value={sectionDataSingle.eoT1Li16}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 17"
        name="eoT1Li17"
        value={sectionDataSingle.eoT1Li17}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 18"
        name="eoT1Li18"
        value={sectionDataSingle.eoT1Li18}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 19"
        name="eoT1Li19"
        value={sectionDataSingle.eoT1Li19}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 20"
        name="eoT1Li20"
        value={sectionDataSingle.eoT1Li20}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 21"
        name="eoT1Li21"
        value={sectionDataSingle.eoT1Li21}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 22"
        name="eoT1Li22"
        value={sectionDataSingle.eoT1Li22}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 23"
        name="eoT1Li23"
        value={sectionDataSingle.eoT1Li23}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 24"
        name="eoT1Li24"
        value={sectionDataSingle.eoT1Li24}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 25"
        name="eoT1Li25"
        value={sectionDataSingle.eoT1Li25}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 26"
        name="eoT1Li26"
        value={sectionDataSingle.eoT1Li26}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 27"
        name="eoT1Li27"
        value={sectionDataSingle.eoT1Li27}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 28"
        name="eoT1Li28"
        value={sectionDataSingle.eoT1Li28}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 29"
        name="eoT1Li29"
        value={sectionDataSingle.eoT1Li29}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 30"
        name="eoT1Li30"
        value={sectionDataSingle.eoT1Li30}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 31"
        name="eoT1Li31"
        value={sectionDataSingle.eoT1Li31}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 32"
        name="eoT1Li32"
        value={sectionDataSingle.eoT1Li32}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 33"
        name="eoT1Li33"
        value={sectionDataSingle.eoT1Li33}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 34"
        name="eoT1Li34"
        value={sectionDataSingle.eoT1Li34}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 35"
        name="eoT1Li35"
        value={sectionDataSingle.eoT1Li35}
        onChange={handleInputChange}
        disabled={!editMode}
      />

        </div>

        <div>
        <input
        placeholder="Eligible Occupation Table Head 2"
        name="EligibleOccupTableHead2"
        value={sectionDataSingle.EligibleOccupTableHead2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 1"
        name="eoT2Li1"
        value={sectionDataSingle.eoT2Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 2"
        name="eoT2Li2"
        value={sectionDataSingle.eoT2Li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 3"
        name="eoT2Li3"
        value={sectionDataSingle.eoT2Li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 4"
        name="eoT2Li4"
        value={sectionDataSingle.eoT2Li4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 5"
        name="eoT2Li5"
        value={sectionDataSingle.eoT2Li5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 6"
        name="eoT2Li6"
        value={sectionDataSingle.eoT2Li6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 7"
        name="eoT2Li7"
        value={sectionDataSingle.eoT2Li7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 8"
        name="eoT2Li8"
        value={sectionDataSingle.eoT2Li8}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 9"
        name="eoT2Li9"
        value={sectionDataSingle.eoT2Li9}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 10"
        name="eoT2Li10"
        value={sectionDataSingle.eoT2Li10}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 11"
        name="eoT2Li11"
        value={sectionDataSingle.eoT2Li11}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 12"
        name="eoT2Li12"
        value={sectionDataSingle.eoT2Li12}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 13"
        name="eoT2Li13"
        value={sectionDataSingle.eoT2Li13}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 14"
        name="eoT2Li14"
        value={sectionDataSingle.eoT2Li14}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 15"
        name="eoT2Li15"
        value={sectionDataSingle.eoT2Li15}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 16"
        name="eoT2Li16"
        value={sectionDataSingle.eoT2Li16}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 17"
        name="eoT2Li17"
        value={sectionDataSingle.eoT2Li17}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 18"
        name="eoT2Li18"
        value={sectionDataSingle.eoT2Li18}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 19"
        name="eoT2Li19"
        value={sectionDataSingle.eoT2Li19}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 20"
        name="eoT2Li20"
        value={sectionDataSingle.eoT2Li20}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 21"
        name="eoT2Li21"
        value={sectionDataSingle.eoT2Li21}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 22"
        name="eoT2Li22"
        value={sectionDataSingle.eoT2Li22}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 23"
        name="eoT2Li23"
        value={sectionDataSingle.eoT2Li23}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 24"
        name="eoT2Li24"
        value={sectionDataSingle.eoT2Li24}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 25"
        name="eoT2Li25"
        value={sectionDataSingle.eoT2Li25}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 26"
        name="eoT2Li26"
        value={sectionDataSingle.eoT2Li26}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 27"
        name="eoT2Li27"
        value={sectionDataSingle.eoT2Li27}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 28"
        name="eoT2Li28"
        value={sectionDataSingle.eoT2Li28}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 29"
        name="eoT2Li29"
        value={sectionDataSingle.eoT2Li29}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 30"
        name="eoT2Li30"
        value={sectionDataSingle.eoT2Li30}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 31"
        name="eoT2Li31"
        value={sectionDataSingle.eoT2Li31}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 32"
        name="eoT2Li32"
        value={sectionDataSingle.eoT2Li32}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 33"
        name="eoT2Li33"
        value={sectionDataSingle.eoT2Li33}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 34"
        name="eoT2Li34"
        value={sectionDataSingle.eoT2Li34}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 35"
        name="eoT2Li35"
        value={sectionDataSingle.eoT2Li35}
        onChange={handleInputChange}
        disabled={!editMode}
      />

        </div>

        <div>
        <input
        placeholder="Eligible Occupation Table Head 3"
        name="EligibleOccupTableHead3"
        value={sectionDataSingle.EligibleOccupTableHead3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 1"
        name="eoT3Li1"
        value={sectionDataSingle.eoT3Li1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 2"
        name="eoT3Li2"
        value={sectionDataSingle.eoT3Li2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 3"
        name="eoT3Li3"
        value={sectionDataSingle.eoT3Li3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 4"
        name="eoT3Li4"
        value={sectionDataSingle.eoT3Li4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 5"
        name="eoT3Li5"
        value={sectionDataSingle.eoT3Li5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 6"
        name="eoT3Li6"
        value={sectionDataSingle.eoT3Li6}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 7"
        name="eoT3Li7"
        value={sectionDataSingle.eoT3Li7}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 8"
        name="eoT3Li8"
        value={sectionDataSingle.eoT3Li8}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 9"
        name="eoT3Li9"
        value={sectionDataSingle.eoT3Li9}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 10"
        name="eoT3Li10"
        value={sectionDataSingle.eoT3Li10}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 11"
        name="eoT3Li11"
        value={sectionDataSingle.eoT3Li11}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 12"
        name="eoT3Li12"
        value={sectionDataSingle.eoT3Li12}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 13"
        name="eoT3Li13"
        value={sectionDataSingle.eoT3Li13}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 14"
        name="eoT3Li14"
        value={sectionDataSingle.eoT3Li14}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 15"
        name="eoT3Li15"
        value={sectionDataSingle.eoT3Li15}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 16"
        name="eoT3Li16"
        value={sectionDataSingle.eoT3Li16}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 17"
        name="eoT3Li17"
        value={sectionDataSingle.eoT3Li17}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 18"
        name="eoT3Li18"
        value={sectionDataSingle.eoT3Li18}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 19"
        name="eoT3Li19"
        value={sectionDataSingle.eoT3Li19}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 20"
        name="eoT3Li20"
        value={sectionDataSingle.eoT3Li20}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 21"
        name="eoT3Li21"
        value={sectionDataSingle.eoT3Li21}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 22"
        name="eoT3Li22"
        value={sectionDataSingle.eoT3Li22}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 23"
        name="eoT3Li23"
        value={sectionDataSingle.eoT3Li23}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 24"
        name="eoT3Li24"
        value={sectionDataSingle.eoT3Li24}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 25"
        name="eoT3Li25"
        value={sectionDataSingle.eoT3Li25}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 26"
        name="eoT3Li26"
        value={sectionDataSingle.eoT3Li26}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 27"
        name="eoT3Li27"
        value={sectionDataSingle.eoT3Li27}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 28"
        name="eoT3Li28"
        value={sectionDataSingle.eoT3Li28}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 29"
        name="eoT3Li29"
        value={sectionDataSingle.eoT3Li29}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 30"
        name="eoT3Li30"
        value={sectionDataSingle.eoT3Li30}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 31"
        name="eoT3Li31"
        value={sectionDataSingle.eoT3Li31}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 32"
        name="eoT3Li32"
        value={sectionDataSingle.eoT3Li32}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 33"
        name="eoT3Li33"
        value={sectionDataSingle.eoT3Li33}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 34"
        name="eoT3Li34"
        value={sectionDataSingle.eoT3Li34}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligible Occupation Table Item 35"
        name="eoT3Li35"
        value={sectionDataSingle.eoT3Li35}
        onChange={handleInputChange}
        disabled={!editMode}
      />
        </div>
       </div>

     
    
    

      <input
        placeholder="Express Entry Healthcare Heading"
        name="ExpressEntryHealthcareHeading"
        value={sectionDataSingle.ExpressEntryHealthcareHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Healthcare Item 1"
        name="hehc1"
        value={sectionDataSingle.hehc1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Item 1"
        name="ha1"
        value={sectionDataSingle.ha1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Item 2"
        name="ha2"
        value={sectionDataSingle.ha2}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Item 3"
        name="ha3"
        value={sectionDataSingle.ha3}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Item 4"
        name="ha4"
        value={sectionDataSingle.ha4}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Item 5"
        name="ha5"
        value={sectionDataSingle.ha5}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Apply Remarks"
        name="haRemb"
        value={sectionDataSingle.haRemb}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Item 1"
        name="s1"
        value={sectionDataSingle.s1}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Item 2"
        name="s2"
        value={sectionDataSingle.s2}
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

export default HeathcareTargetedDrawContent;
