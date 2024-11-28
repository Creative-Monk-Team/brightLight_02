import { useState, useEffect } from "react";
import styles from "../styles/RecentBlogs.module.css";

let RecentBlogs = () => {
  let [blogs, setBlogs] = useState([]);
  let [filterBlogsParam, setFilterBlogsParam] = useState("");
  let [shouldFetch, setShouldFetch] = useState(true);

  useEffect(() => {
    let urlPath = window.location.pathname;
    let serviceName = urlPath.split("/")[1];

    if (serviceName) {
      // if (serviceName === "visitor-visa") {
      //   setFilterBlogsParam("Visitor Visa");
      // } else if (serviceName === "work-permit") {
      //   setFilterBlogsParam("Work Permit");
      // } else if (serviceName === "skilled-worker-stream") {
      //   setFilterBlogsParam("Skilled Worker Stream");
      // } else if (serviceName === "priorities-program") {
      //   setFilterBlogsParam("Priorities Program");
      // } else if (serviceName === "international-post-graduate-program") {
      //   setFilterBlogsParam("International Post Graduate Program");
      // } else if (serviceName === "international-graduate-program") {
      //   setFilterBlogsParam("International Graduate Program");
      // } else if (serviceName === "health-authority-stream") {
      //   setFilterBlogsParam("Health Authority Stream");
      // } else if (serviceName === "stem-targeted-draw") {
      //   setFilterBlogsParam("STEM Targeted Draw");
      // } else if (serviceName === "trade-occupation-targeted-draw") {
      //   setFilterBlogsParam("Trade Occupation Targeted Draw");
      // } else if (serviceName === "canadian-experience-class") {
      //   setFilterBlogsParam("Canadian Experience Class");
      // } else if (serviceName === "same-sex") {
      //   setFilterBlogsParam("Same Sex");
      // } else if (serviceName === "visitor-to-student") {
      //   setFilterBlogsParam("Visitor to Student");
      // } else if (serviceName === "change-college-program") {
      //   setFilterBlogsParam("Change College Program");
      // } else if (serviceName === "study-permit-minors") {
      //   setFilterBlogsParam("Study Permit Minors");
      // } else if (serviceName === "super-visa") {
      //   setFilterBlogsParam("Super Visa");
      // } else if (serviceName === "bc-pnp") {
      //   setFilterBlogsParam("BC PNP");
      // } else if (serviceName === "pilot-programs") {
      //   setFilterBlogsParam("Pilot Programs");
      // } else if (serviceName === "dual-intent-visa") {
      //   setFilterBlogsParam("Dual Intent Visa");
      // } else if (serviceName === "business-visitor-visa") {
      //   setFilterBlogsParam("Business Visitor Visa");
      // } else if (serviceName === "family-reunification-sponsorship") {
      //   setFilterBlogsParam("Family Reunification Sponsorship");
      // } else if (serviceName === "dependent-children") {
      //   setFilterBlogsParam("Dependent Children");
      // } else if (serviceName === "adoption") {
      //   setFilterBlogsParam("Adoption");
      // } else if (serviceName === "humanitarian-compassionate") {
      //   setFilterBlogsParam("Humanitarian and Compassionate");
      // } else if (serviceName === "spouse-inland") {
      //   setFilterBlogsParam("Spouse Inland");
      // } else if (serviceName === "spouse-outland") {
      //   setFilterBlogsParam("Spouse Outland");
      // } else if (serviceName === "spousal-open-work-permit") {
      //   setFilterBlogsParam("Spousal Open Work Permit");
      // } else if (serviceName === "low-wage-lmia") {
      //   setFilterBlogsParam("Low Wage LMIA");
      // } else if (serviceName === "global-stream-lmia") {
      //   setFilterBlogsParam("Global Stream LMIA");
      // } else if (serviceName === "permanent-residence-pathways-caregivers-lp") {
      //   setFilterBlogsParam("Permanent Residence Pathways Caregivers");
      // } else if (serviceName === "category-based-express") {
      //   setFilterBlogsParam("Category Based Express");
      // } else if (serviceName === "pgwp") {
      //   setFilterBlogsParam("PGWP");
      // }

      if (serviceName === "visitor-visa") {
        setFilterBlogsParam("Visitor Visa");
      } else if (serviceName === "work-permit") {
        setFilterBlogsParam("Work Permit");
      } else if (serviceName === "skilled-worker-stream") {
        setFilterBlogsParam("Skilled Worker Stream");
      } else if (serviceName === "priorities-program") {
        setFilterBlogsParam("Priorities Program");
      } else if (serviceName === "international-post-graduate-program") {
        setFilterBlogsParam("International Post Graduate Program");
      } else if (serviceName === "international-graduate-program") {
        setFilterBlogsParam("International Graduate Program");
      } else if (serviceName === "health-authority-stream") {
        setFilterBlogsParam("Health Authority Stream");
      } else if (serviceName === "stem-targeted-draw") {
        setFilterBlogsParam("STEM Targeted Draw");
      } else if (serviceName === "trade-occupation-targeted-draw") {
        setFilterBlogsParam("Trade Occupation Targeted Draw");
      } else if (serviceName === "canadian-experience-class") {
        setFilterBlogsParam("Canadian Experience Class");
      } else if (serviceName === "same-sex") {
        setFilterBlogsParam("Same Sex");
      } else if (serviceName === "visitor-to-student") {
        setFilterBlogsParam("Visitor to Student");
      } else if (serviceName === "change-college-program") {
        setFilterBlogsParam("Change College Program");
      } else if (serviceName === "study-permit-minors") {
        setFilterBlogsParam("Study Permit Minors");
      } else if (serviceName === "super-visa") {
        setFilterBlogsParam("Super Visa");
      } else if (serviceName === "bc-pnp") {
        setFilterBlogsParam("BC PNP");
      } else if (serviceName === "pilot-programs") {
        setFilterBlogsParam("Pilot Programs");
      } else if (serviceName === "dual-intent-visa") {
        setFilterBlogsParam("Dual Intent Visa");
      } else if (serviceName === "business-visitor-visa") {
        setFilterBlogsParam("Business Visitor Visa");
      } else if (serviceName === "family-reunification-sponsorship") {
        setFilterBlogsParam("Family Reunification Sponsorship");
      } else if (serviceName === "dependent-children") {
        setFilterBlogsParam("Dependent Children");
      } else if (serviceName === "adoption") {
        setFilterBlogsParam("Adoption");
      } else if (serviceName === "humanitarian-compassionate") {
        setFilterBlogsParam("Humanitarian and Compassionate");
      } else if (serviceName === "spouse-inland") {
        setFilterBlogsParam("Spouse Inland");
      } else if (serviceName === "spouse-outland") {
        setFilterBlogsParam("Spouse Outland");
      } else if (serviceName === "spousal-open-work-permit") {
        setFilterBlogsParam("Spousal Open Work Permit");
      } else if (serviceName === "low-wage-lmia") {
        setFilterBlogsParam("Low Wage LMIA");
      } else if (serviceName === "global-stream-lmia") {
        setFilterBlogsParam("Global Stream LMIA");
      } else if (serviceName === "permanent-residence-pathways-caregivers-lp") {
        setFilterBlogsParam("Permanent Residence Pathways Caregivers");
      } else if (serviceName === "category-based-express") {
        setFilterBlogsParam("Category Based Express");
      } else if (serviceName === "pgwp") {
        setFilterBlogsParam("PGWP");
      } else if (serviceName === "temporary-resident") {
        setFilterBlogsParam("Temporary Residency");
      } else if (serviceName === "express-entry") {
        setFilterBlogsParam("Express Entry");
      } else if (serviceName === "permanent-residency") {
        setFilterBlogsParam("Permanent Residency");
      } else if (serviceName === "blogs") {
        setFilterBlogsParam("Blogs");
      } else if (serviceName === "blogs/:id") {
        setFilterBlogsParam("Blog Details");
      } else if (serviceName === "news") {
        setFilterBlogsParam("News");
      } else if (serviceName === "news/:id") {
        setFilterBlogsParam("News Details");
      } else if (serviceName === "category-based") {
        setFilterBlogsParam("Category Based");
      } else if (serviceName === "clb-ilets-calculator") {
        setFilterBlogsParam("CLB ILETS Calculator");
      } else if (serviceName === "previous-draw-history") {
        setFilterBlogsParam("Previous Draw History");
      } else if (serviceName === "dash/panel/overwrite") {
        setFilterBlogsParam("Admin Panel");
      } else if (serviceName === "more-services") {
        setFilterBlogsParam("More Services");
      } else if (serviceName === "privacy-policy") {
        setFilterBlogsParam("Privacy Policy");
      } else if (serviceName === "terms-&-conditions") {
        setFilterBlogsParam("Terms and Conditions");
      } else if (serviceName === "*") {
        setFilterBlogsParam("404 Not Found");
      } else if (serviceName === "skilled-worker-stream") {
        setFilterBlogsParam("Skilled Worker Stream");
      } else if (serviceName === "priorities-program") {
        setFilterBlogsParam("Priorities Program");
      } else if (serviceName === "international-post-graduate-program") {
        setFilterBlogsParam("International Post Graduate Program");
      } else if (serviceName === "healthcare-targeted-draw") {
        setFilterBlogsParam("Healthcare Targeted Draw");
      } else if (serviceName === "entry-level-semi-skilled") {
        setFilterBlogsParam("Entry Level Semi Skilled");
      } else if (serviceName === "bc-pnp") {
        setFilterBlogsParam("BC PNP");
      } else if (serviceName === "pnp") {
        setFilterBlogsParam("PNP");
      } else if (serviceName === "rnip") {
        setFilterBlogsParam("RNIP");
      } else if (serviceName === "agri-food-pilot-program") {
        setFilterBlogsParam("Agri Food Pilot Program");
      } else if (serviceName === "pilot-programs") {
        setFilterBlogsParam("Pilot Programs");
      } else if (serviceName === "transport-occupation-targeted-draw") {
        setFilterBlogsParam("Transport Occupation Targeted Draw");
      } else if (serviceName === "trade-occupation-targeted-draw") {
        setFilterBlogsParam("Trade Occupation Targeted Draw");
      } else if (serviceName === "stem-targeted-draw") {
        setFilterBlogsParam("STEM Targeted Draw");
      } else if (serviceName === "french-targeted-draw") {
        setFilterBlogsParam("French Targeted Draw");
      } else if (serviceName === "federal-skilled-worker-program") {
        setFilterBlogsParam("Federal Skilled Worker Program");
      } else if (serviceName === "federal-skilled-trades-program") {
        setFilterBlogsParam("Federal Skilled Trades Program");
      } else if (serviceName === "canadian-experience-class") {
        setFilterBlogsParam("Canadian Experience Class");
      } else if (serviceName === "dual-intent-visa") {
        setFilterBlogsParam("Dual Intent Visa");
      } else if (serviceName === "business-visitor-visa") {
        setFilterBlogsParam("Business Visitor Visa");
      } else if (serviceName === "visitor-visa") {
        setFilterBlogsParam("Visitor Visa");
      } else if (serviceName === "temporary-resident") {
        setFilterBlogsParam("Temporary Residency");
      } else if (serviceName === "temporary-resident-permit-draft") {
        setFilterBlogsParam("Temporary Resident Permit Draft");
      } else if (serviceName === "super-visa") {
        setFilterBlogsParam("Super Visa");
      } else if (serviceName === "cby") {
        setFilterBlogsParam("CBY");
      } else if (serviceName === "common-law-partner-temporary") {
        setFilterBlogsParam("Common Law Partner Temporary");
      } else if (serviceName === "common-law-partner-permanent") {
        setFilterBlogsParam("Common Law Partner Permanent");
      } else if (serviceName === "common-law-partner-international") {
        setFilterBlogsParam("Common Law Partner International");
      } else if (serviceName === "spouse-common-law-sponsership") {
        setFilterBlogsParam("Spouse Common Law Sponsorship");
      } else if (serviceName === "restoration-status-draft") {
        setFilterBlogsParam("Restoration Status Draft");
      } else if (serviceName === "spousal-open-work-permit") {
        setFilterBlogsParam("Spousal Open Work Permit");
      } else if (serviceName === "open-work-permit-for-spouse-inland") {
        setFilterBlogsParam("Open Work Permit for Spouse Inland");
      } else if (serviceName === "flagpoling") {
        setFilterBlogsParam("Flagpoling");
      } else if (serviceName === "extensions-draft") {
        setFilterBlogsParam("Extensions Draft");
      } else if (serviceName === "study-permit-minors") {
        setFilterBlogsParam("Study Permit Minors");
      } else if (serviceName === "sds") {
        setFilterBlogsParam("SDS");
      } else if (serviceName === "non-sds") {
        setFilterBlogsParam("Non SDS");
      } else if (serviceName === "outside-canada") {
        setFilterBlogsParam("Outside Canada");
      } else if (serviceName === "visitor-to-student") {
        setFilterBlogsParam("Visitor to Student");
      } else if (serviceName === "change-college-program") {
        setFilterBlogsParam("Change College Program");
      } else if (serviceName === "inside-canada") {
        setFilterBlogsParam("Inside Canada");
      } else if (serviceName === "student-visa") {
        setFilterBlogsParam("Student Visa");
      } else if (serviceName === "ParentsGrandparents") {
        setFilterBlogsParam("Parents Grandparents");
      } else if (serviceName === "orphan") {
        setFilterBlogsParam("Orphan");
      } else if (serviceName === "lonely-canadian") {
        setFilterBlogsParam("Lonely Canadian");
      } else if (serviceName === "humanitarian-compassionate") {
        setFilterBlogsParam("Humanitarian Compassionate");
      } else if (serviceName === "dependent-children") {
        setFilterBlogsParam("Dependent Children");
      } else if (serviceName === "adoption") {
        setFilterBlogsParam("Adoption");
      } else if (serviceName === "family-reunification-sponsorship") {
        setFilterBlogsParam("Family Reunification Sponsorship");
      } else if (serviceName === "pgwp") {
        setFilterBlogsParam("PGWP");
      } else if (serviceName === "openWork-dependent-children") {
        setFilterBlogsParam("Open Work Dependent Children");
      } else if (serviceName === "open-work-vulnerable-lp") {
        setFilterBlogsParam("Open Work Vulnerable LP");
      } else if (serviceName === "francophone-mobility-program") {
        setFilterBlogsParam("Francophone Mobility Program");
      } else if (serviceName === "bridging-open-work-permit-lp") {
        setFilterBlogsParam("Bridging Open Work Permit LP");
      } else if (serviceName === "low-wage-lmia") {
        setFilterBlogsParam("Low Wage LMIA");
      } else if (serviceName === "global-stream-lmia") {
        setFilterBlogsParam("Global Stream LMIA");
      } else if (serviceName === "agriculture-stream-lmia") {
        setFilterBlogsParam("Agriculture Stream LMIA");
      } else if (serviceName === "open-work-permit") {
        setFilterBlogsParam("Open Work Permit");
      } else if (serviceName === "lmia-reviewed") {
        setFilterBlogsParam("LMIA Reviewed");
      } else if (serviceName === "reply-to-pfl-page") {
        setFilterBlogsParam("Reply to PFL Page");
      } else if (serviceName === "additional-document") {
        setFilterBlogsParam("Additional Document");
      } else if (serviceName === "reconsideration") {
        setFilterBlogsParam("Reconsideration");
      } else if (serviceName === "citizenship") {
        setFilterBlogsParam("Citizenship");
      } else if (serviceName === "pr-renewal") {
        setFilterBlogsParam("PR Renewal");
      } else if (serviceName === "work-permit") {
        setFilterBlogsParam("Work Permit");
      } else if (serviceName === "category-based-express") {
        setFilterBlogsParam("Category Based Express");
      } else if (serviceName === "agriculture-agri-food-occupation") {
        setFilterBlogsParam("Agriculture and Agri Food Occupation");
      } else if (serviceName === "in-home-caregiver-program-lp") {
        setFilterBlogsParam("In Home Caregiver Program LP");
      } else if (serviceName === "pathways-for-caregiver") {
        setFilterBlogsParam("Pathways for Caregiver");
      } else if (serviceName === "permanent-residence-pathways-caregivers-lp") {
        setFilterBlogsParam("Permanent Residence Pathways Caregivers LP");
      } else if (serviceName === "booking") {
        setFilterBlogsParam("Booking");
      } else if (serviceName === "spouse-inland") {
        setFilterBlogsParam("Spouse Inland");
      } else if (serviceName === "spouse-outland") {
        setFilterBlogsParam("Spouse Outland");
      } else if (serviceName === "same-sex") {
        setFilterBlogsParam("Same Sex");
      } else if (serviceName === "immigration-tools") {
        setFilterBlogsParam("Immigration Tools");
      } else if (serviceName === "search") {
        setFilterBlogsParam("Search");
      } else if (serviceName === "auth/panel/dash/bright") {
        setFilterBlogsParam("Auth Panel Dash Bright");
      } else if (serviceName === "temporary-resident") {
        setFilterBlogsParam("Temporary Residency");
      } else {
        setFilterBlogsParam("All");
      }
    } else {
      setFilterBlogsParam("All");
    }
  }, []);

  useEffect(() => {
    if (filterBlogsParam === "") return;

    let fetchBlogs = async () => {
      try {
        let res = await fetch(
          "https://brightlight-node.onrender.com/new-added-blogs"
        );
        let data = await res.json();

        if (data) {
          let sortedData = data.sort((a, b) => {
            let dateA = new Date(a.date);
            let dateB = new Date(b.date);
            return dateB - dateA;
          });

          let answerBlogs = sortedData.filter((item) => {
            return (
              item.tag_1 === filterBlogsParam ||
              item.tag_2 === filterBlogsParam ||
              item.tag_3 === filterBlogsParam
            );
          });

          let nonAnswerblogs = sortedData.filter((item) => {
            return (
              item.tag_1 !== filterBlogsParam &&
              item.tag_2 !== filterBlogsParam &&
              item.tag_3 !== filterBlogsParam
            );
          });

          let latestBlogs;
          console.log("answerBlogs", answerBlogs);
          console.log("nonAnswerblogs", nonAnswerblogs);

          if (answerBlogs.length >= 3) {
            latestBlogs = answerBlogs.slice(0, 3);
          } else if (answerBlogs.length == 2) {
            let answer = answerBlogs.slice(0, 2);
            if (nonAnswerblogs) {
              answer.push(nonAnswerblogs[0]);
              latestBlogs = answer;
            } else {
              answer.push(sortedData[0]);
              latestBlogs = answer;
            }
          } else if (answerBlogs.length == 1) {
            let answer = answerBlogs.slice(0, 1);

            if (nonAnswerblogs) {
              answer.push(nonAnswerblogs[0]);
              answer.push(nonAnswerblogs[1]);
              latestBlogs = answer;
            } else {
              answer.push(sortedData[0]);
              answer.push(sortedData[1]);
              latestBlogs = answer;
            }
          } else {
            if (nonAnswerblogs) {
              latestBlogs = nonAnswerblogs.slice(0, 3);
            } else {
              latestBlogs = sortedData.slice(0, 3);
            }
          }
          setBlogs(latestBlogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [filterBlogsParam]);

  return (
    <div className={styles.recentBlogs}>
      <div className={styles.recentBlogMainSection}>
        <h1>Featured Blogs</h1>
        <div className={styles.blogsGridSection}>
          {blogs?.map((item, index) => {
            let stripHtmlTags = (text) =>
              text ? text.replace(/<[^>]*>/g, "") : "";
            let truncateText = (text, numChars) => {
              let cleanedText = stripHtmlTags(text);
              return cleanedText.length <= numChars
                ? cleanedText
                : cleanedText.slice(0, numChars) + "...";
            };

            return (
              <a
                key={index}
                onClick={() => {
                  localStorage.setItem("blog_heading", item.blog_heading);
                }}
                href={
                  !item.custom_url
                    ? `/blogs/${item.blog_heading
                        .trim()
                        .toLowerCase()
                        .replace(/[^\w\s]/g, "")
                        .replace(/\s+/g, "-")}`
                    : item.custom_url
                }
                className={styles.blogs}
              >
                <img src={item.image} alt={item.blog_heading} />
                <h2>{item.blog_heading}</h2>
                <h6>
                  <b>{item.date && item.date.trim().split("T")[0]}</b>
                </h6>
                <p>{truncateText(item.blog_content, 100)}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentBlogs;
