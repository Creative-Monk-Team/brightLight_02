import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SpousalOpenWorkPermit.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const SpousalOpenWorkPermit = () => {
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
    fetch("https://brightlight-node.onrender.com/spousalOpenWokPerMeta")
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
    fetch("https://brightlight-node.onrender.com/spousalOpenWorkPermit")
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
              <p onClick={() => scrollToSection("about-program")}>About the Program</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
              <p onClick={() => scrollToSection("book-appointment")}>Book Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>Why Choose Us?</p>
              <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
             <p onClick={() => scrollToSection("faqs")}>FAQs</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <h1  className={`${styles.heading} ${styles.section}`} id="about-program" ref={(el) => sectionsRef.current[0] = el}>
        {pData?.spousalOpenWokPerHeading}
        </h1>

        <section className={`${styles.introduction} ${styles.section}`} id="testing" ref={(el) => sectionsRef.current[1] = el}>
          <p>
          {pData?.spousalOpenWokPerPara1}
          </p>
          <p>
          {pData?.spousalOpenWokPerPara2}
          </p>
        </section>

        <section className={`${styles.benefits} ${styles.section}`} id="benifits" ref={(el) => sectionsRef.current[2] = el}>
          <h2 className={styles.subheading}>
          {pData?.BenifitHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>{pData?.b1}</li>
            <li>{pData?.b2}</li>
            <li>{pData?.b3}</li>
            <li>{pData?.b4}</li>
            <li>{pData?.b5}</li>
            <li>{pData?.b6}</li>
            <li>{pData?.b7}</li>
          </ul>
        </section>

        <section className={`${styles.pathways} ${styles.section}`} id="testing2" ref={(el) => sectionsRef.current[3] = el}>
          <h2 className={styles.subheading}>
          {pData?.PathwaysHeading}
          </h2>
          <ul >
            
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/common-law-partner-temporary")
              }
            >
           For the Spouse of the worker 
            </button>
            <li> 
            {pData?.PathwaysSubLi1}
             </li>
            
           
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/international-graduate-program")
              }
            >
         For Spouse of an International Student 
            </button>
         
           <li> 
            {pData?.PathwaysSubLi2}
           </li>
            
            <button className={styles.button1}
              onClick={() =>
                (window.location.href =
                  "/spouse-inland")
              }
            >
           PR OWP, Inland
            </button>
            <li>
               {pData?.PathwaysSubLi3}
            </li>
          </ul>
        </section>

        <section className={`${styles.eligibility} ${styles.section}`} id="eligibility" ref={(el) => sectionsRef.current[4] = el}>
          <h2 className={styles.subheading}>
          {pData?.EligibilityHeading}
          </h2>
          <p>
          {pData?.EligibilitySubHead}
          </p>
          <ol>
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
          </ol>
          <div className={styles.eligibilityChart}>
            <h3 className={styles.chartHeading}> {pData?.EligChart}</h3>
            <table>
              <thead>
                <tr>
                  <th> {pData?.EligChartHead1}</th>
                  <th>{pData?.EligChartHead2}</th>
                  <th>{pData?.EligChartHead3}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.ec1P1}</td>
                  <td>{pData?.ec2P1}</td>
                  <td>{pData?.ec3P1}</td>
                </tr>
                <tr>
                  <td>{pData?.ec1P2}</td>
                  <td>{pData?.ec2P2}</td>
                  <td>{pData?.ec3P2}</td>
                </tr>
                <tr>
                  <td>{pData?.ec1P3}</td>
                  <td>{pData?.ec2P3}</td>
                  <td>{pData?.ec3P3}</td>
                </tr>
                <tr>
                  <td>{pData?.ec1P4}</td>
                  <td>{pData?.ec2P4}</td>
                  <td>{pData?.ec3P4}</td>
                </tr>
                <tr>
                  <td>{pData?.ec1P5}</td>
                  <td>{pData?.ec2P5}</td>
                  <td>{pData?.ec3P5}</td>
                </tr>
                <tr>
                  <td>{pData?.ec1P6}</td>
                  <td>{pData?.ec2P6}</td>
                  <td>{pData?.ec3P6}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className={`${styles.applicationProcess} ${styles.section}`} id="how-to-apply" ref={(el) => sectionsRef.current[5] = el}>
          <h2 className={styles.subheading}>
          {pData?.HowApplyHeading}
          </h2>
          <p>
          {pData?.HowApplySubHead}
          </p>
          <ol>
            <li>{pData?.ha1}</li>
            <li>{pData?.ha2}</li>
            <li>{pData?.ha3}</li>
            <li>{pData?.ha4}</li>
            <li>{pData?.ha5}</li>
            <li>{pData?.ha6}</li>
            <li>{pData?.ha7}</li>
            <li>{pData?.ha8}</li>
            <li>{pData?.ha9}</li>
          </ol>
          <p>
          {pData?.howAppNote}
          </p>
        </section>

        <section className={`${styles.refusalReasons} ${styles.section}`} id="refusal-reasons" ref={(el) => sectionsRef.current[6] = el}>
          <h2 className={styles.subheading}>
          {pData?.RefusalHeading}
          </h2>
          <p>
          {pData?.RefusalSubHead}
          </p>
          <ul>
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
          </ul>
        </section>

        <section className={`${styles.assistance} ${styles.section}`} id="testing3" ref={(el) => sectionsRef.current[7] = el}>
          <h2 className={styles.subheading}>{pData?.StillNotHeading}</h2>
          <p>
          {pData?.s1}
          </p>
          <p>
          {pData?.s2}
          </p>


          <button className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
        </section>

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
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

export default SpousalOpenWorkPermit;
