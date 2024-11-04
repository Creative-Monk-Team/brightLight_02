import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/ExpressEntry.module.css";
import ServiceImg from "../assets/service-data-image.webp";
import BestChoice from "../sections/BestChoice";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import RecentBlogs from "../sections/RecentBlogs";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const ExpressEntry = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [data, setData] = useState({});
  let [metaData, setMetaData] = useState([]);
  let [pData, setPData] = useState([]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/express-entry")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setPData(data[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching Express Entry data:", error);
      });
    fetch("https://brightlight-node.onrender.com/express-meta")
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
    fetch("https://brightlight-node.onrender.com/express-entry")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setData(data[0]);
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
  let sectionRef = useRef(null);
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
          <div className={styles.bannerHeading}>
            <h1>{data?.heading}</h1>
            <p>{data?.description}</p>
          </div>

          <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""
            }`}
          >
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p onClick={() => scrollToSection("about-program")}>
                About the program
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("advantages")}>
                Advantages of Express Entry
              </p>
              <p onClick={() => scrollToSection("refusal-reason")}>
                Refusal Reason
              </p>
              <p onClick={() => scrollToSection("draw-history")}>
                Draw History
              </p>
              <p onClick={() => scrollToSection("appointment")}>Appointment</p>
              <p onClick={() => scrollToSection("why-choose-us")}>
                Why Choose us
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

      {/* <div id="faqs">{pData ? <FAQ_White_Internal data={pData} /> : null}</div> */}



      <div id="about-program" className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <p>{data?.aboutDescription}</p>
        </div>
        <div className={styles.canadianImg}>
          <img src={data?.aboutImage || ServiceImg} alt="About Program" />
        </div>
      </div>

      <div className={styles.benefits}>
        <h1>{pData?.BenifitsHeading}</h1>
        <ul style={{ marginLeft: "40px" }}>
          <li>{pData?.b1}</li>
          <li> {pData?.b2}</li>
          <li>{pData?.b3}</li>
          <li>{pData?.b4}</li>
        </ul>
      </div>

      <div id="eligibility" className={styles.eligibleParent}>
        <h1>{data?.eligibilityHeading}</h1>
        <p>{data?.eligibilityDescription}</p>

        <div className={styles.eligibleCardParent}>
          {data?.er1 && (
            <div
              className={styles.eligibleCard}
              onClick={() =>
                (window.location.href = "/federal-skilled-worker-program")
              }
            >
              <h2>{data.er1}</h2>
            </div>
          )}
          {data?.er2 && (
            <div
              className={styles.eligibleCard}
              onClick={() =>
                (window.location.href = "/federal-skilled-trades-program")
              }
            >
              <h2>{data.er2}</h2>
            </div>
          )}
          {data?.er3 && (
            <div
              className={styles.eligibleCard}
              onClick={() =>
                (window.location.href = "/canadian-experience-class")
              }
            >
              <h2>{data.er3}</h2>
            </div>
          )}
          {/* {data?.er4 && (
            <div className={styles.eligibleCard}>
              <h2>{data.er4}</h2>
            </div>
          )}
          {data?.er5 && (
            <div className={styles.eligibleCard}>
              <h2>{data.er5}</h2>
            </div>
          )} */}
        </div>
      </div>

      <div id="draw-history" className={styles.additionGrandParent}>
        <div className={styles.additionParent}>
          <h1>{data?.drawHeading}</h1>
          <div className={styles.additionCardParent}>
            {data?.draw1 && (
              <div
                className={styles.additionCard}
                onClick={() =>
                  (window.location.href = "/previous-draw-history")
                }
              >
                <h2>{data.draw1}</h2>
              </div>
            )}
            {data?.draw2 && (
              <div
                className={styles.additionCard}
                onClick={() => (window.location.href = "/category-based")}
              >
                <h2>{data.draw2}</h2>
              </div>
            )}
            {data?.draw3 && (
              <div
                className={styles.additionCard}
                onClick={() => (window.location.href = "/pnp")}
              >
                <h2>{data.draw3}</h2>
              </div>
            )}
            {/* {data?.draw4 && (
              <div className={styles.additionCard}>
                <h2>{data.draw4}</h2>
              </div>
            )}
            {data?.draw5 && (
              <div className={styles.additionCard}>
                <h2>{data.draw5}</h2>
              </div>
            )} */}
          </div>
        </div>
      </div>

      <div id="advantages" className={styles.advantagesParent}>
        <div className={styles.advantages}>
          <div className={styles.advantagesHeading}>
            <h1>{data?.advantageHeading}</h1>
          </div>
          <div className={styles.advantagesPara}>
            <p>{data?.advantageDescription}</p>
            <ul>
              {data?.a1 && <li>{data.a1}</li>}
              {data?.a2 && <li>{data.a2}</li>}
              {data?.a3 && <li>{data.a3}</li>}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.previous_draw_history}>
        <button
          onClick={() => (window.location.href = "/prvious-draw-history")}
        >
          Express Entry draws history
        </button>
      </div>

      <div id="refusal-reason" className={styles.forgetParent}>
        <div className={styles.forgetMain}>
          <div className={styles.forgetHeading}>
            <h1>{data?.refusalHeading}</h1>
          </div>
          <div className={styles.forgetListParent}>
            <ul
              style={{ marginLeft: "40px" }}
              className={styles.forgetListMain}
            >
              {data?.r1 && <li className={styles.forgetList}>{data.r1}</li>}
              {data?.r2 && <li className={styles.forgetList}>{data.r2}</li>}
              {data?.r3 && <li className={styles.forgetList}>{data.r3}</li>}
              {data?.r4 && <li className={styles.forgetList}>{data.r4}</li>}
              {data?.r5 && <li className={styles.forgetList}>{data.r5}</li>}
              {data?.r6 && <li className={styles.forgetList}>{data.r6}</li>}
              {data?.r7 && <li className={styles.forgetList}>{data.r7}</li>}
            </ul>
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "100px" }}
        className={styles.whyChooseUs}
        id="why-choose-us"
      >
        <h2> {pData?.WhyChooseUsHeading01}</h2>
        <ul style={{ marginLeft: "40px" }}>
          <li>
            <strong>{strongText91}</strong> {remainingText91}
          </li>
          <li>
            <strong>{strongText92}</strong> {remainingText92}
          </li>
          <li>
            <strong>{strongText93}</strong> {remainingText93}
          </li>
          <li>
            <strong>{strongText94}</strong> {remainingText94}
          </li>
        </ul>
      </div>

      <div id="appointment" className={styles.incaseParent}>
        <div className={styles.incaseMain}>
          <div className={styles.incaseContent}>
            <h1>{data?.appointmentHeading}</h1>
            <p>{data?.appointmentDescription}</p>
            <button
              className={styles.button}
              onClick={() =>
                (window.location.href =
                  "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
              }
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div>
        <BestChoice />
      </div>

      <div id="faqs">
      <FAQ_White_Internal data={data} />
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

export default ExpressEntry;
