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
  let [pData, setPData] = useState([]);
  let [cardsData, setCardsData] = useState([]);

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

    fetch("https://brightlight-node.onrender.com/adding-immigration-tools")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setCardsData(data);
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

  const handleCardClick = (link) => {
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
            <p> {pData?.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.containerParent}>
        <div className={styles.containerMain}>
          {cardsData.length <= 0 ? (
            <p className={styles.loadingText}>Loading...</p>
          ) : (
            <div className={styles.cardParent}>
              {cardsData?.map((tool, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleCardClick(tool.tool_link)}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    src={
                      hoveredIndex === index
                        ? tool.white_stroke_img
                        : tool.blue_stroke_img
                    }
                    alt={tool.tool_name}
                  />
                  <h2>{tool.tool_name}</h2>
                  <p>{tool.tool_desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Immigration;
