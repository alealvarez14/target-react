import React from 'react';
import PhonoImg from '../../assets/phone.png';
import AppStoreImg from '../../assets/appstore-button@3x.png';
import FbImg from '../../assets/facebook@3x.png';
import TwitterImg from '../../assets/twitter@3x.png';

const VideoDisplay = () => (
  <div className="video">
    <img className="image-centered phone-img" src={PhonoImg} alt="phone" />
    <img className="image-centered store-img" src={AppStoreImg} alt="phone" />
    <div className="social-img-container">
      <img className="social-img" src={FbImg} alt="Facebook" />
      <img className="social-img" src={TwitterImg} alt="Twitter" />
    </div>
  </div>
);

VideoDisplay.propTypes = { };

export default VideoDisplay;
