import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/OpenWorkCanadaLP.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const OpenWorkCanadaLP = () => {
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
    fetch("https://brightlight-node.onrender.com/openWorkDependentChildMeta")
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
    fetch("https://brightlight-node.onrender.com/openWorkDependentChild")
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
              <p onClick={() => scrollToSection("benifits")}>Benifits</p>
              <p onClick={() => scrollToSection("application-process")}>
                Application Process
              </p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
              <p onClick={() => scrollToSection("age-chart")}>Age Chart</p>
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
        <header
          className={`${styles.header} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <h1>
            Open Work Permit for Dependent Child of Foreign Worker in Canada
          </h1>
          <p>
          {pData?.openWorkDepPara}
          </p>
        </header>

        <section
          className={`${styles.benefits} ${styles.section}`}
          id="benefits"
          ref={(el) => (sectionsRef.current[1] = el)}
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
            <li>
            {pData?.BenifitsList5}
            </li>
            <li>
            {pData?.BenifitsList6}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.eligibility} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <h2>
          {pData?.EligibilityHeading}
          </h2>
          <p>
          {pData?.EligibilitySubHead}{" "}
          </p>
          <h3>
          {pData?.EligMainSubHead1}
          </h3>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <li>
            {pData?.EligMain1List1}
              <ul className={styles.subList}>
                <li>{pData?.EligMainSub1List1}.</li>
                <li>
                {pData?.EligMainSub1List2}
                </li>
                <li>{pData?.EligMainSub1List3}</li>
              </ul>
            </li>
            <li>
            {pData?.EligMain2List}
            </li>
            <li>
            {pData?.EligMain3List}
            </li>
            <li>
            {pData?.EligMain4List}
            </li>
            <li>
              <strong>{pData?.EligMain5List}</strong>
              <ul className={styles.subList}>
                <li>
                {pData?.EligMainSub5List1}
                </li>
                <li>{pData?.EligMainSub5List2}</li>
                <li>
                {pData?.EligMainSub5List3}
                </li>
                <li>
                {pData?.EligMainSub5List4}
                </li>
                <li>
                {pData?.EligMainSub5List5}
                </li>
                <li>{pData?.EligMainSub5List6}.</li>
              </ul>
            </li>
          </ul>

          <h3>{pData?.EligMainSubHead2}</h3>
          <h4>
          {pData?.EligMainSubHead2Para}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <li>
            {pData?.EligMain6List}
              <ul className={styles.subList}>
                <li>{pData?.EligMainSub6List1}</li>
                <li>
                {pData?.EligMainSub6List2}
                </li>
                <li>{pData?.EligMainSub6List3}</li>
              </ul>
            </li>
            <li>
            {pData?.EligMain7List}
            </li>
            <li>
            {pData?.EligMain8List}
            </li>
            <li>
            {pData?.EligMain9List}
            </li>
            <li>
              {pData?.EligMain10List}
            </li>
            <li>
            {pData?.YouMustHoldlabour}
            </li>
            <li>
              <strong>{pData?.EligMain11List}</strong>
              <ul className={styles.subList}>
                <li>
                {pData?.EligMainSub11List1}
                </li>
                <li>
                {pData?.EligMainSub11List2}
                </li>
                <li>
                {pData?.EligMainSub11List3}
                </li>
                <li>
                {pData?.EligMainSub11List4}
                </li>
                <li>{pData?.EligMainSub11List5}</li>
                <li>{pData?.EligMainSub11List6}</li>
                <li>
                {pData?.EligMainSub11List7}
                </li>
                <li>
                {pData?.EligMainSub11List8}
                </li>
              </ul>
            </li>
          </ul>

          <h3>
          {pData?.EligMainSubHead3}
          </h3>
          <h4>
          {pData?.EligMainSubHead3Para}
          </h4>
          <ul
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              marginBottom: "30px",
            }}
          >
            <li>
            {pData?.EligMain12List}
              <ul className={styles.subList}>
                <li>{pData?.EligMainSub12List1}</li>
                <li>
                {pData?.EligMainSub12List2}
                </li>
              </ul>
            </li>
            <li>
            {pData?.EligMain13List}
            </li>
            <li>
            {pData?.EligMain14List}
            </li>
            <li>
            {pData?.EligMain15List}
            </li>
          </ul>

          <h3>{pData?.ReqHeading}</h3>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.Reqlist1}
            </li>
            <li>
            {pData?.Reqlist2}
            </li>
            <li>
            {pData?.Reqlist3}
            </li>
            <li>
            {pData?.Reqlist4}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.ageChart} ${styles.section}`}
          id="age-chart"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <h2>{pData?.LegalMinTableHeading}</h2>
          <table>
            <thead>
              <tr>
                <th>{pData?.LegalMinTableHead1}</th>
                <th>{pData?.LegalMinTableHead2}</th>
                <th>{pData?.LegalMinTableHead3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{pData?.LegalMinTab1Head1}</td>
                <td>{pData?.LegalMinTab2Head1}</td>
                <td>{pData?.LegalMinTab3Head1}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head2}</td>
                <td>{pData?.LegalMinTab2Head2}</td>
                <td>{pData?.LegalMinTab3Head2}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head3}</td>
                <td>{pData?.LegalMinTab2Head3}</td>
                <td>{pData?.LegalMinTab3Head3}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head4}</td>
                <td>{pData?.LegalMinTab2Head4}</td>
                <td>{pData?.LegalMinTab3Head4}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head5}</td>
                <td>{pData?.LegalMinTab2Head5}</td>
                <td>{pData?.LegalMinTab3Head5}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head6}</td>
                <td>{pData?.LegalMinTab2Head6}</td>
                <td>{pData?.LegalMinTab3Head6}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head7}</td>
                <td>{pData?.LegalMinTab2Head7}</td>
                <td>{pData?.LegalMinTab3Head7}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head8}</td>
                <td>{pData?.LegalMinTab2Head8}</td>
                <td>{pData?.LegalMinTab3Head8}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head9}</td>
                <td>{pData?.LegalMinTab2Head9}</td>
                <td>{pData?.LegalMinTab3Head9}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head10}</td>
                <td>{pData?.LegalMinTab2Head10}</td>
                <td>{pData?.LegalMinTab3Head10}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head11}</td>
                <td>{pData?.LegalMinTab2Head11}</td>
                <td>{pData?.LegalMinTab3Head11}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head12}</td>
                <td>{pData?.LegalMinTab2Head12}</td>
                <td>{pData?.LegalMinTab3Head12}</td>
              </tr>
              <tr>
                <td>{pData?.LegalMinTab1Head13}</td>
                <td>{pData?.LegalMinTab2Head13}</td>
                <td>{pData?.LegalMinTab3Head13}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section
          className={`${styles.applicationProcess} ${styles.section}`}
          id="application-process"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <h2>{pData?.HowApplyHeading}</h2>
          <ol style={{marginLeft: "40px"}}>
            <li>
            {pData?.HowAppList1}
            </li>
            <li>{pData?.HowAppList2}</li>
            <li>{pData?.HowAppList3}</li>
            <li>{pData?.HowAppList4}</li>
            <li>{pData?.HowAppList5}</li>
            <li>{pData?.HowAppList6}</li>
            <li>{pData?.HowAppList7}</li>
          </ol>
        </section>

        <section
          className={`${styles.refusalReasons} ${styles.section}`}
          id="refusal-reasons"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          <h2>{pData?.RefusalHeading}</h2>
          <ul style={{marginLeft: "40px"}}>
            <li>
            {pData?.RefusalList1}
            </li>
            <li>
            {pData?.RefusalList2}
            </li>
            <li>
            {pData?.RefusalList3}
            </li>
            <li>
            {pData?.RefusalList4}
            </li>
          </ul>
        </section>

        <section
          className={`${styles.consultation} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h2>{pData?.StillNotSureHeading}</h2>
          <p>
          {pData?.StillNotSurePara}
          </p>
          <button
            onClick={() =>
              (window.location.href =
                "/booking")
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

export default OpenWorkCanadaLP;
