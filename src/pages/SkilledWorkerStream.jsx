import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/SkilledWorkerStream.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const SkilledWorkerStream = () => {
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
    fetch("https://brightlight-node.onrender.com/skilledWorkerStreamMeta")
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
    fetch("https://brightlight-node.onrender.com/skilled-worker-stream")
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
          {/* <header className={styles.header}>
            <h1>
              British Columbia Provincial Nominee Program (BC PNP) Skilled
              Worker Stream
            </h1>
          </header> */}
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
              {/* <p onClick={() => scrollToSection("about-program")}>
                About the Program
              </p> */}
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("bcnp_calculator")}>
                BCNP Calculator
              </p>
              <p onClick={() => scrollToSection("process")}>Process</p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p>
              <p onClick={() => scrollToSection("faq")}>Faq</p>
              <p onClick={() => scrollToSection("blog")}>Blog</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section
          className={`${styles.header} ${styles.section}`}
          id="benefits-2"
          ref={(el) => (sectionsRef.current[50] = el)}
        >
          <h1>
          {pData?.heading}
          </h1>
          <p>
          {pData?.description}
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>    {pData?.benefitsHeading}</h2>
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
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h3 style={{ marginBottom: "20px" }}>
          {pData?.eligibleSubHeading}
          </h3>
          <h2 style={{ marginBottom: "20px" }}>
          {pData?.eligibileHeading}
          </h2>
          <p style={{ marginBottom: "20px" }}>
          {pData?.eligibleDesc}
          </p>
          <ol style={{marginLeft: "40px"}}>
            <li>
              <strong>   {pData?.e1}</strong>
              <ul>
                <li>
                {pData?.e1l1}
                </li>
                <li>
                {pData?.e1l2}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.e2}</strong>
              <ul>
                <li>
                {pData?.e2l1}
                </li>
                <li>
                {pData?.e2l2}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.e3}</strong>
              <ul>
                <li>
                {pData?.e3l1}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.e4}</strong>
              <ul>
                <li>
                {pData?.e4l1}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.e5}</strong>
              <ul>
                <li>
                {pData?.e5l1}
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testting1"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>{pData?.expressConsiderationHeading}</h2>
          <p>
          {pData?.expressConsiderationDescription}
          </p>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="employer_requirements"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>{pData?.recruitmentHeading}</h2>
          <p>
          {pData?.recruitmentDescription}
          </p>
          <h4 style={{ marginTop: "20px" }}>
          {pData?.recruitmentSubHeading}
          </h4>
          <p style={{ marginBottom: "20px" }}>
          {pData?.recruitmentSubDesc}
          </p>
          <ol style={{marginLeft: "40px"}}>
            <li>
              <strong>{pData?.r1}</strong>
              <ul>
                <li>
                {pData?.r1l1}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.r2}</strong>
              <ul>
                <li>
                {pData?.r2l1}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.r3}</strong>
              <ul>
                <li>
                {pData?.r3l1}
                </li>
                <li>
                {pData?.r3l2}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.r4}</strong>
              <ul>
                <li>
                {pData?.r4l1}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.r5}</strong>
              <ul>
                <li>{pData?.r5l1}</li>
                <li>
                {pData?.r5l2}
                </li>
                <li>{pData?.r5l3}</li>
              </ul>
            </li>
            <li>
              <strong>{pData?.r6}</strong>
              <ul>
                <li>
                {pData?.r6l1}
                </li>
              </ul>
            </li>
          </ol>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="bcnp_calculator"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            Calculate your BCPNP score
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="process"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>{pData?.applicationHeading}</h2>
          <ol style={{marginLeft: "40px"}}>
            <li>
              <strong className={styles.sectionStrong}>
              {pData?.a1}
              </strong>
              <ul>
                <li>
                {pData?.a1l1}
                </li>
                <li>
                {pData?.a1l2}
                </li>
              </ul>
            </li>
            <li>
              <strong className={styles.sectionStrong}>
              {pData?.a2}
              </strong>
              <ul>
                <li>
                {pData?.a2l1}
                </li>
                <li>
                {pData?.a2l2}
                </li>
              </ul>
            </li>
            <li>
              <strong className={styles.sectionStrong}>
              {pData?.a3}
              </strong>
              <ul>
                <li>
                {pData?.a3l1}
                </li>
                <li>{pData?.a3l2}</li>
              </ul>
            </li>
            <li>
              <strong>{pData?.a4}</strong>
              <ul>
                <li>
                {pData?.a4l1}
                </li>
                <li>
                {pData?.a4l2}
                </li>
              </ul>
            </li>
            <li>
              <strong className={styles.sectionStrong}>
              {pData?.a5}
              </strong>
              <ul>
                <li>
                {pData?.a5l1}
                </li>
                <li>
                {pData?.a5l2}
                </li>
                <li>
                {pData?.a5l3}
                </li>
                <li>
                {pData?.a5l4}
                </li>
              </ul>
            </li>
            <li>
              <strong className={styles.sectionStrong}>
              {pData?.a6}
              </strong>
              <ul>
                <li>
                {pData?.a6l1}
                  <ul>
                    <li>  {pData?.a6l1n1}</li>
                    <li>
                    {pData?.a6l1n2}
                    </li>
                    <li>
                    {pData?.a6l1n3}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ol>
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
        <section
          className={`${styles.support} ${styles.section} ${styles.section}`}
          id="book-appointment"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>   {pData?.StillNotHeading}</h2>
          <p>
          {pData?.s1}
          </p>
          <p >
          {pData?.s2}
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

export default SkilledWorkerStream;
