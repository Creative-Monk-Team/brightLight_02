import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CommonLawPartnerInternational.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const CommonLawPartnerInternational = () => {
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
    fetch("https://brightlight-node.onrender.com/comLawPartnerInternMeta")
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
    fetch("https://brightlight-node.onrender.com/comLawPartnerIntern")
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

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/changeCollegeProgram")
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


  const fetchedValue = pData?.er1li3Head;
  const strongText = extractStrongText(fetchedValue);
  const remainingText = extractRemainingText(fetchedValue);

  const fetchedValue1 = pData?.er2li2Head;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.EligReqSubHead3;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.erali1;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.erali2;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  const fetchedValue5 = pData?.erali3;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5);

  const fetchedValue6 = pData?.erali4;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6 = extractRemainingText(fetchedValue6);

  const fetchedValue7 = pData?.erali5;
  const strongText7 = extractStrongText(fetchedValue7);
  const remainingText7 = extractRemainingText(fetchedValue7);
  

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
                {" "}
                About the Program{" "}
              </p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
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
          id="testing"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>
          {pData?.comLawPartnerInternHeading}
          </h1>
        </header>

        <section
          className={`${styles.intro} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
          {pData?.comLawPartnerInternPara1}
          </p>
          <p>
          {pData?.comLawPartnerInternPara2}
          </p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>
          {pData?.BenifitHeading}
          </h2>
          <ul
            style={{ marginLeft: "40px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing"
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
            <li>
            {pData?.b5}
            </li>
            <li>{pData?.b6}</li>
            <li>
            {pData?.b7}
            </li>
            <li>
            {pData?.b8}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>
          {pData?.EligCritHeading}
          </h2>
          <p>
          {pData?.EligCritPara}
          </p>
        </section>
        {/* /// */}

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>{pData?.EligReqHeading}</h2>
          <h3>{pData?.EligReqSubHead1}</h3>
          <p>
            {pData?.EligReqSubHead1Para1}
          </p>  
          <ul
            style={{ marginLeft: "40px", marginTop: "0px" }}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            <li>
            {pData?.er1li1}
            </li>
            <li>
            {pData?.er1li2}
            </li>
            <ul style={{ marginLeft: "40px", marginTop: "0px",  listStyleType: "circle" }}>
              <li>
              {pData?.er1li21}
              </li>
              <li>
              {pData?.er1li22}
              </li>
              <li>
              {pData?.er1li23}
              </li>
              <li>
              {pData?.er1li24}
              </li>
            </ul>
            <p><strong>{strongText}</strong></p>
            <ul style={{ marginLeft: "40px", marginTop: "0px" }}>
              <li>{pData?.er1li31}</li>
              <li>{pData?.er1li32}</li>
              <li>
              {pData?.er1li33}
              </li>
            </ul>
          </ul>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[7] = el)}>
              {pData?.EligReqSubHead2}
          </h3>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[8] = el)}
          >
          {pData?.EligReqSubHead2Para2}
          </p>
          <ul  
          style={{marginLeft: "40px", marginTop: "-20px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[9] = el)}
          >
            <li>
            {pData?.er2li1}
            </li>
            <li>
            {pData?.er2li2}
            </li>
            <p><strong>{strongText1}</strong></p>
            <ul>
              <li>
              {pData?.er2li3}
              </li>
            </ul>
          </ul>

          <h3
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
           <strong>{strongText2}</strong>
          </h3>
          <ul
          style={{marginLeft: "40px", marginTop: "0px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
            <li>{pData?.er3li1}</li>
            <li> {pData?.er3li2}</li>
            <li> {pData?.er3li3}</li>
            <li> {pData?.er3li4}</li>
            <li> {pData?.er3li5}</li>
            <li> {pData?.er3li6}</li>
            <li> {pData?.er3li7}</li>
            <li> {pData?.er3li8}</li>
            <li> {pData?.er3li9}</li>
          </ul>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
           <strong> {pData?.EligReqSubHead4}</strong>
          </p>
          <ul
          style={{marginLeft: "40px", marginTop: "-20px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
            <li> {pData?.er4li1}</li>
            <li>{pData?.er4li2}</li>
            <li>
            {pData?.er4li3}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
           {pData?.EligReqAccomHeading}
          </h2>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[16] = el)}
          >
               {pData?.EligReqAccomSubHead}
          </p>
          <ul
          style={{marginLeft: "40px", marginTop: "-20px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[17] = el)}
          >
            <li>
              {" "}
              <strong>{strongText3}</strong> {" "}  {remainingText3}
            </li>
            <li>
              {" "}
              <strong>{strongText4}</strong> {" "}  {remainingText4}
            </li>
            <li>
            <strong>{strongText5}</strong> {" "}  {remainingText5}
            </li>
            <li>
            <strong>{strongText6}</strong> {" "}  {remainingText6}
            </li>
            <li>
            <strong>{strongText7}</strong> {" "}  {remainingText7}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.application} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[18] = el)}
        >
          <h2>
           {pData?.WhenToApplyHeading}
          </h2>
          <ol style={{marginLeft: "40px", marginTop: "10px"}}>
            <li>
            {pData?.wa1}
            </li>
            <li>
            {pData?.wa2}
            </li>
            <li>
            {pData?.wa3}
            </li>
          </ol>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[19] = el)}>
          <h2>
          {pData?.HowApplyHeading}
          </h2>
          <ol className={styles.subList} style={{marginLeft: "40px", marginTop: "10px"}} >
            <li>
            {pData?.ha1}
            </li>
            <li>{pData?.ha2}</li>
            <li>
            {pData?.ha3}
            </li>
            <li>{pData?.ha4}</li>
            <li>
            {pData?.ha5}
            </li>
            <li>{pData?.ha6}</li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[20] = el)}
        >
          <h2>
          {pData?.RefusalHeading}
          </h2>
          <ul style={{marginLeft: "40px", marginTop: "10px"}}>
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
            <li>
            {pData?.r3}
            </li>
          </ul>
          <button
            className={styles.button}
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
          ref={(el) => (sectionsRef.current[90] = el)}
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

export default CommonLawPartnerInternational;
