import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const StemTargetedDrawContent = () => {
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
    stemTargetedDrawHeading: "",
    stemTargetedDrawPara1: "",
    stemTargetedDrawPara2: "",

    EligibilityFirstHeading: "",
    EligFirstSubHead: "",
    EligPara1: "",
    EligPara2: "",
    EligPara2Li1: "",
    EligPara2Li2: "",
    EligPara2Li3: "",
    EligPara3: "",

    ImportantThingsHeading: "",
    ImportantThingsPara: "",
    itH: "",
    it1: "",
    it2: "",
    ImportantThingsPara2: "",

    EligCritHeading: "",
    EligCritSubHeading: "",
    ec1: "",
    ec2: "",
    ec3: "",

    ExpressEntryHeading: "",
    ExpressEntryPara: "",

    StemEligTableHeading: "",
    stT1h1: "",
    stT1Li1: "",
    stT1Li2: "",
    stT1Li3: "",
    stT1Li4: "",
    stT1Li5: "",
    stT1Li6: "",
    stT1Li7: "",

    stT1Li8: "",
    stT1Li9: "",
    stT1Li10: "",
    stT1Li11: "",
    stT1Li12: "",
    stT1Li13: "",
    stT1Li14: "",
    stT1Li15: "",
    stT1Li16: "",
    stT1Li17: "",
    stT1Li18: "",
    stT1Li19: "",
    stT1Li20: "",
    stT1Li21: "",
    stT1Li22: "",
    stT1Li23: "",
    stT1Li24: "",

    stT2h2: "",
    stT2Li1: "",
    stT2Li2: "",
    stT2Li3: "",
    stT2Li4: "",
    stT2Li5: "",
    stT2Li6: "",
    stT2Li7: "",
    stT2Li8: "",
    stT2Li9: "",
    stT2Li10: "",
    stT2Li11: "",
    stT2Li12: "",
    stT2Li13: "",
    stT2Li14: "",
    stT2Li15: "",
    stT2Li16: "",
    stT2Li17: "",
    stT2Li18: "",
    stT2Li19: "",
    stT2Li20: "",
    stT2Li21: "",
    stT2Li22: "",
    stT2Li23: "",
    stT2Li24: "",

    // TEER Categories
    stT3h3: "",
    stT3Li1: "",
    stT3Li2: "",
    stT3Li3: "",
    stT3Li4: "",
    stT3Li5: "",
    stT3Li6: "",
    stT3Li7: "",
    stT3Li8: "",
    stT3Li9: "",
    stT3Li10: "",
    stT3Li11: "",
    stT3Li12: "",
    stT3Li13: "",
    stT3Li14: "",
    stT3Li15: "",
    stT3Li16: "",
    stT3Li17: "",
    stT3Li18: "",
    stT3Li19: "",
    stT3Li20: "",
    stT3Li21: "",
    stT3Li22: "",
    stT3Li23: "",
    stT3Li24: "",

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
      `https://brightlight-node.onrender.com/stemTagatedDraw/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/stemTagatedDraw")
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
        placeholder="STEM Targeted Draw Heading"
        name="stemTargetedDrawHeading"
        value={sectionDataSingle.stemTargetedDrawHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="STEM Targeted Draw Paragraph 1"
        name="stemTargetedDrawPara1"
        value={sectionDataSingle.stemTargetedDrawPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="STEM Targeted Draw Paragraph 2"
        name="stemTargetedDrawPara2"
        value={sectionDataSingle.stemTargetedDrawPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility First Heading"
        name="EligibilityFirstHeading"
        value={sectionDataSingle.EligibilityFirstHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility First Sub Heading"
        name="EligFirstSubHead"
        value={sectionDataSingle.EligFirstSubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Paragraph 1"
        name="EligPara1"
        value={sectionDataSingle.EligPara1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Paragraph 2"
        name="EligPara2"
        value={sectionDataSingle.EligPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Paragraph 2 Point 1"
        name="EligPara2Li1"
        value={sectionDataSingle.EligPara2Li1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Paragraph 2 Point 2"
        name="EligPara2Li2"
        value={sectionDataSingle.EligPara2Li2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Paragraph 2 Point 3"
        name="EligPara2Li3"
        value={sectionDataSingle.EligPara2Li3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Paragraph 3"
        name="EligPara3"
        value={sectionDataSingle.EligPara3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Important Things Heading"
        name="ImportantThingsHeading"
        value={sectionDataSingle.ImportantThingsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Important Things Paragraph"
        name="ImportantThingsPara"
        value={sectionDataSingle.ImportantThingsPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Important Things Heading (itH)"
        name="itH"
        value={sectionDataSingle.itH || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Important Things Point 1"
        name="it1"
        value={sectionDataSingle.it1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Important Things Point 2"
        name="it2"
        value={sectionDataSingle.it2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Important Things Paragraph 2"
        name="ImportantThingsPara2"
        value={sectionDataSingle.ImportantThingsPara2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Criteria Heading"
        name="EligCritHeading"
        value={sectionDataSingle.EligCritHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Criteria Sub Heading"
        name="EligCritSubHeading"
        value={sectionDataSingle.EligCritSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 1"
        name="ec1"
        value={sectionDataSingle.ec1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 2"
        name="ec2"
        value={sectionDataSingle.ec2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Criteria Point 3"
        name="ec3"
        value={sectionDataSingle.ec3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Express Entry Heading"
        name="ExpressEntryHeading"
        value={sectionDataSingle.ExpressEntryHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Express Entry Paragraph"
        name="ExpressEntryPara"
        value={sectionDataSingle.ExpressEntryPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="STEM Eligibility Table Heading"
        name="StemEligTableHeading"
        value={sectionDataSingle.StemEligTableHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <div className={styles.threeColumnsTable}>
        <div>
          <input
            placeholder="STEM Table Heading 1"
            name="stT1h1"
            value={sectionDataSingle.stT1h1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 1"
            name="stT1Li1"
            value={sectionDataSingle.stT1Li1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 2"
            name="stT1Li2"
            value={sectionDataSingle.stT1Li2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 3"
            name="stT1Li3"
            value={sectionDataSingle.stT1Li3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 4"
            name="stT1Li4"
            value={sectionDataSingle.stT1Li4 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 5"
            name="stT1Li5"
            value={sectionDataSingle.stT1Li5 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 6"
            name="stT1Li6"
            value={sectionDataSingle.stT1Li6 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 7"
            name="stT1Li7"
            value={sectionDataSingle.stT1Li7 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="STEM Table List Item 8"
            name="stT1Li8"
            value={sectionDataSingle.stT1Li8 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 9"
            name="stT1Li9"
            value={sectionDataSingle.stT1Li9 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 10"
            name="stT1Li10"
            value={sectionDataSingle.stT1Li10 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 11"
            name="stT1Li11"
            value={sectionDataSingle.stT1Li11 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 12"
            name="stT1Li12"
            value={sectionDataSingle.stT1Li12 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 13"
            name="stT1Li13"
            value={sectionDataSingle.stT1Li13 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 14"
            name="stT1Li14"
            value={sectionDataSingle.stT1Li14 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 15"
            name="stT1Li15"
            value={sectionDataSingle.stT1Li15 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 16"
            name="stT1Li16"
            value={sectionDataSingle.stT1Li16 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 17"
            name="stT1Li17"
            value={sectionDataSingle.stT1Li17 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 18"
            name="stT1Li18"
            value={sectionDataSingle.stT1Li18 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 19"
            name="stT1Li19"
            value={sectionDataSingle.stT1Li19 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 20"
            name="stT1Li20"
            value={sectionDataSingle.stT1Li20 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 21"
            name="stT1Li21"
            value={sectionDataSingle.stT1Li21 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 22"
            name="stT1Li22"
            value={sectionDataSingle.stT1Li22 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 23"
            name="stT1Li23"
            value={sectionDataSingle.stT1Li23 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table List Item 24"
            name="stT1Li24"
            value={sectionDataSingle.stT1Li24 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>

        <div>
          <input
            placeholder="STEM Table 2 Heading"
            name="stT2h2"
            value={sectionDataSingle.stT2h2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="STEM Table 2 List Item 1"
            name="stT2Li1"
            value={sectionDataSingle.stT2Li1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 2"
            name="stT2Li2"
            value={sectionDataSingle.stT2Li2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 3"
            name="stT2Li3"
            value={sectionDataSingle.stT2Li3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 4"
            name="stT2Li4"
            value={sectionDataSingle.stT2Li4 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 5"
            name="stT2Li5"
            value={sectionDataSingle.stT2Li5 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 6"
            name="stT2Li6"
            value={sectionDataSingle.stT2Li6 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 7"
            name="stT2Li7"
            value={sectionDataSingle.stT2Li7 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 8"
            name="stT2Li8"
            value={sectionDataSingle.stT2Li8 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 9"
            name="stT2Li9"
            value={sectionDataSingle.stT2Li9 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 10"
            name="stT2Li10"
            value={sectionDataSingle.stT2Li10 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 11"
            name="stT2Li11"
            value={sectionDataSingle.stT2Li11 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 12"
            name="stT2Li12"
            value={sectionDataSingle.stT2Li12 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 13"
            name="stT2Li13"
            value={sectionDataSingle.stT2Li13 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 14"
            name="stT2Li14"
            value={sectionDataSingle.stT2Li14 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 15"
            name="stT2Li15"
            value={sectionDataSingle.stT2Li15 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 16"
            name="stT2Li16"
            value={sectionDataSingle.stT2Li16 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 17"
            name="stT2Li17"
            value={sectionDataSingle.stT2Li17 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 18"
            name="stT2Li18"
            value={sectionDataSingle.stT2Li18 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 19"
            name="stT2Li19"
            value={sectionDataSingle.stT2Li19 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 20"
            name="stT2Li20"
            value={sectionDataSingle.stT2Li20 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 21"
            name="stT2Li21"
            value={sectionDataSingle.stT2Li21 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 22"
            name="stT2Li22"
            value={sectionDataSingle.stT2Li22 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 23"
            name="stT2Li23"
            value={sectionDataSingle.stT2Li23 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 2 List Item 24"
            name="stT2Li24"
            value={sectionDataSingle.stT2Li24 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>

        <div>
          <input
            placeholder="STEM Table 3 Heading"
            name="stT3h3"
            value={sectionDataSingle.stT3h3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />

          <textarea
            placeholder="STEM Table 3 List Item 1"
            name="stT3Li1"
            value={sectionDataSingle.stT3Li1 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 2"
            name="stT3Li2"
            value={sectionDataSingle.stT3Li2 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 3"
            name="stT3Li3"
            value={sectionDataSingle.stT3Li3 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 4"
            name="stT3Li4"
            value={sectionDataSingle.stT3Li4 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 5"
            name="stT3Li5"
            value={sectionDataSingle.stT3Li5 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 6"
            name="stT3Li6"
            value={sectionDataSingle.stT3Li6 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 7"
            name="stT3Li7"
            value={sectionDataSingle.stT3Li7 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 8"
            name="stT3Li8"
            value={sectionDataSingle.stT3Li8 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 9"
            name="stT3Li9"
            value={sectionDataSingle.stT3Li9 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 10"
            name="stT3Li10"
            value={sectionDataSingle.stT3Li10 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 11"
            name="stT3Li11"
            value={sectionDataSingle.stT3Li11 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 12"
            name="stT3Li12"
            value={sectionDataSingle.stT3Li12 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 13"
            name="stT3Li13"
            value={sectionDataSingle.stT3Li13 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 14"
            name="stT3Li14"
            value={sectionDataSingle.stT3Li14 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 15"
            name="stT3Li15"
            value={sectionDataSingle.stT3Li15 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 16"
            name="stT3Li16"
            value={sectionDataSingle.stT3Li16 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 17"
            name="stT3Li17"
            value={sectionDataSingle.stT3Li17 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 18"
            name="stT3Li18"
            value={sectionDataSingle.stT3Li18 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 19"
            name="stT3Li19"
            value={sectionDataSingle.stT3Li19 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 20"
            name="stT3Li20"
            value={sectionDataSingle.stT3Li20 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 21"
            name="stT3Li21"
            value={sectionDataSingle.stT3Li21 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 22"
            name="stT3Li22"
            value={sectionDataSingle.stT3Li22 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 23"
            name="stT3Li23"
            value={sectionDataSingle.stT3Li23 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <textarea
            placeholder="STEM Table 3 List Item 24"
            name="stT3Li24"
            value={sectionDataSingle.stT3Li24 || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
        </div>
      </div>

      {/* Still Not Sure Section */}
      <textarea
        placeholder="Still Not Sure Heading"
        name="StillNotHeading"
        value={sectionDataSingle.StillNotHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Item 1"
        name="s1"
        value={sectionDataSingle.s1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Still Not Sure Item 2"
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

export default StemTargetedDrawContent;
