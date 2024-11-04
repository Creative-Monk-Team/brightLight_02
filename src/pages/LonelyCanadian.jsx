import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/LonelyCanadian.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const LonelyCanadian = () => {
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
    fetch("https://brightlight-node.onrender.com/lonelyCanadianMeta")
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
    fetch("https://brightlight-node.onrender.com/lonelyCanadian")
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
                About the Program{" "}
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("duration")}>Duration</p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("alternatives")}>
                Alternatives
              </p>
              <p onClick={() => scrollToSection("bankruptcy")}>How to Apply?</p>
              <p onClick={() => scrollToSection("sponsor-siblings")}>
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
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>
          {pData?.LonCanHeading}
          </h1>
          <p>
          {pData?.LonCanPara}
          </p>
        </header>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2>
          {pData?.EligibilityHeading}
          </h2>
          <h4>
          {pData?.EligibilitySubHeading}
          </h4>
          <ol
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
              {" "}
              {pData?.e1}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.e2}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.e3}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.e4}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.e5}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.e6}
            </li>
            <li>
            {pData?.e7}
            </li>
          </ol>
        </section>

        <section
          className={`${styles.duration} ${styles.section}`}
          id="duration"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>{pData?.DurationHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.DLi1}
            </li>
            <li>
            {pData?.DLi2}
            </li>
            <li>
            {pData?.DLi3}
            </li>
            <li>
            {pData?.DLi4}
            </li>
            <li>
            {pData?.DLi5}
            </li>
            <li>
            {pData?.DLi6}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.bankruptcyCriminalSentences} ${styles.section}`}
          id="bankruptcy"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>{pData?.BankruptcyHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.bankL1}
            </li>
            <li>
            {pData?.bankL2}
            </li>
            <li>
            {pData?.bankL3}
            </li>
            <li>{pData?.bankL4}</li>
            <li>
               {pData?.bankL5}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.sponsoringSiblings} ${styles.section}`}
          id="sponsor-siblings"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>  {pData?.SponsoringHeading}</h2>
          <ul>
            <li>
              <h4>{pData?.SponsoringSubHead1}</h4>
            </li>
          </ul>

          <ul
            style={{
              listStyle: "circle",
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            <li>
            {pData?.SponLi1}
            </li>
            <li>
            {pData?.SponLi2}
            </li>
          </ul>
          <ul>
            <li>
              <h4>{pData?.SponsoringSubHead2}</h4>
            </li>
          </ul>

          <ul
            style={{
              listStyle: "circle",
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <li>{pData?.SponLi3}</li>
            <li>{pData?.SponLi4}</li>
            <li>{pData?.SponLi5}</li>
            <li>{pData?.SponLi6}</li>
            <li>{pData?.SponLi7}</li>
            <li>{pData?.SponLi8}</li>
            <li>{pData?.SponLi9}</li>
          </ul>
        </section>

        <section
          className={`${styles.alternatives} ${styles.section}`}
          id="alternatives"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>{pData?.ExplHeading}</h2>
          <p>
          {pData?.ExplSubHead}
          </p>
          <ol
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <li style={{ marginBottom: "10px" }}>
            {pData?.ExpLi1} {" "}
              <a href="/study-visa" className={styles.link}>
                Learn more about Study Visas
              </a>  {" "}
            </li>
            <li style={{ marginBottom: "10px" }}>
            {pData?.ExpLi2}  {" "}
            </li>
            <li>
            {pData?.ExpLi3}  {" "}
              <a href="/express-entry" className={styles.link}>
                Learn more about Express Entry
              </a>  {" "}
            </li>
          </ol>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>{pData?.HowApplyHeading}</h2>
          <h3>{pData?.HowApplyStepHead1}</h3>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
          >
            <h4>
              <strong>{pData?.HowApplySubHead1}</strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                <li>
                {pData?.ha1}
                </li>
                <li>
                {pData?.ha2}
                </li>
                <li>
                {pData?.ha3}
                </li>
                <li>
                {pData?.ha4}
                </li>
              </ul>
            </li>
            <h4>
              <strong>{pData?.HowApplySubHead2}</strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                <li>{pData?.ha5}</li>
                <li>
                {pData?.ha6}
                </li>
                <li>
                {pData?.ha7}
                </li>
                <li>
                {pData?.ha8}
                </li>
                <li>{pData?.ha9}</li>
                <li>{pData?.ha10}</li>
              </ul>
            </li>
            <h4>
              <strong>
              {pData?.HowApplySubHead3}
              </strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                <li>{pData?.ha11}</li>
                <li>{pData?.ha12}</li>
                <li>{pData?.ha13}</li>
                <li>{pData?.ha14}</li>
              </ul>
            </li>
          </ul>
          <h3>{pData?.HowApplyStepHead2}</h3>
          <ul>
            <h4>
              <strong>{pData?.HowApplySubHead4}</strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul
                style={{
                  marginLeft: "40px",
                  marginTop: "20px",
                  marginBottom: "60px",
                }}
              >
                <li>
                {pData?.ha15}
                </li>
                <li>
                {pData?.ha16}
                </li>
              </ul>
            </li>
            <h4>
              <strong>{pData?.HowApplySubHead5}</strong>
            </h4>
            <li style={{ listStyle: "none" }}>
              <ul>
                <li style={{ listStyle: "none" }}>
                  <p>
                  {pData?.haPara1}
                  </p>
                  <ul
                    style={{
                      marginLeft: "40px",
                      marginTop: "20px",
                      marginBottom: "60px",
                    }}
                  >
                    <li>{pData?.ha17}</li>
                    <li>{pData?.ha18}</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
          <h3>{pData?.HowApplyStepHead3}</h3>
          <p>
          {pData?.haPara2}
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
          id="why-choose-u"
          ref={(el) => (sectionsRef.current[99] = el)}
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

export default LonelyCanadian;
