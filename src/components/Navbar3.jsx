import React, { useEffect, useState } from "react";
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

const Navbar1 = (props) => {
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

  const toggleFederalSkilled = (e) => {
    e.preventDefault();
    setIsFederalSkilledOpen(!isFederalSkilledOpen);
  };

  const toggleFederalSkilledProgram = (e) => {
    e.preventDefault();
    setIsFederalSkilledProgramOpen(!isFederalSkilledProgramOpen);
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
  let [doubleNested1, setDoubleNested1] = useState(false);
  let [doubleNested2, setDoubleNested2] = useState(false);
  let [doubleNested3, setDoubleNested3] = useState(false);
  let [doubleNested4, setDoubleNested4] = useState(false);
  let [doubleNested7, setDoubleNested7] = useState(false);

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
                onMouseLeave={() => setShowAboutDropdown(false)}>
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
                  href="#"
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
                          <a href="/category-based">Category Based</a>
                          <a href="/transport-occupation">Transport Occupations</a>
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
                          <a href="/bridging-open-work-permit-lp">BCPNP</a>
                        </div>
                      </div>
                      <div>
                        <a href="/rnip">RNIP</a>
                      </div>
                    </div>
                  </div>

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="/temporary-resident-permit-draft"
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
                          <a href="/super-visa">Super Visa</a>
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
                          Spousal Permit
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
                          <a href="/spousal-open-work-permit">
                            For Spouse of Worker
                          </a>
                          <a href="/international-graduate-program">
                            For Spouse of Student
                          </a>
                          <a href="/open-work-permit">
                            PR Open Work Permit, Inland
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
                          href="/outside-cananda"
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
                          <a href="/change-college-program">
                            Change of College Program
                          </a>
                          <a href="/visitor-to-student">Visitor to Student</a>
                        </div>
                      </div>

                      {/* Other menu items */}
                      <a href="/study-permit-minors">Study Permit Minors</a>
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
                      Family Reunification
                    </a>
                    <div
                      className={`${styles.permanentNestedSection} ${
                        showNestedDropdown4 ? styles.showNested : null
                      }`}
                      onMouseEnter={() => setShowNestedDropdown4(true)}
                      onMouseLeave={() => setShowNestedDropdown4(false)}
                    >
                      <a href="/spousal-open-work-permit">Spousal Permit</a>
                      <a href="/dependent-children">Dependent Children</a>
                      <a href="/humanitarian-compassionate">H & C</a>
                      <a href="/orphan">Orphan</a>
                      <a href="/adoption">Adoption</a>
                      {/* <a href="/spouse">Spouse</a> */}
                    </div>
                  </div>

                  {/* // */}

                  {/*  */}

                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a
                      href="/student-visa"
                      onMouseEnter={() => setShowNestedDropdown5(true)}
                      onMouseLeave={() => setShowNestedDropdown5(false)}
                    >
                      Parents and Grandparents
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
                          href="#"
                          onMouseEnter={() => setDoubleNested1(true)}
                          onMouseLeave={() => setDoubleNested1(false)}
                        >
                          Work Permit
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested1 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested1(true)}
                          onMouseLeave={() => setDoubleNested1(false)}
                        >
                          <a href="/open-work-permit">Open Work Permit</a>
                          <a href="/bridging-open-work-permit-lp">BOWP</a>
                          <a href="/pgwp">PGWP</a>
                        </div>
                      </div>
                      {/* // */}
                      <div className={`${styles.relativeDiv} ${styles.flex}`}>
                        <a
                          href="#"
                          onMouseEnter={() => setDoubleNested2(true)}
                          onMouseLeave={() => setDoubleNested2(false)}
                        >
                          LMIA{" "}
                        </a>
                        <div
                          className={`${styles.doubleNested} ${
                            doubleNested2 ? styles.showNested : null
                          }`}
                          onMouseEnter={() => setDoubleNested2(true)}
                          onMouseLeave={() => setDoubleNested2(false)}
                        >
                          <a href="/low-wage-lmia">Low Wage Lmia</a>
                          <a href="/agriculture-stream-lmia">
                            Seasonal Agricultural
                          </a>
                          <a href="/global-stream-lmia">Global Talent</a>
                          <a href="/pathways-for-caregiver">Caregiver</a>
                        </div>
                      </div>
                      {/* // */}
                      <a href="/pr-renewal">PR Renewal</a>
                      <a href="/citizenship">Citizenship</a>
                    </div>
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a href="/previous-draw-history">Prevoius Draw History</a>
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
                  <a href="/Federal-Skilled">FSW Calculator</a>
                  <a href="/clb-ilets-calculator">CLB Calculator</a>
                  <a href="/bcpnp-calculator">BCPNP Calculator</a>
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
                <a href="#" className={styles.dropbtn}>
                  SERVICES
                  <span className={styles.arrow}>▼</span>
                </a>
                <div className={styles.dropdownContent}>
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
                              <a href="/category-based">Category Based</a>
                              <a href="/transport-occupation">Transport Occupations</a>
                            </div>
                          )}
                        </div>
                        <div className={styles.subSubDropdown}>
                          <a href="#" onClick={toggleFederalSkilledProgram}>
                            Pilot Programs
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isFederalSkilledProgramOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/pilot-programs">Pilot Programs</a>
                              <a href="/agri-food-pilot-program">
                                Agri Food Pilot
                              </a>
                            </div>
                          )}
                        </div>
                        <div>
                          <a href="/rnip">RNIP</a>
                        </div>
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
                        <a href="/temporary-resident-permit-draft">
                          Temporary Residency
                        </a>
                        <a href="/super-visa">Super Visa</a>

                        <div className={styles.subSubDropdown}>
                          <a href="#" onClick={toggleVisitorVisa}>
                            Visitor Visa
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isVisitorVisaOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/visitor-visa">Visitor Visa</a>
                              <a href="/business-visitor-visa">
                                Business Visitor Visa
                              </a>
                              <a href="/dual-intent-visa">Dual Intent Visa</a>
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
                            Spousal Permit
                            <span className={styles.arrow}>▼</span>
                          </a>
                          {isSpousalPermitOpen && (
                            <div className={styles.subSubDropdownContent}>
                              <a href="/spousal-open-work-permit">
                                For Spouse of Worker
                              </a>
                              <a href="/international-graduate-program">
                                For Spouse of Student
                              </a>
                              <a href="/open-work-permit">
                                PR Open Work Permit, Inland
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
                              <a href="/non-sds">NON SDS</a>
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
                              <a href="/change-college-program">
                                Change of College Program
                              </a>
                              <a href="/visitor-to-student">
                                Visitor to Student
                              </a>
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
                      Family Reunification
                      <span className={styles.arrow}>▼</span>
                    </a>
                    {isFamilyReunificationOpen && (
                      <div className={styles.subDropdownContent}>
                        <a href="/family-reunification-sponsorship">Family Reunification</a>
                        <a href="/spousal-open-work-permit">Spousal Permit</a>
                        <a href="/dependent-children">Dependent Children</a>
                        <a href="/humanitarian-compassionate">H & C</a>
                        <a href="/orphan">Orphan</a>
                        <a href="/adoption">Adoption</a>
                        {/* <a href="/spouse">Spouse</a> */}
                      </div>
                    )}
                  </div>
                  <div className={`${styles.relativeDiv} ${styles.flex}`}>
                    <a href="/previous-draw-history">Previous Draw History</a>
                  </div>
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
                    style={showBlue ? { color: "#164c95" } : { color: "white" }}
                  >
                    {" "}
                    Vancouver
                  </a>
                </span>
              </div>
              <div className={styles.email}>
                {showBlue ? (
                  <img
                    src={EmailBlue}
                    alt="Email blue"
                    className={styles.icon}
                  />
                ) : (
                  <img src={EmailIcon} alt="Email" className={styles.icon} />
                )}

                <span
                  className={styles.lowerFooterText}
                  style={showBlue ? { color: "#164c95" } : { color: "white" }}
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

export default Navbar1;
