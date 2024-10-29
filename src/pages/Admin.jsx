import styles from "../styles/Admin.module.css";
import blueLogo from "../assets/brlightlight-icon.webp";
import user from "../assets/user.png";
import { useState, useEffect } from "react";
import HomeTop from "../admin_sections/HomeTop";
import LoveneetBanner from "../admin_sections/LoveneetBanner";
import MemberOf from "../admin_sections/MemberOf";
import Features from "../admin_sections/Features";
import OurProcess from "../admin_sections/OurProcess";
import Services from "../admin_sections/Services";
import Achievements from "../admin_sections/Achiements";
import Testimonials from "../admin_sections/Testimonials";
import TestimonialsVideo from "../admin_sections/TestimonialsVideo";
import FAQ from "../admin_sections/FAQ";
import Blogs from "../admin_sections/Blogs";
import AboutTop from "../admin_sections/AboutTop";
import OurFoundation from "../admin_sections/OurFoundation";
import Vision from "../admin_sections/Vision";
import Pillars from "../admin_sections/Pillars";
import Directors from "../admin_sections/Directors";
import WeAre from "../admin_sections/WeAre";
import WeAreSmall from "../admin_sections/WeAreSmall";
import BestChoice from "../admin_sections/BestChoice";
import SocialMedia from "../admin_sections/SocialMedia";
import Globally from "../admin_sections/Globally";
import Map from "../admin_sections/Map";
import FoundationImg from "../admin_sections/FoundationImg";
import VisionImg from "../admin_sections/VisionImg";
import PillarsImg from "../admin_sections/PillarsImg";
import ContactTop from "../admin_sections/ContactTop";
import Privacy from "../admin_sections/Privacy";
import Terms from "../admin_sections/Terms";
import AllBlogs from "../admin_sections/AllBlogs";
import AddBlog from "../admin_sections/AddBlog";
import AllNews from "../admin_sections/AllNews";
import AddNews from "../admin_sections/AddNews";
import { useAuth } from "../context/AuthContext";
import HomeMeta from "../admin_sections/HomeMeta";
import AboutMeta from "../admin_sections/AboutMeta";
import ContactMeta from "../admin_sections/ContactMeta";
import NewsMeta from "../admin_sections/NewsMeta";
import BlogsMeta from "../admin_sections/BlogsMeta";
import FederalSkilled from "../admin_sections/Federal";
import FederalMeta from "../admin_sections/FederalMeta";
import TransportOccupation from "../admin_sections/Transport";
import TransportMeta from "../admin_sections/TransportMeta";
import CategoryMeta from "../admin_sections/CategoryMeta";
import CategoryBased from "../admin_sections/Category";
import CLB from "../admin_sections/CLB";
import CLBMeta from "../admin_sections/CLBMeta";
import BCPNP from "../admin_sections/BCPNP";
import BCPNPMeta from "../admin_sections/BCPNPMeta";
import ExpressEntry from "../admin_sections/Express";
import ExpressMeta from "../admin_sections/ExpressMeta";
import AboutAchievement from "../admin_sections/AboutAchievements";
import AdditionalDocument from "../admin_sections/AdditionalDocument";
import AdditionalDocumentMeta from "../admin_sections/AdditionalDocumentMeta";
import Adoption from "../admin_sections/Adoption";
import AdoptionMeta from "../admin_sections/AdoptionMeta";
import BcpnpPageContent from "../admin_sections/BcpnpPage";
import BcpnpPageMeta from "../admin_sections/BcpnpPageMeta";
import AgricultureAndAgriFoodPageContent from "../admin_sections/AgricultureAndAgriFood";
import AgricultureAndAgriFoodMeta from "../admin_sections/AgricultureAndAgriFoodMeta";
import AgricultureStreamLMIAContent from "../admin_sections/AgricultureStreamLMIA";
import AgricultureStreamLMIAMeta from "../admin_sections/AgricultureStreamLMIAMeta";
import AgriFoodPilotProgramContent from "../admin_sections/AgriFoodPilotProgramContent";
import AgriFoodPilotProgramMeta from "../admin_sections/AgriFoodPilotProgramMeta";
import BridgingOpenWorkPermitLPContent from "../admin_sections/BridgingOpenWorkPermitLP";
import BridgingOpenWorkPermitLPMeta from "../admin_sections/BridgingOpenWorkPermitLPMeta";
import BusinessVisitorVisaContent from "../admin_sections/BusinessVisitorVisa";
import BusinessVisitorVisaMeta from "../admin_sections/BusinessVisitorVisaMeta";
import CanadianExperienceClassContent from "../admin_sections/CanadianExperienceClass";
import CanadianExperienceClassMeta from "../admin_sections/CanadianExperienceClassMeta";
import CbyContent from "../admin_sections/Cby";
import CbyMeta from "../admin_sections/CbyMeta";
import ChangeCollegeProgramContent from "../admin_sections/ChangeCollegeProgram";
import ChangeCollegeProgramMeta from "../admin_sections/ChangeCollegeProgramMeta";
import CategoryBasedExpressContent from "../admin_sections/CategoryBasedExpress";
import CategoryBasedExpressMeta from "../admin_sections/CategoryBasedExpressMeta";
import CitizenshipContent from "../admin_sections/Citizenship";
import CitizenshipMeta from "../admin_sections/CitizenshipMeta";
import CommonLawPartnerTemporaryContent from "../admin_sections/CommonLawPartnerTemporary";
import CommonLawPartnerTemporaryContentMeta from "../admin_sections/CommonLawPartnerTemporaryMeta";
import CommonLawPartnerPermanentContent from "../admin_sections/CommonLawPartnerPermanent";
import CommonLawPartnerPermanentContentMeta from "../admin_sections/CommonLawPartnerPermanentMeta";
import DependentChildrenContent from "../admin_sections/DependentChildren";
import DependentChildrenMeta from "../admin_sections/DependentChildrenMeta";
import DualIntentVisaMeta from "../admin_sections/DualIntentVisaMeta";
import DualIntentVisaPageContent from "../admin_sections/DualIntentVisa";
import EntryLevelSemiSkilledContent from "../admin_sections/EntryLevelSemiSkilled";
import EntryLevelSemiSkilledMeta from "../admin_sections/EntryLevelSemiSkilledMeta";
import ExtensionsDraftContent from "../admin_sections/ExtensionsDraft";
import ExtensionsDraftMeta from "../admin_sections/ExtensionsDraftMeta";
import CommonLawPartnerInternationalContent from "../admin_sections/CommonLawParenerInternational";
import CommonLawPartnerInternationalMeta from "../admin_sections/CommonLawParenerInternationalMeta";
import FamilyReunificationContent from "../admin_sections/FamilyReunification";
import FamilyReunificationMeta from "../admin_sections/FamilyReunificationMeta";
import FederalSkilledTradeProgramContent from "../admin_sections/FederalSkilledTradeProgram";
import FederalSkilledTradeProgramMeta from "../admin_sections/FederalSkilledTradeProgramMeta";
import FederalSkilledWorkerProgramContent from "../admin_sections/FederalSkilledWorkerProgram";
import FederalSkilledWorkerProgramMeta from "../admin_sections/FederalSkilledWorkerProgramMeta";
import FlagPolingContent from "../admin_sections/FlagPoling";
import FlagPolingMeta from "../admin_sections/FlagPolingMeta";
import FrancophoneContent from "../admin_sections/Francophone";
import FrancophoneMeta from "../admin_sections/FrancophoneMeta";
import FrenchTargetedDrawContent from "../admin_sections/FrenchTargetDraw";
import FrenchTargetedDrawMeta from "../admin_sections/FrenchTargetDrawMeta";
import HealthAuthoritiesStreamContent from "../admin_sections/HealthAuthoritiesStream";
import HealthAuthoritiesStreamMeta from "../admin_sections/HealthAuthoritiesStreamMeta";
import GlobalStreamLMIAContent from "../admin_sections/GlobalStreamLMIA";
import GlobalStreamLMIAMeta from "../admin_sections/GlobalStreamLMIAMeta";
import HealthcareTargetedDrawContent from "../admin_sections/HealthcareTargetedDraw";
import HealthcareTargetedDrawMeta from "../admin_sections/HealthcareTargetedDrawMeta";
import HumanContent from "../admin_sections/HumanitarianCompassionateMeta";
import HumanPageContent from "../admin_sections/HumanitarianCompassionate";
import InCaregiverContent from "../admin_sections/InCaregiver";
import InCaregiverMeta from "../admin_sections/InCaregiverMeta";
import InsideCanadaContent from "../admin_sections/InsideCanada";
import InsideCanadaMeta from "../admin_sections/InsideCanadaMeta";
import InternationalGraduateContent from "../admin_sections/InternationalGraduate";
import InternationalGraduateMeta from "../admin_sections/InternationalGraduateMeta";
import InternationalPostGraduateContent from "../admin_sections/InternationalPostGraduate";
import InternationalPostGraduateMeta from "../admin_sections/InternationalPostGraduateMeta";
import LMIAReviewedContent from "../admin_sections/LMIAReviewed";
import LMIAReviewedMeta from "../admin_sections/LMIAReviewedMeta";
import LonelyCanadianContent from "../admin_sections/LonelyCanadian";
import LonelyCanadianMeta from "../admin_sections/LonelyCanadianMeta";
import LowWageLMIAContent from "../admin_sections/LowWageLMIA";
import LowWageLMIAMeta from "../admin_sections/LowWageLMIAMeta";
import NonSdsContent from "../admin_sections/NonSds";
import NonSdsMeta from "../admin_sections/NonSdsMeta";
import OpenWorkCanadaMeta from "../admin_sections/OpenWorkCanadaMeta";
import OpenWorkCanadaContent from "../admin_sections/OpenWorkCanada";
import OpenWorkPermitContent from "../admin_sections/OpenWorkPermit";
import OpenWorkPermitMeta from "../admin_sections/OpenWorkPermitMeta";
import OpenWorkForSpousalInlandContent from "../admin_sections/OpenWorkForSpousalInland";
import OpenWorkForSpousalInlandMeta from "../admin_sections/OpenWorkForSpousalInlandMeta";
import OpenWorkVulnerableContent from "../admin_sections/OpenWorkVulnerable";
import OpenWorkVulnerableMeta from "../admin_sections/OpenWorkVulnerableMeta";
import OrphanContent from "../admin_sections/Orphan";
import OrphanMeta from "../admin_sections/OrphanMeta";

let Admin = () => {
  let { logout } = useAuth();
  let [showDropdown, setShowDropdown] = useState(false);
  let [activePage, setActivePage] = useState("home");
  let [activeSection, setActiveSection] = useState("home-top");
  let [displayParam, setDisplayParam] = useState("main_pages");
  let [paginationValue, setPaginationValue] = useState(1);

  useEffect(() => {
    let params = new URLSearchParams(window.location.search);
    let displayValue = params.get("display") || "main_pages";
    setDisplayParam(displayValue);
    params.set("display", displayValue);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
    window.scrollTo({
      top: 0,
    });
  }, []);

  let setInternalPages = () => {
    setPaginationValue(1);
    let params = new URLSearchParams(window.location.search);
    params.set("display", "internal_pages");
    setDisplayParam("internal_pages");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );

    window.scrollTo({
      top: 0,
    });
  };

  let setMainPages = () => {
    setActiveSection("none");
    let params = new URLSearchParams(window.location.search);
    params.set("display", "main_pages");
    setDisplayParam("main_pages");
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );

    window.scrollTo({
      top: 0,
    });
  };

  let updateDisplayParam = () => {
    setActiveSection("none");
    let params = new URLSearchParams(window.location.search);
    let newDisplayValue = params.get("display");
    if (newDisplayValue !== displayParam) {
      setDisplayParam(newDisplayValue);
    }
  };

  useEffect(() => {
    window.addEventListener("popstate", updateDisplayParam);
    return () => {
      window.removeEventListener("popstate", updateDisplayParam);
    };
  }, [displayParam]);

  let handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  let handlePageClick = (page) => {
    setActivePage(page);
  };

  let handleSectionClick = (section) => {
    setActiveSection(section);
  };
  let handleLogout = () => {
    logout();
    window.location.href = "/auth/panel/dash/bright";
  };
  return (
    <>
      <div className={styles.grayBg}>
        <div className={styles.topBar}>
          <img src={blueLogo} className={styles.logo} alt="Logo" />
          <div className={styles.userDiv}>
            <img src={user} onClick={handleDropdownClick} alt="User" />
            <div
              className={`${styles.userDropdown} ${
                showDropdown ? styles.active : ""
              }`}
            >
              <p onClick={handleLogout}>Log Out</p>
            </div>
          </div>
        </div>
        {displayParam == "main_pages" ? (
          <div className={styles.dashboard}>
            <div className={styles.leftPanel}>
              <div
                className={`${styles.page} ${
                  activePage === "home" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("home")}
              >
                <p>Homepage</p>
              </div>
              <div
                className={`${styles.page} ${
                  activePage === "about" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("about")}
              >
                <p>About Us</p>
              </div>
              <div
                className={`${styles.page} ${
                  activePage === "contact" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("contact")}
              >
                <p>Contact Us</p>
              </div>
              <div
                className={`${styles.page} ${
                  activePage === "privacy-policy" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("privacy-policy")}
              >
                <p>Privacy Policy</p>
              </div>
              <div
                className={`${styles.page} ${
                  activePage === "terms-and-conditions" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("terms-and-conditions")}
              >
                <p>Terms & Conditions</p>
              </div>
              <div
                className={`${styles.page} ${
                  activePage === "blogs" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("blogs")}
              >
                <p>Blogs</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "news" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("news")}
              >
                <p>News</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "federal" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("federal")}
              >
                <p>Federal Skilled</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "transport" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("transport")}
              >
                <p>Transport Occupation</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "category" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("category")}
              >
                <p>Category Based Draws</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "clb" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("clb")}
              >
                <p>CLB Calculator</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "bcpnp" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("bcpnp")}
              >
                <p>BCPNP Calculator</p>
              </div>

              <div
                className={`${styles.page} ${
                  activePage === "express" ? styles.activePage : ""
                }`}
                onClick={() => handlePageClick("express")}
              >
                <p>Express Entry</p>
              </div>
              <div
                className={styles.page}
                onClick={() => {
                  setInternalPages();
                }}
              >
                <p>Internal Pages {"->"}</p>
              </div>
            </div>
            <div className={styles.rightPanel}>
              {activePage === "home" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "home-top" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("home-top")}
                  >
                    Top Heading Section
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "section2" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section2")}
                  >
                    Banner Section
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "section3" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section3")}
                  >
                    Member Of Section
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "section4" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section4")}
                  >
                    Why US?
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "section5" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section5")}
                  >
                    Our Process
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "section6" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section6")}
                  >
                    Services
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "section7" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section7")}
                  >
                    Achievements
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "section8" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section8")}
                  >
                    Testimonials
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "section9" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section9")}
                  >
                    Testimonials Videos
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "section10" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section10")}
                  >
                    FAQ's
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "section11" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section11")}
                  >
                    Blogs Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "section12" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("section12")}
                  >
                    Page Meta
                  </div>
                </div>
              )}
              {activePage === "home" && activeSection === "home-top" && (
                <HomeTop />
              )}

              {activePage === "home" && activeSection === "section2" && (
                <LoveneetBanner />
              )}

              {activePage === "home" && activeSection === "section3" && (
                <MemberOf />
              )}

              {activePage === "home" && activeSection === "section4" && (
                <Features />
              )}

              {activePage === "home" && activeSection === "section5" && (
                <OurProcess />
              )}

              {activePage === "home" && activeSection === "section6" && (
                <Services />
              )}

              {activePage === "home" && activeSection === "section7" && (
                <Achievements />
              )}

              {activePage === "home" && activeSection === "section8" && (
                <Testimonials />
              )}

              {activePage === "home" && activeSection === "section9" && (
                <TestimonialsVideo />
              )}

              {activePage === "home" && activeSection === "section10" && (
                <FAQ />
              )}

              {activePage === "home" && activeSection === "section11" && (
                <Blogs />
              )}

              {activePage === "home" && activeSection === "section12" && (
                <HomeMeta />
              )}

              {activePage === "about" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "about-top" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("about-top")}
                  >
                    Top Heading Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "our-foundation"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("our-foundation")}
                  >
                    Our Foundation Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "vision" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("vision")}
                  >
                    Our Vision Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "pillar" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("pillar")}
                  >
                    Our Pillars Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "directors" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("directors")}
                  >
                    Directors Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "we-are" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("we-are")}
                  >
                    We Are Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "we-are-small"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("we-are-small")}
                  >
                    We Are Small Screen
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "aboutAchievement"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("aboutAchievement")}
                  >
                    Achievements
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "aboutBest" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("aboutBest")}
                  >
                    Best Choice
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "aboutSocial"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("aboutSocial")}
                  >
                    Social Media
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "globally" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("globally")}
                  >
                    Serving Globally
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "map" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("map")}
                  >
                    Map Iframe
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "fimage" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("fimage")}
                  >
                    Our Foundation Image
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "vimage" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("vimage")}
                  >
                    Our Vision Image
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "pillarimage"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("pillarimage")}
                  >
                    Pillar Image
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "pageMeta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("pageMeta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "about" && activeSection === "about-top" && (
                <AboutTop />
              )}

              {activePage === "about" && activeSection === "our-foundation" && (
                <OurFoundation />
              )}

              {activePage === "about" && activeSection === "vision" && (
                <Vision />
              )}
              {activePage === "about" &&
                activeSection === "aboutAchievement" && <AboutAchievement />}
              {activePage === "about" && activeSection === "pillar" && (
                <Pillars />
              )}

              {activePage === "about" && activeSection === "directors" && (
                <Directors />
              )}

              {activePage === "about" && activeSection === "we-are" && (
                <WeAre />
              )}

              {activePage === "about" && activeSection === "we-are-small" && (
                <WeAreSmall />
              )}

              {activePage === "about" && activeSection === "aboutBest" && (
                <BestChoice />
              )}

              {activePage === "about" && activeSection === "aboutSocial" && (
                <SocialMedia />
              )}

              {activePage === "about" && activeSection === "globally" && (
                <Globally />
              )}

              {activePage === "about" && activeSection === "map" && <Map />}

              {activePage === "about" && activeSection === "fimage" && (
                <FoundationImg />
              )}

              {activePage === "about" && activeSection === "vimage" && (
                <VisionImg />
              )}

              {activePage === "about" && activeSection === "pillarimage" && (
                <PillarsImg />
              )}

              {activePage === "about" && activeSection === "pageMeta" && (
                <AboutMeta />
              )}

              {activePage === "contact" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "contact-top"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("contact-top")}
                  >
                    Top Heading Section
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "page-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("page-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "express" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "express-content"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("express-content")}
                  >
                    Express Entry Content
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "express-meta"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("express-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "bcpnp" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "content" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("content")}
                  >
                    BCPNP Content
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "bcpnp-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("bcpnp-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "blogs" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "all-blogs" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("all-blogs")}
                  >
                    All Blogs
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "add-blog" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("add-blog")}
                  >
                    Add Blog
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "blogs-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("blogs-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "clb" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "clb-content"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("clb-content")}
                  >
                    Page Content
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "clb-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("clb-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "news" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "all-news" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("all-news")}
                  >
                    All News
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "add-news" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("add-news")}
                  >
                    Add News
                  </div>

                  <div
                    className={`${styles.section} ${
                      activeSection === "news-meta" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("news-meta")}
                  >
                    Page Meta
                  </div>
                </div>
              )}

              {activePage === "federal" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "Page-Content"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("Page-Content")}
                  >
                    Page Content
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "federal-meta"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("federal-meta")}
                  >
                    Federal Skilled Meta
                  </div>
                </div>
              )}

              {activePage === "transport" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "Transport" ? styles.activeSection : ""
                    }`}
                    onClick={() => handleSectionClick("Transport")}
                  >
                    Page Content
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "transport-meta"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("transport-meta")}
                  >
                    Transport Occupation Meta
                  </div>
                </div>
              )}

              {activePage === "category" && (
                <div className={styles.sections}>
                  <div
                    className={`${styles.section} ${
                      activeSection === "category-content"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("category-content")}
                  >
                    Page Content
                  </div>
                  <div
                    className={`${styles.section} ${
                      activeSection === "category-meta"
                        ? styles.activeSection
                        : ""
                    }`}
                    onClick={() => handleSectionClick("category-meta")}
                  >
                    Category Based Draws Meta
                  </div>
                </div>
              )}

              {activePage === "contact" && activeSection === "contact-top" && (
                <ContactTop />
              )}

              {activePage === "federal" && activeSection === "Page-Content" && (
                <FederalSkilled />
              )}

              {activePage === "federal" && activeSection === "federal-meta" && (
                <FederalMeta />
              )}

              {activePage === "express" &&
                activeSection === "express-content" && <ExpressEntry />}

              {activePage === "express" && activeSection === "express-meta" && (
                <ExpressMeta />
              )}

              {activePage === "bcpnp" && activeSection === "content" && (
                <BCPNP />
              )}

              {activePage === "bcpnp" && activeSection === "bcpnp-meta" && (
                <BCPNPMeta />
              )}

              {activePage === "category" &&
                activeSection === "category-content" && <CategoryBased />}

              {activePage === "category" &&
                activeSection === "category-meta" && <CategoryMeta />}

              {activePage === "transport" && activeSection === "Transport" && (
                <TransportOccupation />
              )}

              {activePage === "transport" &&
                activeSection === "transport-meta" && <TransportMeta />}

              {activePage === "contact" && activeSection === "page-meta" && (
                <ContactMeta />
              )}

              {activePage === "blogs" && activeSection === "all-blogs" && (
                <AllBlogs />
              )}

              {activePage === "blogs" && activeSection === "add-blog" && (
                <AddBlog />
              )}

              {activePage === "blogs" && activeSection === "blogs-meta" && (
                <BlogsMeta />
              )}

              {activePage === "news" && activeSection === "all-news" && (
                <AllNews />
              )}

              {activePage === "news" && activeSection === "add-news" && (
                <AddNews />
              )}

              {activePage === "news" && activeSection === "news-meta" && (
                <NewsMeta />
              )}

              {activePage === "clb" && activeSection === "clb-content" && (
                <CLB />
              )}

              {activePage === "clb" && activeSection === "clb-meta" && (
                <CLBMeta />
              )}

              {activePage === "privacy-policy" && <Privacy />}

              {activePage === "terms-and-conditions" && <Terms />}
            </div>
          </div>
        ) : (
          <>
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* Dashboard For Internal Pages Below */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}
            {/* ////////////////////////////////// */}

            <div className={styles.dashboard}>
              {paginationValue == "1" && (
                <div className={styles.leftPanel}>
                  <div className={styles.page} onClick={setMainPages}>
                    <p>{"<-"} Move To Main Pages</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "additional_documents"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("additional_documents")}
                  >
                    <p>Additional Documents Page</p>
                  </div>
                  <div
                    className={`${styles.page} ${
                      activePage === "adoption_page" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("adoption_page")}
                  >
                    <p>Adoption Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "agriculture_and_agri_food_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("agriculture_and_agri_food_page")
                    }
                  >
                    <p>Agriculture And Agri Food Occupation Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "agriculture_stream_lmia_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("agriculture_stream_lmia_page")
                    }
                  >
                    <p>Agriculture Stream LMIA Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "agri_food_pilot_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("agri_food_pilot_page")}
                  >
                    <p>Agri Food Pilot Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "bcpnp_page" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("bcpnp_page")}
                  >
                    <p>BCPNP Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "bridging_open_work_permit_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("bridging_open_work_permit_page")
                    }
                  >
                    <p>Bridging Open Work Permit LP Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "business_visitor_visa_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("business_visitor_visa_page")
                    }
                  >
                    <p>Business Visitor Visa Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "canadian_experience_class_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("canadian_experience_class_page")
                    }
                  >
                    <p>Canadian Experience Class Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "cby_page" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("cby_page")}
                  >
                    <p>Cby Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "change_college_program_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("change_college_program_page")
                    }
                  >
                    <p>Change College Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "category_based_express_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("category_based_express_page")
                    }
                  >
                    <p>Category Based Express Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "citizenship_page" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("citizenship_page")}
                  >
                    <p>Citizenship Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "common_law_partner_temporary_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("common_law_partner_temporary_page")
                    }
                  >
                    <p>Common Law Partner Temporary Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "common_law_partner_permanent_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("common_law_partner_permanent_page")
                    }
                  >
                    <p>Common Law Partner Permanent Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "common_law_partner_international_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("common_law_partner_international_page")
                    }
                  >
                    <p>Common Law Partner International Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "dependent_children_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("dependent_children_page")}
                  >
                    <p>Dependent Children Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "dual_intent_visa_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("dual_intent_visa_page")}
                  >
                    <p>Dual Intent Visa Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "entry_level_semi_skilled_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("entry_level_semi_skilled_page")
                    }
                  >
                    <p>Entry Level Semi Skilled Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "extensions_draft_page"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("extensions_draft_page")}
                  >
                    <p>Extensions Draft Page</p>
                  </div>

                  <div className={styles.paginationButtons}>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "1" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("1")}
                    >
                      1
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "2" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("2")}
                    >
                      2
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "3" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("3")}
                    >
                      3
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "4" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("4")}
                    >
                      4
                    </button>
                  </div>
                </div>
              )}

              {paginationValue == "2" && (
                <div className={styles.leftPanel}>
                  <div
                    className={`${styles.page} ${
                      activePage === "family_reunification"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("family_reunification")}
                  >
                    <p>Family Reunification Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "federal_skilled_trade_program"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("federal_skilled_trade_program")
                    }
                  >
                    <p>Federal Skilled Trade Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "federal_skilled_worker_program"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("federal_skilled_worker_program")
                    }
                  >
                    <p>Federal Skilled Worker Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "flag_poling" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("flag_poling")}
                  >
                    <p>Flag Poling Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "francophone" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("francophone")}
                  >
                    <p>Framcophone Mobility Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "french_tageted_draw"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("french_tageted_draw")}
                  >
                    <p>French Targeted Draw Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "global_stream_lmia"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("global_stream_lmia")}
                  >
                    <p>Global Stream LMIA Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "health_authorities_stream"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("health_authorities_stream")}
                  >
                    <p>Health Authorities Stream Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "healthcare_targated_draw"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("healthcare_targated_draw")}
                  >
                    <p>Healthcare Tageted Draws Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "humanitarian_compassionate"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("humanitarian_compassionate")
                    }
                  >
                    <p>Humanitarian Compassionate Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "in_home_caregiver"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("in_home_caregiver")}
                  >
                    <p>In Home Caregiver Program Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "inside_canada_caregiver"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("inside_canada_caregiver")}
                  >
                    <p>Inside Canada Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "international_graduate"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("international_graduate")}
                  >
                    <p>International Graduate Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "international_post_graduate"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("international_post_graduate")
                    }
                  >
                    <p>International Post Graduate Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "lmia_reviewed" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("lmia_reviewed")}
                  >
                    <p>LMIA Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "lonely_canadian" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("lonely_canadian")}
                  >
                    <p>Lonely Canadian Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "low_wage_lmia" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("low_wage_lmia")}
                  >
                    <p>Low Wage LMIA Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "non_sds" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("non_sds")}
                  >
                    <p>Non Sds Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "open_work_dependent"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("open_work_dependent")}
                  >
                    <p>Open Work Dependent Children Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "open_work_permit" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("open_work_permit")}
                  >
                    <p>Open Work Permit Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "open_work_permit_for_spousal"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("open_work_permit_for_spousal")
                    }
                  >
                    <p>Open Work Permit For Spousal Inland Page</p>
                  </div>

                  <div className={styles.paginationButtons}>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "1" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("1")}
                    >
                      1
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "2" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("2")}
                    >
                      2
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "3" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("3")}
                    >
                      3
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "4" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("4")}
                    >
                      4
                    </button>
                  </div>
                </div>
              )}

              {paginationValue == "3" && (
                <div className={styles.leftPanel}>
                  <div
                    className={`${styles.page} ${
                      activePage === "open_work_permit_vulnerable"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() =>
                      handlePageClick("open_work_permit_vulnerable")
                    }
                  >
                    <p>Open Work Permit Vulnerable Page</p>
                  </div>

                  <div
                    className={`${styles.page} ${
                      activePage === "orphan" ? styles.activePage : ""
                    }`}
                    onClick={() => handlePageClick("orphan")}
                  >
                    <p>Orphan Page</p>
                  </div>

                  <div className={styles.paginationButtons}>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "1" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("1")}
                    >
                      1
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "2" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("2")}
                    >
                      2
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "3" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("3")}
                    >
                      3
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "4" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("4")}
                    >
                      4
                    </button>
                  </div>
                </div>
              )}

              {paginationValue == "4" && (
                <div className={styles.leftPanel}>
                  <div
                    className={`${styles.page} ${
                      activePage === "additional_documents"
                        ? styles.activePage
                        : ""
                    }`}
                    onClick={() => handlePageClick("additional_documents")}
                  >
                    <p>Page Tab on 4th Page</p>
                  </div>

                  <div className={styles.paginationButtons}>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "1" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("1")}
                    >
                      1
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "2" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("2")}
                    >
                      2
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "3" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("3")}
                    >
                      3
                    </button>
                    <button
                      className={`${styles.paginationButton} ${
                        paginationValue == "4" ? styles.activePageButton : ""
                      }`}
                      onClick={() => setPaginationValue("4")}
                    >
                      4
                    </button>
                  </div>
                </div>
              )}

              <div className={styles.rightPanel}>
                {activePage === "bcpnp_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "bcpnp_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("bcpnp_page_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "bcpnp_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("bcpnp_page_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}
                {activePage === "additional_documents" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "additional_documents_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("additional_documents_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "additional_documents_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("additional_documents_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "bridging_open_work_permit_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "bridging_open_work_permit_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "bridging_open_work_permit_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "bridging_open_work_permit_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "bridging_open_work_permit_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}
                {activePage === "adoption_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "adoption_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("adoption_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "adoption_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("adoption_page_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}
                {activePage === "agriculture_and_agri_food_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "agriculture_and_agri_food_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_and_agri_food_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "agriculture_and_agri_food_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_and_agri_food_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "agriculture_stream_lmia_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "agriculture_stream_lmia_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "agriculture_stream_lmia_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "agriculture_stream_lmia_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("agriculture_stream_lmia_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "agri_food_pilot_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "agri_food_pilot_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("agri_food_pilot_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "agri_food_pilot_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("agri_food_pilot_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "business_visitor_visa_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "business_visitor_visa_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("business_visitor_visa_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "business_visitor_visa_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("business_visitor_visa_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "canadian_experience_class_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "canadian_experience_class_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "canadian_experience_class_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "canadian_experience_class_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "canadian_experience_class_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "cby_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "cby_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("cby_page_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "cby_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("cby_page_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "change_college_program_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "change_college_program_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "change_college_program_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "change_college_program_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("change_college_program_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "category_based_express_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "category_based_express_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "category_based_express_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "category_based_express_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("category_based_express_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "citizenship_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "citizenship_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("citizenship_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "citizenship_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("citizenship_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_temporary_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "common_law_partner_temporary_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_temporary_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "common_law_partner_temporary_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_temporary_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_permanent_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "common_law_partner_permanent_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_permanent_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "common_law_partner_permanent_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_permanent_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "dependent_children_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "dependent_children_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("dependent_children_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "dependent_children_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("dependent_children_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "dual_intent_visa_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "dual_intent_visa_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("dual_intent_visa_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "dual_intent_visa_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("dual_intent_visa_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "entry_level_semi_skilled_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "entry_level_semi_skilled_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "entry_level_semi_skilled_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "entry_level_semi_skilled_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("entry_level_semi_skilled_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "extensions_draft_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "extensions_draft_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("extensions_draft_page_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "extensions_draft_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("extensions_draft_page_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "common_law_partner_international_page" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "common_law_partner_international_page_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_international_page_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "common_law_partner_international_page_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "common_law_partner_international_page_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "family_reunification" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "family_reunification_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("family_reunification_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "family_reunification_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("family_reunification_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "federal_skilled_trade_program" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "federal_skilled_trade_program_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_trade_program_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "federal_skilled_trade_program_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("federal_skilled_trade_program_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "federal_skilled_worker_program" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection ===
                        "federal_skilled_worker_program_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_worker_program_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "federal_skilled_worker_program_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "federal_skilled_worker_program_meta"
                        )
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "flag_poling" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "flag_poling_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("flag_poling_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "flag_poling_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("flag_poling_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "francophone" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "francophone_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("francophone_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "francophone_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("francophone_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "french_tageted_draw" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "french_tageted_draw_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("french_tageted_draw_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "french_tageted_draw_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("french_tageted_draw_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "global_stream_lmia" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "global_stream_lmia_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("global_stream_lmia_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "global_stream_lmia_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("global_stream_lmia_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "health_authorities_stream" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "health_authorities_stream_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("health_authorities_stream_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "health_authorities_stream_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("health_authorities_stream_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "healthcare_targated_draw" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "healthcare_targated_draw_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("healthcare_targated_draw_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "healthcare_targated_draw_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("healthcare_targated_draw_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "humanitarian_compassionate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "humanitarian_compassionate_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("humanitarian_compassionate_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "humanitarian_compassionate_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("humanitarian_compassionate_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "in_home_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "in_home_caregiver_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("in_home_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "in_home_caregiver_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("in_home_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "inside_canada_caregiver" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "inside_canada_caregiver_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("inside_canada_caregiver_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "inside_canada_caregiver_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("inside_canada_caregiver_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "international_graduate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "international_graduate_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("international_graduate_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "international_graduate_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("international_graduate_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "international_post_graduate" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "international_post_graduate_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "international_post_graduate_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "international_post_graduate_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("international_post_graduate_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "lmia_reviewed" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "lmia_reviewed_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("lmia_reviewed_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "lmia_reviewed_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("lmia_reviewed_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "lonely_canadian" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "lonely_canadian_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("lonely_canadian_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "lonely_canadian_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("lonely_canadian_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "low_wage_lmia" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "low_wage_lmia_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("low_wage_lmia_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "low_wage_lmia_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("low_wage_lmia_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "non_sds" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "non_sds_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("non_sds_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "non_sds_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("non_sds_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "open_work_dependent" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "open_work_dependent_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("open_work_dependent_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "open_work_dependent_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("open_work_dependent_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "open_work_permit_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_content")
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "open_work_permit_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit_for_spousal" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "open_work_permit_for_spousal_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "open_work_permit_for_spousal_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "open_work_permit_for_spousal_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_for_spousal_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "open_work_permit_vulnerable" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "open_work_permit_vulnerable_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick(
                          "open_work_permit_vulnerable_content"
                        )
                      }
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "open_work_permit_vulnerable_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() =>
                        handleSectionClick("open_work_permit_vulnerable_meta")
                      }
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                {activePage === "orphan" && (
                  <div className={styles.sections}>
                    <div
                      className={`${styles.section} ${
                        activeSection === "orphan_content"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("orphan_content")}
                    >
                      Page Content
                    </div>

                    <div
                      className={`${styles.section} ${
                        activeSection === "orphan_meta"
                          ? styles.activeSection
                          : ""
                      }`}
                      onClick={() => handleSectionClick("orphan_meta")}
                    >
                      Page Meta
                    </div>
                  </div>
                )}

                <div className={styles.roshiSection}>
                  {activePage === "bcpnp_page" &&
                    activeSection === "bcpnp_page_content" && (
                      <BcpnpPageContent />
                    )}
                  {activePage === "bcpnp_page" &&
                    activeSection === "bcpnp_page_meta" && <BcpnpPageMeta />}
                  {activePage === "additional_documents" &&
                    activeSection === "additional_documents_content" && (
                      <AdditionalDocument />
                    )}

                  {activePage === "additional_documents" &&
                    activeSection === "additional_documents_meta" && (
                      <AdditionalDocumentMeta />
                    )}
                  {activePage === "adoption_page" &&
                    activeSection === "adoption_page_content" && <Adoption />}
                  {activePage === "adoption_page" &&
                    activeSection === "adoption_page_meta" && <AdoptionMeta />}

                  {activePage === "agriculture_and_agri_food_page" &&
                    activeSection ===
                      "agriculture_and_agri_food_page_content" && (
                      <AgricultureAndAgriFoodPageContent />
                    )}
                  {activePage === "agriculture_and_agri_food_page" &&
                    activeSection === "agriculture_and_agri_food_page_meta" && (
                      <AgricultureAndAgriFoodMeta />
                    )}

                  {activePage === "agriculture_stream_lmia_page" &&
                    activeSection ===
                      "agriculture_stream_lmia_page_content" && (
                      <AgricultureStreamLMIAContent />
                    )}
                  {activePage === "agriculture_stream_lmia_page" &&
                    activeSection === "agriculture_stream_lmia_page_meta" && (
                      <AgricultureStreamLMIAMeta />
                    )}

                  {activePage === "agri_food_pilot_page" &&
                    activeSection === "agri_food_pilot_page_content" && (
                      <AgriFoodPilotProgramContent />
                    )}
                  {activePage === "agri_food_pilot_page" &&
                    activeSection === "agri_food_pilot_page_meta" && (
                      <AgriFoodPilotProgramMeta />
                    )}

                  {activePage === "bridging_open_work_permit_page" &&
                    activeSection ===
                      "bridging_open_work_permit_page_content" && (
                      <BridgingOpenWorkPermitLPContent />
                    )}
                  {activePage === "bridging_open_work_permit_page" &&
                    activeSection === "bridging_open_work_permit_page_meta" && (
                      <BridgingOpenWorkPermitLPMeta />
                    )}

                  {activePage === "business_visitor_visa_page" &&
                    activeSection === "business_visitor_visa_page_content" && (
                      <BusinessVisitorVisaContent />
                    )}
                  {activePage === "business_visitor_visa_page" &&
                    activeSection === "business_visitor_visa_page_meta" && (
                      <BusinessVisitorVisaMeta />
                    )}

                  {activePage === "canadian_experience_class_page" &&
                    activeSection ===
                      "canadian_experience_class_page_content" && (
                      <CanadianExperienceClassContent />
                    )}
                  {activePage === "canadian_experience_class_page" &&
                    activeSection === "canadian_experience_class_page_meta" && (
                      <CanadianExperienceClassMeta />
                    )}

                  {activePage === "cby_page" &&
                    activeSection === "cby_page_content" && <CbyContent />}
                  {activePage === "cby_page" &&
                    activeSection === "cby_page_meta" && <CbyMeta />}

                  {activePage === "change_college_program_page" &&
                    activeSection === "change_college_program_page_content" && (
                      <ChangeCollegeProgramContent />
                    )}
                  {activePage === "change_college_program_page" &&
                    activeSection === "change_college_program_page_meta" && (
                      <ChangeCollegeProgramMeta />
                    )}

                  {activePage === "category_based_express_page" &&
                    activeSection === "category_based_express_page_content" && (
                      <CategoryBasedExpressContent />
                    )}
                  {activePage === "category_based_express_page" &&
                    activeSection === "category_based_express_page_meta" && (
                      <CategoryBasedExpressMeta />
                    )}

                  {activePage === "citizenship_page" &&
                    activeSection === "citizenship_page_content" && (
                      <CitizenshipContent />
                    )}
                  {activePage === "citizenship_page" &&
                    activeSection === "citizenship_page_meta" && (
                      <CitizenshipMeta />
                    )}

                  {activePage === "common_law_partner_temporary_page" &&
                    activeSection ===
                      "common_law_partner_temporary_page_content" && (
                      <CommonLawPartnerTemporaryContent />
                    )}
                  {activePage === "common_law_partner_temporary_page" &&
                    activeSection ===
                      "common_law_partner_temporary_page_meta" && (
                      <CommonLawPartnerTemporaryContentMeta />
                    )}

                  {activePage === "common_law_partner_permanent_page" &&
                    activeSection ===
                      "common_law_partner_permanent_page_content" && (
                      <CommonLawPartnerPermanentContent />
                    )}
                  {activePage === "common_law_partner_permanent_page" &&
                    activeSection ===
                      "common_law_partner_permanent_page_meta" && (
                      <CommonLawPartnerPermanentContentMeta />
                    )}

                  {activePage === "dependent_children_page" &&
                    activeSection === "dependent_children_page_content" && (
                      <DependentChildrenContent />
                    )}
                  {activePage === "dependent_children_page" &&
                    activeSection === "dependent_children_page_meta" && (
                      <DependentChildrenMeta />
                    )}

                  {activePage === "dual_intent_visa_page" &&
                    activeSection === "dual_intent_visa_page_content" && (
                      <DualIntentVisaPageContent />
                    )}
                  {activePage === "dual_intent_visa_page" &&
                    activeSection === "dual_intent_visa_page_meta" && (
                      <DualIntentVisaMeta />
                    )}

                  {activePage === "entry_level_semi_skilled_page" &&
                    activeSection ===
                      "entry_level_semi_skilled_page_content" && (
                      <EntryLevelSemiSkilledContent />
                    )}
                  {activePage === "entry_level_semi_skilled_page" &&
                    activeSection === "entry_level_semi_skilled_page_meta" && (
                      <EntryLevelSemiSkilledMeta />
                    )}

                  {activePage === "extensions_draft_page" &&
                    activeSection === "extensions_draft_page_content" && (
                      <ExtensionsDraftContent />
                    )}
                  {activePage === "extensions_draft_page" &&
                    activeSection === "extensions_draft_page_meta" && (
                      <ExtensionsDraftMeta />
                    )}

                  {activePage === "common_law_partner_international_page" &&
                    activeSection ===
                      "common_law_partner_international_page_content" && (
                      <CommonLawPartnerInternationalContent />
                    )}
                  {activePage === "common_law_partner_international_page" &&
                    activeSection ===
                      "common_law_partner_international_page_meta" && (
                      <CommonLawPartnerInternationalMeta />
                    )}

                  {activePage === "family_reunification" &&
                    activeSection === "family_reunification_content" && (
                      <FamilyReunificationContent />
                    )}
                  {activePage === "family_reunification" &&
                    activeSection === "family_reunification_meta" && (
                      <FamilyReunificationMeta />
                    )}

                  {activePage === "federal_skilled_trade_program" &&
                    activeSection ===
                      "federal_skilled_trade_program_content" && (
                      <FederalSkilledTradeProgramContent />
                    )}
                  {activePage === "federal_skilled_trade_program" &&
                    activeSection === "federal_skilled_trade_program_meta" && (
                      <FederalSkilledTradeProgramMeta />
                    )}

                  {activePage === "federal_skilled_worker_program" &&
                    activeSection ===
                      "federal_skilled_worker_program_content" && (
                      <FederalSkilledWorkerProgramContent />
                    )}
                  {activePage === "federal_skilled_worker_program" &&
                    activeSection === "federal_skilled_worker_program_meta" && (
                      <FederalSkilledWorkerProgramMeta />
                    )}

                  {activePage === "flag_poling" &&
                    activeSection === "flag_poling_content" && (
                      <FlagPolingContent />
                    )}
                  {activePage === "flag_poling" &&
                    activeSection === "flag_poling_meta" && <FlagPolingMeta />}

                  {activePage === "francophone" &&
                    activeSection === "francophone_content" && (
                      <FrancophoneContent />
                    )}
                  {activePage === "francophone" &&
                    activeSection === "francophone_meta" && <FrancophoneMeta />}

                  {activePage === "french_tageted_draw" &&
                    activeSection === "french_tageted_draw_content" && (
                      <FrenchTargetedDrawContent />
                    )}
                  {activePage === "french_tageted_draw" &&
                    activeSection === "french_tageted_draw_meta" && (
                      <FrenchTargetedDrawMeta />
                    )}

                  {activePage === "global_stream_lmia" &&
                    activeSection === "global_stream_lmia_content" && (
                      <GlobalStreamLMIAContent />
                    )}
                  {activePage === "global_stream_lmia" &&
                    activeSection === "global_stream_lmia_meta" && (
                      <GlobalStreamLMIAMeta />
                    )}

                  {activePage === "health_authorities_stream" &&
                    activeSection === "health_authorities_stream_content" && (
                      <HealthAuthoritiesStreamContent />
                    )}
                  {activePage === "health_authorities_stream" &&
                    activeSection === "health_authorities_stream_meta" && (
                      <HealthAuthoritiesStreamMeta />
                    )}

                  {activePage === "healthcare_targated_draw" &&
                    activeSection === "healthcare_targated_draw_content" && (
                      <HealthcareTargetedDrawContent />
                    )}
                  {activePage === "healthcare_targated_draw" &&
                    activeSection === "healthcare_targated_draw_meta" && (
                      <HealthcareTargetedDrawMeta />
                    )}

                  {activePage === "humanitarian_compassionate" &&
                    activeSection === "humanitarian_compassionate_content" && (
                      <HumanPageContent />
                    )}
                  {activePage === "humanitarian_compassionate" &&
                    activeSection === "humanitarian_compassionate_meta" && (
                      <HumanContent />
                    )}

                  {activePage === "in_home_caregiver" &&
                    activeSection === "in_home_caregiver_content" && (
                      <InCaregiverContent />
                    )}
                  {activePage === "in_home_caregiver" &&
                    activeSection === "in_home_caregiver_meta" && (
                      <InCaregiverMeta />
                    )}

                  {activePage === "inside_canada_caregiver" &&
                    activeSection === "inside_canada_caregiver_content" && (
                      <InsideCanadaContent />
                    )}
                  {activePage === "inside_canada_caregiver" &&
                    activeSection === "inside_canada_caregiver_meta" && (
                      <InsideCanadaMeta />
                    )}

                  {activePage === "international_graduate" &&
                    activeSection === "international_graduate_content" && (
                      <InternationalGraduateContent />
                    )}
                  {activePage === "international_graduate" &&
                    activeSection === "international_graduate_meta" && (
                      <InternationalGraduateMeta />
                    )}

                  {activePage === "international_post_graduate" &&
                    activeSection === "international_post_graduate_content" && (
                      <InternationalPostGraduateContent />
                    )}
                  {activePage === "international_post_graduate" &&
                    activeSection === "international_post_graduate_meta" && (
                      <InternationalPostGraduateMeta />
                    )}

                  {activePage === "lmia_reviewed" &&
                    activeSection === "lmia_reviewed_content" && (
                      <LMIAReviewedContent />
                    )}
                  {activePage === "lmia_reviewed" &&
                    activeSection === "lmia_reviewed_meta" && (
                      <LMIAReviewedMeta />
                    )}

                  {activePage === "lonely_canadian" &&
                    activeSection === "lonely_canadian_content" && (
                      <LonelyCanadianContent />
                    )}
                  {activePage === "lonely_canadian" &&
                    activeSection === "lonely_canadian_meta" && (
                      <LonelyCanadianMeta />
                    )}

                  {activePage === "low_wage_lmia" &&
                    activeSection === "low_wage_lmia_content" && (
                      <LowWageLMIAContent />
                    )}
                  {activePage === "low_wage_lmia" &&
                    activeSection === "low_wage_lmia_meta" && (
                      <LowWageLMIAMeta />
                    )}

                  {activePage === "non_sds" &&
                    activeSection === "non_sds_content" && <NonSdsContent />}
                  {activePage === "non_sds" &&
                    activeSection === "non_sds_meta" && <NonSdsMeta />}

                  {activePage === "open_work_dependent" &&
                    activeSection === "open_work_dependent_content" && (
                      <OpenWorkCanadaContent />
                    )}
                  {activePage === "open_work_dependent" &&
                    activeSection === "open_work_dependent_meta" && (
                      <OpenWorkCanadaMeta />
                    )}

                  {activePage === "open_work_permit" &&
                    activeSection === "open_work_permit_content" && (
                      <OpenWorkPermitContent />
                    )}
                  {activePage === "open_work_permit" &&
                    activeSection === "open_work_permit_meta" && (
                      <OpenWorkPermitMeta />
                    )}

                  {activePage === "open_work_permit_for_spousal" &&
                    activeSection ===
                      "open_work_permit_for_spousal_content" && (
                      <OpenWorkForSpousalInlandContent />
                    )}
                  {activePage === "open_work_permit_for_spousal" &&
                    activeSection === "open_work_permit_for_spousal_meta" && (
                      <OpenWorkForSpousalInlandMeta />
                    )}

                  {activePage === "open_work_permit_vulnerable" &&
                    activeSection === "open_work_permit_vulnerable_content" && (
                      <OpenWorkVulnerableContent />
                    )}
                  {activePage === "open_work_permit_vulnerable" &&
                    activeSection === "open_work_permit_vulnerable_meta" && (
                      <OpenWorkVulnerableMeta />
                    )}

                  {activePage === "orphan" &&
                    activeSection === "orphan_content" && <OrphanContent />}
                  {activePage === "orphan" &&
                    activeSection === "orphan_meta" && <OrphanMeta />}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Admin;
