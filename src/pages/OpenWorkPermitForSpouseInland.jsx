import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/OpenWorkPermitForSpouseInland.module.css";
import { Link } from "react-router-dom";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import OurProcess from "../sections/OurProcess";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const OpenWorkPermitForSpouseInland = () => {
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
    fetch("https://brightlight-node.onrender.com/OpenWorkPermitForSpouseInMeta")
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
    fetch("https://brightlight-node.onrender.com/OpenWorkPermitForSpouseIn")
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
          <header className={styles.header}>
            {/* <h1>Open Work Permit</h1> */}
          </header>
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
              <p onClick={() => scrollToSection("benefits")}>Benfits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>
              {pData?.OpenWorkPermitForSpouseHeading}
              </h1>
              <p>
              {pData?.OpenWorkPermitForSpousePara}
              </p>
              <p
                style={{
                  marginTop: "20px",
                  marginBottom: "20px",
                  textAlign: "left",
                }}
              >
                {pData?.OpenWorkPerSpouListHead}
              </p>

              <ul style={{ marginLeft: "40px" }}>
                <li style={{ fontWeight: "600" }}>
                 {pData?.OpenWorkPerSpouLi1}
                </li>

                <li style={{ fontWeight: "600" }}>
                {pData?.OpenWorkPerSpouLi2}
                </li>
              </ul>
            </header>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="benefits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>
            {pData?.BenifitsHeading}
            </h2>
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
              <li>{pData?.b4}</li>
              <li>
              {pData?.b5}{" "}
              </li>
              <li>{pData?.b6}</li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>
            {pData?.EligibilityHeading}
            </h2>
            <ol style={{ marginLeft: "40px" }}>
              <li>
              {pData?.EligLi1}
              </li>
              <li>
              {pData?.EligLi2}
              </li>
              <li>
              {pData?.EligLi3}
              </li>
              <li>
              {pData?.EligLi4}
              </li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[25] = el)}
          >
            <h2>
            {pData?.HowApplyHeading}
            </h2>
            <ol style={{ marginLeft: "40px" }}>
              <li>
              {pData?.ha1}
              </li>
              <li>
              {pData?.ha2}
              </li>
              <li>
              {pData?.ha3}
              </li>
              <li>
              {pData?.ha4}
              </li>

              <li>{pData?.ha5}</li>

              <li>
              {pData?.ha6}
              </li>
              <li>{pData?.ha6}</li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[35] = el)}
          >
            <h2>
            {pData?.RefusalHeading}
            </h2>
            <ol style={{ marginLeft: "40px" }}>
              <li>
              {pData?.r1}
              </li>
              <li>
              {pData?.r2}
              </li>
              <li>
              {pData?.r3}
              </li>
              <li>
              {pData?.r4}
              </li>
            </ol>
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
        </main>
      </div>
      <OurProcess />

      <div id="faqs">
        <FAQ />
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

export default OpenWorkPermitForSpouseInland;
