import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Cby.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const Cby = () => {
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
    fetch("https://brightlight-node.onrender.com/cbyMeta")
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
    fetch("https://brightlight-node.onrender.com/cby")
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


  const fetchedValue1 = pData?.EligReqAcli1;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.EligReqAcli2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);

  const fetchedValue3 = pData?.EligReqAcli3;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3);

  const fetchedValue4 = pData?.EligReqAcli4;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  const fetchedValue5 = pData?.EligReqAcli5;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5);

  
  const fetchedValue6 = pData?.ProffdegrProgHeading;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6 = extractRemainingText(fetchedValue6);

  
  const fetchedValue7 = pData?.GradProgHeading;
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
                About the Program
              </p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
         {pData?.heading}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
          {pData?.description1}
          </p>
          <p>
          {pData?.description2}
          </p>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.BenifitHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
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
            <li>  {pData?.b6}</li>
            <li>
            {pData?.b7}
            </li>
            <li>
            {pData?.b8}
            </li>
          </ul>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.eligCritHeading}
          </h2>
          <p>
          {pData?.eligCritSubHead}
          </p>

          <h3 style={{ marginTop: "70px" }}>
          {pData?.eligReqHeading}
          </h3>

          {/* <h4>Applications Submitted Before March 19, 2024</h4> */}
          <div>
            <h4>{pData?.eligApplSubmHead1}</h4>
            <p style={{ marginTop: "-10px" }}>
            {pData?.eligApplSubmPara}
            </p>
            <ul
              style={{ marginTop: "30px", marginLeft: "40px" }}
              className={styles.list}
            >
              <li className={styles.listItem}>
              {pData?.as1}
              </li>
              <li className={styles.listItem}>
              {pData?.as2}
                <ul className={styles.subList}>
                  <li>
                    {" "}
                    {pData?.as2Sub1}
                  </li>
                  <li>
                    {" "}
                    {pData?.as2Sub2}
                  </li>
                  <li>
                    {" "}
                    {pData?.as2Sub3}
                  </li>
                  <li>
                    {" "}
                    {pData?.as2Sub4}
                  </li>
                </ul>
              </li>
            </ul>
            <p style={{ marginTop: "30px", fontWeight: "600" }}>
            {pData?.InternStuNotEligHeading}{" "}
            </p>
            <ul
              style={{
                marginTop: "10px",
                marginLeft: "40px",
                marginBottom: "40px",
              }}
              className={styles.list}
            >
              <li className={styles.listItem}>
              {pData?.isne1}
              </li>
              <li className={styles.listItem}>
              {pData?.isne2}
              </li>
              <li className={styles.listItem}>
              {pData?.isne3}
              </li>
            </ul>

            <h4>{pData?.eligApplSubmPara2}</h4>
            <p>
            {pData?.eligApplSubmPara2}
            </p>
            <ul style={{marginLeft: "40px"}} className={styles.list}>
              <li className={styles.listItem}>
              {pData?.as31}
              </li>
              <p>{pData?.as3Oor}</p>
              <p>
              {pData?.as32}
              </p>
              <li>
              {pData?.as4}
              </li>

              <li
                style={{ listStyle: "none", marginTop: "40px" }}
                className={styles.listItem}
              >
              <strong>{strongText7}</strong>{" "} {remainingText7}
                <ul className={styles.subList}>
                  <li>
                  {pData?.GradProgPara}
                  </li>
                </ul>
                <p style={{ listStyle: "none", marginTop: "40px" }}>
                <strong>{strongText6}</strong>{" "} {remainingText6}
                </p>
                <ul
                  style={{
                    marginLeft: "40px",
                    marginTop: "10px",
                    marginBottom: "40px",
                  }}
                  className={styles.subList}
                >
                  <li>{pData?.pdp1}</li>
                  <li> {pData?.pdp2}</li>
                  <li> {pData?.pdp3}</li>
                  <li> {pData?.pdp4}</li>
                  <li> {pData?.pdp5}</li>
                  <li>{pData?.pdp6}</li>
                  <li>{pData?.pdp7}</li>
                  <li> {pData?.pdp8}</li>
                  <li> {pData?.pdp9}</li>
                </ul>
              </li>
            </ul>
            <p style={{ fontWeight: "600" }}>
            {pData?.InterStuNotEligHeading}
            </p>
            <ul style={{marginLeft: "40px"}}>
              <li> {pData?.isneLi1}</li>
              <li> {pData?.isneLi2}</li>
              <li>{pData?.isneLi3}</li>
            </ul>
          </div>
          <h3 className={styles.subheading} style={{ marginTop: "70px" }}>
          {pData?.EligReqAcHeading}
          </h3>
          <p> {pData?.EligReqAcPara}</p>
          <ol style={{marginLeft: "40px"}}>
            <li style={{ marginBottom: "10px" }}>
              <strong>{strongText1}</strong>{" "} {remainingText1}
            </li>
            <li style={{ marginBottom: "10px" }}>
            <strong>{strongText2}</strong>{" "} {remainingText2}
            </li>
            <li style={{ marginBottom: "10px" }}>
            <strong>{strongText3}</strong>{" "} {remainingText3}
            </li>
            <li style={{ marginBottom: "10px" }}>
            <strong>{strongText4}</strong>{" "} {remainingText4}
            </li>
            <li>
            <strong>{strongText5}</strong>{" "} {remainingText5}
            </li>
          </ol>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[99] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.WhenToApplyHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.wa1}
            </li>
            <li>
            {pData?.wa2}
            </li>
            <li>
            {pData?.wa3}
            </li>
          </ul>
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.HowToApply}
          </h2>
          <ol style={{marginLeft: "40px"}}>
            <li>
            {pData?.ha1}
            </li>
            <li>
            {pData?.ha2}
            </li>
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
          style={{ marginTop: "70px" }}
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.RefusalHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
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
        </section>

        <section
          style={{ marginTop: "70px" }}
          className={`${styles.assistance} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>{pData?.NeedAssisHeading}</h2>
          <p>
          {pData?.r1}
    <Link to="/contact-us">contact us</Link>.
    
          </p>
        </section>

        {/* <section className={`${styles.whyChooseUs} ${styles.section}`} id="why-choose-us" ref={(el) => sectionsRef.current[7] = el}>
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>
          <button
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>
        </section> */}
        <section
          style={{ marginTop: "70px" }}
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
          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
          >
            Book Appointment
          </button>
        </section>
      </div>

      <div id="faqs">
      <FAQ_White_Internal data={pData} />
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

export default Cby;
