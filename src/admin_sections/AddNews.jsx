import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AddNews = () => {
  const [textareaValue, setTextareaValue] = useState(
    "Your Selection Code Here"
  );

  const [ytIframe, setYtIframe] = useState(null);
  const [ytLink, setYtLink] = useState("");
  const [ytShortcode, setYtShortcode] = useState("");
  const [imageBase64, setImageBase64] = useState("");

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

  const handleTagClick = (tag) => {
    let tagValue = "";

    switch (tag) {
      case "Bigger Heading":
        tagValue = "<h2>Your bigger heading goes here</h2>";
        break;
      case "Bold":
        tagValue = "<strong>Your bigger heading goes here</strong>";
        break;
      case "Sub Heading":
        tagValue = "<h3>Your sub heading goes here</h3>";
        break;
      case "Paragraph":
        tagValue = "<p>Your paragraph goes here</p>";
        break;
      case "Link_Text":
        tagValue =
          '<a href="https://example.com" target="_blank">Your Text Here</a>';
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
  const [sectionDataSingle, setSectionDataSingle] = useState({
    news_heading: "",
    image: "",
    tag_1: "",
    tag_2: "",
    tag_3: "",
    custom_url: "",
    alt_tag_featured: "",
    news_content: "",
    metaTitle: "",
    metaDescription: "",
  });
  const [editMode, setEditMode] = useState(false);

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

  const handleAddClick = () => {
    // Create a FormData object
    const formData = new FormData();
    Object.keys(sectionDataSingle).forEach((key) => {
      formData.append(key, sectionDataSingle[key]);
    });

    fetch("https://brightlight-node.onrender.com/news", {
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
          news_heading: "",
          image: "",
          tag_1: "",
          tag_2: "",
          tag_3: "",
          custom_url: "",
          alt_tag_featured: "",
          news_content: "",
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
        placeholder="News Heading"
        name="news_heading"
        value={sectionDataSingle.news_heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Alt Tag"
        name="alt_tag_featured"
        value={sectionDataSingle.alt_tag_featured || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
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
        placeholder="News Content"
        name="news_content"
        value={sectionDataSingle.news_content || ""}
        onChange={handleInputChange}
        disabled={!editMode}
        style={{ height: "500px" }}
      />

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

      {sectionDataSingle.image && (
        <img
          className={styles.existingImageSmall}
          src={sectionDataSingle.image}
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

export default AddNews;
