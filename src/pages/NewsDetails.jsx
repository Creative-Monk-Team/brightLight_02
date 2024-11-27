import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/NewsDetails.module.css";
import { useEffect, useState } from "react";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import searchIcon from "../assets/search-gray.png";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

let NewsDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [blog, setBlog] = useState({});
  let [recentBlogs, setRecentBlogs] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://brightlight-node.onrender.com/news/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBlog(data);
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/news/")
      .then((res) => res.json())
      .then((data) => {
        let recentBlogsFilteredData = data.filter((item) => item._id !== id);
        if (recentBlogsFilteredData) {
          setRecentBlogs(recentBlogsFilteredData.slice(0, 3));
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  let handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let handleSearchClick = () => {
    if (searchQuery.trim()) {
      navigate(`/news?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {blog?.metaTitle ? blog?.metaTitle : "Brightlight Immigration"}
        </title>
        <meta
          name="description"
          content={
            blog?.metaDescription
              ? blog?.metaDescription
              : "Learn about Brightlight Immigration, our mission, values, and the dedicated team behind our immigration services. We are committed to providing honest and accurate advice to guide you through your immigration journey."
          }
        />
        <meta
          name="title"
          property="og:title"
          content={
            blog?.metaTitle ? blog?.metaTitle : "Brightlight Immigration"
          }
        />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta
          property="og:description"
          content={
            blog?.metaDescription
              ? blog?.metaDescription
              : "Discover the story behind Brightlight Immigration, our commitment to providing honest and accurate advice, and how our team can assist you with your immigration needs."
          }
        />
      </Helmet>
      <Navbar1 />
      <div className={styles.blogTopSection}>
        <div className={styles.blogsTopContentSection}>
          <h1>{blog.news_heading}</h1>
        </div>
      </div>
      <div className={styles.blogsFlexSection}>
        <div className={styles.blogImgSection}>
          <img src={blog.image} alt={blog.alt_tag_featured} title={blog.alt_tag_featured} />
        </div>
        <div className={styles.blogSearchSection1}>
          <div className={styles.searchDiv}>
            <input
              placeholder="Search News"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img
              src={searchIcon}
              onClick={handleSearchClick}
              className={styles.searchIcon}
              alt="Search"
            />
          </div>
          <div className={styles.blogTagsSection}>
            {blog.tag_1 && <p>{blog.tag_1}</p>}
            {blog.tag_2 && <p>{blog.tag_2}</p>}
            {blog.tag_3 && <p>{blog.tag_3}</p>}
          </div>
          {recentBlogs.length > 0 && (
            <div className={styles.recentBlogsSection}>
              <h4>Recent News</h4>
              {recentBlogs.map((item) => (
                <a
                  href={`/news/${item._id}`}
                  key={item._id}
                  className={styles.recentBlog}
                >
                  <h3>{item.news_heading}</h3>
                </a>
              ))}
            </div>
          )}
          <div className={styles.freeAssesmentSection}>
            <h4>Start You Process Today With Us!</h4>
            <p>Book A Free Assement With Us Right Now.</p>
            <a href="/booking" target="_blank">
              Free Assesment
            </a>
          </div>
        </div>
      </div>
      <div className={styles.blogDescriptionSection}>
        {blog.news_content ? (
          <div dangerouslySetInnerHTML={{ __html: blog.news_content }} />
        ) : null}
      </div>
      <div className={styles.blogSearchSection}>
        <div className={styles.searchDiv}>
          <input
            placeholder="Search News"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <img
            src={searchIcon}
            onClick={handleSearchClick}
            className={styles.searchIcon}
            alt="Search"
          />
        </div>
        <div className={styles.blogTagsSection}>
          {blog.tag_1 && <p>{blog.tag_1}</p>}
          {blog.tag_2 && <p>{blog.tag_2}</p>}
          {blog.tag_3 && <p>{blog.tag_3}</p>}
        </div>
        {recentBlogs.length > 0 && (
          <div className={styles.recentBlogsSection}>
            <h4>Recent News</h4>
            {recentBlogs.map((item) => (
              <a
                href={`/news/${item._id}`}
                key={item._id}
                className={styles.recentBlog}
              >
                <h3>{item.news_heading}</h3>
              </a>
            ))}
          </div>
        )}
        <div className={styles.freeAssesmentSection}>
          <h4>Start You Process Today With Us!</h4>
          <p>Book A Free Assement With Us Right Now.</p>
          <a href="/booking" target="_blank">
            Free Assesment
          </a>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default NewsDetails;
