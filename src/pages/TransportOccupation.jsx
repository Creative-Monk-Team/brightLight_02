import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/TransportOccupation.module.css";
import BlueLinkAncor from "../assets/blueLink-arrows.png";
import LinkAncor from "../assets/link-arrows.png";
import BestChoice from "../sections/BestChoice";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";


// not Use This Page

let TransportOccupation = () => {     
  let [metaData, setMetaData] = useState([]);

  useEffect(()=>{
    fetch("https://brightlight-node.onrender.com/transport-meta")
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
  },[])

  return (
    <>
<Helmet>
        <title>
          {metaData.metaTitle
            ? metaData?.metaTitle
            : "About Us - Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData.metaOgTitle
              ? metaData?.metaOgTitle
              : "About Us - Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData.metaKeywords
              ? metaData?.metaKeywords
              : "About Us, Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <h1>Transport Occupations</h1>
          <p>
            Exploring the Agriculture and Agri-Food Occupations Category offers
            access to abundant opportunities within Canada's thriving
            agricultural sector. Whether your skills lie in crop production,
            livestock farming, agricultural research, or any other Agri-food
            occupation, this program paves the way for a rewarding career path
            in Canada.
          </p>
        </div>
      </div>

      <div className={styles.eligibleParent}>
        <div className={styles.eligibleMain}>
          <h1>First you must be eligible with Express Entry</h1>
          <h3>
            Before you can participate in a STEM-specific draw through Canada's
            Express Entry system, you need to be eligible. Here's how you can
            get started:
          </h3>
        </div>
        {/* // */}
        <div className={styles.chooseParent}>
          <div className={styles.chooseMain}>
            <div className={styles.stepsGrid}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <p>
                    Join the Express Entry Pool: The first step towards becoming
                    a candidate for a STEM-specific draw is to get into the
                    Express Entry pool.
                  </p>
                </div>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <h2>Choose Your Program:</h2>
                  <p>
                    There are three programs you can be eligible for to join the
                    Express Entry pool:
                  </p>
                  <div className={styles.stepContentList}>
                    <ul>
                      <li>
                        <b>Federal Skilled Worker Program (FSW):</b> This
                        program is ideal for tech workers who have the necessary
                        work experience, education, and language ability.
                      </li>
                      <li>
                        <b>Canadian Experience Class (CEC):</b>
                        Similar to the FSW program, the CEC is also suitable for
                        tech workers who have gained Canadian work experience.
                      </li>
                      <li>
                        <b>
                          Federal Skilled Agriculture and agri-food occupations
                          s Program (FSTP):
                        </b>
                        If you're a Agriculture and agri-food occupations s
                        worker, this program is designed for you. It requires
                        proof of relevant work experience, education, and
                        language proficiency.
                      </li>
                    </ul>
                  </div>
                  <h3>
                    Remember, each program has its own set of eligibility
                    requirements. So, make sure to review these carefully and
                    ensure you meet all the necessary criteria before applying.
                  </h3>
                </div>
              </div>
            </div>
            {/* // */}
          </div>
        </div>
        {/* // */} {/* // */}
      </div>

      <div className={styles.agricultureParent}>
        <div className={styles.agricultureMain}>
          <h1>
            Agriculture and agri-food occupations category eligibility criteria:
          </h1>
          <h2>
            Once you have met eligibility for one of the Express Entry programs,
            now you need to meet eligibility for Agriculture and agri-food
            occupations criteria:
          </h2>
          <div className={styles.agricultureList}>
            <ul>
              <li>
                At least 6 months of full-time, continuous work experience (or
                an equivalent amount of part-time work experience) in an
                agriculture or agri-food occupation.
              </li>
              <li>A valid Express Entry profile.</li>
            </ul>
          </div>

          <div className={styles.theButtonAncorParent}>
            <div className={styles.theButtonAncor}>
              <a href="/">
                Here is the list of eligble NOCs:
                <span className={styles.theButtonSpan}>
                  <img src={BlueLinkAncor} alt="err" />
                </span>
              </a>
            </div>
          </div>

          <div className={styles.occupationParent}>
            <div className={styles.occupationOne}>
              <h2 className={styles.occupation}>Occupations</h2>
              <span className={styles.occupationPara}>
                <p>
                  Contractors and supervisors, landscaping, grounds maintenance
                  and horticulture services
                </p>
                <p>Agricultural service contractors and farm supervisors</p>
                <p>Butchers-retail and wholesale</p>
              </span>
            </div>
            <div className={styles.occupationTwo}>
              <h2>2021 NOC Code</h2>
              <span className={styles.occupationPara}>
                <p>82031</p>
                <p>82030</p>
                <p>63201</p>
              </span>
            </div>
            <div className={styles.occupationThree}>
              <h2>2021 TEER Category</h2>
              <span className={styles.occupationPara}>
                <p>2</p>
                <p>2</p>
                <p>3</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.theButtonAncorParentTwo}>
        <div className={styles.theButtonAncorTwo}>
          <a href="/">
            Express Entry Agriculture and agri-food occupations draws history
            <span className={styles.theButtonSpanTwo}>
              <img src={LinkAncor} alt="err" />
            </span>
          </a>
        </div>
      </div>

      <div className={styles.contactUpperParent}>
        <div className={styles.contactUpperMain}>
          <p>
            The first ever Express Entry draw for Agriculture and agri-food
            occupations workers was held on September, 2023. Express Entry draw
            267 saw a CRS score of 354 and invited 600 candidates eligible for
            category-based selection in Agriculture and agri-food occupations.
          </p>
        </div>
      </div>

      <div className={styles.contactParent}>
        <div className={styles.contactMain}>
          <h1>Contact</h1>

          <p>
            Contact Brightlight Immigration today to assess your profile and
            embark on a transformative journey towards achieving your Canadian
            dream. With over a decade of experience, we specialize in handling
            Express Entry Programs. Our approval rate for these programs are
            near to 100%. We achieve this with a tailored approach to your
            specific case. We use case law and find similar cases to your
            circumstances that had positive results, and we use them as
            precedents in cases we work on. This is why we have a high success
            rate.
          </p>

          <p>
            At Brightlight Immigration, we have a dedicated team of visa
            application specialists who can assist you from the start of the
            application process all the way to obtaining your PR. Start your
            process now.
          </p>
        </div>
      </div>
      <BestChoice/>
    <Testimonials/>
    <FAQ/>
      </>
 
  );
};

export default TransportOccupation;
