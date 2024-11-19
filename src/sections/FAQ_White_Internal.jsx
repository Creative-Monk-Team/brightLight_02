import React, { useState, useEffect } from "react";
import styles from "../styles/FAQ_White_Internal.module.css";
import { ReactComponent as RightArrow } from "../assets/right-arrow-blue.svg";

let FAQ_White_Internal = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [faqData, setFaqData] = useState([]);
  const [faqHeading, setFaqHeading] = useState("");

  useEffect(() => {
    if (data) {
      setFaqHeading(data.faq_heading);
      const arrayData = [];

      for (let i = 1; i <= 21; i++) {
        const question = data[`q${i}`]?.trim();
        const answer = data[`qa${i}`]?.trim();

        if (question && answer) {
          arrayData.push({ question, answer });
        }
      }

      setFaqData(arrayData);
    }
  }, [data]);

  const handleQuestionClick = (index) => {
    setActiveIndex(index);
  };

  if (!faqData.length) {
    return <div></div>;
  }

  return (
    <>
      {faqData.length ? (
        <div className={styles.faqSection}>
          <div className={styles.faqParentSectionDesktop}>
            <div className={styles.faqQuestionSection}>
              <div className={styles.questionMarkSection}>
                <p>?</p>
              </div>
              <div className={styles.faqQuestionsParentSection}>
                <h1>{faqHeading}</h1>
                <div className={styles.questions}>
                  {faqData.map((item, index) => (
                    <div
                      onClick={() => handleQuestionClick(index)}
                      key={index}
                      className={`${styles.questionSection} ${
                        activeIndex === index ? styles.active : ""
                      }`}
                    >
                      <p>{item.question}</p>
                      <RightArrow width={30} height={30} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div
              className={styles.faqAnswersSection}
              dangerouslySetInnerHTML={{ __html: faqData[activeIndex]?.answer }}
            />
          </div>

          <div className={styles.faqParentSectionMobile}>
            <div className={styles.faqQuestionSection}>
              <div className={styles.questionMarkSection}>
                <p>?</p>
              </div>
              <div className={styles.faqQuestionsParentSection}>
                <h1>{faqHeading}</h1>
                <div className={styles.questions}>
                  {faqData.map((item, index) => (
                    <>
                      <div
                        onClick={() => handleQuestionClick(index)}
                        key={index}
                        className={`${styles.questionSection} ${
                          activeIndex === index ? styles.active : ""
                        }`}
                      >
                        <p>{item.question}</p>
                        <RightArrow width={30} height={30} />
                      </div>

                      {activeIndex === index && (
                        <div
                          className={styles.faqAnswersSection}
                          dangerouslySetInnerHTML={{
                            __html: item.answer,
                          }}
                        />
                      )}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FAQ_White_Internal;
