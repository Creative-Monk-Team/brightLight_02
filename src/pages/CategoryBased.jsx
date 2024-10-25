import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/CategoryBased.module.css";
import GirlVisa from "../assets/GirlVisa.png";
import LinkAncor from "../assets/link-arrows.png";
import BestChoice from "../sections/BestChoice";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Blogs from "../sections/Blogs";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

let CategoryBased = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  let [metaData, setMetaData] = useState([]);
  let [data, setData] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/category-based")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data && data[0]) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("https://brightlight-node.onrender.com/bp-meta")
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

          {/* <div
            className={`${styles.bannerHeadingRotateParent} ${
              isDropdownOpen ? styles.active : ""}`}>
            <div
              className={styles.bannerHeadingRotate}
              onClick={toggleDropdown}
            >
              <h3>QUICK ACCESS</h3>
            </div>
            <div className={styles.bannerHeadingRotatePara}>
              <p>About the program</p>
              <p>Benefits</p>
              <p>Categories</p>
              <p>How it Works</p>
              <p>Eligibility</p>
              <p>Draw History</p>
              <p>How to Apply</p>
              <p>Refusal Reasons</p>
              <p>Book Appointment</p>
              <p>Why Choose Us</p>
              <p>Testimonials</p>
              <p>FAQs</p>
              <p>Blogs</p>
            </div>
          </div> */}
        </div>
        <div
          className={`${styles.bannerHeadingRotateParent} ${
            isDropdownOpen ? styles.active : ""
          }`}
        >
          <div className={styles.bannerHeadingRotate} onClick={toggleDropdown}>
            <h3>Quick Access</h3>
          </div>
          <div className={styles.bannerHeadingRotatePara}>
            <p onClick={() => scrollToSection("about-program")}>
              About the Program
            </p>
            <p onClick={() => scrollToSection("benefits")}>Benefits</p>
            <p onClick={() => scrollToSection("categories")}>Categories</p>
            <p onClick={() => scrollToSection("HowItWorks")}>How it Works</p>
            <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
            <p onClick={() => scrollToSection("drawHistory")}>Draw History</p>
            <p onClick={() => scrollToSection("how-to-apply")}>How to Apply?</p>
            <p onClick={() => scrollToSection("refusal-reasons")}>
              Refusal Reasons
            </p>
            <p onClick={() => scrollToSection("book-Appointment")}>
              Book Appointment
            </p>
            <p onClick={() => scrollToSection("whyChooseUs")}>Why Choose Us</p>
            <p onClick={() => scrollToSection("testimonials")}>Testimonials</p>
            <p onClick={() => scrollToSection("faqs")}>FAQs</p>
            <p onClick={() => scrollToSection("blogs")}>Blogs</p>
          </div>
        </div>
      </div>

      <div className={styles.canadianParent}>
        <div className={styles.canadianContent}>
          <h1 id="about-program">{data?.aboutHeading}</h1>
          <p>{data?.aboutDescription}</p>
        </div>

        <div className={styles.canadianImg}>
          <img src={data?.aboutImage} />
        </div>
      </div>

      <div className={styles.eligibleParent} id="categories">
        <h1>{data?.drawsHeading}</h1>
        <div className={styles.container}>
          <div className={styles.column}>
            <ul>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "/french-targeted-draw")}
              >
                {data?.draw1}
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "/stem-targeted-draw")}
              >
                {data?.draw2}
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() =>
                  (window.location.href = "/transport-occupation-targeted-draw")
                }
              >
                {data?.draw3}
              </li>
              <li style={{ cursor: "pointer" }}>{data?.draw8}</li>
            </ul>
          </div>
          <div className={styles.column}>
            <ul>
              <li
                style={{ cursor: "pointer" }}
                onClick={() =>
                  (window.location.href = "/healthcare-targeted-draw")
                }
              >
                {data?.draw4}
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() =>
                  (window.location.href = "/trade-occupation-targeted-draw")
                }
              >
                {data?.draw5}
              </li>
              <li
                style={{ cursor: "pointer" }}
                onClick={() =>
                  (window.location.href = "/agriculture-agri-food-occupation")
                }
              >
                {data?.draw6}
              </li>
              <li style={{ cursor: "pointer" }}>{data?.draw7}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.categoryBasedParent}>
        <div className={styles.categoryBasedMain}>
          <h1>{data?.workHeading}</h1>
          <div className={styles.categoryBasedContentParent}>
            <div className={styles.categoryBasedContent}>
              <p>{data?.workDescription}</p>
            </div>
            <div className={styles.categoryBasedImg}>
              <img src={GirlVisa} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.eligibilityParent} id="eligibility">
        <div className={styles.eligibilityMain}>
          <h1>{data?.eligibilityHeading}</h1>
          <h3>{data?.eligibilitySubHeading}</h3>

          <p className={styles.eligibilityPara}>
            {data?.eligibilityDescription}
          </p>

          <div className={styles.cardWrapper}>
            {data?.e1 ? (
              <div className={styles.card}>
                <p>{data?.e1}</p>
              </div>
            ) : null}
            {data?.e2 ? (
              <div className={styles.card}>
                <p>{data?.e2}</p>
              </div>
            ) : null}

            {data?.e3 ? (
              <div className={styles.card}>
                <p>{data?.e3}</p>
              </div>
            ) : null}

            {data?.e4 ? (
              <div className={styles.card}>
                <p>{data?.e4}</p>
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className={styles.benifitParent} id="benefits">
        <div className={styles.benifitMain}>
          {data?.benefitsHeading ? <h1>{data?.benefitsHeading}</h1> : null}

          <div className={styles.benifitlistParent}>
            <ul style={{ marginLeft: "40px", fontSize: "22px" }}>
              {data?.b1 ? <li>{data?.b1}</li> : null}
              {data?.b2 ? <li>{data?.b2}</li> : null}
              {data?.b3 ? <li>{data?.b3}</li> : null}
              {data?.b4 ? <li>{data?.b4}</li> : null}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.howApplyParent} id="HowItWorks">
        <div className={styles.howApplyMain}>
          {data?.applyHeading ? <h1>{data?.applyHeading}</h1> : null}
          {data?.applyDescription ? <h4>{data?.applyDescription}</h4> : null}

          <div className={styles.stepsGrid}>
            <div className={styles.step}>
              {data?.a1 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>1</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a1l ? (window.location.href = data?.a1l) : null
                    }
                    style={{
                      cursor: data?.a1l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a1}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a2 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>2</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a2l ? (window.location.href = data?.a2l) : null
                    }
                    style={{
                      cursor: data?.a2l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a2}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a3 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>3</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a3l ? (window.location.href = data?.a3l) : null
                    }
                    style={{
                      cursor: data?.a3l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a3}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a4 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>4</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a4l ? (window.location.href = data?.a4l) : null
                    }
                    style={{
                      cursor: data?.a4l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a4}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a5 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>5</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a5l ? (window.location.href = data?.a5l) : null
                    }
                    style={{
                      cursor: data?.a5l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a5}</p>
                  </div>
                </>
              ) : null}
            </div>
            <div className={styles.step}>
              {data?.a6 ? (
                <>
                  <div className={styles.headerLineParent}>
                    <div className={styles.headingNumbers}>6</div>
                    <p></p>
                  </div>
                  <div
                    className={styles.stepContent}
                    onClick={
                      data?.a6l ? (window.location.href = data?.a6l) : null
                    }
                    style={{
                      cursor: data?.a6l ? "pointer" : "none",
                    }}
                  >
                    <p>{data?.a6}</p>
                  </div>
                </>
              ) : null}
            </div>
            {/* / */}
          </div>
          {/* // */}
        </div>
      </div>

      <div className={styles.refusalParent} id="refusal-reasons">
        <div className={styles.refusalMain}>
          {data?.refusalHeading ? <h1>{data?.refusalHeading}</h1> : null}
          {data?.refusalDescription ? (
            <h3>{data?.refusalDescription}</h3>
          ) : null}

          <div className={styles.refusalListParent}>
            <ul style={{ fontSize: "22px" }}>
              {data?.r1 ? <li>{data?.r1}</li> : null}
              {data?.r2 ? <li>{data?.r2}</li> : null}
              {data?.r3 ? <li>{data?.r3}</li> : null}
              {data?.r4 ? <li>{data?.r4}</li> : null}
              {data?.r5 ? <li>{data?.r5}</li> : null}
              {data?.r6 ? <li>{data?.r6}</li> : null}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.theButtonAncorParent}>
        <div className={styles.theButtonAncor}>
          <a href="/previous-draw-history">
            <button style={{ cursor: "pointer" }}>
              {data?.drawHeadingBottom}{" "}
              <span className={styles.theButtonSpan}>
                <img src={LinkAncor} alt="err" />
              </span>
            </button>
          </a>
        </div>
      </div>

      <section className={styles.whyChooseUs}>
        <h2>Why Choose Us?</h2>
        <ul style={{marginLeft: "40px"}}>
          <li>
            <strong>Experienced Team:</strong> Over a decade of experience in
            handling Immigration applications with a high success rate.
          </li> 
          <li>
            <strong>Tailored Approach:</strong> Personalized services and
            strategies based on your specific case.
          </li>
          <li>
            <strong>High Success Rate:</strong> Proven track record using case
            law and precedents for positive results.
          </li>
          <li>
            <strong>Comprehensive Support:</strong> Assistance from the start of
            the application process to obtaining your PR.
          </li>
        </ul>
      </section>

      <div className={styles.appointementParent}>
        <div className={styles.appointementMain} id="book-Appointment">
          {data?.bookHeading ? <h1>{data?.bookHeading}</h1> : null}

          {data?.bookSubHeading ? <h5>{data?.bookSubHeading}</h5> : null}
          {data?.bookDescription ? <p>{data?.bookDescription}</p> : null}
        </div>
        <button
          className={styles.button02}
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          Book Appointment
        </button>
      </div>

      <div id="whyChooseUs"></div>
      <BestChoice />
      <div id="testimonials"></div>
      <Testimonials />
      <div id="faqs"></div>
      <FAQ />
      <div id="blogs"></div>
      <Blogs />

      <Footer1 />
    </>
  );
};

export default CategoryBased;
