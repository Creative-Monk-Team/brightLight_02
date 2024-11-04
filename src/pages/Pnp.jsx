import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Pnp.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const Pnp = () => {
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
    fetch("https://brightlight-node.onrender.com/pNPMeta")
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
    fetch("https://brightlight-node.onrender.com/pnp-page")
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                Book Appointment
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
          className={`${styles.heading1} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          {pData?.Heading}
        </h1>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          {pData?.Description1}
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
           {pData?.Description2}
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
           {pData?.Description3}
        </p>
        <h2 className={styles.heading2}>
        {pData?.bcpnpHeading}
        </h2>
        <button
          style={{ marginTop: "10px", marginBottom: "60px" }}
          className={`${styles.button1} ${styles.section}`}
          id="testing16"
          ref={(el) => (sectionsRef.current[16] = el)}
          onClick={() => (window.location.href = "/bc-pnp")}
        >
          BCPNP
        </button>

        <h2
          className={`${styles.heading2} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
         {pData?.AreYouEligHeading}
        </h2>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <li className={styles.listItem}>
          {pData?.ayeLi1}
          </li>
          <li className={styles.listItem}>
           {pData?.ayeLi2}
          </li>
          <li className={styles.listItem}>
          {pData?.ayeLi3}
          </li>
          <li className={styles.listItem}>
          {pData?.ayeLi4}
          </li>
        </ul>

        <h3
          className={`${styles.heading3} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          {pData?.AdditionalEligHeading}
        </h3>
        <p style={{ marginTop: "20px", marginBottom: "20px" }}>
         {pData?.AdditionalEligSubHead}
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "60px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <li className={styles.listItem}>
          {pData?.adeLi1}
          </li>
          <li className={styles.listItem}>
          {pData?.adeLi2}
          </li>
          <li className={styles.listItem}>
          {pData?.adeLi3}
          </li>
        </ul>

        <h3
          className={`${styles.heading3} ${styles.section}`}
          id="testing7"
          ref={(el) => (sectionsRef.current[28] = el)}
        >
          {pData?.ApplyHeading}
        </h3>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing8"
          ref={(el) => (sectionsRef.current[49] = el)}
        >
          <li className={styles.listItem}>
          {pData?.ApplyList1}{" "}
            <a href="/pnp" className={styles.link}>
              Click here
            </a>
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList2}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList3}
          </li>
          <li className={styles.listItem}>
          {pData?.ApplyList4}
          </li>
        </ul>

        <h3
          className={`${styles.heading3} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[10] = el)}
        >
           {pData?.RefusalHeading}
        </h3>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px",
          }}
          className={`${styles.list} ${styles.section}`}
          id="testing9"
          ref={(el) => (sectionsRef.current[11] = el)}
        >
          <li className={styles.listItem}>{pData?.RefusalList1}</li>
          <li className={styles.listItem}>{pData?.RefusalList2}</li>
          <li className={styles.listItem}>{pData?.RefusalList3}</li>
          <li className={styles.listItem}>{pData?.RefusalList4}</li>
        </ul>

        <h3 className={styles.heading3} >
        {pData?.StillNotSureHeading}
        </h3>
        <p
          style={{marginTop: "20px", marginBottom: "-20px"}}
          className={`${styles.paragraph} ${styles.section}`}
          id="testing10"
          ref={(el) => (sectionsRef.current[12] = el)}
        >
          {pData?.StillNotSurePara1}
        </p>
        <p
          className={`${styles.paragraph} ${styles.section}`}
          id="testing11"
          ref={(el) => (sectionsRef.current[13] = el)}
        >
           {pData?.StillNotSurePara2}
        </p>
        <button
          id="book-appointment"
          className={styles.button}
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[39] = el)}
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

export default Pnp;
