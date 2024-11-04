import { useState, useEffect } from "react";
import styles from "../styles/Admin.module.css";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const CategoryBased = () => {
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
    aboutHeading: "",
    aboutDescription: "",
    drawsHeading: "",
    draws: ["", "", "", "", "", "", "", ""],
    workHeading: "",
    workDescription: "",
    eligibilityHeading: "",
    eligibilitySubHeading: "",
    eligibilityDescription: "",
    eligibilities: ["", "", "", ""],
    benefitsHeading: "",
    benefits: ["", "", "", ""],
    applyHeading: "",
    applyDescription: "",
    applies: [
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
      { name: "", link: "" },
    ],
    refusalHeading: "",
    refusalDescription: "",
    refusals: ["", "", "", "", "", "", "", ""],
    drawHeadingBottom: "",
    drawHeadingLink: "",
    bookHeading: "",
    bookSubHeading: "",
    bookDescription: "",
    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",
  });

  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/category-based")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const fetchedData = data[0];

          // Transform individual fields into arrays
          const transformedData = {
            ...fetchedData,
            draws: [
              fetchedData.draw1,
              fetchedData.draw2,
              fetchedData.draw3,
              fetchedData.draw4,
              fetchedData.draw5,
              fetchedData.draw6,
              fetchedData.draw7,
              fetchedData.draw8,
            ],
            eligibilities: [
              fetchedData.e1,
              fetchedData.e2,
              fetchedData.e3,
              fetchedData.e4,
            ],
            benefits: [
              fetchedData.b1,
              fetchedData.b2,
              fetchedData.b3,
              fetchedData.b4,
            ],
            applies: [
              { name: fetchedData.a1, link: fetchedData.a1l },
              { name: fetchedData.a2, link: fetchedData.a2l },
              { name: fetchedData.a3, link: fetchedData.a3l },
              { name: fetchedData.a4, link: fetchedData.a4l },
              { name: fetchedData.a5, link: fetchedData.a5l },
              { name: fetchedData.a6, link: fetchedData.a6l },
            ],
            refusals: [
              fetchedData.r1,
              fetchedData.r2,
              fetchedData.r3,
              fetchedData.r4,
              fetchedData.r5,
              fetchedData.r6,
              fetchedData.r7,
              fetchedData.r8,
            ],
          };

          setSectionData(transformedData);
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

  const handleArrayChange = (e, index, arrayName, field = null) => {
    const updatedArray = sectionData[arrayName].map((item, i) =>
      i === index
        ? field
          ? { ...item, [field]: e.target.value }
          : e.target.value
        : item
    );
    setSectionData({ ...sectionData, [arrayName]: updatedArray });
  };

  const handleUpdateClick = () => {
    // Convert arrays back to individual fields for update
    const updateData = {
      ...sectionData,
      draw1: sectionData.draws[0],
      draw2: sectionData.draws[1],
      draw3: sectionData.draws[2],
      draw4: sectionData.draws[3],
      draw5: sectionData.draws[4],
      draw6: sectionData.draws[5],
      draw7: sectionData.draws[6],
      draw8: sectionData.draws[7],
      e1: sectionData.eligibilities[0],
      e2: sectionData.eligibilities[1],
      e3: sectionData.eligibilities[2],
      e4: sectionData.eligibilities[3],
      b1: sectionData.benefits[0],
      b2: sectionData.benefits[1],
      b3: sectionData.benefits[2],
      b4: sectionData.benefits[3],
      a1: sectionData.applies[0].name,
      a1l: sectionData.applies[0].link,
      a2: sectionData.applies[1].name,
      a2l: sectionData.applies[1].link,
      a3: sectionData.applies[2].name,
      a3l: sectionData.applies[2].link,
      a4: sectionData.applies[3].name,
      a4l: sectionData.applies[3].link,
      a5: sectionData.applies[4].name,
      a5l: sectionData.applies[4].link,
      a6: sectionData.applies[5].name,
      a6l: sectionData.applies[5].link,
      r1: sectionData.refusals[0],
      r2: sectionData.refusals[1],
      r3: sectionData.refusals[2],
      r4: sectionData.refusals[3],
      r5: sectionData.refusals[4],
      r6: sectionData.refusals[5],
      r7: sectionData.refusals[6],
      r8: sectionData.refusals[7],
    };

    fetch(
      `https://brightlight-node.onrender.com/category-based/${sectionData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
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

      {/* About Section */}
      <input
        placeholder="About Heading"
        name="aboutHeading"
        value={sectionData.aboutHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="About Description"
        name="aboutDescription"
        value={sectionData.aboutDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Draws Section */}
      <input
        placeholder="Draws Heading"
        name="drawsHeading"
        value={sectionData.drawsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {sectionData.draws.map((draw, index) => (
        <input
          key={index}
          placeholder={`Draw ${index + 1}`}
          value={draw}
          onChange={(e) => handleArrayChange(e, index, "draws")}
          disabled={!editMode}
        />
      ))}

      {/* Work Section */}
      <input
        placeholder="Work Heading"
        name="workHeading"
        value={sectionData.workHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Work Description"
        name="workDescription"
        value={sectionData.workDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Eligibility Section */}
      <input
        placeholder="Eligibility Heading"
        name="eligibilityHeading"
        value={sectionData.eligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Eligibility Sub Heading"
        name="eligibilitySubHeading"
        value={sectionData.eligibilitySubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Description"
        name="eligibilityDescription"
        value={sectionData.eligibilityDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {sectionData.eligibilities.map((eligibility, index) => (
        <input
          key={index}
          placeholder={`Eligibility ${index + 1}`}
          value={eligibility}
          onChange={(e) => handleArrayChange(e, index, "eligibilities")}
          disabled={!editMode}
        />
      ))}

      {/* Benefits Section */}
      <input
        placeholder="Benefits Heading"
        name="benefitsHeading"
        value={sectionData.benefitsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {sectionData.benefits.map((benefit, index) => (
        <input
          key={index}
          placeholder={`Benefit ${index + 1}`}
          value={benefit}
          onChange={(e) => handleArrayChange(e, index, "benefits")}
          disabled={!editMode}
        />
      ))}

      {/* Apply Section */}
      <input
        placeholder="Apply Heading"
        name="applyHeading"
        value={sectionData.applyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Apply Description"
        name="applyDescription"
        value={sectionData.applyDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {sectionData.applies.map((apply, index) => (
        <div key={index}>
          <input
            placeholder={`Apply Name ${index + 1}`}
            value={apply.name}
            onChange={(e) => handleArrayChange(e, index, "applies", "name")}
            disabled={!editMode}
          />
          <input
            placeholder={`Apply Link ${index + 1}`}
            value={apply.link}
            onChange={(e) => handleArrayChange(e, index, "applies", "link")}
            disabled={!editMode}
          />
        </div>
      ))}

      {/* Refusal Section */}
      <input
        placeholder="Refusal Heading"
        name="refusalHeading"
        value={sectionData.refusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal Description"
        name="refusalDescription"
        value={sectionData.refusalDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      {sectionData.refusals.map((refusal, index) => (
        <input
          key={index}
          placeholder={`Refusal ${index + 1}`}
          value={refusal}
          onChange={(e) => handleArrayChange(e, index, "refusals")}
          disabled={!editMode}
        />
      ))}

      {/* Draw Heading Bottom */}
      <input
        placeholder="Draw Heading Bottom"
        name="drawHeadingBottom"
        value={sectionData.drawHeadingBottom || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Draw Heading Link */}
      <input
        placeholder="Draw Heading Link"
        name="drawHeadingLink"
        value={sectionData.drawHeadingLink || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      {/* Book Section */}
      <input
        placeholder="Book Heading"
        name="bookHeading"
        value={sectionData.bookHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Book Sub Heading"
        name="bookSubHeading"
        value={sectionData.bookSubHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Book Description"
        name="bookDescription"
        value={sectionData.bookDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading01"
        value={sectionData.WhyChooseUsHeading01 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 1"
        name="wcu1"
        value={sectionData.wcu1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 2"
        name="wcu2"
        value={sectionData.wcu2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us Point 3"
        name="wcu3"
        value={sectionData.wcu3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 4"
        name="wcu4"
        value={sectionData.wcu4 || ""}
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
            onClick={() => setEditMode(!editMode)}
            alt="Edit"
          />
        )}
      </div>
    </div>
  );
};

export default CategoryBased;
