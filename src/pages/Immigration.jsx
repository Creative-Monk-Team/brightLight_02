import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Immigration.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Calculator from "../assets/calculator-Immigration.png";
import CalculatorWhite from "../assets/calculator-Immigration-white.png";
import Assessment from "../assets/assessment-immigration.png";
import AssessmentWhite from "../assets/assessment-immigration-white.png";
import Express from "../assets/express-immigration.png";
import ExpressWhite from "../assets/express-immigration-white.png";
import Sandclock from "../assets/sandclock-immigration.png";
import SandclockWhite from "../assets/sandclock-immigration-white.png";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

let Immigration = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  let [metaData, setMetaData] = useState([]);
  let [pData,setPData]=useState([])
  
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/immigrationToolsMeta")
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
    fetch("https://brightlight-node.onrender.com/immigrationToolsPage")
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

  const tools = [
    {
      img: Assessment,
      hoverImg: AssessmentWhite,
      title: "Free Assessment",
      description: "Book a Free Assessment with us to help you and your family members find eligibility in various Canadian immigration pathways. Book now!",
      link: "/booking"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "FSWP Calculator",
      description: "Our online FSWP calculator helps you to check your eligibility under the Federal Skilled Worker (FSW) Program.",
      link: "/Federal-Skilled"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "BCPNP Calculator",
      description: "Our online BCPNP calculator helps you to calculate your scores under various BCPNP pathways. Click here to check your BCPNP score today!",
      link: "/bcpnp-calculator"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "CLB Calculator for IELTS",
      description: "Our online IELTS CLB calculator helps you to calculate your CLB Level for your IELTS result. Click here to check your IELTS CLB today!",
      link: "/clb-ilets-calculator?selected=type1"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "CLB Calculator for CELPIP",
      description: "Our online CELPIP calculator helps you to calculate your CLB Level for your CELPIP result. Click here to check your CELPIP CLB today!",
      link: "/clb-ilets-calculator?selected=type3"
    },
    {
      img: Calculator,
      hoverImg: CalculatorWhite,
      title: "CLB Calculator for French (TEF)",
      description: "Our online TEF CLB calculator helps you to calculate your French CLB Level for your TEF result. Click here to check your TEF CLB today!",
      link: "/clb-ilets-calculator?selected=type2"
    },
    {
      img: Express,
      hoverImg: ExpressWhite,
      title: "Express Entry CRS Draw History",
      description: "Check all the Draw history for Express Entry, including latest Draws, Updated Regularly!",
      link: "/previous-draw-history"
    },
    {
      img: Sandclock,
      hoverImg: SandclockWhite,
      title: "Coming Soon",
      description: "Coming Soon",
      link: "#"
    }
  ];

  const handleCardClick = (link) => {
    // Use window.location.href to redirect to the page
    window.location.href = link;
  };

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
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h3> {pData?.subHeading}</h3>
            <h1> {pData?.heading}</h1>
            <p>  {pData?.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.containerParent}>
        <div className={styles.containerMain}>
          <div className={styles.cardParent}>
            {tools.map((tool, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleCardClick(tool.link)} // Redirect on click
                style={{ cursor: "pointer" }} // Add cursor pointer to indicate clickability
              >
                <img src={hoveredIndex === index ? tool.hoverImg : tool.img} alt={tool.title} />
                <h2>{tool.title}</h2>
                <p>{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Immigration;
