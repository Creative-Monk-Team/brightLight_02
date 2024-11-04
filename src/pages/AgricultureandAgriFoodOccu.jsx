import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/AgricultureandAgriFoodOccu.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const AgricultureandAgriFoodOccu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [pData, setPData] = useState([]);

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
    fetch("https://brightlight-node.onrender.com/agricultAndAgriFoodOccuMeta")
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
    fetch("https://brightlight-node.onrender.com/agricultureAgriFoodOccupation")
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
              {/* <p onClick={() => scrollToSection("benefits")}>Benefits</p> */}
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("express-entry")}>
                Express Entry
              </p>
              <p onClick={() => scrollToSection("noc")}>Noc's</p>
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
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>{pData?.agricultAndAgriFoodOccuHeading}</h1>
            </header>

            <p className={styles.discription}>
              {pData?.agricultAndAgriFoodOccuPara}
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="eligibility"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2>{pData?.FirstEligibleHeading}</h2>
            <p>{pData?.FirstEligSubHead}</p>
            <ul>
              <li>{pData?.e1}</li>
              <li>
                {pData?.e2}
                <ul className={styles.subList}>
                  <li>
                    {pData?.e2SubLi1}
                    <button
                      style={{ margin: "0 !important" }}
                      className={styles.button2}
                      onClick={() =>
                        (window.location.href =
                          "/federal-skilled-worker-program")
                      }
                    >
                      FSW
                    </button>
                  </li>
                  <li>
                    {pData?.e2SubLi2}
                    <button
                      style={{ margin: "0 !important" }}
                      className={styles.button2}
                      onClick={() =>
                        (window.location.href = "/canadian-experience-class")
                      }
                    >
                      CEC
                    </button>
                  </li>

                  <li>
                    {pData?.e2SubLi3}
                    <button
                      style={{ margin: "0" }}
                      className={styles.button2}
                      onClick={() =>
                        (window.location.href =
                          "/federal-skilled-trades-program")
                      }
                    >
                      FSTP
                    </button>
                  </li>
                </ul>
              </li>
            </ul>
            <p>{pData?.FirstEligPara}</p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="testing"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2>{pData?.EligCriHeading}</h2>
            <h4>
              {pData?.EligCriHeading}
            </h4>
            <ul className={styles.leftList}>
              <li>{pData?.ec1}</li>
              <li> {pData?.ec2}</li>
            </ul>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="express-entry"
            ref={(el) => (sectionsRef.current[31] = el)}
          >
            <h2>{pData?.EligEntryHeading}</h2>
            <button
              className={styles.button1}
              onClick={() => (window.location.href = "/previous-draw-history")}
            >
              Previous Draw
            </button>
            <p style={{ marginTop: "20px" }}>
             {pData?.EligEntryPara}
            </p>
          </section>

          <section
            className={`${styles.section}`}
            id="noc"
            ref={(el) => (sectionsRef.current[4] = el)}
          >
            <h2>{pData?.HereEligTabHeading}</h2>

            <table className={styles.occupationTable}>
              <thead>
                <tr>
                  <th> {pData?.HereEligTableHead1}</th>
                  <th> {pData?.HereEligTableHead2}</th>
                  <th> {pData?.HereEligTableHead3}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.HeT1Po1}</td>
                  <td>{pData?.HeT2Po1}</td>
                  <td>{pData?.HeT3Po1}</td>
                </tr>
                <tr>
                  <td>{pData?.HeT1Po2}</td>
                  <td>{pData?.HeT2Po2}</td>
                  <td>{pData?.HeT3Po2}</td>
                </tr>
                <tr>
                  <td>{pData?.HeT1Po3}</td>
                  <td>{pData?.HeT2Po3}</td>
                  <td>{pData?.HeT3Po3}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            ref={(el) => (sectionsRef.current[5] = el)}
          >
            <h2>{pData?.StillNotHeading}</h2>
            <p>{pData?.s1}</p>
            <p>{pData?.s2}</p>
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
        </main>
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

export default AgricultureandAgriFoodOccu;
