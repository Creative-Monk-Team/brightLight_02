import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/HealthAuthoritiesStream.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const HealthAuthorityStream = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([])

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
    fetch("https://brightlight-node.onrender.com/healthAuthorityStreamMeta")
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
    fetch("https://brightlight-node.onrender.com/health-authority-stream")
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

  
  const fetchedValue = pData?.BenifitsList1;
  const strongText = extractStrongText(fetchedValue);
  const remainingText = extractRemainingText(fetchedValue);

  const fetchedValue1 = pData?.BenifitsList2;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.BenifitsList3;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.BenifitsList4;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.BenifitsList5;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
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

      <div className={styles.container} id="container">
        <h1
          className={`${styles.title} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
         {pData?.Heading}
        </h1>
        <p
          style={{ textAlign: "center" }}
          className={`${styles.description} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          {pData?.Description}
        </p>
        <p
          style={{ textAlign: "center" }}
          className={`${styles.description} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
           {pData?.topSectionNote}
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
           {pData?.BenifitsHeading}
        </h2>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <li className={styles.listItem}>
         <strong>{strongText}</strong>{" "} {remainingText}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText1}</strong>{" "} {remainingText1}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText2}</strong>{" "} {remainingText2}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText3}</strong>{" "} {remainingText3}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText4}</strong>{" "} {remainingText4}
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          {pData?.EligibilityHeading}
        </h2>
        <p>
        {pData?.EligibilitySubHead}
        </p>
        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          1. Job Offer
        </h3>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <li className={styles.listItem}>
          {pData?.EligibilityList1}
            <ol className={styles.nestedList}>
              <li className={styles.nestedListItem}>
              {pData?.EligibilityList1NestedList1}
              </li>
              <li className={styles.nestedListItem}>
              {pData?.EligibilityList1NestedList2}
              </li>
              <li className={styles.nestedListItem}>{pData?.EligibilityList1NestedList3}</li>
              <li className={styles.nestedListItem}>{pData?.EligibilityList1NestedList4}</li>
              <li className={styles.nestedListItem}>{pData?.EligibilityList1NestedList5}</li>
              <li className={styles.nestedListItem}>{pData?.EligibilityList1NestedList6}</li>
              <li className={styles.nestedListItem}>
              {pData?.EligibilityList1NestedList7}
              </li>
              <li className={styles.nestedListItem}>{pData?.EligibilityList1NestedList8}</li>
            </ol>
          </li>
          <li className={styles.listItem}>
          {pData?.EligibilityList1Point2}
          </li>
        </ul>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          2. {pData?.EligibilityList2}
        </h3>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <li className={styles.listItem}>
          {pData?.EligibilityList2NestedList1}
          </li>
        </ul>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing7"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          3.  {pData?.EligibilityList3}
        </h3>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing8"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          <li className={styles.listItem}>
          {pData?.EligibilityList3NestedList1}
          </li>
        </ul>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing9"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          4.  {pData?.EligibilityList4}
        </h3>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing10"
          ref={(el) => (sectionsRef.current[13] = el)}
        >
          <li className={styles.listItem}>
          {pData?.EligibilityList4NestedList1}
          </li>
          <li className={styles.listItem}>
          {pData?.EligibilityList4NestedList2}
          </li>
        </ul>

        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing11"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          5.  {pData?.EligibilityList5}
        </h3>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing12"
          ref={(el) => (sectionsRef.current[15] = el)}
        >
          <li className={styles.listItem}>
          {pData?.EligibilityList5NestedList1}
          </li>
        </ul>

        <h2
          style={{ opacity: "1", transform: "translateX(0)" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="how-to-apply-3"
          ref={(el) => (sectionsRef.current[19] = el)}
        >
         {pData?.ExpEntryOptionHeading}
        </h2>
        <p className={styles.description}>
        {pData?.ExpEntryOptionPara1}
        </p>
        <p className={styles.description}>
        {pData?.ExpEntryOptionPara2}
        </p>
      
        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[16] = el)}
        >
           {pData?.ApplyHeading}
        </h2>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing13"
          ref={(el) => (sectionsRef.current[17] = el)}
        >
          <li className={styles.listItem}>
          {pData?.ApplyList1}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList2}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList3}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList4}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList5}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList6}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList7}
          </li>
        </ul>
        <button
          className={styles.button}
          onClick={() => (window.location.href = "/bcpnp-calculator")}
        >
          Calculate Your BCPNP Score
        </button>

        <h2 className={styles.subtitle} id="book-appointment">
        {pData?.StillNotSureHeading}
        </h2>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing14"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
            {pData?.StillNotSurePara1}
        </p>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing15"
          ref={(el) => (sectionsRef.current[19] = el)}
        >
        {pData?.StillNotSurePara2}
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

        {/* <Link to="/booking" className={styles.button}>Book Appointment</Link> */}

        {/* <a href="" className={styles.button}></a> */}
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[91] = el)}
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

export default HealthAuthorityStream;
