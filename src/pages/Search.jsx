import React, { useState, useEffect } from "react";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import styles from "../styles/Search.module.css";

const stripHtmlTags = (text) => (text ? text.replace(/<[^>]*>/g, "") : "");

const truncateText = (text, numChars) => {
  let cleanedText = stripHtmlTags(text);
  if (cleanedText.length <= numChars) return cleanedText;
  return cleanedText.slice(0, numChars) + "...";
};

const truncateDescription = (description, wordLimit = 30) => {
  const words = description.split(" ");
  if (words.length <= wordLimit) {
    return description;
  }
  return words.slice(0, wordLimit).join(" ") + "..."; // Append ellipsis
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [servicesData, setServicesData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [blogsData, setBlogsData] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);

  const linkMappingArray = Object.entries({
    "Permanent Residency": "/permanent-residency",
    BCPNP: "/bc-pnp",
    "Visitor Visa": "/visitor-visa",
    "Study Visa": "/student-visa",
    "Family Sponsorship": "/family-reunification-sponsorship",
    "Work Permit": "/work-permit",
    Pfl: "/reply-to-pfl-page",
    "About Us": "/about-us",
    "Bcpnp Calculator": "/bcpnp-calculator",
    "Federal Skilled": "/federal-skilled",
    "Contact Us": "/contact-us",
    "Express Entry": "/express-entry",
    TransportOccupation: "/transport-occupation",
    "Category Based": "/category-based",
    "Category Based Express": "/category-based-express",
    "Clb Ilets Calculator": "/clb-ilets-calculator",
    "Previous-Draw History": "/previous-draw-history",
    "Privacy Policy": "/privacy-policy",
    "Terms Conditions": "/terms-&-conditions",
    "Skilled Worker Stream": "/skilled-worker-stream",
    "Priorities Program": "/priorities-program",
    "International Post Graduate Program":
      "/international-post-graduate-program",
    "International Graduate Program": "/international-graduate-program",
    "Health Authority Stream": "/health-authority-stream",
    "Entry Level Semi Skilled": "/entry-level-semi-skilled",
    Pnp: "/pnp",
    Rnip: "/rnip",
    "Agri Food Pilot Program": "/agri-food-pilot-program",
    "Common Law Partner Permanent": "/agriculture-agri-food-occupation",
    "Pilot Programs": "/pilot-programs",
    "Transport Occupation Targeted Draw": "/transport-occupation-targeted-draw",
    "Trade Occupation Targeted Draw": "/trade-occupation-targeted-draw",
    "Stem Targeted Draw": "/stem-targeted-draw",
    "French Targeted Draw": "/french-targeted-draw",
    "Federal Skilled Worker Program": "/federal-skilled-worker-program",
    "Federal Skilled Trades Program": "/federal-skilled-trades-program",
    "Canadian Experience Class": "/canadian-experience-class",
    "Dual Intent Visa": "/dual-intent-visa",
    "/business-visitor-visa": "/business-visitor-visa",
    "Temporary Resident Permit Draft": "/temporary-resident-permit-draft",
    "Super Visa": "/super-visa",
    Cby: "/cby",
    "Common Law Partner Temporary": "/common-law-partner-temporary",
    "Common Law Partner Permanent": "/common-law-partner-permanent",
    "Common Law Partner International":"/common-law-partner-international",
    "Restoration Status Draft": "/restoration-status-draft",
    "Spousal Open Work Permit": "/spousal-open-work-permit",
    "Spouse Common Law Partner Sponsership": "/spouse-common-law-sponsership",
    "Same Sex": "/same-sex",
    Flagpoling: "/flagpoling",
    "Extensions Draft": "Extensions Draft",
    "Study Permit Minors": "/study-permit-minors",
    Sds: "/sds",
    "Non Sds": "/non-sds",
    "Outside Cananda": "/outside-canada",
    "Visitor Student": "/visitor-to-student",
    "Change College Program": "/change-college-program",
    "Inside Canada": "/inside-canada",
    "Parents Grandparents": "/ParentsGrandparents",
    "/orphan": "Orphan",
    "Lonely Canadian": "/lonely-canadian",
    "Humanitarian Compassionate": "/humanitarian-compassionate",
    "Dependent Children": "/dependent-children",
    Adoption: "/adoption",
    Pgwp: "/pgwp",
    "OpenWork Canada Lp": "/openWork-canada-lp",
    "Open Work Vulnerable Lp": "/open-work-vulnerable-lp",
    "Francophone Mobility Program": "/francophone-mobility-program",
    "Bridging Open Work Permit Lp": "/bridging-open-work-permit-lp",
    "Low Wage Lmia": "/low-wage-lmia",
    "Global Stream Lmia": "/global-stream-lmia",
    "Agriculture Stream Lmia": "/agriculture-stream-lmia",
    "Open Work Permit": "/open-work-permit",
    "Lmia Reviewed": "/lmia-reviewed",
    "Additional Document": "/additional-document",
    Reconsideration: "/reconsideration",
    Citizenship: "/citizenship",
    "Pr Renewal": "/pr-renewal",
    "In Home Caregiver Program Lp": "/in-home-caregiver-program-lp",
    "Pathways For Caregiver": "/pathways-for-caregiver",
    "Permanent Residence Pathways Caregivers Lp":
      "/permanent-residence-pathways-caregivers-lp",
    "Immigration Tools": "/immigration-tools",
    "Temporary Residency":"/temporary-resident",
  }).map(([name, link]) => ({ name, link }));

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const queryValue = queryParams.get("q") || "";
    setQuery(queryValue);

    const fetchData = async () => {
      try {
        // Fetch services data
        const servicesRes = await fetch(
          "https://brightlight-node.onrender.com/services-section"
        );
        const services = await servicesRes.json();
        const filteredServices = [];

        if (services[0]) {
          for (let i = 1; i <= 7; i++) {
            const serviceName = services[0][`service${i}name`];
            const serviceDesc = services[0][`service${i}desc`];
            if (serviceName) {
              filteredServices.push({
                name: serviceName,
                description: serviceDesc,
                link: linkMappingArray.find(item => item.name === serviceName)?.link || "#",
              });
            }
          }
        }

        const combinedServices = [...filteredServices, ...linkMappingArray];
        const lowerCaseQuery = queryValue.toLowerCase();

        setServicesData(
          combinedServices.filter(
            (item) =>
              item.name.toLowerCase().includes(lowerCaseQuery) ||
              item.description?.toLowerCase().includes(lowerCaseQuery)
          )
        );

        const blogsRes = await fetch(
          "https://brightlight-node.onrender.com/adding-blog"
        );
        const blogs = await blogsRes.json();
        setBlogsData(
          blogs.filter(
            (item) =>
              item.blog_heading.toLowerCase().includes(lowerCaseQuery) ||
              item.blog_content.toLowerCase().includes(lowerCaseQuery)
          )
        );

        const newsRes = await fetch(
          "https://brightlight-node.onrender.com/news"
        );
        const news = await newsRes.json();
        setNewsData(
          news.filter(
            (item) =>
              item.news_heading.toLowerCase().includes(lowerCaseQuery) ||
              item.news_content.toLowerCase().includes(lowerCaseQuery)
          )
        );

        // Check if there are no results
        if (
          combinedServices.length === 0 &&
          blogs.length === 0 &&
          news.length === 0
        ) {
          setShowNoResults(true);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Show no results message after 10 seconds
    if (!showNoResults) {
      const timer = setTimeout(() => {
        if (servicesData.length === 0 && blogsData.length === 0 && newsData.length === 0) {
          setShowNoResults(true);
        }
      }, 10000);

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [servicesData, blogsData, newsData, showNoResults]);

  const hasResults =
    servicesData.length > 0 || blogsData.length > 0 || newsData.length > 0;

  return (
    <>
      <Navbar1 showBlue={true} />
      <div className={styles.searchPage}>
        <h1 className={styles.topHeading}>
          Searched Result For:{" "}
          <span className={styles.boldText}>"{query}"</span>
        </h1>

        {hasResults ? (
          <>
            {servicesData.length > 0 && (
              <div className={styles.servicesSection}>
                <h2>Services</h2>
                <div className={styles.servicesGridSection}>
                  {servicesData.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => (window.location.href = item.link)}
                    >
                      {item.name && <h3>{item.name}</h3>}
                      {item.description && (
                        <p>{truncateDescription(item.description)}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {blogsData.length > 0 && (
              <div className={styles.blogsSection}>
                <h2 className={styles.sectionHeading}>Blogs</h2>
                <div className={styles.blogsGridSection}>
                  {blogsData.map((item, index) => (
                    <a key={index} href={`/blogs/${item._id}`}>
                      {item.image && <img src={item.image} alt="Blog" />}
                      {item.blog_heading && <h3>{item.blog_heading}</h3>}
                      {item.blog_content && (
                        <p>{truncateText(item.blog_content, 100)}</p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {newsData.length > 0 && (
              <div className={styles.newsSection}>
                <h2 className={styles.sectionHeading}>News</h2>
                <div className={styles.newsGridSection}>
                  {newsData.map((item, index) => (
                    <a key={index} href={`/news/${item._id}`}>
                      {item.image && <img src={item.image} alt="News" />}
                      {item.news_heading && <h3>{item.news_heading}</h3>}
                      {item.news_content && (
                        <p>{truncateText(item.news_content, 100)}</p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={styles.noResults}>
            {showNoResults ? (
              <h2>No results found. Try searching for something different.</h2>
            ) : (
              <h2>Searching..</h2>
            )}
          </div>
        )}
      </div>
      <Footer1 />
    </>
  );
};

export default Search;