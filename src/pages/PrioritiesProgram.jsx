import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PrioritiesProgram.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const PrioritiesProgram = () => {
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
    fetch("https://brightlight-node.onrender.com/prioritiesProgramMeta")
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
    fetch("https://brightlight-node.onrender.com/priorities-program-page")
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>
                Eligibility Criteria
              </p>
              <p onClick={() => scrollToSection("Priority_Occupation_List")}>
                Priority Occupation List
              </p>
              <p onClick={() => scrollToSection("BCPNP_Calculator")}>
                BCPNP Calculator
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("Testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("FAQs")}>FAQs</p>
              <p onClick={() => scrollToSection("Blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section
          className={`${styles.header} ${styles.section}`}
          id="benefits-2"
          ref={(el) => (sectionsRef.current[30] = el)}
        >
          <h3 style={{ textAlign: "center", color: "#e8c47c" }}>
          {pData?.heading}
          </h3>
          <p
            style={{
              marginTop: "20px",
              marginBottom: "50px",
              textAlign: "center",
            }}
          >
           {pData?.description}
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h3>{pData?.benefitsHeading}</h3>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.b1}
            </li>
            <li>
            {pData?.b2}
            </li>
            <li>
            {pData?.b3}
            </li>
            <li>
            {pData?.b4}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h3>{pData?.eligibilityHeading}</h3>
          <ol style={{ marginLeft: "40px" }}>
            <li>
            {pData?.elibilityP1}
              <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
                <li>
                  <a href="/skilled-worker" className={styles.link}>
                    BCPNP Skilled Worker
                  </a>
                </li>
                <li>
                  <a href="/international-graduate" className={styles.link}>
                    BCPNP International Graduate
                  </a>
                </li>
              </ul>
            </li>
            <li>
            {pData?.elibilityP2}
            </li>
          </ol>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="Priority_Occupation_List"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h3>{pData?.pOL}</h3>

          <div
            className={`${styles.occupationList} ${styles.section}`}
            id="testing1"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h4>{pData?.childcareHeading}</h4>
            <p className={styles.sectionPara}>
            {pData?.childcarePara1}
            </p>
            <p className={styles.sectionPara}>
            {pData?.childcarePara2}
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{pData?.t1h1}</th>
                  <th>{pData?.t1h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.t1r1c1}</td>
                  <td>{pData?.t1r1c2}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className={`${styles.occupationList} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h4>{pData?.construction}</h4>
            <p style={{ marginBottom: "20px" }}>
            {pData?.constuctionDesc}
            </p>
            <ol
              style={{
                marginBottom: "20px",
                lineHeight: "1.5",
                marginLeft: "40px",
              }}
            >
              <li>
              {pData?.cd1}
              </li>
              <li>
              {pData?.cd2}
              </li>
              <li>
              {pData?.cd3}
              </li>
              <li>
              {pData?.cd4}
              </li>
            </ol>
            <p style={{ marginBottom: "40px" }}>
              For a comprehensive list of eligible National Occupational
              Classification (NOC) codes, please refer to the NOC list below:
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{pData?.t2h1}</th>
                  <th>{pData?.t2h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.t2r1c1}</td>
                  <td>{pData?.t2r1c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r2c1}</td>
                  <td>{pData?.t2r2c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r3c1}</td>
                  <td>{pData?.t2r3c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r4c1}</td>
                  <td>{pData?.t2r4c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r5c1}</td>
                  <td>{pData?.t2r5c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r6c1}</td>
                  <td>{pData?.t2r6c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r7c1}</td>
                  <td>{pData?.t2r7c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r8c1}</td>
                  <td>{pData?.t2r8c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r9c1}</td>
                  <td>{pData?.t2r9c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r10c1}</td>
                  <td>{pData?.t2r10c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r11c1}</td>
                  <td>{pData?.t2r11c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r12c1}</td>
                  <td>{pData?.t2r12c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r13c1}</td>
                  <td>{pData?.t2r13c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r14c1}</td>
                  <td>{pData?.t2r14c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r15c1}</td>
                  <td>{pData?.t2r15c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r16c1}</td>
                  <td>{pData?.t2r16c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r17c1}</td>
                  <td>{pData?.t2r17c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r18c1}</td>
                  <td>{pData?.t2r18c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r19c1}</td>
                  <td>{pData?.t2r19c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r20c1}</td>
                  <td>{pData?.t2r20c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r21c1}</td>
                  <td>{pData?.t2r21c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r22c1}</td>
                  <td>{pData?.t2r22c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r23c1}</td>
                  <td>{pData?.t2r23c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r24c1}</td>
                  <td>{pData?.t2r24c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t2r25c1}</td>
                  <td>{pData?.t2r25c2}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.occupationList}>
            <h4> {pData?.hpHeading}</h4>
            <ul style={{ marginLeft: "40px" }}>
              <li>
              {pData?.hpl1}
              </li>
              <li>
              {pData?.hpl12}
              </li>
              <li>
              {pData?.hpl13}
              </li>
            </ul>
            <p>
              For a comprehensive list of eligible National Occupational
              Classification (NOC) codes, please refer to the NOC list below:
            </p>
            <table
              className={`${styles.table} ${styles.section}`}
              id="testing3"
              ref={(el) => (sectionsRef.current[5] = el)}
            >
              <thead>
                <tr>
                  <th>{pData?.t3h1}</th>
                  <th>{pData?.t3h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.t3r1c1}</td>
                  <td>{pData?.t3r1c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r2c1}</td>
                  <td>{pData?.t3r2c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r3c1}</td>
                  <td>{pData?.t3r3c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r4c1}</td>
                  <td>{pData?.t3r4c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r5c1}</td>
                  <td>{pData?.t3r5c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r6c1}</td>
                  <td>{pData?.t3r6c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r7c1}</td>
                  <td>{pData?.t3r7c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r8c1}</td>
                  <td>{pData?.t3r8c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r9c1}</td>
                  <td>{pData?.t3r9c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r10c1}</td>
                  <td>{pData?.t3r10c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r11c1}</td>
                  <td>{pData?.t3r11c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r12c1}</td>
                  <td>{pData?.t3r12c2}</td>
                </tr>
                <tr>
                  <td>
                  {pData?.t3r13c1}
                  </td>
                  <td>{pData?.t3r13c2}</td>
                </tr>
                <tr>
                  <td>
                  {pData?.t3r14c1}
                  </td>
                  <td>{pData?.t3r14c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r15c1}</td>
                  <td>{pData?.t3r15c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r16c1}</td>
                  <td>{pData?.t3r16c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r17c1}</td>
                  <td>{pData?.t3r17c2}</td>
                </tr>
                <tr>
                  <td>
                  {pData?.t3r18c1}
                  </td>
                  <td>{pData?.t3r18c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r19c1}</td>
                  <td>{pData?.t3r19c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r20c1}</td>
                  <td>{pData?.t3r20c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r21c1}</td>
                  <td>{pData?.t3r21c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r22c1}</td>
                  <td>{pData?.t3r22c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r23c1}</td>
                  <td>{pData?.t3r23c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r24c1}</td>
                  <td>{pData?.t3r24c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r25c1}</td>
                  <td>{pData?.t3r25c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r26c1}</td>
                  <td>{pData?.t3r26c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r27c1}</td>
                  <td>{pData?.t3r27c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r28c1}</td>
                  <td>{pData?.t3r28c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r29c1}</td>
                  <td>{pData?.t3r29c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t3r30c1}</td>
                  <td>{pData?.t3r30c2}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.occupationList}>
            <h4>{pData?.tsoHeading}</h4>
            <p style={{ marginBottom: "20px" }}>
              {pData?.tsoDesc1}
            </p>
            <p>
            {pData?.tsoDesc2}
            </p>
            <ol style={{ marginLeft: "40px" }}>
              <li>
              {pData?.tsol1}
              </li>
              <li>
              {pData?.tsol2}
              </li>
              <li>
              {pData?.tsol3}
              </li>
              <li>
              {pData?.tsol4}
              </li>
            </ol>
            <p>
            {pData?.comprList}
            </p>
            <table
              className={`${styles.table} ${styles.section}`}
              id="testing4"
              ref={(el) => (sectionsRef.current[6] = el)}
            >
              <thead>
                <tr>
                  <th>{pData?.t4h1}</th>
                  <th>{pData?.t4h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.t4r1c1}</td>
                  <td>{pData?.t4r1c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r2c1}</td>
                  <td>{pData?.t4r2c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r3c1}</td>
                  <td>{pData?.t4r3c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r4c1}</td>
                  <td>{pData?.t4r4c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r5c1}</td>
                  <td>{pData?.t4r5c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r6c1}</td>
                  <td>{pData?.t4r6c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r7c1}</td>
                  <td>{pData?.t4r7c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r8c1}</td>
                  <td>{pData?.t4r8c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r9c1}</td>
                  <td>{pData?.t4r9c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r10c1}</td>
                  <td>{pData?.t4r10c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r11c1}</td>
                  <td>{pData?.t4r11c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r12c1}</td>
                  <td>{pData?.t4r12c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r13c1}</td>
                  <td>{pData?.t4r13c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t4r14c1}</td>
                  <td>{pData?.t4r14c2}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className={`${styles.occupationList} ${styles.section}`}
            id="testing5"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <h4>{pData?.vcHeading}</h4>
             <p style={{ marginBottom: "20px" }}>
              {pData?.vcDesc1}
            </p>
            <p style={{ marginBottom: "20px" }}>
            {pData?.vcDesc2}
            </p>
            <p style={{ marginBottom: "20px" }}>
            {pData?.vcDesc3}
            </p>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{pData?.t5h1}</th>
                  <th>{pData?.t5h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.t5r1c1}</td>
                  <td>{pData?.t5r1c2}</td>
                </tr>
                <tr>
                  <td>{pData?.t5r2c1}</td>
                  <td>{pData?.t5r2c2}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            Calculate your BCPNP score
          </button>
        </section>

        <section
          className={`${styles.callToAction} ${styles.section}`}
          id="BCPNP_Calculator"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <h3 style={{ marginBottom: "20px" }}>
          {pData?.applicationHeading}
          </h3>
          <ol style={{ marginLeft: "40px" }}>
            <li>
            {pData?.a1}
              <ul>
                <li>
                {pData?.a1l1}
                </li>
                <li>
                {pData?.a1l2}
                </li>
                <li>
                {pData?.a1l3}
                </li>
              </ul>
            </li>
            <li>
            {pData?.a2}
              <ul>
                <li>
                {pData?.a2l1}
                </li>
              </ul>
            </li>
            <li>
            {pData?.a3}
              <ul>
                <li>
                {pData?.a3l1}
                </li>
              </ul>
            </li>
            <li>
            {pData?.a4}
              <ul>
                <li>
                {pData?.a4l1}
                </li>
              </ul>
            </li>
            <li>
            {pData?.a5}
              <ul>
                <li>
                {pData?.a5l1}
                </li>
              </ul>
            </li>
          </ol>

          <h3 style={{ marginTop: "50px" }}>{pData?.StillNotHeading}</h3>
          <p>
          {pData?.s1}
          </p>
          <button
            id="book-appointment"
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
          <ul className={styles.whychooseusLi} style={{marginLeft: "40px"}}>
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

export default PrioritiesProgram;
