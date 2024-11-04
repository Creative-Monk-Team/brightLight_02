import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/InternationalPostGraduateProgram.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const InternationalPostGraduateProgram = () => {
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
    fetch("https://brightlight-node.onrender.com/ipg-meta")
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
    fetch("https://brightlight-node.onrender.com/international-post-graduate-program-page")
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
              : "About Us, Brightlight Immigration, Immigration Services, Mission, Team"
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
              <p onClick={() => scrollToSection("benefits")}>Benefits</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("employer_requirements")}>
                Employer Requirements
              </p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                {" "}
                How to Apply?{" "}
              </p>
              <p onClick={() => scrollToSection("book-appointment")}>
                {" "}
                Book Appointment{" "}
              </p>
              <p onClick={() => scrollToSection("testimonials")}>
                Testimonials{" "}
              </p>
              <p onClick={() => scrollToSection("faq")}>Faq</p>
              <p onClick={() => scrollToSection("blogs")}>Blogs</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <section
          className={`${styles.section} ${styles.section}`}
          id="benefits-2"
          ref={(el) => (sectionsRef.current[30] = el)}
        >
          <h2 className={styles.header}>
          {pData?.Heading}
          </h2>
          <p style={{ textAlign: "center", marginTop: "20px" }}>
          {pData?.Description}
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h2>{pData?.BenifitsHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.BenifitsList1}
            </li>
            <li>
            {pData?.BenifitsList2}
            </li>
            <li>
            {pData?.BenifitsList3}
            </li>
            <li>
            {pData?.BenifitsList4}
            </li>
          </ul>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h4> {pData?.EligibilitySubHead}</h4>
          <ul className={styles.subheadingLink}>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-worker-program")
                    }
                  >
                    Federal Skilled Worker Program (FSW)
                  </button>
                  This program is ideal for tech workers who have the necessary
                  work experience, education, and language ability.
                </li>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/canadian-experience-class")
                    }
                  >
                    Canadian Experience Class (CEC)
                  </button>
                  Like the FSW program, the CEC is also suitable for tech
                  workers who have gained Canadian work experience.
                </li>
                <li>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-trades-program")
                    }
                  >
                    Federal Skilled Trades Program (FSTP)
                  </button>
                  If you&#39;re a trades worker, this program is designed for
                  you. It requires proof of relevant work experience, education,
                  and language proficiency.
                </li>
              </ul>
          <h2> {pData?.EligibilityHeading}</h2>
          <div className={styles.criteria}>
            <h3> {pData?.EligibilityList1}</h3>
            <ul style={{marginLeft: "40px"}}>
              <li>
              {pData?.EligibilityList1NestedList1}
              </li>
              <li>
              {pData?.EligibilityList1NestedList2}
              </li>
              <li>
              {pData?.EligibilityList1NestedList3}
              </li>
              <li>
              {pData?.EligibilityList1NestedList4}
              </li>
              <li>{pData?.EligibilityList1NestedList5}</li>
            </ul>
          </div>
          <div className={styles.criteria}>
            <h3>{pData?.EligibilityList2}</h3>
            <ul style={{marginLeft: "40px"}}>
              <li>
              {pData?.EligibilityList2NestedList1}
              </li>
              <li>
              {pData?.EligibilityList2NestedList2}
                <ul>
                  <li>{pData?.EligibilityList2NestedList2NestedList1}</li>
                  <li>{pData?.EligibilityList2NestedList2NestedList2}</li>
                  <li>
                  {pData?.EligibilityList2NestedList2NestedList3}
                  </li>
                  <li>{pData?.EligibilityList2NestedList2NestedList4}</li>
                  <li>{pData?.EligibilityList2NestedList2NestedList5}</li>
                  <li>
                  {pData?.EligibilityList2NestedList2NestedList6}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={styles.criteria}>
            <h3>{pData?.EligibilityList3}</h3>
            <ul style={{marginLeft: "40px"}}>
              <li>
              {pData?.EligibilityList3NestedList1}
              </li>
            </ul>
          </div>
          <p style={{ marginBottom: "20px", marginTop: "30px" }}>
          {pData?.EligibilityList3Note}
          </p>
          <p>
          {pData?.EligibilityList3Remember}
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>{pData?.ReqExpressHeading}</h2>
          <p>
          {pData?.ReqExpressDesc}
          </p>
          <ul style={{marginLeft: "40px"}}>
            <li>
              <a href="/federal-skilled-worker-program">
                Federal Skilled Worker (FSW)
              </a>
            </li>
            <li>
              <a href="/federal-skilled-trades-program">
                Federal Skilled Trades (FST)
              </a>
            </li>
            <li>
              <a href="/canadian-experience-class">
                Canadian Experience Class (CEC)
              </a>
            </li>
          </ul>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="employer_requirements"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>{pData?.EmpRequirementsHeading}</h2>
          <p>
          {pData?.EmpRequirementsDescription}
          </p>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>
          {pData?.ApplicationHeading}
          </h2>
          <ol style={{marginLeft: "40px"}} className={styles.sectionLi}>
            <li>
              <strong>{pData?.ApplyPoint1}</strong>
              <ul>
                <li>{pData?.ApplyPoint1List1}</li>
                <li>
                {pData?.ApplyPoint1List2}
                </li>
                <li>
                {pData?.ApplyPoint1List3}
                </li>
                <li>
                {pData?.ApplyPoint1List4}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.ApplyPoint2}</strong>
              <ul>
                <li>{pData?.ApplyPoint2List1}</li>
                <li>
                {pData?.ApplyPoint2List2}
                </li>
                <li>
                {pData?.ApplyPoint2List3}
                </li>
                <li>
                {pData?.ApplyPoint2List4}
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.ApplyPoint3}</strong>
              <ul>
                <li>
                {pData?.ApplyPoint3List1}
                  <ul>
                    <li>
                    {pData?.ApplyPoint3List1Nested1}
                    </li>
                    <li>
                    {pData?.ApplyPoint3List1Nested2}
                    </li>
                    <li>
                    {pData?.ApplyPoint3List1Nested3}
                    </li>
                    <li>
                    {pData?.ApplyPoint3List1Nested4}
                    </li>
                    <li>
                    {pData?.ApplyPoint3List1Nested5}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>{pData?.ApplyPoint4}</strong>
              <ul>
                <li>
                {pData?.ApplyPoint4List1}
                </li>
              </ul>
            </li>
          </ol>
        </section>
 
        <section
          className={`${styles.section} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>{pData?.StillNotSureHeading}</h2>
          <p>
           {pData?.StillNotSurePara1}
          </p>

          <button
            className={styles.button}
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
            id="book-appointment"
          >
            Book Appointment
          </button>
        </section>
        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
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

export default InternationalPostGraduateProgram;
