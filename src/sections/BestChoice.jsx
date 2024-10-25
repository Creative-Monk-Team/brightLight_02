// import React, { useEffect, useState, useRef } from "react";
// import styles from "../styles/BestChoice.module.css";

// let BestChoice = () => {
//   let [planeTop, setPlaneTop] = useState(150);
//   let [isTrackImageVisible, setIsTrackImageVisible] = useState(false);
//   let trackImageRef = useRef(null);
//   let bestChoiceHeadingRef = useRef(null);
//   let [bestChoiceHeading, setBestChoiceHeading] = useState([]);
//   let [bestChoiceImage, setBestChoiceImage] = useState([]);
//   let [plane, setPlane] = useState([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsTrackImageVisible(entry.isIntersecting);
//         if (entry.isIntersecting) {
//           entry.target.classList.add(styles.visible);
//         } else {
//           entry.target.classList.remove(styles.visible);
//         }
//       },
//       { threshold: 0.17 }
//     );

//     if (trackImageRef.current) {
//       observer.observe(trackImageRef.current);
//     }

//     if (bestChoiceHeadingRef.current) {
//       observer.observe(bestChoiceHeadingRef.current);
//     }

//     return () => {
//       if (trackImageRef.current) {
//         observer.unobserve(trackImageRef.current);
//       }
//       if (bestChoiceHeadingRef.current) {
//         observer.unobserve(bestChoiceHeadingRef.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     let lastScrollY = window.scrollY;

//     const handleScroll = () => {
//       if (!isTrackImageVisible) return;

//       const currentScrollY = window.scrollY;
//       if (currentScrollY > lastScrollY) {
//         if (window.innerWidth < 700) {
//           setPlaneTop((prevTop) => prevTop + 5);
//         } else {
//           setPlaneTop((prevTop) => prevTop + 12.5);
//         }
//       } else {

//         if (window.innerWidth < 700) {
//           setPlaneTop((prevTop) => prevTop - 5);
//         } else {
//           setPlaneTop((prevTop) => prevTop - 12.5);
//         }
//       }
//       lastScrollY = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [isTrackImageVisible]);

//   useEffect(() => {
//     fetch("https://brightlight-node.onrender.com/aboutUsBestChoiceSection")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           setBestChoiceHeading(data[0]);
//         }
//       })
//       .catch((error) => console.log(error));

//     fetch("https://brightlight-node.onrender.com/bestChoice")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           setBestChoiceImage(data[0]);
//         }
//       })
//       .catch((error) => console.log(error));

//     fetch("https://brightlight-node.onrender.com/plane")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data) {
//           setPlane(data[0]);
//         }
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className={styles.bestChoiceParent}>
//       <div className={styles.bestChoice}>
//         <div
//           className={`${styles.bestChoiceHeading} ${styles.fadeIn}`}
//           ref={bestChoiceHeadingRef}
//         >
//           <h2>{bestChoiceHeading?.heading}</h2>
//         </div>
//         <img
//           src={plane?.image}
//           className={styles.plane}
//           style={{ top: `${planeTop}px` }}
//         />
//         <img
//           src={bestChoiceImage?.image}
//           ref={trackImageRef}
//           className={`${styles.trackImage} ${styles.fadeIn}`}
//         />
//       </div>
//     </div>
//   );
// };

// export default BestChoice;

import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/BestChoice.module.css";
import UpdateBestChoice from "../assets/best-choice-update.png";

let BestChoice = () => {
  let [planeTop, setPlaneTop] = useState(150);
  let [isTrackImageVisible, setIsTrackImageVisible] = useState(false);
  let trackImageRef = useRef(null);
  let [bestChoiceHeading, setBestChoiceHeading] = useState([]);
  let [bestChoiceImage, setBestChoiceImage] = useState([]);
  let [plane, setPlane] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTrackImageVisible(entry.isIntersecting);
      },
      { threshold: 0.17 }
    );

    if (trackImageRef.current) {
      observer.observe(trackImageRef.current);
    }

    return () => {
      if (trackImageRef.current) {
        observer.unobserve(trackImageRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (planeTop <= 150) {
      setPlaneTop(150);
    }
  }, [planeTop]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let lastTimestamp = performance.now();

    const handleScroll = () => {
      if (!isTrackImageVisible) return;

      const currentScrollY = window.scrollY;
      const currentTime = performance.now();
      const deltaY = currentScrollY - lastScrollY;
      const deltaTime = currentTime - lastTimestamp;
      const scrollSpeed = deltaY / deltaTime;
      if (window.innerWidth < 767) {
        setPlaneTop((prevTop) => prevTop + scrollSpeed * 5);
      } else {
        setPlaneTop((prevTop) => prevTop + scrollSpeed * 15);
      }

      lastScrollY = currentScrollY;
      lastTimestamp = currentTime;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTrackImageVisible]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/aboutUsBestChoiceSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBestChoiceHeading(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/bestChoice")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setBestChoiceImage(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/plane")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setPlane(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.bestChoiceParent}>
      <div className={styles.bestChoice}>
        <div className={styles.bestChoiceHeading}>
          <h2>{bestChoiceHeading?.heading}</h2>
        </div>
        <img
          src={plane?.image}
          alt="err"
          className={styles.plane}
          style={{ top: `${planeTop}px` }}
        />
        <img
          src={UpdateBestChoice}
          ref={trackImageRef}
          alt="err"
          className={styles.trackImage}
        />
      </div>
    </div>
  );
};

export default BestChoice;
