import React, { useEffect } from "react";
import styles from "../styles/FAQ_Blue.module.css";
import { ReactComponent as RightArrow } from "../assets/right-arrow-white.svg";
import { useState } from "react";

let FAQ_Blue = () => {
  let [faqData, setFaqData] = useState([]);
  let [faqHeading, setFaqHeading] = useState("");
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/faq-section")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setFaqHeading(data[0].heading);
          let arrayData = [];
          if (data[0].q1 && data[0].a1) {
            arrayData.push({ question: data[0].q1, answer: data[0].a1 });
          }
          if (data[0].q2 && data[0].a2) {
            arrayData.push({ question: data[0].q2, answer: data[0].a2 });
          }
          if (data[0].q3 && data[0].a3) {
            arrayData.push({ question: data[0].q3, answer: data[0].a3 });
          }
          if (data[0].q4 && data[0].a4) {
            arrayData.push({ question: data[0].q4, answer: data[0].a4 });
          }
          if (data[0].q5 && data[0].a5) {
            arrayData.push({ question: data[0].q5, answer: data[0].a5 });
          }
          if (data[0].q6 && data[0].a6) {
            arrayData.push({ question: data[0].q6, answer: data[0].a6 });
          }
          if (data[0].q7 && data[0].a7) {
            arrayData.push({ question: data[0].q7, answer: data[0].a7 });
          }
          if (data[0].q8 && data[0].a8) {
            arrayData.push({ question: data[0].q8, answer: data[0].a8 });
          }
          setFaqData(arrayData);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  let [activeIndex, setActiveIndex] = useState(0);
  let handleQuestionClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={styles.faqSection}>
      <div className={styles.faqParentSection}>
        <div className={styles.faqQuestionSection}>
          <div className={styles.questionMarkSection}></div>
          <div className={styles.faqQuestionsParentSection}>
            <h1>{faqHeading ? faqHeading : null}</h1>
            <div className={styles.questions}>
              {faqData?.map((item, index) => {
                return (
                  <div
                    onClick={() => handleQuestionClick(index)}
                    key={index}
                    className={`${styles.questionSection} ${
                      activeIndex == index ? styles.active : null
                    }`}
                  >
                    <p>{item.question}</p>
                    <RightArrow width={30} height={30} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.faqAnswersSection}>
          <p>{faqData[activeIndex]?.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ_Blue;