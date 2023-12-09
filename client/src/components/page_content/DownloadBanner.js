import React from "react";
import googlePlayIcon from "../../media/googleplay.svg";
import appleStoreIcon from "../../media/appstore.svg";
import mobileImage from "../../media/small_frame.png";

import "./DownloadBanner.css";

const DownloadBanner = () => {
  return (
    <div className="download-banner">
      <div className="download-banner__content">
        <div className="flex">
          <div className="banner-text">
            <h2>Download the Official BOAS App</h2>
            <p>
              Save Jeans. Save Lives. With our App you buy vintage jeans in
              minutes. Browse, save products and order directly from the App
              with a 20% app discount
            </p>
            <div className="download-icons">
              <img src={googlePlayIcon} alt="Google Play" />
              <img src={appleStoreIcon} alt="Apple Store" />
            </div>
          </div>
          <div className="mobile-app__img">
            <img src={mobileImage} alt="Mobile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadBanner;
