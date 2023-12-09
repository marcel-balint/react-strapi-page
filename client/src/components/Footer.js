import React from "react";
import logoIcon from "../media/boas_logo.png";
import iconIdeal from "../media/icon_ideal.png";
import iconPayPal from "../media/icon_pay_pal.svg";
import iconApplePay from "../media/icon_apple_pay.svg";
import iconGooglePay from "../media/icon_google_pay.svg";
import iconMastercard from "../media/icon_mastercard.png";
import iconMaestro from "../media/icon_maestro.svg";
import iconVisa from "../media/icon_visa.svg";
import iconKlarna from "../media/icon_klarna.svg";
import iconAmex from "../media/icon_amex.svg";
import iconAmazonPay from "../media/icon_amazon_pay.svg";
import iconShopPay from "../media/icon_shop_pay.svg";
import iconGooglePlay from "../media/googleplay.svg";
import iconAppStore from "../media/appstore.svg";
import iconCopyright from "../media/icon_copyright.svg";
import iconFacebook from "../media/icon_facebook.svg";
import iconInsa from "../media/icon_instagram.svg";
import iconTikTok from "../media/icon_tik_tok.svg";
import iconLinkedIn from "../media/icon_linkedin.svg";
import iconSpotify from "../media/icon_spotify.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-top__text">
            <h3>Subscribe to our newsletter</h3>
            <p>We will send you updates and sustainability news</p>
          </div>
          <div className="footer-top_input">
            <input type="text" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="footer-main">
          <div className="footer-main__present">
            <div className="footer-main__logo">
              <img src={logoIcon} alt="Logo" />
              <h3>BOAS - Save Jeans. Save Lives.</h3>
            </div>
            <p>
              You've made it to the end! Thanks for taking the time. If you're
              here because you're lost, feel free to <a href="#">contact us</a>
              and we'll get you back on track.
            </p>
            <div className="footer-main__icons">
              <img src={iconIdeal} alt="Ideal" />
              <img src={iconPayPal} alt="PayPal" />
              <img src={iconApplePay} alt="ApplePay" />
              <img src={iconGooglePay} alt="GooglePay" />
              <img src={iconMastercard} alt="Mastercard" />
              <img src={iconMaestro} alt="Maestro" />
              <img src={iconVisa} alt="Visa" />
              <img src={iconKlarna} alt="Klarna" />
              <img src={iconAmex} alt="Amex" />
              <img src={iconAmazonPay} alt="Amazon" />
              <img src={iconShopPay} alt="ShopPay" />
            </div>
          </div>
          <div className="footer-main__about">
            <h2>About BOAS</h2>
            <ul>
              <li>Mission</li>
              <li>FAQs</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Shipping and Returns</li>
            </ul>
          </div>
          <div className="press">
            <h2>Brands and Press</h2>
            <ul>
              <li>Press</li>
              <li>Affiliate Program</li>
            </ul>
          </div>
          <div className="download-app">
            <h2>Download the BOAS app</h2>
            <img src={iconGooglePlay} alt="GooglePlay" />
            <img src={iconAppStore} alt="AppStore" />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="terms">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms and Conditions</a>
          </div>
          <div className="copyright">
            <img src={iconCopyright} alt="Copyright" />
            <p>2023 BOAS - Save Jeans. Save Lives.</p>
          </div>
          <div className="social">
            <img src={iconFacebook} alt="Facebook" />
            <img src={iconInsa} alt="Instargam" />
            <img src={iconTikTok} alt="TikTok" />
            <img src={iconLinkedIn} alt="LinkedIn" />
            <img src={iconSpotify} alt="Spotify" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
