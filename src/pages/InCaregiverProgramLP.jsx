import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/InCaregiverProgramLP.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const InCaregiverProgramLP = () => {
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
    fetch("https://brightlight-node.onrender.com/inHomeCaregiverProgramLpMeta")
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
    fetch("https://brightlight-node.onrender.com/in-home-caregiver")
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
              <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("categories")}>Categories</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>{pData?.heading}</h1>
          <p>
          {pData?.description}
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>{pData?.benefitsHeading}</h2>
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
            <li>
            {pData?.b5}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>{pData?.eligibilityHeading}</h2>
          <p>  {pData?.eligibilityDescription}</p>
          <ol
            style={{ marginTop: "20px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing1"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <li
              style={{ listStyle: "none", fontSize: "18px", fontWeight: "600" }}
            >
             {pData?.elibilityS1}
            </li>
            <li
              style={{ listStyle: "none", fontSize: "18px", fontWeight: "600" }}
            >
            {pData?.elibilityS2}
            </li>
          </ol>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
              {pData?.s1Heading}
          </h3>
          <p>
          {pData?.s1Desc}
          </p>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing3"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <li>
            {pData?.s1l1}
            </li>
            <li>
            {pData?.s1l2}
            </li>
            <li>
            {pData?.s1l3}
            </li>
            <li>
            {pData?.s1l4}
            </li>
          </ul>

          <p>
           {pData?.s1discalmier}
          </p>

          <h4
            className={`${styles.section} ${styles.section}`}
            id="testing4"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
          {pData?.foreignHeading}
          </h4>
          <div
            className={`${styles.categories} ${styles.section}`}
            id="categories"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <div
              className={`${styles.category} ${styles.section}`}
              id="testing5"
              ref={(el) => (sectionsRef.current[8] = el)}
            >
              <h2> {pData?.foreign1}</h2>
              <p>
              {pData?.foreign1Desc}
              </p>
            </div>
            <div
              className={`${styles.category} ${styles.section}`}
              id="testing6"
              ref={(el) => (sectionsRef.current[9] = el)}
            >
              <h2> {pData?.foreign2}</h2>
              <p>
              {pData?.foreign2Desc}
              </p>
              <ul style={{ marginTop: "20px", marginLeft: "40px" }}>
                <li>
                {pData?.f2l1}
                </li>
                <li>{pData?.f2l2}</li>
                <li>
                {pData?.f2l3}
                </li>
              </ul>
            </div>
          </div>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing7"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
           {pData?.proofHeading}
          </h2>
          <p>
          {pData?.proofDesc1}
          </p>
          <p>
          {pData?.proofDesc2}
          </p>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing8"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
            <li>{pData?.under18l1}</li>
            <li>{pData?.under18l2}</li>
            <li>{pData?.under18l3}</li>
            <li>
            {pData?.under18l4}
            </li>
          </ul>
          <p>
          {pData?.seniorHeading}
          </p>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing9"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
            <li>{pData?.seniorl1}</li>
            <li>{pData?.seniorl2}</li>
            <li>{pData?.seniorl3}</li>
          </ul>
          <p>
          {pData?.disabilityHeading}
          </p>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing10"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
            <li>
            {pData?.disabilityl1}
            </li>
            <li>
            {pData?.disabilityl2}
            </li>
          </ul>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing12"
            ref={(el) => (sectionsRef.current[14] = el)}
          >
            {pData?.step2Heading}
          </h3>
          <p
            style={{ marginTop: "20px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing13"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
          {pData?.step2Desc}
          </p>
        </section>

        <section
          className={`${styles.howToApply} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[16] = el)}
        >
          <h3>{pData?.applyHeading}</h3>
          <h2>{pData?.asEmployer}</h2>
          <ol style={{ marginTop: "20px", marginLeft: "40px" }}>
            <li>
            {pData?.emp1}
            </li>
            <li>
            {pData?.emp2}
            </li>
            <li>
            {pData?.emp3}
            </li>
            <li>{pData?.emp4}</li>
            <li>
            {pData?.emp5}
            </li>
            <li>{pData?.emp6}</li>
            <li>{pData?.emp7}</li>
            <ul>
              <li>
              {pData?.emp7l1}
              </li>
              <li>
              {pData?.emp7l2}
              </li>
            </ul>
            <li>
            {pData?.emp8}
            </li>
            <li>
            {pData?.emp9}
            </li>
          </ol>

          <h2>{pData?.asForiegn}</h2>
          <ul
            style={{ marginTop: "20px", marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing14"
            ref={(el) => (sectionsRef.current[17] = el)}
          >
            <li>{pData?.asF1}</li>
            <li>
              {pData?.asF2}
            </li>
            <li>
            {pData?.asF3}
            </li>
            <li>
            {pData?.asF4}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.stillNotSure} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
          <h2>{pData?.StillNotHeading}</h2>
          <p>
          {pData?.s1}
          </p>

          <p>
          {pData?.s2}
          </p>

          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>

        <section
          style={{ marginTop: "50px" }}
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[151] = el)}
        >
         
          <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>  {pData?.WhyChooseUsHeading01 }</h2>
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

export default InCaregiverProgramLP;
