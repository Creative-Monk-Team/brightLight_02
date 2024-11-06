import React, { useState ,useEffect ,useRef } from "react";
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
  let [pData,setPData]=useState([])
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

  const sections = [
    {
      img: homeLocationImg,
      hoverImg: homeLocationImgHover,
      title: "Permanent Residency",
      description: "Canada welcomes thousands of skilled individuals from around the world every year...",
      link: "/permanent-residency"
    },
    {
      img: TemporaryImg,
      hoverImg: TemporaryImgHover,
      title: "Temporary Residence",
      description: "Temporary residency in Canada is a status granted by Canadian immigration....",
      link: "/temporary-resident-permit-draft"
    },


    {
      img: LmiaImg,
      hoverImg: LmiaHover,
      title: "LMIA Work Permit",
      description: "If you're looking to apply for an LMIA, it's because you are either a foreign worker who wants to apply for a job on a temporary...",
      link: "/lmia-reviewed"
    },


    {
      img: parentsImg,
      hoverImg: parentsImgHover,
      title: "Family Reunification & Sponsorship",
      description: "Canada is renowned for its welcoming spirit...",
      link: "/family-reunification-sponsorship"
    },
    {
      img: workPermitImg,
      hoverImg: workPermitImgHover,
      title: "Work Permit",
      description: "The Canadian Work Permit is your key to accessing these exciting professional opportunities.",
      link: "/work-permit"
    },
    {
      img: PrRenewalImg,
      hoverImg: PrRenewalImgHover,
      title: "PR Renewal",
      description: "You have lived in Canada for at least 2 years out of the last 5 years...",
      link: "/pr-renewal"
    },
    {
      img: CitizenshipImg,
      hoverImg: CitizenshipImgHover,
      title: "Citizenship",
      description: "After completing your 3 years of PR journey in Canada...",
      link: "/citizenship"
    },
    {
      img: ExpressEntryImg,
      hoverImg: ExpressEntryHover,
      title: "Express Entry",
      description: "The Canadian Express Entry Program is a points-based system used by the residence....",
      link: "/express-entry"
    },



    {
      img: FrancoImg,
      hoverImg: FrancoHover,
      title: "Franco-Mobility Program",
      description: "Mobilité Francophone: Unlocking Opportunities for French-Speaking Workers....",
      link: "/francophone-mobility-program"
    },


    
    {
      img: PNPImg,
      hoverImg: PNPHover,
      title: "PNP",
      description: "While the federal Express Entry system remains a popular pathway to Canadian residence....",
      link: "/pnp"
    },



    {
      img: SpousalSponImg,
      hoverImg: SpousalSponHover,
      title: "Spousal Sponsorship",
      description: "The Canadian government understands the importance of bringing loved ones together, and its Family reunification....",
      link: "/spouse-common-law-sponsership"
    },


    {
      img: SuperVisaImg,
      hoverImg: SuperVisaHover,
      title: "Super Visa",
      description: "The Super Visa is a temporary visa program offered to parents and grandparents of Canadian citizens.....",
      link: "/super-visa"
    },
    {
      img: VisitorVisaImg,
      hoverImg: VisitorVisaHover,
      title: "Visitor Visa",
      description: "A Visitor Visa, also known as a Temporary Resident Visa (TRV), allows people from other countries......",
      link: "/visitor-visa"
    },



    {
      img: EmergencyVisaImg,
      hoverImg: EmergencyVisaHover,
      title: "Emergency Visa",
      description: "An emergency visa is a type of visa that allows individuals to travel to a country urgently due to unforeseen circumstances.......",
      link: "/visitor-visa"
    },



    {
      img: TemporaryResidentPermitImg,
      hoverImg: TemporaryResidentPermitHover,
      title: "Temporary Resident Permit",
      description: "The Temporary Resident Permit (TRP) is a legal document issued by Citizenship and Immigration Canada (CIC) that......",
      link: "/temporary-resident-permit-draft"
    },
    {
      img: RestorationImg,
      hoverImg: RestorationHover,
      title: "Restoration Status Draft",
      description: "Are you a temporary resident in Canada who has lost status? Don't despair! There is a way to regain your legal standing......",
      link: "/restoration-status-draft"
    },
    {
      img: FlagpolingImg,
      hoverImg: FlagpolingHover,
      title: "Flagpoling",
      description: "Flagpoling is a legal process of exiting Canada and re-entering the country without physically crossing into the USA to obtain ....",
      link: "/flagpoling"
    },




    {
      img: PgwpImg,
      hoverImg: PgwpHover,
      title: "PGWP",
      description: " If you are an international student who has graduated from a designated learning institution (DLI) in Canada, you may be eligible for a PGWP.....",
      link: "/pgwp"
    },



    {
      img: ReplyPflImg,
      hoverImg: ReplyPflHover,
      title: "PFL",
      description: "Responding to a Procedural Fairness Letter (PFL) is a crucial step in addressing concerns raised .....",
      link: "/reply-to-pfl-page"
    },



    {
      img: DualIntentVisaImg,
      hoverImg: DualIntentVisaHover,
      title: "Dual Intent Visa",
      description: "A Dual Intent Visa allows you to have two different reasons for visiting Canada. This means you can come to.....",
      link: "/dual-intent-visa"
    },



    // {
    //   img: ParentsGrandparentsImg,
    //   hoverImg: ParentsGrandparentsHover,
    //   title: "Parents / GrandParents",
    //   description: "Parents and grandparents are incredibly important in one’s life. They're like the foundation of our lives....",
    //   link: "/ParentsGrandparents"
    // },
    // {
    //   img: DependentChildrenImg,
    //   hoverImg: DependentChildrenHover,
    //   title: "Dependent Children",
    //   description: "The Dependent Child Program helps families stay together and gives your child the chance to go to good schools in Canada....",
    //   link: "/dependent-children"
    // },
    {
      img: HumanitarianCompassionateImg,
      hoverImg: HumanitarianCompassionateHover,
      title: "Humanitarian and Compassionate (H&C)",
      description: "Unlike traditional immigration programs that prioritize factors like education, work experience, and language proficiency....",
      link: "/humanitarian-compassionate"
    },
    // {
    //   img: OrphanImg,
    //   hoverImg: OrphanHover,
    //   title: "Orphan",
    //   description: "The Canada Orphan Sponsorship Program gives orphaned kids a chance to be with their Canadian relatives or start a new life in Canada.....",
    //   link: "/orphan"
    // },
    // {
    //   img: AdoptionImg,
    //   hoverImg: AdoptionHover,
    //   title: "Adoption",
    //   description: "The heart-warming journey of bringing a child into your life through adoption is an incredible act of love and commitment, offering the child.....",
    //   link: "/adoption"
    // },
    // {
    //   img: LonelyCanadianImg,
    //   hoverImg: LonelyCanadianHover,
    //   title: "Lonely Canadian",
    //   description: "Canada’s family sponsorship program prioritizes family reunification. If you wish to sponsor other family members who may be lonely.....",
    //   link: "/lonely-canadian"
    // },
    {
      img: WorkPermitImg,
      hoverImg: WorkPermitHover,
      title: "Work Permit",
      description: "The Canadian Work Permit is your key to accessing these exciting professional opportunities ...",
      link: "/work-permit"
    },
    {
      img: CaregiverImg,
      hoverImg: CaregiverHover,
      title: "Caregiver",
      description: "The Canadian government is actively welcoming foreign residents with the right skills and experience to fill the country's critical need for caregivers......",
      link: "/pathways-for-caregiver"
    },
    {
      img: ExtensionsDraftImg,
      hoverImg: ExtensionsDraftHover,
      title: "Extension of Temporary Status",
      description: "The plans can change, and you may need to extend your stay in Canada for various reasons. Let us guide you to maintain your legal....",
      link: "/extensions-draft"
    },
    {
      img: RestorationStatusDraftImg,
      hoverImg: RestorationStatusDraftHover,
      title: "Restoration Status Draft",
      description: "Are you a temporary resident in Canada who has lost status? Don't despair! There is a way to regain your legal standing in Canada.....",
      link: "/restoration-status-draft"
    },
  ];

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
    <Navbar1/>
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <div className={styles.bannerHeading}>
            <h1> {pData?.heading}</h1>
            <p>
            {pData?.description}
            </p>
          </div>
        </div>
      </div>

      <div className={styles.containerParent}>
        <div className={styles.containerMain}>
          <div className={styles.cardParent}>
            {sections.map((section, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleHeadingClick(section.link)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={hoveredIndex === index ? section.hoverImg : section.img}
                  alt={section.title}
                />
                <h2>{section.title}</h2>
                <p>{section.description}</p>
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
