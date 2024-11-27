import { useEffect, useState } from "react";
import styles from "../styles/FloatingButton.module.css";

let FloatingButton = () => {
  let [showButton, setShowButton] = useState(true);

  useEffect(() => {
    if (window.location.pathname == "/auth/panel/dash/bright") {
      setShowButton(false);
    } else if (window.location.pathname == "/dash/panel/overwrite") {
      setShowButton(false);
    } else if (window.location.pathname == "/booking") {
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
