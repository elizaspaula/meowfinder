import "./Footer.scss";
import emailIcon from "../../assets/icons/envelope-solid.svg";
import locationIcon from "../../assets/icons/locationIcon.svg";
import phoneIcon from "../../assets/icons/phone-solid.svg";
import facebookIcon from "../../assets/icons/fb-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import twitterIcon from "../../assets/icons/twitter-icon.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <img src={emailIcon} className="footer__icon" />
          <p className="footer__text">customerservice@meowfinder.com</p>
        </div>
        <div className="footer__content">
          <img
            src={locationIcon}
            className="footer__icon"
            alt="location icon"
          />
          <p className="footer__text">888 North Street, Vancouver, Canada</p>
        </div>
        <div className="footer__content">
          <img src={phoneIcon} className="footer__icon" alt="location icon" />
          <p className="footer__text">+1 778-886-4055</p>
        </div>
        <div className="footer__wrapper">
          <div className="footer__social">
            <img
              src={facebookIcon}
              className="footer__media"
              alt="facebook icon"
            />
          </div>
          <div className="footer__social">
            <img
              src={twitterIcon}
              className="footer__media"
              alt="twitter icon"
            />
          </div>
          <div className="footer__social">
            <img
              src={instagramIcon}
              className="footer__media"
              alt="instagram icon"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
