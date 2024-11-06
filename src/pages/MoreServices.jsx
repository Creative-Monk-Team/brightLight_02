import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/MoreServices.module.css";
import Navbar1 from "../components/Navbar1";
import homeLocationImg from "../assets/homeLocation.png";
import homeLocationImgHover from "../assets/homeLocationWhite.png";
import graduatedStudentImg from "../assets/graduatedStudent.png";
import graduatedStudentImgHover from "../assets/graduatedStudentWhite.png";
import TemporaryImg from "../assets/more-services-temporary-house.png";
import TemporaryImgHover from "../assets/more-services-temporary-house-White.png";
import parentsImg from "../assets/parents.png";
import parentsImgHover from "../assets/parentsWhite.png";
import PrRenewalImg from "../assets/services-prRenewal.png";
import PrRenewalImgHover from "../assets/services-prRenewal-White.png";
import CitizenshipImg from "../assets/more-services-citizenship.png";
import CitizenshipImgHover from "../assets/more-services-citizenshipWhite.png";
import workPermitImg from "../assets/workPermit.png";
import workPermitImgHover from "../assets/workPermitWhite.png";
import ExpressEntryImg from "../assets/services-expressEntry.png";
import ExpressEntryHover from "../assets/services-expressEntry-White.png";
import PilotProgramImg from "../assets/services-pilotProgram.png";
import PilotProgramHover from "../assets/services-pilotProgram-White.png";
import PNPImg from "../assets/services-PNP.png";
import PNPHover from "../assets/services-PNP-White.png";
import RNIPImg from "../assets/services-RNIP.png";
import RNIPHover from "../assets/services-RNIP-White.png";
import SuperVisaImg from "../assets/services-superVisa.png";
import SuperVisaHover from "../assets/services-superVisa-White.png";
import VisitorVisaImg from "../assets/services-visitorVisa.png";
import VisitorVisaHover from "../assets/services-visitorVisa-White.png";
import TemporaryResidentPermitImg from "../assets/services-temporaryResidentPermit.png";
import TemporaryResidentPermitHover from "../assets/services-temporaryResidentPermit-White.png";
import RestorationImg from "../assets/services-restoration.png";
import RestorationHover from "../assets/services-restoration-White.png";
import FlagpolingImg from "../assets/services-flagpoling.png";
import FlagpolingHover from "../assets/services-flagpoling-White.png";
import StudyPermitMinorsImg from "../assets/services-studyPermitMinors.png";
import StudyPermitMinorsHover from "../assets/services-studyPermitMinors-White.png";
import HumanitarianCompassionateImg from "../assets/services-H&C.png";
import HumanitarianCompassionateHover from "../assets/services-H&C-White.png";
import WorkPermitImg from "../assets/services-workPermit.png";
import WorkPermitHover from "../assets/services-workPermit-White.png";
import CaregiverImg from "../assets/services-caregivers.png";
import CaregiverHover from "../assets/services-caregivers-White.png";
import ExtensionsDraftImg from "../assets/services-timeExtention.png";
import ExtensionsDraftHover from "../assets/services-timeExtention-White.png";
import RestorationStatusDraftImg from "../assets/services-restoration.png";
import RestorationStatusDraftHover from "../assets/services-restoration-White.png";
import FrancoImg from "../assets/services-franco.png";
import FrancoHover from "../assets/services-francoWhite.png";
import SpousalSponImg from "../assets/services-spousalPermitSpon.png";
import SpousalSponHover from "../assets/services-spousalPermitSponWhite.png";
import PgwpImg from "../assets/services-pgwp.png";
import PgwpHover from "../assets/services-pgwpWhite.png";
import ReplyPflImg from "../assets/services-replyPFL.png";
import ReplyPflHover from "../assets/services-replyPFLWhite.png";
import EmergencyVisaImg from "../assets/services-emergencyVisa.png";
import EmergencyVisaHover from "../assets/services-emergencyVisaWhite.png";
import DualIntentVisaImg from "../assets/services-dualIntenVisa.png";
import DualIntentVisaHover from "../assets/services-dualIntenVisaWhite.png";
import LmiaImg from "../assets/services-lmia.png";
import LmiaHover from "../assets/services-lmiaWhite.png";

import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

import Footer1 from "../components/Footer1";

const MoreServices = () => {
  const [selectedHeading, setSelectedHeading] = useState("Permanent Residency");
  let [metaData, setMetaData] = useState([]);
  let [pData, setPData] = useState([]);
  let [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/moreServicesMeta")
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

    fetch("https://brightlight-node.onrender.com/more-services-card")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          console.log(data);
          setCardsData(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/moreServicesPage")
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

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleHeadingClick = (link) => {
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
            <h1> {pData?.heading}</h1>
            <p>{pData?.description}</p>
          </div>
        </div>
      </div>

      <div className={styles.containerParent}>
        <div className={styles.containerMain}>
          <div className={styles.cardParent}>
            {cardsData?.map((section, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleHeadingClick(section.tool_link)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={
                    hoveredIndex === index
                      ? section.white_stroke_img
                      : section.blue_stroke_img
                  }
                  alt={section.tool_name}
                />
                <h2>{section.tool_name}</h2>
                <p>{section.tool_desc}</p>
                <h4>Read More</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default MoreServices;
