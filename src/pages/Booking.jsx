import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/Adoption.module.css";
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
      <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        src="https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj"
        title="Booking Iframe"
        width="100%"
        loading="lazy"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen    />
         </div>
    </>
  );
};

export default Booking;
