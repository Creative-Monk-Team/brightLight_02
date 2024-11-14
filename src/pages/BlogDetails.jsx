import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/BlogsDetails.module.css";
import { useEffect, useState } from "react";
import Navbar1 from "../components/Navbar1";
import Footer1 from "../components/Footer1";
import Linkedin from "../assets/bannerLinkedinLogo.png";
import rcic from "../assets/rcic.png";
import searchIcon from "../assets/search-gray.png";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";
import Lp from "../assets/blogDetailsPic.jpg";

let BlogDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  let [blog, setBlog] = useState([]);
  let [loveneetData, setLoveneetData] = useState([]);
  let [recentBlogs, setRecentBlogs] = useState([]);
  let [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch(`https://brightlight-node.onrender.com/new-added-blogs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBlog(data);
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/loveneet")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setLoveneetData(data[0]);
        }
      })
      .catch((error) => console.log(error));

    fetch("https://brightlight-node.onrender.com/new-added-blogs/")
      .then((res) => res.json())
      .then((data) => {
        let recentBlogsFilteredData = data.filter((item) => item._id != id);
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
      navigate(`/blogs?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {blog?.metaTitle
            ? blog?.metaTitle
            : "About Us - Brightlight Immigration"}
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
            blog?.metaTitle
              ? blog?.metaTitle
              : "About Us - Brightlight Immigration"
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
          <h1>{blog.blog_heading}</h1>
          <div className={styles.loveneetSection}>
            <img src={Lp} className={styles.loveneetImage} />
            <div className={styles.loveneetContent}>
              <div className={styles.loveneetDataFlex}>
                <h3>By {loveneetData.name}</h3>

                <h5>{loveneetData.post}</h5>
              </div>
              <h4>{loveneetData.tagline}</h4>
              <div className={styles.loveneetLinks}>
                <a className={styles.imageSection} href={loveneetData.linkedin}>
                  <img src={Linkedin} />
                </a>
                <div>
                  <p className={styles.haveAQuestion}>Have Questions?</p>
                  <a
                    className={styles.imageSection}
                    href="https://api.leadconnectorhq.com/widget/booking/BVqmhNlxRMadz10ir6aM"
                  >
                    <img src={rcic} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blogsFlexSection}>
        <div className={styles.blogImgSection}>
          <img src={blog.image} />
        </div>
        <div className={styles.blogSearchSection1}>
          <div className={styles.searchDiv}>
            <input
              placeholder="Search Blogs"
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
          {recentBlogs ? (
            <div className={styles.recentBlogsSection}>
              <h4>Recent Blogs</h4>
              {recentBlogs?.map((item, index) => (
                <a
                  href={`/blogs/${item._id}`}
                  key={index}
                  className={styles.recentBlog}
                >
                  <h3>{item.blog_heading}</h3>
                </a>
              ))}
            </div>
          ) : null}
          <div className={styles.freeAssesmentSection}>
            <h4>Start You Process Today With Us!</h4>
            <p>Book A Free Assement With Us Right Now.</p>
            <a href="/booking">
              Free Assesment
            </a>
          </div>
        </div>
      </div>
      <div className={styles.blogDescriptionSection}>
        {blog.blog_content ? (
          <div dangerouslySetInnerHTML={{ __html: blog.blog_content }} />
        ) : null}
      </div>
      <div className={styles.blogSearchSection}>
        <div className={styles.searchDiv}>
          <input
            placeholder="Search Blogs"
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
        {recentBlogs ? (
          <div className={styles.recentBlogsSection}>
            <h4>Recent Blogs</h4>
            {recentBlogs?.map((item, index) => (
              <a
                href={`/blogs/${item._id}`}
                key={index}
                className={styles.recentBlog}
              >
                <h3>{item.blog_heading}</h3>
              </a>
            ))}
          </div>
        ) : null}
        <div className={styles.freeAssesmentSection}>
          <h4>Start You Process Today With Us!</h4>
          <p>Book A Free Assement With Us Right Now.</p>
          <a href="/booking">
            Free Assesment
          </a>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default BlogDetails;
