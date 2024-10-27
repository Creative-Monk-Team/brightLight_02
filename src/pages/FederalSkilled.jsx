import React, { useEffect, useState } from "react";
import styles from "../styles/FederalSkilled.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import { Sticky, StickyContainer } from "react-sticky";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const FederalSkilled = () => {
  let [metaData, setMetaData] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  const [languagePoints, setLanguagePoints] = useState(0);
  let [listeningPoints, setListeningPoints] = useState(0);
  let [readingPoints, setReadingPoints] = useState(0);
  let [writingPoints, setWritingPoints] = useState(0);
  const [educationPoints, setEducationPoints] = useState(0);
  const [agePoints, setAgePoints] = useState(0);
  const [clb5Points, setClb5Points] = useState(0);
  const [employmentPoints, setEmploymentPoints] = useState(0);
  const [experiencePoints, setExperiencePoints] = useState(0);
  const [adaptabilityPoints, setAdaptabilityPoints] = useState(0);
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/federal-skilled")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/federal-meta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [isStickyEnabled, setIsStickyEnabled] = useState(
    window.innerWidth >= 1080
  );

  useEffect(() => {
    const handleResize = () => {
      setIsStickyEnabled(window.innerWidth >= 1080);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLanguageChange = (e) => {
    const value = e.target.value;
    let points = 0;

    if (value === "1") points = Math.floor(data.fsq1o1p);
    else if (value === "2") points = Math.floor(data.fsq1o2p);
    else if (value === "3") points = Math.floor(data.fsq1o3p);
    // else if (value === "4") points = Math.floor(data.fsq1o4p);
    else if (value === "4") points = Math.floor(0);

    setLanguagePoints(points);
  };

  const handleListeningChange = (e) => {
    const value = e.target.value;
    let points = 0;

    if (value === "1") points = Math.floor(data.fsq2o1p);
    else if (value === "2") points = Math.floor(data.fsq2o2p);
    else if (value === "3") points = Math.floor(data.fsq2o3p);
    else if (value === "4") points = Math.floor(data.fsq2o4p);

    setListeningPoints(points);
  };

  const handleReadingChange = (e) => {
    const value = e.target.value;
    let points = 0;

    if (value === "1") points = Math.floor(data.fsq3o1p);
    else if (value === "2") points = Math.floor(data.fsq3o2p);
    else if (value === "3") points = Math.floor(data.fsq3o3p);
    else if (value === "4") points = Math.floor(data.fsq3o4p);

    setReadingPoints(points);
  };

  const handleWritingChange = (e) => {
    const value = e.target.value;
    let points = 0;

    if (value === "1") points = Math.floor(data.fsq4o1p);
    else if (value === "2") points = Math.floor(data.fsq4o2p);
    else if (value === "3") points = Math.floor(data.fsq4o3p);
    else if (value === "4") points = Math.floor(data.fsq4o4p);

    setWritingPoints(points);
  };

  const handleEducationChange = (e) => {
    const educationValue = e.target.value;

    switch (educationValue) {
      case "1":
        setEducationPoints(Math.floor(data.tsq1o1p));
        break;
      case "2":
        setEducationPoints(Math.floor(data.tsq1o2p));
        break;
      case "3":
        setEducationPoints(Math.floor(data.tsq1o3p));
        break;
      case "4":
        setEducationPoints(Math.floor(data.tsq1o4p));
        break;
      case "5":
        setEducationPoints(Math.floor(data.tsq1o5p));
        break;
      case "6":
        setEducationPoints(Math.floor(data.tsq1o6p));
        break;
      case "7":
        setEducationPoints(Math.floor(data.tsq1o7p));
        break;
      default:
        setEducationPoints(0);
        break;
    }
  };

  const handleAgeChange = (e) => {
    const ageValue = e.target.value;

    switch (ageValue) {
      case "1":
        setAgePoints(Math.floor(data?.fosq1o1p));
        break;
      case "2":
        setAgePoints(Math.floor(data?.fosq1o2p));
        break;
      case "3":
        setAgePoints(Math.floor(data?.fosq1o3p));
        break;
      case "4":
        setAgePoints(Math.floor(data?.fosq1o4p));
        break;
      case "5":
        setAgePoints(Math.floor(data?.fosq1o5p));
        break;
      case "6":
        setAgePoints(Math.floor(data?.fosq1o6p));
        break;
      case "7":
        setAgePoints(Math.floor(data?.fosq1o7p));
        break;
      case "8":
        setAgePoints(Math.floor(data?.fosq1o8p));
        break;
      case "9":
        setAgePoints(Math.floor(data?.fosq1o9p));
        break;
      case "10":
        setAgePoints(Math.floor(data?.fosq1o10p));
        break;
      case "11":
        setAgePoints(Math.floor(data?.fosq1o11p));
        break;
      case "12":
        setAgePoints(Math.floor(data?.fosq1o12p));
        break;
      case "13":
        setAgePoints(Math.floor(data?.fosq1o13p));
        break;
      case "14":
        setAgePoints(Math.floor(data?.fosq1o14p));
        break;
      default:
        setAgePoints(0);
        break;
    }
  };

  const handleClb5Change = (e) => {
    const value = e.target.value;
    const points =
      value === "1" ? Math.floor(data.ssq1o1p) : Math.floor(data.ssq1o2p);
    setClb5Points(points);
  };

  const handleEmploymentChange = (e) => {
    const value = e.target.value;
    const points =
      value === "1" ? Math.floor(data.ffsq1o1p) : Math.floor(data.ffsq1o2p);
    setEmploymentPoints(points);
  };

  const handleExperienceChange = (e) => {
    const value = e.target.value;
    let points = 0;

    switch (value) {
      case "1":
        points = Math.floor(data.sxsq1o1p);
        break;
      case "2":
        points = Math.floor(data.sxsq1o2p);
        break;
      case "3":
        points = Math.floor(data.sxsq1o3p);
        break;
      case "4":
        points = Math.floor(data.sxsq1o4p);
        break;
      default:
        points = 0;
        break;
    }

    setExperiencePoints(points);
  };

  const handleAdaptabilityChange = (e) => {
    const value = e.target.value;
    let points = 0;

    switch (value) {
      case "1":
        points = Math.floor(data.svsq1o1p);
        break;
      case "2":
        points = Math.floor(data.svsq1o2p);
        break;
      case "3":
        points = Math.floor(data.svsq1o3p);
        break;
      case "4":
        points = Math.floor(data.svsq1o4p);
        break;
      case "5":
        points = Math.floor(data.svsq1o5p);
        break;
      case "6":
        points = Math.floor(data.svsq1o6p);
        break;
      case "7":
        points = Math.floor(data.svsq1o7p);
        break;
      default:
        points = 0;
        break;
    }

    setAdaptabilityPoints(points);
  };

  const totalPoints =
    languagePoints +
    listeningPoints +
    readingPoints +
    writingPoints +
    educationPoints +
    agePoints +
    clb5Points +
    employmentPoints +
    experiencePoints +
    adaptabilityPoints;

  const displayResult = isNaN(totalPoints) ? "Not Eligible To Apply" : totalPoints;

  let resultClass = isNaN(totalPoints) ? "notEligible" : "eligible";

  useEffect(() => {
    resultClass = isNaN(totalPoints) ? "notEligible" : "eligible";
  },[displayResult, resultClass])

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 1080) {
        const footer = document.getElementById("footer");
        if (footer) {
          // Check if footer exists
          const footerRect = footer.getBoundingClientRect();
          const isVisible = footerRect.top <= window.innerHeight;
          setIsFooterVisible(isVisible);
        } else {
          // If footer is not found, set visibility to false (or any default state you prefer)
          setIsFooterVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // /
  return (
    <>
      <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
      <Navbar1 />
      <div className={styles.bannerParent}>
        <div className={styles.bannerHeading}>
          {data && <h1>{data?.heading}</h1>}
          {data && <p>{data?.description}</p>}
          {data && <p>{data?.description2}</p>}
        </div>
      </div>

      <StickyContainer>
        <div className={styles.containerParent}>
          <div className={styles.firstSection}>
            <div className={styles.container}>
              <div className={styles.header}>
                <div className={styles.headerLineParent}>
                  <div>1</div>
                  <p className={styles.headerLineParentPara}></p>{" "}
                  {data && <h3>{data?.firstSectionHeading}</h3>}
                </div>
              </div>

              <div className={styles.radioGroup}>
                <div className={styles.subHeader}>
                  {data && <h4>{data?.fsq1}</h4>}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="language" // updated name attribute
                        value="1"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data.fsq1o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="language" // updated name attribute
                        value="2"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data.fsq1o2}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="language" // updated name attribute
                        value="3"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data.fsq1o3}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="language" // updated name attribute
                        value="4"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data.fsq1o4}
                    </label>
                  )}
                </div>
              </div>

              <div className={styles.radioGroup}>
                <div className={styles.subHeader}>
                  {data && <h4>{data?.fsq2}</h4>}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="listening" // updated name attribute
                        value="1"
                        onChange={handleListeningChange}
                      />{" "}
                      {data.fsq2o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="listening" // updated name attribute
                        value="2"
                        onChange={handleListeningChange}
                      />{" "}
                      {data.fsq2o2}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="listening" // updated name attribute
                        value="3"
                        onChange={handleListeningChange}
                      />{" "}
                      {data.fsq2o3}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="listening" // updated name attribute
                        value="4"
                        onChange={handleListeningChange}
                      />{" "}
                      {data.fsq2o4}
                    </label>
                  )}
                </div>
              </div>

              <div className={styles.radioGroup}>
                <div className={styles.subHeader}>
                  {data && <h4>{data?.fsq3}</h4>}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="reading" // updated name attribute
                        value="1"
                        onChange={handleReadingChange}
                      />{" "}
                      {data.fsq3o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="reading" // updated name attribute
                        value="2"
                        onChange={handleReadingChange}
                      />{" "}
                      {data.fsq3o2}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="reading" // updated name attribute
                        value="3"
                        onChange={handleReadingChange}
                      />{" "}
                      {data.fsq3o3}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="reading" // updated name attribute
                        value="4"
                        onChange={handleReadingChange}
                      />{" "}
                      {data.fsq3o4}
                    </label>
                  )}
                </div>
              </div>

              <div className={styles.radioGroup}>
                <div className={styles.subHeader}>
                  {data && <h4>{data?.fsq4}</h4>}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="writing" // updated name attribute
                        value="1"
                        onChange={handleWritingChange}
                      />{" "}
                      {data.fsq4o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="writing" // updated name attribute
                        value="2"
                        onChange={handleWritingChange}
                      />{" "}
                      {data.fsq4o2}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="writing" // updated name attribute
                        value="3"
                        onChange={handleWritingChange}
                      />{" "}
                      {data.fsq4o3}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="writing" // updated name attribute
                        value="4"
                        onChange={handleWritingChange}
                      />{" "}
                      {data.fsq4o4}
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.header}>
                <div className={styles.headerLineParent}>
                  <div>2</div>
                  <p className={styles.headerLineParentPara}></p>{" "}
                  {data && <h3>{data?.secondSectionHeading}</h3>}
                </div>
              </div>
              <div className={styles.radioGroup3}>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking1"
                        value="1"
                        onChange={handleClb5Change}
                      />{" "}
                      {data.ssq1o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking1"
                        value="2"
                        onChange={handleClb5Change}
                      />{" "}
                      {data.ssq1o2}
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.header}>
                <div className={styles.headerLineParent}>
                  <div>3</div>
                  <p></p>
                </div>
                {data && <h4>{data?.tsq1}</h4>}
              </div>
              <div className={styles.radioGroup2}>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11"
                        value="1"
                        onChange={handleEducationChange}
                      />{" "}
                      {data.tsq1o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11"
                        value="2"
                        onChange={handleEducationChange}
                      />{" "}
                      {data.tsq1o2}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11"
                        value="3"
                        onChange={handleEducationChange}
                      />{" "}
                      {data.tsq1o3}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11"
                        value="4"
                        onChange={handleEducationChange}
                      />{" "}
                      {data.tsq1o4}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11"
                        value="5"
                        onChange={handleEducationChange}
                      />{" "}
                      {data.tsq1o5}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11"
                        value="6"
                        onChange={handleEducationChange}
                      />{" "}
                      {data.tsq1o6}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11"
                        value="7"
                        onChange={handleEducationChange}
                      />{" "}
                      {data.tsq1o7}
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.header}>
                <div className={styles.headerLineParent}>
                  <div>4</div>
                  <p></p>
                </div>
                {data && <h4>{data?.fosq1}</h4>}
              </div>
              <select className={styles.dropdown} onChange={handleAgeChange}>
                <option value="1">{data?.fosq1o1}</option>
                <option value="2">{data?.fosq1o2}</option>
                <option value="3">{data?.fosq1o3}</option>
                <option value="4">{data?.fosq1o4}</option>
                <option value="5">{data?.fosq1o5}</option>
                <option value="6">{data?.fosq1o6}</option>
                <option value="7">{data?.fosq1o7}</option>
                <option value="8">{data?.fosq1o8}</option>
                <option value="9">{data?.fosq1o9}</option>
                <option value="10">{data?.fosq1o10}</option>
                <option value="11">{data?.fosq1o11}</option>
                <option value="12">{data?.fosq1o12}</option>
                <option value="13">{data?.fosq1o13}</option>
                <option value="14">{data?.fosq1o14}</option>
              </select>
            </div>

            <div className={styles.container}>
              <div className={styles.header}>
                <div className={styles.headerLineParent}>
                  <div>5</div>
                  <p></p>
                </div>
                {data && <h4>{data?.ffsq1}</h4>}
              </div>
              <div className={styles.radioGroup3}>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking111"
                        value="1"
                        onChange={handleEmploymentChange}
                      />{" "}
                      {data.ffsq1o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking111"
                        value="2"
                        onChange={handleEmploymentChange}
                      />{" "}
                      {data.ffsq1o2}
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.header}>
                <div className={styles.headerLineParent}>
                  <div>6</div>
                  <p></p>
                </div>
                {data && <h4>{data?.sxsq1}</h4>}
              </div>
              <div className={styles.radioGroup}>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11111"
                        value="1"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data.sxsq1o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11111"
                        value="2"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data.sxsq1o2}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11111"
                        value="3"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data.sxsq1o3}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking11111"
                        value="4"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data.sxsq1o4}
                    </label>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.header}>
                <div className={styles.headerLineParent}>
                  <div>7</div>
                  <p></p>
                </div>
                {data && <h4>{data?.svsq1}</h4>}
              </div>
              <div className={styles.radioGroup2}>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking2"
                        value="1"
                        onChange={handleAdaptabilityChange}
                      />{" "}
                      {data.svsq1o1}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking2"
                        value="2"
                        onChange={handleAdaptabilityChange}
                      />{" "}
                      {data.svsq1o2}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking2"
                        value="3"
                        onChange={handleAdaptabilityChange}
                      />{" "}
                      {data.svsq1o3}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking2"
                        value="4"
                        onChange={handleAdaptabilityChange}
                      />{" "}
                      {data.svsq1o4}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking2"
                        value="5"
                        onChange={handleAdaptabilityChange}
                      />{" "}
                      {data.svsq1o5}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking2"
                        value="6"
                        onChange={handleAdaptabilityChange}
                      />{" "}
                      {data.svsq1o6}
                    </label>
                  )}
                </div>
                <div className={styles.radioItem2}>
                  {data && (
                    <label>
                      <input
                        type="radio"
                        name="speaking2"
                        value="7"
                        onChange={handleAdaptabilityChange}
                      />{" "}
                      {data.svsq1o7}
                    </label>
                  )}
                </div>
              </div>
            </div>
          </div>

          {isStickyEnabled ? (
            <Sticky>
              {({ style }) => (
                <div
                  className={styles.pointsSection}
                  style={{
                    ...style,
                    background: "white",
                    left: "70%",
                    width: "300px",
                    top: "90px",
                  }}
                >
                  <div className={styles.pointContainer}>
                    <div className={styles.header}>
                      <h2>Total Points</h2>
                    </div>
                    <div className={styles.points}>
                      <h1 className={styles.resultClass} style={resultClass == "notEligible" ? {fontSize: "20px"} : {}}>{displayResult}</h1>
                    </div>
                  </div>
                  {!isFooterVisible && (
                    <>
                      <div className={styles.disclaimer}>
                        <p>
                          <span className={styles.colorRedDis}>
                            Disclaimer:
                          </span>{" "}
                          This calculator is intended to provide general
                          information and should not be relied upon as a
                          substitute for professional advice. While we have
                          taken great care to ensure the accuracy of the
                          calculations provided, we cannot guarantee their
                          correctness or completeness. The results provided by
                          this calculator are based on input provided by the
                          user and do not take into account all possible factors
                          that may affect the calculation. Therefore, we cannot
                          be held responsible for any errors or omissions in the
                          information provided by this calculator. By using this
                          calculator, you agree to indemnify and hold us
                          harmless from claims, damages, or liabilities arising
                          from the use of this calculator or the information it
                          provides.
                        </p>
                      </div>
                      <div
                        onClick={() =>
                          (window.location.href =
                            "https://api.leadconnectorhq.com/widget/booking/BVqmhNlxRMadz10ir6aM")
                        }
                        className={styles.actionButton}
                      >
                        <h2>RCIC Appointment</h2>
                        <p>
                          To find out if you are eligible for PR, under FSWP
                          Program book an appointment with our RCIC.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </Sticky>
          ) : (
            <div
              className={styles.pointsSection}
              style={{ background: "white" }}
            >
              <div className={styles.pointContainer}>
                <div className={styles.header}>
                  <h2>Total Points</h2>
                </div>
                <div className={styles.points}>
                  <h1 style={resultClass == "notEligible" ? {fontSize: "20px"} : {}}>{displayResult}</h1>
                </div>
              </div>
              {!isFooterVisible && (
                <>
                  <div className={styles.disclaimer}>
                    <p>
                      <span className={styles.colorRedDis}>Disclaimer:</span>{" "}
                      This calculator is intended to provide general information
                      and should not be relied upon as a substitute for
                      professional advice. While we have taken great care to
                      ensure the accuracy of the calculations provided, we
                      cannot guarantee their correctness or completeness. The
                      results provided by this calculator are based on input
                      provided by the user and do not take into account all
                      possible factors that may affect the calculation.
                      Therefore, we cannot be held responsible for any errors or
                      omissions in the information provided by this calculator.
                      By using this calculator, you agree to indemnify and hold
                      us harmless from claims, damages, or liabilities arising
                      from the use of this calculator or the information it
                      provides.
                    </p>
                  </div>
                  <div
                    onClick={() =>
                      (window.location.href =
                        "https://api.leadconnectorhq.com/widget/booking/BVqmhNlxRMadz10ir6aM")
                    }
                    className={styles.actionButton}
                  >
                    <h2>RCIC Appointment</h2>
                    <p>
                      To find out if you are eligible for PR, under FSWP Program
                      book an appointment with our RCIC.
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </StickyContainer>

      <Footer1 />
    </>
  );
};

export default FederalSkilled;
