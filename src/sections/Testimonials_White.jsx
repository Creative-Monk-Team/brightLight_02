// import React, { useEffect, useRef, useState } from "react";
// import styles from "../styles/Testimonials_White.module.css";
// import google from "../assets/google-review.webp";
// import { ReactComponent as ReviewStar } from "../assets/review_star_blue.svg";
// import { ReactComponent as Arrow } from "../assets/right-arrow-blue.svg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import aboutBanner from "../assets/about-banner.png";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// let Testimonials_White = () => {
//   const videoSwiperRef = useRef(null); // New ref for video swiper
// const autoSlideIntervalRef = useRef(null); // Add this line

//   let [videosData, setVideosData] = useState([]);
//   let [data, setData] = useState([]);
//   let [reviewData, setReviewData] = useState([]);
//   const [currentReview, setCurrentReview] = useState(0);
//   const swiperRef = useRef(null);
//   const [isAnimating, setIsAnimating] = useState(false);
//   useEffect(() => {
//     // Existing fetch logic...

//     // Start the automatic slide after loading
//     autoSlideIntervalRef.current = setInterval(() => {
//       handleNextVideo();
//     }, 3000); // Change slide every 3 seconds

//     // Clear the interval on component unmount
//     return () => clearInterval(autoSlideIntervalRef.current);
//   }, []);

//   useEffect(() => {
//     fetch("https://brightlight-node.onrender.com/videos-section")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         if (data) {
//           setVideosData(data[0]);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     fetch("https://brightlight-node.onrender.com/testimonials-section")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         if (data) {
//           let sortedArray = [];
//           if (data[0].review1img && data[0].review1name) {
//             sortedArray.push({
//               image: data[0].review1img,
//               review: data[0].review1text,
//               review_stars: Math.floor(data[0].review1star),
//               person_name: data[0].review1name,
//             });
//           }
//           if (data[0].review2img && data[0].review2name) {
//             sortedArray.push({
//               image: data[0].review2img,
//               review: data[0].review2text,
//               review_stars: Math.floor(data[0].review2star),
//               person_name: data[0].review2name,
//             });
//           }
//           if (data[0].review3img && data[0].review3name) {
//             sortedArray.push({
//               image: data[0].review3img,
//               review: data[0].review3text,
//               review_stars: Math.floor(data[0].review3star),
//               person_name: data[0].review3name,
//             });
//           }
//           if (data[0].review4img && data[0].review4name) {
//             sortedArray.push({
//               image: data[0].review4img,
//               review: data[0].review4text,
//               review_stars: Math.floor(data[0].review4star),
//               person_name: data[0].review4name,
//             });
//           }
//           if (data[0].review5img && data[0].review5name) {
//             sortedArray.push({
//               image: data[0].review5img,
//               review: data[0].review5text,
//               review_stars: Math.floor(data[0].review5star),
//               person_name: data[0].review5name,
//             });
//           }
//           if (data[0].review6img && data[0].review6name) {
//             sortedArray.push({
//               image: data[0].review6img,
//               review: data[0].review6text,
//               review_stars: Math.floor(data[0].review6star),
//               person_name: data[0].review6name,
//             });
//           }
//           if (data[0].review7img && data[0].review7name) {
//             sortedArray.push({
//               image: data[0].review7img,
//               review: data[0].review7text,
//               review_stars: Math.floor(data[0].review7star),
//               person_name: data[0].review7name,
//             });
//           }
//           if (data[0].review8img && data[0].review8name) {
//             sortedArray.push({
//               image: data[0].review8img,
//               review: data[0].review8text,
//               review_stars: Math.floor(data[0].review8star),
//               person_name: data[0].review8name,
//             });
//           }
//           if (data[0].review9img && data[0].review9name) {
//             sortedArray.push({
//               image: data[0].review9img,
//               review: data[0].review9text,
//               review_stars: Math.floor(data[0].review9star),
//               person_name: data[0].review9name,
//             });
//           }
//           if (data[0].review10img && data[0].review10name) {
//             sortedArray.push({
//               image: data[0].review10img,
//               review: data[0].review10text,
//               review_stars: Math.floor(data[0].review10star),
//               person_name: data[0].review10name,
//             });
//           }
//           setReviewData(sortedArray);
//           setData(data[0]);
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   let getVideoIdFromUrl = (url) => {
//     let urlParts = new URL(url);
//     return urlParts.searchParams.get("v");
//   };

//   let videoId1 = videosData.video1
//     ? getVideoIdFromUrl(videosData.video1)
//     : null;
//   let videoId2 = videosData.video2
//     ? getVideoIdFromUrl(videosData.video2)
//     : null;
//   let videoId3 = videosData.video3
//     ? getVideoIdFromUrl(videosData.video3)
//     : null;
//   let videoId4 = videosData.video4
//     ? getVideoIdFromUrl(videosData.video4)
//     : null;
//   let videoId5 = videosData.video5
//     ? getVideoIdFromUrl(videosData.video5)
//     : null;
//   let videoId6 = videosData.video6
//     ? getVideoIdFromUrl(videosData.video6)
//     : null;
//   let videoId7 = videosData.video7
//     ? getVideoIdFromUrl(videosData.video7)
//     : null;
//   let videoId8 = videosData.video8
//     ? getVideoIdFromUrl(videosData.video8)
//     : null;
//   let videoId9 = videosData.video9
//     ? getVideoIdFromUrl(videosData.video9)
//     : null;
//   let videoId10 = videosData.video10
//     ? getVideoIdFromUrl(videosData.video10)
//     : null;

//   const handleNextReview = () => {
//     if (isAnimating) return; // Prevent spamming of clicks during animation

//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentReview((prev) => (prev + 1) % reviewData.length);
//       setIsAnimating(false);
//     }, 500); // Timeout should match the CSS animation duration
//   };

//   const handlePreviousReview = () => {
//     if (isAnimating) return;

//     setIsAnimating(true);
//     setTimeout(() => {
//       setCurrentReview(
//         (prev) => (prev - 1 + reviewData.length) % reviewData.length
//       );
//       setIsAnimating(false);
//     }, 500);
//   };

//   const handleNextVideo = () => {
//     if (videoSwiperRef.current) {
//       videoSwiperRef.current.swiper.slideNext();
//     }
//   };

//   const handlePreviousVideo = () => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.slidePrev();
//     }
//   };

//   return (
//     <>
//       <div className={styles.testimonialsSection}>
//         <div className={styles.testimonialsContentSection}>
//           <h1>{data?.heading}</h1>
//           <div className={styles.googleImageSection}>
//             <img src={google} />
//             <p>{data?.googleRatings}/5</p>
//           </div>
//           <div className={styles.clientReviewsOverflowSection}>
//             <div
//               className={`${styles.clientTestimonialsSection} ${
//                 isAnimating ? styles.animating : ""
//               }`}
//             >
//               <div className={styles.clientImageSection}>
//                 <img
//                   src={reviewData[currentReview]?.image}
//                   alt={reviewData[currentReview]?.person_name}
//                 />
//               </div>
//               <div className={styles.reviewDetails}>
//                 <h3>{reviewData[currentReview]?.review}</h3>
//                 <h2>{reviewData[currentReview]?.person_name}</h2>
//                 <div className={styles.reviewsStarsSection}>
//                   {Array.from(
//                     { length: reviewData[currentReview]?.review_stars },
//                     (_, i) => (
//                       <ReviewStar key={i} width={25} height={25} />
//                     )
//                   )}
//                 </div>

//                 <div className={styles.reviewsPaginationSection}>
//                   <Arrow
//                     width={20}
//                     height={20}
//                     onClick={handlePreviousReview}
//                   />
//                   <p>{`${currentReview + 1} / ${reviewData.length}`}</p>
//                   <Arrow width={20} height={20} onClick={handleNextReview} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className={styles.testimonialsVideoSection}>
//             <Swiper
//               ref={videoSwiperRef} // Use the new ref
//               effect={"coverflow"}
//               grabCursor={true}
//               centeredSlides={true}
//               loop={true}
//               slidesPerView={"auto"}
//               coverflowEffect={{
//                 rotate: 0,
//                 stretch: 0,
//                 depth: 100,
//                 modifier: 2.5,
//               }}
//               pagination={{ el: ".swiper_pagination_2", clickable: true }}
//               modules={[EffectCoverflow, Pagination, Navigation]}
//               className={styles.swiper_container}
//             >
//               {Array.from(
//                 { length: 10 },
//                 (_, i) =>
//                   videosData[`video${i + 1}`] &&
//                   videosData[`video${i + 1}name`] && (
//                     <SwiperSlide key={i}>
//                       <iframe
//                         width="560"
//                         height="315"
//                         src={`https://www.youtube.com/embed/${getVideoIdFromUrl(
//                           videosData[`video${i + 1}`]
//                         )}`}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         title={videosData[`video${i + 1}name`]}
//                       ></iframe>
//                       <p>{videosData[`video${i + 1}name`]}</p>
//                     </SwiperSlide>
//                   )
//               )}
//             </Swiper>

//             {/* Navigation Buttons */}
//             <div className={styles.navigationButtons}>
//               <button
//                 onClick={handlePreviousVideo}
//                 className={styles.prevButton}
//               >
//                 <span>{"<"}</span>
//               </button>
//               <button onClick={handleNextVideo} className={styles.nextButton}>
//                 <span>{">"}</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Testimonials_White;


import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Testimonials_White.module.css";
import google from "../assets/google-review.webp";
import { ReactComponent as ReviewStar } from "../assets/review_star_blue.svg";
import { ReactComponent as Arrow } from "../assets/right-arrow-blue.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Testimonials_White = () => {
  const videoSwiperRef = useRef(null);
  const autoSlideIntervalRef = useRef(null);
  const [videosData, setVideosData] = useState([]);
  const [data, setData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/videos-section")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setVideosData(data[0]);
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/testimonials-section")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          const sortedArray = [];
          for (let i = 1; i <= 10; i++) {
            if (data[0][`review${i}img`] && data[0][`review${i}name`]) {
              sortedArray.push({
                image: data[0][`review${i}img`],
                review: data[0][`review${i}text`],
                review_stars: Math.floor(data[0][`review${i}star`]),
                person_name: data[0][`review${i}name`],
              });
            }
          }
          setReviewData(sortedArray);
          setData(data[0]);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    // Auto slide for videos
    autoSlideIntervalRef.current = setInterval(() => {
      if (videoSwiperRef.current && videoSwiperRef.current.swiper.activeIndex < 2) {
        videoSwiperRef.current.swiper.slideNext();
      } else {
        clearInterval(autoSlideIntervalRef.current); // Stop after 3 slides
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlideIntervalRef.current); // Cleanup on unmount
  }, [videosData]);

  const handleNextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev + 1) % reviewData.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePreviousReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentReview((prev) => (prev - 1 + reviewData.length) % reviewData.length);
      setIsAnimating(false);
    }, 500);
  };

  const handleNextVideo = () => {
    if (videoSwiperRef.current) {
      videoSwiperRef.current.swiper.slideNext();
    }
  };

  const handlePreviousVideo = () => {
    if (videoSwiperRef.current) {
      videoSwiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className={styles.testimonialsSection}>
      <div className={styles.testimonialsContentSection}>
        <h1>{data?.heading}</h1>
        <div className={styles.googleImageSection}>
          <img src={google} alt="Google Ratings" />
          <p>{data?.googleRatings}/5</p>
        </div>
        <div className={styles.clientReviewsOverflowSection}>
          <div className={`${styles.clientTestimonialsSection} ${isAnimating ? styles.animating : ""}`}>
            <div className={styles.clientImageSection}>
              <img src={reviewData[currentReview]?.image} alt={reviewData[currentReview]?.person_name} />
            </div>
            <div className={styles.reviewDetails}>
              <h3>{reviewData[currentReview]?.review}</h3>
              <h2>{reviewData[currentReview]?.person_name}</h2>
              <div className={styles.reviewsStarsSection}>
                {Array.from({ length: reviewData[currentReview]?.review_stars }, (_, i) => (
                  <ReviewStar key={i} width={25} height={25} />
                ))}
              </div>
              <div className={styles.reviewsPaginationSection}>
                <Arrow width={20} height={20} onClick={handlePreviousReview} />
                <p>{`${currentReview + 1} / ${reviewData.length}`}</p>
                <Arrow width={20} height={20} onClick={handleNextReview} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.testimonialsVideoSection}>
          <Swiper
            ref={videoSwiperRef}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper_pagination_2", clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className={styles.swiper_container}
          >
            {Array.from({ length: 10 }, (_, i) => (
              videosData[`video${i + 1}`] && videosData[`video${i + 1}name`] && (
                <SwiperSlide key={i}>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${new URL(videosData[`video${i + 1}`]).searchParams.get("v")}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={videosData[`video${i + 1}name`]}
                  ></iframe>
                  <p>{videosData[`video${i + 1}name`]}</p>
                </SwiperSlide>
              )
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className={styles.navigationButtons}>
            <button onClick={handlePreviousVideo} className={styles.prevButton}>
              <span>{"<"}</span>
            </button>
            <button onClick={handleNextVideo} className={styles.nextButton}>
              <span>{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials_White;
