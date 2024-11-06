import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/LmiaReviewed.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const LmiaReviewed = () => {
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
    fetch("https://brightlight-node.onrender.com/LmiaMeta")
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
    fetch("https://brightlight-node.onrender.com/Lmia")
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
              <p onClick={() => scrollToSection("pathways")}>Pathways</p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
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
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>{pData?.LmiaHeading}</h1>

              <p>
              {pData?.WhatIsLmiaPara1}
              </p>
              <p>
              {pData?.WhatIsLmiaPara2}
              </p>
              <p>
              {pData?.WhatIsLmiaPara3}
              </p>
              <p>
              {pData?.WhatIsLmiaPara4}
              </p>
            </header>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="benifits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>{pData?.BenifitsHeading}</h2>
            <div className={styles.benefits}>
              <div className={styles.benefit}>
                <h3>{pData?.BenefitsCanadianEmployersSubHeading}</h3>
                <ul style={{marginLeft: "40px"}}>
                  <li>
                  {pData?.b11}
                  </li>
                  <li>
                  {pData?.b12}
                  </li>
                  <li>
                  {pData?.b13}
                  </li>
                </ul>
              </div>
              <div className={styles.benefit}>
                <h3>{pData?.BenefitsForeignWorkersSubHeading}</h3>
                <ul style={{marginLeft: "40px"}}>
                  <li>
                  {pData?.b21}
                  </li>
                  <li>
                  {pData?.b22}
                  </li>
                  <li>
                  {pData?.b23}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            className={`${styles.pathways} ${styles.section}`}
            id="pathways"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>{pData?.PathwaysHeading}</h2>
            <div className={styles.pathways}>
              <Link to="/low-wage-lmia" className={styles.button}>
                High-wage/Low-wage LMIA
              </Link>
              <Link to="/agriculture-stream-lmia" className={styles.button}>
                Agricultural Stream LMIA
              </Link>
              <Link to="/pr-supporting-lmia" className={styles.button}>
                PR Supporting LMIA with/without WP
              </Link>
              <Link to="/global-stream-lmia" className={styles.button}>
                Global Talent Stream LMIA
              </Link>
              <Link
                to="/permanent-residence-pathways-caregivers-lp"
                className={styles.button}
              >
                Caregiver LMIA
              </Link>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2>{pData?.ApplyHeading}</h2>
            <div className={styles.applicationProcess}>
              <h3>{pData?.ApplyEmployerSubHeading}</h3>
              <ul
                style={{
                  marginTop: "10px",
                  marginLeft: "40px",
                  marginBottom: "30px",
                }}
              >
                <li>
                {pData?.ae1}
                </li>
                <li>
                {pData?.ae2}
                </li>
                <li>
                {pData?.ae3}
                </li>
                <li>
                {pData?.ae4}
                </li>
              </ul>
              <h3>{pData?.ApplyForeignSubHeading}</h3>
              <ul
                style={{
                  marginTop: "10px",
                  marginLeft: "40px",
                  marginBottom: "30px",
                }}
              >
                <li> {pData?.af1}</li>
                <li>
                {pData?.af2}
                </li>
                <li>
                {pData?.af3}
                </li>
                <li>{pData?.af4}</li>
                <li>
                {pData?.af5}
                </li>
              </ul>
            </div>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h2>{pData?.RefusalHeading}</h2>
            <h4>
            {pData?.RefusalSubHeading}
            </h4>
            <ul
              style={{
                marginTop: "10px",
                marginLeft: "40px",
                marginBottom: "30px",
              }}
            >
              <li>
              {pData?.r1}
              </li>
              <li>
              {pData?.r2}
              </li>
              <li>
              {pData?.r3}
              </li>
              <li> {pData?.r4}</li>
              <li>
              {pData?.r5}
              </li>
              <li>
              {pData?.r6}
              </li>
              <li>
              {pData?.r7}
              </li>
              <li>
              {pData?.r8}
              </li>
              <li>
              {pData?.r9}
              </li>
            </ul>
          </section>

          

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <h2> {pData?.StillNotHeading}</h2>
            <p>
            {pData?.s1}
            </p>
            <p>
            {pData?.s2}
            </p>
            <a
              href="/booking"
              className={styles.bookAppointment}
            >
              Book an Appointment
            </a>
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
        </main>
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

export default LmiaReviewed;
