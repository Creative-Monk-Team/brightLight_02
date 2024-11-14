import React from "react";
import styles from "../styles/Booking.module.css";
import Footer1 from "../components/Footer1";
import Navbar1 from "../components/Navbar1";
import Testimonials from "../sections/Testimonials";
import RecentBlogs from "../sections/RecentBlogs";
import FAQ from "../sections/FAQ";
import ogImage from "../assets/ogImage.png";
import { Helmet } from "react-helmet-async";

const Booking = () => {
  return (
    <>
      <Navbar1 showBlue={true} />
      <div
        className={styles.parentDivBookin}
        style={{
          height: "100vh", // Full viewport height
          display: "flex",
          justifyContent: "center", // Horizontally center
          alignItems: "center", // Vertically center
          overflow: "hidden", // Prevent scrolling
        }}
      >
        <iframe
          src="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj"
          title="Booking Iframe"
          width="95%" // Adjust iframe width as needed
          height="100%" // Adjust iframe height as needed
          style={{
            border: "none",
            maxWidth: "100%", // Prevents iframe from overflowing
            maxHeight: "100%", // Prevents iframe from overflowing
          }}
          loading="lazy"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <Footer1 />
    </>
  );
};

export default Booking;
