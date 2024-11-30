import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/delete.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

let Redirects = () => {
  let notifySuccess = () => {
    toast.success("Success", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifyError = () => {
    toast.error("Request Rejected, Please try again later.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let notifySize = () => {
    toast.error("Large Image Size Recieved.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  let [sectionDataSingle, setSectionDataSingle] = useState({
    redirectFrom1: "",
    redirectTo1: "",
    redirectFrom2: "",
    redirectTo2: "",
    redirectFrom3: "",
    redirectTo3: "",
    redirectFrom4: "",
    redirectTo4: "",
    redirectFrom5: "",
    redirectTo5: "",
    redirectFrom6: "",
    redirectTo6: "",
    redirectFrom7: "",
    redirectTo7: "",
    redirectFrom8: "",
    redirectTo8: "",
    redirectFrom9: "",
    redirectTo9: "",
    redirectFrom10: "",
    redirectTo10: "",
    redirectFrom11: "",
    redirectTo11: "",
    redirectFrom12: "",
    redirectTo12: "",
    redirectFrom13: "",
    redirectTo13: "",
    redirectFrom14: "",
    redirectTo14: "",
    redirectFrom15: "",
    redirectTo15: "",
    redirectFrom16: "",
    redirectTo16: "",
    redirectFrom17: "",
    redirectTo17: "",
    redirectFrom18: "",
    redirectTo18: "",
    redirectFrom19: "",
    redirectTo19: "",
    redirectFrom20: "",
    redirectTo20: "",
    redirectFrom21: "",
    redirectTo21: "",
    redirectFrom22: "",
    redirectTo22: "",
    redirectFrom23: "",
    redirectTo23: "",
    redirectFrom24: "",
    redirectTo24: "",
    redirectFrom25: "",
    redirectTo25: "",
    redirectFrom26: "",
    redirectTo26: "",
    redirectFrom27: "",
    redirectTo27: "",
    redirectFrom28: "",
    redirectTo28: "",
    redirectFrom29: "",
    redirectTo29: "",
    redirectFrom30: "",
    redirectTo30: "",
    redirectFrom31: "",
    redirectTo31: "",
    redirectFrom32: "",
    redirectTo32: "",
    redirectFrom33: "",
    redirectTo33: "",
    redirectFrom34: "",
    redirectTo34: "",
    redirectFrom35: "",
    redirectTo35: "",
    redirectFrom36: "",
    redirectTo36: "",
    redirectFrom37: "",
    redirectTo37: "",
    redirectFrom38: "",
    redirectTo38: "",
    redirectFrom39: "",
    redirectTo39: "",
    redirectFrom40: "",
    redirectTo40: "",
    redirectFrom41: "",
    redirectTo41: "",
    redirectFrom42: "",
    redirectTo42: "",
    redirectFrom43: "",
    redirectTo43: "",
    redirectFrom44: "",
    redirectTo44: "",
    redirectFrom45: "",
    redirectTo45: "",
    redirectFrom46: "",
    redirectTo46: "",
    redirectFrom47: "",
    redirectTo47: "",
    redirectFrom48: "",
    redirectTo48: "",
    redirectFrom49: "",
    redirectTo49: "",
    redirectFrom50: "",
    redirectTo50: "",
  });
  let [editMode, setEditMode] = useState(false);

  let handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  let handleEditClick = () => {
    setEditMode(true);
  };

  let handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/redirects/${sectionDataSingle._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sectionDataSingle),
      }
    )
      .then((response) => {
        if (response.status === 413) {
          notifySize();
          throw new Error("Payload too large");
        } else if (!response.ok) {
          notifyError();
          throw new Error("Network response was not ok.");
        }
        return response.json();
      })
      .then(() => {
        notifySuccess();
        setEditMode(false);
      })
      .catch((error) => {
        notifyError();
        console.error("Error updating data:", error);
      });
  };

  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/redirects")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setSectionDataSingle(data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  let renderRedirectInputs = () => {
    return Array.from({ length: 99 }, (_, index) => {
      let i = index + 1;
      return (
        <div
          className={`${styles.threeColumnsTable} ${styles.selectTagStyles}`}
          key={i}
        >
          <input
            placeholder={`Redirect From ${i}`}
            name={`redirectFrom${i}`}
            value={sectionDataSingle[`redirectFrom${i}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          />
          <p>{"----->"}</p>
          <select
            placeholder={`Redirect To ${i}`}
            name={`redirectTo${i}`}
            value={sectionDataSingle[`redirectTo${i}`] || ""}
            onChange={handleInputChange}
            disabled={!editMode}
          >
            <option value="#"># (For Non Route / None)</option>
            <option value="booking">
              Free Assesement
              (https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj)
            </option>
            <option value="about-us">About Us</option>
            <option value="additional-document">Additional Document</option>
            <option value="adoption">Adoption</option>
            <option value="agri-food-pilot-program">
              Agri Food Pilot Program
            </option>
            <option value="agriculture-agri-food-occupation">
              Agriculture Agri Food Occupation
            </option>
            <option value="agriculture-stream-lmia">
              Agriculture Stream Lmia
            </option>
            <option value="bc-pnp">Bc Pnp</option>
            <option value="bcpnp-calculator">BCPNP Calc</option>
            <option value="bcpnp-calculator">Bcpnp Calculator</option>
            <option value="booking">Booking</option>
            <option value="bridging-open-work-permit-lp">
              Bridging Open Work Permit LP
            </option>
            <option value="business-visitor-visa">Business Visitor Visa</option>
            <option value="canadian-experience-class">
              Canadian Experience Class
            </option>
            <option value="category-based">Category Based Draws</option>
            <option value="category-based-express">
              Category Based Express
            </option>
            <option value="change-college-program">
              Change College Program
            </option>
            <option value="citizenship">Citizenship</option>
            <option value="clb-ilets-calculator?selected=type1">
              CLB Calc for IELTS
            </option>
            <option value="clb-ilets-calculator?selected=type2">
              CLB Calc for TEF (French)
            </option>
            <option value="clb-ilets-calculator?selected=type3">
              CLB Calc for CELPIP
            </option>
            <option value="cby">Cby</option>
            <option value="common-law-partner-international">
              Common Law Partner International
            </option>
            <option value="common-law-partner-permanent">
              Common Law Partner Permanent
            </option>
            <option value="common-law-partner-temporary">
              Common Law Partner Temporary
            </option>
            <option value="contact-us">Contact Us</option>
            <option value="dependent-children">Dependent Children</option>
            <option value="dual-intent-visa">Dual Intent Visa</option>
            <option value="entry-level-semi-skilled">
              Entry Level Semi Skilled
            </option>
            <option value="express-entry">Express Entry</option>
            <option value="extensions-draft">Extensions Draft</option>
            <option value="family-reunification-sponsorship">
              Family Reunification Sponsorship
            </option>
            <option value="federal-skilled">Federal Skilled</option>
            <option value="federal-skilled-trades-program">
              Federal Skilled Trades Program
            </option>
            <option value="federal-skilled-worker-program">
              Federal Skilled Worker Program
            </option>
            <option value="federal-skilled">FSWP Calc</option>
            <option value="flagpoling">Flagpoling</option>
            <option value="francophone-mobility-program">
              Francophone Mobility Program
            </option>
            <option value="french-targeted-draw">French Targeted Draw</option>
            <option value="global-stream-lmia">Global Stream Lmia</option>
            <option value="health-authority-stream">
              Health Authority Stream
            </option>
            <option value="healthcare-targeted-draw">
              Healthcare Targeted Draw
            </option>
            <option value="humanitarian-compassionate">
              Humanitarian Compassionate
            </option>
            <option value="immigration-tools">Immigration Tools</option>
            <option value="in-home-caregiver-program-lp">
              In Home Caregiver Program LP
            </option>
            <option value="inside-canada">Inside Canada</option>
            <option value="international-graduate-program">
              International Graduate Program
            </option>
            <option value="international-post-graduate-program">
              International Post Graduate Program
            </option>
            <option value="lmia-reviewed">Lmia Reviewed</option>
            <option value="lonely-canadian">Lonely Canadian</option>
            <option value="low-wage-lmia">Low Wage Lmia</option>
            <option value="non-sds">Non Sds</option>
            <option value="open-work-permit">Open Work Permit</option>
            <option value="open-work-permit-for-spouse-inland">
              Open Work Permit for Spouse Inland
            </option>
            <option value="open-work-vulnerable-lp">
              Open Work Vulnerable LP
            </option>
            <option value="openWork-dependent-children">
              Open Work Dependent Children
            </option>
            <option value="orphan">Orphan</option>
            <option value="outside-canada">Outside Canada</option>
            <option value="parentsgrandparents">Parents Grandparents</option>
            <option value="pathways-for-caregiver">
              Pathways for Caregiver
            </option>
            <option value="permanent-residence-pathways-caregivers-lp">
              Permanent Residence Pathways Caregivers LP
            </option>
            <option value="permanent-residency">Permanent Residency</option>
            <option value="pgwp">Pgwp</option>
            <option value="pilot-programs">Pilot Programs</option>
            <option value="pnp">Pnp</option>
            <option value="previous-draw-history">Previous Draw History</option>
            <option value="priorities-program">Priorities Program</option>
            <option value="pr-renewal">Pr Renewal</option>
            <option value="reconsideration">Reconsideration</option>
            <option value="reply-to-pfl-page">Reply to PFL Page</option>
            <option value="restoration-status-draft">
              Restoration Status Draft
            </option>
            <option value="rnip">Rnip</option>
            <option value="same-sex">Same Sex</option>
            <option value="sds">Sds</option>
            <option value="skilled-worker-stream">Skilled Worker Stream</option>
            <option value="spousal-open-work-permit">
              Spousal Open Work Permit
            </option>
            <option value="spouse-common-law-sponsership">
              Spouse Common Law Sponsorship
            </option>
            <option value="spouse-inland">Spouse Inland</option>
            <option value="spouse-outland">Spouse Outland</option>
            <option value="stem-targeted-draw">Stem Targeted Draw</option>
            <option value="student-visa">Student Visa</option>
            <option value="study-permit-minors">Study Permit Minors</option>
            <option value="super-visa">Super Visa</option>
            <option value="temporary-resident">Temporary Resident</option>
            <option value="temporary-resident-permit-draft">
              Temporary Resident Permit Draft
            </option>
            <option value="trade-occupation-targeted-draw">
              Trade Occupation Targeted Draw
            </option>
            <option value="transport-occupation">Transport Occupation</option>
            <option value="transport-occupation-targeted-draw">
              Transport Occupation Targeted Draw
            </option>
            <option value="visitor-to-student">Visitor to Student</option>
            <option value="visitor-visa">Visitor Visa</option>
            <option value="work-permit">Work Permit</option>
          </select>
        </div>
      );
    });
  };

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />
      <p className={styles.precautionLine}>
        To A Redirect to any URL, enter the url that needs to be redirect in
        left side, and the desired location at the right side of each block
        below. (Note: Only Enter the pathname in the left input :-
        "/pathname-here" without qoutes in small letters)
      </p>
      {renderRedirectInputs()}
      <div className={styles.editIcons}>
        {editMode ? (
          <img
            src={update}
            className={styles.updateIcon}
            onClick={handleUpdateClick}
            alt="Update"
          />
        ) : (
          <img
            src={editIcon}
            className={styles.editIcon}
            onClick={handleEditClick}
            alt="Edit"
          />
        )}
      </div>
    </div>
  );
};

export default Redirects;
