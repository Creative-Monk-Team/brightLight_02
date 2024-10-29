import React from "react";
import styles from "../styles/Footer1.module.css";
import HoursIcon from "../assets/hours.webp";
import Address from "../assets/address.webp";
import FooterLogo from "../assets/brightlight-main-logo.webp";
import FooterLogo2 from "../assets/cicc-seeklogo1.png";
import UpperFooterImage from "../assets/footer-image.webp";

import { ReactComponent as TikTokIcon } from "../assets/tiktok.svg";
import { ReactComponent as LinkedInIcon } from "../assets/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../assets/instagram.svg";
import { ReactComponent as FacebookIcon } from "../assets/facebook.svg";
import { ReactComponent as YouTubeIcon } from "../assets/youtube.svg";

const Footer1 = () => {
  return (
    <footer id="footer">
      <div className={styles.upperFooter}>
        <img src={UpperFooterImage} alt="Footer background" />
        <div>
          <h1>Start your process today</h1>
          <p>
            Get your free assessment and discover your options to immigrate to
            Canada
          </p>
        </div>
        <button
          className={styles.freeAssesmentButton}
          onClick={() =>
            (window.location.href =
              "https://api.leadconnectorhq.com/widget/booking/Tg8EPG2CVEMkQ1J0F3yj")
          }
        >
          FREE ASSESSMENT
        </button>
      </div>
      <p className={styles.upperFooterLowerText}>
        VANCOUVER BASED, SERVING GLOBALLY.
      </p>

      <div className={styles.footer}>
        <div className={styles.innerFooter}>
          <div className={`${styles.leftFooter} ${styles.desktopLeftFooter}`}>
            <div className={styles.leftDiv}>
              <div className={styles.iconHeading}>
                <img
                  src={HoursIcon}
                  alt="Hours Icon"
                  className={styles.socialIcon}
                />
                <p>OUR WORKING HOURS</p>
              </div>
              <p>Monday to Friday: 10:00 AM - 6:00 PM</p>
              <p>Saturday: By Appointment only</p>
              <p>Sunday: Closed</p>
            </div>

            <div className={styles.leftDiv}>
              <div className={styles.iconHeading}>
                <img
                  src={Address}
                  alt="Address Icon"
                  className={styles.socialIcon}
                />
                <p>OUR ADDRESS</p>
              </div>
              <p>15315 66 Ave unit 327, Surrey, BC V3S 2A1</p>
            </div>

            <div className={styles.leftDiv}>
              <div className={styles.iconHeading}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className={styles.socialIcon}
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                </svg>
                <p>GET IN TOUCH</p>
              </div>
              <p>(604) 503-3734</p>
              <p>
                <a href="mailto:info@brightlightimmigration.ca">
                  info@brightlightimmigration.ca
                </a>
              </p>
            </div>
          </div>

          <div className={styles.centerFooter}>
            <div className={styles.footerLogo}>
              <img src={FooterLogo} className={styles.footerLogo1} />
              <div className={styles.footerLogo2Para}>
                <img
                  onClick={() =>
                    (window.location.href =
                      "https://register.college-ic.ca/Public-Register-EN/RCIC_Search.aspx")
                  }
                  src={FooterLogo2}
                  className={styles.footerLogo2}
                />
                <p>RCIC License # R522969</p>
              </div>
            </div>
            {/* <img src={FooterLogo} />  // this  */}
            <div className={styles.socialMediaFooter}>
              <TikTokIcon
                onClick={() =>
                  (window.location.href =
                    "https://www.tiktok.com/@brightlightimmigration?_t=8lzyE6vJG0E&_r=1")
                }
                className={styles.socialIcon}
              />
              <LinkedInIcon
                onClick={() =>
                  (window.location.href =
                    "https://ca.linkedin.com/in/loveneet-paneswar-5b2377198")
                }
                className={styles.socialIcon}
              />
              <InstagramIcon
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/brightlightimmigration?igsh=b2xmdzh5eDdsc29p")
                }
                className={styles.socialIcon}
              />
              <FacebookIcon
                onClick={() =>
                  (window.location.href =
                    "https://www.facebook.com/brightlightimmigration")
                }
                className={styles.socialIcon}
              />
              <YouTubeIcon
                onClick={() =>
                  (window.location.href =
                    "https://www.youtube.com/channel/UC2NJoKhIOconAE_IFCxX7uA")
                }
                className={styles.socialIcon}
              />
            </div>
            <div className={styles.privacyDiv}>
              <a href="/privacy-policy">PRIVACY POLICY</a> |{" "}
              <a href="/terms-&-conditions">TERMS & CONDITION</a>
            </div>
          </div>

          <div className={`${styles.rightFooter} ${styles.rightDesktopFooter}`}>
            <p>QUICK ACCESS</p>
            <div className={styles.footerAncor}>
              <a href="/pr-renewal">PR</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/super-visa">SUPER VISA</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/visitor-visa">VISITOR VISA</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/study-permit-minors">STUDY VISA</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/pnp">PNP PROGRAM</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/family-reunification-sponsorship">FAMILY SPONSORSHIP</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/spousal-open-work-permit">SPOUSAL VISA</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/open-work-permit">OPEN WORK PERMIT</a>
              <span>.</span>
            </div>
            <div className={styles.footerAncor}>
              <a href="/reconsideration">RECONSIDERATION</a>
              <span>.</span>
            </div>
          </div>
          <div className={styles.mobileFooter}>
            <div className={styles.leftFooter}>
              <div className={styles.leftDiv}>
                <div className={styles.iconHeading}>
                  <img
                    src={HoursIcon}
                    alt="Hours Icon"
                    className={styles.socialIcon}
                  />
                  <p>OUR WORKING HOURS</p>
                </div>
                <p>Monday to Friday: 10:00 AM - 6:00 PM</p>
                <p>Saturday: By Appointment only</p>
                <p>Sunday: Closed</p>
              </div>

              <div className={styles.leftDiv}>
                <div className={styles.iconHeading}>
                  <img
                    src={Address}
                    alt="Address Icon"
                    className={styles.socialIcon}
                  />
                  <p>OUR ADDRESS</p>
                </div>
                <p>15315 66 Ave unit 327, Surrey, BC V3S 2A1</p>
              </div>

              <div className={styles.leftDiv}>
                <div className={styles.iconHeading}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className={styles.socialIcon}
                    height="18"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"></path>
                  </svg>
                  <p>GET IN TOUCH</p>
                </div>
                <p>(604) 503-3734</p>
                <p>
                  <a href="mailto:info@brightlightimmigration.ca">
                    info@brightlightimmigration.ca
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.rightFooter}>
              <p>QUICK ACCESS</p>
              <div className={styles.footerAncor}>
                <a href="/pr-renewal">PR</a>
                <span>.</span>
              </div>
              <div className={styles.footerAncor}>
                <a href="/super-visa">SUPER VISA</a>
                <span>.</span>
              </div>
              <div className={styles.footerAncor}>
                <a href="/visitor-visa">VISITOR VISA</a>
                <span>.</span>
              </div>
              <div className={styles.footerAncor}>
                <a href="/study-permit-minors">STUDY VISA</a>
                <span>.</span>
              </div>
              <div className={styles.footerAncor}>
                <a href="/pnp">PNP PROGRAM</a>
                <span>.</span>
              </div>
              <div className={styles.footerAncor}>
                <a href="/family-reunification-sponsorship">
                  FAMILY SPONSORSHIP
                </a>
                <span>.</span>
              </div>
              <div className={styles.footerAncor}>
                <a href="/spousal-open-work-permit">SPOUSAL VISA</a>
                <span>.</span>
              </div>
              <div className={styles.footerAncor}>
                <a href="/open-work-permit">OPEN WORK PERMIT</a>
                <span>.</span>
              </div>
              <div className={styles.footerAncor}>
                <a href="/reconsideration">RECONSIDERATION</a>
                <span>.</span>
              </div>
            </div>
          </div>
        </div>

        <p className={styles.copyrightHeading}>
          ALL RIGHTS RESERVED BRIGHTLIGHT IMMIGRATION ©2024
        </p>
      </div>
    </footer>
  );
};

export default Footer1;
