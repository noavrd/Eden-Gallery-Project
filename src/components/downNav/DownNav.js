import '../../styles/downNav.css';

import facebook from './FB.svg';
import be from './BE.svg';
import discord from './DIS.svg';
import instagram from './IN.svg';
import twitter from './TW.svg';

export default function DownNav() {
  return (
    <div className="total-down-nav">
      <div className="first-down">
        <div className="first-down-item">Terms Of Use</div>
        <br />
        <div className="first-down-item">Privacy Policy</div>
        <br />
        <div className="first-down-item">Site Map</div>
        <br />
      </div>

      <div className="second-down">
        <div className="second-down-item">Home</div>
        <br />
        <div className="second-down-item">Collections</div>
        <br />
        <div className="second-down-item">Artworks</div>
        <br />
        <div className="second-down-item">NFT</div>
        <br />
        <div className="second-down-item">Collaborations</div>
        <br />
        <div className="second-down-item">Press</div>
        <br />
        <div className="second-down-item">About</div>
        <br />
      </div>

      <div className="third-down">
        <div className="third-down-item">Social</div>
        <div className="all-icons-third">
          <img
            src={facebook}
            alt="facebook-icon"
            className="icons-third-down"
          />
          <img src={be} alt="be-icon" className="icons-third-down" />
          <img src={discord} alt="discord-icon" className="icons-third-down" />
          <img
            src={instagram}
            alt="instagram-icon"
            className="icons-third-down"
          />
          <img src={twitter} alt="twitter-icon" className="icons-third-down" />
        </div>
      </div>
    </div>
  );
}
