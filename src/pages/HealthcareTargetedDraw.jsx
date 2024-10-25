import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/HealthcareTargetedDraw.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const HealthcareTargetedDraw = () => {
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
    fetch("https://brightlight-node.onrender.com/healthcareTargatedDrawMeta")
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
    fetch("https://brightlight-node.onrender.com/healthcareTargatedDraw")
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
              <p onClick={() => scrollToSection("eligiblity")}>Eligiblity</p>
              <p onClick={() => scrollToSection("eligiblity-occupation")}>
                Eligiblity Occupation
              </p>
              <p onClick={() => scrollToSection("previous-draw-history")}>
                Previous Draw History
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
        <h1 className={styles.heading}>
        {pData?.healthcareTargatedDrawHeading}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <p>
          {pData?.healthcareTargatedDrawPara}
          </p>
        </section>

        <section
          className={`${styles.eligibilityCriteria} ${styles.section}`}
          id="eligiblity"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligibilityCriteriaHeading}
          </h2>
          <p>
          {pData?.EligPara1}
          </p>
          <p>
          {pData?.EligPara2}
          </p>
          <p>
          {pData?.EligPara3}
          </p>
          <ul style={{ marginLeft: "40px" }}>
            <li
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              {/* <Link
                to=""
                className={styles.button}
              >
                
              </Link> */}
              <button
                className={styles.button1}
                onClick={() =>
                  (window.location.href = "/federal-skilled-worker-program")
                }
              >
                Federal Skilled Worker (FSW)
              </button>
              : No Canadian experience required
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              {/* <Link to="" className={styles.button}>
               
              </Link> */}
              <button
                className={styles.button1}
                onClick={() =>
                  (window.location.href = "/canadian-experience-class")
                }
              >
                Canadian Experience Class (CEC)
              </button>
              : Canadian experience required
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              {/* <Link
                to=""
                className={styles.button}
              >
            
              </Link> */}
              <button
                className={styles.button1}
                onClick={() =>
                  (window.location.href = "/federal-skilled-worker-program")
                }
              >
                Federal Skilled Trades (FST)
              </button>
              : Dedicated to trades workers
            </li>
          </ul>
          <p>
          {pData?.EligPara4}
          </p>
          <p>
          {pData?.EligPara5}
          </p>
          <p>
          {pData?.EligPara6}
          </p>
        </section>

        <section
          className={`${styles.eligibleOccupations} ${styles.section}`}
          id="eligiblity-occupation"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
            {pData?.EligibleOccupationsHeading}
          </h2>
          <p>
          {pData?.EligibleOccupationsPara}
          </p>
          <p>Healthcare occupations category eligibility:</p>
          <ul>
            <li>
            {pData?.eo1}
            </li>
            <li>{pData?.eo2}</li>
          </ul>
          <p>
          {pData?.EligibleOccupTableHeading}
          </p>
          <p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Healthcare Jobs targeted By Express Entry
            </a>
          </p>

          <table className={styles.table}>
            <thead>
              <tr>
                <th>{pData?.EligibleOccupTableHead1}</th>
                <th>{pData?.EligibleOccupTableHead2}</th>
                <th>{pData?.EligibleOccupTableHead3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.eoT1Li1}</td>
                <td>{pData?.eoT2Li1}</td>
                <td>{pData?.eoT3Li1}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li2}</td>
                <td>{pData?.eoT2Li2}</td>
                <td>{pData?.eoT3Li2}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li3}</td>
                <td>{pData?.eoT2Li3}</td>
                <td>{pData?.eoT3Li3}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li4}</td>
                <td>{pData?.eoT2Li4}</td>
                <td>{pData?.eoT3Li4}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li5}</td>
                <td>{pData?.eoT2Li5}</td>
                <td>{pData?.eoT3Li5}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li6}</td>
                <td>{pData?.eoT2Li6}</td>
                <td>{pData?.eoT3Li6}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li7}</td>
                <td>{pData?.eoT2Li7}</td>
                <td>{pData?.eoT3Li7}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li8}</td>
                <td>{pData?.eoT2Li8}</td>
                <td>{pData?.eoT3Li8}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li9}</td>
                <td>{pData?.eoT2Li9}</td>
                <td>{pData?.eoT3Li9}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li10}</td>
                <td>{pData?.eoT2Li10}</td>
                <td>{pData?.eoT3Li10}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li11}</td>
                <td>{pData?.eoT2Li11}</td>
                <td>{pData?.eoT3Li11}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li12}</td>
                <td>{pData?.eoT2Li12}</td>
                <td>{pData?.eoT3Li12}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li13}</td>
                <td>{pData?.eoT2Li13}</td>
                <td>{pData?.eoT3Li13}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li14}</td>
                <td>{pData?.eoT2Li14}</td>
                <td>{pData?.eoT3Li14}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li15}</td>
                <td>{pData?.eoT2Li15}</td>
                <td>{pData?.eoT3Li15}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li16}</td>
                <td>{pData?.eoT2Li16}</td>
                <td>{pData?.eoT3Li16}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li17}</td>
                <td>{pData?.eoT2Li17}</td>
                <td>{pData?.eoT3Li17}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li18}</td>
                <td>{pData?.eoT2Li18}</td>
                <td>{pData?.eoT3Li18}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li19}</td>
                <td>{pData?.eoT2Li19}</td>
                <td>{pData?.eoT3Li19}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li20}</td>
                <td>{pData?.eoT2Li20}</td>
                <td>{pData?.eoT3Li20}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li21}</td>
                <td>{pData?.eoT2Li21}</td>
                <td>{pData?.eoT3Li21}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li22}</td>
                <td>{pData?.eoT2Li22}</td>
                <td>{pData?.eoT3Li22}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li23}</td>
                <td>{pData?.eoT2Li23}</td>
                <td>{pData?.eoT3Li23}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li24}</td>
                <td>{pData?.eoT2Li24}</td>
                <td>{pData?.eoT3Li24}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li25}</td>
                <td>{pData?.eoT2Li25}</td>
                <td>{pData?.eoT3Li25}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li26}</td>
                <td>{pData?.eoT2Li26}</td>
                <td>{pData?.eoT3Li26}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li27}</td>
                <td>{pData?.eoT2Li27}</td>
                <td>{pData?.eoT3Li27}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li28}</td>
                <td>{pData?.eoT2Li28}</td>
                <td>{pData?.eoT3Li28}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li29}</td>
                <td>{pData?.eoT2Li29}</td>
                <td>{pData?.eoT3Li29}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li30}</td>
                <td>{pData?.eoT2Li30}</td>
                <td>{pData?.eoT3Li30}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li31}</td>
                <td>{pData?.eoT2Li31}</td>
                <td>{pData?.eoT3Li31}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li32}</td>
                <td>{pData?.eoT2Li32}</td>
                <td>{pData?.eoT3Li32}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li33}</td>
                <td>{pData?.eoT2Li33}</td>
                <td>{pData?.eoT3Li33}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li34}</td>
                <td>{pData?.eoT2Li34}</td>
                <td>{pData?.eoT3Li34}</td>
              </tr>
              <tr>
                <td>{pData?.eoT1Li35}</td>
                <td>{pData?.eoT2Li35}</td>
                <td>{pData?.eoT3Li35}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.drawHistory} ${styles.section}`}
          id="previous-draw-history"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.ExpressEntryHealthcareHeading}
          </h2>
          <p>
          {pData?.hehc1}
          </p>
          {/* <Link to="" className={styles.button}>
            
          </Link> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.HowApplyHeading}
          </h2>
          <ol style={{ marginLeft: "40px" }}>
            <li>{pData?.ha1}</li>
            <li>
            {pData?.ha2}
            </li>
            <li>
            {pData?.ha3}
            </li>
            <li>
            {pData?.ha4}
            </li>
            <li>
            {pData?.ha5}
            </li>
          </ol>
          <p>
          {pData?.haRemb}
          </p>
        </section>

        <section
          className={`${styles.contact} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotHeading}</h2>
          <p>
          {pData?.s1}
          </p>
          <p>
          {pData?.s2}
          </p>
          {/* <Link to="" className={styles.button}>
         
          </Link> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/contact-us")}
          >
            Contact Us
          </button>
        </section>

        {/* <section  className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[6] = el}>
          <h2 className={styles.subheading}>Why Choose Us</h2>
          <p>
            Brightlight Immigration offers personalized services to maximize
            your chances of success. Our experienced team provides dedicated
            support throughout the immigration process, ensuring a smooth and
            efficient experience.
          </p>

        </section> */}
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
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

export default HealthcareTargetedDraw;
