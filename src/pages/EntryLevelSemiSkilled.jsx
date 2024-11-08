import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/EntryLevelSemiSkilled.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import FAQ_White_Internal from "../sections/FAQ_White_Internal";

const EntryLevelSemiSkilled = () => {
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
    fetch("https://brightlight-node.onrender.com/entryLevelSemiSkilledMeta")
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
    fetch("https://brightlight-node.onrender.com/entry-level-semi-skilled")
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


  const fetchedValue = pData?.b1;
  const strongText = extractStrongText(fetchedValue);
  const remainingText = extractRemainingText(fetchedValue);

  const fetchedValue1 = pData?.b2;
  const strongText1 = extractStrongText(fetchedValue1);
  const remainingText1 = extractRemainingText(fetchedValue1);

  const fetchedValue2 = pData?.b3;
  const strongText2= extractStrongText(fetchedValue2);
  const remainingText2 = extractRemainingText(fetchedValue2);


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
              <p onClick={() => scrollToSection("key-points")}>Key Points</p>
              <p onClick={() => scrollToSection("eligibility")}>Eligibility</p>
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
        <h1
          className={`${styles.title} ${styles.section}`}
          id="about-program"
          ref={(el) => (sectionsRef.current[0] = el)}
        >
        {pData?.heading}
        </h1>
        <p
          style={{ textAlign: "center" }}
          className={`${styles.description} ${styles.section}`}
          id="testing1"
          ref={(el) => (sectionsRef.current[1] = el)}
        >
         {pData?.description1}
        </p>
        <p
          style={{ textAlign: "center" }}
          className={`${styles.description} ${styles.section}`}
          id="testing2"
          ref={(el) => (sectionsRef.current[2] = el)}
        >
        {pData?.description2}
        </p>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="key-points"
          ref={(el) => (sectionsRef.current[3] = el)}
        >
            {pData?.benefitsHeading}
        </h2>
        <ul
          style={{ marginLeft: "40px" }}
          className={`${styles.list} ${styles.section}`}
          id="testing3"
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <li className={styles.listItem}>
          {" "}
          <strong>{strongText}</strong> {" "}  {remainingText}
          </li>
          <li className={styles.listItem}>
          {" "}
          <strong>{strongText1}</strong> {" "}  {remainingText1}
          </li>
          <li className={styles.listItem}>
          <strong>{strongText2}</strong> {" "}  {remainingText2}
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="eligibility"
          ref={(el) => (sectionsRef.current[5] = el)}
        >
          {pData?.eligibilityHeading}
        </h2>
        <p>
         {pData?.elibilityDescription}
        </p>
        <div
          className={`${styles.criteria} ${styles.section}`}
          id="testing4"
          ref={(el) => (sectionsRef.current[6] = el)}
        >
          <h3 className={styles.subheading}>{pData?.eligibilityCategory1}</h3>
          <ul
            className={`${styles.list} ${styles.section}`}
            id="testing5"
            ref={(el) => (sectionsRef.current[7] = el)}
          >
            <li className={styles.listItem}>
            {pData?.eligibilityCategory1List1}
            </li>
            <li className={styles.listItem}>
            {pData?.eligibilityCategory1List2}
            </li>
            <li className={styles.listItem}>
            {pData?.eligibilityCategory1List3}
              <ul className={styles.nestedList}>
                <li className={styles.nestedListItem}>
                {pData?.eligibilityCategory1List3NestedList1}
                </li>
                <li className={styles.nestedListItem}>
                {pData?.eligibilityCategory1List3NestedList2}
                  <ul className={styles.nestedList}>
                    <li className={styles.nestedListItem}>
                    {pData?.eligibilityCategory1List3NestedList2NestedList1}
                    </li>
                    <li className={styles.nestedListItem}>
                    {pData?.eligibilityCategory1List3NestedList2NestedList2}
                    </li>
                    <li className={styles.nestedListItem}>
                    {pData?.eligibilityCategory1List3NestedList2NestedList3}
                    </li>
                    <li className={styles.nestedListItem}>
                    {pData?.eligibilityCategory1List3NestedList2NestedList4}
                    </li>
                    <li className={styles.nestedListItem}>
                    {pData?.eligibilityCategory1List3NestedList2NestedList5}
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>

          <h3
            style={{ opacity: "1", transform: "translateX(0)" }}
            className={`${styles.subheading} ${styles.section}`}
            id="testing6"
            ref={(el) => (sectionsRef.current[8] = el)}
          >
       {pData?.eligibilityCategory2}
          </h3>
          <ul style={{ marginLeft: "20px" }} className={styles.list}>
            <li className={styles.listItem}>
            {pData?.eligibilityCategory2List1}
            </li>
            <li className={styles.listItem}>
            {pData?.eligibilityCategory2List2}
            </li>
          </ul>

          <h3
            className={`${styles.subheading} ${styles.section}`}
            id="testing8"
            ref={(el) => (sectionsRef.current[10] = el)}
          >
            {pData?.eligibilityCategory3}
          </h3>
          <ul
            style={{ marginLeft: "20px" }}
            className={`${styles.list} ${styles.section}`}
            id="testing9"
            ref={(el) => (sectionsRef.current[11] = el)}
          >
            <li className={styles.listItem}>
            {pData?.eligibilityCategory3List1}
            </li>
            <li className={styles.listItem}>
            {pData?.eligibilityCategory3List2}
            </li>
          </ul>

          <h3
            className={`${styles.subheading} ${styles.section}`}
            id="testing10"
            ref={(el) => (sectionsRef.current[12] = el)}
          >
           {pData?.eligibilityCategory4}
          </h3>
          <ul
            style={{ marginLeft: "20px" }}
            className={`${styles.list} ${styles.section}`}
            id="testing11"
            ref={(el) => (sectionsRef.current[13] = el)}
          >
            <li className={styles.listItem}>
            {pData?.eligibilityCategory4List1}
            </li>
          </ul>

          <h3
            className={`${styles.subheading} ${styles.section}`}
            id="testing12"
            ref={(el) => (sectionsRef.current[14] = el)}
          >
           {pData?.eligibilityCategory5}
          </h3>
          <div
            className={`${styles.occupations} ${styles.section}`}
            id="testing13"
            ref={(el) => (sectionsRef.current[15] = el)}
          >
            <h4
              className={styles.occupationTitle}
              id="testing14"
              ref={(el) => (sectionsRef.current[16] = el)}
            >
              {pData?.table1Heading}
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>{pData?.t1h1}</th>
                  <th className={styles.tableHeader}>{pData?.t1h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>{pData?.t1r1c1}</td>
                  <td className={styles.tableCell}>{pData?.t1r1c2}</td>
                </tr>
              </tbody>
            </table>

            <h4
              className={styles.occupationTitle}
              id="testing15"
              ref={(el) => (sectionsRef.current[8] = el)}
            >
       {pData?.table2Heading}
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>{pData?.t3h1}</th>
                  <th className={styles.tableHeader}>{pData?.t3h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>{pData?.t2r1c1}</td>
                  <td className={styles.tableCell}>{pData?.t2r1c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>{pData?.t2r2c1}</td>
                  <td className={styles.tableCell}>{pData?.t2r2c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t2r3c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t2r3c2}</td>
                </tr>
              </tbody>
            </table>

            <h4
              className={styles.occupationTitle}
              id="testing17"
              ref={(el) => (sectionsRef.current[19] = el)}
            >
              {pData?.table3Heading}
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>{pData?.t3h1}</th>
                  <th className={styles.tableHeader}>{pData?.t3h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t3r1c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t3r1c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>{pData?.t3r2c1}</td>
                  <td className={styles.tableCell}>{pData?.t3r2c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t3r3c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t3r3c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t3r4c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t3r4c2}</td>
                </tr>
              </tbody>
            </table>

            <h4
              className={styles.occupationTitle}
              id="testing19"
              ref={(el) => (sectionsRef.current[21] = el)}
            >
            {pData?.table4Heading}
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>{pData?.t4h1}</th>
                  <th className={styles.tableHeader}>{pData?.t4h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t4r1c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t4r1c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>{pData?.t4r2c1}</td>
                  <td className={styles.tableCell}>{pData?.t4r2c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>{pData?.t4r3c1}</td>
                  <td className={styles.tableCell}>{pData?.t4r3c2}</td>
                </tr>

                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t4r4c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t4r4c2}</td>
                </tr>
              </tbody>
            </table>

            <h4
              className={styles.occupationTitle}
              id="testing21"
              ref={(el) => (sectionsRef.current[23] = el)}
            >
             {pData?.table5Heading}
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>{pData?.t5h1}</th>
                  <th className={styles.tableHeader}>{pData?.t5h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t5r1c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t5r1c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t5r2c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t5r2c2}</td>
                </tr>
              </tbody>
            </table>
            <p className={styles.occupationPara}>
            {pData?.t5Disclaimier}
            </p>
            <h4
              className={styles.occupationTitle}
              id="testing23"
              ref={(el) => (sectionsRef.current[25] = el)}
            >
              {pData?.table6Heading}
            </h4>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.tableHeader}>{pData?.t6h1}</th>
                  <th className={styles.tableHeader}>{pData?.t6h2}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t6r1c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t6r1c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t6r2c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t6r2c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t6r3c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t6r3c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t6r4c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t6r4c2}</td>
                </tr>
                <tr>
                  <td className={styles.tableCell}>
                  {pData?.t6r5c1}
                  </td>
                  <td className={styles.tableCell}>{pData?.t6r5c2}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <button
            className={styles.button}
            onClick={() => (window.location.href = "/bcpnp-calculator")}
          >
            Calculate Your BCPNP Score
          </button>
        </div>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="how-to-apply"
          ref={(el) => (sectionsRef.current[27] = el)}
        >
          {pData?.applicationProcessHeading}
        </h2>
        <p>
        {pData?.applicationProcessDescription}
        </p>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing25"
          ref={(el) => (sectionsRef.current[28] = el)}
        >
          <li className={styles.listItem}>
            {" "}
            <h3>{pData?.app1}</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
              {pData?.app1Nested1}
              </li>
              <li className={styles.nestedListItem}>
              {pData?.app1Nested2}
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h3>{pData?.app2}</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
              {pData?.app2Nested1}
              </li>
              <li className={styles.nestedListItem}>
              {pData?.app2Nested2}
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h3>{pData?.app3}</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
              {pData?.app3Nested1}
              </li>
              <li className={styles.nestedListItem}>
              {pData?.app3Nested2}
              </li>
              <li className={styles.nestedListItem}>
              {pData?.app3Nested3}
              </li>
            </ul>
          </li>
          <li className={styles.listItem}>
            <h3>{pData?.app4}</h3>
            <ul className={styles.nestedList}>
              <li className={styles.nestedListItem}>
              {pData?.app4Nested1}
              </li>
              <li className={styles.nestedListItem}>
              {pData?.app4Nested2}
              </li>
            </ul>
          </li>
        </ul>

        <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="testing26"
          ref={(el) => (sectionsRef.current[29] = el)}
        >
        {pData?.StillNotHeading}
        </h2>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing27"
          ref={(el) => (sectionsRef.current[30] = el)}
        >
         {pData?.s1}
        </p>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing28"
          ref={(el) => (sectionsRef.current[31] = el)}
        >
        {pData?.s2}
        </p>

        <button
          className={styles.button}
          onClick={() =>
            (window.location.href =
              "/booking")
          }
        >
          Book Appointment
        </button>

        {/* <h2
          className={`${styles.subtitle} ${styles.section}`}
          id="why-choose-us"
          ref={(el) => (sectionsRef.current[32] = el)}
        >
          Why Choose Us?
        </h2>
        <p
          className={`${styles.description} ${styles.section}`}
          id="testing29"
          ref={(el) => (sectionsRef.current[33] = el)}
        >
          At Brightlight Immigration, we offer:
        </p>
        <ul
          className={`${styles.list} ${styles.section}`}
          id="testing30"
          ref={(el) => (sectionsRef.current[34] = el)}
        >
          <li className={styles.listItem}>
            Expertise: Over a decade of experience with high approval rates.
          </li>
          <li className={styles.listItem}>
            Personalized Service: Tailored approach to address each unique case.
          </li>
          <li className={styles.listItem}>
            Case Law Utilization: Leveraging precedents from similar cases.
          </li>
          <li className={styles.listItem}>
            Full Support: From initial application to final PR approval.{" "}
          </li>
        </ul> */}
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

export default EntryLevelSemiSkilled;
