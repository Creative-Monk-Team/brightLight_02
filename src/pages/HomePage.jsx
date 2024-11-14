import React, { useEffect, useRef, useState, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styles from "../styles/HomePage.module.css";
import WhiteLogo from "../assets/bright-source.webp";
import LinkedinLogo from "../assets/bannerLinkedinLogo.png";
import OurProcess from "../sections/OurProcess";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import FAQ_Blue from "../sections/FAQ_Blue";
import Testimonials_White from "../sections/Testimonials_White";
import Blogs from "../sections/Blogs";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import Odometer from "../components/Odometer";

let HomePage = () => {
  const swiperRef = useRef(null);

  let [newsSectionData, setNewsSectionData] = useState([]);
  let [linkedinLink, setLinkedingLink] = useState([]);
  let [newsData, setNewsData] = useState([]);
  let [topSection, setTopSection] = useState([]);
  let [headline1Rest, setHeadline1Rest] = useState("");
  let [headline1Last, setHeadline1Last] = useState("");
  let [headline2Rest, setHeadline2Rest] = useState("");
  let [headline2Last, setHeadline2Last] = useState("");
  let [memberData, setMemberData] = useState([]);
  let [featuresData, setFeaturesData] = useState([]);
  let [loveneetBgImage, setLoveneetBgImage] = useState([]);
  let [achiementsData, setAchievementsData] = useState([]);
  let [servicesData, setServicesData] = useState([]);
  let [services, setServices] = useState([]);
  let [loaded, setLoaded] = useState(false); // To manage loading state
  const expertiseContentParentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [isFeaturesVisible, setIsFeaturesVisible] = useState(false);
  const featuresSectionRef = useRef(null);

  const [isTestimonialsVisible, setIsTestimonialsVisible] = useState(false);
  const testimonialsSectionRef = useRef(null);
  // const swiperRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);

  const simplifyingRef = useRef(null); // Ref for the simplifying section

  let [metaData, setMetaData] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if 80% of the section is visible
        setIsVisible(entry.intersectionRatio >= 0.8);
      },
      {
        threshold: 0.8,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if 80% of the section is visible
        setIsFeaturesVisible(entry.intersectionRatio >= 0.3);
      },
      {
        threshold: 0.3,
      }
    );

    if (featuresSectionRef.current) {
      observer.observe(featuresSectionRef.current);
    }

    return () => {
      if (featuresSectionRef.current) {
        observer.unobserve(featuresSectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Load data
    const fetchData = async () => {
      try {
        let response = await fetch(
          "https://brightlight-node.onrender.com/home-top"
        );
        let data = await response.json();
        if (data) {
          let headlineText = data[0].headline1;
          let words = headlineText.split(" ");
          let lastWord = words.pop();
          let restOfText = words.join(" ");
          setTopSection(data[0]);
          setHeadline1Rest(restOfText);
          setHeadline1Last(lastWord);

          let headlineText2 = data[0].headline2;
          let words2 = headlineText2.split(" ");
          let lastWord2 = words2.pop();
          let restOfText2 = words2.join(" ");
          setHeadline2Rest(restOfText2);
          setHeadline2Last(lastWord2);
        }
        fetch("https://brightlight-node.onrender.com/news-section")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setNewsSectionData(data[0]);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://brightlight-node.onrender.com/loveneet")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setLinkedingLink(data[0].linkedin);
            }
          })
          .catch((error) => {
            console.log(error);
          });

        fetch("https://brightlight-node.onrender.com/news")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            if (data) {
              setNewsData(data.slice(0, 2));
            }
          })
          .catch((error) => {
            console.log(error);
          });

        response = await fetch(
          "https://brightlight-node.onrender.com/member-of"
        );
        data = await response.json();
        if (data) {
          setMemberData(data[0]);
        }

        response = await fetch(
          "https://brightlight-node.onrender.com/features"
        );
        data = await response.json();
        if (data) {
          setFeaturesData(data[0]);
        }

        response = await fetch(
          "https://brightlight-node.onrender.com/loveneetBg"
        );
        data = await response.json();
        if (data) {
          setLoveneetBgImage(data[0]);
        }

        response = await fetch(
          "https://brightlight-node.onrender.com/achievements-section"
        );
        data = await response.json();
        if (data) {
          setAchievementsData(data[0]);
        }

        response = await fetch(
          "https://brightlight-node.onrender.com/services-section"
        );
        data = await response.json();
        if (data) {
          let filteredArray = [];
          for (let i = 1; i <= 8; i++) {
            let serviceSvg = data[0][`service${i}svg`];
            let serviceName = data[0][`service${i}name`];
            let serviceDesc = data[0][`service${i}desc`];

            if (serviceSvg && serviceName) {
              filteredArray.push({
                title: serviceName,
                img: serviceSvg,
                desc: serviceDesc,
              });
            }
          }
          setServices(filteredArray);
          setServicesData(data[0]);
        }

        setLoaded(true); // Set loaded to true after fetching data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          // Optionally, stop observing once it's visible
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, // observing within the viewport
        rootMargin: "0px",
        threshold: 0.1, // Adjust the threshold as needed
      }
    );

    if (simplifyingRef.current) {
      observer.observe(simplifyingRef.current);
    }

    return () => {
      if (simplifyingRef.current) {
        observer.unobserve(simplifyingRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (expertiseContentParentRef.current) {
      observer.observe(expertiseContentParentRef.current);
    }

    return () => {
      if (expertiseContentParentRef.current) {
        observer.unobserve(expertiseContentParentRef.current);
      }
    };
  }, []);

  const sourceContentParentRef = useRef(null);
  const sourceContentRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    fetch("https://brightlight-node.onrender.com/home-meta")
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (sourceContentParentRef.current) {
      observer.observe(sourceContentParentRef.current);
    }

    sourceContentRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (sourceContentParentRef.current) {
        observer.unobserve(sourceContentParentRef.current);
      }
      sourceContentRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);
  const aspectsCardParentRef = useRef(null);
  const aspectsCardRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.visible);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (aspectsCardParentRef.current) {
      observer.observe(aspectsCardParentRef.current);
    }

    aspectsCardRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (aspectsCardParentRef.current) {
        observer.unobserve(aspectsCardParentRef.current);
      }
      aspectsCardRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  useEffect(() => {
    // Start the automatic slide after loading
    // autoSlideIntervalRef.current = setInterval(() => {
    //   if (swiperRef.current) {
    //     swiperRef.current.slideNext();
    //   }
    // }, 3000);

    let handleClick = () => {
      if (swiperRef.current) {
        setTimeout(() => {
          swiperRef.current.slidePrev();
        }, 500);
      }

      if (swiperRef.current) {
        setTimeout(() => {
          swiperRef.current.slidePrev();
        }, 1000);
      }

      if (swiperRef.current) {
        setTimeout(() => {
          swiperRef.current.slideNext();
        }, 1500);
      }
    };

    handleClick();

    // Clear the interval on component unmount
    // return () => clearInterval(autoSlideIntervalRef.current);
  }, []);

  const link = (title) => {
    switch (title) {
      case "Permanent Residency":
        return "/permanent-residency";
      case "BCPNP":
        return "/bc-pnp";
      case "Visitor Visa":
        return "/visitor-visa";
      case "Study Visa":
        return "/student-visa";
      case "Family Sponsorship":
        return "/family-reunification-sponsorship";
      case "Work Permit":
        return "/work-permit";
      case "PFL":
        return "/reply-to-pfl-page";
      default:
        return "#";
    }
  };
  const linkLookup = useMemo(
    () => ({
      "Permanent Residency": "/permanent-residency",
      BCPNP: "/bc-pnp",
      "Visitor Visa": "/visitor-visa",
      "Study Visa": "/student-visa",
      "Family Sponsorship": "/family-reunification-sponsorship",
      "Work Permit": "/work-permit",
      PFL: "/reply-to-pfl-page",
    }),
    []
  );

  const handleCardClick = (title) => {
    const link = linkLookup[title]; // Lookup the link using the title
    if (link) {
      window.location.href = link; // Navigate to the URL
    }
  };
  const rcicAppointmentUrl = "/booking";

  const memberInfo = [
    { heading: memberData?.heading1, img: memberData?.heading1Img },
    { heading: memberData?.heading2, img: memberData?.heading2Img },
    { heading: memberData?.heading3, img: memberData?.heading3Img },
  ];

  const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  };

  useEffect(() => {
    // Preload service images
    const serviceImages = services.map((service) => service.img);
    preloadImages(serviceImages);

    setLoaded(true); // Assuming data is fetched and set here
  }, [services]); // Run when services data is available

  useEffect(() => {
    // Auto-slide functionality
    autoSlideIntervalRef.current = setInterval(() => {
      if (swiperRef.current && swiperRef.current.activeIndex < 2) {
        swiperRef.current.slideNext();
      } else {
        clearInterval(autoSlideIntervalRef.current); // Stop auto-slide after 3 slides
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlideIntervalRef.current); // Cleanup on unmount
  }, [services]);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePreviousSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
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
              : " Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>

      <Navbar1 showBlue={true} />
      <div className={styles.bannerParent}>
        <div className={styles.bannerMain}>
          <TransitionGroup>
            {loaded && (
              <CSSTransition
                classNames={{
                  enter: styles.fadeIn,
                  enterActive: styles.fadeInActive,
                  exit: styles.fadeOut,
                  exitActive: styles.fadeOutActive,
                }}
                timeout={1000}
              >
                <div className={styles.bannerHeading}>
                  <h1 className={`${styles.slideInFromLeft} ${styles.fadeIn}`}>
                    {headline1Rest}{" "}
                    <span className={styles.bannerBlueHeading}>
                      {headline1Last}
                    </span>
                  </h1>
                  <h1 className={`${styles.slideInFromRight} ${styles.fadeIn}`}>
                    {headline2Rest}{" "}
                    <span className={styles.bannerBlueHeading}>
                      {headline2Last}
                    </span>
                  </h1>
                  <h2
                    className={`${styles.slideInFromBottom} ${styles.fadeIn}`}
                  >
                    {topSection?.SmallHeadline1}
                  </h2>
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>

          <TransitionGroup>
            {loaded && (
              <CSSTransition
                classNames={{
                  enter: styles.fadeIn,
                  enterActive: styles.fadeInActive,
                  exit: styles.fadeOut,
                  exitActive: styles.fadeOutActive,
                }}
                timeout={1000}
              >
                <div className={styles.cardContainer}>
                  {services.map((card, index) => (
                    <div
                      key={index}
                      className={styles.card}
                      onClick={() => handleCardClick(card.title)}
                    >
                      <CSSTransition
                        classNames={{
                          enter: styles.fadeIn,
                          enterActive: styles.fadeInActive,
                          exit: styles.fadeOut,
                          exitActive: styles.fadeOutActive,
                        }}
                        timeout={500}
                      >
                        <img
                          src={card.img}
                          alt={card.title}
                          className={`${styles.icon} ${styles.fadeIn}`}
                          loading="lazy"
                        />
                      </CSSTransition>

                      <div className={styles.title}>
                        <h2>{card.title}</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </CSSTransition>
            )}
          </TransitionGroup>

          <a href="/more-services">
            <button className={styles.bookButton17} role="button">
              More Services
            </button>
          </a>
        </div>
      </div>

      <div className={styles.bannerParent2}>
        {/* Check if loveneetBgImage exists before using it */}
        {loveneetBgImage?.image && (
          <img
            src={loveneetBgImage.image}
            alt="Background Image"
            loading="lazy"
            className={styles.backgroundImage}
            width="100%" // Ensure the width stays 100% of the parent container
            height="auto" // Maintain the aspect ratio
          />
        )}

        <div className={styles.bannerParent2ButtonDiv}>
          {/* LinkedIn button */}
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <button className={styles.linkedInButton}>
                <img src={LinkedinLogo} alt="LinkedIn" loading="lazy" />
              </button>
            </a>
          )}

          <div className={styles.bannerParent2HaveQuestions}>
            <h5>Have Questions ?</h5>
            <a
              href={rcicAppointmentUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={styles.rcicButton}>
                <b>RCIC</b>
                <p>APPOINTEMENT</p>
              </button>
            </a>
          </div>
        </div>

        <div className={styles.bannerMain2}></div>
      </div>

      <div className={styles.memberParent} ref={sectionRef}>
        <div className={styles.memberMain}>
          <div className={styles.memberCardParent}>
            {memberInfo.map((member, index) => (
              <div
                key={index}
                className={`${styles.memberCard} ${
                  isVisible ? styles.showMemberCard : ""
                }`}
              >
                <p>{member?.heading}</p>
                <div className={styles.memberCardImg}>
                  <img
                    src={member?.img}
                    alt={member?.heading || "Member image"} // Accessibility improvement
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`${styles.simplifyingParent} ${
          isFeaturesVisible ? styles.showFeaturesSection : null
        }`}
        ref={featuresSectionRef}
      >
        <div ref={simplifyingRef} className={`${styles.simplifyingMain}`}>
          <h1 className={styles.simplifyingHeading}>Why Us?</h1>
          {featuresData &&
            [1, 2, 3, 4].map(
              (num) =>
                featuresData[`feature${num}SVG`] &&
                featuresData[`feature${num}Heading`] && (
                  <div
                    key={num}
                    className={`${styles.simplifyingDiv} ${
                      isFeaturesVisible ? styles.showSimplifySection : null
                    }`}
                  >
                    <div className={styles.simplifyingImg}>
                      <img
                        src={featuresData[`feature${num}SVG`]}
                        alt={`Feature ${num} Image`}
                        loading="lazy"
                      />
                    </div>
                    <div className={styles.simplifyingContent}>
                      <h2>{featuresData[`feature${num}Heading`]}</h2>
                      <p>{featuresData[`feature${num}Description`]}</p>
                    </div>
                  </div>
                )
            )}
        </div>
      </div>

      <OurProcess />

      <div className={styles.expertiseParent}>
        <div
          className={styles.expertiseContentParent}
          ref={expertiseContentParentRef}
        >
          <div className={styles.expertiseContentHeading}>
            <h1>{servicesData?.heading}</h1>
            <p>{servicesData?.description}</p>

            <button className={styles.knowButton}>
              <a href="/more-services">Know More</a>
            </button>
          </div>
          <div
            className={`${styles.testimonialsVideoSection} ${styles.servicesCardSwiper}`}
          >
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true} // Set loop to true for infinite scrolling
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              pagination={{ el: ".swiper_pagination", clickable: true }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className={styles.swiper_container}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {services?.map((item, index) => (
                <SwiperSlide key={index} className={styles.whiteBlockCard}>
                  <div className={styles.expertiseDiv}>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                    <a
                      className={styles.expertiseKnowMore}
                      href={link(item.title)}
                    >
                      Know More
                    </a>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}

            {/* Pagination Controller */}
            <div className={styles.slider_controler}>
              <div className="swiper_pagination"></div>
            </div>
          </div>

          <div
            className={styles.navigationButtons}
            class="navigation_button_02"
          >
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
          </div>
        </div>
      </div>

      <div className={styles.aspectsParent}>
        <div className={styles.aspectsMain}>
          <div className={styles.aspectsHeading}>
            <h1>{achiementsData?.heading}</h1>
            <h2>{achiementsData?.description}</h2>
          </div>

          <div className={styles.aspectsCardParent} ref={aspectsCardParentRef}>
            <div
              className={`${styles.aspectsCard} ${styles.fadeFromLeft}`}
              ref={(el) => (aspectsCardRefs.current[0] = el)}
            >
              <img
                src={achiementsData?.achievement1SVG}
                loading="lazy"
                alt=""
              />
              <h1>
                <Odometer value={achiementsData?.achievement1Numbers} />+
              </h1>
              <p>{achiementsData?.achievement1Heading}</p>
            </div>
            <div
              className={`${styles.aspectsCard} ${styles.fadeFromBottom}`}
              ref={(el) => (aspectsCardRefs.current[1] = el)}
            >
              <img
                src={achiementsData?.achievement2SVG}
                loading="lazy"
                alt=""
              />
              <h1>
                <Odometer value={achiementsData?.achievement2Numbers} />+
              </h1>
              <p>{achiementsData?.achievement2Heading}</p>
            </div>
            <div
              className={`${styles.aspectsCard} ${styles.fadeFromRight}`}
              ref={(el) => (aspectsCardRefs.current[2] = el)}
            >
              <img
                src={achiementsData?.achievement3SVG}
                loading="lazy"
                alt=""
              />
              <h1>
                <Odometer value={achiementsData?.achievement3Numbers} />+
              </h1>
              <p>{achiementsData?.achievement3Heading}</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials_White />

      <div className={styles.sourceParent}>
        <div className={styles.sourceMain}>
          <div className={styles.sourceHeadingParent}>
            <div className={styles.sourceHeadingParentFirstDiv}>
              <img src={WhiteLogo} loading="lazy" alt="" />
            </div>
            <div>
              {newsSectionData && <h1>{newsSectionData.heading}</h1>}
              {newsSectionData && <p>{newsSectionData.description}</p>}
            </div>
          </div>
          <div
            className={styles.sourceContentParent}
            ref={sourceContentParentRef}
          >
            {newsData?.map((item, index) => {
              let stripHtmlTags = (text) =>
                text ? text.replace(/<[^>]*>/g, "") : "";

              let truncateText = (text, numChars) => {
                let cleanedText = stripHtmlTags(text);
                if (cleanedText.length <= numChars) return cleanedText;
                return cleanedText.slice(0, numChars) + "...";
              };
              let month = item.date.trim().split("T")[0].split("-")[1];
              let date = item.date.trim().split("T")[0].split("-")[2];
              let monthName = () => {
                if (month == "01") {
                  return "JAN";
                } else if (month == "02") {
                  return "FEB";
                } else if (month == "03") {
                  return "MAR";
                } else if (month == "04") {
                  return "APR";
                } else if (month == "05") {
                  return "MAY";
                } else if (month == "06") {
                  return "JUN";
                } else if (month == "07") {
                  return "JUL";
                } else if (month == "08") {
                  return "AUG";
                } else if (month == "09") {
                  return "SEP";
                } else if (month == "10") {
                  return "OCT";
                } else if (month == "11") {
                  return "NOV";
                } else if (month == "12") {
                  return "DEC";
                }
              };
              return (
                <>
                  <div
                    key={index}
                    className={`${styles.sourceContent} ${styles.fadeFromLeft}`}
                    ref={(el) => (sourceContentRefs.current[index] = el)}
                  >
                    <div className={styles.sourceContentDate}>
                      <p>{item.tag_1}</p>
                      <h2>{monthName(item.date)}</h2>
                      <h1>{date}</h1>
                    </div>
                    <div className={styles.sourceContentData}>
                      <h3>{item.news_heading}</h3>
                      <p>{truncateText(item.news_content, 150)}</p>
                      <a href={`/news/${item._id}`}>Read more</a>
                    </div>
                  </div>
                </>
              );
            })}
            <button
              className={styles.moreNewsUpdates}
              onClick={() => (window.location.href = "/news")}
            >
              More News & Updates
            </button>
          </div>
        </div>
      </div>
      <Blogs />
      <FAQ_Blue />
      <Footer1 />
    </>
  );
};

export default HomePage;
