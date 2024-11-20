import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Navbar1.module.css";
import { ReactComponent as IconGear } from "../assets/gearIcon.svg";
import { ReactComponent as RightArrow } from "../assets/rightArrow.svg";
import { ReactComponent as PhoneIcon } from "../assets/phoneIcon.svg";
import BrightlightBlueLogo from "../assets/brlightlight-icon.webp";
import LocationIcon from "../assets/location-white.png";
import EmailIcon from "../assets/mail-white.png";
import EmailBlue from "../assets/mailBlue.png";
import LocationBlue from "../assets/locationBlue.png";
import { ReactComponent as Search } from "../assets/search.svg";

import { ReactComponent as TikTokIcon } from "../assets/tiktok.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as YouTubeIcon } from "../assets/youtube.svg";
import Facebookblue from "../assets/facebookBlue.png";
import Youtubeblue from "../assets/youtubeBlue.png";
import Instagramblue from "../assets/instagramBlue.png";
import Linkedinblue from "../assets/linkedinBlue.png";
import Tiktokblue from "../assets/tiktokBlue.png";
import hamBurgerIconWhite from "../assets/hamBurgerIconWhite.svg";
import hamBurgerIconBlue from "../assets/hamBurgerIconBlue.svg";
import whiteLogo from "../assets/brightlight-logo-white.png";

const Navbar3 = (props) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (inputValue.trim()) {
      // Redirect using window.location
      window.location.href = `/search?q=${encodeURIComponent(
        inputValue.trim()
      )}`;
    }
  };
  const [isFederalSkilledOpen, setIsFederalSkilledOpen] = useState(false);
  const [isFederalSkilledProgramOpen, setIsFederalSkilledProgramOpen] =
    useState(false);

  const [isFederalSkilledOpenTwo, setIsFederalSkilledOpenTwo] = useState(false);
  const [isFederalSkilledProgramOpenTwo, setIsFederalSkilledProgramOpenTwo] =
    useState(false);

  const [isFederalSkilledOpenThree, setIsFederalSkilledOpenThree] =
    useState(false);
  const [isFederalSkilledProgramOpenFour, setIsFederalSkilledProgramOpenFour] =
    useState(false);

  const [isFederalSkilledProgramOpenFive, setIsFederalSkilledProgramOpenFive] =
    useState(false);

  const [isFederalSkilledProgramOpenSix, setIsFederalSkilledProgramOpenSix] =
    useState(false);

  const [
    isFederalSkilledProgramOpenSeven,
    setIsFederalSkilledProgramOpenSeven,
  ] = useState(false);

  const [
    isFederalSkilledProgramOpenEight,
    setIsFederalSkilledProgramOpenEight,
  ] = useState(false);

  const [isFederalSkilledProgramOpenNine, setIsFederalSkilledProgramOpenNine] =
    useState(false);

  const [isFederalSkilledProgramOpenTen, setIsFederalSkilledProgramOpenTen] =
    useState(false);

  const [isFederalSkilledProgramOpenEl, setIsFederalSkilledProgramOpenEl] =
    useState(false);

  const [isFederalSkilledProgramOpenTw, setIsFederalSkilledProgramOpenTw] =
    useState(false);

  const [isFederalSkilledProgramOpenTh, setIsFederalSkilledProgramOpenTh] =
    useState(false);

  const [isFederalSkilledProgramOpenFt, setIsFederalSkilledProgramOpenFt] =
    useState(false);

  const toggleFederalSkilled = (e) => {
    e.preventDefault();
    setIsFederalSkilledOpen(!isFederalSkilledOpen);
  };

  const toggleFederalSkilledProgram = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpen(!isFederalSkilledProgramOpen);
  };
  const toggleFederalSkilledProgramTwo = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenTwo(!isFederalSkilledProgramOpenTwo);
  };
  const toggleFederalSkilledProgramThree = (e) => {
    e.preventDefault();
    setIsFederalSkilledOpenThree(!isFederalSkilledOpenThree);
  };
  const toggleFederalSkilledProgramFour = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenFour(!isFederalSkilledProgramOpenFour);
  };
  const toggleFederalSkilledProgramFive = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenFive(!isFederalSkilledProgramOpenFive);
  };
  const toggleFederalSkilledProgramSix = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenSix(!isFederalSkilledProgramOpenSix);
  };
  const toggleFederalSkilledProgramSeven = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenSeven(!isFederalSkilledProgramOpenSeven);
  };
  const toggleFederalSkilledProgramEight = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenEight(!isFederalSkilledProgramOpenEight);
  };
  const toggleFederalSkilledProgramNine = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenNine(!isFederalSkilledProgramOpenNine);
  };
  const toggleFederalSkilledProgramTen = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenTen(!isFederalSkilledProgramOpenTen);
  };

  const toggleFederalSkilledProgramEl = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenEl(!isFederalSkilledProgramOpenEl);
  };
  const toggleFederalSkilledProgramTw = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenTw(!isFederalSkilledProgramOpenTw);
  };
  const toggleFederalSkilledProgramTh = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenTh(!isFederalSkilledProgramOpenTh);
  };
  const toggleFederalSkilledProgramFt = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpenFt(!isFederalSkilledProgramOpenFt);
  };
  const { showBlue } = props;
  let [hideContactNavbar, setHideContactNavbar] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showCalculatorsDropdown, setShowCalculatorsDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  let [showNestedDropdown, setShowNestedDropdown] = useState(false);
  let [showNestedDropdown2, setShowNestedDropdown2] = useState(false);
  let [showNestedDropdown3, setShowNestedDropdown3] = useState(false);
  let [showNestedDropdown4, setShowNestedDropdown4] = useState(false);
  let [showNestedDropdown5, setShowNestedDropdown5] = useState(false);
  let [showNestedDropdown6, setShowNestedDropdown6] = useState(false);
  let [showNestedDropdown7, setShowNestedDropdown7] = useState(false);
  let [showNestedDropdown8, setShowNestedDropdown8] = useState(false);
  let [showNestedDropdown9, setShowNestedDropdown9] = useState(false);
  let [showNestedDropdown10, setShowNestedDropdown10] = useState(false);
  let [showNestedDropdown11, setShowNestedDropdown11] = useState(false);
  let [showNestedDropdown12, setShowNestedDropdown12] = useState(false);
  let [showNestedDropdown13, setShowNestedDropdown13] = useState(false);
  let [doubleNested1, setDoubleNested1] = useState(false);
  let [doubleNested2, setDoubleNested2] = useState(false);
  let [doubleNested3, setDoubleNested3] = useState(false);
  let [doubleNested4, setDoubleNested4] = useState(false);
  let [doubleNested7, setDoubleNested7] = useState(false);
  let [showHamburgerServicesDropdown, setShowHamburgerServicesDropdown] =
    useState(false);
  const dropdownRef = useRef(null);
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setShowHamburgerServicesDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  useEffect(() => {
    let handleScroll = () => {
      if (window.innerWidth > 1080) {
        if (window.scrollY > 150) {
          setHideContactNavbar(true);
        } else {
          setHideContactNavbar(false);
        }
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  const [isTemporaryResidencyOpen, setTemporaryResidencyOpen] = useState(false);
  const [isVisitorVisaOpen, setVisitorVisaOpen] = useState(false);
  const [isStudentVisaOpen, setStudentVisaOpen] = useState(false);
  const [isOutsideCanadaOpen, setOutsideCanadaOpen] = useState(false);
  const [isInsideCanadaOpen, setInsideCanadaOpen] = useState(false);
  const [isFamilyReunificationOpen, setFamilyReunificationOpen] =
    useState(false);
  const [isSpousalPermitOpen, setSpousalPermitOpen] = useState(false);

  const toggleTemporaryResidency = () =>
    setTemporaryResidencyOpen(!isTemporaryResidencyOpen);
  const toggleVisitorVisa = () => setVisitorVisaOpen(!isVisitorVisaOpen);
  const toggleStudentVisa = () => setStudentVisaOpen(!isStudentVisaOpen);
  const toggleOutsideCanada = () => setOutsideCanadaOpen(!isOutsideCanadaOpen);
  const toggleInsideCanada = () => setInsideCanadaOpen(!isInsideCanadaOpen);
  const toggleFamilyReunification = () =>
    setFamilyReunificationOpen(!isFamilyReunificationOpen);
  const toggleSpousalPermit = () => setSpousalPermitOpen(!isSpousalPermitOpen);
  const [isCalculatorsOpen, setCalculatorsOpen] = useState(false);

  const toggleCalculators = (e) => {
    e.preventDefault();
    setCalculatorsOpen(!isCalculatorsOpen);
  };

  // Adding your required states for "Super Visa" and "Dual Intent Visa" subheadings
  const [doubleNestedVisitorVisa, setDoubleNestedVisitorVisa] = useState(false);
  const [doubleNestedSpousalPermit, setDoubleNestedSpousalPermit] =
    useState(false);

  const [doubleNestedOutsideCanada, setDoubleNestedOutsideCanada] =
    useState(false);
  const [doubleNestedInsideCanada, setDoubleNestedInsideCanada] =
    useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.firstNavbar}>
          <div className={styles.calculatorIcon}>
            <IconGear className={styles.iconGearIcon} width={25} height={25} />
            <p onClick={() => (window.location.href = "/immigration-tools")}>
              Immigration Tools
            </p>
            <RightArrow
              className={styles.RightArrowIcon}
              width={10}
              height={10}
            />
          </div>
          <div className={styles.ancor}>
            <div className={styles.relativeDiv}>
              <a
                href="/about-us"
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}
              >
                ABOUT
              </a>
            </div>
            <a href="/contact-us">CONTACT</a>
            <div className={styles.mobileIcon}>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 24 24"
                className="w-3 md:w-5"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
              </svg>
              <p>+1 (604) 503 3734</p>
            </div>
          </div>
        </div>

        <div
          className={`${styles.bottomSectionNavbar} ${
            hideContactNavbar ? styles.makeNavbarFixed : null
          }`}
        >
          <div className={styles.secondNavbar}>
            <a href="/" className={`${styles.logo} ${styles.logoDesktop}`}>
              <img src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
            </a>

            {showBlue ? (
              <a href="/" className={`${styles.logo} ${styles.logoMobile}`}>
                <img src={BrightlightBlueLogo} alt="Brightlight Blue Logo" />
              </a>
            ) : (
              <a href="/" className={`${styles.logo} ${styles.logoMobile}`}>
                <img src={whiteLogo} alt="Brightlight Blue Logo" />
              </a>
            )}

            <div className={styles.mainNavbar}>
              <a href="/" className={styles.sidebarLink}>
                HOME
              </a>
              <div className={styles.relativeDiv}>
                <a
                  href="/more-services"
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  SERVICES
                </a>
                <div
                  className={`${styles.servicesDropdown} ${
                    showServicesDropdown ? styles.showServicesDropdown : null
                  }`}
                  onMouseEnter={() => setShowServicesDropdown(true)}
                  onMouseLeave={() => setShowServicesDropdown(false)}
                >
                  {/* // */}
                  {/* // */}
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="/permanent-residency"
                      onMouseEnter={() => setShowNestedDropdown3(true)}
                      onMouseLeave={() => setShowNestedDropdown3(false)}
                    >
                      Permanent Residency
                    </a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown3 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => {
                        setShowNestedDropdown3(true);
                      }}
                      onMouseLeave={() => {
                        setShowNestedDropdown3(false);
                      }}
                    >
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/express-entry"
                          onMouseEnter={() => setDoubleNested3(true)}
                          onMouseLeave={() => setDoubleNested3(false)}
                        >
                          Express Entry
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested3 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested3(true)}
                          onMouseLeave={() => setDoubleNested3(false)}
                        >
                          <a href="/federal-skilled-worker-program">FSWP</a>
                          <a href="/federal-skilled-trades-program">FSTP</a>
                          <a href="/canadian-experience-class">CEC</a>
                          <div
                            className={`${styles.relativeDiv} ${styles.flex}`}
                          >
                            <a
                              href="/category-based"
                              onMouseEnter={() => setShowNestedDropdown7(true)}
                              onMouseLeave={() => setShowNestedDropdown7(false)}
                            >
                              Category Based
                            </a>
                            <div
                              className={`${styles.doubleNested} ${
                                showNestedDropdown7 ? styles.showNested : null
                              }`}
                              onMouseEnter={() => setShowNestedDropdown7(true)}
                              onMouseLeave={() => setShowNestedDropdown7(false)}
                            >
                              <a href="/french-targeted-draw">
                                French Language Proficiency
                              </a>
                              <a href="/healthcare-targeted-draw">
                                Healthcare Occupations
                              </a>
                              <a href="/stem-targeted-draw">STEM Occupations</a>
                              <a href="/trade-occupation-targeted-draw">
                                Trade Occupations
                              </a>
                              <a href="/transport-occupation-targeted-draw">
                                Transport Occupation Targeted Draws
                              </a>
                              <a href="/agriculture-agri-food-occupation">
                                Agriculture and Agri-Food Occupation
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* // */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/pilot-programs"
                          onMouseEnter={() => setDoubleNested4(true)}
                          onMouseLeave={() => setDoubleNested4(false)}
                        >
                          Pilot Program
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested4 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested4(true)}
                          onMouseLeave={() => setDoubleNested4(false)}
                        >
                          <a href="/agri-food-pilot-program">Agri Food Pilot</a>
                        </div>
                      </div>

                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/pnp"
                          onMouseEnter={() => setDoubleNested7(true)}
                          onMouseLeave={() => setDoubleNested7(false)}
                        >
                          PNP
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested7 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested7(true)}
                          onMouseLeave={() => setDoubleNested7(false)}
                        >
                          <div
                            className={`${styles.relativeDiv} ${styles.flex}`}
                          >
                            <a
                              href="/bc-pnp"
                              onMouseEnter={() => setShowNestedDropdown(true)}
                              onMouseLeave={() => setShowNestedDropdown(false)}
                            >
                              BCPNP
                            </a>
                            <div
                              className={`${styles.doubleNested} ${
                                showNestedDropdown ? styles.showNested : null
                              }`}
                              onMouseEnter={() => setShowNestedDropdown(true)}
                              onMouseLeave={() => setShowNestedDropdown(false)}
                            >
                              <a href="/skilled-worker-stream">
                                Skilled Worker
                              </a>
                              <a href="/health-authority-stream">
                                Health Authority
                              </a>
                              <a href="/entry-level-semi-skilled">
                                Entry Level and Semi-Skilled (ELSS)
                              </a>
                              <a href="/international-graduate-program">
                                International Graduate
                              </a>
                              <a href="/international-post-graduate-program">
                                International Post-Graduate
                              </a>
                              <a href="/priorities-program">
                                Program Priorities
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <a href="/rnip">RNIP</a>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="/temporary-resident"
                      onMouseEnter={() => setShowNestedDropdown2(true)}
                      onMouseLeave={() => setShowNestedDropdown2(false)}
                    >
                      Temporary Residency
                    </a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown2 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => setShowNestedDropdown2(true)}
                      onMouseLeave={() => setShowNestedDropdown2(false)}
                    >
                      {/* Super Visa */}
                      <a href="/super-visa">Super Visa</a>

                      {/* Visitor Visa with subheadings */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/visitor-visa"
                          onMouseEnter={() => setDoubleNestedVisitorVisa(true)}
                          onMouseLeave={() => setDoubleNestedVisitorVisa(false)}
                        >
                          Visitor Visa
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNestedVisitorVisa ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNestedVisitorVisa(true)}
                          onMouseLeave={() => setDoubleNestedVisitorVisa(false)}
                        >
                          <a href="/business-visitor-visa">
                            Business Visitor Visa
                          </a>
                          <a href="/dual-intent-visa">Dual Intent Visa</a>
                          {/* <a href="/super-visa">Super Visa</a> */}
                          <a href="/reconsideration">
                            Reconsideration for Refusal
                          </a>
                        </div>
                      </div>

                      <a href="/temporary-resident-permit-draft">
                        Temporary Resident Permits
                      </a>

                      {/* Spousal Permit with subheadings */}

                      {/* Restoration */}
                      <a href="/restoration-status-draft">Restoration</a>
                      <a href="/extensions-draft">Extend Stay</a>
                      <a href="/flagpoling">Flagpoling</a>

                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/spousal-open-work-permit"
                          onMouseEnter={() =>
                            setDoubleNestedSpousalPermit(true)
                          }
                          onMouseLeave={() =>
                            setDoubleNestedSpousalPermit(false)
                          }
                        >
                          Spousal Open Work Permit
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNestedSpousalPermit ? styles.showNested : null
                          }`}
                          onMouseEnter={() =>
                            setDoubleNestedSpousalPermit(true)
                          }
                          onMouseLeave={() =>
                            setDoubleNestedSpousalPermit(false)
                          }
                        >
                          <a href="/common-law-partner-temporary">
                            Open Work Permit - For Spouse of Worker
                          </a>
                          <a href="/cby">
                            Open Work Permit - For Spouse of Student
                          </a>
                          <a href="/open-work-permit-for-spouse-inland">
                            PR Open Work Permit, Inland
                          </a>
                          <a href="/francophone-mobility-program">
                            Francophone Mobility Program
                          </a>
                          {/* <a href="/cby">Cby</a> */}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="/student-visa"
                      onMouseEnter={() => setShowNestedDropdown6(true)}
                      onMouseLeave={() => setShowNestedDropdown6(false)}
                    >
                      Student Visa
                    </a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown6 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => setShowNestedDropdown6(true)}
                      onMouseLeave={() => setShowNestedDropdown6(false)}
                    >
                      {/* Outside Canada with subheadings */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/outside-canada"
                          onMouseEnter={() =>
                            setDoubleNestedOutsideCanada(true)
                          }
                          onMouseLeave={() =>
                            setDoubleNestedOutsideCanada(false)
                          }
                        >
                          Outside Canada
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNestedOutsideCanada ? styles.showNested : null
                          }`}
                          onMouseEnter={() =>
                            setDoubleNestedOutsideCanada(true)
                          }
                          onMouseLeave={() =>
                            setDoubleNestedOutsideCanada(false)
                          }
                        >
                          <a href="/sds">SDS</a>
                          <a href="/non-sds">NON SDS</a>
                        </div>
                      </div>

                      {/* Inside Canada with subheadings */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/inside-canada"
                          onMouseEnter={() => setDoubleNestedInsideCanada(true)}
                          onMouseLeave={() =>
                            setDoubleNestedInsideCanada(false)
                          }
                        >
                          Inside Canada
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNestedInsideCanada ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNestedInsideCanada(true)}
                          onMouseLeave={() =>
                            setDoubleNestedInsideCanada(false)
                          }
                        >
                          <a href="/visitor-to-student">Visitor to Student</a>
                          <a href="/change-college-program">DLI Change</a>
                          {/* <a href="#">Admission</a> */}
                          {/* <a href="#">Transfer DLI</a> */}
                        </div>
                      </div>

                      {/* Other menu items */}
                      <a href="/study-permit-minors">Study Permit For Minor</a>
                    </div>
                  </div>
                  {/*  */}
                  {/* // */}

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="/family-reunification-sponsorship"
                      onMouseEnter={() => setShowNestedDropdown4(true)}
                      onMouseLeave={() => setShowNestedDropdown4(false)}
                    >
                      Family Reunification & Sponsorship
                    </a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown4 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => setShowNestedDropdown4(true)}
                      onMouseLeave={() => setShowNestedDropdown4(false)}
                    >
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/spouse-common-law-sponsership"
                          onMouseEnter={() => setShowNestedDropdown8(true)}
                          onMouseLeave={() => setShowNestedDropdown8(false)}
                        >
                          Spousal Sponsorship
                        </a>
                        <div
                          className={`${styles.permanentNestedSection} ${
                            showNestedDropdown8 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setShowNestedDropdown8(true)}
                          onMouseLeave={() => setShowNestedDropdown8(false)}
                        >
                          <a href="/spouse-inland">Inside Canada</a>
                          <a href="/spouse-outland">Outside Canada</a>
                          <a href="/same-sex">Same Sex</a>
                        </div>
                      </div>

                      <a href="/ParentsGrandparents">Parents / Grandparents</a>
                      <a href="/dependent-children">Dependent Children</a>
                      <a href="/humanitarian-compassionate">H & C</a>
                      <a href="/orphan">Orphan</a>
                      <a href="/adoption">Adoption</a>
                      <a href="/lonely-canadian">Lonely Canadian</a>
                    </div>
                  </div>

                  {/* // */}

                  {/*  */}

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="/work-permit"
                      onMouseEnter={() => setShowNestedDropdown5(true)}
                      onMouseLeave={() => setShowNestedDropdown5(false)}
                    >
                      Work Permit
                    </a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown5 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => {
                        setShowNestedDropdown5(true);
                      }}
                      onMouseLeave={() => {
                        setShowNestedDropdown5(false);
                      }}
                    >
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/lmia-reviewed"
                          onMouseEnter={() => setDoubleNested1(true)}
                          onMouseLeave={() => setDoubleNested1(false)}
                        >
                          LMIA
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested1 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested1(true)}
                          onMouseLeave={() => setDoubleNested1(false)}
                        >
                          <a href="/low-wage-lmia">High Wage / Low Wage</a>
                          <a href="/agriculture-stream-lmia">Agriculture</a>
                          {/* <a href="#">PR Supporting</a> */}
                          <a href="/global-stream-lmia">Global Talent Stream</a>
                          <a href="/in-home-caregiver-program-lp">
                            Caregiver LMIA
                          </a>
                        </div>
                      </div>

                      {/* // */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/open-work-permit"
                          onMouseEnter={() => setDoubleNested2(true)}
                          onMouseLeave={() => setDoubleNested2(false)}
                        >
                          Open Work Permit{" "}
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested2 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested2(true)}
                          onMouseLeave={() => setDoubleNested2(false)}
                        >
                          <a href="/bridging-open-work-permit-lp">
                            BOWP – Bridging Open Work Permit
                          </a>
                          <a href="/pgwp">
                            PGWP – Post Graduate Open Work Permit
                          </a>
                          <a href="/spousal-open-work-permit">
                            SOWP – Spousal Open Work Permit
                          </a>
                          <a href="/francophone-mobility-program">
                            Francophone Mobility Program
                          </a>
                          <a href="/open-work-vulnerable-lp">
                            Vulnerable Worker
                          </a>
                          <a href="/openWork-dependent-children">
                            Dependent Child of Worker
                          </a>
                        </div>
                      </div>
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="/spouse-common-law-sponsership"
                          onMouseEnter={() => setShowNestedDropdown10(true)}
                          onMouseLeave={() => setShowNestedDropdown10(false)}
                        >
                          Spousal Permit
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            showNestedDropdown10 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setShowNestedDropdown10(true)}
                          onMouseLeave={() => setShowNestedDropdown10(false)}
                        >
                          <a href="/spousal-open-work-permit">
                            Open Work Permit - For Spouse of Worker
                          </a>
                          <a href="/cby">
                            Open Work Permit - For Spouse of Student
                          </a>
                          <a href="/open-work-permit">
                            Open Work Permit - For Spouse of PR
                          </a>
                          {/* <a href="/cby">Cby</a> */}
                        </div>
                      </div>
                      <a href="/francophone-mobility-program">
                        Francophone Mobility Program
                      </a>
                    </div>
                  </div>
                  <a href="/lmia-reviewed">LMIA</a>
                  <a href="/francophone-mobility-program">
                    Francophone Mobility Program
                  </a>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="/pathways-for-caregiver"
                      onMouseEnter={() => setShowNestedDropdown9(true)}
                      onMouseLeave={() => setShowNestedDropdown9(false)}
                    >
                      Caregiver
                    </a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown9 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => {
                        setShowNestedDropdown9(true);
                      }}
                      onMouseLeave={() => {
                        setShowNestedDropdown9(false);
                      }}
                    >
                      <a href="/in-home-caregiver-program-lp">
                        Inside - With LMIA
                      </a>
                      <a href="/permanent-residence-pathways-caregivers-lp">
                        PR Pathways for Care-Giver
                      </a>
                      {/* <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          onMouseEnter={() => setShowNestedDropdown10(true)}
                          onMouseLeave={() => setShowNestedDropdown10(false)}
                        >
                          Outside
                        </a>
                        <div
                          className={`${styles.permanentNestedSection} ${
                            showNestedDropdown10 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => {
                            setShowNestedDropdown10(true);
                          }}
                          onMouseLeave={() => {
                            setShowNestedDropdown10(false);
                          }}
                        >
                          <a>Home Child Care Provider Pilot</a>
                          <a>Home Support Worker</a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a href="/pr-renewal">PR Renewal</a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown11 ? styles.showNested : null
                      }`}
                    >
                      <a href="/pr-renewal">PR Renewal</a>
                    </div>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a href="/citizenship">Citizenship</a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown12 ? styles.showNested : null
                      }`}
                    >
                      <a href="/citizenship">Citizenship</a>
                    </div>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="#"
                      onMouseEnter={() => setShowNestedDropdown13(true)}
                      onMouseLeave={() => setShowNestedDropdown13(false)}
                    >
                      Other Services
                    </a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown13 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => {
                        setShowNestedDropdown13(true);
                      }}
                      onMouseLeave={() => {
                        setShowNestedDropdown13(false);
                      }}
                    >
                      <a href="/reconsideration">
                        Reconsideration of Refusal Decision
                      </a>
                      <a href="/additional-document">
                        Additional Document Request
                      </a>
                      <a href="/reply-to-pfl-page">PFL</a>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOGS */}
              <a href="/blogs">BLOGS</a>

              {/* NEWS */}
              <a href="/news">NEWS</a>

              {/* CALCULATORS Menu with Dropdown */}
              <div className={styles.relativeDiv}>
                <a
                  href="#"
                  onMouseEnter={() => setShowCalculatorsDropdown(true)}
                  onMouseLeave={() => setShowCalculatorsDropdown(false)}
                >
                  CALCULATORS
                </a>
                <div
                  className={`${styles.calculatorsDropdown} ${
                    showCalculatorsDropdown
                      ? styles.showCalculatorsDropdown
                      : null
                  }`}
                  onMouseEnter={() => setShowCalculatorsDropdown(true)}
                  onMouseLeave={() => setShowCalculatorsDropdown(false)}
                >
                  <a href="/Federal-Skilled">FSWP Calculator</a>
                  <a href="/clb-ilets-calculator">CLB Calculator</a>
                  <a href="/bcpnp-calculator">BCPNP Calculator</a>
                  <a href="/previous-draw-history">Previous Draws History</a>
                </div>
              </div>

              {/* CONTACT */}
              <a href="/contact-us">CONTACT</a>
            </div>

            {/* Search Bar */}
            <form onSubmit={handleSubmit}>
              <div className={styles.searchBar}>
                <div className={styles.inputWrapper}>
                  <Search
                    className={styles.searchIcon}
                    width={20}
                    height={20}
                  />
                  <input
                    type="text"
                    className={styles.input}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className={styles.button}>
                  Search here
                </button>
              </div>
            </form>

            {/* Hamburger Icon */}
            <div className={styles.hamburger} onClick={toggleSidebar}>
              {/* &#9776; */}{" "}
              <img
                src={showBlue ? hamBurgerIconBlue : hamBurgerIconWhite}
                className={styles.hamburgerColoredIcon}
                alt="wee"
              />
            </div>
          </div>

          {/* Sidebar */}
          <div
            className={`${styles.sidebar} ${
              showSidebar ? styles.showSidebar : ""
            }`}
          >
            {/* ///// */}
            <div className={styles.sidebarContent}>
              <div className={styles.closeBtn} onClick={toggleSidebar}>
                &times;
              </div>
              <a href="/" className={styles.sidebarLink}>
                HOME
              </a>
              <div className={styles.dropdown}>
                <a
                  href="#"
                  className={styles.dropbtn}
                  onClick={() =>
                    setShowHamburgerServicesDropdown(
                      !showHamburgerServicesDropdown
                    )
                  }
                  ref={dropdownRef}
                >
                  SERVICES
                  <span className={styles.arrow}>▼</span>
                </a>
                <div
                  className={styles.dropdownContent}
                  style={
                    showHamburgerServicesDropdown
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  {/* Federal Skilled with Clickable Dropdown */}
                  <div className={styles.subDropdown}>
                    <a href="#" onClick={toggleFederalSkilled}>
                      Permanent Residency
                      <span className={styles.arrow}>▼</span>
                    </a>
                    {isFederalSkilledOpen && (
                      <div className={styles.subDropdownContent}>
                        <div className={styles.subSubDropdown}>
                          <a href="/permanent-residency">Permanent Residency</a>
                          <a href="#" onClick={toggleFederalSkilledProgram}>
                            Express Entry
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isFederalSkilledProgramOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/express-entry">Express Entry</a>
                              <a href="/federal-skilled-worker-program">FSWP</a>
                              <a href="/federal-skilled-trades-program">FSTP</a>
                              <a href="/canadian-experience-class">CEC</a>
                              <a
                                href="#"
                                onClick={toggleFederalSkilledProgramTwo}
                              >
                                Category Based{" "}
                                <span className={styles.arrow}>▼</span>
                              </a>
                              {isFederalSkilledProgramOpenTwo && (
                                <div className={styles.subSubDropdownContent}>
                                  <a href="/category-based">Category Based</a>
                                  <a href="/french-targeted-draw">
                                    French Language Proficiency
                                  </a>
                                  <a href="/healthcare-targeted-draw">
                                    Healthcare Occupations
                                  </a>
                                  <a href="/stem-targeted-draw">
                                    STEM Occupationss
                                  </a>
                                  <a href="/trade-occupation-targeted-draw">
                                    Trade Occupations
                                  </a>
                                  <a href="/transport-occupation-targeted-draw">
                                    Transport Occupation Targeted Draws
                                  </a>
                                  <a href="/agriculture-agri-food-occupation">
                                    Agriculture and Agri-Food Occupation
                                  </a>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <div className={styles.subSubDropdown}>
                          <a
                            href="#"
                            onClick={toggleFederalSkilledProgramThree}
                          >
                            Pilot Programs
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isFederalSkilledOpenThree && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/agri-food-pilot-program">
                                Agri Food Pilot
                              </a>
                              <a href="/pilot-programs"> Pilot Programs</a>
                            </div>
                          )}
                        </div>
                        <div className={styles.subSubDropdown}>
                          <a href="#" onClick={toggleFederalSkilledProgramFour}>
                            PNP
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isFederalSkilledProgramOpenFour && (
                            <div className={styles.subSubDropdownContent}>
                              <a
                                href="#"
                                onClick={toggleFederalSkilledProgramFive}
                              >
                                BCPNP
                                <span className={styles.arrow}>▼</span>
                              </a>
                              {isFederalSkilledProgramOpenFive && (
                                <div className={styles.subSubDropdownContent}>
                                  <a href="/pnp">PNP</a>
                                  <a href="/bc-pnp">BCPNP</a>
                                  <a href="/skilled-worker-stream">
                                    Skilled Worker
                                  </a>
                                  <a href="/health-authority-stream">
                                    Health Authority
                                  </a>
                                  <a href="/entry-level-semi-skilled">
                                    Entry Level and Semi-Skilled (ELSS)
                                  </a>
                                  <a href="/international-graduate-program">
                                    International Graduate
                                  </a>
                                  <a href="/international-post-graduate-program">
                                    International Post-Graduate
                                  </a>
                                  <a href="/priorities-program">
                                    Program Priorities
                                  </a>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                        <a href="/rnip">RNIP</a>
                      </div>
                    )}
                  </div>

                  {/* Temporary Residency with Subheadings */}
                  <div className={styles.subDropdown}>
                    <a href="#" onClick={toggleTemporaryResidency}>
                      Temporary Residency
                      <span className={styles.arrow}>▼</span>
                    </a>
                    {isTemporaryResidencyOpen && (
                      <div className={styles.subDropdownContent}>
                        <a href="/temporary-resident">Temporary Residency</a>
                        <a href="/super-visa">Super Visa</a>

                        <div className={styles.subSubDropdown}>
                          <a href="#" onClick={toggleVisitorVisa}>
                            Visitor Visa
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isVisitorVisaOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/visitor-visa">Visitor Visa</a>
                              <a href="/business-visitor-visa">Business Visa</a>
                              <a href="/dual-intent-visa">Dual Intent Visa</a>
                              {/* <a href="#">Super Visa</a> */}
                              <a href="/reconsideration">
                                Reconsideration for Refusal
                              </a>
                            </div>
                          )}
                        </div>

                        <a href="/temporary-resident-permit-draft">
                          Temporary Resident Permits
                        </a>
                        <a href="/restoration-status-draft">Restoration</a>
                        <a href="/extensions-draft">Extend Stay</a>
                        <a href="/flagpoling">Flagpoling</a>

                        <div className={styles.subSubDropdown}>
                          <a href="#" onClick={toggleSpousalPermit}>
                            Spousal Open Work Permit
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isSpousalPermitOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/common-law-partner-temporary">
                                Open Work Permit - For Spouse of Worker
                              </a>
                              <a href="/cby">
                                Open Work Permit - For Spouse of Student
                              </a>
                              <a href="/open-work-permit">
                                Open Work Permit - For Spouse of PR
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Student Visa with Subheadings */}
                  <div className={styles.subDropdown}>
                    <a href="#" onClick={toggleStudentVisa}>
                      Student Visa
                      <span className={styles.arrow}>▼</span>
                    </a>
                    {isStudentVisaOpen && (
                      <div className={styles.subDropdownContent}>
                        <div className={styles.subSubDropdown}>
                          <a href="/student-visa">Student Visa</a>
                          <a href="#" onClick={toggleOutsideCanada}>
                            Outside Canada
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isOutsideCanadaOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/outside-canada">Outside Canada</a>
                              <a href="/sds">SDS</a>
                              <a href="/non-sds">Non SDS</a>
                            </div>
                          )}
                        </div>

                        <div className={styles.subSubDropdown}>
                          <a href="#" onClick={toggleInsideCanada}>
                            Inside Canada
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isInsideCanadaOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/inside-canada">Inside Canada</a>
                              <a href="/visitor-to-student">
                                Visitor To Student
                              </a>
                              <a href="/change-college-program">DLI Change</a>
                              {/* <a href="#">Admission</a>
                              <a href="#">Transfer DLI</a> */}
                            </div>
                          )}
                        </div>

                        <a href="/study-permit-minors">Study Permit Minors</a>
                      </div>
                    )}
                  </div>

                  {/* Family Reunification with Subheadings */}
                  <div className={styles.subDropdown}>
                    <a href="#" onClick={toggleFamilyReunification}>
                      Family Reunification & Sponsorship
                      <span className={styles.arrow}>▼</span>
                    </a>
                    {isFamilyReunificationOpen && (
                      <div className={styles.subDropdownContent}>
                        <a href="/family-reunification-sponsorship">
                          Family Reunification & Sponsorship
                        </a>
                        <div className={styles.subSubDropdown}>
                          <a
                            href="#"
                            onClick={toggleFederalSkilledProgramSeven}
                          >
                            Spousal Sponsorship{" "}
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isFederalSkilledProgramOpenSeven && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/spouse-common-law-sponsership">
                                Spousal Sponsorship
                              </a>
                              <a href="/spouse-inland">Inside Canada</a>
                              <a href="/spouse-outland">Outside Canada</a>
                              <a href="/same-sex">Same Sex</a>
                            </div>
                          )}
                        </div>
                        <a href="/dependent-children">Dependent Children</a>
                        <a href="/humanitarian-compassionate">H & C</a>
                        <a href="/orphan">Orphan</a>
                        <a href="/adoption">Adoption</a>
                      </div>
                    )}
                  </div>
                  <div className={styles.subDropdown}>
                    <a href="#" onClick={toggleFederalSkilledProgramSix}>
                      Work Permit <span className={styles.arrow}>▼</span>
                    </a>
                    {isFederalSkilledProgramOpenSix && (
                      <div className={styles.subDropdownContent}>
                        <a href="/work-permit">Work Permit</a>
                        <div className={styles.subSubDropdown}>
                          <a
                            href="#"
                            onClick={toggleFederalSkilledProgramEight}
                          >
                            LMIA
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isFederalSkilledProgramOpenEight && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/low-wage-lmia">High Wage / Low Wage</a>
                              <a href="/agriculture-stream-lmia">
                                Agriculture Stream LMIA
                              </a>
                              {/* <a href="#">PR Supporting</a> */}
                              <a href="/global-stream-lmia">
                                Global Talent Stream
                              </a>
                              <a href="/in-home-caregiver-program-lp">
                                Caregiver LMIA
                              </a>
                            </div>
                          )}

                          <a href="#" onClick={toggleFederalSkilledProgramNine}>
                            Open Work Permit
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isFederalSkilledProgramOpenNine && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/bridging-open-work-permit-lp">
                                BOWP – Bridging Open Work Permit
                              </a>
                              <a href="/pgwp">
                                PGWP – Post Graduate Open Work Permit
                              </a>
                              <a href="/spousal-open-work-permit">
                                SOWP – Spousal Open Work Permit
                              </a>
                              <a href="/francophone-mobility-program">
                                Francophone Mobility Program
                              </a>
                              <a href="/open-work-vulnerable-lp">
                                Vulnerable Worker
                              </a>
                              <a href="/openWork-dependent-children">
                                Dependent Child of Worker
                              </a>
                            </div>
                          )}
                          <a href="#" onClick={toggleFederalSkilledProgramTw}>
                            Spousal Permit
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isFederalSkilledProgramOpenTw && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/spouse-common-law-sponsership">
                                Spousal Permit
                              </a>
                              <a href="/spousal-open-work-permit">
                                Open Work Permit - For Spouse of Worker
                              </a>
                              <a href="/cby">
                                Open Work Permit - For Spouse of Student
                              </a>
                              <a href="/open-work-permit-for-spouse-inland">
                                PR Open Work Permit, Inland
                              </a>
                              <a href="/francophone-mobility-program">
                                Francophone Mobility Program
                              </a>
                            </div>
                          )}

                          <a href="/francophone-mobility-program">
                            Francophone Mobility Program
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <a href="/lmia-reviewed">LMIA</a>
                  <a href="/francophone-mobility-program">
                    Francophone Mobility Program
                  </a>
                  <div className={styles.subDropdown}>
                    <a href="#" onClick={toggleFederalSkilledProgramTen}>
                      Caregiver <span className={styles.arrow}>▼</span>
                    </a>
                    {isFederalSkilledProgramOpenTen && (
                      <div className={styles.subDropdownContent}>
                        <a href="/pathways-for-caregiver">Caregiver</a>
                        <a href="/in-home-caregiver-program-lp">
                          Inside - With LMIA{" "}
                        </a>
                        <a href="/permanent-residence-pathways-caregivers-lp">
                          PR Pathways for Care-Giver
                        </a>
                        <a href="#" onClick={toggleFederalSkilledProgramEl}>
                          Outside <span className={styles.arrow}>▼</span>
                        </a>
                        {/* <div className={styles.subSubDropdown}>
                          {isFederalSkilledProgramOpenEl && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="#">Home Child Care Provider Pilot</a>
                              <a href="#">Home Support Worker</a>
                            </div>
                          )}
                        </div> */}
                      </div>
                    )}
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a href="/pr-renewal">PR Renewal</a>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a href="/citizenship">Citizenship</a>
                  </div>
                  <div className={styles.subDropdown}>
                    <a href="#" onClick={toggleFederalSkilledProgramEl}>
                      Other Services <span className={styles.arrow}>▼</span>
                    </a>
                    {isFederalSkilledProgramOpenEl && (
                      <div className={styles.subDropdownContent}>
                        <a href="/reconsideration">
                          Reconsideration of Refusal Decision
                        </a>
                        <a href="/additional-document">
                          Additional Document Request
                        </a>
                        <a href="/reply-to-pfl-page">PFL</a>
                      </div>
                    )}
                  </div>
                  <a href="/more-services">More Services</a>
                </div>
              </div>

              <div className={styles.subDropdown}>
                <a href="#" onClick={toggleCalculators}>
                  CALCULATORS
                  <span className={styles.arrow} style={{ marginLeft: "73px" }}>
                    ▼
                  </span>
                </a>
                {isCalculatorsOpen && (
                  <div className={styles.subDropdownContent}>
                    {/* <a href="/calculators">CALCULATORS</a> */}
                    <a href="/Federal-Skilled">FSWP Calculator</a>
                    <a href="/clb-ilets-calculator">CLB Calculator</a>
                    <a href="/bcpnp-calculator">BCPNP Calculator</a>
                    <a href="/previous-draw-history">Previous Draws History</a>
                  </div>
                )}
              </div>

              {/* Separate links below the SERVICES section */}
              <a href="/blogs" className={styles.sidebarLink}>
                BLOGS
              </a>
              <a href="/news" className={styles.sidebarLink}>
                NEWS
              </a>
              <a href="/about-us" className={styles.sidebarLink}>
                ABOUT
              </a>
              <a href="/contact-us" className={styles.sidebarLink}>
                CONTACT
              </a>
            </div>
          </div>

          <div
            className={`${styles.contactNavbar} ${
              hideContactNavbar ? styles.hideContactNumber : null
            }`}
          >
            <div className={styles.contactInfo}>
              <div className={styles.location}>
                {showBlue ? (
                  <img
                    src={LocationBlue}
                    alt="Location Blue"
                    className={styles.icon}
                  />
                ) : (
                  <img
                    src={LocationIcon}
                    alt="Location"
                    className={styles.icon}
                  />
                )}
                <span
                  className={styles.lowerFooterText}
                  style={showBlue ? { color: "#164c95" } : { color: "white" }}
                >
                  <a
                    href="https://g.co/kgs/9BZVS85"
                    className={styles.lowerFooterText}
                    style={showBlue ? { color: "#164c95" } : { color: "white" }}  target="_blank"
                  >
                    Vancouver
                  </a>
                </span>
              </div>
              <div className={styles.email}>
                {showBlue ? (
                  <img
                    src={EmailBlue}
                    alt="Email blue"
                    className={styles.icon}  target="_blank"
                  />
                ) : (
                  <img src={EmailIcon} alt="Email" className={styles.icon} />
                )}

                <span
                  className={styles.lowerFooterText}
                  style={showBlue ? { color: "#164c95" } : { color: "white" }}  target="_blank"
                >
                  info@brightlightimmigration.ca
                </span>
              </div>
            </div>
            <div className={styles.socialMedia}>
              {showBlue ? (
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1"
                >
                  <img src={Tiktokblue} />
                </a>
              ) : (
                <a
                  target="_blank"
                  href="https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1"
                >
                  <TikTokIcon className={styles.socialIcon} />
                </a>
              )}
              {showBlue ? (
                <a
                  target="_blank"
                  href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198"
                >
                  <img src={Linkedinblue} />
                </a>
              ) : (
                <a
                  target="_blank"
                  href="https://ca.linkedin.com/in/loveneet-paneswar-5b2377198"
                >
                  <LinkedInIcon className={styles.socialIcon} />
                </a>
              )}
              {showBlue ? (
                <a
                  target="_blank"
                  href="https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p"
                >
                  <img src={Instagramblue} />
                </a>
              ) : (
                <a
                  target="_blank"
                  href="https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p"
                >
                  <InstagramIcon className={styles.socialIcon} />
                </a>
              )}
              {showBlue ? (
                <a
                  target="_blank"
                  href="https://www.facebook.com/brightlightimmigration"
                >
                  <img src={Facebookblue} />
                </a>
              ) : (
                <a
                  target="_blank"
                  href="https://www.facebook.com/brightlightimmigration"
                >
                  <FacebookIcon className={styles.socialIcon} />
                </a>
              )}
              {showBlue ? (
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA"
                >
                  <img src={Youtubeblue} />
                </a>
              ) : (
                <a
                  target="_blank"
                  href="https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA"
                >
                  <YouTubeIcon className={styles.socialIcon} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar3;
