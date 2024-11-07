import React, { useEffect, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../styles/Contact.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Contact = () => {
  let onChange = () => {};

  let [metaData, setMetaData] = useState([]);

  const notifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const notifyError = () => {
    toast.error("Request Rejected, Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const [data, setData] = useState([]);
  const [activeDiv, setActiveDiv] = useState("insideCanada");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const contactTopSectionRef = useRef(null);
  const inputBarRef = useRef(null);
  const formCategoryRef = useRef(null);
  const contactMessageBoxRef = useRef(null);
  const officeDetailsSectionRef = useRef(null);

  useEffect(() => {
    setActiveDiv("insideCanada");
    fetch("https://brightlight-node.onrender.com/contact-page")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/contact-meta")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleActiveDiv = () => {
    setActiveDiv(
      activeDiv === "insideCanada" ? "outsideCanada" : "insideCanada"
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://brightlight-node.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: formData.email,
            to: "info@brightlightimmigration.ca",
            subject: "Contact Form Submission",
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nArea of Interest: ${formData.interest}\nMessage: ${formData.message}`,
          }),
        }
      );

      const result = await response.json();
      if (response.ok) {
        notifySuccess();
      } else {
        notifyError();
      }
    } catch (error) {
      notifyError();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: contactTopSectionRef, animationClass: styles.slideInFromTop },
        { ref: inputBarRef, animationClass: styles.slideInFromLeft },
        { ref: formCategoryRef, animationClass: styles.slideInFromLeft },
        { ref: contactMessageBoxRef, animationClass: styles.slideInFromLeft },
        { ref: officeDetailsSectionRef, animationClass: styles.slideInFromTop },
      ];

      sections.forEach(({ ref, animationClass }) => {
        const element = ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;

          if (rect.top <= windowHeight * 0.75) {
            element.classList.add(animationClass);
            element.classList.remove(styles.hidden);
          } else {
            element.classList.remove(animationClass);
            element.classList.add(styles.hidden);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial checkk

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <ToastContainer />
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
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : "Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "About Us, Brightlight Immigration, Immigration Services"
          }
        />
      </Helmet>

      <Navbar1 showBlue={true} />
      <div ref={contactTopSectionRef} className={styles.contactTopSection}>
        <h1>{data?.page_heading}</h1>
        <h3>{data?.form_section_heading}</h3>
        <p>{data?.form_section_description}</p>
      </div>

      <div className={styles.contactMapSection}>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputBarFlexSection}>
              <div
                ref={inputBarRef}
                className={`${styles.inputBar} ${styles.hidden}`}
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <span>*</span>
              </div>
              <div className={styles.inputBar}>
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <span>*</span>
              </div>
            </div>

            <div className={styles.inputBarFlexSection}>
              <div className={styles.inputBar}>
                <input
                  type="number"
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <span>*</span>
              </div>

              <div className={styles.inputBar}>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Area of Interest</option>
                  <option value="Express Entry">Express Entry</option>
                  <option value="PNP">PNP</option>
                  <option value="ATIP/GCMS Notes">ATIP/GCMS Notes</option>
                  <option value="LMIA Application for Employer">
                    LMIA Application for Employer
                  </option>
                  <option value="Work Permit">Work Permit</option>
                  <option value="Spousal Sponsorship">
                    Spousal Sponsorship
                  </option>
                  <option value="Study Visa - Outside Canada">
                    Study Visa - Outside Canada
                  </option>
                  <option value="Study Visa - Inside Canada">
                    Study Visa - Inside Canada
                  </option>
                  <option value="Post Graduate Work Permit (PGWP)">
                    Post Graduate Work Permit (PGWP)
                  </option>
                  <option value="Business Visa">Business Visa</option>
                  <option value="Visitor Visa">Visitor Visa</option>
                  <option value="Super Visa">Super Visa</option>
                  <option value="Family Sponsorship">Family Sponsorship</option>
                  <option value="Open Work Permit">Open Work Permit</option>
                  <option value="Citizenship">Citizenship</option>
                  <option value="College Admission/College Change">
                    College Admission/College Change
                  </option>
                  <option value="PR Card Renewal">PR Card Renewal</option>
                  <option value="Other">Other</option>
                </select>
                <span>*</span>
              </div>
            </div>
            <div
              ref={formCategoryRef}
              className={`${styles.formCategory} ${styles.hidden}`}
            >
              <div
                onClick={handleActiveDiv}
                className={
                  activeDiv === "insideCanada"
                    ? styles.active
                    : styles.notActive
                }
              >
                <p>Inside Canada</p>
              </div>
              <div
                onClick={handleActiveDiv}
                className={
                  activeDiv === "outsideCanada"
                    ? styles.active
                    : styles.notActive
                }
              >
                <p>Outside Canada</p>
              </div>
            </div>
            <div
              ref={contactMessageBoxRef}
              className={`${styles.contactMessageBox} ${styles.hidden}`}
            >
              <textarea
                placeholder="How can we help ?"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
              <span>*</span>
            </div>
            <div className={styles.contactCaptchaSection}>
              <ReCAPTCHA sitekey="6LeuLG8qAAAAAMDNuH2bai-us1Li9FEXQBV_pPDV" onChange={onChange} />
            </div>

            <button type="submit" className={styles.sendMessageButton}>
              Send Your Message
            </button>
          </form>
          <div className={styles.agreeMessageDiv}>
            <span>By clicking, you agree to our</span>{" "}
            <a href="/terms-&-conditions">Terms & Conditions</a> ,{" "}
            <a href="/privacy-policy">Privacy and Policy</a>
          </div>
        </div>
      </div>

      <div
        ref={officeDetailsSectionRef}
        className={`${styles.officeDetailsSection} ${styles.hidden}`}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.079363084726!2d-122.8000042230304!3d49.12312788203902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485d9bc1ae6becd%3A0xaf29d4bfe0aceaae!2sBrightlight%20Immigration!5e0!3m2!1sen!2sin!4v1724923112723!5m2!1sen!2sin"
           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          loading="lazy"
        ></iframe>
        <div className={styles.officeSection}>
          <div className={styles.officeInfoSection}>
            <h5>OUR WORKING HOURS</h5>
            <p className={styles.boldtext}>Monday To Friday:</p>
            <p>(10:00 AM - 6:00 PM)</p>
            <br />
            <p className={styles.boldtext}>Saturday:</p>
            <p>(By Appointment Only)</p>
            <br />
            <p>
              <span className={styles.boldtext}>Sunday:</span> Closed
            </p>
          </div>
          <div className={styles.officeInfoSection}>
            <div>
              <h5>OUR OFFICE LOCATION</h5>
              <p>15315 66 Ave unit 327, Surrey, BC V3S 2A1</p>
            </div>

            <div>
              <h5>GET IN TOUCH</h5>
              <p>(604) 503-3734 </p>
              <p>info@brightlightimmigration.ca</p>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  );
};

export default Contact;
