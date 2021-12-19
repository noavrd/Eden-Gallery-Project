import '../../styles/navbar.css';
import search_icon from './search_icon.svg';
import galySign from './galy-sign.svg';
import scrollerUp from './Icon -arrow-drop-down.svg';
import closeNav from '../icon-close.svg';
import CollectionsScroller from '../collections/CollectionsScroller';
import { useState } from 'react';
import Search from '../search/Search';
import { Link } from 'react-router-dom';

export default function NavBar({ showInquire, setShowInquire, artworks }) {
  const [showCollectionScroller, setShowCollectionScroller] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [exitNav, setExitNav] = useState(false);

  const clickHandler = () => {
    setShowInquire(!showInquire);
  };

  const showScroller = () => {
    setShowCollectionScroller(!showCollectionScroller);
  };

  const showSearch = () => {
    setSearch(true);
  };

  const clickMobileNav = () => {
    if (mobileOpen) {
      setExitNav(true);

      //Time out for exit navbar animation
      setTimeout(() => {
        setMobileOpen(!mobileOpen);
      }, 1000);
    } else {
      setExitNav(false);
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <div
      className={`${
        mobileOpen ? 'mobile-nav total-nav' : 'total-nav nav-closed'
      }`}>
      <div className="open-nav-mobile" onClick={() => clickMobileNav()}>
        <img src={galySign} alt="galy-sign" className="galy-sign-mobile" />
        <div className="open">
          <div className="mobile-nav-icon"></div>
          <div className="mobile-nav-icon"></div>
          <div className="mobile-nav-icon"></div>
        </div>
      </div>
      {mobileOpen ? (
        <div
          className={`all-nav-mobile ${exitNav ? 'exit-nav-animation' : ''}`}>
          <div className="close-nav-mobile">
            <div></div>
            <img
              src={closeNav}
              alt="close"
              className="close"
              onClick={() => clickMobileNav()}
            />
          </div>
          <div className="nav-mobile-items">
            <div className="search-mobile">
              <Search
                artworks={artworks}
                setSearch={setSearch}
                mobile={'mobile'}
              />
              <div className="mobile-nav-total nav-item-mobile">
                <Link to="/">
                  <span className="nav-item-mobile" id="home-item">
                    Home
                  </span>
                </Link>
                {/* onClick={() => showScroller()} */}
                <div className="nav-item-mobile">
                  <span>Collections</span>

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
                <div className="nav-item-mobile">Artworks</div>
                <div className="nav-item-mobile">NFT</div>
                <div className="nav-item-mobile">Collaborations</div>
                <div className="nav-item-mobile">Press</div>
                <div className="nav-item-mobile">About</div>
                <div className="nav-item-mobile">Contact</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}

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
        {search && (
          <Search
            artworks={artworks}
            setSearch={setSearch}
            mobile={'not-mobile'}
          />
        )}
      </div>
    </div>
  );
}
