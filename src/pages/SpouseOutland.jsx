import React, { useState, useEffect } from "react";
import styles from "../styles/SpouseInland.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const SpouseOutland = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/spousalOutlandMeta")
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
    fetch("https://brightlight-node.onrender.com/SpouseOutland")
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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const extractStrongText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    const strongMatch = htmlString.match(/<strong>(.*?)<\/strong>/);
    return strongMatch ? strongMatch[1] : "";
  };

  const extractRemainingText = (htmlString) => {
    if (typeof htmlString !== "string") return "";
    return htmlString.replace(/<strong>.*?<\/strong>/, "").trim();
  };


  const fetchedValue1 = pData?.e3Sub1;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.e3Sub2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2)

  const fetchedValue3 = pData?.e3Sub3;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3)

  //

  
  const fetchedValue4 = pData?.osp1;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4);

  const fetchedValue5 = pData?.osp2;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5)

  const fetchedValue6 = pData?.osp3;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6= extractRemainingText(fetchedValue6)

  const fetchedValue7 = pData?.osp4;
  const strongText7 = extractStrongText(fetchedValue7);
  const remainingText7 = extractRemainingText(fetchedValue7)

  //


  const fetchedValue8 = pData?.qsc1;
  const strongText8 =  extractStrongText(fetchedValue8);
  const remainingText8= extractRemainingText(fetchedValue8)

  const fetchedValue9 = pData?.qsc2;
  const strongText9 = extractStrongText(fetchedValue9);
  const remainingText9 = extractRemainingText(fetchedValue9)

  //
  const fetchedValue10 = pData?.qsc2;
  const strongText10 = extractStrongText(fetchedValue10);
  const remainingText10 = extractRemainingText(fetchedValue10)

//

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
              <p onClick={() => scrollToSection("Process")}>Process</p>
              <p onClick={() => scrollToSection("Process-Timeline")}>
                Process Timeline
              </p>
              <p onClick={() => scrollToSection("How-to-apply")}>
                How to Apply
              </p>
              <p onClick={() => scrollToSection("Eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("Dual-Intent-Visa")}>
                Dual Intent Visa
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
          style={{
            marginTop: "40px",
            marginBottom: "30px",
          }}
          id="about-program"
        >
         {pData?.heading}
        </h1>
        <p
          style={{
            marginBottom: "50px",
          }}
        >
          {pData?.description}
        </p>

        <h2>{pData?.IsOutlandSponHeading}</h2>
        <p>{pData?.IsOutlandSponSubHead}</p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <li>{pData?.os1}</li>
          <li>{pData?.os2}</li>
        </ul>
        <p>
        {pData?.IsOutlandSponSubPara}
        </p>

        <h2
          style={{
            marginTop: "50px",
          }}
          id="Process"
        >
           {pData?.ApprovalProcessHeading}
        </h2>
        <p>
           {pData?.ApprovalProcessPara}
        </p>

        <h2
          style={{
            marginTop: "50px",
          }}
          id="Eligibility"
        >
           {pData?.eligCritHeading}
        </h2>
        <p>
          {pData?.eligCritSubHead}
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <li>  {pData?.e1} </li>
          <li> {pData?.e2}</li>
          <li>{pData?.e3}</li>
          <ul
            style={{
              listStyle: "circle",
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <li>
              <strong> {strongText1}</strong> {remainingText1}
            </li>
            <li>
            <strong> {strongText2}</strong> {remainingText2}
            </li>
            <li>
            <strong> {strongText3}</strong> {remainingText3}
            </li>
          </ul>
          <li>
            {pData?.e4}
          </li>
          <li>
             {pData?.e5}
          </li>
        </ul>
        <p>
            {pData?.eNote}
        </p>

        <h2
          style={{
            marginTop: "60px",
          }}
          id="How-to-apply"
        >
            {pData?.HowToApplyOutlSponHeading}
        </h2>
        <p>
           {pData?.HowToApplyOutlSponPara}
        </p>
        <h3
          style={{
            marginTop: "20px",
          }}
        >
            {pData?.HowToApplyOutlSponProcHeading}
        </h3>
        <ol
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "60px",
          }}
        >
          <li>
          <strong> {strongText4}</strong> {remainingText4}
          </li>
          <li>
          <strong> {strongText5}</strong> {remainingText5}
          </li>
          <li>
          <strong> {strongText6}</strong> {remainingText6}
          </li>
          <li>
          <strong> {strongText7}</strong> {remainingText7}
          </li>
        </ol>

        <h2>  {pData?.QueSpecConsidHeading}</h2>
        <p
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
        <strong> {strongText8}</strong> {remainingText8}
        </p>
        <p
          style={{
            marginLeft: "40px",
            marginTop: "30px",
            marginBottom: "50px",
          }}
        >
         <strong> {strongText9}</strong> {remainingText9}
        </p>

        <h2 id="Process-Timeline">  {pData?.ProcTimeHeading}</h2>
        <p>
        <strong> {strongText10}</strong> {remainingText10}
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <li>
          {pData?.pt1}
          </li>
          <li>
          {pData?.pt2}
          </li>
          <li>
          {pData?.pt3}
          </li>
          <li>
          {pData?.pt4}
          </li>
        </ul>
        <p>
          {pData?.ptNote}
        </p>

        <h2
          style={{
            marginTop: "50px",
          }}
        >
           {pData?.DualIntVisaOutSpouHeading}
        </h2>
        <p>
        {pData?.DualIntVisaOutSpouPara}
        </p>

        <h3
          style={{
            marginTop: "30px",
          }}
          id="Dual-Intent-Visa"
        >
          {pData?.WhatisDualIntVisaHeading}
        </h3>
        <p>
          {pData?.wd1}
        </p>
        <p>
          {pData?.wd2}
        </p>

        <h2
          style={{
            marginTop: "50px",
          }}
        >
             {pData?.SpousesPartnersHeading}
        </h2>
        <p>
             {pData?.SpousesPartnerPara1}
        </p>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "30px",
          }}
        >
          <li>{pData?.sp1}</li>
          <li>{pData?.sp2}</li>
          <li>{pData?.sp3}</li>
          <li>{pData?.sp4}</li>
        </ul>
        <p>
           {pData?.spousesPartnerPara2}
        </p>

        <section
          style={{ marginTop: "50px" }}
          className={`${styles.section} ${styles.section}`}
          id="why-choose-u"
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
      <button
        className={styles.bookAppointmentBtn}
        onClick={() =>
          (window.location.href =
            "/booking")
        }
      >
        Book Appointment
      </button>
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

export default SpouseOutland;
