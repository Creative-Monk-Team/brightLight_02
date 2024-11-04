import styles from "../styles/Admin.module.css";
import { useState, useEffect } from "react";
import editIcon from "../assets/edit.png";
import update from "../assets/update.png";
import { ToastContainer, toast, Bounce } from "react-toastify";

const OpenWorkCanadaContent = () => {
  const notifySuccess = () => {
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

  const notifyError = () => {
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

  const notifySize = () => {
    toast.error("Large Image Size Received.", {
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

  const [sectionDataSingle, setSectionDataSingle] = useState({
    openWorkDepHeading: "",
    openWorkDepPara: "",

    BenifitsHeading: "",
    BenifitsList1: "",
    BenifitsList2: "",
    BenifitsList3: "",
    BenifitsList4: "",
    BenifitsList5: "",
    BenifitsList6: "",

    EligibilityHeading: "",
    EligibilitySubHead: "",

    EligMainSubHead1: "",
    EligMain1List1: "",
    EligMainSub1List1: "",
    EligMainSub1List2: "",
    EligMainSub1List3: "",

    EligMain2List: "",

    EligMain3List: "",

    EligMain4List: "",

    EligMain5List: "",
    EligMainSub5List1: "",
    EligMainSub5List2: "",
    EligMainSub5List3: "",
    EligMainSub5List4: "",
    EligMainSub5List5: "",
    EligMainSub5List6: "",

    EligMainSubHead2: "",
    EligMainSubHead2Para: "",
    EligMain6List: "",
    EligMainSub6List1: "",
    EligMainSub6List2: "",
    EligMainSub6List3: "",

    EligMain7List: "",

    EligMain8List: "",

    EligMain9List: "",

    EligMain10List: "",

    EligMain11List: "",
    EligMainSub11List1: "",
    EligMainSub11List2: "",
    EligMainSub11List3: "",
    EligMainSub11List4: "",
    EligMainSub11List5: "",
    EligMainSub11List6: "",
    EligMainSub11List7: "",
    EligMainSub11List8: "",

    EligMainSubHead3: "",
    EligMainSubHead3Para: "",
    EligMain12List: "",
    EligMainSub12List1: "",
    EligMainSub12List2: "",

    EligMain13List: "",
    EligMain14List: "",
    EligMain15List: "",

    ReqHeading: "",
    Reqlist1: "",
    Reqlist2: "",
    Reqlist3: "",
    Reqlist4: "",

    LegalMinTableHeading: "",
    LegalMinTableHead1: "",
    LegalMinTab1Head1: "",
    LegalMinTab1Head2: "",
    LegalMinTab1Head3: "",
    LegalMinTab1Head4: "",
    LegalMinTab1Head5: "",
    LegalMinTab1Head6: "",
    LegalMinTab1Head7: "",
    LegalMinTab1Head8: "",
    LegalMinTab1Head9: "",
    LegalMinTab1Head10: "",
    LegalMinTab1Head11: "",
    LegalMinTab1Head12: "",
    LegalMinTab1Head13: "",

    LegalMinTableHead3: "",
    LegalMinTab3Head1: "",
    LegalMinTab3Head2: "",
    LegalMinTab3Head3: "",
    LegalMinTab3Head4: "",
    LegalMinTab3Head5: "",
    LegalMinTab3Head6: "",
    LegalMinTab3Head7: "",
    LegalMinTab3Head8: "",
    LegalMinTab3Head9: "",
    LegalMinTab3Head10: "",
    LegalMinTab3Head11: "",
    LegalMinTab3Head12: "",
    LegalMinTab3Head13: "",

    HowApplyHeading: "",
    HowAppList1: "",
    HowAppList2: "",
    HowAppList3: "",
    HowAppList4: "",
    HowAppList5: "",
    HowAppList6: "",
    HowAppList7: "",

    RefusalHeading: "",
    RefusalList1: "",
    RefusalList2: "",
    RefusalList3: "",
    RefusalList4: "",

    StillNotSureHeading: "",
    StillNotSurePara: "",

    YouMustHoldlabour: "",

    WhyChooseUsHeading01: "",
    wcu1: "",
    wcu2: "",
    wcu3: "",
    wcu4: "",

    faq_heading: "",
    q1: "",
    qa1: "",
    q2: "",
    qa2: "",
    q3: "",
    qa3: "",
    q4: "",
    qa4: "",
    q5: "",
    qa5: "",
    q6: "",
    qa6: "",
    q7: "",
    qa7: "",
    q8: "",
    qa8: "",
    q9: "",
    qa9: "",
    q10: "",
    qa10: "",

    show_testimonials: "",
  });

  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    setSectionDataSingle({
      ...sectionDataSingle,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleUpdateClick = () => {
    if (!sectionDataSingle._id) {
      console.error("No ID found for update.");
      return;
    }

    fetch(
      `https://brightlight-node.onrender.com/openWorkDependentChild/${sectionDataSingle._id}`,
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
    fetch("https://brightlight-node.onrender.com/openWorkDependentChild")
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

  return (
    <div className={styles.singleSectionData}>
      <ToastContainer />
      <input
        placeholder="Open Work Permit Heading"
        name="openWorkDepHeading"
        value={sectionDataSingle.openWorkDepHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Open Work Permit Paragraph"
        name="openWorkDepPara"
        value={sectionDataSingle.openWorkDepPara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Benefits Heading"
        name="BenifitsHeading"
        value={sectionDataSingle.BenifitsHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Benefits List 1"
        name="BenifitsList1"
        value={sectionDataSingle.BenifitsList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits List 2"
        name="BenifitsList2"
        value={sectionDataSingle.BenifitsList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits List 3"
        name="BenifitsList3"
        value={sectionDataSingle.BenifitsList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits List 4"
        name="BenifitsList4"
        value={sectionDataSingle.BenifitsList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits List 5"
        name="BenifitsList5"
        value={sectionDataSingle.BenifitsList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Benefits List 6"
        name="BenifitsList6"
        value={sectionDataSingle.BenifitsList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Heading"
        name="EligibilityHeading"
        value={sectionDataSingle.EligibilityHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Sub Heading"
        name="EligibilitySubHead"
        value={sectionDataSingle.EligibilitySubHead || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Main Sub Heading 1"
        name="EligMainSubHead1"
        value={sectionDataSingle.EligMainSubHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 1"
        name="EligMain1List1"
        value={sectionDataSingle.EligMain1List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main Sub List 1"
        name="EligMainSub1List1"
        value={sectionDataSingle.EligMainSub1List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 2"
        name="EligMainSub1List2"
        value={sectionDataSingle.EligMainSub1List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 3"
        name="EligMainSub1List3"
        value={sectionDataSingle.EligMainSub1List3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 2"
        name="EligMain2List"
        value={sectionDataSingle.EligMain2List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 3"
        name="EligMain3List"
        value={sectionDataSingle.EligMain3List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 4"
        name="EligMain4List"
        value={sectionDataSingle.EligMain4List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 5"
        name="EligMain5List"
        value={sectionDataSingle.EligMain5List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 5.1"
        name="EligMainSub5List1"
        value={sectionDataSingle.EligMainSub5List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 5.2"
        name="EligMainSub5List2"
        value={sectionDataSingle.EligMainSub5List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 5.3"
        name="EligMainSub5List3"
        value={sectionDataSingle.EligMainSub5List3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 5.4"
        name="EligMainSub5List4"
        value={sectionDataSingle.EligMainSub5List4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 5.5"
        name="EligMainSub5List5"
        value={sectionDataSingle.EligMainSub5List5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 5.6"
        name="EligMainSub5List6"
        value={sectionDataSingle.EligMainSub5List6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Main Sub Head 2"
        name="EligMainSubHead2"
        value={sectionDataSingle.EligMainSubHead2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main Sub Head 2 Paragraph"
        name="EligMainSubHead2Para"
        value={sectionDataSingle.EligMainSubHead2Para || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 6"
        name="EligMain6List"
        value={sectionDataSingle.EligMain6List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 6.1"
        name="EligMainSub6List1"
        value={sectionDataSingle.EligMainSub6List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 6.2"
        name="EligMainSub6List2"
        value={sectionDataSingle.EligMainSub6List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 6.3"
        name="EligMainSub6List3"
        value={sectionDataSingle.EligMainSub6List3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 7"
        name="EligMain7List"
        value={sectionDataSingle.EligMain7List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 8"
        name="EligMain8List"
        value={sectionDataSingle.EligMain8List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 9"
        name="EligMain9List"
        value={sectionDataSingle.EligMain9List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 10"
        name="EligMain10List"
        value={sectionDataSingle.EligMain10List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 11"
        name="EligMain11List"
        value={sectionDataSingle.EligMain11List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 11.1"
        name="EligMainSub11List1"
        value={sectionDataSingle.EligMainSub11List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 11.2"
        name="EligMainSub11List2"
        value={sectionDataSingle.EligMainSub11List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 11.3"
        name="EligMainSub11List3"
        value={sectionDataSingle.EligMainSub11List3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 11.4"
        name="EligMainSub11List4"
        value={sectionDataSingle.EligMainSub11List4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 11.5"
        name="EligMainSub11List5"
        value={sectionDataSingle.EligMainSub11List5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 11.6"
        name="EligMainSub11List6"
        value={sectionDataSingle.EligMainSub11List6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 11.7"
        name="EligMainSub11List7"
        value={sectionDataSingle.EligMainSub11List7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 11.8"
        name="EligMainSub11List8"
        value={sectionDataSingle.EligMainSub11List8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Eligibility Main Sub Head 3"
        name="EligMainSubHead3"
        value={sectionDataSingle.EligMainSubHead3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main Sub Head 3 Paragraph"
        name="EligMainSubHead3Para"
        value={sectionDataSingle.EligMainSubHead3Para || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 12"
        name="EligMain12List"
        value={sectionDataSingle.EligMain12List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 12.1"
        name="EligMainSub12List1"
        value={sectionDataSingle.EligMainSub12List1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main Sub List 12.2"
        name="EligMainSub12List2"
        value={sectionDataSingle.EligMainSub12List2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Eligibility Main List 13"
        name="EligMain13List"
        value={sectionDataSingle.EligMain13List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main List 14"
        name="EligMain14List"
        value={sectionDataSingle.EligMain14List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Eligibility Main List 15"
        name="EligMain15List"
        value={sectionDataSingle.EligMain15List || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Requirements Heading"
        name="ReqHeading"
        value={sectionDataSingle.ReqHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Requirement List 1"
        name="Reqlist1"
        value={sectionDataSingle.Reqlist1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Requirement List 2"
        name="Reqlist2"
        value={sectionDataSingle.Reqlist2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Requirement List 3"
        name="Reqlist3"
        value={sectionDataSingle.Reqlist3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Requirement List 4"
        name="Reqlist4"
        value={sectionDataSingle.Reqlist4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Legal Minimum Table Heading"
        name="LegalMinTableHeading"
        value={sectionDataSingle.LegalMinTableHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Legal Minimum Table Head 1"
        name="LegalMinTableHead1"
        value={sectionDataSingle.LegalMinTableHead1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Legal Minimum Tab 1 Head 1"
        name="LegalMinTab1Head1"
        value={sectionDataSingle.LegalMinTab1Head1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 2"
        name="LegalMinTab1Head2"
        value={sectionDataSingle.LegalMinTab1Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 3"
        name="LegalMinTab1Head3"
        value={sectionDataSingle.LegalMinTab1Head3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 4"
        name="LegalMinTab1Head4"
        value={sectionDataSingle.LegalMinTab1Head4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 5"
        name="LegalMinTab1Head5"
        value={sectionDataSingle.LegalMinTab1Head5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 6"
        name="LegalMinTab1Head6"
        value={sectionDataSingle.LegalMinTab1Head6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 7"
        name="LegalMinTab1Head7"
        value={sectionDataSingle.LegalMinTab1Head7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 8"
        name="LegalMinTab1Head8"
        value={sectionDataSingle.LegalMinTab1Head8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 9"
        name="LegalMinTab1Head9"
        value={sectionDataSingle.LegalMinTab1Head9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 10"
        name="LegalMinTab1Head10"
        value={sectionDataSingle.LegalMinTab1Head10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 11"
        name="LegalMinTab1Head11"
        value={sectionDataSingle.LegalMinTab1Head11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 12"
        name="LegalMinTab1Head12"
        value={sectionDataSingle.LegalMinTab1Head12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 1 Head 13"
        name="LegalMinTab1Head13"
        value={sectionDataSingle.LegalMinTab1Head13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Legal Minimum Table Head 3"
        name="LegalMinTableHead3"
        value={sectionDataSingle.LegalMinTableHead3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Legal Minimum Tab 3 Head 1"
        name="LegalMinTab3Head1"
        value={sectionDataSingle.LegalMinTab3Head1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 2"
        name="LegalMinTab3Head2"
        value={sectionDataSingle.LegalMinTab3Head2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 3"
        name="LegalMinTab3Head3"
        value={sectionDataSingle.LegalMinTab3Head3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 4"
        name="LegalMinTab3Head4"
        value={sectionDataSingle.LegalMinTab3Head4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 5"
        name="LegalMinTab3Head5"
        value={sectionDataSingle.LegalMinTab3Head5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 6"
        name="LegalMinTab3Head6"
        value={sectionDataSingle.LegalMinTab3Head6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 7"
        name="LegalMinTab3Head7"
        value={sectionDataSingle.LegalMinTab3Head7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 8"
        name="LegalMinTab3Head8"
        value={sectionDataSingle.LegalMinTab3Head8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 9"
        name="LegalMinTab3Head9"
        value={sectionDataSingle.LegalMinTab3Head9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 10"
        name="LegalMinTab3Head10"
        value={sectionDataSingle.LegalMinTab3Head10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 11"
        name="LegalMinTab3Head11"
        value={sectionDataSingle.LegalMinTab3Head11 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 12"
        name="LegalMinTab3Head12"
        value={sectionDataSingle.LegalMinTab3Head12 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Legal Minimum Tab 3 Head 13"
        name="LegalMinTab3Head13"
        value={sectionDataSingle.LegalMinTab3Head13 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="How to Apply Heading"
        name="HowApplyHeading"
        value={sectionDataSingle.HowApplyHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="How to Apply List 1"
        name="HowAppList1"
        value={sectionDataSingle.HowAppList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 2"
        name="HowAppList2"
        value={sectionDataSingle.HowAppList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 3"
        name="HowAppList3"
        value={sectionDataSingle.HowAppList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 4"
        name="HowAppList4"
        value={sectionDataSingle.HowAppList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 5"
        name="HowAppList5"
        value={sectionDataSingle.HowAppList5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 6"
        name="HowAppList6"
        value={sectionDataSingle.HowAppList6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="How to Apply List 7"
        name="HowAppList7"
        value={sectionDataSingle.HowAppList7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Refusal Heading"
        name="RefusalHeading"
        value={sectionDataSingle.RefusalHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Refusal List 1"
        name="RefusalList1"
        value={sectionDataSingle.RefusalList1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List 2"
        name="RefusalList2"
        value={sectionDataSingle.RefusalList2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List 3"
        name="RefusalList3"
        value={sectionDataSingle.RefusalList3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Refusal List 4"
        name="RefusalList4"
        value={sectionDataSingle.RefusalList4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Still Not Sure Heading"
        name="StillNotSureHeading"
        value={sectionDataSingle.StillNotSureHeading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Still Not Sure Paragraph"
        name="StillNotSurePara"
        value={sectionDataSingle.StillNotSurePara || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="You Must Hold Labour"
        name="YouMustHoldlabour"
        value={sectionDataSingle.YouMustHoldlabour || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <input
        placeholder="Why Choose Us Heading"
        name="WhyChooseUsHeading01"
        value={sectionDataSingle.WhyChooseUsHeading01 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 1"
        name="wcu1"
        value={sectionDataSingle.wcu1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 2"
        name="wcu2"
        value={sectionDataSingle.wcu2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <textarea
        placeholder="Why Choose Us Point 3"
        name="wcu3"
        value={sectionDataSingle.wcu3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Why Choose Us Point 4"
        name="wcu4"
        value={sectionDataSingle.wcu4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqStartsHeading}>FAQ's Starts Below</h1>

      <input
        placeholder="FAQ's Made Simple"
        name="faq_heading"
        value={sectionDataSingle.faq_heading || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 1"
        name="q1"
        value={sectionDataSingle.q1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 1"
        name="qa1"
        value={sectionDataSingle.qa1 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 2"
        name="q2"
        value={sectionDataSingle.q2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 2"
        name="qa2"
        value={sectionDataSingle.qa2 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 3"
        name="q3"
        value={sectionDataSingle.q3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 3"
        name="qa3"
        value={sectionDataSingle.qa3 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 4"
        name="q4"
        value={sectionDataSingle.q4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 4"
        name="qa4"
        value={sectionDataSingle.qa4 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 5"
        name="q5"
        value={sectionDataSingle.q5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 5"
        name="qa5"
        value={sectionDataSingle.qa5 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 6"
        name="q6"
        value={sectionDataSingle.q6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 6"
        name="qa6"
        value={sectionDataSingle.qa6 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 7"
        name="q7"
        value={sectionDataSingle.q7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 7"
        name="qa7"
        value={sectionDataSingle.qa7 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 8"
        name="q8"
        value={sectionDataSingle.q8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 8"
        name="qa8"
        value={sectionDataSingle.qa8 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 9"
        name="q9"
        value={sectionDataSingle.q9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 9"
        name="qa9"
        value={sectionDataSingle.qa9 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <input
        placeholder="Question 10"
        name="q10"
        value={sectionDataSingle.q10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />
      <textarea
        placeholder="Answer 10"
        name="qa10"
        value={sectionDataSingle.qa10 || ""}
        onChange={handleInputChange}
        disabled={!editMode}
      />

      <h1 className={styles.faqEndHeading}>FAQ's Ends here</h1>
      
      <h1 className={styles.faqStartsHeading}>
        Testimonials Visibility Control
      </h1>

      <div className={styles.testimonialsVisibility}>
        <p>Want to display Testimonials Section</p>
        <input
          placeholder="Show Testimonials"
          name="show_testimonials"
          value={sectionDataSingle.show_testimonials || ""}
          onChange={handleInputChange}
          disabled={!editMode}
        />
      </div>
      <p className={styles.testimonialsDisclamier}>
        Note: Testimonials Visibility On the Selected Page is totally dependent
        on the input value above. If you want to display the section , just
        write "Y" without quotes , anything else will be considered as "N" even
        "y". If not want to display then just write "N" without qoutes.
      </p>
      
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

export default OpenWorkCanadaContent;
