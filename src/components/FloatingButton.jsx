import { useEffect, useState } from "react";
import styles from "../styles/FloatingButton.module.css";

let FloatingButton = () => {
  let [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (window.location.href == "/auth/panel/dash/bright") {
      setShowButton(false);
    } else if (window.location.href == "/dash/panel/overwrite") {
      setShowButton(false);
    } else if (window.location.href == "/booking") {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  }, []);
  return (
    <>
      {showButton ? (
        <button
          className={styles.floatingFreeButton}
          onClick={() => window.open("/booking", "_blank")}
        >
          Book Free Assessment
        </button>
      ) : null}
    </>
  );
};

export default FloatingButton;
