import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/GlobalStreamLmia.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const GlobalStreamLmia = () => {
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
    fetch("https://brightlight-node.onrender.com/globalStreamLmiaMeta")
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
    fetch("https://brightlight-node.onrender.com/globalStreamLmia")
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
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("labour-market")}>
                Labour Market
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

      <div className={styles.container} id="container">
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <h1>{pData?.GTSHeading}</h1>
          </header>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <p>
            {pData?.GTSDescription}
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="benifits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>{pData?.GTSBenefitsHeading}</h2>
            <ul style={{marginLeft: "40px"}}>
              <li>
              {pData?.GTSBenefitsLis1}
              </li>
              <li>{pData?.GTSBenefitsLis2}</li>
              <li>
              {pData?.GTSBenefitsLis3}
              </li>
              <li>
              {pData?.GTSBenefitsLis4}
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>{pData?.GTSEligibilityHeading}</h2>
            <h3>{pData?.GTSEligibilitySubHeading1}</h3>
            <p>
            {pData?.GTSEligibilitySubHeading2}
            </p>
            <ol style={{ marginLeft: "40px" }}>
              <li>
                <strong>
                  <a href="#CategoryA">
                  {pData?.GTSCategoryAPreviewHeading}
                  </a>
                </strong>
              </li>
              <li>
                <strong>
                  <a href="#CategoryB">
                  {pData?.GTSCategoryBPreviewHeading}
                  </a>
                </strong>
              </li>
            </ol>

            <h3 id="CategoryA">
              1{" "}{pData?.GTSCategoryAHeading}
            </h3>

            <p>
            {pData?.GTSCategoryADescription}
            </p>
            <ul style={{ marginLeft: "20px" }}>
              <li>{pData?.GTSCategoryAList1}</li>
              <li>
              {pData?.GTSCategoryAList2}
              </li>
              <li>
              {pData?.GTSCategoryAList3}
              </li>
              <li>
              {pData?.GTSCategoryAList4}
              </li>
            </ul>

            <h3 id="CategoryB">
            {pData?.GTSCategoryBHeading}
            </h3>
            <p>
            {pData?.GTSCategoryBDescription}
            </p>
            <p>
            {pData?.GTSCategoryBTableHeading}
            </p>
            <table className={styles.Globaltable}>
              <thead>
                <tr>
                  <th>{pData?.GSTCategoryBInnerHeading1}</th>
                  <th>{pData?.GSTCategoryBInnerHeading2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.GSTCategoryBINoc1}</td>
                  <td>{pData?.GSTCategoryBIJob1}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc2}</td>
                  <td>{pData?.GSTCategoryBIJob2}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc3}</td>
                  <td>{pData?.GSTCategoryBIJob3}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc4}</td>
                  <td>{pData?.GSTCategoryBIJob4}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc5}</td>
                  <td>{pData?.GSTCategoryBIJob5}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc6}</td>
                  <td>{pData?.GSTCategoryBIJob6}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc7}</td>
                  <td>{pData?.GSTCategoryBIJob7}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc8}</td>
                  <td>{pData?.GSTCategoryBIJob8}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc9}</td>
                  <td>{pData?.GSTCategoryBIJob9}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc10}</td>
                  <td>{pData?.GSTCategoryBIJob10}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc11}</td>
                  <td>{pData?.GSTCategoryBIJob11}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc12}</td>
                  <td>{pData?.GSTCategoryBIJob12}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc13}</td>
                  <td>{pData?.GSTCategoryBIJob13}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc14}</td>
                  <td>{pData?.GSTCategoryBIJob14}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc15}</td>
                  <td>{pData?.GSTCategoryBIJob15}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc16}</td>
                  <td>{pData?.GSTCategoryBIJob16}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc17}</td>
                  <td>{pData?.GSTCategoryBIJob17}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc18}</td>
                  <td>
                  {pData?.GSTCategoryBIJob18}
                  </td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc19}</td>
                  <td>{pData?.GSTCategoryBIJob19}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc20}</td>
                  <td>{pData?.GSTCategoryBIJob20}</td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc21}</td>
                  <td>
                  {pData?.GSTCategoryBIJob21}
                  </td>
                </tr>
                <tr>
                  <td>{pData?.GSTCategoryBINoc22}</td>
                  <td>
                  {pData?.GSTCategoryBIJob22}
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="labour-market"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2>{pData?.LMBPHeading}</h2>
            <p>
            {pData?.LMBPDescription}
            </p>
            <p>
            {pData?.LMBPHListIntro1}
            </p>
            <ul style={{ marginLeft: "40px" }}>
              <li>
              {pData?.LMBPList1}
              </li>
              <li>
              {pData?.LMBPList2}
              </li>
            </ul>
            <p>
            <strong>
            {pData?.LMBPHListIntro2}
            </strong>
            </p>
            <ul style={{ marginLeft: "40px" }}>
              <li>
              {pData?.LMBPExList1}
              </li>
              <li>
              {pData?.LMBPExList2}
              </li>
              <li>{pData?.LMBPExList3}</li>
              <li>
              {pData?.LMBPExList4}
              </li>
              <li>
              {pData?.LMBPExList5}
              </li>
              <li>
              {pData?.LMBPExList6}
              </li>
              <li>
              {pData?.LMBPExList7}
              </li>
              <li>
              {pData?.LMBPExList8}
              </li>
              <li>
              {pData?.LMBPExList9}
              </li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h2>{pData?.HowToApplyHeading}</h2>
            <ol style={{marginLeft: "40px"}}>
              <li>
              {pData?.HowToApplyList1}
              </li>
              <li>
              {pData?.HowToApplyList2}
              </li>
              <li>
              {pData?.HowToApplyList3}
              </li>
              <li>
              {pData?.HowToApplyList4}
              </li>
              <li>{pData?.HowToApplyList5}</li>
              <li>
              {pData?.HowToApplyList6}
              </li>
              <li>
              {pData?.HowToApplyList7}
              </li>
            </ol>
            <p>
            {pData?.HowToApplyPara}
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <h2>
            {pData?.RefusalHeading}
            </h2>
            <ol style={{marginLeft: "40px"}}>
              <li>
              {pData?.Refusallist1}
              </li>
              <li>
              {pData?.Refusallist2}
              </li>
              <li>
              {pData?.Refusallist3}
              </li>
              <li>
              {pData?.Refusallist4}
              </li>
              <li>
              {pData?.Refusallist5}
              </li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            <h2>  {pData?.StillNotSureHeading}</h2>
            <p>
            {pData?.StillNotSurePara1}
            </p>
            <p>
            {pData?.StillNotSurePara2}
            </p>
            <p>
            {pData?.StillNotSurePara3}
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <button
              onClick={() =>
                (window.location.href =
                  "/booking")
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
          <ul className={styles.whychooseusLi} style={{marginLeft: "40px"}}>
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

export default GlobalStreamLmia;
