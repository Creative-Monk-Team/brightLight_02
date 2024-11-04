import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SameSex.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const SameSex = () => {
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
    fetch("https://brightlight-node.onrender.com/sameSexMeta")
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
    fetch("https://brightlight-node.onrender.com/sameSex")
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


  const fetchedValue1 = pData?.e1;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.e2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.e3;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.py1;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  const fetchedValue5 = pData?.py2;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5);

  const fetchedValue6 = pData?.py3;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6 = extractRemainingText(fetchedValue6);

  const fetchedValue7 = pData?.py4;
  const strongText7 = extractStrongText(fetchedValue7);
  const remainingText7 = extractRemainingText(fetchedValue7);

  const fetchedValue8 = pData?.py5;
  const strongText8 = extractStrongText(fetchedValue8);
  const remainingText8 = extractRemainingText(fetchedValue8);

  //

  const fetchedValue9 = pData?.Q1;
  const strongText9 = extractStrongText(fetchedValue9);
  const remainingText9 = extractRemainingText(fetchedValue9);

  const fetchedValue10 = pData?.Q2;
  const strongText10 = extractStrongText(fetchedValue10);
  const remainingText10 = extractRemainingText(fetchedValue10);

  const fetchedValue11 = pData?.Q3;
  const strongText11 = extractStrongText(fetchedValue11);
  const remainingText11 = extractRemainingText(fetchedValue11);

  const fetchedValue12 = pData?.c1;
  const strongText12 = extractStrongText(fetchedValue12);
  const remainingText12 = extractRemainingText(fetchedValue12);

  const fetchedValue13 = pData?.c2;
  const strongText13 = extractStrongText(fetchedValue13);
  const remainingText13 = extractRemainingText(fetchedValue13);

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
              <p onClick={() => scrollToSection("common-law-partner")}>
                Common Law Partner
              </p>
              <p onClick={() => scrollToSection("conjugal-partner")}>
                Conjugal Partner
              </p>
              <p onClick={() => scrollToSection("appointment")}>Appointment</p>
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
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
         {pData?.heading}
        </h1>
        <p
          className={`${styles.paragraphIntro} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
         {pData?.description}
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          {pData?.eligibleCriteriaHeading}
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
           {pData?.eligibileSubHead}
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "-20px",
            marginBottom: "60px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <li className={styles.listItem}>
            <strong>{strongText1}</strong>{remainingText1}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText2}</strong>{remainingText2}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText3}</strong>{remainingText3}
          </li>
        </ul>

        <h2
          style={{
            fontSize: "16px",
            marginTop: "-35px",
            marginBottom: "-10px",
          }}
          className={`${styles.subtitle} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
           {pData?.SameSexPartSponHeading}
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
         {pData?.SameSexPartSponPara}
        </p>

        <h2
          className={`${styles.heading} ${styles.section}`}
          id="common-law-partner"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
           {pData?.WhatCommonLawPartHeading}
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
           {pData?.WhatCommonLawPartPara}
        </p>

        <h2
          style={{ fontSize: "18px", marginTop: "-15px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
           {pData?.ProvYourCommonLawPartHeading}
        </h2>
        <p>
        {pData?.ProvYourCommonLawPartDesc}
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          <li className={styles.listItem}>
          <strong>{strongText4}</strong>{remainingText4}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText5}</strong>{remainingText5}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText6}</strong>{remainingText6}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText7}</strong>{remainingText7}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText8}</strong>{remainingText8}
          </li>
        </ul>

        <h2
          style={{ fontSize: "18px", marginTop: "25px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
           {pData?.CommonLawRequDocuSponHeading}
        </h2>
        <p>
          {pData?.CommonLawRequDocuSponPara}
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          <li className={styles.listItem}>
           {pData?.crd1}
          </li>
          <li className={styles.listItem}>
          {pData?.crd2}
          </li>
          <li className={styles.listItem}>
          {pData?.crd3}
          </li>
          <li className={styles.listItem}>{pData?.crd4}</li>
          <li className={styles.listItem}>{pData?.crd5}</li>
          <li className={styles.listItem}>{pData?.crd6}</li>
          <li className={styles.listItem}>{pData?.crd7}</li>
          <li className={styles.listItem}>
          {pData?.crd8}
          </li>
          <li className={styles.listItem}>
          {pData?.crd9}
          </li>
          <li className={styles.listItem}>
          {pData?.crd10}
          </li>
        </ul>
        <p>
          {pData?.CommonLawRequDocuSponPara2}
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="conjugal-partner"
          ref={(el) => (sectionsRef.current[13] = el)}
        >
          {pData?.WhoQualConjHeading}
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          {pData?.WhoQualConjDisc}
        </p>

        <h2
          style={{ fontSize: "18px", marginTop: "-15px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[15] = el)}
        >
          {pData?.QualConjPartHeading}
        </h2>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[16] = el)}
        >
          <li className={styles.listItem}>
          <strong>{strongText9}</strong>{remainingText9}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText10}</strong>{remainingText10}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText11}</strong> {" "}{remainingText11}
          </li>
        </ul>

        <h2
          style={{ fontSize: "18px", marginTop: "35px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[151] = el)}
        >
          {pData?.ConjRelConsidHeading}
        </h2>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[161] = el)}
        >
          <li className={styles.listItem}>
          <strong>{strongText12}</strong>{remainingText12}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText13}</strong>{remainingText13}
          </li>
        </ul>

        <h2
          style={{ fontSize: "18px", marginTop: "35px", marginBottom: "10px" }}
          className={`${styles.heading} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[17] = el)}
        >
          {pData?.ConjPartReqDocSponHeading}
        </h2>
        <p>
        {pData?.ConjPartReqDocSponPara}
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginBottom: "10px",
            marginTop: "20px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
          <li className={styles.listItem}>{pData?.cprd1}</li>
          <li className={styles.listItem}>{pData?.cprd2}</li>
          <li className={styles.listItem}>{pData?.cprd3}</li>
          <li className={styles.listItem}>{pData?.cprd4}</li>
          <li className={styles.listItem}>{pData?.cprd5}</li>
          <li className={styles.listItem}>{pData?.cprd6}</li>
          <li className={styles.listItem}>{pData?.cprd7}</li>
          <li className={styles.listItem}>{pData?.cprd8}</li>
          <li className={styles.listItem}>{pData?.cprd9}</li>
          <li className={styles.listItem}>{pData?.cprd10}</li>
          <li className={styles.listItem}>{pData?.cprd11}</li>
          <li className={styles.listItem}>{pData?.cprd12}</li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="appointment"
          ref={(el) => (sectionsRef.current[19] = el)}
        >
          {pData?.StillNotHeading}
        </h2>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[20] = el)}
        >
          {pData?.StillNotPara}
        </p>
        <button
          className={styles.button}
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-u"
          ref={(el) => (sectionsRef.current[99] = el)}
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

export default SameSex;
