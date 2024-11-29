import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import styles from "../styles/BlogsPage.module.css";
import brightSource from "../assets/bright-source-blue.png";
import paperPlane from "../assets/paperplane.png";
import { ReactComponent as Search } from "../assets/search-white.svg";
import { useEffect, useState } from "react";
import subscribe from "../assets/subscribe.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import BrightBlogs from "../assets/brightblogs.webp";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

let Blogs = () => {
  let [firstBlog, setFirstBlog] = useState([]);

  let [metaData, setMetaData] = useState([]);
  let [remainingBlogs, setRemainingBlogs] = useState([]);
  let [displayedBlogs, setDisplayedBlogs] = useState([]);
  let [quickLinksBlogs, setQuickLinksBlogs] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [sortOption, setSortOption] = useState("newest");
  let [searchQuery, setSearchQuery] = useState("");
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

    fetch("https://brightlight-node.onrender.com/new-added-blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          let lastItem = data[data.length - 1];
          setFirstBlog(lastItem);
          console.log(lastItem);
          setFirstBlogLink(
            lastItem.blog_heading
              .trim()
              .toLowerCase()
              .replace(/[^\w\s]/g, "")
              .replace(/\s+/g, "-")
          );

          let remainingItems = data.slice(0, -1);
          setRemainingBlogs(remainingItems);

          // Apply sorting and search to blogs
          let sortedBlogs = sortBlogs(remainingItems, sort);
          setDisplayedBlogs(applySearch(sortedBlogs, query));
          setQuickLinksBlogs(remainingItems.slice(0, 3));
        }
      })
      .catch((error) => console.log(error));
  }, [location.search]);

  useEffect(() => {
    // Sort or shuffle the blogs whenever sortOption, remainingBlogs, or searchQuery changes
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
        blog.blog_heading.toLowerCase().includes(query.toLowerCase()) ||
        blog.blog_content.toLowerCase().includes(query.toLowerCase())
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
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  let handleSortChange = (option) => {
    setSortOption(option);
    setCurrentPage(1); // Reset to first page on sort change
    navigate(`?search=${searchQuery}&sort=${option}`);
  };

  let handleSearchChange = (event) => {
    let query = event.target.value;
    setSearchQuery(query);
    navigate(`?search=${query}&sort=${sortOption}`);
  };

  let handleClearSearch = () => {
    setSearchQuery("");
    navigate("?sort=" + sortOption); // Clear the search parameter while keeping the sort parameter
  };
  useEffect(() => {
    fetch("https://brightlight-node.onrender.com/blogs-meta")
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
        <img src={BrightBlogs} />
        <h3>
          We're your go-to spot for easy-to-digest blogs about Canadian
          immigration. Think of us as your helpful guide, breaking down the ins
          and outs of moving to Canada with simple words and stories.
        </h3>
      </div>
      <div className={styles.searchSection}>
        <div className={styles.searchInputSection}>
          <input
            placeholder="Search Blog"
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
            {searchQuery || "All Blogs"}
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
            <h1>{firstBlog.blog_heading}</h1>
            <a
              href={!firstBlog.custom_url ? 
                `/blogs/${firstBlogLink}` : `/blogs${firstBlog.custom_url}`}
              onClick={() => {
                localStorage.setItem("blog_heading", firstBlog.blog_heading);
              }}
            >
              Read More
            </a>
          </div>
          <div>
            <img src={firstBlog.image} />
          </div>
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
                  key={index}
                  className={styles.blog}
                  onClick={() => {
                    localStorage.setItem("blog_heading", item.blog_heading);
                  }}
                  href={!item.custom_url ? 
                    `/blogs/${item.blog_heading
                    .trim()
                    .toLowerCase()
                    .replace(/[^\w\s]/g, "")
                    .replace(/\s+/g, "-")}` : item.custom_url}
                >
                  {item.image && <img src={item.image} />}

                  <div>
                    {item.tag_1 && <h4>{item?.tag_1}</h4>}

                    <h4>{item.date && item.date.trim().split("T")[0]}</h4>
                  </div>
                  {item.blog_heading && <h1>{item.blog_heading}</h1>}

                  <p>{truncateText(item?.blog_content, 100)}</p>
                </a>
              );
            })}
          </div>
        ) : (
          <p className={styles.noBlogsFound}>No blogs found for the search.</p>
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
                <h2>{item.blog_heading}</h2>
                <p>{item.date && item.date.trim().split("T")[0]}</p>
                <a
                  onClick={() => {
                    localStorage.setItem("blog_heading", item.blog_heading);
                  }}
                  href={!item.custom_url ? 
                    `/blogs/${item.blog_heading
                    .trim()
                    .toLowerCase()
                    .replace(/[^\w\s]/g, "")
                    .replace(/\s+/g, "-")}` : item.custom_url}
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

export default Blogs;
