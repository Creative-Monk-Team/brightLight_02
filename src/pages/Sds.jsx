import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Sds.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FieldOfStudyTable from "../components/FieldOfStudyTable";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const Sds = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/sdsMeta")
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
    fetch("https://brightlight-node.onrender.com/sds")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sectionsRef = useRef([]);

  const handleScroll = () => {
    sectionsRef.current.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        section.classList.add(styles.visible);
      } else {
        section.classList.remove(styles.visible);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const extractStrongText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    const strongMatch = htmlString.match(/<strong>(.*?)<\/strong>/);
    return strongMatch ? strongMatch[1] : "";
  };

  const extractRemainingText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    return htmlString.replace(/<strong>.*?<\/strong>/, "").trim();
  };

  const fetchedValue1 = pData?.IfYouGraduatedLi1;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.IfYouGraduatedLi2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);
  //

  const fetchedValue3 = pData?.IfYouGradAnothLi1;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.IfYouGradAnothLi2;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  //

  const fetchedValue5 = pData?.IfYouGradCollLi1;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5);

  const fetchedValue6 = pData?.IfYouGradCollLi2;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6 = extractRemainingText(fetchedValue6);

//

  const fetchedValue91 = pData?.wcu1;
  const strongText91 = extractStrongText(fetchedValue91);
  const remainingText91 = extractRemainingText(fetchedValue91);
  
  const fetchedValue92 = pData?.wcu2;
  const strongText92 = extractStrongText(fetchedValue92);
  const remainingText92 = extractRemainingText(fetchedValue92);
  
  const fetchedValue93 = pData?.wcu3;
  const strongText93 = extractStrongText(fetchedValue93);
  const remainingText93 = extractRemainingText(fetchedValue93);
  
  const fetchedValue94 = pData?.wcu4;
  const strongText94 = extractStrongText(fetchedValue94);
  const remainingText94 = extractRemainingText(fetchedValue94);

  //

  

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
        <div className={styles.banner}>
          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>Quick Access</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("application-submission")}>
                Application Submission
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.heading} id="about-program">
        {pData?.SdsHeading}
        </h1>
        <p style={{ textAlign: "center" }}>
        {pData?.SdsPara}
        </p>

        <section
          className={`${styles.intro} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>   {pData?.WhatisStudyPerHeading}</h2>
          <p>
          {pData?.WhatisStudyPerSubHead}
          </p>
          <ul>
            <li>   {pData?.wspLi1}</li>
            <li>  {pData?.wspLi2}</li>
            <li>  {pData?.wspLi3}</li>
            <li>
            {pData?.wspLi4}
            </li>
          </ul>
          <p>
           {pData?.WhatisStudyPerLastPara}
          </p>
        </section>

        <section
          className={`${styles.fasterProcessing} ${styles.section}`}
          id="faster-processing"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
           <h2 className={styles.subheading}>
             {pData?.BenifitHeading}
          </h2>
          <p>  {pData?.BenifitSubHead}</p>
          <ul>
            <li>
             {pData?.BenLi1}
            </li>
            <li>
            {pData?.BenLi2}
            </li>
          </ul>
          <p>
          {pData?.BenNote}
          </p>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligCritTableHeading}
          </h2>
          <p>
          {pData?.EligCritTableSubHead}
          </p>
          <table className={styles.countryTable}>
            <thead>
              <tr>
                <th>{pData?.emh1}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.e2}</td>
              </tr>
              <tr>
                <td>{pData?.e3}</td>
              </tr>
              <tr>
                <td>{pData?.e4}</td>
              </tr>
              <tr>
                <td>{pData?.e5}</td>
              </tr>
              <tr>
                <td>{pData?.e6}</td>
              </tr>
              <tr>
                <td>{pData?.e7}</td>
              </tr>
              <tr>
                <td>{pData?.e8}</td>
              </tr>
              <tr>
                <td>{pData?.e9}</td>
              </tr>
              <tr>
                <td>{pData?.e10}</td>
              </tr>
              <tr>
                <td>{pData?.e11}</td>
              </tr>
              <tr>
                <td>{pData?.e12}</td>
              </tr>
              <tr>
                <td>{pData?.e13}</td>
              </tr>
              <tr>
                <td>{pData?.e14}</td>
              </tr>
              <tr>
                <td>{pData?.e15}</td>
              </tr>
            </tbody>
          </table>
          <p> <strong> {pData?.toBeEligibUnderTabHeading1}</strong></p>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.toBeEligibUnderTablist1}
            </li>
            <li>
            {pData?.toBeEligibUnderTablist2}
            </li>
            <li>{pData?.toBeEligibUnderTablist3}</li>
            <li>  {pData?.toBeEligibUnderTablist4}</li>
            <li>  {pData?.toBeEligibUnderTablist5}</li>
            <li>
            {pData?.toBeEligibUnderTablist6}
            </li>
            <li>
            {pData?.toBeEligibUnderTablist7}
            </li>
          </ul>
          <p>
          {pData?.toBeEligibUnderTabHeading2}
          </p>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.toBeEligibUnderTablist8}
            </li>
            <li>{pData?.toBeEligibUnderTablist9}</li>
            <li>{pData?.toBeEligibUnderTablist10}</li>
          </ul>
          <p>
          {pData?.toBeEligibUnderLastPara}
          </p>

          <button
            className={styles.button}
            onClick={() => (window.location.href = "/clb-ilets-calculator")}
          >
            Check CLB Score Requirements
          </button>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.HowtoApplyHeading}
          </h2>
          <h4>{pData?.HowtoApplyAppProcHead}</h4>
          <p>
           {pData?.HowtoApplyAppProcPara}
          </p>
          <ol style={{ marginLeft: "40px" }}>
            <li>
              <h3>{pData?.HowtoApplyAppProcStep1}</h3>
              <ul style={{ marginLeft: "40px" }}>
                <li>
                {pData?.HowtoApplyAppProcStep1Li1}
                </li>
                <li>
                {pData?.HowtoApplyAppProcStep1Li2}
                </li>
                <li>
                {pData?.HowtoApplyAppProcStep1Note}
                </li>
              </ul>
            </li>
            <li>
              <h3>{pData?.HowtoApplyAppProcStep2}</h3>
              <p>
              {pData?.HowtoApplyAppProcSubHStep2}
              </p>
              <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
                <li>{pData?.HowtoApplyAppProcStep2Li1}</li>
                <li>{pData?.HowtoApplyAppProcStep2Li2}</li>
                <li>{pData?.HowtoApplyAppProcStep2Li3}</li>
                <li>{pData?.HowtoApplyAppProcStep2Li4}</li>
              </ul>
            </li>
            <li>
              <h3>{pData?.HowtoApplyAppProcStep3Tab}</h3>
              <p style={{ marginBottom: "20px" }}>
              {pData?.HowtoApplyAppProcStep3TabSubH}
              </p>
              <table className={styles.fundsTable}>
                <thead>
                  <tr>
                    <th>{pData?.ProofFundTable1Head1}</th>
                    <th>{pData?.ProofFundTable2Head2}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{pData?.ProofFund1Table11}</td>
                    <td>{pData?.ProofFund1Table21}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund1Table12}</td>
                    <td>{pData?.ProofFund1Table22}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund1Table13}</td>
                    <td>{pData?.ProofFund1Table23}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund1Table14}</td>
                    <td>{pData?.ProofFund1Table24}</td>
                  </tr>
                </tbody>
              </table>
              <table className={styles.fundsTable}>
                <thead>
                  <tr>
                    <th>{pData?.ProofFundTable2Head1}</th>
                    <th>{pData?.ProofFundTable2Head2}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{pData?.ProofFund2Table11}</td>
                    <td>{pData?.ProofFund2Table21}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund2Table12}</td>
                    <td>{pData?.ProofFund2Table22}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund2Table13}</td>
                    <td>{pData?.ProofFund2Table23}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund2Table14}</td>
                    <td>{pData?.ProofFund2Table24}</td>
                  </tr>
                </tbody>
              </table>
              <table className={styles.fundsTable}>
                <thead>
                  <tr>
                    <th>{pData?.ProofFundTable3Head1}</th>
                    <th>{pData?.ProofFundTable3Head2}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{pData?.ProofFund3Table11}</td>
                    <td>{pData?.ProofFund3Table21}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund3Table12}</td>
                    <td>{pData?.ProofFund3Table22}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund3Table13}</td>
                    <td>{pData?.ProofFund3Table23}</td>
                  </tr>
                  <tr>
                    <td>{pData?.ProofFund3Table14}</td>
                    <td>{pData?.ProofFund3Table24}</td>
                  </tr>
                </tbody>
              </table>
            </li>
            <li>
              <h3>{pData?.HowtoApplyAppProcStep4}</h3>
              <p style={{ marginBottom: "20px" }}>
              {pData?.HowtoApplyAppProcSubHStep4}
              </p>
              <ul style={{ marginLeft: "40px" }}>
                <li>
                {pData?.HowtoApplyAppProcStep4Li1}
                </li>
                <li>
                {pData?.HowtoApplyAppProcStep4Li2}
                </li>
              </ul>
            </li>
            <li>
              <h3> {pData?.HowtoApplyAppProcStep5}</h3>
              <p>
              {pData?.HowtoApplyAppProcSubHStep5}
              </p>
            </li>
            <li>
              <h3>{pData?.HowtoApplyAppProcStep6}</h3>
              <p style={{ marginBottom: "20px" }}>
                {pData?.HowtoApplyAppProcSubHStep6}
              </p>
              <ul style={{ marginLeft: "40px" }}>
                <li> {pData?.HowtoApplyAppProcStep6Li1}</li>
                <li>
                {pData?.HowtoApplyAppProcStep6Li2}
                </li>
                <li>{pData?.HowtoApplyAppProcStep6Li3}</li>
                <li>{pData?.HowtoApplyAppProcStep6Li4}</li>
              </ul>
              <p style={{ marginBottom: "20px" }}>
              {pData?.HowtoApplyAppProc2TabHead}
              </p>
              <table className={styles.languageTable}>
                <thead>
                  <tr>
                    <th> {pData?.HowtoApplyAppProc2TabHead1}</th>
                    <th>{pData?.HowtoApplyAppProc2TabHead2}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{pData?.HowtoApplyAppProc2TabHead1Point1}</td>
                    <td>{pData?.HowtoApplyAppProc2TabHead2Point1}</td>
                  </tr>
                  <tr>
                    <td>{pData?.HowtoApplyAppProc2TabHead1Point2}</td>
                    <td>{pData?.HowtoApplyAppProc2TabHead2Point2}</td>
                  </tr>
                  <tr>
                    <td>{pData?.HowtoApplyAppProc2TabHead1Point3}</td>
                    <td>{pData?.HowtoApplyAppProc2TabHead2Point3}</td>
                  </tr>
                  <tr>
                    <td>{pData?.HowtoApplyAppProc2TabHead1Point4}</td>
                    <td>{pData?.HowtoApplyAppProc2TabHead2Point4}</td>
                  </tr>
                  <tr>
                    <td>{pData?.HowtoApplyAppProc2TabHead1Point5}</td>
                    <td>{pData?.HowtoApplyAppProc2TabHead2Point5}</td>
                  </tr>
                  <tr>
                    <td>{pData?.HowtoApplyAppProc2TabHead1Point6}</td>
                    <td>{pData?.HowtoApplyAppProc2TabHead2Point6}</td>
                  </tr>
                  <tr>
                    <td>{pData?.HowtoApplyAppProc2TabHead1Point7}</td>
                    <td>{pData?.HowtoApplyAppProc2TabHead2Point7}</td>
                  </tr>
                </tbody>
              </table>
            </li>
          </ol>
        </section>
        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="pgwp-requirements"
          ref={(el) => (sectionsRef.current[26] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.IfYouSubmitHeading}
          </h2>
          <h4>{pData?.IfYouSubmitSubHead}</h4>
          <p>
          {pData?.IfYouSubmitPara}
          </p>
          
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>{pData?.IfYouGraduatedHeading}</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>{strongText1} </strong> {remainingText1}
            </li>
            <li><strong>{strongText2} </strong> {remainingText2}{" "}<a href="#field-study"> Field of study Requirement </a></li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>{pData?.IfYouGraduatedAnotherHeading}</strong> </li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li><strong>{strongText3} </strong> {remainingText3}</li>
            <li><strong>{strongText4} </strong> {remainingText4}{" "}<a href="#field-study"> Field of study Requirement </a> </li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li> <strong>{pData?.IfYouGraduatedCollegeHeading}</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li><strong>{strongText5} </strong> {remainingText5}</li>
            <li> <strong>{strongText6} </strong> {remainingText6}{" "}<a href="#field-study"> Field of study Requirement </a> </li>
            </ul>
          </ul>
          <button id="field-study"
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "/clb-ilets-calculator")
            }
          >
           CLB CALCULATOR
          </button>

          <h3 > {pData?.FieldStudyRequHeading}</h3>
          <p style={{ marginTop:"20px" , marginBottom:"20px"}}>
          {pData?.FieldStudyRequPara}
          </p>
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
            <li>{pData?.fsrLi1}</li>
            <li>{pData?.fsrLi2}</li>
            <li>{pData?.fsrLi3}</li>
            <li>{pData?.fsrLi4}</li>
            <li>{pData?.fsrLi5}</li>
          </ul>

          {/* <h4 > Select Field of Study:</h4>
          <select className={styles.dropdown}>
            <option value="">Select a field</option>
            <option value="agriculture">Agriculture and Agri-food</option>
            <option value="healthcare">Healthcare</option>
            <option value="stem">Science, Technology, Engineering and Mathematics (STEM)</option>
            <option value="trade">Trade</option>
            <option value="transport">Transport</option>
          </select> */}
<FieldOfStudyTable/>
         
        </section>
        <section
          className={`${styles.family} ${styles.section}`}
          id="family"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.BringingSpouHeading}
          </h2>
          <p>
          {pData?.BringingSpouSubHead1}
          </p>
          <ul style={{ marginLeft: "40px" }}>
            <li>{pData?.BringingSpouLi1}</li>
            <li>{pData?.BringingSpouLi2}</li>
            <li>{pData?.BringingSpouLi3}</li>
          </ul>
          <p>
          {pData?.BringingSpouPara1}
          </p>
          <p>
            <strong>
            {pData?.intenationalHeading}
            </strong>{" "}
          </p>
          <p>
          {pData?.intenationalPara}
          </p>
          <ul>
            <li
              style={{
                listStyle: "none",
                marginBottom: "20px",
                marginTop: "10px",
              }}
            >
              <strong>{pData?.graduateProgHeading}</strong>
              <ul style={{ marginLeft: "40px" }}>
                <li>
                {pData?.graduateProgPara}
                </li>
              </ul>
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>{pData?.ProfessionalDegHeading}</strong>
              <li
                style={{
                  listStyle: "disc",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                {pData?.ProfessionalDegSubHead}
              </li>
              <ul style={{ marginLeft: "40px" }}>
                <li>{pData?.ProfessionalDegLi1}</li>
                <li>{pData?.ProfessionalDegLi2}</li>
                <li>{pData?.ProfessionalDegLi3}</li>
                <li>{pData?.ProfessionalDegLi4}</li>
                <li>{pData?.ProfessionalDegLi5}</li>
                <li>{pData?.ProfessionalDegLi6}</li>
                <li>{pData?.ProfessionalDegLi7}</li>
                <li>{pData?.ProfessionalDegLi8}</li>
                <li>{pData?.ProfessionalDegLi9}</li>
              </ul>
            </li>
          </ul>
        </section>

        <section
          className={`${styles.exclusions} ${styles.section}`}
          id="exclusion"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.WhoIsNotHeading}
          </h2>
          <p style={{ marginBottom: "20px" }}>
          {pData?.WhoIsNotSubHead}
          </p>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.WhoIsNotSubLi1}
            </li>
            <li>
            {pData?.WhoIsNotSubLi2}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.applicationSubmission} ${styles.section}`}
          id="application-submission"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>  {pData?.SubmAppHeading}</h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.SubmAppSubHead}
            </li>
            <li>
            {pData?.SubmAppLiHead}
              <ol style={{ marginLeft: "20px", marginBottom: "70px" }}>
                <li>  {pData?.SubmAppLi1}</li>
                <li>{pData?.SubmAppLi2}</li>
                <li>{pData?.SubmAppLi3}</li>
              </ol>
            </li>
          </ul>

          <h3>{pData?.PayBioHeading}</h3>
          <ul
            style={{
              marginTop: "10px",
              marginBottom: "50px",
              marginLeft: "40px",
            }}
          >
            <li>
            {pData?.PayBioLi1}
            </li>
            <li>
            {pData?.PayBioLi2}
            </li>
          </ul>
          <h3> {pData?.AfteApplyHeading}</h3>
          <ul
            style={{
              marginTop: "20px",
              marginBottom: "50px",
              marginLeft: "40px",
            }}
          >
            <li>
            {pData?.AfteApplyLi1}
            </li>
            <li>
            {pData?.AfteApplyLi2}
            </li>
            <li>
            {pData?.AfteApplyLi3}
            </li>
          </ul>
          <h3> {pData?.ProcessingTimeHeading}</h3>
          <ul
            style={{
              marginTop: "20px",
              marginBottom: "50px",
              marginLeft: "40px",
            }}
          >
            <li>
            {pData?.ProcessingTimeLi1}
            </li>
            <li>
            {pData?.ProcessingTimeLi2}
            </li>
          </ul>
          <h3>  {pData?.AppRefHeading}</h3>
          <p>
          {pData?.AppRefPara}
          </p>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>  {pData?.RefusalHeading}</h2>
          <p style={{ marginBottom: "20px" }}>
          {pData?.RefusalHeading}
          </p>
          <ul>
            <li>{pData?.r1}</li>
            <li> {pData?.r2}</li>
            <li> {pData?.r3}</li>
            <li> {pData?.r4}</li>
            <li> {pData?.r5}</li>
            <li> {pData?.r6}</li>
            <li> {pData?.r7}</li>
            <li> {pData?.r8}</li>
            <li>{pData?.r9}</li>
          </ul>
          <h2 className={styles.subheading}> {pData?.StillNotSureHeading}</h2>
          <p>
          {pData?.StillNotSurePara1}
          </p>
          <p className={styles.subStillPara}>
          {pData?.StillNotSurePara2}
          </p>

          <button
            className={styles.button}
            id="book-appointment"
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
         <h2>  {pData?.WhyChooseUsHeading01 }</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
              <strong>{strongText91}</strong>{" "} {remainingText91}
            </li>
            <li>
            <strong>{strongText92}</strong>{" "} {remainingText92}
            </li>
            <li>
            <strong>{strongText93}</strong>{" "} {remainingText93}
            </li>
            <li>
            <strong>{strongText94}</strong>{" "} {remainingText94}
            </li>
          </ul>
        </section>
      </div>
      <div id="faqs">
      <FAQ_White_Internal data={pData} />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blogs">
        <RecentBlogs />
      </div>
      <Footer1 />
    </>
  );
};

export default Sds;
