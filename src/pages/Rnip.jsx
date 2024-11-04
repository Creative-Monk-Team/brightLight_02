import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Rnip.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const AgriFoodPilotProgram = () => {
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
    fetch("https://brightlight-node.onrender.com/rNIPMeta")
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
    fetch("https://brightlight-node.onrender.com/rnip-page")
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
                Refusal Reasons
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
          <h1>{pData?.heading}</h1>
        </header>
        <section>
          <p
            className={`${styles.section} ${styles.section}`}
            id="benefits"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
           {pData?.description1}
          </p>
          <p
            className={`${styles.section} ${styles.section}`}
            id="testing2"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            {pData?.description2}
          </p>
          <p style={{ marginBottom: "20px" }}>
              {pData?.participationHeading}
          </p>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.p1}
            </li>
            <li>
            {pData?.p2}
            </li>
          </ul>

          <h2>{pData?.benefitsHeading}</h2>
          <ul style={{ marginLeft: "40px" }}>
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
          <h2>{pData?.eligibilityHeading}</h2>
          <p>{pData?.eligibilityDescription}</p>
          <ol style={{ marginLeft: "40px" }}>
            <li style={{ marginBottom: "20px" }}>
            {pData?.elibilityP1}
            </li>
            <li>
            {pData?.elibilityP2}
            </li>
          </ol>
          <h2>  {pData?.applyHeading}</h2>
          <ol style={{ marginLeft: "40px" }}>
            <li style={{ marginBottom: "20px" }}>
            {pData?.apply1}
            </li>
            <li style={{ marginBottom: "20px" }}>
            {pData?.apply2}
            </li>
            <li style={{ marginBottom: "20px" }}>
            {pData?.apply3}
            </li>
          </ol>
          <p style={{ marginBottom: "20px" }}>
            {pData?.applyRequirementsHeading}
          </p>
          <p style={{ marginBottom: "20px" }}>You must:</p>
          <ul style={{ marginLeft: "40px" }}>
            <li>
            {pData?.ar1}
            </li>
            <li>  {pData?.ar2}</li>
            <li>  {pData?.ar3}</li>
            <li>
            {pData?.ar4}
            </li>
            <li>  {pData?.ar5}</li>
            <li>  {pData?.ar6}</li>
          </ul>
          <p>
          {pData?.arEndingPara}
          </p>
          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing3"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
           {pData?.participatingCommunitiesHeading}
          </h2>
          <p style={{ marginBottom: "20px", marginTop: "10px" }}>
          {pData?.participatingCommunitiesDescription1}
          </p>
          <p style={{ marginBottom: "20px" }}>
          {pData?.participatingCommunitiesDescription2}
          </p>
          <table
            className={`${styles.table} ${styles.section}`}
            id="testing4"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <thead>
              <tr>
                <th> {pData?.t1h1}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {pData?.t1r1c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r2c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r3c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r4c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r5c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r6c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r7c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r8c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r9c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r10c1}</td>
              </tr>
              <tr>
                <td> {pData?.t1r11c1}</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginBottom: "20px" }}>
            {pData?.eachCommunityPara}
          </p>
          <ul style={{ marginLeft: "40px" }}>
            <li>{pData?.eachCommunityParaList1}</li>
            <li>{pData?.eachCommunityParaList2}</li>
            <li>{pData?.eachCommunityParaList3}</li>
            <li>{pData?.eachCommunityParaList4}</li>
          </ul>

          <h2>{pData?.workExpHeading}</h2>
          <ul style={{ marginTop: "20px", marginLeft: "40px" }}>
            <li>
            {pData?.workExpList1}
            </li>
            <li>
            {pData?.workExpList2}
              <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
                <li>{pData?.workExpList2Nested1}</li>
                <li>
                {pData?.workExpList2Nested2}
                </li>
                <li>{pData?.workExpList2Nested3}</li>
                <li>{pData?.workExpList2Nested4}</li>
                <li>
                {pData?.workExpList2Nested5}
                </li>
              </ul>
            </li>
            <li>
            {pData?.workExpList3}
            </li>
            <li>{pData?.workExpList4}</li>
            <li>
            {pData?.workExpList5}
              <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                <li>
                {pData?.workExpList5Nested1}
                </li>
                <li>
                {pData?.workExpList5Nested2}
                </li>
              </ul>
            </li>
          </ul>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing10"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
            {pData?.jobOfferHeading}
          </h2>
          <p>
          {pData?.jobOfferDesc}
          </p>
          <table
            className={`${styles.jobOfferTable} ${styles.section}`}
            id="testing11"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
            <thead>
              <tr>
                <th>{pData?.t2h1}</th>
                <th>{pData?.t2h2}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.t2r1c1}</td>
                <td>{pData?.t2r1c2}</td>
              </tr>
              <tr>
                <td>{pData?.t2r2c1}</td>
                <td>{pData?.t2r2c2}</td>
              </tr>
              <tr>
                <td>{pData?.t2r3c1}</td>
                <td>{pData?.t2r3c2}</td>
              </tr>
              <tr>
                <td>{pData?.t2r4c1}</td>
                <td>{pData?.t2r4c2}</td>
              </tr>
              <tr>
                <td>{pData?.t2r5c1}</td>
                <td>{pData?.t2r5c2}</td>
              </tr>
            </tbody>
          </table>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing12"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
           {pData?.internationalStudentsHeading}
          </h2>
          <ul
          style={{marginLeft: "40px"}}
            className={`${styles.section} ${styles.section}`}
            id="testing13"
            ref={(el) => (sectionsRef.current[14] = el)}
          >
            <li>
            {pData?.isList1}
              <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                <li>
                {pData?.isList1Nested1}
                  <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <li>
                    {pData?.isList1Nested1Nested1}
                    </li>
                    <li>
                    {pData?.isList1Nested1Nested2}
                    </li>
                    <li>
                    {pData?.isList1Nested1Nested3}
                    </li>
                  </ul>
                </li>
                <p>{pData?.orStatement}</p>
                <li style={{ marginTop: "20px" }}>
                {pData?.isList1Nested2}
                  <ul style={{ marginLeft: "20px", marginTop: "20px" }}>
                    <li>
                    {pData?.isList1Nested2Nested1}
                    </li>
                    <li>
                    {pData?.isList1Nested2Nested2}
                    </li>
                    <li>
                    {pData?.isList1Nested2Nested3}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <p>
          {pData?.isImportantPara}
          </p>

          <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
            <li>  {pData?.isImportantParaList1}</li>
            <li>
            {pData?.isImportantParaList2}
            </li>
            <li>
            {pData?.isImportantParaList3}
            </li>
          </ul>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing14"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
             {pData?.languageRequirementsHeading}
          </h2>
          <p style={{ marginBottom: "20px" }}>
          {pData?.languageRequirementsDescription1}
          </p>
          <p style={{ marginBottom: "20px" }}>  {pData?.languageRequirementsDescription2}</p>
          <ul style={{ marginLeft: "40px" }}>
            <li>  {pData?.languageRequirementsList1Point1}</li>
            <li>  {pData?.languageRequirementsList1Point2}</li>
          </ul>
          <p style={{ marginBottom: "20px", marginTop: "20px" }}>
          {pData?.languageRequirementsDescription3}
          </p>
          <ul style={{ marginLeft: "40px" }}>
            <li>  {pData?.languageRequirementsList2Point1}</li>
            <li> {pData?.languageRequirementsList2Point2}</li>
            <li> {pData?.languageRequirementsList2Point3}</li>
          </ul>
          <table
            className={`${styles.languageTable} ${styles.section}`}
            id="testing15"
            ref={(el) => (sectionsRef.current[16] = el)}
          >
            <thead>
              <tr>
                <th> {pData?.t3h1}</th>
                <th> {pData?.t3h2}</th>
                <th> {pData?.t3h3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {pData?.t3r1c1} </td>
                <td>{pData?.t3r1c2} </td>
                <td>{pData?.t3r1c3} </td>
              </tr>
              <tr>
                <td>{pData?.t3r2c1} </td>
                <td>{pData?.t3r2c2} </td>
                <td>{pData?.t3r2c3} </td>
              </tr>
              <tr>
                <td>{pData?.t3r3c1}</td>
                <td>{pData?.t3r3c2}</td>
                <td>{pData?.t3r3c3}</td>
              </tr>
            </tbody>
          </table>

          <h2>{pData?.educationalReqHeading}</h2>
          <p>
             {pData?.educationalReqDescription}
          </p>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="testing16"
            ref={(el) => (sectionsRef.current[17] = el)}
          >
            {pData?.settlementFundsHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.settlementFundsPara1}
            </li>
            <li>
            {pData?.settlementFundsPara2}
            </li>
          </ul>

          <h2>{pData?.intentionHeading}</h2>
          <p>
          {pData?.intentionDescription}
          </p>
          <h2>{pData?.findingJobHeading}</h2>
          <ul style={{ marginLeft: "40px" }}>
            <li>
              As a candidate, you must have a genuine job offer to work in one
              of the participating communities.
            </li>
            <li>
              Keep in mind each community will have its own requirements and job
              search process.
            </li>
            <li>
              Once you have a job offer and meet all the requirements, you can
              apply for a community recommendation.
            </li>
          </ul>

          <h2>   {pData?.jobOfferReqHeading}</h2>
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          {pData?.jobOfferReqDescription}
          </p>
          <ul style={{marginLeft: "40px"}}>
            <li>  {pData?.jobOfferReqList1}</li>
            <li>
            {pData?.jobOfferReqList2}
            </li>
            <li>{pData?.jobOfferReqList3}</li>
            <li>{pData?.jobOfferReqList4}</li>
            <li>{pData?.jobOfferReqList5}</li>
            <li>
            {pData?.jobOfferReqList6}
            </li>
            <li>{pData?.jobOfferReqList7}</li>
          </ul>

          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
          {pData?.jobOfferCannotPara}
          </p>
          <ul style={{marginLeft: "40px"}}>
            <li>{pData?.jobOfferCannotList1}</li>
            <li>{pData?.jobOfferCannotList2}</li>
            <li>{pData?.jobOfferCannotList3}</li>
            <li>{pData?.jobOfferCannotList4}</li>
            <li>{pData?.jobOfferCannotList5}</li>
          </ul>

          <h2
            className={`${styles.howToApply} ${styles.section}`}
            id="testing18"
            ref={(el) => (sectionsRef.current[19] = el)}
          >
             {pData?.howApplyHeading}
          </h2>
          <ol style={{marginLeft: "40px"}} className={styles.howToApplyLi}>
            <li>
            {pData?.howApplyList1}

            </li>
            <li>
            {pData?.howApplyList2}
            </li>
            <li>
            {pData?.howApplyList3}
            </li>
            <li>
            {pData?.howApplyList4}
            </li>
            <li>
            {pData?.howApplyList5}
            </li>
            <li>
            {pData?.howApplyList6}
            </li>
            <li>
            {pData?.howApplyList7}
            </li>
            <li>
            {pData?.howApplyList8}
            </li>
            <li>
            {pData?.howApplyList9}
            </li>
          </ol>

          <h2
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[21] = el)}
          >
             {pData?.refusalReasonsHeading}
          </h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.refusalReasonsList1}
            </li>
            <li>
            {pData?.refusalReasonsList2}
            </li>
            <li>
            {pData?.refusalReasonsList3}
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

export default AgriFoodPilotProgram;
