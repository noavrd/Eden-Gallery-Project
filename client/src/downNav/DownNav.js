import facebook from './FB.svg';
import be from './BE.svg';
import discord from './DIS.svg';
import instagram from './IN.svg';
import twitter from './TW.svg';

export default function DownNav() {
  return (
    <div className="total-down-nav">
      <div className="first-down">
        <button className="first-down-item">Terms Of Use</button>
        <br />
        <button className="first-down-item">Privacy Policy</button>
        <br />
        <button className="first-down-item">Site Map</button>
        <br />
      </div>

      <div className="second-down">
        <button className="second-down-item">Home</button>
        <br />
        <button className="second-down-item">Collections</button>
        <br />
        <button className="second-down-item">Artworks</button>
        <br />
        <button className="second-down-item">NFT</button>
        <br />
        <button className="second-down-item">Collaborations</button>
        <br />
        <button className="second-down-item">Press</button>
        <br />
        <button className="second-down-item">About</button>
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
