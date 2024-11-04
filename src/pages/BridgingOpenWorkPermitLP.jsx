import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/BridgingOpenWorkPermitLP.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const BridgingOpenWorkPermitLP = () => {
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
    fetch("https://brightlight-node.onrender.com/bridgingOpenWorkMeta")
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
    fetch("https://brightlight-node.onrender.com/bridgingOpenWork")
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
              <p onClick={() => scrollToSection("application-process")}>
                Eligibility
              </p>
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

      <div className={styles.containerParent}>
        <div className={styles.container}>
          <header
            className={`${styles.header} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <h1>{pData?.BridgingHeading}</h1>
          </header>
          <section className={styles.intro}>
            <p>
            {pData?.BridgingPara}
            </p>
          </section>
          <section
            className={`${styles.benefits} ${styles.section}`}
            id="benefits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>{pData?.BenifitsHeading}</h2>
            <ul style={{marginLeft: "40px"}}>
              <li>
              {pData?.BenifitsList1}
              </li>
              <li>
              {pData?.BenifitsList2}
              </li>
              <li>
              {pData?.BenifitsList3}
              </li>
              <li>
              {pData?.BenifitsList4}
              </li>
            </ul>
          </section>
          <section
            className={`${styles.application} ${styles.section}`}
            id="application-process"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>{pData?.EligibilityHeading}</h2>
            <h4>
            {pData?.EligibilitySubHead}
            </h4>
            <ul style={{ marginLeft: "40px" }}>
              <li>
              {pData?.EligibilityList1}
              </li>
              <li>
              {pData?.EligibilityList2}
                <ul className={styles.subList}>
                  <li>
                  {pData?.Eligibility2SubList1}
                  </li>
                  <li>
                  {pData?.Eligibility2SubList2}
                  </li>
                  <li>
                  {pData?.Eligibility2SubList3}
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                {pData?.EligibilitySubHead2}
                </h4>
                <ul>
                  <li
                    onClick={() =>
                      (window.location.href = "/federal-skilled-worker-program")
                    }
                    style={{ cursor: "pointer" }}
                  >
                       {pData?.EligibilityList4}
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href = "/canadian-experience-class")
                    }
                    style={{ cursor: "pointer" }}
                  >
                       {pData?.EligibilityList5}
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href = "/federal-skilled-worker-program")
                    }
                    style={{ cursor: "pointer" }}
                  >
                      {pData?.EligibilityList6}
                  </li>
                  <li>
                  {pData?.EligibilityList7}
                  </li>
                  <li
                    onClick={() => (window.location.href = "/pnp")}
                    style={{ cursor: "pointer" }}
                  >
                  {pData?.EligibilityList8}
                  </li>
                  <li
                    onClick={() =>
                      (window.location.href = "/agri-food-pilot-program")
                    }
                    style={{ cursor: "pointer" }}
                  >
                    {pData?.EligibilityList9}
                  </li>
                  <li>
                  {pData?.EligibilityList10}
                  </li>
                  <li>
                  {pData?.EligibilityList11}
                  </li>
                </ul>
              </li>
              <li>
                <h4>
                {pData?.EligibilitySubHead3}
                </h4>
                <ul>
                  <li>
                  {pData?.EligibilityList12}
                    <ul className={styles.subList}>
                      <li>{pData?.Eligibility12SubList1}</li>
                      <li> {pData?.Eligibility12SubList2}</li>
                      <li> {pData?.Eligibility12SubList3}</li>
                      <li>{pData?.Eligibility12SubList4}</li>
                    </ul>
                  </li>
                  <li>
                  {pData?.EligibilityList13}
                  </li>
                  <li>
                  {pData?.EligibilityList14}
                    <ul className={styles.subList}>
                      <li> {pData?.Eligibility14SubList1}</li>
                      <li>{pData?.Eligibility14SubList2}</li>
                      <li>{pData?.Eligibility14SubList3}</li>
                      <li>
                      {pData?.Eligibility14SubList4}
                      </li>
                      <li>
                      {pData?.Eligibility14SubList5}
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </section>
          <section
            className={`${styles.application} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2>{pData?.HowApplyHeading}</h2>
            <ol style={{marginLeft: "40px"}}>
              <li>
              {pData?.ha1}
              </li>
              <li>
              {pData?.ha2}
              </li>
              <li>{pData?.ha3}</li>
              <li>{pData?.ha4}</li>
            </ol>
          </section>

          <section
            className={`${styles.advice} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[4] = el)}
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

export default BridgingOpenWorkPermitLP;
