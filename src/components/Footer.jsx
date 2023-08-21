import instagramIcon from "../assets/instagramIcon.png";
import twitterIcon from "../assets/twitterIcon.png";
import facebookIcon from "../assets/facebookIcon.png";

import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
        <div className={`${styles.footerContact}`}>
            <span className={`${styles.footerContactText}`}>54 11 4162-9135</span>
            <span className={`${styles.footerContactText}`}>rodrigosenabre@gmail.com</span>
            <span className={`${styles.footerContactText}`}>Av Rivadavia 9840, C1407 CABA</span>
        </div>

        <div className={`${styles.footerSocialMedia}`}>
            <span className={`${styles.footerSocialMediaText}`}>DATAHOLICS 2023| Privacy Policy| Terms & Conditions </span>
            <div className={`${styles.footerSocialMediaGroup}`}>
                <img className={`${styles.footerSocialMediaGroup}`} src={ instagramIcon } alt="instagram" />
                <img className={`${styles.footerSocialMediaGroup}`} src={ twitterIcon } alt="twitter" />
                <img className={`${styles.footerSocialMediaGroup}`} src={ facebookIcon } alt="facebook" />
            </div>
        </div>

    </footer>
  )
}

export default Footer;