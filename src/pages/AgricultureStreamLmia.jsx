import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/AgricultureStreamLmia.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const AgricultureStreamLmia = () => {
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
    fetch("https://brightlight-node.onrender.com/agricultureStreamLmiaMeta")
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
    fetch("https://brightlight-node.onrender.com/agricultureStreamLmia")
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
              <p onClick={() => scrollToSection("noc")}>NOC</p>
              <p onClick={() => scrollToSection("national-commodity-list")}>
                National Commodity List
              </p>
              <p onClick={() => scrollToSection("important-considerations")}>
                Important Considerations
              </p>
              <p onClick={() => scrollToSection("housing-requirements")}>
                Housing Requirements
              </p>
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("how-to-apply")}>
                How to Apply?
              </p>
              <p onClick={() => scrollToSection("refusal-reasons")}>
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
        <main className={styles.mainContent}>
          <section
            className={`${styles.section} ${styles.section}`}
            id="about-program"
            ref={(el) => (sectionsRef.current[0] = el)}
          >
            <header className={styles.header}>
              <h1>{pData?.AgriculturStreamHeading}</h1>
            </header>

            <p>
            {pData?.AgriculturStreamPara}
            </p>
            <p>{pData?.AgriculturStreamSubHeading}</p>
            <ol style={{ marginLeft: "40px" }}>
              <li>{pData?.AgriculturStreamSubList1}</li>
              <li>{pData?.AgriculturStreamSubList2}</li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="noc"
            ref={(el) => (sectionsRef.current[1] = el)}
          >
            <h2>{pData?.NOCCodesHeading}</h2>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{pData?.NocCodeIHeading}</th>
                  <th>{pData?.OccupationTitleIHeading}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{pData?.NocCodeInnerHeading1}</td>
                  <td>{pData?.OccupationTitleInnerHeading1}</td>
                </tr>
                <tr>
                  <td>{pData?.NocCodeInnerHeading2}</td>
                  <td>{pData?.OccupationTitleInnerHeading2}</td>
                </tr>
                <tr>
                  <td>{pData?.NocCodeInnerHeading3}</td>
                  <td>{pData?.OccupationTitleInnerHeading3}</td>
                </tr>
                <tr>
                  <td>{pData?.NocCodeInnerHeading4}</td>
                  <td>
                  {pData?.OccupationTitleInnerHeading4}
                  </td>
                </tr>
                <tr>
                  <td>{pData?.NocCodeInnerHeading5}</td>
                  <td>
                  {pData?.OccupationTitleInnerHeading5}
                  </td>
                </tr>
                <tr>
                  <td>{pData?.NocCodeInnerHeading6}</td>
                  <td>{pData?.OccupationTitleInnerHeading6}</td>
                </tr>
                <tr>
                  <td>{pData?.NocCodeInnerHeading7}</td>
                  <td>{pData?.OccupationTitleInnerHeading7}</td>
                </tr>
                <tr>
                  <td>{pData?.NocCodeInnerHeading8}</td>
                  <td>{pData?.OccupationTitleInnerHeading8}</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="national-commodity-list"
            ref={(el) => (sectionsRef.current[2] = el)}
          >
            <h2 style={{fontSize: "20px", color: "black"}}>{pData?.NatComListIHeading}</h2>
            <ul style={{marginLeft: "40px"}}>
              <li>{pData?.NCL1}</li>
              <li>
              {pData?.NCL2}
              </li>
              <li>{pData?.NCL3}</li>
              <li>{pData?.NCL4}</li>
              <li>
              {pData?.NCL5}
              </li>
              <li>{pData?.NCL6}</li>
              <li>{pData?.NCL7}</li>
              <li>{pData?.NCL8}</li>
              <li>{pData?.NCL9}</li>
              <li>{pData?.NCL10}</li>
              <li>{pData?.NCL11}</li>
              <li>{pData?.NCL12}</li>
              <li>{pData?.NCL13}</li>
              <li>{pData?.NCL14}</li>
              <li>{pData?.NCL15}</li>
              <li>{pData?.NCL16}</li>
              <li>{pData?.NCL17}</li>
              <li>{pData?.NCL18}</li>
              <li>{pData?.NCL19}</li>
              <li>{pData?.NCL20}</li>
            </ul>
            <p>
            {pData?.NCLPara}
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="housing-requirements"
            ref={(el) => (sectionsRef.current[3] = el)}
          >
            <h2 style={{fontSize: "20px", color: "black"}}>{pData?.ImportantNoteHeading}</h2>
            <p>
            {pData?.ImportantNotePara}
            </p>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="how-to-apply"
            ref={(el) => (sectionsRef.current[6] = el)}
          >
            <h2>{pData?.HowApplyHeading}</h2>
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
              <li>
              {pData?.ha7}
              </li>
              <li>
              {pData?.ha8}
              </li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="refusal-reasons"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <h2>{pData?.RefusalHeading}</h2>
            <h4>
            {pData?.RefusalSubHeading1}
            </h4>
            <h4> {pData?.RefusalSubHeading2}</h4>
            <ol style={{ marginLeft: "40px" }}>
              <li>
              {pData?.r1}
              </li>
              <li>{pData?.r2}</li>
              <li>{pData?.r3}</li>
              <li>
              {pData?.r4}
              </li>
              <li>
              {pData?.r5}
              </li>
              <li>
              {pData?.r6}
              </li>
              <li>
              {pData?.r7}
              </li>
              <li>
              {pData?.r8}
              </li>
            </ol>
          </section>

          <section
            className={`${styles.section} ${styles.section}`}
            id="why-choose-us"
            ref={(el) => (sectionsRef.current[8] = el)}
          >
            <h2>{pData?.StillNotSureHeading}</h2>
            <p>
            {pData?.StillNotSurePara1}
            </p>
            <p>
            {pData?.StillNotSurePara2}
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

export default AgricultureStreamLmia;
