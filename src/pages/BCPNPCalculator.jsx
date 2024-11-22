import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/BCPNPCalculator.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import { Sticky, StickyContainer } from "react-sticky";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const BCPNPCalculator = () => {
  let [metaData, setMetaData] = useState([]);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  let [applicableLastSection, setApplicableLastSection] = useState(false);
  const firstSectionRef = useRef(null);
  const [firstSectionHeight, setFirstSectionHeight] = useState("auto");
  const [points, setPoints] = useState(0);
  const [canadaExperiencePoints, setCanadaExperiencePoints] = useState(0);
  const [currentJobPoints, setCurrentJobPoints] = useState(0);
  const [educationPoints, setEducationPoints] = useState(0);
  const [bcEducationPoints, setBcEducationPoints] = useState(0);
  const [canadaEducationPoints, setCanadaEducationPoints] = useState(0);
  const [occupationPoints, setOccupationPoints] = useState(0);
  const [languagePoints, setLanguagePoints] = useState(0);
  const [languageProficiencyPoints, setLanguageProficiencyPoints] = useState(0);
  const [hourlyWagePoints, setHourlyWagePoints] = useState(0);
  const [employmentAreaPoints, setEmploymentAreaPoints] = useState(0);
  const [languageProficiencyRegionPoints, setLanguageProficiencyRegionPoints] =
    useState(0);
  let [data, setData] = useState([]);

  useEffect(() => {
    const setHeightAfterDelay = () => {
      if (firstSectionRef.current) {
        const height = firstSectionRef.current.offsetHeight - 50;
        setFirstSectionHeight(height);
      }
    };
    const timer = setTimeout(setHeightAfterDelay, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/bcpnp")
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

  // Handles the first section's experience change
  const handleExperienceChange = (e) => {
    const experienceValue = e.target.value;

    switch (experienceValue) {
      case "1":
        setPoints(Math.floor(data?.fsq1o1p));
        break;
      case "2":
        setPoints(Math.floor(data?.fsq1o2p));
        break;
      case "3":
        setPoints(Math.floor(data?.fsq1o3p));
        break;
      case "4":
        setPoints(Math.floor(data?.fsq1o4p));
        break;
      case "5":
        setPoints(Math.floor(data?.fsq1o5p));
        break;
      case "6":
        setPoints(Math.floor(data?.fsq1o6p));
        break;
      case "7":
        setPoints(Math.floor(data?.fsq1o7p));
        break;
      default:
        setPoints(0);
        break;
    }
  };

  // Handles the second section's Canada experience change
  const handleCanadaExperienceChange = (e) => {
    const canadaExperienceValue = e.target.value;

    if (canadaExperienceValue === "1") {
      setCanadaExperiencePoints(Math.floor(data?.ssq1o1p)); // Mimic the case '2-3'
    } else {
      setCanadaExperiencePoints(Math.floor(data?.ssq1o2p)); // Mimic the case '0'
    }
  };

  // Handles the third section's current job change
  const handleCurrentJobChange = (e) => {
    const currentJobValue = e.target.value;

    if (currentJobValue === "1") {
      setCurrentJobPoints(Math.floor(data?.tsq1o1p));
    } else {
      setCurrentJobPoints(Math.floor(data?.tsq1o2p));
    }
  };

  // Handles the fourth section's education level change
  const handleEducationChange = (e) => {
    const educationValue = e.target.value;

    switch (educationValue) {
      case "1":
        setEducationPoints(Math.floor(data?.fosq1o1p));
        break;
      case "2":
        setEducationPoints(Math.floor(data?.fosq1o2p));
        break;
      case "3":
        setEducationPoints(Math.floor(data?.fosq1o3p));
        break;
      case "4":
        setEducationPoints(Math.floor(data?.fosq1o4p));
        break;
      case "5":
        setEducationPoints(Math.floor(data?.fosq1o5p));
        break;
      case "6":
        setEducationPoints(Math.floor(data?.fosq1o6p));
        break;
      case "7":
        setEducationPoints(Math.floor(data?.fosq1o7p));
        break;
      default:
        setEducationPoints(0);
        break;
    }
  };

  // Handles the Post-Secondary Education Completed in B.C. change
  const handleBcEducationChange = (e) => {
    const bcEducationValue = e.target.value;

    if (bcEducationValue === "1") {
      setBcEducationPoints(Math.floor(data?.ffsq1o1p));
    } else {
      setBcEducationPoints(Math.floor(data?.ffsq1o2p));
    }
  };

  // Handles the Post-Secondary Education Completed in Canada (Outside B.C.) change
  const handleCanadaEducationChange = (e) => {
    const canadaEducationValue = e.target.value;

    if (canadaEducationValue === "1") {
      setCanadaEducationPoints(Math.floor(data?.sxsq1o1p));
    } else {
      setCanadaEducationPoints(Math.floor(data?.sxsq1o2p));
    }
  };

  // Handles the working in specific occupations change
  const handleOccupationChange = (e) => {
    const occupationValue = e.target.value;

    if (occupationValue === "1") {
      setOccupationPoints(Math.floor(data?.svsq1o1p));
    } else {
      setOccupationPoints(Math.floor(data?.svsq1o2p));
    }
  };

  // Handles the Language Points change
  const handleLanguageChange = (e) => {
    const languageValue = e.target.value;

    switch (languageValue) {
      case "1":
        setLanguagePoints(Math.floor(data?.egsq1o1p));
        break;
      case "2":
        setLanguagePoints(Math.floor(data?.egsq1o2p));
        break;
      case "3":
        setLanguagePoints(Math.floor(data?.egsq1o3p));
        break;
      case "4":
        setLanguagePoints(Math.floor(data?.egsq1o4p));
        break;
      case "5":
        setLanguagePoints(Math.floor(data?.egsq1o5p));
        break;
      case "6":
        setLanguagePoints(Math.floor(data?.egsq1o6p));
        break;
      case "7":
        setLanguagePoints(Math.floor(data?.egsq1o7p));
        break;
      case "8":
        setLanguagePoints(Math.floor(data?.egsq1o8p));
        break;
      case "9":
        setLanguagePoints(Math.floor(data?.egsq1o9p));
        break;
      default:
        setLanguagePoints(0);
        break;
    }
  };

  // Handles the Language Proficiency change
  const handleLanguageProficiencyChange = (e) => {
    const languageProficiencyValue = e.target.value;

    if (languageProficiencyValue === "1") {
      setLanguageProficiencyPoints(Math.floor(data?.nnsq1o1p));
    } else {
      setLanguageProficiencyPoints(Math.floor(data?.nnsq1o2p));
    }
  };

  // Handles the Hourly Wage change
  const handleHourlyWageChange = (e) => {
    const wageValue = parseFloat(e.target.value);

    // Update points based on the entered wage value according to the table
    if (wageValue >= 70) {
      setHourlyWagePoints(55);
    } else if (wageValue >= 69 && wageValue <= 69.99) {
      setHourlyWagePoints(54);
    } else if (wageValue >= 68 && wageValue <= 68.99) {
      setHourlyWagePoints(53);
    } else if (wageValue >= 67 && wageValue <= 67.99) {
      setHourlyWagePoints(52);
    } else if (wageValue >= 66 && wageValue <= 66.99) {
      setHourlyWagePoints(51);
    } else if (wageValue >= 65 && wageValue <= 65.99) {
      setHourlyWagePoints(50);
    } else if (wageValue >= 64 && wageValue <= 64.99) {
      setHourlyWagePoints(49);
    } else if (wageValue >= 63 && wageValue <= 63.99) {
      setHourlyWagePoints(48);
    } else if (wageValue >= 62 && wageValue <= 62.99) {
      setHourlyWagePoints(47);
    } else if (wageValue >= 61 && wageValue <= 61.99) {
      setHourlyWagePoints(46);
    } else if (wageValue >= 60 && wageValue <= 60.99) {
      setHourlyWagePoints(45);
    } else if (wageValue >= 59 && wageValue <= 59.99) {
      setHourlyWagePoints(44);
    } else if (wageValue >= 58 && wageValue <= 58.99) {
      setHourlyWagePoints(43);
    } else if (wageValue >= 57 && wageValue <= 57.99) {
      setHourlyWagePoints(42);
    } else if (wageValue >= 56 && wageValue <= 56.99) {
      setHourlyWagePoints(41);
    } else if (wageValue >= 55 && wageValue <= 55.99) {
      setHourlyWagePoints(40);
    } else if (wageValue >= 54 && wageValue <= 54.99) {
      setHourlyWagePoints(39);
    } else if (wageValue >= 53 && wageValue <= 53.99) {
      setHourlyWagePoints(38);
    } else if (wageValue >= 52 && wageValue <= 52.99) {
      setHourlyWagePoints(37);
    } else if (wageValue >= 51 && wageValue <= 51.99) {
      setHourlyWagePoints(36);
    } else if (wageValue >= 50 && wageValue <= 50.99) {
      setHourlyWagePoints(35);
    } else if (wageValue >= 49 && wageValue <= 49.99) {
      setHourlyWagePoints(34);
    } else if (wageValue >= 48 && wageValue <= 48.99) {
      setHourlyWagePoints(33);
    } else if (wageValue >= 47 && wageValue <= 47.99) {
      setHourlyWagePoints(32);
    } else if (wageValue >= 46 && wageValue <= 46.99) {
      setHourlyWagePoints(31);
    } else if (wageValue >= 45 && wageValue <= 45.99) {
      setHourlyWagePoints(30);
    } else if (wageValue >= 44 && wageValue <= 44.99) {
      setHourlyWagePoints(29);
    } else if (wageValue >= 43 && wageValue <= 43.99) {
      setHourlyWagePoints(28);
    } else if (wageValue >= 42 && wageValue <= 42.99) {
      setHourlyWagePoints(27);
    } else if (wageValue >= 41 && wageValue <= 41.99) {
      setHourlyWagePoints(26);
    } else if (wageValue >= 40 && wageValue <= 40.99) {
      setHourlyWagePoints(25);
    } else if (wageValue >= 39 && wageValue <= 39.99) {
      setHourlyWagePoints(24);
    } else if (wageValue >= 38 && wageValue <= 38.99) {
      setHourlyWagePoints(23);
    } else if (wageValue >= 37 && wageValue <= 37.99) {
      setHourlyWagePoints(22);
    } else if (wageValue >= 36 && wageValue <= 36.99) {
      setHourlyWagePoints(21);
    } else if (wageValue >= 35 && wageValue <= 35.99) {
      setHourlyWagePoints(20);
    } else if (wageValue >= 34 && wageValue <= 34.99) {
      setHourlyWagePoints(19);
    } else if (wageValue >= 33 && wageValue <= 33.99) {
      setHourlyWagePoints(18);
    } else if (wageValue >= 32 && wageValue <= 32.99) {
      setHourlyWagePoints(17);
    } else if (wageValue >= 31 && wageValue <= 31.99) {
      setHourlyWagePoints(16);
    } else if (wageValue >= 30 && wageValue <= 30.99) {
      setHourlyWagePoints(15);
    } else if (wageValue >= 29 && wageValue <= 29.99) {
      setHourlyWagePoints(14);
    } else if (wageValue >= 28 && wageValue <= 28.99) {
      setHourlyWagePoints(13);
    } else if (wageValue >= 27 && wageValue <= 27.99) {
      setHourlyWagePoints(12);
    } else if (wageValue >= 26 && wageValue <= 26.99) {
      setHourlyWagePoints(11);
    } else if (wageValue >= 25 && wageValue <= 25.99) {
      setHourlyWagePoints(10);
    } else if (wageValue >= 24 && wageValue <= 24.99) {
      setHourlyWagePoints(9);
    } else if (wageValue >= 23 && wageValue <= 23.99) {
      setHourlyWagePoints(8);
    } else if (wageValue >= 22 && wageValue <= 22.99) {
      setHourlyWagePoints(7);
    } else if (wageValue >= 21 && wageValue <= 21.99) {
      setHourlyWagePoints(6);
    } else if (wageValue >= 20 && wageValue <= 20.99) {
      setHourlyWagePoints(5);
    } else if (wageValue >= 19 && wageValue <= 19.99) {
      setHourlyWagePoints(4);
    } else if (wageValue >= 18 && wageValue <= 18.99) {
      setHourlyWagePoints(3);
    } else if (wageValue >= 17 && wageValue <= 17.99) {
      setHourlyWagePoints(2);
    } else if (wageValue >= 16 && wageValue <= 16.99) {
      setHourlyWagePoints(1);
    } else if (wageValue < 16 && wageValue <= 16.99) {
      setHourlyWagePoints(0);
    }
  };

  // Handles the Area of Employment change
  const handleEmploymentAreaChange = (e) => {
    const areaValue = e.target.value;

    switch (areaValue) {
      case "1":
        setEmploymentAreaPoints(Math.floor(data?.elsq1o1p));
        break;
      case "2":
        setEmploymentAreaPoints(Math.floor(data?.elsq1o2p));
        break;
      case "3":
        setEmploymentAreaPoints(Math.floor(data?.elsq1o3p));
        break;
      default:
        setEmploymentAreaPoints(0);
        break;
    }
  };

  // Handles the Language Proficiency Region change
  const handleLanguageProficiencyRegionChange = (e) => {
    const proficiencyRegionValue = e.target.value;

    switch (proficiencyRegionValue) {
      case "1":
        setLanguageProficiencyRegionPoints(Math.floor(data?.twsq1o1p));
        break;
      case "2":
        setLanguageProficiencyRegionPoints(Math.floor(data?.twsq1o2p));
        break;
      case "3":
        setLanguageProficiencyRegionPoints(Math.floor(data?.twsq1o3p));
        break;
      default:
        setLanguageProficiencyRegionPoints(0);
        break;
    }
  };
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/bcpnp-meta")
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

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer"); // Adjust the selector to match your footer class
      if (window.innerWidth > 1080) {
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          setIsFooterVisible(footerRect.top <= window.innerHeight);
        } else {
          // If footer is not found, set visibility to false (or any default state you prefer)
          setIsFooterVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalPoints =
    points +
    canadaExperiencePoints +
    currentJobPoints +
    educationPoints +
    bcEducationPoints +
    canadaEducationPoints +
    occupationPoints +
    languagePoints +
    languageProficiencyPoints +
    hourlyWagePoints +
    employmentAreaPoints +
    languageProficiencyRegionPoints;

  return (
    <>
      <Helmet>
        <title>
          {metaData.metaTitle ? metaData?.metaTitle : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData.metaOgTitle
              ? metaData?.metaOgTitle
              : "About Us - Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData.metaKeywords
              ? metaData?.metaKeywords
              : " Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>

      <Navbar1 />
      {/* Section 1: Work Experience in B.C. Job Offer */}
      <div className={styles.bannerParent}>
        <div className={styles.bannerHeading}>
          {data && <h1>{data?.heading}</h1>}
          {data && <p>{data?.description}</p>}
        </div>
      </div>

      <StickyContainer>
        <div className={styles.containerParent}>
          <div
            className={styles.firstSection}
            // ref={firstSectionRef}
            // style={{ height: `${firstSectionHeight}px` }}
          >
            <div className={styles.container}>
              {data?.fsq1 && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>1</div>
                    <p></p>
                  </div>
                  <h5>{data?.fsq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.fsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="experience"
                        value="1"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data?.fsq1o1}
                    </label>
                  </div>
                )}

                {data?.fsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="experience"
                        value="2"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data?.fsq1o2}
                    </label>
                  </div>
                )}

                {data?.fsq1o3 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="experience"
                        value="3"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data?.fsq1o3}
                    </label>
                  </div>
                )}

                {data?.fsq1o4 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="experience"
                        value="4"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data?.fsq1o4}
                    </label>
                  </div>
                )}

                {data?.fsq1o5 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="experience"
                        value="5"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data?.fsq1o5}
                    </label>
                  </div>
                )}

                {data?.fsq1o6 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="experience"
                        value="6"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data?.fsq1o6}
                    </label>
                  </div>
                )}

                {data?.fsq1o7 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="experience"
                        value="7"
                        onChange={handleExperienceChange}
                      />{" "}
                      {data?.fsq1o7}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}>
                {/* Points <input type="text" value={points} readOnly /> */}
              </div>
            </div>

            {/* Section 2: At Least 1 Year of Directly Related Experience in Canada */}
            <div className={styles.container}>
              {data?.ssq1 && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>2</div>
                    <p></p>{" "}
                  </div>
                  <h4>{data?.secondSectionHeading}</h4>
                  <h5>{data?.ssq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                <div className={styles.radioItem}>
                  <label>
                    <input
                      type="radio"
                      name="canadaExperience"
                      value="1"
                      onChange={handleCanadaExperienceChange}
                    />{" "}
                    {data?.ssq1o1}
                  </label>
                </div>
                <div className={styles.radioItem}>
                  <label>
                    <input
                      type="radio"
                      name="canadaExperience"
                      value="2"
                      onChange={handleCanadaExperienceChange}
                    />{" "}
                    {data?.ssq1o2}
                  </label>
                </div>
              </div>
              <div className={styles.points}>
                {/* Points <input type="text" value={canadaExperiencePoints} readOnly /> */}
              </div>
            </div>

            {/* Section 3: Currently Working Full-Time in B.C. */}
            <div className={styles.container}>
              {data?.tsq1 && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>3</div>
                    <p></p>{" "}
                  </div>
                  <h5>{data?.tsq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.tsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="currentJob"
                        value="1"
                        onChange={handleCurrentJobChange}
                      />{" "}
                      {data?.tsq1o1}
                    </label>
                  </div>
                )}

                {data?.tsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="currentJob"
                        value="2"
                        onChange={handleCurrentJobChange}
                      />{" "}
                      {data?.tsq1o2}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}>
                {/* Points <input type="text" value={currentJobPoints} readOnly /> */}
              </div>
            </div>

            {/* Section 4: Education Level */}
            <div className={styles.container}>
              {data?.fosq1 && (
                <div className={styles.headerLineParent}>
                  {" "}
                  <div className={styles.headingNumbers}>4</div>
                  <p></p>{" "}
                </div>
              )}

              {data?.fosq1 && (
                <div className={styles.header}>
                  <h5>{data?.fosq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.fosq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="1"
                        onChange={handleEducationChange}
                      />{" "}
                      {data?.fosq1o1}
                    </label>
                  </div>
                )}

                {data?.fosq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="2"
                        onChange={handleEducationChange}
                      />{" "}
                      {data?.fosq1o2}
                    </label>
                  </div>
                )}

                {data?.fosq1o3 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="3"
                        onChange={handleEducationChange}
                      />{" "}
                      {data?.fosq1o3}
                    </label>
                  </div>
                )}

                {data?.fosq1o4 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="4"
                        onChange={handleEducationChange}
                      />{" "}
                      {data?.fosq1o4}
                    </label>
                  </div>
                )}
                {data?.fosq1o5 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="5"
                        onChange={handleEducationChange}
                      />{" "}
                      {data?.fosq1o5}
                    </label>
                  </div>
                )}

                {data?.fosq1o6 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="6"
                        onChange={handleEducationChange}
                      />{" "}
                      {data?.fosq1o6}
                    </label>
                  </div>
                )}
                {data?.fosq1o7 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="education"
                        value="7"
                        onChange={handleEducationChange}
                      />{" "}
                      {data?.fosq1o7}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}>
                {/* Points <input type="text" value={educationPoints} readOnly /> */}
              </div>
            </div>

            {/* Section 5: Post-Secondary Education Completed in B.C. */}
            <div className={styles.container}>
              {data?.fifthSectionHeading && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>5</div>
                    <p></p>{" "}
                  </div>
                  <h4>{data?.fifthSectionHeading}</h4>
                  <h5>{data?.ffsq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.ffsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="bcEducation"
                        value="1"
                        onChange={handleBcEducationChange}
                      />{" "}
                      {data?.ffsq1o1}
                    </label>
                  </div>
                )}

                {data?.ffsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="bcEducation"
                        value="2"
                        onChange={handleBcEducationChange}
                      />{" "}
                      {data?.ffsq1o2}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}>
                {/* Points <input type="text" value={bcEducationPoints} readOnly /> */}
              </div>
            </div>

            {/* Section 6: Post-Secondary Education Completed in Canada (Outside B.C.) */}
            <div className={styles.container}>
              {data?.sixthSectionHeading && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>6</div>
                    <p></p>{" "}
                  </div>
                  <h4>{data?.sixthSectionHeading}</h4>
                  <h5>{data?.sxsq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.sxsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="canadaEducation"
                        value="1"
                        onChange={handleCanadaEducationChange}
                      />{" "}
                      {data?.sxsq1o1}
                    </label>
                  </div>
                )}

                {data?.sxsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="canadaEducation"
                        value="2"
                        onChange={handleCanadaEducationChange}
                      />{" "}
                      {data?.sxsq1o2}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}>
                {/* Points <input type="text" value={canadaEducationPoints} readOnly /> */}
              </div>
            </div>

            {/* Section 7: Are you working in one of the following occupations? */}
            <div className={styles.container}>
              {data?.seventhSectionHeading && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>7</div>
                    <p></p>{" "}
                  </div>
                  <h4>{data?.seventhSectionHeading}</h4>
                  <h5>{data?.svsq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.svsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="occupation"
                        value="1"
                        onChange={handleOccupationChange}
                      />{" "}
                      {data?.svsq1o1}
                    </label>
                  </div>
                )}

                {data?.svsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="occupation"
                        value="2"
                        onChange={handleOccupationChange}
                      />{" "}
                      {data?.svsq1o2}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}>
                {/* Points <input type="text" value={occupationPoints} readOnly /> */}
              </div>
              <div className={styles.divPofSeven}>
                {data?.svt1 && <p>{data?.svt1}</p>}
                {data?.svt2 && <p>{data?.svt2}</p>}
                {data?.svt3 && <p>{data?.svt3}</p>}
                {data?.svt4 && <p>{data?.svt4}</p>}
                {data?.svt5 && <p>{data?.svt5}</p>}
                {data?.svt6 && <p>{data?.svt6}</p>}
                {data?.svt7 && <p>{data?.svt7}</p>}
                {data?.svt8 && <p>{data?.svt8}</p>}
                {data?.svt9 && <p>{data?.svt9}</p>}
                {data?.svt10 && <p>{data?.svt10}</p>}
                {data?.svt11 && <p>{data?.svt11}</p>}
              </div>
            </div>

            {/* Section 8: Language Points */}
            <div className={styles.container}>
              {data?.egsq1 && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>8</div>
                    <p></p>{" "}
                  </div>
                  <h5>{data?.egsq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.egsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="1"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o1}
                    </label>
                  </div>
                )}

                {data?.egsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="2"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o2}
                    </label>
                  </div>
                )}
                {data?.egsq1o3 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="3"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o3}
                    </label>
                  </div>
                )}
                {data?.egsq1o4 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="4"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o4}
                    </label>
                  </div>
                )}
                {data?.egsq1o5 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="5"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o5}
                    </label>
                  </div>
                )}
                {data?.egsq1o6 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="6"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o6}
                    </label>
                  </div>
                )}
                {data?.egsq1o7 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="7"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o7}
                    </label>
                  </div>
                )}
                {data?.egsq1o8 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="8"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o8}
                    </label>
                  </div>
                )}
                {data?.egsq1o9 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="language"
                        value="9"
                        onChange={handleLanguageChange}
                      />{" "}
                      {data?.egsq1o9}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}>
                {/* Points <input type="text" value={languagePoints} readOnly /> */}
              </div>
            </div>

            {/* Section 9: Language Proficiency in both English and French */}
            <div className={styles.container}>
              {data?.nnsq1 && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>9</div>
                    <p></p>{" "}
                  </div>
                  <h4>{data?.ninthSectionHeading}</h4>
                  <h5>{data?.nnsq1}</h5>
                  {data && (
                    <p className={styles.requiredDesc}>
                      *CLB 4 or higher in each of 4 competencies on both tests
                      Required
                    </p>
                  )}
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.nnsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="languageProficiency"
                        value="1"
                        onChange={handleLanguageProficiencyChange}
                      />{" "}
                      {data?.nnsq1o1}
                    </label>
                  </div>
                )}

                {data?.nnsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="languageProficiency"
                        value="2"
                        onChange={handleLanguageProficiencyChange}
                      />{" "}
                      {data?.nnsq1o2}
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* Section 10: Hourly Wage of the B.C. Job Offer */}
            {data?.tenthHeading && (
              <div className={styles.container}>
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>10</div>
                    <p></p>{" "}
                  </div>
                  <h5>
                    {data?.tenthHeading}{" "}
                    <input
                      className={styles.enterWageInput}
                      type="number"
                      // placeholder="Enter wage"
                      onChange={handleHourlyWageChange}
                    />
                  </h5>
                </div>

                <div className={styles.points}>
                  {/* Points <input type="text" value={hourlyWagePoints} readOnly /> */}
                </div>
              </div>
            )}

            {/* Section 11: Area of Employment within B.C. */}
            <div className={styles.container}>
              {data?.elsq1 && (
                <div className={styles.headerLineParent}>
                  {" "}
                  <div className={styles.headingNumbers}>11</div>
                  <p></p>{" "}
                </div>
              )}

              {data?.elsq1 && (
                <div className={styles.header}>
                  <h5>{data?.elsq1}</h5>
                </div>
              )}

              <div className={styles.radioGroup}>
                {data?.elsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="employmentArea"
                        value="1"
                        onChange={handleEmploymentAreaChange}
                        onClick={() => setApplicableLastSection(false)}
                      />{" "}
                      {data?.elsq1o1}
                    </label>
                  </div>
                )}

                {data?.elsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="employmentArea"
                        value="2"
                        onChange={handleEmploymentAreaChange}
                        onClick={() => setApplicableLastSection(true)}
                      />{" "}
                      {data?.elsq1o2}
                    </label>
                  </div>
                )}

                {data?.elsq1o3 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="employmentArea"
                        value="3"
                        onChange={handleEmploymentAreaChange}
                        onClick={() => setApplicableLastSection(true)}
                      />{" "}
                      {data?.elsq1o3}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}></div>
            </div>

            {/* Section 12: Language Proficiency Region */}
            <div className={styles.container}>
              {data?.twsq1 && (
                <div className={styles.header}>
                  <div className={styles.headerLineParent}>
                    {" "}
                    <div className={styles.headingNumbers}>12</div>
                    <p></p>{" "}
                  </div>
                  <h5>{data?.twsq1}</h5>
                </div>
              )}
              {data && (
                <p className={styles.requiredDesc}>
                  Only Applies If You have selected Area 2 or Area 3 in the
                  question above
                </p>
              )}

              <div className={styles.radioGroup}>
                {data?.twsq1o1 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="languageProficiencyRegion"
                        value={applicableLastSection == true ? "1" : "0"}
                        // value="1"
                        disabled={!applicableLastSection}
                        onChange={handleLanguageProficiencyRegionChange}
                      />{" "}
                      {data?.twsq1o1}
                    </label>
                  </div>
                )}

                {data?.twsq1o2 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="languageProficiencyRegion"
                        value={applicableLastSection == true ? "2" : "0"}
                        // value="2"
                        disabled={!applicableLastSection}
                        onChange={handleLanguageProficiencyRegionChange}
                      />{" "}
                      {data?.twsq1o2}
                    </label>
                  </div>
                )}
                {data?.twsq1o3 && (
                  <div className={styles.radioItem}>
                    <label>
                      <input
                        type="radio"
                        name="languageProficiencyRegion"
                        value={applicableLastSection == true ? "3" : "0"}
                        // value="3"
                        disabled={!applicableLastSection}
                        onChange={handleLanguageProficiencyRegionChange}
                      />{" "}
                      {data?.twsq1o3}
                    </label>
                  </div>
                )}
              </div>
              <div className={styles.points}></div>
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
                      <h1>{totalPoints}</h1>
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
                       onClick={() => window.open("/booking", "_blank")}

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
                  <h1>{totalPoints}</h1>
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
                    onClick={() => window.open("/booking", "_blank")}
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

export default BCPNPCalculator;
