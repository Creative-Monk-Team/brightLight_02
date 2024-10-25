import React, { useEffect, useState } from "react";
import styles from "../styles/TermsAndConditions.module.css";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";

const formatText = (text) => {
  if (!text) return "";
  return text.replace(/\n\n/g, "<br /><br />").replace(/\n/g, "<br />");
};

const TermsAndConditions = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/terms-conditions")
      .then((res) => res.json())
      .then((data) => {
        if (data && data[0]) {
          setData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar1 showBlue={true} />
      <div className={styles.termsContainer}>
        <h1 className={styles.heading}>{data?.heading}</h1>
        <p
          dangerouslySetInnerHTML={{ __html: formatText(data?.description) }}
        ></p>
        <h2 className={styles.subheading}>{data?.subHeading1}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription1),
          }}
        ></p>
        <h2 className={styles.subheading}>{data?.subHeading2}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription2),
          }}
        ></p>

        <h2 className={styles.subheading}>{data?.subHeading3}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription3),
          }}
        ></p>

        <h2 className={styles.subheading}>{data?.subHeading4}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription4),
          }}
        ></p>

        <h2 className={styles.subheading}>{data?.subHeading5}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription5),
          }}
        ></p>

        <h2 className={styles.subheading}>{data?.subHeading6}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription6),
          }}
        ></p>

        <h2 className={styles.subheading}>{data?.subHeading7}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription7),
          }}
        ></p>

        <h2 className={styles.subheading}>{data?.subHeading8}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription8),
          }}
        ></p>

        <h2 className={styles.subheading}>{data?.subHeading9}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription9),
          }}
        ></p>

        <h2 className={styles.subheading}>{data?.subHeading10}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: formatText(data?.subHeadingDescription10),
          }}
        ></p>
      </div>
      <Footer1 />
    </>
  );
};

export default TermsAndConditions;