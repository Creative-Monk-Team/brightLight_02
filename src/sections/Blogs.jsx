import styles from "../styles/Blogs.module.css";
import Slider from "react-slick";
import brightBlogs from "../assets/brightblogs.webp";
import { useEffect, useState } from "react";
import { ReactComponent as Prevarrow } from "../assets/right-arrow-blue.svg";
import { ReactComponent as Nextarrow } from "../assets/right-arrow-blue.svg";

let NextArrow = () => {
  return (
    <button className={styles.nextBlogButton}>
      <Nextarrow />
    </button>
  );
};

let PrevArrow = () => {
  return (
    <button className={styles.nextBlogButton}>
      <Prevarrow />
    </button>
  );
};

let Blogs = () => {
  let [blogs, setBlogs] = useState([]); // Initial state is an empty array
  let [data, setData] = useState([]);

  useEffect(() => {
    // Fetch blogs data, limit to 5 items
    fetch("https://brightlight-node.onrender.com/new-added-blogs")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setBlogs(data.slice(0, 5));
        } else {
          console.error("Expected an array, but got:", data);
          setBlogs([]); 
        }
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });

    
    fetch("https://brightlight-node.onrender.com/new-added-blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setData(data[0]); 
        }
      })
      .catch((error) => {
        console.error("Error fetching blog section data:", error);
      });
  }, []);

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // Utility function to remove HTML tags
  let stripHtmlTags = (text) => (text ? text.replace(/<[^>]*>/g, "") : "");

  // Truncate blog content to a specific number of characters
  let truncateText = (text, numChars) => {
    let cleanedText = stripHtmlTags(text);
    if (cleanedText.length <= numChars) return cleanedText;
    return cleanedText.slice(0, numChars) + "...";
  };

  return (
    <div className={styles.blogs}>
      <div className={styles.blogsParent}>
        <div className={styles.blogsTopSection}>
          <img src={brightBlogs} alt="Bright Blogs" />
          <div className={styles.blogsHeading}>
            <h1>{data?.heading}</h1>
            <p>{data?.description}</p>
          </div>
        </div>
        <div className={styles.sliderSection}>
          {/* Render Slider if blogs is an array and has at least one item */}
          {Array.isArray(blogs) && blogs.length > 0 ? (
            <Slider {...settings}>
              {blogs.map((item, index) => (
                <a className={styles.blog} key={index} href={`/blogs/${item._id}`}>
                  <img src={item.image} alt={item.blog_heading} />
                  <h2>{item.blog_heading}</h2>
                  <h6>
                    <b>{item.date && item.date.trim().split("T")[0]}</b>
                  </h6>
                  <p>{truncateText(item.blog_content, 100)}</p>
                  <button>Read More</button>
                </a>
              ))}
            </Slider>
          ) : (
            <p></p>  
          )}
        </div>
        <a className={styles.knowMoreAnchor} href="/blogs">
          Know More
        </a>
      </div>
    </div>
  );
};

export default Blogs;
