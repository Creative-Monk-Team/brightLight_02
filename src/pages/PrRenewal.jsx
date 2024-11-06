import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PrRenewal.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

let PrRenewal = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  const [data, setData] = useState({});
  let [pData,setPData]=useState([]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/prRenewalMeta")
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
    fetch("https://brightlight-node.onrender.com/pr-renewal")
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-the-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reason")}>
                Refusal Reason
              </p>
              <p onClick={() => scrollToSection("appointment")}>
                Book Appointment
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

      <div
        className={`${styles.section} ${styles.section}`}
        id="about-the-program"
        ref={(el) => (sectionsRef.current[100] = el)}
      >
        <h2 style={{ textAlign: "center" ,   color: "#e8c47c" }} className={styles.sectionTitle}>
        {pData?.PrRenewalHeading}
        </h2>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
        {pData?.PrRenewalPara1}
        </p>

        <p style={{ textAlign: "center", marginTop: "20px" }}>
        {pData?.PrRenewalPara2}{" "}
          <a style={{ color: "dodgerblue" }} href="/citizenship">
            Citizenship
          </a>{" "}
       
        </p>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="eligibility"
        ref={(el) => (sectionsRef.current[0] = el)}
      >
        <h2 className={styles.sectionTitle}>
        {pData?.EligibleHeading}
        </h2>
        <ul style={{ marginLeft: "40px" }} className={styles.sectionContent}>
          <li>{pData?.e1}</li>
          <li>{pData?.e2}</li>
          <li>{pData?.e3}</li>
          <li>{pData?.e4}</li>
          <li>{pData?.e5}</li>
        </ul>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="how-to-apply"
        ref={(el) => (sectionsRef.current[1] = el)}
      >
        <h2 className={styles.sectionTitle}>
        {pData?.HowApplyHeading}
        </h2>
        <p className={styles.sectionContent}>
        {pData?.HowApplyPara}
        </p>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="refusal-reason"
        ref={(el) => (sectionsRef.current[2] = el)}
      >
        <h2 className={styles.sectionTitle}>
        {pData?.RefusalHeading}
        </h2>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
        {pData?.RefusalSubHead}
        </p>
        <ul style={{ marginLeft: "40px" }} className={styles.sectionContent}>
          <li>{pData?.r1}</li>
          <li>{pData?.r2}</li>
          <li>{pData?.r3}</li>
          <li>{pData?.r4}</li>
        </ul>
      </div>

      <div
        className={`${styles.section} ${styles.section}`}
        id="appointment"
        ref={(el) => (sectionsRef.current[3] = el)}
      >
        <h2 className={styles.sectionTitle}>      {pData?.StillNotSureHeading}</h2>
        <p className={styles.sectionContent}>
        {pData?.s1}
        </p>
        <p style={{ marginTop: "20px" }}>
          {" "}
          {pData?.s2}
        </p>
        <button
          onClick={() =>
            (window.location.href =
              "/booking")
          }
        >
          Book Appointment
        </button>
      </div>

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
export default PrRenewal;
