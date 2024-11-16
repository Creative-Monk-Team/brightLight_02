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
          console.log("latestBlogs", latestBlogs);
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
