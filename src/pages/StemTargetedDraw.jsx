import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/StemTargetedDraw.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const StemTargetedDraw = () => {
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
    fetch("https://brightlight-node.onrender.com/stemTargetedDrawMeta")
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
    fetch("https://brightlight-node.onrender.com/stemTagatedDraw")
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
              <p onClick={() => scrollToSection("eligiblity")}>Eligiblity</p>
              <p onClick={() => scrollToSection("stem-eligiblity")}>
                Stem Eligiblity
              </p>
              <p onClick={() => scrollToSection("stem-noc-codes")}>
                Stem Noc Codes
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
        <h1 className={styles.heading}>
           {pData?.stemTargetedDrawHeading}
        </h1>

        <section
          className={`${styles.introduction} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <p>
          {pData?.stemTargetedDrawPara1}
          </p>
          <p>
          {pData?.stemTargetedDrawPara2}
          </p>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligiblity"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligibilityFirstHeading}
          </h2>
          <p>
          {pData?.EligFirstSubHead}
          </p>
          <ol style={{ marginLeft: "40px" }}>
            <li>
            {pData?.EligPara1}
            </li>
            <li>
            {pData?.EligPara2}
              <ul
                className={styles.subheadingLink}
                style={{ marginTop: "20px" }}
              >
                <li style={{ textAlign: "center", marginBottom: "30px" }}>
                  <button
                    
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "/federal-skilled-worker-program")
                    }
                  >
                    Federal Skilled Worker Program (FSW)
                  </button>
                  {pData?.EligPara2Li1}
                </li>
                <li style={{ textAlign: "center", marginBottom: "30px" }}>
                  <button
                    className={styles.button1}
                    onClick={() =>
                      (window.location.href = "canadian-experience-class")
                    }
                  >
                    Canadian Experience Class (CEC)
                  </button>
                  {pData?.EligPara2Li2}
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
                   {pData?.EligPara2Li3}
                </li>
              </ul>
            </li>
          </ol>
          <p>
          {pData?.EligPara3}
          </p>
          <h2> {pData?.ImportantThingsHeading}</h2>
          <p>
           {pData?.ImportantThingsPara}
          </p>
          <p> {pData?.itH}</p>
          <ul style={{ marginLeft: "40px" }} className={styles.leftList}>
            <li>
            {pData?.it1}
            </li>
            <li>
            {pData?.it2}
            </li>
          </ul>
          <p>
          {pData?.ImportantThingsPara2}
          </p>
        </section>

        <section
          className={`${styles.stemEligibility} ${styles.section}`}
          id="stem-eligiblity"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2 className={styles.subheading}>
          {pData?.EligCritHeading}
          </h2>
          <p>
          {pData?.EligCritSubHeading}
          </p>
          <ul>
            <li> {pData?.ec1}</li>
            <li>{pData?.ec2}</li>
            <li> {pData?.ec3}</li>
          </ul>
        </section>

        <section
          className={`${styles.stemEligibility} ${styles.section}`}
          id="stem-eligiblity"
          ref={(el) => (sectionsRef.current[7] = el)}
        >
          <h2 className={styles.subheading}>
           {pData?.ExpressEntryHeading}
          </h2>
           <p>
          {pData?.ExpressEntryPara}
          </p>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </section>

        <section
          className={`${styles.stemNocCodes} ${styles.section}`}
          id="stem-noc-codes"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StemEligTableHeading}</h2>
          {/* <p>
            <a
              href="https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/submit-profile/rounds-invitations/category-based-selection.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              NOC Codes
            </a>
          </p> */}

          <table className={styles.table}>
            <thead>
              <tr>
                <th> {pData?.stT1h1}</th>
                <th> {pData?.stT2h2}</th>
                <th>{pData?.stT3h3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td> {pData?.stT1Li1}</td>
                <td>{pData?.stT2Li1}</td>
                <td>{pData?.stT3Li1}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li2}</td>
                <td>{pData?.stT2Li2}</td>
                <td>{pData?.stT3Li2}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li3}</td>
                <td>{pData?.stT2Li3}</td>
                <td>{pData?.stT3Li3}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li4}</td>
                <td>{pData?.stT2Li4}</td>
                <td>{pData?.stT3Li4}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li5}</td>
                <td>{pData?.stT2Li5}</td>
                <td>{pData?.stT3Li5}</td>
              </tr>
              <tr>
                <td>{pData?.stT1Li6}</td>
                <td>{pData?.stT2Li6}</td>
                <td>{pData?.stT3Li6}</td>
              </tr>
              <tr>
                <td>{pData?.stT1Li7}</td>
                <td>{pData?.stT2Li7}</td>
                <td>{pData?.stT3Li7}</td>
              </tr>
              <tr>
                <td>{pData?.stT1Li8}</td>
                <td>{pData?.stT2Li8}</td>
                <td>{pData?.stT3Li8}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li9}</td>
                <td>{pData?.stT2Li9}</td>
                <td>{pData?.stT3Li9}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li10}</td>
                <td>{pData?.stT2Li10}</td>
                <td>{pData?.stT3Li10}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li11}</td>
                <td>{pData?.stT2Li11}</td>
                <td>{pData?.stT3Li11}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li12}</td>
                <td>{pData?.stT2Li12}</td>
                <td>{pData?.stT3Li12}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li13}</td>
                <td>{pData?.stT2Li13}</td>
                <td>{pData?.stT3Li13}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li14}</td>
                <td>{pData?.stT2Li14}</td>
                <td>{pData?.stT3Li14}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li15}</td>
                <td>{pData?.stT2Li15}</td>
                <td>{pData?.stT3Li15}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li16}</td>
                <td>{pData?.stT2Li16}</td>
                <td>{pData?.stT3Li16}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li17}</td>
                <td>{pData?.stT2Li17}</td>
                <td>{pData?.stT3Li17}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li18}</td>
                <td>{pData?.stT2Li8}</td>
                <td>{pData?.stT3Li18}</td>
              </tr>
              <tr>
                <td>{pData?.stT1Li19}</td>
                <td>{pData?.stT2Li9}</td>
                <td>{pData?.stT3Li19}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li20}</td>
                <td>{pData?.stT2Li20}</td>
                <td>{pData?.stT3Li20}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li21}</td>
                <td>{pData?.stT2Li21}</td>
                <td>{pData?.stT3Li21}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li22}</td>
                <td>{pData?.stT2Li22}</td>
                <td>{pData?.stT3Li22}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li23}</td>
                <td>{pData?.stT2Li23}</td>
                <td>{pData?.stT3Li23}</td>
              </tr>
              <tr>
                <td> {pData?.stT1Li24}</td>
                <td>{pData?.stT2Li24}</td>
                <td>{pData?.stT3Li24}</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* <section
          className={`${styles.drawHistory} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2 className={styles.subheading}>
            Express Entry STEM Draws History
          </h2>
          <p>
            The first-ever Express Entry draw for STEM workers was just held.
            Express Entry draw #254 saw a CRS score of 486 and invited 500
            candidates eligible for category-based selection in science,
            technology, mathematics, and engineering (STEM) occupations.
          </p>
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/previous-draw-history")}
          >
            View Previous Draw History
          </button>
        </section> */}

        <section
          className={`${styles.contact} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2 className={styles.subheading}>{pData?.StillNotHeading}</h2>
          <p>
          {pData?.s1}
          </p>
          <p>
          {pData?.s2}
          </p>
          {/* <Link to="/contact-us" className={styles.button}>
           
          </Link> */}
          <button
            className={styles.button}
            onClick={() => (window.location.href = "/contact-us")}
          >
            Contact Us
          </button>
        </section>

        {/* <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2 className={styles.subheading}>Why Choose Us</h2>
          <p>
            Brightlight Immigration offers personalized services to maximize
            your chances of success. Our experienced team provides dedicated
            support throughout the immigration process, ensuring a smooth and
            efficient experience.
          </p>

          <button
            onClick={() =>
              (window.location.href =
                "/booking")
            }
          >
            Book Appointment
          </button>
        </section> */}

        <section
          className={`${styles.whyChooseUs} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[9] = el)}
        >
         <h2>{pData?.WhyChooseUsHeading01 }</h2>
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

export default StemTargetedDraw;
