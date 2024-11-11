import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PermanentResidencePathwaysCaregiversLP.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const PermanentResidencePathwaysCaregiversLP = () => {
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
    fetch("https://brightlight-node.onrender.com/permanResidPathCareMeta")
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
    fetch("https://brightlight-node.onrender.com/permanentResidencyPathwayCaregiver")
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
  const fetchedValue1 = pData?.ec1;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.ec2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.ScrollHeading1;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.ScrollHeading2;
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              {/* <p onClick={() => scrollToSection("pathways")}>Pathways</p> */}
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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

      <div className={styles.container} id="container"> 
        <h1
          style={{ marginTop: "50px" }}
          className={`${styles.title} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
         {pData?.heading}
        </h1>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
         {pData?.description}
        </p>
        <h2 className={styles.subtitle} style={{ marginTop: "50px" }}>
        {pData?.HerePermanentResHeading}
        </h2>
        <ul style={{marginLeft: "40px"}} className={styles.list}>
          <li>
            <a href="#CategoryA">
              <strong>{strongText3}</strong> {remainingText3}
            </a>
          </li>
          <li>
            <a href="#CategoryB">
            <strong>{strongText4}</strong> {remainingText4}
            </a>
          </li>
        </ul>
        <h2
          style={{ marginTop: "50px" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
         {pData?.BenifitHeading}
        </h2>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
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
        <h2
          style={{ marginTop: "50px" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
         {pData?.eligibleCriteriaHeading}
        </h2>
        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="category"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
             {pData?.eligibileSubHead1}
        </h3>
        <p style={{ marginTop: "10px" }}>
        {pData?.eligibileSubHead1Para}
        </p>
        <h4 style={{ marginTop: "20px" }}>
        {pData?.NocListHeading}
        </h4>
        <ul
          style={{ marginTop: "30px", marginLeft: "40px" }}
          className={`${styles.listStrong} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <li>
            <strong>{strongText1}</strong> {remainingText1}
          </li>
          <li>
          <strong>{strongText2}</strong> {remainingText2}
          </li>
        </ul>
        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
             {pData?.eligibileSubHead2}
        </h3>
        <p>{pData?.eligibileSubHead2Para}</p>
        <ul
          style={{ marginTop: "30px", marginLeft: "40px" }}
          className={`${styles.list} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
          <li>
          {pData?.ec3}
          </li>
          <li>
          {pData?.ec4}
          </li>
        </ul>
        <h3
          style={{ marginTop: "30px" }}
          className={`${styles.subheading} ${styles.section}`}
          id="testng6"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
           {pData?.eligibileSubHead3}
        </h3>
        <p> {pData?.eceligibileSubHead3Para3}</p>
        <ul
          style={{ marginTop: "30px", marginLeft: "40px" }}
          className={`${styles.list} ${styles.section}`}
          id="testing7"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
          <li>
            <ul>
              <li>
              {pData?.ec5}
              </li>
              <li>
              {pData?.ec6}
              </li>
            </ul>
          </li>
        </ul>
        <h3
          style={{ marginTop: "30px" }}
          className={`${styles.subheading} ${styles.section}`}
          id="testing8"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
         {pData?.eligibileSubHead4}
        </h3>
        <ul
          style={{ marginTop: "30px", marginLeft: "40px" }}
          className={`${styles.list} ${styles.section}`}
          id="testing9"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          <li> {pData?.ec7}</li>
          <li>{pData?.ec8}</li>
          <li>{pData?.ec9}</li>
          <li>{pData?.ec10}</li>
        </ul>
        <h3
          style={{ marginTop: "30px" }}
          className={`${styles.subheading} ${styles.section}`}
          id="testing10"
          ref={(el) => (sectionsRef.current[13] = el)}
        >
         {pData?.eligibileSubHead5}
        </h3>
        <h4
          style={{ marginTop: "20px" }}
          className={`${styles.subheading} ${styles.section}`}
          id="CategoryA"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
         {pData?.eligibileSubHead5Head1}
        </h4>
        <p style={{ marginTop: "10px" }}>
          {pData?.eligibileSubHead5Para1}
          <ul
            style={{ marginTop: "30px", marginLeft: "40px" }}
            className={`${styles.list} ${styles.section}`}
            id="testing11"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
            <li>
            {pData?.ec11}
            </li>
            <li>
            {pData?.ec12}
            </li>
          </ul>
        </p>
        <h4
          className={`${styles.subheading} ${styles.section}`}
          id="CategoryB"
          ref={(el) => (sectionsRef.current[16] = el)}
        >
            {pData?.eligibileSubHead5Head2}
        </h4>
        <p>
          {pData?.eligibileSubHead5Para2}
        </p>
        <h2
          style={{ marginTop: "30px" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="testing13"
          ref={(el) => (sectionsRef.current[17] = el)}
        >
           {pData?.howToApplyHeading}
          </h2>
        <ol
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing14"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
          <li>{pData?.ha1}</li>
          <li>{pData?.ha2}</li>
          <li>{pData?.ha3}</li>
          <li>{pData?.ha4}</li>
        </ol>
        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing15"
          ref={(el) => (sectionsRef.current[19] = el)}
        >
           {pData?.NowApplyGainHeading}
        </h3>
        <ol
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing16"
          ref={(el) => (sectionsRef.current[20] = el)}
        >
          <li>{pData?.ge1}</li>
          <li>{pData?.ge2}</li>
          <li>{pData?.ge3}</li>
          <li>{pData?.ge4}</li>
          <li>{pData?.ge5}</li>
          <li>{pData?.ge6}</li>
          <li>{pData?.ge7}</li>
        </ol>
        <h3
          className={`${styles.subheading} ${styles.section}`}
          id="testing17"
          ref={(el) => (sectionsRef.current[21] = el)}
        >
       {pData?.NowApplyDirectHeading}
        </h3>
        <ol
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing18"
          ref={(el) => (sectionsRef.current[22] = el)}
        >
          <li>{pData?.dc1}</li>
          <li>{pData?.dc2}</li>
          <li>{pData?.dc3}</li>
          <li>{pData?.dc4}</li>
        </ol>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[23] = el)}
        >
         {pData?.StillNotSureHeading}
        </h2>
        <p
          className={`${styles.description5} ${styles.section}`}
          id="testing19"
          ref={(el) => (sectionsRef.current[24] = el)}
        >
          {pData?.StillNotSurePara1}
        </p>
        <p style={{ marginBottom: "30px" }}>
        {pData?.StillNotSurePara2}
        </p>
        <button
          className={styles.bookAppointment}
          onClick={() =>
            (window.location.href =
              "/booking")
          }
        >
          Book Appointment
        </button>
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[99] = el)}
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

export default PermanentResidencePathwaysCaregiversLP;
