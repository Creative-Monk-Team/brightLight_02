import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

let AddBlog = () => {
  const [textareaValue, setTextareaValue] = useState(
    "Your Selection Code Here"
  );
  const [ytIframe, setYtIframe] = useState(null);
  const [ytLink, setYtLink] = useState("");
  const [ytShortcode, setYtShortcode] = useState("");
  const [imageBase64, setImageBase64] = useState("");

  let [blogTag, setBlogTag] = useState("");

  const handleTagClick = (tag) => {
    let tagValue = "";

    switch (tag) {
      case "Bigger Heading":
        tagValue = "<h2>Your bigger heading goes here</h2>";
        break;
      case "Sub Heading":
        tagValue = "<h3>Your sub heading goes here</h3>";
        break;
      case "Bold":
        tagValue = "<strong>Your bold text goes here</strong>";
        break;
      case "Link_Text":
        tagValue =
          '<a href="https://example.com" target="_blank">Your Text Here</a>';
        break;
      case "Paragraph":
        tagValue = "<p>Your paragraph goes here</p>";
        break;
      case "Numbered List":
        tagValue = `
        <ol>
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
</ol>`.trim();
        break;
      case "Bullet Points List":
        tagValue = `
        <ul>
  <li>First point</li>
  <li>Second point</li>
  <li>Third point</li>
</ul>`.trim();
        break;
      default:
        break;
    }

    // Update the textarea value
    setTextareaValue(tagValue);
  };

  // Function to handle YouTube link change and iframe generation
  const handleYtLinkChange = (e) => {
    const link = e.target.value;
    setYtLink(link);

    const videoId = extractYtVideoId(link);
    if (videoId) {
      const iframeCode = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}"  frameborder="0" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      setYtShortcode(iframeCode);
      setYtIframe(
        <iframe
          width="560"
          height="315"
          loading="lazy"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video Preview"
        ></iframe>
      );
    } else {
      setYtShortcode("");
      setYtIframe(null); // Clear iframe if invalid video link
    }
  };

  // Regex to extract YouTube video ID from share link
  const extractYtVideoId = (link) => {
    const regExp =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = link.match(regExp);
    return match ? match[1] : null;
  };

  useEffect(() => {
    if (blogTag) {
      // Copy the blogTag to clipboard
      navigator.clipboard
        .writeText(blogTag)
        .then(() => {
          // Show success toast
          toast.success(`${blogTag} copied to clipboard`, {
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
        })
        .catch((err) => {
          console.error("Failed to copy text to clipboard", err);
        });
    }
  }, [blogTag]);

  // Function to handle copy button click for YouTube video shortcode
  const handleCopyClickYT = () => {
    const shortcode = ytShortcode;
    if (shortcode) {
      navigator.clipboard
        .writeText(shortcode)
        .then(() => {
          toast.success("YouTube Video Shortcode Copied", {
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
        })
        .catch((err) => {
          toast.error("Failed to copy the shortcode.", {
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
        });
    } else {
      toast.error("No YouTube video shortcode to copy.", {
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
    }
  };
  let handleFileChange = (event) => {
    let file = event.target.files[0];
    if (file) {
      let reader = new FileReader();
      reader.onloadend = () => {
        let base64Image = reader.result;
        setImageBase64(base64Image);
      };
      reader.readAsDataURL(file);
    }
  };

  let getImageShortcode = () => {
    return imageBase64 ? `<img src="${imageBase64}" />` : "";
  };
  let handleCopyClick = () => {
    let shortcode = getImageShortcode();
    if (shortcode) {
      navigator.clipboard
        .writeText(shortcode)
        .then(() => {
          toast.success("Image shortcode Copied", {
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
        })
        .catch((err) => {
          toast.error("Failed to copy the shortcode.", {
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
        });
    } else {
      toast.error("No image shortcode to copy.", {
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
    }
  };
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
    blog_heading: "",
    image: "",
    tag_1: "",
    tag_2: "",
    tag_3: "",
    custom_url: "",
    alt_tag: "",
    blog_content: "",
    metaTitle: "",
    metaDescription: "",
  });
  let [editMode, setEditMode] = useState(false);

  let handleInputChange = (e) => {
    if (e.target.type === "file") {
      let file = e.target.files[0];
      let reader = new FileReader();

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

  let handleEditClick = () => {
    setEditMode(true);
  };

  let handleAddClick = () => {
    // Create a FormData object
    let formData = new FormData();
    Object.keys(sectionDataSingle).forEach((key) => {
      formData.append(key, sectionDataSingle[key]);
    });

    fetch("https://brightlight-node.onrender.com/new-added-blogs", {
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
          blog_heading: "",
          image: "",
          tag_1: "",
          tag_2: "",
          tag_3: "",
          custom_url: "",
          alt_tag: "",
          blog_content: "",
          metaTitle: "",
          metaDescription: "",
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
        placeholder="Meta Title"
        name="metaTitle"
        value={sectionDataSingle.metaTitle || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Meta Description"
        name="metaDescription"
        value={sectionDataSingle.metaDescription || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        type="file"
        name="image"
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Blog Heading"
        name="blog_heading"
        value={sectionDataSingle.blog_heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Alt Tag"
        name="alt_tag"
        value={sectionDataSingle.alt_tag || ""}
        onChange={handleInputChange}
      />
      <div className={styles.blogContentTageSelectionArea}>
        <div className={styles.tagsArea}>
          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Express Entry")}
          >
            <p>Express Entry</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Permanent Residency")}
          >
            <p>Permanent Residency</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Category Based")}
          >
            <p>Category Based</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("CLB ILETS Calculator")}
          >
            <p>CLB ILETS Calculator</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Previous Draw History")}
          >
            <p>Previous Draw History</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Private Route")}
          >
            <p>Private Route</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("More Services")}
          >
            <p>More Services</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Privacy Policy")}
          >
            <p>Privacy Policy</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Terms & Conditions")}
          >
            <p>Terms & Conditions</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Not Found Page")}
          >
            <p>Not Found Page</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Skilled Worker Stream")}
          >
            <p>Skilled Worker Stream</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Priorities Program")}
          >
            <p>Priorities Program</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("International Post Graduate Program")}
          >
            <p>International Post Graduate Program</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("International Graduate Program")}
          >
            <p>International Graduate Program</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Health Authority Stream")}
          >
            <p>Health Authority Stream</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Healthcare Targeted Draw")}
          >
            <p>Healthcare Targeted Draw</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Entry Level Semi Skilled")}
          >
            <p>Entry Level Semi Skilled</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("BC PNP")}
          >
            <p>BC PNP</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("PNP")}
          >
            <p>PNP</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("RNIP")}
          >
            <p>RNIP</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Agri Food Pilot Program")}
          >
            <p>Agri Food Pilot Program</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Pilot Programs")}
          >
            <p>Pilot Programs</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Transport Occupation Targeted Draw")}
          >
            <p>Transport Occupation Targeted Draw</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Trade Occupation Targeted Draw")}
          >
            <p>Trade Occupation Targeted Draw</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("STEM Targeted Draw")}
          >
            <p>STEM Targeted Draw</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("French Targeted Draw")}
          >
            <p>French Targeted Draw</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Federal Skilled Worker Program")}
          >
            <p>Federal Skilled Worker Program</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Federal Skilled Trades Program")}
          >
            <p>Federal Skilled Trades Program</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Canadian Experience Class")}
          >
            <p>Canadian Experience Class</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Dual Intent Visa")}
          >
            <p>Dual Intent Visa</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Business Visitor Visa")}
          >
            <p>Business Visitor Visa</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Visitor Visa")}
          >
            <p>Visitor Visa</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Temporary Resident")}
          >
            <p>Temporary Resident</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Temporary Resident Permit Draft")}
          >
            <p>Temporary Resident Permit Draft</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Super Visa")}
          >
            <p>Super Visa</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Common Law Partner Temporary")}
          >
            <p>Common Law Partner Temporary</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Common Law Partner Permanent")}
          >
            <p>Common Law Partner Permanent</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Common Law Partner International")}
          >
            <p>Common Law Partner International</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Spouse Common Law Sponsorship")}
          >
            <p>Spouse Common Law Sponsorship</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Restoration Status Draft")}
          >
            <p>Restoration Status Draft</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Spousal Open Work Permit")}
          >
            <p>Spousal Open Work Permit</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Open Work Permit for Spouse Inland")}
          >
            <p>Open Work Permit for Spouse Inland</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Flagpoling")}
          >
            <p>Flagpoling</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Extensions Draft")}
          >
            <p>Extensions Draft</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Study Permit Minors")}
          >
            <p>Study Permit Minors</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("SDS")}
          >
            <p>SDS</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Non SDS")}
          >
            <p>Non SDS</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Outside Canada")}
          >
            <p>Outside Canada</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Visitor to Student")}
          >
            <p>Visitor to Student</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Change College Program")}
          >
            <p>Change College Program</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Inside Canada")}
          >
            <p>Inside Canada</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Student Visa")}
          >
            <p>Student Visa</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Parents Grandparents")}
          >
            <p>Parents Grandparents</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Orphan")}
          >
            <p>Orphan</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Lonely Canadian")}
          >
            <p>Lonely Canadian</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Humanitarian Compassionate")}
          >
            <p>Humanitarian Compassionate</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Dependent Children")}
          >
            <p>Dependent Children</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Adoption")}
          >
            <p>Adoption</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Family Reunification Sponsorship")}
          >
            <p>Family Reunification Sponsorship</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("PGWP")}
          >
            <p>PGWP</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Open Work Dependent Children")}
          >
            <p>Open Work Dependent Children</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Open Work Vulnerable LP")}
          >
            <p>Open Work Vulnerable LP</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Francophone Mobility Program")}
          >
            <p>Francophone Mobility Program</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Bridging Open Work Permit LP")}
          >
            <p>Bridging Open Work Permit LP</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Low Wage LMIA")}
          >
            <p>Low Wage LMIA</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Global Stream LMIA")}
          >
            <p>Global Stream LMIA</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Agriculture Stream LMIA")}
          >
            <p>Agriculture Stream LMIA</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Open Work Permit")}
          >
            <p>Open Work Permit</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("LMIA Reviewed")}
          >
            <p>LMIA Reviewed</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Reply to PFL Page")}
          >
            <p>Reply to PFL Page</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Additional Document")}
          >
            <p>Additional Document</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Reconsideration")}
          >
            <p>Reconsideration</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Citizenship")}
          >
            <p>Citizenship</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("PR Renewal")}
          >
            <p>PR Renewal</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Work Permit")}
          >
            <p>Work Permit</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Category Based Express")}
          >
            <p>Category Based Express</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Agriculture Agri Food Occupation")}
          >
            <p>Agriculture Agri Food Occupation</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("In Home Caregiver Program LP")}
          >
            <p>In Home Caregiver Program LP</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Pathways for Caregiver")}
          >
            <p>Pathways for Caregiver</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() =>
              setBlogTag("Permanent Residence Pathways Caregivers LP")
            }
          >
            <p>Permanent Residence Pathways Caregivers LP</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Spouse Inland")}
          >
            <p>Spouse Inland</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Spouse Outland")}
          >
            <p>Spouse Outland</p>
          </div>

          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => setBlogTag("Same Sex")}
          >
            <p>Same Sex</p>
          </div>
        </div>
      </div>
      <input
        placeholder="Tag 1"
        name="tag_1"
        value={sectionDataSingle.tag_1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Tag 2"
        name="tag_2"
        value={sectionDataSingle.tag_2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Tag 3"
        name="tag_3"
        value={sectionDataSingle.tag_3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <p className={styles.precautionLine}>
        To Add a "custom url" to your blog, if the input below left empty, the blog title will be converted into the link/url of the blog. Use this following way to add custom url to the blog without qoutes and in small case only:- "/your-custom-url".
      </p>
      <input
        placeholder="Custom URL"
        name="custom_url"
        value={sectionDataSingle.custom_url || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <p className={styles.precautionLine}>
        Select the option below for your required content type, get the basic
        text, change the text placed inside the "{"<> </>"}" with your required
        text, copy the entire text including {"<> </>"} , paste it below.
      </p>
      <div className={styles.blogContentTageSelectionArea}>
        <div className={styles.tagsArea}>
          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => handleTagClick("Bigger Heading")}
          >
            <p>Bigger Heading</p>
          </div>
          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => handleTagClick("Sub Heading")}
          >
            <p>Sub Heading</p>
          </div>
          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => handleTagClick("Paragraph")}
          >
            <p>Paragraph</p>
          </div>
          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => handleTagClick("Numbered List")}
          >
            <p>Numbered List</p>
          </div>
          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => handleTagClick("Bullet Points List")}
          >
            <p>Bullet Points List</p>
          </div>
          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => handleTagClick("Bold")}
          >
            <p>Bold Text</p>
          </div>
          <div
            className={`${styles.tag} ${!editMode ? styles.disabled : ""}`}
            onClick={() => handleTagClick("Link_Text")}
          >
            <p>Link Text</p>
          </div>
        </div>
        <textarea
          placeholder="Your Selection Code Here"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          disabled={!editMode}
          style={{ height: "150px" }}
        />
      </div>
      <textarea
        placeholder="Blog Content"
        name="blog_content"
        value={sectionDataSingle.blog_content || ""}
        onChange={handleInputChange}
        disabled={!editMode}
        style={{ height: "500px" }}
      />

      {sectionDataSingle.image && (
        <img
          className={styles.existingImageSmall}
          src={sectionDataSingle.image}
          alt="Preview"
        />
      )}
      <p className={styles.precautionLine}>
        For Uploading Image in the blog , upload the image below, get the
        shortcode, copy it and paste it anywhere in the blog content.
      </p>
      <input type="file" disabled={!editMode} onChange={handleFileChange} />
      <textarea
        className={styles.imageShortCodeTextarea}
        placeholder="Above Image Shortcode"
        disabled={!editMode}
        value={getImageShortcode()}
      />
      <button
        type="button"
        className={styles.copyButton}
        onClick={handleCopyClick}
        disabled={!editMode || !getImageShortcode()}
      >
        Copy Image Shortcode
      </button>
      {imageBase64 && (
        <img
          className={styles.shortCodeImage}
          src={imageBase64}
          alt="Uploaded Image Preview"
        />
      )}

      <p className={styles.precautionLine}>
        For Uploading Video in the blog, paste the YouTube video share link
        below, get the shortcode, copy it, and paste it anywhere in the blog
        content.
      </p>
      <input
        type="text"
        placeholder="YouTube Video Share Link"
        disabled={!editMode}
        loading="lazy"
        value={ytLink}
        onChange={handleYtLinkChange}
      />
      <textarea
        className={styles.imageShortCodeTextarea}
        placeholder="Above YT Video Shortcode"
        disabled={!editMode}
        value={ytShortcode}
      />
      <button
        type="button"
        className={styles.copyButton}
        onClick={handleCopyClickYT}
        disabled={!editMode || !ytShortcode}
      >
        Copy YT Video Shortcode
      </button>
      {ytIframe && <div className={styles.youtubeIframe}>{ytIframe}</div>}
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

export default AddBlog;
