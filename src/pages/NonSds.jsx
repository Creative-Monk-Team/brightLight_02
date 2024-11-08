import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/NonSds.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FieldOfStudyTable from "../components/FieldOfStudyTable";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const NonSds = () => {
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
    fetch("https://brightlight-node.onrender.com/nonSdsMeta")
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
    fetch("https://brightlight-node.onrender.com/nonSds")
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


  // const fetchedValue = pData?.er1li3Head;
  // const strongText = extractStrongText(fetchedValue);
  // const remainingText = extractRemainingText(fetchedValue);

  const fetchedValue1 = pData?.sub1Li1SubLi1;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.sub1Li1SubLi2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.sub2Li1SubLi1;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.sub2Li1SubLi2;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  const fetchedValue5 = pData?.sub3Li1SubLi1;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5);

  const fetchedValue6 = pData?.sub3Li1SubLi2;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6 = extractRemainingText(fetchedValue6);


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
              <p onClick={() => scrollToSection("language-chart")}>
                Language Chart
              </p>
              <p onClick={() => scrollToSection("spousal-permit")}>
                Spousal Permit{" "}
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                {" "}
                Book Appointment{" "}
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
        <h1
          c
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
         {pData?.nonSdsHeading}
        </h1>

        <section className={styles.intro}>
          <p>
          {pData?.nonSdsPara1}
          </p>
          <p>
          {pData?.nonSdsPara2}
          </p>
          <p>
          {pData?.nonSdsPara3}
          </p>
        </section>

        <section
          className={`${styles.prosCons} ${styles.section}`}
          id="pros-cons"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>{pData?.ProsConsHeading}</h2>
          <div className={styles.grid}>
            <div className={styles.pros}>
              <h3>{pData?.ProsHeading}</h3>
              <ul style={{marginLeft: "40px"}}>
                <li>{pData?.ProsLi1}</li>
                <li>{pData?.ProsLi2}</li>
                <li>{pData?.ProsLi3}</li>
                <li>{pData?.ProsLi4}</li>
              </ul>
            </div>
            <div className={styles.cons}>
              <h3>{pData?.ConsHeading}</h3>
              <ul style={{marginLeft: "40px"}}>
                <li>{pData?.ConsLi1}</li>
                <li>{pData?.ConsLi2}</li>
                <li>{pData?.ConsLi3}</li>
                <li>{pData?.ConsLi4}</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>{pData?.EligibilityHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.e1}
            </li>
            <li>
            {pData?.e2}
            </li>
            <li>
            {pData?.e3}
            </li>
            <li>
            {pData?.e4}
            </li>
            <li>
            {pData?.e4}
            </li>
          </ul>

          <div
            className={`${styles.languageChart} ${styles.section}`}
            id="language-chart"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h3>{pData?.eligibTabHeading}</h3>
            <table>
              <thead>
                <tr>
                  <th>{pData?.eligibTabEnglanTestHead1}</th>
                  <th>{pData?.eligibTabMinScReqSDSHead2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.eligibTab1Value1}</td>
                  <td>{pData?.eligibTab2Value1}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value2}</td>
                  <td>{pData?.eligibTab2Value2}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value3}</td>
                  <td>{pData?.eligibTab2Value3}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value4}</td>
                  <td>{pData?.eligibTab2Value4}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value5}</td>
                  <td>{pData?.eligibTab2Value5}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value6}</td>
                  <td>{pData?.eligibTab2Value6}</td>
                </tr>
                <tr>
                  <td>{pData?.eligibTab1Value7}</td>
                  <td>{pData?.eligibTab2Value7}</td>
                </tr>
              </tbody>
            </table>

            <h2 style={{ marginTop: "50px" }}>
            {pData?.CheckCLBHeading}
            </h2>

            <button
              className={styles.button}
              onClick={() => (window.location.href = "/clb-ilets-calculator")}
            >
              CLB Calculator
            </button>
          </div>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.AppProcesHeading}
          </h2>
          <p>
          {pData?.AppProcesSubHeading}
          </p>
          <ul>
            <li>{pData?.ap1}</li>
            <li>{pData?.ap2}</li>
            <li>{pData?.ap3}</li>
            <li>{pData?.ap4}</li>
            <li>{pData?.ap5}</li>
            <li>{pData?.ap6}</li>
            <li>{pData?.ap7}</li>
            <li>{pData?.ap8}</li>
            <li>{pData?.ap9}</li>
          </ul>
        </section>

        <section
          className={`${styles.proofOfFunds} ${styles.section}`}
          id="proof-of-funds"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.ProofFundHeading}
          </h2>
          <table>
            <thead>
              <tr>
                <th>{pData?.ProofFundTable1Head1}</th>
                <th>{pData?.ProofFundTable1Head2}</th>
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

          <table>
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
          <table>
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

        </section>
        
        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="pgwp-requirements"
          ref={(el) => (sectionsRef.current[26] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.submitHeading}
          </h2>
          <h4>{pData?.submitSubHead}</h4>
          <p>
          {pData?.submitSubPara}
          </p>
          
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>{pData?.submit1List1}</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>{strongText1} </strong> {remainingText1}
            </li>
            <li> <strong>{strongText2} </strong> {remainingText2} {" "}<a href="#field-study"> Field of study Requirement </a></li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li><strong>{pData?.submit2List1}</strong> </li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>{strongText3} </strong> {remainingText3}</li>
            <li> <strong>{strongText4} </strong> {remainingText4}{" "}<a href="#field-study"> Field of study Requirement </a> </li>
            </ul>
          </ul>

         
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
          <li> <strong>{pData?.submit3List1}</strong></li>
          <ul style={{ marginLeft: "40px", listStyleType: "circle" }}>
            <li> <strong>{strongText5} </strong> {remainingText5}</li>
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

          <h3 >{pData?.FieldStudyRequHeading}</h3>
          <p style={{ marginTop:"20px" , marginBottom:"20px"}}>
          {pData?.FieldStudyRequSubHead}
          </p>
          <ul style={{ marginLeft: "40px", marginTop:"20px"}}>
            <li>{pData?.fsrLi1}</li>
            <li>{pData?.fsrLi2}</li>
            <li>{pData?.fsrLi3}</li>
            <li>{pData?.fsrLi4}</li>
            <li>{pData?.fsrLi5}</li>
          </ul>

          {/* <h4 > Select Field of Study:</h4> */}
          {/* <select className={styles.dropdown}>
            <option value="">Select a field</option>
            <option value="agriculture">Agriculture and Agri-food</option>
            <option value="healthcare">Healthcare</option>
            <option value="stem">Science, Technology, Engineering and Mathematics (STEM)</option>
            <option value="trade">Trade</option>
            <option value="transport">Transport</option>
          </select> */}

         <FieldOfStudyTable/>
        </section>
        
        <h3 style={{ marginBottom: "20px" }}>
        {pData?.ProofFundTableOpenPermitHeading}
        </h3>
        <p>
        {pData?.ProofFundTableOpenPermitPara}
        </p>

        <section
          className={`${styles.spousalPermit} ${styles.section}`}
          id="spousal-permit"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <ul>
            <li style={{ listStyle: "none" }}>
              <strong>{pData?.GradProgHeading}</strong>
              <ul style={{marginLeft: "40px"}}>
                <li>
                {pData?.GradProgPara}
                </li>
              </ul>
            </li>
            <li style={{ listStyle: "none" }}>
              <strong>{pData?.ProfDegProgHeading}</strong>
              <li
                style={{
                  listStyle: "disc",
                  marginLeft: "40px",
                  marginTop: "10px",
                }}
              >
              {pData?.ProfDegProgSubHead}
              </li>
              <ul style={{ marginLeft: "80px" }}>
                <li>{pData?.ProfDegProgList1}</li>
                <li>{pData?.ProfDegProgList2}</li>
                <li>{pData?.ProfDegProgList3}</li>
                <li>{pData?.ProfDegProgList4}</li>
                <li>{pData?.ProfDegProgList5}</li>
                <li>{pData?.ProfDegProgList6}</li>
                <li>{pData?.ProfDegProgList7}</li>
                <li>{pData?.ProfDegProgList8}</li>
                <li>{pData?.ProfDegProgList9}</li>
              </ul>
            </li>
          </ul>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.RefusalHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
            <li>{pData?.r3}</li>
            <li>{pData?.r4}</li>
            <li>
            {pData?.r5}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.bookAppointment} ${styles.section}`}
          id="book-appointment"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h2 className={styles.subheading}>{pData?.InCaseHeading}</h2>
          <p>
          {pData?.inCase1}
          </p>
          <p>
          {pData?.inCase2}
          </p>

          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "/booking")
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
      {pData?.show_testimonials == "Y" && (
        <div id="testimonials">
          <Testimonials />
        </div>
      )}
      <div id="blogs">
        <RecentBlogs />
      </div>
      <Footer1 />
    </>
  );
};

export default NonSds;
