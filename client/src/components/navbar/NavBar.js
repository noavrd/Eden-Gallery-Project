import '../../styles/navbar.css';
import search_icon from './search_icon.svg';
import galySign from './galy-sign.svg';
import scrollerUp from './Icon -arrow-drop-down.svg';

import CollectionsScroller from '../collections/CollectionsScroller';
import { useState } from 'react';
import Search from '../search/Search';
import { Link } from 'react-router-dom';

export default function NavBar({ showInquire, setShowInquire, artworks }) {
  const [showCollectionScroller, setShowCollectionScroller] = useState(false);
  const [search, setSearch] = useState(false);

  const clickHandler = () => {
    setShowInquire(!showInquire);
  };

  const showScroller = () => {
    setShowCollectionScroller(!showCollectionScroller);
  };

  const showSearch = () => {
    setSearch(true);
  };
  return (
    <div className="nav">
      <img src={galySign} alt="galy-sign" className="sign" />
      <Link to="/">
        <span className="nav-item" id="home-item">
          Home
        </span>
      </Link>
      <span className="dropdown">
        <div onClick={() => showScroller()}>
          <span className="nav-item">Collections</span>

          <img
            src={scrollerUp}
            alt="scroller"
            className={
              showCollectionScroller
                ? 'up-scroller scroller'
                : 'down-scroller scroller'
            }
          />
        </div>
        {showCollectionScroller && <CollectionsScroller />}
      </span>

      <span className="nav-item">Artworks</span>
      <span className="nav-item">NFT</span>
      <span className="nav-item">Collaborations</span>
      <span className="nav-item">Press</span>
      <span className="nav-item">About</span>
      <span className="nav-item">Contact</span>
      {!search && (
        <img
          src={search_icon}
          // className="nav-item"
          alt="search-icon"
          id="search"
          onClick={() => showSearch()}
        />
      )}
      <span className="inquire-btn" onClick={() => clickHandler()}>
        Inquire Now
      </span>
      {search && <Search artworks={artworks} setSearch={setSearch} />}
    </div>
  );
}
