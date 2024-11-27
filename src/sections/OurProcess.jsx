import styles from "../styles/OurProcess.module.css";
import BluePointer from "../assets/blue-pointer.png";
import GoldenPointer from "../assets/golden-pointer.png";
import Runway from "../assets/runway.png";
import Plane from "../assets/plane.png";
import { useEffect, useState } from "react";

let OurProcess = () => {
  let [planePosition, setPlanePosition] = useState(0);
  let [ourProcessData, setOurProcessData] = useState([]);
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/our-process")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setOurProcessData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className={styles.ourProcessSection}>
        <div className={styles.fourCardParent}>
          <div className={styles.fourCard}>
            <div className={styles.fourCardHeading}>
              <h1>{ourProcessData?.heading}</h1>
              <p>{ourProcessData?.description}</p>
            </div>
            <div className={styles.fourCardImgParent}>
              <div className={styles.fourCardImg}>
                <div
                  className={`${styles.fourCardMain} ${styles.blueCard}`}
                  onMouseEnter={() => setPlanePosition(270)}
                >
                  <div className={styles.pointerImageSection}>
                    <img
                      src={BluePointer}
                      alt="Step 1"
                      loading="lazy"
                      title="Step 1"
                    />
                    <p>1</p>
                  </div>
                  <h3>{ourProcessData?.step1heading}</h3>
                  <ul>
                    <li>
                      {ourProcessData?.step1p1 ? ourProcessData.step1p1 : null}
                    </li>
                    <li>
                      {ourProcessData?.step1p2 ? ourProcessData.step1p2 : null}
                    </li>
                    <li>
                      {ourProcessData?.step1p3 ? ourProcessData.step1p3 : null}
                    </li>
                    <li>
                      {ourProcessData?.step1p4 ? ourProcessData.step1p4 : null}
                    </li>
                    <li>
                      {ourProcessData?.step1p5 ? ourProcessData.step1p5 : null}
                    </li>
                  </ul>
                </div>
                <div
                  className={`${styles.fourCardMain} ${styles.goldenCard}`}
                  onMouseEnter={() => setPlanePosition(480)}
                >
                  <div className={styles.pointerImageSection}>
                    <img
                      src={GoldenPointer}
                      loading="lazy"
                      alt="Step 2"
                      title="Step 2"
                    />
                    <p>2</p>
                  </div>
                  <h3>{ourProcessData?.step2heading}</h3>
                  <ul>
                    <li>
                      {ourProcessData?.step2p1 ? ourProcessData.step2p1 : null}
                    </li>
                    <li>
                      {ourProcessData?.step2p2 ? ourProcessData.step2p2 : null}
                    </li>
                    <li>
                      {ourProcessData?.step2p3 ? ourProcessData.step2p3 : null}
                    </li>
                    <li>
                      {ourProcessData?.step2p4 ? ourProcessData.step2p4 : null}
                    </li>
                    <li>
                      {ourProcessData?.step2p5 ? ourProcessData.step2p5 : null}
                    </li>
                  </ul>
                </div>
                <div
                  className={`${styles.fourCardMain} ${styles.blueCard}`}
                  onMouseEnter={() => setPlanePosition(690)}
                >
                  <div className={styles.pointerImageSection}>
                    <img
                      src={BluePointer}
                      loading="lazy"
                      alt="Step 3"
                      title="Step 3"
                    />
                    <p>3</p>
                  </div>
                  <h3>{ourProcessData?.step3heading}</h3>
                  <ul>
                    <li>
                      {ourProcessData?.step3p1 ? ourProcessData.step3p1 : null}
                    </li>
                    <li>
                      {ourProcessData?.step3p2 ? ourProcessData.step3p2 : null}
                    </li>
                    <li>
                      {ourProcessData?.step3p3 ? ourProcessData.step3p3 : null}
                    </li>
                    <li>
                      {ourProcessData?.step3p4 ? ourProcessData.step3p4 : null}
                    </li>
                    <li>
                      {ourProcessData?.step3p5 ? ourProcessData.step3p5 : null}
                    </li>
                  </ul>
                </div>
                <div
                  className={`${styles.fourCardMain} ${styles.goldenCard}`}
                  onMouseEnter={() => setPlanePosition(890)}
                >
                  <div className={styles.pointerImageSection}>
                    <img
                      src={GoldenPointer}
                      loading="lazy"
                      alt="Step 4"
                      title="Step 4"
                    />
                    <p>4</p>
                  </div>
                  <h3>{ourProcessData?.step4heading}</h3>
                  <ul>
                    <li>
                      {ourProcessData?.step4p1 ? ourProcessData.step4p1 : null}
                    </li>
                    <li>
                      {ourProcessData?.step4p2 ? ourProcessData.step4p2 : null}
                    </li>
                    <li>
                      {ourProcessData?.step4p3 ? ourProcessData.step4p3 : null}
                    </li>
                    <li>
                      {ourProcessData?.step4p4 ? ourProcessData.step4p4 : null}
                    </li>
                    <li>
                      {ourProcessData?.step4p5 ? ourProcessData.step4p5 : null}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.runwayParent}>
              <img src={Runway} alt="Plane" title="Plane" />
              <img
                src={Plane}
                className={styles.plane}
                alt="Plane"
                title="Plane"
                style={{ left: `${planePosition}px` }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProcess;
