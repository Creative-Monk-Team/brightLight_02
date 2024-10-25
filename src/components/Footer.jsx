import React from "react";
import styles from "../styles/Footer.module.css";
import HoursIcon from "../assets/hours.webp";
import Address from "../assets/address.webp";
import FooterLogo from "../assets/brightlight-main-logo.webp";
import FooterLogo2 from "../assets/cicc.png";
import UpperFooterImage from "../assets/footer-image.webp";

import { ReactComponent as TikTokIcon } from "../assets/tiktok2.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin2.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram2.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook2.svg";
import { ReactComponent as YouTubeIcon } from "../assets/youtube2.svg";

let Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.innerFooter}>
          <div className={styles.leftFooter}>
            <div className={styles.iconHeading}>
              <p className={styles.footerHeading}>OUR WORKING HOURS</p>
            </div>
            <p>Monday to Friday: 10:00 AM - 6:00 PM</p>
            <p>Saturday: By Appointment only</p>
            <p>Sunday: Closed</p>
            <div className={styles.iconHeading}>
              <p className={styles.footerHeading}>OUR ADDRESS</p>
            </div>
            <p>6638 152A St Unit #114, Surrey, BC V3S 5X5</p>
            <div className={styles.iconHeading}>
              <p className={styles.footerHeading}>GET IN TOUCH</p>
            </div>
            <p>(604) 503-3734</p>
            <p>
              <a href="mailto:info@brightlightimmigration.ca">
                info@brightlightimmigration.ca
              </a>
            </p>
          </div>

          <div className={styles.centerFooter}>
            <div className={styles.footerLogo}>
              <img
                src={FooterLogo}
                alt="FooterLogo"
                className={styles.footerLogo1}
              />
              <img
                src={FooterLogo2}
                alt="FooterLogo"
                className={styles.footerLogo2}
              />
            </div>

            <div className={styles.socialMediaFooter}>
              <div>
                <TikTokIcon className={styles.socialIcon} />
              </div>
              <div>
                <LinkedInIcon className={styles.socialIcon} />
              </div>
              <div>
                <InstagramIcon className={styles.socialIcon} />
              </div>
              <div>
                <FacebookIcon className={styles.socialIcon} />
              </div>
              <div>
                <YouTubeIcon className={styles.socialIcon} />
              </div>
            </div>
          </div>

          <div className={styles.rightFooter}>
            <p className={styles.footerHeading}>QUICK ACCESS</p>
            <div className={styles.footerAncor}>
              <a href="/">PR</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">SUPER VISA</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">VISITOR VISA</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">STUDY VISA</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">PNP PROGRAM</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">FAMILY SPONSORSHIP</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">SPOUSAL VISA</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">OPEN WORK PERMIT</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">PRIVACY POLICY</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/">TERMS & CONDITIONS</a>
              <span>.</span>
            </div>
          </div>
        </div>
        <p className={styles.copyrightHeading}>
          ALL RIGHTS RESERVED BRIGHTLIGHT IMMIGRATION ©2024
        </p>
      </div>
    </>
  );
};
export default Footer;
