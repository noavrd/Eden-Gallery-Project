import '../../styles/navbar.css';

import search_icon from './search_icon.svg';
import galySign from './galy-sign.svg';
import CollectionsScroller from '../collections/CollectionsScroller';
import { useState } from 'react';
import Search from '../Search';

export default function NavBar({ showInquire, setShowInquire }) {
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
      <span className="nav-item" id="home-item">
        Home
      </span>
      <span className="dropdown">
        <span className="nav-item" onClick={() => showScroller()}>
          Collections
        </span>
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
      {search && <Search />}
    </div>
  );
}
