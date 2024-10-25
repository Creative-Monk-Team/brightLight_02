import React, { useEffect, useState } from "react";
import styles from "../styles/Map.module.css";

let Map = () => {
  let [iframeHtml, setIframeHtml] = useState("");
  let [globallyData, setGloballyData] = useState([]);

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/map")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data[0].heading === "string") {
          setIframeHtml(data[0].heading);
        } else {
          console.error("Expected a string but received:", data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://brightlight-node.onrender.com/aboutUsSocialPresenceSection")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setGloballyData(data[0].googleMapsLink);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.mapParent}>
      <div className={styles.mapSection}>
        <div dangerouslySetInnerHTML={{ __html: iframeHtml }} />
        <button className={styles.theButton} role="button">
          <a href={globallyData}>Find Us On Maps</a>
        </button>
      </div>
    </div>
  );
};

export default Map;