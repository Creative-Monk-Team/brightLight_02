import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CommonLawPartnerTemporary.module.css";
import { Link } from "react-router-dom";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const CommonLawPartnerTemporary = () => {
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
    fetch("https://brightlight-node.onrender.com/comLawPartTempMeta")
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
    fetch("https://brightlight-node.onrender.com/commonLawPartnerTemporary")
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
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
              </p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose Us?
              </p>
              {/* <p onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </p> */}
              {/* <p onClick={() => scrollToSection("faqs")}>FAQs</p> */}
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container} id="container">
        <h1
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
         {pData?.comLawPartTempHeading01}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <p>
          {pData?.comLawPartTempHeading}
          </p>
          <p> {pData?.comLawPartTempPara2}</p>
          <ol style={{marginLeft: "40px"}}>
            <li>
            {pData?.comLawPartTempLi1}
            </li>
            <li style={{marginTop: "10px", marginBottom: "20px"}}>
            {pData?.comLawPartTempLi2}
            </li>
          </ol>
          <p>
          {pData?.comLawPartTempPara3}
          </p>
        </section>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benifits"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.BenifitHeading}
          </h2>
          <ul className={styles.benifitsLi} style={{marginLeft: "40px"}}>
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
          id="eligibility"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligibilityHeading}
          </h2>
          <p>
          {pData?.EligSubHead}
          </p>

          <h3>{pData?.e1h1}</h3>
          <ul className={styles.requirementsList}>
            <h2>{pData?.eh1}</h2>
            <li>
              <strong>{pData?.es1h1Lih}</strong>
              <ul style={{marginLeft: "40px"}} className={styles.subList}>
                <li>{pData?.es1h1Li1}</li>
                <li>
                {pData?.es1h1Li2}
                </li>
                <li>{pData?.es1h1Li3}</li>
              </ul>
            </li>
            <li>
              <strong>{pData?.es1h2Lih}</strong>
              <p>
              {pData?.es1h2Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es1h3Lih}</strong>
              <p>
              {pData?.es1h3Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es1h4Lih}</strong>
              <p>
              {pData?.es1h4Li1}
              </p>
            </li>
            <table className={styles.wageTable}>
              <thead className={styles.tableHeader}>
                <tr>
                  <th className={styles.headerProvince}>  {pData?.WageTableHead1}</th>
                  <th className={styles.headerWage}>  {pData?.WageTableHead2}</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                <tr className={styles.rowAlberta}>
                  <td className={styles.cellProvince}>{pData?.wt1Li1}</td>
                  <td className={styles.cellWage}> {pData?.wt2Li1}</td>
                </tr>
                <tr className={styles.rowBC}>
                  <td className={styles.cellProvince}> {pData?.wt1Li2}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li2}</td>
                </tr>
                <tr className={styles.rowManitoba}>
                  <td className={styles.cellProvince}> {pData?.wt1Li3}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li3}</td>
                </tr>
                <tr className={styles.rowNB}>
                  <td className={styles.cellProvince}> {pData?.wt1Li4}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li4}</td>
                </tr>
                <tr className={styles.rowNL}>
                  <td className={styles.cellProvince}> {pData?.wt1Li5}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li5}</td>
                </tr>
                <tr className={styles.rowNWT}>
                  <td className={styles.cellProvince}> {pData?.wt1Li6}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li6}</td>
                </tr>
                <tr className={styles.rowNS}>
                  <td className={styles.cellProvince}> {pData?.wt1Li7}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li7}</td>
                </tr>
                <tr className={styles.rowNunavut}>
                  <td className={styles.cellProvince}> {pData?.wt1Li8}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li8}</td>
                </tr>
                <tr className={styles.rowOntario}>
                  <td className={styles.cellProvince}> {pData?.wt1Li9}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li9}</td>
                </tr>
                <tr className={styles.rowPEI}>
                  <td className={styles.cellProvince}> {pData?.wt1Li10}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li10}</td>
                </tr>
                <tr className={styles.rowQuebec}>
                  <td className={styles.cellProvince}> {pData?.wt1Li11}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li11}</td>
                </tr>
                <tr className={styles.rowSaskatchewan}>
                  <td className={styles.cellProvince}> {pData?.wt1Li12}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li12}</td>
                </tr>
                <tr className={styles.rowYukon}>
                  <td className={styles.cellProvince}> {pData?.wt1Li13}</td>
                  <td className={styles.cellWage}>{pData?.wt2Li13}</td>
                </tr>
              </tbody>
            </table>

            <li>
              <strong>{pData?.es1h5Lih}</strong>
              <ul style={{marginLeft: "40px"}} className={styles.subList}>
                <li>
                {pData?.es1h5Li1}
                </li>
                <li>  {pData?.es1h5Li2}</li>
                <li>
                {pData?.es1h5Li3}
                </li>
                <li>
                {pData?.es1h5Li4}
                </li>
                <li>
                {pData?.es1h5Li5}
                </li>
                <li>{pData?.es1h5Li6}</li>
              </ul>
            </li>
          </ul>

          <h3 className={styles.validWorkLiHead}>
          {pData?.e2h2}
          </h3>
          <ul className={styles.requirementsList}>
            <li>
              <strong>{pData?.eh2}</strong>
              <p>{pData?.es2h6Lih}</p>
              <ul style={{marginLeft: "40px"}} className={styles.subList}>
                <li>{pData?.es2h6Li1}</li>
                <li>
                {pData?.es2h6Li2}
                </li>
                <li>  {pData?.es2h6Li3}</li>
              </ul>
            </li>
            <li>
              <strong>  {pData?.es2h8Lih}</strong>
              <p>
              {pData?.es2h7Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es2h8Lih}</strong>
              <p>
              {pData?.es2h8Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es2h9Lih}</strong>
              <p>
              {pData?.es2h9Li1}
              </p>
            </li>
            <li>
              <strong>{pData?.es2h10Lih}</strong>
              <p>
              {pData?.es2h10Li1}
              </p>
            </li>
            <li>
              <strong>
              {pData?.es2h11Ph}
              </strong>
              <p>
              {pData?.es2h11P1}
              </p>
            </li>
            <li>
              <strong>{pData?.es2h12Lih}</strong>
              <ul style={{marginLeft: "40px"}} className={styles.subList}>
                <li>
                {pData?.es2h12Li1}
                </li>
                <li>
                {pData?.es2h12Li2}
                </li>
                <li>
                {pData?.es2h12Li3}
                </li>
                <li>
                {pData?.es2h12Li4}
                </li>
                <li>   {pData?.es2h12Li5}</li>
                <li>   {pData?.es2h12Li6}</li>
                <li>
                {pData?.es2h12Li7}
                </li>
                <li>
                {pData?.es2h12Li8}
                </li>
              </ul>
            </li>
          </ul>
        </section>
        
        <section
          className={`${styles.section} ${styles.section}`}
          id="testing"
          ref={(el) => (sectionsRef.current[14] = el)}
        >
          <h2>{pData?.FamMembHeading}</h2>
          <p className={styles.testPara}>
          {pData?.FamMembSubHead}
          </p>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.FamMembSubLi1}
            </li>
            <li>
            {pData?.FamMembSubLi2}
            </li>
            <li>
            {pData?.FamMembSubLi3}
            </li>
          </ul>
        </section>
        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading} id="how-to-apply">
          {pData?.HowApplyHeading}
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
            <li>
            {pData?.ha4}
            </li>
            <li>{pData?.ha5}</li>
            <li>
            {pData?.ha6}
            </li>
            <li>{pData?.ha7}</li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.RefusalHeading}
          </h2>
          <ul className={styles.RefusalLi} style={{marginLeft: "40px"}}>
            <li>
            {pData?.r1}
            </li>
            <li>
            {pData?.r2}
            </li>
            <li>
            {pData?.r3}
            </li>
            <li>
            {pData?.r4}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.assistance} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>   {pData?.NeedAssisHeading}</h2>
          <p>
          {pData?.NeedAssisPara} {" "}
            <Link className={styles.contactUS} to="/contact-us">
              contact us
            </Link> {" "}

          </p>
        </section>
{/* 
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us?</h2>
          <p>
            At Brightlight Immigration, we provide expert guidance and support
            throughout your immigration journey. Our dedicated team is committed
            to achieving the best possible outcomes for our clients.
          </p>

        </section> */}
        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
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
          <button
            onClick={() =>
              (window.location.href =
                "/booking")
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

export default CommonLawPartnerTemporary;
