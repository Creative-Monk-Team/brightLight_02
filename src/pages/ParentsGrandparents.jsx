import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/ParentsGrandparents.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const ParentsGrandparents = () => {
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
    fetch("https://brightlight-node.onrender.com/parentsGrandParMeta")
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
    fetch("https://brightlight-node.onrender.com/ParentsGrandparents")
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
          className={`${styles.heading} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
         {pData?.ParGrHeading}
        </h1>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
         {pData?.ParGrPara1}
        </p>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          {pData?.ParGrPara2}
        </p>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading} id="eligibility">
          {pData?.EligibilityHeading1}
          </h2>
          {/* <ul className={styles.list} >
            <li>
              You can sponsor your parents and grandparents, related by blood or
              adoption. This includes your mother, father, step-parents, and
              grandparents. However, you cannot sponsor your parents' or
              grandparents' siblings, unless they are dependent children.
            </li>
          </ul> */}
          <p>
             {pData?.EligibilityPara}
          </p>
          <h2 className={styles.subheading}>
          {pData?.EligibilityHeading2}
          </h2>
          <h4>
          {pData?.EligibilitySubHead}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
            className={styles.list}
          >
            <li>{pData?.e1}</li>
            <li>{pData?.e2}</li>
            <li>{pData?.e3}</li>
            <li>{pData?.e4}</li>
            <li>{pData?.e5}</li>
            <li>{pData?.e6}</li>
          </ul>

          <h3 style={{ marginBottom: "20px" }}>
          {pData?.IncReqTabHeading}
          </h3>

          <table className={styles.occupationTable}>
            <thead>
              <tr>
                <th>{pData?.IncReqTabHead1}</th>
                <th>{pData?.IncReqTabHead2}</th>
                <th>{pData?.IncReqTabHead3}</th>
                <th>{pData?.IncReqTabHead4}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.IncReqTab1Li1}</td>
                <td>{pData?.IncReqTab2Li1}</td>
                <td>{pData?.IncReqTab3Li1}</td>
                <td>{pData?.IncReqTab4Li1}</td>
              </tr>
              <tr>
                <td>{pData?.IncReqTab1Li2}</td>
                <td>{pData?.IncReqTab2Li2}</td>
                <td>{pData?.IncReqTab3Li2}</td>
                <td>{pData?.IncReqTab4Li2}</td>
              </tr>
              <tr>
                <td>{pData?.IncReqTab1Li3}</td>
                <td>{pData?.IncReqTab2Li3}</td>
                <td>{pData?.IncReqTab3Li3}</td>
                <td>{pData?.IncReqTab4Li3}</td>
              </tr>
              <tr>
                <td>{pData?.IncReqTab1Li4}</td>
                <td>{pData?.IncReqTab2Li4}</td>
                <td>{pData?.IncReqTab3Li4}</td>
                <td>{pData?.IncReqTab4Li4}</td>
              </tr>
              <tr>
                <td>{pData?.IncReqTab1Li5}</td>
                <td>{pData?.IncReqTab2Li5}</td>
                <td>{pData?.IncReqTab3Li5}</td>
                <td>{pData?.IncReqTab4Li5}</td>
              </tr>
              <tr>
                <td>{pData?.IncReqTab1Li6}</td>
                <td>{pData?.IncReqTab2Li6}</td>
                <td>{pData?.IncReqTab3Li6}</td>
                <td>{pData?.IncReqTab4Li6}</td>
              </tr>
              <tr>
                <td>{pData?.IncReqTab1Li7}</td>
                <td>{pData?.IncReqTab2Li7}</td>
                <td>{pData?.IncReqTab3Li7}</td>
                <td>{pData?.IncReqTab4Li7}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading} id="how-to-apply">
          {pData?.HowApplyHeading}
          </h2>
          <h4>
          {pData?.HowApplySubHead}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
            className={styles.list}
          >
            <li>{pData?.ha1}</li>
            <li>{pData?.ha2}</li>
            <li>{pData?.ha3}</li>
            <li>{pData?.ha4}</li>
            <li>{pData?.ha5}</li>
          </ul>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing5"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading} id="refusal-reasons">
          {pData?.RefusalHeading}
          </h2>
          <h4>
          {pData?.RefusalSubHead}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "60px",
            }}
            className={styles.list}
          >
            <li>{pData?.r1}</li>
            <li>{pData?.r2}</li>
            <li>{pData?.r3}</li>
            <li>{pData?.r4}</li>
            <li>{pData?.r5}</li>
          </ul>
          <button
            onClick={() =>
              (window.location.href =
                "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
            }
            className={styles.button}
          >
            Book Appointment
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="testing6"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading} id="why-choose-us">
          {pData?.StillNotHeading}
          </h2>
          <p className={styles.paragraph}>
          {pData?.s1}
          </p>
          <p className={styles.paragraph}>
          {pData?.s2}
          </p>
          <button
            onClick={() => (window.location.href = "/contact-us")}
            className={styles.button}
          >
            Contact Us
          </button>
        </section>

        <section
          className={`${styles.section} ${styles.section}`}
          id="why-choose-u"
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
        <FAQ />
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

export default ParentsGrandparents;
