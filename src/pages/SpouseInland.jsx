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

const SpouseInland = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/spousalInlandMeta")
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
    fetch("https://brightlight-node.onrender.com/SpouseInland")
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


  const fetchedValue1 = pData?.kp1;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.kp2;
  const strongText2 = extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2)

  
  const fetchedValue3 = pData?.kp3;
  const strongText3 = extractStrongText(fetchedValue3);
  const remainingText3 = extractRemainingText(fetchedValue3)

  
  const fetchedValue4 = pData?.kp4;
  const strongText4 = extractStrongText(fetchedValue4);
  const remainingText4 = extractRemainingText(fetchedValue4)


  const fetchedValue5 = pData?.b1;
  const strongText5 = extractStrongText(fetchedValue5);
  const remainingText5 = extractRemainingText(fetchedValue5)

  
  const fetchedValue6 = pData?.b2;
  const strongText6 = extractStrongText(fetchedValue6);
  const remainingText6 = extractRemainingText(fetchedValue6)

  
  const fetchedValue7 = pData?.b3;
  const strongText7 = extractStrongText(fetchedValue7);
  const remainingText7 = extractRemainingText(fetchedValue7)


  const fetchedValue8 = pData?.er1;
  const strongText8 = extractStrongText(fetchedValue8);
  const remainingText8 = extractRemainingText(fetchedValue8)

  
  const fetchedValue9 = pData?.er2;
  const strongText9 = extractStrongText(fetchedValue9);
  const remainingText9 = extractRemainingText(fetchedValue9)

  //

  const fetchedValue10 = pData?.eow1;
  const strongText10 = extractStrongText(fetchedValue10);
  const remainingText10 = extractRemainingText(fetchedValue10)

  
  const fetchedValue11 = pData?.eow2;
  const strongText11 = extractStrongText(fetchedValue11);
  const remainingText11 = extractRemainingText(fetchedValue11)


  const fetchedValue12 = pData?.eow3;
  const strongText12 = extractStrongText(fetchedValue12);
  const remainingText12 = extractRemainingText(fetchedValue12)

  
  const fetchedValue13 = pData?.eow4;
  const strongText13 = extractStrongText(fetchedValue13);
  const remainingText13 = extractRemainingText(fetchedValue13)

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
              <p onClick={() => scrollToSection("Key-Points")}>Key Points</p>
              <p onClick={() => scrollToSection("Benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("How-to-apply")}>
                How to Apply
              </p>
              <p onClick={() => scrollToSection("Eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("Inland-SOWP")}>Inland-SOWP</p>
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
          id="about-program"
          style={{
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          {pData?.heading}
        </h1>
        <p className={styles.headingPara}>
          {pData?.description}
        </p>

        <h2
          style={{
            marginTop: "50px",
          }}
          id="Key Points"
        >
           {pData?.KeyPointsHeading}
        </h2>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px"
          }}
        >
          <li>
            <strong>{strongText1}</strong> {remainingText1}
          </li>
          <li>
          <strong>{strongText2}</strong> {remainingText2}
          </li>
          <li>
          <strong>{strongText3}</strong> {remainingText3}
          </li>
          <li>
          <strong>{strongText4}</strong> {remainingText4}
          </li>
        </ul>

        <h2 id="Benifits">  {pData?.BenefitHeading}</h2>
        <ul
          style={{
            marginTop: "20px",
            marginBottom: "60px",
            marginLeft: "40px"
          }}
        >
          <li>
          <strong>{strongText5}</strong> {remainingText5}
          </li>
          <li>
          <strong>{strongText6}</strong> {remainingText6}
          </li>
          <li>
          <strong>{strongText7}</strong> {remainingText7}
          </li>
        </ul>

        <h2 id="Eligibility">
        {pData?.eligibleCriteriaHeading}
        </h2>
        <ul
          style={{
            marginBottom: "60px",
            marginLeft: "40px"
          }}
        >
          <li>  {pData?.e1}</li>
          <li>
          {pData?.e2}
          </li>
          <li>
          {pData?.e3}
          </li>
          <ul 
                   style={{
                    marginBottom: "60px",
                    marginLeft: "40px",
                    listStyleType: "circle"

                  }}
          >
            <li>
            {pData?.e3Sub1}
            </li>
            <li>{pData?.e3Sub2}</li>
          </ul>
          <h3 style={{ margin: "20px 0px" }}>
            {pData?.eligRelHeading}
          </h3>
          <ul>
            <li>
            <strong>{strongText8}</strong> {remainingText8}
            </li>
            <li>
            <strong>{strongText9}</strong> {remainingText9}
            </li>
          </ul>
          <li>
          {pData?.er3}
          </li>
          <li>
          {pData?.er4}
          </li>
          <li>
          {pData?.er5}
          </li>
        </ul>

        <h2 id="Inland-SOWP">{pData?.HowInlaSpoSponWorkHeading}</h2>
        <p
          style={{
            marginBottom: "60px",
          }}
        >
         {pData?.HowInlaSpoSponWorkPara}
        </p>

        <h3>{pData?.AppCompHeading}</h3>
        <ul
          style={{
            marginBottom: "60px",
            marginLeft: "40px"
          }}
        >
          <li>
          {pData?.ac1}
          </li>
          <li>
          {pData?.ac2}
          </li>
        </ul>

        <h2   id="How-to-apply">{pData?.HowAppInlSpoSponHeading}</h2> 
        <ol className={styles.howToApply}
          style={{
            marginTop: "20px",
            marginBottom: "60px", 
            marginLeft: "40px"
          }}
        >
          <li>{pData?.ha1}</li>
          <li>{pData?.ha2}</li>
          <li>{pData?.ha3}</li>
          <li>{pData?.ha4}</li>
        </ol>

        <h3>{pData?.RemainingCanadaHeading}</h3>
        <p>
          {pData?.RemainingCanadaPara}
        </p>

        <h2>{pData?.HowLongProcInlAppHeading}</h2>
        <p
          style={{
            marginBottom: "60px",
          }}
        >
         {pData?.HowLongProcInlAppPara}
        </p>

        <h2>{pData?.InlSpouSponHeading}</h2>
        <p
          style={{
            marginBottom: "20px",
          }}
        >
             {pData?.InlSpouSponPara}
        </p>

        <h3>{pData?.EligOpenWorkHeading}</h3>
        <ul
          style={{
            marginLeft: "40px",
            marginTop: "20px",
            marginBottom: "60px",
          }}
        >
          <li>
            {" "}
            <strong>{strongText10}</strong> {remainingText10}
          </li>
          <li>
          <strong>{strongText11}</strong> {remainingText11}
          </li>
          <li>
          <strong>{strongText12}</strong> {remainingText12}
          </li>
          <li>
          <strong>{strongText13}</strong> {remainingText13}
          </li>
        </ul>

        <h3>{pData?.AppSpouHeading}</h3>
        <p>
           {pData?.AppSpouPara}
        </p>

        <section
          style={{ marginTop: "50px" }}
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
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
            "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
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

export default SpouseInland;
