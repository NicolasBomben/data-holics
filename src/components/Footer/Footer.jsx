import instagramIcon from "../../assets/IG N.png";
import twitterIcon from "../../assets/TW N.png";
import facebookIcon from "../../assets/FK N.png";

import "./footer.css";
import "./footerQuerys.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-contact">
            <span className="footer-contact-text">54 11 4162-9135</span>
            <span className="footer-contact-text">rodrigosenabre@gmail.com</span>
            <span className="footer-contact-text">Av Rivadavia 9840, C1407 CABA</span>
        </div>

        <div className="footer-social-media">
            <span className="footer-social-media-text">DATAHOLICS 2023 | Privacy Policy | Terms & Conditions</span>
            <div className="footer-social-media-group">
                <img className="footer-media-img" src={ instagramIcon } alt="instagram" />
                <img className="footer-media-img" src={ twitterIcon } alt="twitter" />
                <img className="footer-media-img" src={ facebookIcon } alt="facebook" />
            </div>
        </div>

    </footer>
  )
}

export default Footer;