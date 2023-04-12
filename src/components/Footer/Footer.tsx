import React from "react";
import styles from "./Footer.module.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { SiSpring, SiMicrosoftazure, SiTerraform } from "react-icons/si";
import { DiDotnet } from "react-icons/di";
import { FaReact, FaAngular, FaAws, FaJenkins } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
const Footer = () => {
  return (
    <Box className={styles.footertotal}>
      <Box className={styles.footer} sx={{ py: 2, maxWidth: "1300px" }}>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>About</div>
          <div>
            <p>Open Market Hub</p>
            <br />{" "}
            <div className={styles.row}>
              <SiSpring />
              <Link
                href="https://spring.io/"
                target="_blank"
                className={styles.footerLink}
              >
                Spring
              </Link>
            </div>
            <div className={styles.row}>
              <FaReact />
              <Link
                href="https://reactjs.org/"
                target="_blank"
                className={styles.footerLink}
              >
                React
              </Link>
            </div>
            <div className={styles.row}>
              <FaAws />
              <Link
                href="https://aws.amazon.com/"
                target="_blank"
                className={styles.footerLink}
              >
                AWS
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>Connect</div>
          <div>
            <div className={styles.row}>
              <div>
                <Link href="/" className={styles.footerLink}>
                  <FontAwesomeIcon
                    icon={faGithub}
                    className={styles.githubButton}
                  />
                  Github
                </Link>
              </div>
              <div>
                <Link href="/" className={styles.footerLink}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className={styles.youtubeButton}
                  />
                  Youtube
                </Link>
              </div>
              <div>
                <Link href="/" className={styles.footerLink}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className={styles.linkedinButton}
                  />
                  LinkedIn
                </Link>
              </div>
            </div>
            <br />
            <br />
            <p>Send us a message:</p>
            <br />
            <Link href="/contact">
              <button className={styles.footerButton}>contact us</button>
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionHeader}>Contact</div>
          <div>
            <div className={styles.row}>
              <CallIcon sx={{ fontSize: "25px" }} />
              <Link href="tel:+18323106869" className={styles.footerLink}>
                823-310-6869
              </Link>
            </div>
            <div className={styles.row}>
              <EmailIcon sx={{ fontSize: "25px" }} />
              <Link
                href="mailto:dhunganabibek2016@gmail.com"
                className={styles.footerLink}
              >
                opemmarkethub@gmail.com
              </Link>
            </div>
            <div className={styles.row}>
              <LocationOnIcon sx={{ fontSize: "25px" }} />
              <Link
                href="https://www.google.com/maps/place/Lubbock,+TX/@33.5778447,-101.8905558,12z/data=!4m6!3m5!1s0x86fe12add37ddd39:0x1af0042922e84287!8m2!3d33.5845617!4d-101.8456417!16zL20vMDEwNXky"
                className={styles.footerLink}
              >
                Lubbock, Texas
              </Link>
            </div>
          </div>
        </div>
      </Box>
      <div className={styles.copyright}>
        <small>&copy;2023 Open Market Hub. All Rights Reserved</small>
      </div>
    </Box>
  );
};
export default Footer;
