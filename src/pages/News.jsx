import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import styles from "../styles/News.module.css";
import brightSource from "../assets/bright-source-blue.png";
import paperPlane from "../assets/paperplane.png";
import { ReactComponent as Search } from "../assets/search-white.svg";
import { useEffect, useState } from "react";
import subscribe from "../assets/subscribe.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

let News = () => {
  let [firstBlog, setFirstBlog] = useState([]);
  let [remainingBlogs, setRemainingBlogs] = useState([]);
  let [displayedBlogs, setDisplayedBlogs] = useState([]);
  let [quickLinksBlogs, setQuickLinksBlogs] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [sortOption, setSortOption] = useState("newest");
  let [searchQuery, setSearchQuery] = useState("");
  let [metaData, setMetaData] = useState([]);
  let blogsPerPage = 7;
  let location = useLocation();
  let navigate = useNavigate();
  let [firstBlogLink, setFirstBlogLink] = useState(null);

  useEffect(() => {
    let queryParams = new URLSearchParams(location.search);
    let query = queryParams.get("search") || "";
    let sort = queryParams.get("sort") || "newest";
    setSearchQuery(query);
    setSortOption(sort);

    fetch("https://brightlight-node.onrender.com/news")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          let lastItem = data[data.length - 1];
          setFirstBlog(lastItem);
          setFirstBlogLink(
            lastItem.news_heading
              .trim()
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-")
          );

          let remainingItems = data.slice(0, -1);
          setRemainingBlogs(remainingItems);

          let sortedBlogs = sortBlogs(remainingItems, sort);
          setDisplayedBlogs(applySearch(sortedBlogs, query));
          setQuickLinksBlogs(remainingItems.slice(0, 3));
        }
      })
      .catch((error) => console.log(error));
  }, [location.search]);

  useEffect(() => {
    let sortedBlogs = sortBlogs(remainingBlogs, sortOption);
    setDisplayedBlogs(applySearch(sortedBlogs, searchQuery));
  }, [sortOption, remainingBlogs, searchQuery]);

  let sortBlogs = (blogs, option) => {
    switch (option) {
      case "newest":
        return [...blogs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "relevance":
        return shuffleArray([...blogs]);
      default:
        return blogs;
    }
  };

  let shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  let applySearch = (blogs, query) => {
    if (!query) return blogs;
    return blogs.filter(
      (blog) =>
        blog.news_heading.toLowerCase().includes(query.toLowerCase()) ||
        blog.news_content.toLowerCase().includes(query.toLowerCase())
    );
  };

  let indexOfLastBlog = currentPage * blogsPerPage;
  let indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  let currentBlogs = displayedBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(displayedBlogs.length / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  let handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  let handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1);
    navigate(`?search=${searchQuery}&sort=${option}`);
  };

  let handleSearchChange = (event) => {
    let query = event.target.value;
    setSearchQuery(query);
    navigate(`?search=${query}&sort=${sortOption}`);
  };

  let handleClearSearch = () => {
    setSearchQuery("");
    navigate("?sort=" + sortOption);
  };
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/newsPageMeta")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data) {
          setMetaData(data[0]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Helmet>
        <title>
          {metaData?.metaTitle
            ? metaData?.metaTitle
            : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            metaData?.metaDesc
              ? metaData?.metaDesc
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            metaData?.metaOgTitle
              ? metaData?.metaOgTitle
              : " Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            metaData?.metaOgDesc
              ? metaData?.metaOgDesc
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
        <meta
          name="Keywords"
          content={
            metaData?.metaKeywords
              ? metaData?.metaKeywords
              : "Brightlight Immigration, Immigration Services, Mission, Team"
          }
        />
      </Helmet>
      <Navbar1 showBlue={true} />
      <div className={styles.blogsTopSection}>
        <img src={brightSource} />
        <h3>
          Find the newest Canadian immigration news on our website. We give you
          the latest updates, changes in rules, and important stories. Stay
          informed about your immigration process by checking our site every
          day. We explain everything clearly and briefly to help you understand.
        </h3>
      </div>
      <div className={styles.searchSection}>
        <div className={styles.searchInputSection}>
          <input
            placeholder="Search News"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className={styles.searchRightSection}>
            {searchQuery && (
              <p onClick={handleClearSearch} className={styles.clearButton}>
                Clear
              </p>
            )}
            <div>
              <Search width={20} height={20} />
            </div>
          </div>
        </div>
        <div className={styles.searchBottomNavigationSection}>
          <p>
            Displaying{" "}
            {currentBlogs.length > 0
              ? `1-${Math.min(currentBlogs.length, displayedBlogs.length)} `
              : "0 "}
            results out of {displayedBlogs.length} for{" "}
            {searchQuery || "All News"}
          </p>
          <div>
            <p>
              Sort By{" "}
              <button
                className={styles.sortButtonHover}
                onClick={() => handleSortChange("newest")}
              >
                Newest
              </button>{" "}
              <button
                className={styles.sortButtonHover}
                onClick={() => handleSortChange("relevance")}
              >
                {" "}
                Relevance{" "}
              </button>
            </p>
          </div>
        </div>
      </div>
      {firstBlog ? (
        <div className={styles.firstBlog}>
          <div className={styles.firstBlogContentSection}>
            <h4>{firstBlog.date && firstBlog.date.trim().split("T")[0]}</h4>
            {firstBlog.news_heading && <h1>{firstBlog.news_heading}</h1>}
            <a
              href={
                !firstBlog.custom_url
                  ? `/news/${firstBlogLink}`
                  : `/news${firstBlog.custom_url}`
              }
              onClick={() => {
                localStorage.setItem("news_heading", firstBlog.news_heading);
              }}
            >
              Read More
            </a>
          </div>
          <div>{firstBlog.image && <img src={firstBlog.image} />}</div>
        </div>
      ) : null}
      <div className={styles.blogsResultSection}>
        {currentBlogs.length > 0 ? (
          <div className={styles.blogsGridSection}>
            {currentBlogs.map((item, index) => {
              let stripHtmlTags = (text) =>
                text ? text.replace(/<[^>]*>/g, "") : "";

              let truncateText = (text, numChars) => {
                let cleanedText = stripHtmlTags(text);
                if (cleanedText.length <= numChars) return cleanedText;
                return cleanedText.slice(0, numChars) + "...";
              };
              return (
                <a
                  onClick={() => {
                    localStorage.setItem("news_heading", item.news_heading);
                  }}
                  key={index}
                  className={styles.blog}
                  href={
                    !item.custom_url
                      ? `/news/${item.news_heading
                          .trim()
                          .toLowerCase()
                          .replace(/[^\w\s]/g, "")
                          .replace(/\s+/g, "-")}`
                      : `/news${item.custom_url}`
                  }
                >
                  {item.image && <img src={item.image} />}

                  <div>
                    {item?.tag_1 && <h4>{item?.tag_1}</h4>}
                    <h4>{item.date && item.date.trim().split("T")[0]}</h4>
                  </div>
                  <h1>{item.news_heading}</h1>
                  <p>{truncateText(item?.news_content, 100)}</p>
                </a>
              );
            })}
          </div>
        ) : (
          <p className={styles.noBlogsFound}>No News found for the search.</p>
        )}
        <div className={styles.rightSection}>
          <div className={styles.subscribeSection}>
            <img className={styles.plane} src={paperPlane} />
            <h3>Get the latest News Delivered to your mail!</h3>
            <img src={subscribe} className={styles.subscribe} />
          </div>
          <div className={styles.quickLinksSection}>
            <h3>Quick Links</h3>
            {quickLinksBlogs?.map((item, index) => (
              <div key={index}>
                {item.news_heading && <h2>{item.news_heading}</h2>}
                <p>{item.date && item.date.trim().split("T")[0]}</p>
                <a
                  onClick={() => {
                    localStorage.setItem("news_heading", item.news_heading);
                  }}
                  href={
                    !item.custom_url
                      ? `/news/${item.news_heading
                          .trim()
                          .toLowerCase()
                          .replace(/[^\w\s]/g, "")
                          .replace(/\s+/g, "-")}`
                      : `/news${item.custom_url}`
                  }
                >
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.pagination}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => handlePageChange(number)}
            className={currentPage === number ? styles.active : ""}
          >
            {number}
          </button>
        ))}
      </div>
      <Footer1 />
    </>
  );
};

export default News;
