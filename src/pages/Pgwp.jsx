import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Pgwp.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FieldOfStudyTable from "../components/FieldOfStudyTable";

const Pgwp = () => {
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
    fetch("https://brightlight-node.onrender.com/pgwpMeta")
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
    fetch("https://brightlight-node.onrender.com/pgwp")
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

  const fetchedValue1 = pData?.IfYouSumSubHead;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  
  const fetchedValue2 = pData?.IysLi2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.IfYouGraduatedLi1;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.IfYouGradAnothLi1;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  const fetchedValue5 = pData?.IfYouGradCollLi1;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5);

  const fetchedValue6 = pData?.IfYouGraduatedLi2;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6 = extractRemainingText(fetchedValue6);

  const fetchedValue7 = pData?.IfYouGradAnothLi2;
  const strongText7 = extractStrongText(fetchedValue7);
  const remainingText7 = extractRemainingText(fetchedValue7);

  const fetchedValue8 = pData?.IfYouGradCollLi2;
  const strongText8 = extractStrongText(fetchedValue8);
  const remainingText8 = extractRemainingText(fetchedValue8);
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
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
          <h1>
          {pData?.PgwpHeading}
          </h1>
          <p>
          {pData?.PgwpPara1}
          </p>
          <p>
          {pData?.PgwpPara2}
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>{pData?.BenifitsHeading}</h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.BenifitsList1 }
            </li>
            <li>
            {pData?.BenifitsList2 }
            </li>
            <li>
            {pData?.BenifitsList3 }
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>{pData?.EligibilityHeading}</h2>
          <p>{pData?.EligibilitySubHead}</p>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.EligLi1 }
            </li>
            <li>  {pData?.EligLi2 }</li>
            <li>
            {pData?.EligLi3 }
            </li>
            <li>
            {pData?.EligLi4 }
            </li>
            <li>
            {pData?.EligLi5 }
            </li>
            <li>  {pData?.EligLi6 }</li>
            <li>  {pData?.EligLi7 }</li>
          </ul>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>
          {pData?.ChanAnnHeading }
          </h2>
          <p>
            <strong>  {pData?.ChanAnnSubHead }</strong>
          </p>
          <ul
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "40px",
            }}
          >
            <li>
            {pData?.caLi }{" "}
              <a
                style={{ color: "dodgerblue" }}
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/work/after-graduation/eligibility.html"
              >
                general and physical location
              </a>{" "}
              {pData?.caLi1Sub1 }{" "}
              <a
                style={{ color: "dodgerblue" }}
                href="https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html"
              >
                PGWP eligible designated learning institution
              </a>
              .
            </li>
          </ul>
          <p style={{ marginTop: "30px" }}>
            <strong>{pData?.FligSchHeading }</strong>
          </p>
          <p>
           {pData?.FligSchSubHead }
          </p>
          <ul
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              marginLeft: "40px",
            }}
          >
            <li>
            {pData?.fl1}{" "}
              <strong>or</strong>
            </li>
            <li>
            {pData?.fl2}
            </li>
          </ul>

          <h2 style={{ marginTop: "30px", fontSize: "20px" }}>
          {pData?.IfYouSumHeading}
          </h2>
          <p>
            If you submitted your{" "}
            <strong>{strongText1}</strong>{" "} {remainingText1}
          </p>
          <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
            <li>
            {pData?.IysLi1 }
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <li>
                <strong>{strongText2}</strong>{" "} {remainingText2}
                </li>
              </ul>
            </li>

            <li>
            {pData?.IfYouSubmitHeading }
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <li>
                  <strong>{strongText3}</strong> {" "}{remainingText3}
                </li>
              </ul>
            </li>

            <li>
            {pData?. IfYouGraduatedCollegeHeading }
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                }}
              >
                <li>
                <strong>{strongText4}</strong>{" "} {remainingText4}
                </li>
              </ul>
            </li>
          </ul>

          <h2 style={{ marginTop: "50px", fontSize: "20px" }}>
          {pData?.IfYouSubmitPara }
          </h2>
          <p>
          {pData?. IfYouSubmitPara}
          </p>
          <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
            <li>
            {pData?. IfYouGraduatedHeading}
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <li>
                <strong>{strongText4}</strong>{" "} {remainingText4}
                </li>

                <li>
                  <strong>
                    <a href="#field-study">{strongText6}</a>
                  </strong>{" "}{remainingText6}
                </li>
              </ul>
            </li>

            <li>
            {pData?. IfYouGraduatedAnotherHeading}
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                  marginBottom: "30px",
                }}
              >
                <li>
                <strong>{strongText5}</strong>{" "} {remainingText5}
                </li>

                <li>
                  <strong>
                    <a href="#field-study">{strongText7}</a>
                  </strong>{" "} {remainingText7}
                </li>
              </ul>
            </li>

            <li>
            {pData?.IfYouGraduatedCollegeHeading }
              <ul
                style={{
                  marginLeft: "40px",
                  listStyle: "circle",
                  marginTop: "10px",
                }}
              >
                <li>
                <strong>{strongText5}</strong>{" "} {remainingText5}
                </li>

                <li>
                <strong>
                    <a href="#field-study">{strongText8}</a>
                  </strong>{" "} {remainingText8}
                </li>
              </ul>
            </li>
          </ul>

          <button
            className={styles.button1}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            CLB Calculator
          </button>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="field-study"
          ref={(el) => (sectionsRef.current[244] = el)}
        >
          <h2>{pData?.FieldStudyRequHeading }</h2>
          <p>
          {pData?.FieldStudyRequPara }
          </p>
          <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
            <li>{pData?.fsrLi1 }</li>
            <li>{pData?.fsrLi2 }</li>
            <li>{pData?.fsrLi3 }</li>
            <li>{pData?.fsrLi4 }</li>
            <li>{pData?.fsrLi5 }</li>
            <li>{pData?.fsrLi6 }</li>
          </ul>
        </section>

        <FieldOfStudyTable />

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[24] = el)}
        >
          <h2>{pData?.HowApplyHeading}</h2>
          <p>
          {pData?.HowApplyPara1}
          </p>
          <p style={{ marginTop: "20px", marginBottom: "10px" }}>
          {pData?.HowApplyPara2}
          </p>
          <p>   {pData?.HowApplyPara3} </p>
          <ul style={{ marginLeft: "40px", marginTop: "10px" }}>
            <li>   {pData?.ha3}</li>
            <li>
            {pData?.ha4}
            </li>
            <li>{pData?.ha5}</li>
            <li>
            {pData?.ha6 }
            </li>
          </ul>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>
          {pData?.RefusalHeading}
          </h2>
          <h4>
          {pData?.RefusalSubHeading}
          </h4>
          <ul style={{ marginLeft: "40px" }}>
            <li>  {pData?.r1 }</li>
            <li>
            {pData?.r2 }
            </li>
            <li>
            {pData?.r3 }
            </li>
            <li>
            {pData?.r4 }
            </li>
          </ul>

          <button
            className={styles.button1}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            CLB Calculator
          </button>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>{pData?.StillNotSureHeading}</h2>
          <p>
          {pData?.StillNotSurePara1}
          </p>
          <p>
          {pData?.StillNotSurePara2}
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

export default Pgwp;
