import search_icon from './search_icon.svg';
import galySign from './galy-sign.svg';

export default function NavBar({ showInquire, setShowInquire }) {
  const clickHandler = () => {
    setShowInquire(!showInquire);
    console.log('yess');
  };
  return (
    <div className="nav">
      <img src={galySign} alt="galy-sign" className="sign" />
      <span className="nav-item" id="home-item">
        Home
      </span>
      <span className="nav-item">Collections</span>
      <span className="nav-item">Artworks</span>
      <span className="nav-item">NFT</span>
      <span className="nav-item">Collaborations</span>
      <span className="nav-item">Press</span>
      <span className="nav-item">About</span>
      <span className="nav-item">Contact</span>
      <img
        src={search_icon}
        // className="nav-item"
        alt="search-icon"
        id="search"
      />
      <span className="inquire-btn" onClick={() => clickHandler()}>
        Inquire Now
      </span>
    </div>
  );
}
