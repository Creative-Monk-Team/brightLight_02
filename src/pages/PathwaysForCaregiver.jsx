import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/PathwaysForCaregiver.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import OurProcess from "../sections/OurProcess";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const PathwaysForCaregiver = () => {
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
    fetch("https://brightlight-node.onrender.com/pathwaysForCaregiverMeta")
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
    fetch("https://brightlight-node.onrender.com/pathway-for-caregiver")
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                {" "}
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
          className={`${styles.title} ${styles.section}`}
          id="testing0"
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
        <h2
          style={{ marginTop: "50px" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
             {pData?.benefitsHeading}
        </h2>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing1"
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
        </ul>
        <h2
          style={{ marginTop: "50px" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
             {pData?.temporaryHeading}
        </h2>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <li>
            <a className={styles.link} href="/in-home-caregiver-program-lp">
              In Home Caregiver program
            </a>{" "}
            -{pData?.temporaryl1}
          </li>
        </ul>
        <h2
          style={{ marginTop: "50px" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
             {pData?.permanentHeading}
        </h2>
        <ul
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <li>
            <a
              className={styles.link}
              href="/permanent-residence-pathways-caregivers-lp"
            >
              Category A – Gaining experience
            </a>{" "}
            -{pData?.permanentl1}
          </li>
          <li>
            <a
              className={styles.link}
              href="/permanent-residence-pathways-caregivers-lp"
            >
              Category B – Direct to permanent residence
            </a>{" "}
            -{pData?.permanentl2}
          </li>
        </ul>
        <h2
          style={{ marginTop: "50px" }}
          className={`${styles.subtitle} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[8] = el)}
        >
                {pData?.applyHeading}
        </h2>
        <ol
        style={{marginLeft: "40px"}}
          className={`${styles.list} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
          <li className={styles.listOl}>
          {pData?.a1}
          </li>
          <li className={styles.listOl}>
          {pData?.a2}
          </li>
          <li className={styles.listOl}>
          {pData?.a3}
          </li>
        </ol>

        <section>
          <button
            className={styles.button1}
            onClick={() =>
              (window.location.href =
                "/booking")
            }
          >
            Book Appointment
          </button>
        </section>

        <section
          style={{ marginTop: "50px" }}
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[15] = el)}
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
      <h2
        style={{ textAlign: "center" }}
        className={`${styles.lastSubtitle} ${styles.section}`}
        id="testing7"
        ref={(el) => (sectionsRef.current[10] = el)}
      >
        Here’s how we can help you:
      </h2>
      <OurProcess />

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

export default PathwaysForCaregiver;
