// import { useState } from "react";
// import styles from "../styles/RecentBlogs.module.css";
// import { useEffect } from "react";

// let RecentBlogs = () => {
//   let [blogs, setBlogs] = useState([]);
//   let [filterBlogsParam, setFilterBlogsParam] = useState("");
//   useEffect(() => {
//     let urlPath = window.location.pathname;
//     let serviceName = urlPath.split("/")[1];

//     if (serviceName) {
//       if (serviceName == "visitor-visa") {
//         setFilterBlogsParam("Visitor Visa");
//       } else if (serviceName == "work-permit") {
//         setFilterBlogsParam("Work Permit");
//       } else {
//         setFilterBlogsParam("All");
//       }
//     }
//     fetch("https://brightlight-node.onrender.com/new-added-blogs")
//       .then((res) => {
//         return res.json();
//       })
//       .then((data) => {
//         if (data) {
//           let sortedData = data.sort((a, b) => {
//             let dateA = new Date(a.date);
//             let dateB = new Date(b.date);
//             return dateB - dateA;
//           });
//           if (sortedData) {
//             let latestBlogs;
//             let answerBlogs = sortedData.filter((item) => {
//               if (filterBlogsParam) {
//                 return (
//                   item.tag_1 == filterBlogsParam ||
//                   item.tag_2 == filterBlogsParam ||
//                   item.tag_3 == filterBlogsParam
//                 );
//               }
//             });

//             if (answerBlogs) {
//               if (answerBlogs.length >= 3) {
//                 latestBlogs = answerBlogs.slice(0, 3);
//               }
//             } else {
//               latestBlogs = sortedData.slice(0, 3);
//             }
//             console.log("answerBlogs", answerBlogs);
//             setBlogs(latestBlogs);
//           }
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <div className={styles.recentBlogs}>
//       <div className={styles.recentBlogMainSection}>
//         <h1>Featured Blogs</h1>
//         <div className={styles.blogsGridSection}>
//           {blogs?.map((item, index) => {
//             let stripHtmlTags = (text) =>
//               text ? text.replace(/<[^>]*>/g, "") : "";

//             let truncateText = (text, numChars) => {
//               let cleanedText = stripHtmlTags(text);
//               if (cleanedText.length <= numChars) return cleanedText;
//               return cleanedText.slice(0, numChars) + "...";
//             };
//             return (
//               <a
//                 key={index}
//                 href={`/blogs/${item._id}`}
//                 className={styles.blogs}
//               >
//                 <img src={item.image} />
//                 <h2>{item.blog_heading}</h2>
//                 <h6>
//                   <b>{item.date && item.date.trim().split("T")[0]}</b>
//                 </h6>
//                 <p>{truncateText(item.blog_content, 100)}</p>
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RecentBlogs;

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

          let nonAnswerblogs = sortedData.filter((item) => {
            return (
              item.tag_1 != filterBlogsParam ||
              item.tag_2 != filterBlogsParam ||
              item.tag_3 != filterBlogsParam
            );
          });

          let answerBlogs = sortedData.filter((item) => {
            return (
              item.tag_1 === filterBlogsParam ||
              item.tag_2 === filterBlogsParam ||
              item.tag_3 === filterBlogsParam
            );
          });

          let latestBlogs;

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
                href={`/blogs/${item._id}`}
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
